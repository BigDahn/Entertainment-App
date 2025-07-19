import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";
import MiniLoader from "../ui/MiniLoader";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { mutate: Login, isLoading } = useLogin();

  console.log(isLoading);

  const onSubmit = (data) => {
    Login({ email: data.email, password: data.password });
  };
  return (
    <form
      className="flex flex-col gap-4 px-4 py-10   rounded-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between gap-2 items-start  max-w-[100%]">
        <label htmlFor="email address" className="text-[16px] font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email address"
          disabled={isLoading}
          className="border rounded-sm border-white bg-gray-200 outline-none w-full  px-2 py-2 text-[14px] disabled:bg-gray-200"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </div>
      <div className="flex flex-col justify-between  gap-2 items-start   max-w-[100%]">
        <label htmlFor="password" className="text-[16px] font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          disabled={isLoading}
          className="border rounded-sm border-white bg-gray-200 outline-none w-full px-2 py-2 text-[14px] disabled:bg-gray-200"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </div>
      <Button
        style="bg-blue-500 py-2 rounded-sm text-white font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? <MiniLoader /> : <p>Login</p>}
      </Button>
      <Link to="/resetPassword">
        <p className="text-[13px] text-gray-500 cursor-pointer">
          Forgotten password?
        </p>
      </Link>
    </form>
  );
}

export default LoginForm;
