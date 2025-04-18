import supabase from "../../services/supabase";
import { Category } from "../types";

export async function getCategories():Promise<Category[]> {
    const { data, error } = await supabase
        .from("categories")
        .select("*,parent:parent_id(id,name)");

    if (error) throw new Error(error.message);
    return data;
}

export async function createCategory({newData}:{newData:Category}):Promise<Category> {
    const { data, error } = await supabase
        .from("categories")
        .insert(newData)
        .select("*,parent:parent_id(id,name)")
        .single();

    if (error) throw new Error(error.message);
    return data;
}

export async function updateCategory({id,newData}:{id:string;newData:Partial<Category>}):Promise<Category> {
    const { data, error } = await supabase
        .from("categories")
        .update(newData)
        .eq("id",id)
        .select("*,parent:parent_id(id,name)")
        .single();

    if (error) throw new Error(error.message);
    return data;
}

export async function getCategory({id}:{id:string}):Promise<Category> {
    const { data, error } = await supabase
        .from("categories")
        .select("*,parent:parent_id(id,name)")
        .eq("id",id)
        .single()

    if (error) throw new Error(error.message);
    return data;
}
