import { PAGE_SIZE } from "../helper/constant";
import supabase, { supabaseUrl } from "./supabase";

export async function getSeries() {
  let query = supabase.from("series").select("*", { count: "exact" });

  const { data, error, count } = await query;

  
  if (error) {
    throw new Error("Series could not be loaded");
  }

  return { data, count };
}
