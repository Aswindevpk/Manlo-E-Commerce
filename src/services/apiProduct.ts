import {
  Category,
  Product,
  ProductColor,
  ProductItem,
  ProductSize,
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
    .from("productCategory")
    .select("id")
    .eq("slug", categorySlug)
    .single(); // Fetch only one result

  if (error1 || !mainCategory) {
    console.error(error1);
    throw new Error("Main Category not found!");
  }

  // Step 2: Use Parent ID to Fetch Subcategories
  const { data, error } = await supabase
    .from("productCategory")
    .select("*")
    .eq("parent_category_id", mainCategory.id); // ✅ Pass parent ID dynamically

  if (error || !data) {
    console.error(error);
    throw new Error("Subcategories not found!");
  }

  return data;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("productItem")
    .select("id,name,color(*),product(price,brand(name)),productImage(image_url)")
    .ilike("name", `%${query}%`);

  if (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Could not fetch search results.");
  }

  const filteredData = data.map((item) => ({
    id:item.id,
    productName: item.name,
    color:item.color,
    price:item.product.price,
    brand:item.product.brand.name,
    images:item.productImage,
  }));

  return filteredData;
}

export async function getMainCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("productCategory")
    .select("*")
    .is("parent_category_id", null);

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
  productId: number;
}

export async function getProductColors({
  productId,
}: getProductColorsProps): Promise<ProductColor[]> {
  //product
  const { data, error } = await supabase
    .from("productItem")
    .select("color(id,name, hex_code)")
    .eq("product_id", productId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const colors = data.map((item) => item.color);

  return colors;
}

interface getProductSizesProps {
  sizeCategoryId: number;
}

export async function getProductSizes({
  sizeCategoryId,
}: getProductSizesProps): Promise<ProductSize[]> {
  //product
  const { data, error } = await supabase
    .from("sizeOption")
    .select("id,name,sort_order")
    .eq("size_category_id", sizeCategoryId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductItemProps {
  productItemId: number;
}

export async function getProductItem({
  productItemId,
}: getProductItemProps): Promise<ProductItem> {
  //product
  const { data, error } = await supabase
    .from("productItem")
    .select("*,product(*,brand(*),productCategory(*)),orderLine(userReview(rating_value))")
    .eq("id", productItemId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductItemSizesProps {
  productItemId: number;
}

export async function getProductItemSizes({
  productItemId,
}: getProductItemSizesProps): Promise<ProductSize[]> {
  //product

  const { data, error } = await supabase
    .from("productVariation")
    .select("sizeOption(id)")
    .eq("product_item_id", productItemId)
    .gt("qty_in_stock", 0);

  if (error) {
    console.error(error);
    throw new Error("sizes not found!");
  }

  const sizes = data.map((item) => item.sizeOption);
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
    .from("productVariation")
    .select("*")
    .eq("product_item_id", productItemId)
    .eq("size_id", sizeId)
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}

interface getProductItemIdByColorProps {
  productId: number;
  colorId: number;
}

export async function getProductItemIdByColor({
  productId,
  colorId,
}: getProductItemIdByColorProps) {
  //product
  const { data, error } = await supabase
    .from("productItem")
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
  productItemId: number | undefined;
}

export async function getProductImages({
  productItemId,
}: getProductImagesProps) {
  //product
  const { data, error } = await supabase
    .from("productImage")
    .select("*")
    .eq("product_item_id", productItemId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  return data;
}
