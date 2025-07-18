import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

import { useChangePassword } from "./useChangePassword";

function ChangePassword() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { ChangePasswordFn, isChanging } = useChangePassword();
  const password = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    ChangePasswordFn({ password });
    // resetPasswordFn({ email: data.email });
  };
  return (
    <form
      className="flex flex-col gap-4 px-4 py-4   rounded-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between gap-2 items-start  max-w-[100%]">
        <label htmlFor="password" className="text-[14px] font-medium">
          Password
        </label>
        <div className="flex items-start flex-col gap-0.5 w-full">
          <input
            type="password"
            name="password"
            // disabled={isUpdating}
            className="border rounded-sm border-white bg-gray-200 outline-none w-full px-2 py-1 text-[14px] disabled:bg-gray-200"
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
      <div className="flex flex-col justify-between gap-2 items-start  max-w-[100%]">
        <label htmlFor="confirm_password" className="text-[14px] font-medium">
          confirm password
        </label>
        <div className="flex items-start flex-col w-full gap-0.5">
          <input
            type="password"
            name="confirm_password"
            //disabled={isUpdating}
            className="border rounded-[2px] border-white  bg-gray-200 outline-none w-full px-2 py-[3px] text-[14px] disabled:bg-gray-200"
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

      <Button style="bg-blue-500 py-2 rounded-sm text-white font-bold">
        Change Password
      </Button>
    </form>
  );
}

export default ChangePassword;
