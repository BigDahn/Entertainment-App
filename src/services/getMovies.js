import supabase from "./supabase";

export async function getMovies() {
  let query = supabase.from("movies").select("*", { count: "exact" });

  const { data, count, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count };
}

/* */
