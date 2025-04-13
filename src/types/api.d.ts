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
  parent_id: number;
  image: string;
  slug: string;
  parent:{
    id:string;
    name:string;
    slug:string;
  }
};

export type Product = {
  id: string,
  productName: string,
  product_id:string,
  price: number,
  brand: string,
  is_new: boolean,
  images: {
    image_url:string;
  }[],
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

export type ProductVariation = {
  id: number;
  created_at: string;
  product_item_id: number;
  qty_in_stock: number;
  size_id: number;
};
