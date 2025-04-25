import { Product, productDetail, ProductUnit } from "../types";
import Filter from "../features/Filter/Filter";
import supabase from "./supabase";

interface Filter {
  field: string;
  values: string[] | null; // Support both string and number filters
}

interface SortBy {
  field: string;
  direction: string;
}

interface searchProductsProps {
  filters?: Filter[];
  sortBy?: SortBy;
  searchQuery: string;
  collectionSlug?: string | null;
}

export async function searchProducts({
  collectionSlug,
  searchQuery,
  filters,
  sortBy,
}: searchProductsProps): Promise<Product[]> {
  // This is base query
  let query = supabase
    .from("product_search_view")
    .select("product_name,product_id,price,brand,is_new,slug,images,is_new", {
      count: "exact",
    });

  //filter by collection slug
  if (collectionSlug) {
    query = query.or(`type.eq.${collectionSlug},category.eq.${collectionSlug}`);
  }

  //add searchQuery if any
  if (searchQuery) {
    query = query.ilike("product_name", `%${searchQuery}%`);
  }

  // Apply filter dynamically
  if (filters && filters?.length > 0) {
    filters.forEach((filter: Filter) => {
      if (filter.values) {
        query = query.in(filter.field, filter.values);
      }
    });
  }

  //apply sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  //use count for later pagination
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Could not fetch search results.");
  }

  return data;
}

export async function getProducts({
  isNew = false,
  brand = null,
}: {
  isNew?: boolean;
  brand?: string | null;
}): Promise<Product[]> {
  // This is base query
  let query = supabase
    .from("product_search_view")
    .select("product_name,product_id,price,brand,is_new,slug,images,is_new,category");

  if (isNew) {
    query = query.eq("is_new", true);
  }

  //match to parent categoryId
  if (brand) {
    query = query.eq("brand", brand);
  }

  const { data, error } = await query.limit(10);

  if (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Could not fetch search results.");
  }

  return data;
}

interface Color {
  hex_code: string;
  id: string;
  name: string;
}

type ColorResponse = {
  colors: Color[];
};

export async function getProductColors({
  productId,
}: {
  productId: string;
}): Promise<Color[]> {
  //product
  const { data, error } = await supabase
    .from("product_variants")
    .select("colors(id,name, hex_code)")
    .eq("product_id", productId);

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const colors = (data as ColorResponse[]).map((item) => item.colors).flat();

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

export async function getProductDetail({
  productSlug,
}: {
  productSlug: string | undefined;
}): Promise<productDetail> {
  //product
  if (!productSlug) throw new Error("product does not exist");
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
}) {
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
  if (!sizeId) throw new Error("size undefined");
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
}: {
  productId: string;
  colorId: string;
}) {
  //product
  const { data, error } = await supabase
    .from("product_variants")
    .select(
      `
    slug,
    product_units!inner(id)
  `
    )
    .eq("product_id", productId)
    .eq("color_id", colorId)
    .limit(1, { foreignTable: "product_units" }) // Only get first unit
    .single();

  if (error || !data) {
    console.error(error);
    throw new Error("Product not found!");
  }

  const filteredData = {
    slug: data.slug,
    unit_id: data.product_units[0].id,
  };

  return filteredData;
}
