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
  slug:string;
  color?:{
    id:string;
    name:string;
  }
}


export type Customer = {
  id?:string;
  email:string;
  username:string;
  is_blocked:boolean
}

