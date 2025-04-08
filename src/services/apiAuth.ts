import supabase from "./supabase";

const APP_URL = "http://localhost:5173";

//signup
interface SignupProps {
  email: string;
  password: string;
}
export async function signup({ email, password }: SignupProps) {
  // // Check if email exists in the database
  // const { data: userData, error: fetchError } = await supabase
  //   .from("users")
  //   .select("id")
  //   .eq("email", email)
  //   .maybeSingle();

  // //User already exist with that email
  // if (userData) throw new Error("User Exist with this email!");

  // if (fetchError) throw new Error(fetchError.message);

  //signup
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

//user login
interface LoginProps {
  email: string;
  password: string;
}
export async function login({ email, password }: LoginProps) {
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
    .select("role")
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

  return { isEmailVerified, email };
}

interface forgotPassProps {
  email: string;
}
export async function forgotPassword({ email }: forgotPassProps) {
  // Check if email exists in the database
  const { data: userData, error: fetchError } = await supabase
    .from("users") // Ensure your users table is accessible
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (fetchError || !userData) {
    throw new Error("No account found with this email.");
  }

  // If email exists, send reset password link
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: APP_URL + "/update-pass",
  });

  if (error) throw new Error(error.message);

  return;
}

interface verifyEmailOtpProps {
  email: string;
  otp: string;
}

export async function verifyEmailOtp({ email, otp }: verifyEmailOtpProps) {
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
    isBlocked:userData.is_blocked
  };
}

// user logges out from the app
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
