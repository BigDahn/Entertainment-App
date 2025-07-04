import supabase, { supabaseUrl } from "./supabase";

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

  return data;
}

export async function createNewMovie({ newMovieData }) {
  console.log(newMovieData);
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
    throw new Error("Movie could not be updated");
  }

  const { error: StorageError } = supabase.storage
    .from("movies")
    .upload(imageName, newMovieData.image);

  if (StorageError) {
    await supabase.from("movies").delete().eq("id", data.id);
    throw new Error("Movie could not be uploaded");
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

export async function deleteMovie(id) {
  let query = supabase.from("movies").delete().eq("id", id);

  const { data, error } = await query;

  if (error) throw new Error("Movie could not be deleted");

  return data;
}
