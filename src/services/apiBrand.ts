import { Brand } from "../types";
import supabase from "./supabase";


export async function getBrands(): Promise<Brand[]> {
    const { data, error } = await supabase
      .from("brands")
      .select("*");
  
    if (error || !data) {
      throw new Error("Brands error");
    }
  
    return data;
  }