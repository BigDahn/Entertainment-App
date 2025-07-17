import React from "react";
import LoginForm from "../Authentication/LoginForm";

function Login() {
  return (
    <div className="flex flex-col  justify-center h-screen items-center m-auto w-[100%] bg-gray-200">
      <section className=" py-4 text-center w-[370px]  max-w-[100%]   items-center justify-center flex flex-col gap-3">
        <img src="/logo.svg" />
        <h2 className="text-[15px] font-medium"></h2>
        <div className=" bg-white w-full">
          <LoginForm />
        </div>
      </section>
    </div>
  );
}

export default Login;
