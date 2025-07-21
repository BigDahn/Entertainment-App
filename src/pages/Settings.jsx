import React from "react";
import AddNewUser from "../Settings/AddNewUser";
import DeleteAccount from "../Settings/DeleteAccount";
import { useSelector } from "react-redux";
import DeleteConfirmationBox from "../ui/DeleteConfirmationBox";

function Settings() {
  const { isDeleteModal } = useSelector((store) => store.Entertainment);

  console.log(isDeleteModal);
  return (
    <>
      <main className="px-6 flex flex-col gap-3 py-3">
        <h2 className="text-[18px] font-semibold">Settings</h2>
        <section className="flex flex-col gap-[2rem]">
          <AddNewUser />
          <DeleteAccount />
        </section>
      </main>
      {isDeleteModal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300/40">
          <DeleteConfirmationBox />
        </div>
      )}
    </>
  );
}

export default Settings;
