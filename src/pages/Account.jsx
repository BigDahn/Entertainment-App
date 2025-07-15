import React from "react";
import UpdateUserForm from "../ui/UpdateUserForm";
import UpdatePasswordForm from "../ui/UpdatePasswordForm";

function Account() {
  return (
    <div>
      <h1>Update Your Account </h1>
      <div>
        <h1>Update User Data</h1>
        <UpdateUserForm />
      </div>
      <div>
        <h1>Update Password</h1>
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default Account;
