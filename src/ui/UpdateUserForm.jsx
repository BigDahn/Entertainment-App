import React from "react";
import { useForm } from "react-hook-form";

function UpdateUserForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form>
      <div className="flex  gap-1 items-center">
        <label htmlFor="email address" className="text-[12px] font-medium">
          Email
        </label>
        <input
          type="email"
          name="email address"
          //  disabled={isEditing}
          className="border rounded-sm border-white bg-white outline-none w-[15rem] px-2 py-1.5 text-[14px] disabled:bg-gray-200"
          defaultValue="nshsdh"
          {...register("title", {
            required: "This field is required",
          })}
        />
      </div>
    </form>
  );
}

export default UpdateUserForm;
