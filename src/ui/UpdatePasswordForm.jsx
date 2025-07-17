import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useUpdateDetails } from "../Authentication/useUpdateDetails";

function UpdatePasswordForm() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { UpdateDetail, isUpdating } = useUpdateDetails();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    UpdateDetail(
      { password },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };
  return (
    <form className="flex flex-col gap-4 py-" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between  items-center  max-w-[65%]">
        <label htmlFor="password" className="text-[12px] font-medium">
          Password
        </label>
        <div className="flex flex-col gap-0.5">
          <input
            type="password"
            name="password"
            disabled={isUpdating}
            className="border rounded-sm border-white bg-gray-200 outline-none w-[15rem] px-2 py-1 text-[14px] disabled:bg-gray-200"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-[9px] text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex  justify-between  items-center  max-w-[65%]">
        <label htmlFor="confirm_password" className="text-[12px] font-medium">
          confirm password
        </label>
        <div className="flex flex-col gap-0.5">
          <input
            type="password"
            name="confirm_password"
            disabled={isUpdating}
            className="border rounded-[2px] border-white  bg-gray-200 outline-none w-[15rem] px-2 py-[3px] text-[14px] disabled:bg-gray-200"
            {...register("confirm_password", {
              required: "This field is required",
              validate: (value) =>
                value === password || "password does not match",
            })}
          />
          {errors.confirm_password && (
            <span className="text-[9px] text-red-500">
              {errors.confirm_password.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <Button
          style="bg-gray-200 px-5 text-[13px] py-1.5 rounded-sm"
          onClick={(e) => {
            e.preventDefault(), reset();
          }}
        >
          Cancel
        </Button>
        <Button style="bg-blue-400 outline-none border-none px-5 text-[13px] py-1.5 rounded-sm">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
