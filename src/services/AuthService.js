import supabase, { supabaseUrl } from "./supabase";

export async function LoginAuth({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error("No current user logged in");
  }

  return data;
}

export async function updateUser({ fullname, avatar, password }) {
  let updatedData;
  if (password) updatedData = { password };
  if (fullname) updatedData = { data: { fullname } };

  const { data, error } = await supabase.auth.updateUser(updatedData);

  if (error) {
    throw new Error("Profile could not be updated");
  }
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}

export async function logOutUser() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Please try again...");
  }
}

export async function resetPassword(email) {
  let { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.log(error);
    throw new Error("Try again there was an error");
  }
}

export async function changePassword({ password }) {
  let updatedData = { password };

  const { data, error } = await supabase.auth.updateUser(updatedData);

  if (error) {
    throw new Error("Password could not be updated");
  }
  return data;
}
