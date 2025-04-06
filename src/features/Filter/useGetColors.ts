import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";

function useGetColors() {
  const {
    isLoading,
    data: colors,
    error,
  } = useQuery({
    queryKey: ["colors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("colors")
        .select("name");

      if (error) throw new Error(error.message);
      const colors = data.map(color=>color.name)

      return colors
    },
  });

  

  return { colors, isLoading, error };
}

export default useGetColors;
