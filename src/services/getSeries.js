import { PAGE_SIZE } from "../helper/constant";
import supabase, { supabaseUrl } from "./supabase";

export async function getSeries({ Sortby, page }) {
  let query = supabase.from("series").select("*", { count: "exact" });

  if (Sortby) {
    query = query.order(Sortby.field, {
      ascending: Sortby.direction === "asc",
    });
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  console.log(data);

  if (error) {
    throw new Error("Series could not be loaded");
  }

  return { data, count };
}

export async function addNewSeries({ newSeriesData }) {
  console.log(newSeriesData);
}
