import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PlaceOrders } from '../../services/apiOrders';


export const usePlaceOrders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:PlaceOrders,
    onSuccess: () => {
      // You can add additional success handling here
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error: Error) => {
      // You can add additional error handling here
      console.error('Order placement failed:', error.message);
    }
  });
};