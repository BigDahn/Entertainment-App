import React from "react";
import { useForm } from "react-hook-form";

import { useGetUser } from "../Authentication/useGetUser";
import { useUpdateDetails } from "../Authentication/useUpdateDetails";
import Button from "../ui/Button";
import MiniLoader from "../ui/MiniLoader";

function UpdateUserForm() {
  const {
    user: {
      email,
      user_metadata: { fullname: fullName },
    },
  } = useGetUser();
  const { UpdateDetail, isUpdating } = useUpdateDetails();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const fullname = data.fullname;
    const avatar = data?.avatar[0];
    UpdateDetail({ fullname, avatar });
  };
  return (
    <form
      className="flex flex-col gap-4 py-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between  items-center  max-w-[65%]">
        <label htmlFor="email address" className="text-[12px] font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          disabled
          className="border rounded-sm border-white bg-gray-200 outline-none w-[15rem] px-2 py-1 text-[14px] disabled:bg-gray-200 disabled:cursor-not-allowed"
          defaultValue={email}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </div>
      <div className="flex  justify-between  items-center  max-w-[65%]">
        <label htmlFor="fullname" className="text-[12px] font-medium">
          Full name
        </label>
        <input
          type="text"
          name="fullname"
          disabled={isUpdating}
          className="border rounded-[2px] border-white  bg-gray-200 outline-none w-[15rem] px-2 py-[3px] text-[14px] disabled:bg-gray-200"
          defaultValue={fullName}
          {...register("fullname", {
            required: "This field is required",
          })}
        />
      </div>
      <div className="flex  justify-between  items-center  max-w-[65%]">
        <label htmlFor="avatar" className="text-[12px] font-medium">
          Profile Image
        </label>
        <input
          disabled={isUpdating}
          type="file"
          name="avatar"
          accept="image/*"
          className="file:rounded-sm file:outline-none   file:bg-blue-500  file:py-1.5 file:px-2.5 file:cursor-pointer file:text-[11px] text-[12px] file:text-white file:font-semibold  w-[15rem] "
          {...register("avatar")}
        />
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
        <Button
          style="bg-blue-500 w-[6rem] h-[2rem] outline-none border-none px-5 text-[13px] py-1.5 rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium"
          disabled={isUpdating}
        >
          {isUpdating ? <MiniLoader /> : <p>Update</p>}
        </Button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
