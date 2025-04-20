import supabase from "../../services/supabase";
import { Size, Unit } from "../types";

export async function getUnitSizes({
  variantId,
}: {
  variantId: string | undefined;
}): Promise<Size[]> {
  const { data, error } = await supabase
    .from("variant_sizes")
    .select("sizes")
    .eq("variant_id", variantId)
    .single();

  if (error) throw new Error(error.message);

  return data.sizes;
}

export async function createUnit({
  newUnit,
}: {
  newUnit: Unit;
}): Promise<Unit> {
  const { data, error } = await supabase
    .from("product_units")
    .insert(newUnit)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateUnit({
  id,
  newUnit,
}: {
  id: string;
  newUnit: Unit;
}): Promise<Unit> {
  const { data, error } = await supabase
    .from("product_units")
    .update(newUnit)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function getUnits({
  variantId,
}: {
  variantId: string | undefined;
}): Promise<Unit[]> {
  if (!variantId) throw new Error("variantId not found");

  const { data, error } = await supabase
    .from("product_units")
    .select("*,size:size_id(id,name)")
    .eq("variant_id", variantId)
    .order("size_id", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function getUnit({
  unitId,
}: {
  unitId: string | undefined;
}): Promise<Unit> {
  if (!unitId) throw new Error("UnitId not found!");
  const { data, error } = await supabase
    .from("product_units")
    .select("*,size:size_id(id,name)")
    .eq("id", unitId)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
