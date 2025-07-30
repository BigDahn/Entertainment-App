import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import {
  CheckCircleIcon,
  NoSymbolIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useEditSeries } from "./useEditSeries";
import { closeMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import MiniLoader from "../ui/MiniLoader";
import { useCountry } from "../hooks/useCountry";

function EditSeries({ series }) {
  const { mutate: editBtn, isPending: isEditing } = useEditSeries();
  const { data: countries } = useCountry();
  const { isDarkMode } = useSelector((store) => store.Entertainment);

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
    country,
    director,
    category,
    tv_pg,
  } = series;
  console.log(country);
  const {
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
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
    const poster =
      typeof data.poster === "string" ? data.poster : data.poster[0];
    const flag = countries.find((s) => s.name === data.country);

    const newSeriesData = {
      ...data,
      poster,
      ratings: Number(data.ratings),
      country: [flag],
    };

    editBtn(
      { id, newSeriesData },
      {
        onSuccess: () => {
          reset(), dispatch(closeMiniModal());
        },
      }
    );
    //console.log(newMovieData);
  };
  return (
    <main
      className={`${
        isDarkMode
          ? "px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-gray-800 text-gray-200"
          : "px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-white"
      }`}
    >
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
            disabled={isEditing}
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
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
            type="number"
            disabled={isEditing}
            name="year"
            defaultValue={year}
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
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
            disabled={isEditing}
            className=" border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
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
            disabled={isEditing}
            defaultValue={tv_pg}
            className="bg-white border text-black rounded-sm border-gray-200 outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
            {...register("tv_pg", {
              required: "This field is required",
            })}
          >
            <option>TV-Y</option>
            <option>TV-Y7</option>
            <option>TV-G</option>
            <option>TV-PG</option>
            <option>TV-14</option>
            <option>TV-MA</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="director" className="text-[12px] font-medium">
            Director
          </label>
          <input
            disabled={isEditing}
            type="text"
            name="director"
            defaultValue={director}
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
            {...register("director", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start col-start-3 col-end-5 row-start-4">
          <label htmlFor="description" className="text-[12px] font-medium">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            disabled={isEditing}
            defaultValue={description}
            className="border rounded-sm outline-none text-black w-full border-gray-200 bg-white h-[7rem] px-1.5 py-1 text-[13px] disabled:bg-gray-200"
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-4">
          <label htmlFor="duration" className="text-[12px] font-medium">
            Number of Seasons
          </label>
          <input
            type="number"
            name="number"
            disabled={isEditing}
            defaultValue={number_of_season}
            className="border rounded-sm  border-gray-200 text-black bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
            {...register("number_of_season", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-3 col-start-3">
          <label htmlFor="country" className="text-[12px] font-medium">
            Country
          </label>
          <select
            disabled={isEditing}
            defaultValue={country?.[0]?.name || ""}
            className="bg-white border rounded-sm text-black border-gray-200 outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
            {...register("country", {
              required: "This field is required",
            })}
          >
            <option value="">Select Country</option>
            {countries?.map((country, i) => {
              return (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          {errors.country && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        {/**  <div className="flex flex-col gap-1 items-start  row-start-3 col-start-4">
                    <label htmlFor="duration" className="text-[12px] font-medium">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      disabled={isEditing}
                      defaultValue="1hr,30min"
                      className="border rounded-sm  text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
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
            disabled={isEditing}
            type="file"
            name="poster"
            accept="image/*"
            className="file:rounded-sm file:outline-none file:border border-gray-200  file:bg-blue-500  file:py-2 file:px-2.5 file:cursor-pointer file:text-[11px] text-[12px] file:text-white file:font-semibold disabled:bg-gray-200"
            {...register("poster")}
          />
        </div>

        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-3">
          <label htmlFor="ratings" className="text-[12px] font-medium">
            Rating
          </label>
          <select
            defaultValue={ratings}
            disabled={isEditing}
            className="bg-white border rounded-sm text-black outline-none w-[15rem] px-2 py-1.5 text-[14px] border-gray-200 disabled:bg-gray-200"
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
                      disabled={isEditing}
                      name="stars"
                      defaultValue={field.name}
                      {...register(`stars.${index}.name`)}
                      className="border w-[15rem] text-black outline-none  px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white disabled:bg-gray-200"
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 cursor-pointer hover:text-red-500"
                      onClick={() => removeStars(index)}
                      role="button"
                      disabled={isEditing}
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
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2 disabled:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              addStars({
                name: "",
              });
            }}
            disabled={isEditing}
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
                      disabled={isEditing}
                      name="category"
                      className="border w-[15rem] text-black outline-none  px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white disabled:bg-gray-200"
                      {...register(`category.${index}.category`)}
                      defaultValue={field.category}
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 cursor-pointer hover:text-red-500"
                      onClick={() => remove(index)}
                      disabled={isEditing}
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
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2 "
            onClick={(e) => {
              e.preventDefault(),
                append({
                  category: "",
                });
            }}
            disabled={isEditing}
          >
            Add Category
          </Button>
        </div>
        <div className="flex justify-end gap-3 col-span-4 items-center  w-full h-[40px] ">
          <Button
            style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1 disabled:cursor-not-allowed"
            onClick={(e) => {
              dispatch(closeMiniModal()), e.preventDefault();
            }}
            disabled={isEditing}
          >
            <NoSymbolIcon className="size-4" /> Cancel
          </Button>
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 px-3 w-[6rem] rounded-sm text-white font-semibold text-[13px] flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isEditing}
          >
            {isEditing ? (
              <MiniLoader />
            ) : (
              <div className="flex gap-1 items-center">
                {" "}
                <CheckCircleIcon className="size-4" /> <span>Submit</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </main>
  );
}

export default EditSeries;
