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

  if (error) {
    throw new Error("Series could not be loaded");
  }

  return { data, count };
}

export async function addNewSeries({ newSeriesData }) {
  const imagePath = `${Math.random()}-${
    newSeriesData?.poster?.name
  }`.replaceAll("/", "");

  const newImagePath = `${supabaseUrl}/storage/v1/object/public/series/${imagePath}`;

  let query = supabase
    .from("series")
    .insert([{ ...newSeriesData, poster: newImagePath }]);

  const { data, error } = await query;

  // uploading the image to the storage
  if (error) {
    throw new Error("Series could not be created");
  }

  const { error: StorageError } = supabase.storage
    .from("series")
    .upload(imagePath, newSeriesData.poster);

  if (StorageError) {
    await supabase.from("series").delete().eq("id", data.id);
    throw new Error("There was an error creating this movie.. Try Again");
  }

  return data;
}

export async function deleteSeries(id, path) {
  let query = supabase.from(path).delete().eq("id", id);

  const { data, error } = await query;

  if (error) throw new Error("Series could not be deleted");

  return data;
}

export async function editSeries({ id, newSeriesData }) {
  const imageName = newSeriesData?.poster?.startsWith?.(supabaseUrl);

  const imagePath = `${Math.random()}-${newSeriesData.poster.name}`.replace(
    "/",
    ""
  );
  const newPoster = `${supabaseUrl}/storage/v1/object/public/series/${imagePath}`;

  const seriesPoster = imageName ? newSeriesData.poster : newPoster;

  const { data, error } = await supabase
    .from("series")
    .update({ ...newSeriesData, poster: seriesPoster })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Series could not be updated");
  }

  if (imageName) return data;
  const { error: StorageError } = await supabase.storage
    .from("series")
    .upload(imagePath, newSeriesData.poster);

  if (StorageError) {
    await supabase.from("series").delete().eq("id", data.id);
    throw new Error("There was an error updating this series.. Try Again");
  }

  return data;
}
