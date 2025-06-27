import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/20/solid";

function EditBox({ name, movies }) {
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
  //console.log(tv_rating);
  console.log(tv_rating);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className="px-7 w-full h-fit ">
      <h3 className="text-[20px] font-medium">Edit Movie ({name})</h3>
      <form
        className="grid grid-cols-4 m-auto  items-start lg:gap-x-[1.3rem] lg:gap-y-3  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5"
            defaultValue={name}
            {...register("title", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            defaultValue={year}
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5"
            {...register("year", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="trending">Trending</label>
          <select
            defaultValue={trending}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5"
            {...register("trending", {
              required: "This field is required",
            })}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="mpa_ratings">MPA Ratings</label>
          <select
            defaultValue={tv_rating}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5"
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
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name="director"
            defaultValue={director}
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5"
            {...register("director", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start col-span-2">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            defaultValue={description}
            className="border rounded-sm outline-none w-full h-[6rem] px-1.5 "
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            defaultValue="1hr,30min"
            className="border rounded-sm outline-none w-[15rem] px-2 py-1.5"
            {...register("duration", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="photo">Movie Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="rounded-sm outline-none w-[15rem] border bg-gray-200 border-gray-100 py-1.5 px-2 cursor-pointer"
            {...register("photo", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="rating">Rating</label>
          <select
            defaultValue={rating}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5"
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
          <label>Stars</label>
          <div className="grid grid-cols-2 gap-1 ">
            {stars?.map((s) => {
              return (
                <div className="flex items-center gap-0.5">
                  <input
                    type="text"
                    defaultValue={s}
                    className="border w-[15rem]  px-2 py-1.5 rounded-sm"
                  />
                  <XMarkIcon className="size-5" />
                </div>
              );
            })}
          </div>
          <Button style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2">
            Add More Stars
          </Button>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <label>Category</label>
          <div className="grid grid-cols-2 gap-1 ">
            {category?.map((s) => {
              return (
                <div className="flex items-center gap-0.5">
                  <input
                    type="text"
                    defaultValue={s}
                    className="border w-[15rem]  px-2 py-1.5 rounded-sm"
                  />
                  <XMarkIcon className="size-5" />
                </div>
              );
            })}
          </div>
          <Button style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2">
            Add More Stars
          </Button>
        </div>
        <div className="flex justify-end gap-3 col-span-4 items-center  w-full h-[40px] ">
          <Button style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px]">
            Cancel
          </Button>
          <Button style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px]">
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}

export default EditBox;
