import { useQuery } from "@tanstack/react-query";
import supabase from "../../services/supabase";

function useGetSizes() {
  const {
    isLoading,
    data: sizes,
    error,
  } = useQuery({
    queryKey: ["sizes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sizes")
        .select("name");

      if (error) throw new Error(error.message);
      const sizes = data.map(size=>size.name)

      return sizes
    },
  });

  

  return { sizes, isLoading, error };
}

export default useGetSizes;
