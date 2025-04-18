import supabase from "../../services/supabase";

export async function getCategories() {
    const { data, error } = await supabase
        .from("categories")
        .select("*,parent:parent_id(id,name)");

    if (error) throw new Error(error.message);
    return data;
}
