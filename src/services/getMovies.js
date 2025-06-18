import supabase from "./supabase";

export async function getMovies() {
  let query = supabase.from("movies").select("*", { count: "exact" });

  const { data, count, error } = await query;

  if (error) {
    throw new Error("Movies could not be loaded");
  }

  return { data, count };
}

/*get single  movie with a specific ID */

export async function getMovie(id) {
  let query = supabase.from("movies").select("*").eq("id", id);

  const { data, error } = await query;

  console.log(data);

  if (error) {
    throw new Error("Movies could not be loaded");
  }

  return { data };
}
