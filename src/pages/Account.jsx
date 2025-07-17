import UpdateUserForm from "../ui/UpdateUserForm";
import UpdatePasswordForm from "../ui/UpdatePasswordForm";

function Account() {
  return (
    <main className="px-3 py-3 flex flex-col gap-4">
      <h1 className="text-[20px] font-normal">Update Your Account </h1>
      <div className="m-auto w-full flex flex-col items-start px-[3rem]  gap-6">
        <div className="flex flex-col bg-white rounded-sm max-w-[80%] w-[700px] py-4 px-5 gap-2">
          <h1>Update User Data</h1>
          <UpdateUserForm />
        </div>
        <div className="flex flex-col bg-white rounded-sm max-w-[80%] w-[700px] py-3 px-5 gap-2">
          <h1>Update Password</h1>
          <UpdatePasswordForm />
        </div>
      </div>
    </main>
  );
}

export default Account;
