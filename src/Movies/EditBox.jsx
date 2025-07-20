import { useFieldArray, useForm } from "react-hook-form";
import Button from "../ui/Button";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { NoSymbolIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { closeMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import { useEditMovie } from "./useEditMovie";

import { useCountry } from "../hooks/useCountry";
import MiniLoader from "../ui/MiniLoader";

function EditBox({ movies }) {
  const { mutate: editMovie, isPending: isEditing } = useEditMovie();
  const { data } = useCountry();
  const {
    stars,
    title,
    id,
    trending,
    year,
    director,
    country,
    image,
    description,
    mpa_ratings,
    rating,
    category,
  } = movies;

  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: {
      category: category,
      stars: stars,
      image: image,
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
      rating: Number(data.rating),
    };
    editMovie(
      { newMovieData, MovieId: id },
      {
        onSuccess: () => {
          reset(), dispatch(closeMiniModal());
        },
      }
    );
  };
  return (
    <main className="px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-white">
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
            className="border rounded-sm border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            className="border rounded-sm border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            className=" border rounded-sm border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            disabled={isEditing}
            defaultValue={mpa_ratings}
            className="bg-white border rounded-sm border-gray-200 outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            disabled={isEditing}
            type="text"
            name="director"
            defaultValue={director}
            className="border rounded-sm border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
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
            disabled={isEditing}
            defaultValue={description}
            className="border rounded-sm outline-none w-full border-gray-200 bg-white h-[7rem] px-1.5 py-1 text-[13px] disabled:bg-gray-300 disabled:cursor-not-allowed "
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
            className="border rounded-sm  border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("duration", {
              required: "This field is required",
            })}
          />
        </div> */}
        <div className="flex flex-col gap-1 items-star  row-start-2 col-start-2">
          <label htmlFor="image" className="text-[12px] font-medium">
            Movie Photo
          </label>
          <input
            disabled={isEditing}
            type="file"
            name="image"
            accept="image/*"
            className="file:rounded-sm file:outline-none file:border border-gray-200  file:bg-blue-500  file:py-2 file:px-2.5 file:cursor-pointer file:text-[11px] text-[12px] file:text-white file:font-semibold"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-3">
          <label htmlFor="rating" className="text-[12px] font-medium">
            Rating
          </label>
          <select
            defaultValue={rating}
            disabled={isEditing}
            className="bg-white border rounded-sm outline-none w-[15rem] px-2 py-1.5 text-[14px] border-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
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
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 cursor-pointer hover:text-red-500  disabled:cursor-not-allowed"
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
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2   disabled:cursor-not-allowed"
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
                      className="border w-[15rem]  px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                      {...register(`category.${index}.category`)}
                      defaultValue={field.category}
                    />
                    <XMarkIcon
                      className="size-5 text-gray-400 hover:text-red-500  disabled:cursor-not-allowed"
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
            style="bg-blue-500 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] mt-2 disabled:bg-gray-300  disabled:cursor-not-allowed"
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
            style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={(e) => {
              dispatch(closeMiniModal()), e.preventDefault();
            }}
            disabled={isEditing}
          >
            <NoSymbolIcon className="size-4" /> Cancel
          </Button>
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 w-[6rem] px-3 rounded-sm text-white font-semibold text-[13px] flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
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

export default EditBox;
