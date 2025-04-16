import {
  Product,
  productDetail,
  ProductUnit
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
  sizeCategoryId: string;
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


export async function getProductDetail({ productSlug }: {
  productSlug: string | undefined;
}):Promise<productDetail> {
  //product
  if(!productSlug) throw new Error("product does not exist")
  const { data, error } = await supabase
    .from("product_detail_view")
    .select("*")
    .eq("slug", productSlug)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}


export async function getProductVariantSizes({
  variantId,
}: {
  variantId: string;
}){
  //product

  const { data, error } = await supabase
    .from("product_units")
    .select("size_id")
    .eq("variant_id", variantId);

  if (error) {
    console.error(error);
    throw new Error("sizes not found!");
  }

  const sizes = data.map((item) => item.size_id);

  
  return sizes;
}


export async function getProductUnit({
  variantId,
  sizeId,
}: {
  variantId: string;
  sizeId?: string;
}): Promise<ProductUnit> {
  if(!sizeId) throw new Error("size undefined")
  //product
  const { data, error } = await supabase
    .from("product_units")
    .select("*")
    .eq("variant_id", variantId)
    .eq("size_id", sizeId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}



export async function getProductVariantByColor({
  productId,
  colorId,
}:{
  productId: string;
  colorId: string;
} ) {
  //product
  const { data, error } = await supabase
  .from("product_variants")
  .select(`
    slug,
    product_units!inner(id)
  `)
  .eq("product_id", productId)
  .eq("color_id", colorId)
  .limit(1, { foreignTable: 'product_units' }) // Only get first unit
  .single();


  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const filteredData = {
    slug:data.slug,
    unit_id:data.product_units[0].id
  }

  return filteredData;
}




