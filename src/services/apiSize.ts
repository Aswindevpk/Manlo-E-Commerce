import { Color } from "../types";
import supabase from "./supabase";


export async function getSizes(): Promise<Color[]> {
    const { data, error } = await supabase
      .from("sizes")
      .select("*");
  
    if (error || !data) {
      throw new Error("Sizes error");
    }
  
    return data;
  }