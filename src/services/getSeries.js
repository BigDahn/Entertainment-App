import { PAGE_SIZE } from "../helper/constant";
import supabase, { supabaseUrl } from "./supabase";

export async function getSeries({ Sortby }) {
  console.log(Sortby);
  let query = supabase.from("series").select("*", { count: "exact" });

  if (Sortby) {
    query = query.order(Sortby.field, {
      ascending: Sortby.direction === "asc",
    });
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Series could not be loaded");
  }

  return { data, count };
}
