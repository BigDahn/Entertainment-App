import React from "react";
import ResetPasswordForm from "../Authentication/ResetPasswordForm";

function ResetPassword() {
  return (
    <div className="flex flex-col  justify-center h-screen items-center m-auto w-[100%] bg-gray-200">
      <section className=" py-4 text-center w-[370px]  max-w-[100%]   items-center justify-center flex flex-col gap-3">
        <img src="/logo.svg" />
        <div className=" bg-white w-full py-4">
          <h2 className="text-[15px] font-semibold ">Reset Password</h2>
          <ResetPasswordForm />
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;
