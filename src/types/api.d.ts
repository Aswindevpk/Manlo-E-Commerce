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
  id: number;
  created_at: string;
  parent_category_id: number;
  size_category_id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  care_instruction: string;
  about: string;
  regular_price: number;
  sale_price: number;
  brand:
    | {
        name: string;
        description: string;
      }[]
    | null;
  category:
    | {
        id: number;
        name: string;
        sizeCategory:
          | {
              id: number;
            }[]
          | null;
      }[]
    | null;
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
