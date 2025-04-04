import supabase from "../../services/supabase";



interface LoginProps {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginProps) {
  // Check role of user
  const { data: userData, error: fetchError } = await supabase
    .from("users")
    .select("role")
    .eq("email", email)
    .maybeSingle();

  if (fetchError) throw new Error(fetchError.message);

  //making sure this user is not user
  if (userData?.role && userData?.role === "user") {
    throw new Error("Invalid Credentials");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return;
}