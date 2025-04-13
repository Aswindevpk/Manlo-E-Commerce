import {
  Category,
  ProductVariation,
} from "../types";
import supabase from "./supabase";

export async function getSubCategories({
  categorySlug,
}: {
  categorySlug: string | undefined;
}): Promise<Category[]> {
  if (!categorySlug) {
    throw new Error("Category slug is required!");
  }

  // Step 1: Get Parent Category ID
  const { data: mainCategory, error: error1 } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single(); // Fetch only one result

  if (error1 || !mainCategory) {
    console.error(error1);
    throw new Error("Main Category not found!");
  }

  // Step 2: Use Parent ID to Fetch Subcategories
  const { data, error } = await supabase
    .from("categories")
    .select("*,parent:parent_id(id,slug,name)")
    .eq("parent_id", mainCategory.id);

  if (error || !data) {
    console.error(error);
    throw new Error("Subcategories not found!");
  }

  return data;
}


export async function searchProducts(query: string) {
  const { data, error } = await supabase
  .from("product_variant_flat")
  .select("*")
  .ilike("name", `%${query}%`);

  if (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Could not fetch search results.");
  }


  const filteredData = data.map((item) => ({
    id: item.id,
    productName: item.name,
    product_id: item.product_id,
    price: item.price,
    brand: item.brands_name,
    is_new: item.is_new,
    images: item.product_variant_images,
  }));

  return filteredData
}

export async function getMainCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .is("parent_id", null);

  if (error || !data) {
    console.error(error);
    throw new Error("Main categories not found!");
  }

  return data;
}

interface getProductProps {
  productId: string | undefined;
}

export async function getProduct({ productId }: getProductProps) {
  //product
  const { data, error } = await supabase
    .from("product")
    .select("*,brand(*),productCategory(*))")
    .eq("id", productId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductColorsProps {
  productId: string;
}

interface Color{
  hex_code:string;
  id:string;
  name:string;
}

type ColorResponse = {
  colors: Color[];
};

export async function getProductColors({
  productId,
}: getProductColorsProps):Promise<Color[]> {
  //product
  const { data, error } = await supabase
    .from("product_variants")
    .select("colors(id,name, hex_code)")
    .eq("product_id", productId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const colors = (data as ColorResponse[]).map(item => item.colors).flat();

  return colors;
}

interface getProductSizesProps {
  sizeCategoryId: number;
}

export async function getProductSizes({
  sizeCategoryId,
}: getProductSizesProps) {
  //product
  const { data, error } = await supabase
    .from("sizes")
    .select("id,name")
    .eq("category_id", sizeCategoryId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductItemProps {
  productItemId: string;
}

export async function getProductItem({ productItemId }: getProductItemProps) {
  //product
  const { data, error } = await supabase
    .from("product_variants")
    .select("*,products(*,brands(*),categories(*))")
    .eq("id", productItemId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const formattedData = {
    id: data.id,
    name: data.name,
    color_id: data.color_id,
    product_id: data.product_id,
    sku: data.sku,
    price: data.products.price,
    brand: data.products.brands,
    description: data.products.description,
    care_instruction: data.products.care_instruction,
    category: data.products.categories,
  };

  return formattedData;
}

interface getProductItemSizesProps {
  productItemId: number;
}

export async function getProductItemSizes({
  productItemId,
}: getProductItemSizesProps){
  //product

  const { data, error } = await supabase
    .from("product_units")
    .select("size_id")
    .eq("variant_id", productItemId);

  if (error) {
    console.error(error);
    throw new Error("sizes not found!");
  }

  const sizes = data.map((item) => item.size_id);

  
  return sizes;
}

interface getProductVariationProps {
  productItemId: number;
  sizeId?: number;
}

export async function getProductVariation({
  productItemId,
  sizeId,
}: getProductVariationProps): Promise<ProductVariation> {
  //product
  const { data, error } = await supabase
    .from("product_units")
    .select("*")
    .eq("variant_id", productItemId)
    .eq("size_id", sizeId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductItemIdByColorProps {
  productId: string;
  colorId: string;
}

export async function getProductItemIdByColor({
  productId,
  colorId,
}: getProductItemIdByColorProps) {
  //product
  const { data, error } = await supabase
    .from("product_variants")
    .select("id")
    .eq("product_id", productId)
    .eq("color_id", colorId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductImagesProps {
  productItemId: string | undefined;
}

export async function getProductImages({
  productItemId,
}: getProductImagesProps) {
  //product
  const { data, error } = await supabase
    .from("product_variant_images")
    .select("*")
    .eq("variant_id", productItemId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}
