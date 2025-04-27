import supabase, { supabaseUrl } from "../../services/supabase";
import { Category } from "../types";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*,parent:parent_id(id,name)");

  if (error) throw new Error(error.message);
  return data;
}

export async function createCategory({
  newData,
}: {
  newData: Category;
}): Promise<Category> {
  if (!(newData.image instanceof File)) throw new Error("Invalid image");

  //name creation for image
  const sanitize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9-_]/g, "-");

  const imageName = `${Math.random()}-${sanitize(newData.name)}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/manlo/${imageName}`;

  //create category
  const { data, error } = await supabase
    .from("categories")
    .insert({ ...newData, image: imagePath })
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  //image upload
  const { error: storageError } = await supabase.storage
    .from("manlo")
    .upload(imageName, newData.image);

  //if storageError delete the created category
  if (storageError) {
    await supabase.from("categories").delete().eq("id", data.id);

    throw new Error(
      "Category image could not be uploaded, and the category was not created."
    );
  }

  return data;
}


export async function updateCategory({
  id,
  newData,
}: {
  id: string;
  newData: Category;
}): Promise<Category> {
  if (!newData.image) throw new Error("no image found.");
  const isPrevImage =
    typeof newData.image === "string" &&
    newData.image?.startsWith?.(supabaseUrl);

  //name creation for image
  const sanitize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9-_]/g, "-");

  const imageName = `${Math.random()}-${sanitize(newData.name)}`;
  const imagePath = isPrevImage
    ? (newData.image as string)
    : `${supabaseUrl}/storage/v1/object/public/manlo/${imageName}`;

  const { data, error } = await supabase
    .from("categories")
    .update({ ...newData, image: imagePath })
    .eq("id", id)
    .select("*,parent:parent_id(id,name)")
    .single();

  if (error) throw new Error(error.message);

  //new Image upload
  if (!isPrevImage) {
    //image upload
    const { error: storageError } = await supabase.storage
      .from("manlo")
      .upload(imageName, newData.image);

    //if storageError delete the created category
    if (storageError) {
      await supabase.from("categories").delete().eq("id", data.id);

      throw new Error(
        "Category image could not be uploaded, and the category was not created."
      );
    }
  }

  return data;
}

export async function getCategory({
  categoryId,
}: {
  categoryId: string | undefined;
}): Promise<Category> {
  const { data, error } = await supabase
    .from("categories")
    .select("*,parent:parent_id(id,name)")
    .eq("id", categoryId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}


export async function UpdateCategoryListing({
  categoryId,
  isListed,
}: {
  categoryId: string | undefined;
  isListed: boolean;
}): Promise<Category> {
  const { data, error } = await supabase
    .from("categories")
    .update({ is_listed: isListed })
    .eq("id", categoryId)
    .select("*, parent:parent_id(id, name)")
    .single();

  if (error) throw new Error(error.message);
  return data;
}

