import supabase from "./supabase";

interface SignupProps {
  email: string;
  password: string;
}

export async function signup({ email, password }: SignupProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data)
  return data;
}


interface LoginProps {
    email: string;
    password: string;
  }

export async function login({email,password}:LoginProps){
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    
      if (error) throw new Error(error.message);
    
      return data;
}

interface CurrentUserType {
  id: string;
  email: string | undefined;
  userId: string | undefined;
  role: string | undefined;
  userName: string | undefined;
}

export async function getCurrentUser()  {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const Authuser = data.user;

  return {
    id: Authuser.id,
    isAuth:Authuser?.role,
    email: Authuser.email,
  };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}