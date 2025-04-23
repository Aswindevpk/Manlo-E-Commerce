import { Category } from "../types";
import supabase from "./supabase";


export async function getCategories(): Promise<Category[]> {
    const { data, error } = await supabase
      .from("categories")
      .select("*,parent:parent_id(id,slug)");
  
    if (error || !data) {
      throw new Error("Categories error");
    }
  
    return data;
  }