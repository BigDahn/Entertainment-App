import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useResetPassword } from "./useResetPassword";

function ResetPasswordForm() {
  const { register, handleSubmit } = useForm();
  const { resetPasswordFn, isResetting } = useResetPassword();
  const onSubmit = (data) => {
    console.log(data);
    resetPasswordFn({ email: data.email });
  };
  return (
    <form
      className="flex flex-col gap-4 px-4 py-4   rounded-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-between gap-2 items-start  max-w-[100%]">
        <label htmlFor="email address" className="text-[14px] font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email address"
          //  disabled={isEditing}
          className="border rounded-sm border-white bg-gray-200 outline-none w-full  px-2 py-2 text-[14px] disabled:bg-gray-200"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </div>

      <Button style="bg-blue-500 py-2 rounded-sm text-white font-bold">
        Send Link
      </Button>
      <Link to="/login">
        <p className="text-[13px] text-gray-500 cursor-pointer">
          back to login
        </p>
      </Link>
    </form>
  );
}

export default ResetPasswordForm;
