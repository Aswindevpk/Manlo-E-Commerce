import supabase from "../../services/supabase";

export async function getCustomers() {
    const { data, error } = await supabase
        .from("users")
        .select("id, email, username, role,is_blocked")
        .eq("role","user");

    if (error) throw new Error(error.message);

    return data;
}