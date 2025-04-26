export type Order = {
  id: string;
  order_number: string;
  user_id: string;
  price: number;
  created_at: string; // ISO string
  shipping_status: "ordered" | "processing" | "shipped" | "delivered";
  payment_status: string;
  qty: number;
  estimated_delivery: string | null; // assuming it can sometimes be null
  size: string;
  color: string;
  product: {
    name: string;
    image: string ;
    quantity: number;
    price: number;
  };
  shipping_address: {
    first_name: string;
    last_name: string;
    phone: string;
    line1: string;
    line2: string | null; // optional line2
    city: string;
    state: string;
    pincode: string;
  };
};


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
  unit_id: string;
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

export type Brand = {
  id: string;
  name: string;
};

export type Color = {
  id: string;
  name: string;
  hex_code: string;
};

export type Size = {
  id: string;
  name: string;
  category_id?: string;
};

export type Category = {
  id: string;
  name: string;
  parent_id: number | null;
  image: string;
  slug: string;
  parent: {
    id: string;
    slug: string;
  } | null;
};

export type Review = {
  id: string;
  product_slug: string;
  username: string;
  rating: number;
  comment: string;
};
