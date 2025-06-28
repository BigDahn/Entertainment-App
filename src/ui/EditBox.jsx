import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Button from "./Button";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { NoSymbolIcon } from "@heroicons/react/16/solid";

function EditBox({ movies }) {
  const {
    stars,
    title,
    id,
    trending,
    year,
    director,
    description,
    tv_rating,
    rating,
    category,
  } = movies;

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      category: category,
      stars: stars,
    },
  });

  const { fields, append, remove } = useFieldArray(
    {
      control,
      name: "category",
    },
    {
      control,
      name: "stars",
    }
  );
  const {
    fields: starsField,
    append: addStars,
    remove: removeStars,
  } = useFieldArray({
    control,
    name: "stars",
  });

  const onSubmit = (data) => console.log(data);
  return (
    <main className="px-7 w-full h-fit py-3 flex flex-col gap-y-2 ">
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
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
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
            name="year"
            defaultValue={year}
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
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
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("trending", {
              required: "This field is required",
            })}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="mpa_ratings" className="text-[12px] font-medium">
            MPA Ratings
          </label>
          <select
            defaultValue={tv_rating}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("mpa_ratings", {
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
            type="text"
            name="director"
            defaultValue={director}
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
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
            defaultValue={description}
            className="border rounded-sm outline-none w-full h-[5rem] px-1.5 text-[13px] "
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-4">
          <label htmlFor="duration" className="text-[12px] font-medium">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            defaultValue="1hr,30min"
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("duration", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-star  row-start-2 col-start-2">
          <label htmlFor="photo" className="text-[12px] font-medium">
            Movie Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="rounded-sm outline-none w-[15rem] border bg-gray-200 border-gray-100 py-1.5 px-2 cursor-pointer text-[14px]"
            {...register("photo", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-3">
          <label htmlFor="rating" className="text-[12px] font-medium">
            Rating
          </label>
          <select
            defaultValue={rating}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("rating", {
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
          {stars?.length >= 1 ? (
            <div className="grid grid-cols-2 gap-1 ">
              {starsField?.map((field, i) => {
                return (
                  <div className="flex items-center gap-0.5" key={i}>
                    <input
                      type="text"
                      name="stars"
                      defaultValue={field.name}
                      {...register(`stars.${i}.name`)}
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px]"
                    />
                    <XMarkIcon
                      className="size-5"
                      onClick={() => removeStars(i)}
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
          <Button style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2">
            Add Stars
          </Button>
        </div>
        <div className="flex flex-col gap-1 col-span-2 row-start-3">
          <label htmlFor="category" className="text-[12px] font-medium">
            Category
          </label>
          {category.length >= 1 && fields.length >= 1 ? (
            <div className="grid grid-cols-2 gap-1 ">
              {fields.map((field, index) => {
                return (
                  <div className="flex items-center gap-0.5" key={index}>
                    <input
                      type="text"
                      name="category"
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px]"
                      {...register(`category.${index}.category`)}
                      defaultValue={field.category}
                    />
                    <XMarkIcon
                      className="size-5"
                      onClick={() => remove(index)}
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
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2"
            onClick={() =>
              append({
                category: "",
              })
            }
          >
            Add Category
          </Button>
        </div>
        <div className="flex justify-end gap-3 col-span-4 items-center  w-full h-[40px] ">
          <Button style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1">
            <NoSymbolIcon className="size-4" /> Cancel
          </Button>
          <Button style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1">
            <CheckCircleIcon className="size-4" /> Submit
          </Button>
        </div>
      </form>
    </main>
  );
}

export default EditBox;
