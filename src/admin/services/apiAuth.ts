import supabase from "../../services/supabase";

interface LoginProps {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginProps) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // Check role of user
  const { data: userData, error: fetchError } = await supabase
    .from("users")
    .select("id,role,email,is_blocked")
    .eq("email", email)
    .maybeSingle();


  if (fetchError) throw new Error(fetchError.message);

  //making sure this user is not user
  if (userData?.role && userData?.role === "user") {
    //if user logout immediatly
    const { error } = await supabase.auth.signOut();
    if (error) console.log("issue is logout")
    throw new Error("invalid credentials")
  }

  const user = {
    id: userData?.id,
    isAuth: "authenticated",
    email: userData?.email,
    role: userData?.role,
    isBlocked: userData?.is_blocked,
  };


  return user;
}