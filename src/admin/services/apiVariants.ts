import supabase from "../../services/supabase";
import { Variant } from "../types";

export async function createVariant({newVariant}:{newVariant:Variant}):Promise<Variant> {
    const { data, error } = await supabase
        .from("product_variants")
        .insert([newVariant])
        .select()
        .single()

    if (error) throw new Error(error.message);
    return data;
}

export async function updateVariant({id,newVariant}:{id:string,newVariant:Variant}):Promise<Variant> {
    const { data, error } = await supabase
        .from("product_variants")
        .update([newVariant])
        .eq("id",id)
        .select()
        .single()

    if (error) throw new Error(error.message);
    return data;
}

export async function getVariants({productId}:{productId:string | undefined}):Promise<Variant[]> {
    if(!productId) throw new Error("productId not found")
    const { data, error } = await supabase
        .from("product_variants")
        .select("*,color:colors(*),images:product_variant_images(id,image_url)")
        .eq("product_id",productId);

    if (error) throw new Error(error.message);
    return data;
}

export async function getVariant({ variantId }: { variantId: string | undefined }):Promise<Variant> {
    if(!variantId) throw new Error("ProductId not found!")
    const { data, error } = await supabase
        .from("product_variants")
        .select("*,color:colors(*),images:product_variant_images(id,image_url)")
        .eq("id", variantId)
        .single();

    if (error) throw new Error(error.message);
    return data;
}