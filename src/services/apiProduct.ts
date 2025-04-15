import {
  Product,
  ProductVariation,
} from "../types";
import supabase from "./supabase";


export async function searchProducts(query: string):Promise<Product[]> {
  const { data, error } = await supabase
  .from("product_view")
  .select("*")
  .ilike("product_name", `%${query}%`);

  if (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Could not fetch search results.");
  }

  return data;
}



export async function getProduct({ productId }:{
  productId: string | undefined;
}) {
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
}: {
  productId: string;
}):Promise<Color[]> {
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


export async function getProductSizes({
  sizeCategoryId,
}: {
  sizeCategoryId: number;
}) {
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



export async function getProductItem({ productItemId }: {
  productItemId: string;
}) {
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


export async function getProductItemSizes({
  productItemId,
}: {
  productItemId: number;
}){
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


export async function getProductVariation({
  productItemId,
  sizeId,
}: {
  productItemId: number;
  sizeId?: number;
}): Promise<ProductVariation> {
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



export async function getProductItemIdByColor({
  productId,
  colorId,
}:{
  productId: string;
  colorId: string;
} ) {
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


export async function getProductImages({
  productItemId,
}: {
  productItemId: string | undefined;
}) {
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
