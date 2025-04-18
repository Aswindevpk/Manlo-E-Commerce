export type Product = {
  id?: string;
  name: string;
  description: string;
  price: number;
  care_instruction: string;
  is_new: boolean;
  category_id: string;
  brand_id: string;
  brand?:{
    id:string;
    name:string;
  }
  category?:{
    id:string;
    name:string;
  }
};

export type Variant = {
  id?:string;
  product_id:string;
  color_id:string;
  sku:string;
  name:string;
  slug?:string;
  color?:{
    id:string;
    name:string;
  }
  images?:{
    id:string;
    image_url:string;
  }[]
}

export type Customer = {
  id?:string;
  email:string;
  username:string;
  is_blocked:boolean
}

export type Brand = {
  id?:string;
  name:string;
}

export type Color = {
  id?:string;
  name:string;
  hex_code:string;
}

export type Category = {
  id?:string;
  name:string;
  parent_id:string;
  image:string;
  parent?:{
    id:string;
    name:string;
  }
}

