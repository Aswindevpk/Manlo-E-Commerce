import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/apiCustomers";

function useCustomers() {

  const {
    isLoading,
    data: customers,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
    retry: false,
  });

  return { isLoading, customers, error };
}

export default useCustomers;
