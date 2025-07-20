import React from "react";
import AddNewUser from "../Settings/AddNewUser";
import DeleteAccount from "../Settings/DeleteAccount";

function Settings() {
  return (
    <main className="px-6 flex flex-col gap-3 py-3">
      <h2 className="text-[18px] font-semibold">Settings</h2>
      <section className="flex flex-col gap-[2rem]">
        <AddNewUser />
        <DeleteAccount />
      </section>
    </main>
  );
}

export default Settings;
