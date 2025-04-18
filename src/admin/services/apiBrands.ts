import supabase from "../../services/supabase";
import { Brand } from "../types";

export async function getBrands(): Promise<Brand[]> {
  const { data, error } = await supabase.from("brands").select("*");

  if (error) throw new Error(error.message);
  return data;
}

export async function getBrand({ id }: { id: string }): Promise<Brand> {
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function createBrand({
  newData,
}: {
  newData: Brand;
}): Promise<Brand> {
  const { data, error } = await supabase
    .from("brands")
    .insert(newData)
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateBrand({
  id,
  newData,
}: {
  id: string;
  newData: string;
}): Promise<Brand> {
  const { data, error } = await supabase
    .from("brands")
    .update(newData)
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw new Error(error.message);
  return data;
}
