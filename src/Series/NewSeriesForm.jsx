import {
  CheckCircleIcon,
  NoSymbolIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Button from "../ui/Button";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreateSeries } from "./useCreateSeries";
import { useDispatch, useSelector } from "react-redux";
import { closeMiniModal } from "../feature/EntertainmentSlice/EntertainmentSlice";
import MiniLoader from "../ui/MiniLoader";
import { useCountry } from "../hooks/useCountry";

function NewSeriesForm() {
  const { data: countries } = useCountry();
  const { mutate: CreateSeries, isPending: isCreating } = useCreateSeries();
  const { isDarkMode } = useSelector((store) => store.Entertainment);
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const poster = data.poster[0];
    const flag = countries.find((s) => s.name === data.country);

    const newSeriesData = {
      ...data,
      poster,
      ratings: Number(data.ratings),
      country: [flag],
    };
    CreateSeries(
      {
        newSeriesData,
      },
      {
        onSuccess: () => {
          reset();
          dispatch(closeMiniModal());
        },
      }
    );
  };

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
  return (
    <main
      className={`${
        isDarkMode
          ? "px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-gray-800 text-gray-200"
          : "px-7 w-full h-fit py-3 flex flex-col gap-y-2 bg-white"
      }`}
    >
      <h2 className="pb-3 text-[20px] font-bold ">Add New Series</h2>
      <form
        className="grid grid-cols-4 m-auto  items-start lg:gap-x-[1.3rem] lg:gap-y-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="title" className="text-[12px] font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            disabled={isCreating}
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("title", {
              required: "This field is required",
            })}
          />
          {errors.title && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="year" className="text-[12px] font-medium">
            Year
          </label>
          <input
            type="number"
            disabled={isCreating}
            name="year"
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("year", {
              required: "This field is required",
            })}
          />
          {errors.year && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="trending" className="text-[12px] font-medium">
            Trending
          </label>
          <select
            disabled={isCreating}
            className=" border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("trending", {
              required: "This field is required",
            })}
          >
            <option value="">select option</option>
            <option>false</option>
            <option>true</option>
          </select>
          {errors.trending && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="tv_pg" className="text-[12px] font-medium">
            TV Parental Guidelines
          </label>
          <select
            disabled={isCreating}
            className="bg-white border text-black rounded-sm border-gray-200 outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("tv_pg", {
              required: "This field is required",
            })}
          >
            <option value="">Select TV_PG</option>
            <option>TV-Y</option>
            <option>TV-Y7</option>
            <option>TV-G</option>
            <option>TV-PG</option>
            <option>TV-14</option>
            <option>TV-MA</option>
          </select>
          {errors.tv_pg && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start ">
          <label htmlFor="director" className="text-[12px] font-medium">
            Director
          </label>
          <input
            disabled={isCreating}
            type="text"
            name="director"
            className="border rounded-sm text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("director", {
              required: "This field is required",
            })}
          />
          {errors.director && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start col-start-3 col-end-5 row-start-4">
          <label htmlFor="description" className="text-[12px] font-medium">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            disabled={isCreating}
            className="border rounded-sm text-black outline-none w-full border-gray-200 bg-white h-[7rem] px-1.5 py-1 text-[13px] "
            {...register("description", {
              required: "This field is required",
            })}
          ></textarea>
          {errors.description && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-4">
          <label htmlFor="duration" className="text-[12px] font-medium">
            Number of Seasons
          </label>
          <input
            type="number"
            name="number"
            disabled={isCreating}
            className="border rounded-sm  text-black border-gray-200 bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
            {...register("number_of_season", {
              required: "This field is required",
            })}
          />
          {errors.number_of_season && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-3 col-start-3">
          <label htmlFor="country" className="text-[12px] font-medium">
            Country
          </label>
          <select
            disabled={isCreating}
            className="bg-white border rounded-sm border-gray-200 text-black outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-300 disabled:cursor-not-allowed"
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
        {/*  <div className="flex flex-col gap-1 items-start  row-start-3 col-start-4">
          <label htmlFor="duration" className="text-[12px] font-medium">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            disabled={isCreating}
            defaultValue="1hr,30min"
            className="border rounded-sm  border-gray-200 text-black bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px]"
            {...register("duration", {
              required: "This field is required",
            })}
          />
        </div> */}
        <div className="flex flex-col gap-1 items-star  row-start-2 col-start-2">
          <label htmlFor="poster" className="text-[12px] font-medium">
            Movie Photo
          </label>
          <input
            disabled={isCreating}
            type="file"
            name="poster"
            accept="image/*"
            className="file:rounded-sm file:outline-none file:border border-gray-200  file:bg-blue-500  file:py-2 file:px-2.5 file:cursor-pointer file:text-[11px] text-[12px] file:text-white file:font-semibold"
            {...register("poster", {
              required: "This field is required",
            })}
          />
          {errors.poster && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start  row-start-2 col-start-3">
          <label htmlFor="ratings" className="text-[12px] font-medium">
            Rating
          </label>
          <select
            disabled={isCreating}
            className="bg-white border rounded-sm text-black outline-none w-[15rem] px-2 py-1.5 text-[14px] border-gray-200"
            {...register("ratings", {
              required: "This field is required",
            })}
          >
            <option value="">Select your rating</option>
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
          {errors.ratings && (
            <span className="text-[8px] text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <label htmlFor="stars" className="text-[12px] font-medium">
            Stars
          </label>

          {starsField?.length >= 1 ? (
            <div className="grid grid-cols-2 gap-1 ">
              {starsField?.map((field, index) => {
                return (
                  <div className="flex flex-col  gap-0.5" key={index}>
                    <div className="flex items-center gap-0.5">
                      <input
                        type="text"
                        disabled={isCreating}
                        name="stars"
                        {...register(`stars.${index}.name`, {
                          required: "This field is required",
                        })}
                        className="border w-[15rem]  text-black outline-none px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white"
                      />
                      <XMarkIcon
                        className="size-5 text-gray-400 cursor-pointer hover:text-red-500"
                        onClick={() => removeStars(index)}
                        role="button"
                        disabled={isCreating}
                      />
                    </div>
                    {errors.stars?.[index]?.name && (
                      <span className="text-[8px] text-red-600">
                        This field is required
                      </span>
                    )}
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
            disabled={isCreating}
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
                  <div className="flex flex-col gap-0.5" key={index}>
                    <div className="flex items-center gap-0.5">
                      <input
                        type="text"
                        disabled={isCreating}
                        name="category"
                        className="border w-[15rem]  text-black outline-none  px-2 py-1.5 rounded-sm text-[14px] border-gray-200 bg-white"
                        {...register(`category.${index}.category`, {
                          required: "This field is required",
                        })}
                      />
                      <XMarkIcon
                        className="size-5 text-gray-400 cursor-pointer hover:text-red-500"
                        onClick={() => remove(index)}
                        disabled={isCreating}
                        role="button"
                      />
                    </div>
                    {errors.category?.[index]?.category && (
                      <span className="text-[8px] text-red-600">
                        This field is required
                      </span>
                    )}
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
            disabled={isCreating}
          >
            Add Category
          </Button>
        </div>
        <div className="flex justify-end gap-3 col-span-4 items-center  w-full h-[40px] ">
          <Button
            style="bg-gray-400 cursor-pointer py-1.5 px-3 rounded-sm text-white font-semibold text-[13px] flex items-center gap-1"
            onClick={(e) => {
              dispatch(closeMiniModal()), e.preventDefault();
            }}
            disabled={isCreating}
          >
            <NoSymbolIcon className="size-4" /> Cancel
          </Button>
          <Button
            style="bg-blue-500 cursor-pointer py-1.5 w-[6rem] px-3 rounded-sm text-white font-semibold text-[13px] flex items-center justify-center gap-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={isCreating}
          >
            {isCreating ? (
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

export default NewSeriesForm;
