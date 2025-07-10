import { PAGE_SIZE } from "../helper/constant";
import supabase, { supabaseUrl } from "./supabase";

export async function getMovies({ page }) {
  console.log(page);
  let query = supabase.from("movies").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, count, error } = await query;

  if (error) {
    throw new Error("Movies could not be loaded");
  }

  return { data, count };
}

/*get single movie with a specific ID */

export async function getMovie(id) {
  let query = supabase.from("movies").select("*").eq("id", id);

  const { data, error } = await query;

  if (error) {
    throw new Error("Movie could not be loaded");
  }

  return data;
}

export async function createNewMovie({ newMovieData }) {
  const imageName = `${Math.random()}-${newMovieData.image.name}`.replaceAll(
    "/",
    ""
  );

  const newImagePath = `${supabaseUrl}/storage/v1/object/public/movies/${imageName}`;
  const { data, error } = await supabase
    .from("movies")
    .insert([{ ...newMovieData, image: newImagePath }]);
  console.log(error);
  console.log(data);

  if (error) {
    throw new Error("Movie could not be created");
  }

  const { error: StorageError } = supabase.storage
    .from("movies")
    .upload(imageName, newMovieData.image);

  if (StorageError) {
    await supabase.from("movies").delete().eq("id", data.id);
    throw new Error("There was an error creating this movie.. Try Again");
  }

  return data;
}

export async function editMovie(id, newMovieData) {
  console.log(id);
  const hasImagePath = newMovieData.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newMovieData.image.name}`.replaceAll(
    "/",
    ""
  );

  const newImagePath = `${supabaseUrl}/storage/v1/object/public/movies/${imageName}`;

  const newImage = hasImagePath ? newMovieData.image : newImagePath;

  const { data, error } = await supabase
    .from("movies")
    .update({ ...newMovieData, image: newImage })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Movie could not be updated");
  }

  if (hasImagePath) return data;

  const { error: StorageError } = supabase.storage
    .from("movies")
    .upload(imageName, newMovieData.image);

  if (StorageError) {
    await supabase.from("movies").delete().eq("id", data.id);
    throw new Error("Movie could not be uploaded");
  }

  return data;
}

export async function deleteMovie(id, path) {
  let query = supabase.from(path).delete().eq("id", id);

  const { data, error } = await query;

  if (error) throw new Error("Movie could not be deleted");

  return data;
}
