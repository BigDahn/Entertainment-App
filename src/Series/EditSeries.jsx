import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import {
  CheckCircleIcon,
  NoSymbolIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

function EditSeries({ series }) {
  const {
    id,
    title,
    description,
    poster,
    year,
    ratings,
    trending,
    number_of_season,
    stars,
    director,
    category,
    tv_pg,
  } = series;
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: {
      category: category,
      stars: stars,
      poster: poster,
    },
  });

  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "category",
  });
  const {
    fields: starsField,
    append: addStars,
    remove: removeStars,
  } = useFieldArray({
    control,
    name: "stars",
  });

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    const newMovieData = {
      ...data,
      image,
      year: Number(data.year),
      rating: Number(data.rating),
    };
    console.log(newMovieData);
  };
  return (
    <main className="px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-gray-100">
      <h3 className="text-[20px] font-medium ">Edit Movie ({title})</h3>
      <form
        className="grid grid-cols-4 m-auto  items-start lg:gap-x-[1.3rem] lg:gap-y-3  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="title" className="text-[12px] font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            // disabled={isEditing}
            className="border rounded-sm border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            defaultValue={title}
            {...register("title", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="year" className="text-[12px] font-medium">
            Year
          </label>
          <input
            type="text"
            //  disabled={isEditing}
            name="year"
            defaultValue={year}
            className="border rounded-sm border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("year", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="trending" className="text-[12px] font-medium">
            Trending
          </label>
          <select
            defaultValue={trending}
            // disabled={isEditing}
            className=" border rounded-sm border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("trending", {
              required: "This field is required",
            })}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="tv_pg" className="text-[12px] font-medium">
            MPA Ratings
          </label>
          <select
            //disabled={isEditing}
            defaultValue={tv_pg}
            className="bg-white border rounded-sm border-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("tv_pg", {
              required: "This field is required",
            })}
          >
            <option>PG-13</option>
            <option>G</option>
            <option>PG</option>
            <option>R</option>
            <option>NC-17</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="director" className="text-[12px] font-medium">
            Director
          </label>
          <input
            // disabled={isEditing}
            type="text"
            name="director"
            defaultValue={director}
            className="border rounded-sm border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("director", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start col-span-2">
          <label htmlFor="description" className="text-[12px] font-medium">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            // disabled={isEditing}
            defaultValue={description}
            className="border rounded-sm outline-none w-full border-white bg-white h-[7rem] px-1.5 py-1 text-[13px] "
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
        </div>
        {/**  <div className="flex flex-col gap-1 items-start  row-start-2 col-start-4">
                    <label htmlFor="duration" className="text-[12px] font-medium">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      disabled={isEditing}
                      defaultValue="1hr,30min"
                      className="border rounded-sm  border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
                      {...register("duration", {
                        required: "This field is required",
                      })}
                    />
                  </div> */}
        <div className="flex flex-col gap-1 items-star  row-start-2 col-start-2">
          <label htmlFor="poster" className="text-[12px] font-medium">
            Series Poster
          </label>
          <input
            //  disabled={isEditing}
            type="file"
            name="poster"
            accept="image/*"
            className="file:rounded-sm file:outline-none file:border border-white  file:bg-blue-500  file:py-2 file:px-2.5 file:cursor-pointer file:text-[11px] text-[12px] file:text-white file:font-semibold"
            {...register("poster")}
          />
        </div>

        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-3">
          <label htmlFor="ratings" className="text-[12px] font-medium">
            Rating
          </label>
          <select
            defaultValue={ratings}
            // disabled={isEditing}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px] border-white"
            {...register("ratings", {
              required: "This field is required",
            })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <label htmlFor="stars" className="text-[12px] font-medium">
            Stars
          </label>
          {starsField?.length >= 1 ? (
            <div className="grid grid-cols-2 gap-1 ">
              {starsField?.map((field, index) => {
                return (
                  <div className="flex items-center gap-0.5" key={index}>
                    <input
                      type="text"
                      // disabled={isEditing}
                      name="stars"
                      defaultValue={field.name}
                      {...register(`stars.${index}.name`)}
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px] border-white bg-white"
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 cursor-pointer hover:text-red-500"
                      onClick={() => removeStars(index)}
                      role="button"
                      // disabled={isEditing}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="text-[13px] font-medium text-center">
              {" "}
              Click to add new stars
            </h3>
          )}
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2 disabled:bg-gray-400"
            onClick={(e) => {
              e.preventDefault();
              addStars({
                name: "",
              });
            }}
            // disabled={isEditing}
          >
            Add Stars
          </Button>
        </div>
        <div className="flex flex-col gap-1 col-span-2 row-start-3">
          <label htmlFor="category" className="text-[12px] font-medium">
            Category
          </label>
          {fields.length >= 1 ? (
            <div className="grid grid-cols-2 gap-1 ">
              {fields.map((field, index) => {
                return (
                  <div className="flex items-center gap-0.5" key={index}>
                    <input
                      type="text"
                      //disabled={isEditing}
                      name="category"
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px] border-white bg-white"
                      {...register(`category.${index}.category`)}
                      defaultValue={field.category}
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 hover:text-red-500"
                      onClick={() => remove(index)}
                      //disabled={isEditing}
                      role="button"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="text-[13px] font-medium text-center">
              Click to add new category
            </h3>
          )}
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2 disabled:bg-gray-400"
            onClick={(e) => {
              e.preventDefault(),
                append({
                  category: "",
                });
            }}
            //  disabled={isEditing}
          >
            Add Category
          </Button>
        </div>
        <div className="flex justify-end gap-3 col-span-4 items-center  w-full h-[40px] ">
          <Button
            style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1"
            //onClick={(e) => {dispatch(closeMiniModal()), e.preventDefault(); }}
            //disabled={isEditing}
          >
            <NoSymbolIcon className="size-4" /> Cancel
          </Button>
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1"
            //disabled={isEditing}
          >
            <CheckCircleIcon className="size-4" /> Submit
          </Button>
        </div>
      </form>
    </main>
  );
}

export default EditSeries;
