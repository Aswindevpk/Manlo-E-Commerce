import supabase from "../../services/supabase";
import { Customer } from "../types";

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("users")
    .select("id, email, username, role,is_blocked")
    .eq("role", "user")
    .order("email", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function updateCustomer({
  customerId,
  newData,
}: {
  customerId: string | undefined;
  newData: Partial<Customer>;
}):Promise<Customer> {
  if(!customerId) throw new Error("customerId undefined")
  const { data, error } = await supabase
    .from("users")
    .update(newData)
    .eq("id", customerId)
    .select()
    .single()

  if (error) throw new Error(error.message);
  return data;
}
