import supabase from "./supabase";

const APP_URL = "http://localhost:5173";


export async function signup({ email, password }:  {
  email: string;
  password: string;
}) {

  //signup
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if(data.user?.user_metadata.email !== email) throw new Error("Invalid Email")

  if (error) throw new Error(error.message);

  return data;
}


export async function login({ email, password }: {
  email: string;
  password: string;
}) {
  let isEmailVerified = true;
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  //registered but email not verified
  if (error && error?.code === "email_not_confirmed") {
    const { error: ResendError } = await supabase.auth.resend({
      type: "signup",
      email,
    });
    if (ResendError) {
      throw new Error(
        "Failed to resend verification email: " + ResendError.message
      );
    }
    isEmailVerified = false;
    return { isEmailVerified, email };
  }

  if (error) throw new Error(error.message);

  // Check role of user
  const { data: userData, error: fetchError } = await supabase
    .from("users")
    .select("id,role,email,is_blocked")
    .eq("email", email)
    .maybeSingle();

  if (fetchError) throw new Error(fetchError.message);

  //making sure this user is not admin
  if (userData?.role && userData?.role === "admin") {
    //if admin logout immediatly
    const { error } = await supabase.auth.signOut();
    if (error) console.log("issue is logout");
    throw new Error("invalid credentials");
  }

  const user = {
    id: userData?.id,
    isAuth: "authenticated",
    email: userData?.email,
    role: userData?.role,
    isBlocked: userData?.is_blocked,
  };

  return { isEmailVerified, email, user };
}


export async function forgotPassword({ email }: { email: string }) {
  // If email exists, send reset password link
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: APP_URL + "/update-pass",
  });

  if (error) throw new Error(error.message);

  return;
}

// email otp verify
export async function verifyEmailOtp({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) {
  const { error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "signup", // 'signup' means verifying after registration
  });

  if (error) throw new Error(error.message);

  return;
}

//fetches current user who is logged in
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  //get authuser in the supabase auth service
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const Authuser = data.user;

  //get my own usertable data
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("role,is_blocked")
    .eq("id", Authuser.id)
    .single();

  if (userError) throw new Error(userError.message);

  return {
    id: Authuser.id,
    isAuth: Authuser?.role,
    email: Authuser.email,
    role: userData.role,
    isBlocked: userData.is_blocked,
  };
}

// user logges out from the app
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
