import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useSignup } from "../Settings/useSignUp";
import MiniLoader from "../ui/MiniLoader";

function SignUpform() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: signUpFn, isPending: isSigningUp } = useSignup();
  const password = watch("password");
  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      fullname: data.fullname,
      password: data.password,
    };
    signUpFn({ userData });
    console.log(userData);
  };
  return (
    <form
      className="flex flex-col gap-3 px-4 py-4 bg-white w-[400px]  rounded-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between gap-2 items-start  ">
        <label htmlFor="email" className="text-[13px] font-medium">
          Email Address
        </label>
        <div className="flex flex-col gap-0.5 w-full">
          <input
            type="email"
            name="email"
            disabled={isSigningUp}
            className="border rounded-sm border-white bg-gray-200 outline-none w-full  px-2 py-2 text-[14px] disabled:bg-gray-400 disabled:cursor-not-allowed"
            {...register("email", {
              required: "This field is required",
            })}
          />
          {errors.email && (
            <span className="text-[9px] text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between  gap-2 items-start  ">
        <label htmlFor="fullname" className="text-[13px] font-medium">
          FullName
        </label>
        <div className="flex flex-col gap-0.5 w-full">
          <input
            type="title"
            name="fullname"
            disabled={isSigningUp}
            className="border rounded-sm border-white bg-gray-200 outline-none w-full px-2 py-2 text-[14px] disabled:bg-gray-400 disabled:cursor-not-allowed"
            {...register("fullname", {
              required: "This field is required",
            })}
          />
          {errors.fullName && (
            <span className="text-[9px] text-red-500">
              {errors.fullname.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between  gap-2 items-start  ">
        <label htmlFor="password" className="text-[13px] font-medium">
          Password
        </label>
        <div className="flex flex-col gap-0.5 w-full">
          <input
            type="password"
            name="password"
            disabled={isSigningUp}
            className="border rounded-sm border-white bg-gray-200 outline-none w-full px-2 py-2 text-[14px] disabled:bg-gray-400 disabled:cursor-not-allowed"
            {...register("password", {
              required: "This field is required",
            })}
          />
          {errors.password && (
            <span className="text-[9px] text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-2 items-start  max-w-[100%]">
        <label htmlFor="confirm_password" className="text-[13px] font-medium">
          Confirm Password
        </label>
        <div className="flex flex-col gap-0.5 w-full">
          <input
            type="password"
            name="confirm_password"
            disabled={isSigningUp}
            className="border rounded-sm border-white bg-gray-200 outline-none w-full px-2 py-2 text-[14px] disabled:bg-gray-400 disabled:cursor-not-allowed"
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
      <div className="flex justify-end">
        <Button
          style="bg-blue-500 py-2 mt-2 w-[6rem] flex justify-center items-center rounded-sm text-white text-[13px] cursor-pointer font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
          // disabled={isLoading}
        >
          {isSigningUp ? <MiniLoader /> : <p> Add User</p>}
        </Button>
      </div>
    </form>
  );
}

export default SignUpform;
