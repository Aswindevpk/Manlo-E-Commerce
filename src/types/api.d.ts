export type productDetail = {
  id: string;
  product_id: string;
  images: {
    image_url: string;
  }[];
  brand: string;
  name: string;
  slug: string;
  price: number;
  color_id: string;
  sku: string;
  description: string;
  care_instruction: string;
  unit_id:string;
  parent_category_id: string;
};

export type CartItem = {
  id: string;
  user_id: string;
  qty: number;
  unit_id: string;
  size: string;
  name: string;
  color: string;
  price: number;
  image: string;
};

export type Address = {
  id?: string;
  user_id?: string; // Usually filled from auth context
  first_name: string;
  last_name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
};

export type Category = {
  id: string;
  name: string;
  parent_id: number | null;
  image: string;
  slug: string;
  parent?: {
    id: string;
    name: string;
    slug: string;
  };
};

export type wishlistItem = {
  id: string;
  product_name: string;
  product_id: string;
  unit_id: string;
  user_id: string;
  price: number;
  brand: string;
  is_new: boolean;
  images: {
    image_url: string;
  }[];
};

export type Product = {
  product_name: string;
  product_id: string;
  price: number;
  brand: string;
  is_new: boolean;
  slug: string;
  images: {
    image_url: string;
  }[];
  unit_id: string;
};

export type ProductColor = {
  id: number;
  hex_code: string;
  name: string;
};

export type ProductSize = {
  id: number;
  name: string;
  sort_order: string;
};

export type ProductItem = {
  id: number;
  created_at: string;
  product_id: number;
  SKU: string;
  color_id: number;
};

export type ProductUnit = {
  id: string;
  created_at: string;
  variant_id: string;
  stock_quantity: number;
  size_id: string;
};
