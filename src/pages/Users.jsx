import React from "react";
import SignUpform from "../Authentication/SignUpform";

function Users() {
  return (
    <main className="px-6 py-3 flex flex-col gap-3">
      <h3>Add A New User</h3>

      <SignUpform />
    </main>
  );
}

export default Users;
