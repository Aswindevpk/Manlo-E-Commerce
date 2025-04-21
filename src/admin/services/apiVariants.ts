import supabase, { supabaseUrl } from "../../services/supabase";
import { Variant } from "../types";
import { slugify } from "../utils/helpers";

export async function createVariant({
  newVariant,
}: {
  newVariant: Variant;
}): Promise<Variant> {
  const { images, ...variant } = newVariant;

  if (!(images[0].image_url && images[1].image_url instanceof File))
    throw new Error("Invalid image");

  //create variant
  const { data, error } = await supabase
    .from("product_variants")
    .insert({ ...variant, slug: slugify(variant.name) })
    .select()
    .single();

  if (error) throw new Error(error.message);

  //name creation for image
  const sanitize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9-_]/g, "-");

  images.map((image, index) => {
    const image_name = `${Math.random()}-${sanitize(data.name)}-${index}`;
    const imagePath = `${supabaseUrl}/storage/v1/object/public/manlo/${image_name}`;
    image.image_name = image_name;
    image.image_path = imagePath;
    image.variant_id = data.id;
  });

  //restructuring for images
  const varientImages = images.map((image) => {
    return { variant_id: image.variant_id, image_url: image.image_path };
  });

  //add to images table with new varient id
  const { error: imageError } = await supabase
    .from("product_variant_images")
    .insert(varientImages)
    .select("*");

  if (imageError) throw new Error(imageError.message);

  //upload images
  Promise.all(
    images.map(async (image) => {
      const { error } = await supabase.storage
        .from("manlo")
        .upload(image.image_name as string, image.image_url as File);

      if (error) {
        await supabase
          .from("product_variant_images")
          .delete()
          .eq("variant_id", data.id);
        await supabase.from("product_variants").delete().eq("id", data.id);

        throw new Error(
          "Category image could not be uploaded, and the category was not created."
        );
      }
    })
  );

  return data;
}

export async function updateVariant({
  id,
  newVariant,
}: {
  id: string;
  newVariant: Variant;
}): Promise<Variant> {
  const { images, color, ...variant } = newVariant;

  console.log(color)
  const { data, error } = await supabase
    .from("product_variants")
    .update({ ...variant, slug: slugify(variant.name) })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  //name creation for image
  const sanitize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9-_]/g, "-");

  const imagesToUpdate = images.filter(
    (image) => image.image_url instanceof File
  );

  if (imagesToUpdate.length > 0) {
    imagesToUpdate.map((image, index) => {
      const image_name = `${Math.random()}-${sanitize(data.name)}-${index}`;
      const imagePath = `${supabaseUrl}/storage/v1/object/public/manlo/${image_name}`;
      image.image_name = image_name;
      image.image_path = imagePath;
      image.variant_id = data.id;
    });

    Promise.all(
      imagesToUpdate.map(async (image) => {
        //add to images table with new varient id
        const { error: imageError } = await supabase
          .from("product_variant_images")
          .update({ image_url: image.image_path })
          .eq("id", image.id);

        if (imageError) throw new Error(imageError.message);
      })
    );

    //upload images
    Promise.all(
      imagesToUpdate.map(async (image) => {
        const { error } = await supabase.storage
          .from("manlo")
          .upload(image.image_name as string, image.image_url as File);

        if (error) {
          throw new Error(
            "Category image could not be uploaded, and the category was not created."
          );
        }
      })
    );
  }

  return data;
}

export async function getVariants({
  productId,
}: {
  productId: string | undefined;
}): Promise<Variant[]> {
  if (!productId) throw new Error("productId not found");
  const { data, error } = await supabase
    .from("product_variants")
    .select("*,color:colors(*),images:product_variant_images(id,image_url)")
    .eq("product_id", productId);

  if (error) throw new Error(error.message);
  return data;
}

export async function getVariant({
  variantId,
}: {
  variantId: string | undefined;
}): Promise<Variant> {
  if (!variantId) throw new Error("ProductId not found!");
  const { data, error } = await supabase
    .from("product_variants")
    .select("*,color:colors(*),images:product_variant_images(id,image_url)")
    .eq("id", variantId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
