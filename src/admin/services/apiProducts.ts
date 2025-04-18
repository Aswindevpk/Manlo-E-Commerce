import supabase from "../../services/supabase";
import { Product } from "../types";

export async function createProduct({newProduct}:{newProduct:Product}):Promise<Product> {
    const { data, error } = await supabase
        .from("products")
        .insert([newProduct])
        .select()
        .single()

    if (error) throw new Error(error.message);
    return data;
}

export async function updateProduct({id,newProduct}:{id:string,newProduct:Product}):Promise<Product> {
    const { data, error } = await supabase
        .from("products")
        .update([newProduct])
        .eq("id",id)
        .select()
        .single()

    if (error) throw new Error(error.message);
    return data;
}

export async function getProducts():Promise<Product[]> {
    const { data, error } = await supabase
        .from("products")
        .select("*,category:category_id(id,name),brand:brand_id(id,name)")
        .order("name", { ascending: true })

    if (error) throw new Error(error.message);
    return data;
}

export async function getProduct({ productId }: { productId: string | undefined }):Promise<Product> {
    if(!productId) throw new Error("ProductId not found!")
    const { data, error } = await supabase
        .from("products")
        .select("*,category:categories(id,name),brand:brands(id,name)")
        .eq("id", productId)
        .single();

    if (error) throw new Error(error.message);
    return data;
}