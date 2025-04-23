import { Color } from "../types";
import supabase from "./supabase";


export async function getColors(): Promise<Color[]> {
    const { data, error } = await supabase
      .from("colors")
      .select("*");
  
    if (error || !data) {
      throw new Error("Colors error");
    }
  
    return data;
  }