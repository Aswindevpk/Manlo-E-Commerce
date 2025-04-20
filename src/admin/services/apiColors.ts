import supabase from "../../services/supabase";
import { Color } from "../types";

export async function getColors(): Promise<Color[]> {
  const { data, error } = await supabase
  .from("colors")
  .select("*")
  .order("name",{ascending:true})

  if (error) throw new Error(error.message);
  return data;
}

export async function getColor({id}:{id:string}): Promise<Color> {
    const { data, error } = await supabase
    .from("colors")
    .select("*")
    .eq("id",id)
    .single()
  
    if (error) throw new Error(error.message);
    return data;
  }

export async function createColor({
  newColor,
}: {
  newColor: Color;
}): Promise<Color> {
  const { data, error } = await supabase
    .from("colors")
    .insert(newColor)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function updateColor({
  id,
  newColor,
}: {
  id: string;
  newColor: Color;
}): Promise<Color> {
  const { data, error } = await supabase
    .from("colors")
    .update(newColor)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}
