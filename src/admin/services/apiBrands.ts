import supabase from "../../services/supabase";

export async function getBrands() {
    const { data, error } = await supabase
        .from("brands")
        .select("*");

    if (error) throw new Error(error.message);
    return data;
}
