import { useMutation } from '@tanstack/react-query';
import supabase from '../../services/supabase';


export const usePlaceOrders = () => {
  return useMutation({
    mutationFn: async (userId: string |undefined) => {
      const { data, error } = await supabase
        .rpc('place_orders', { user_id_param: userId });
      if (error) {
        throw new Error(error.message);
      }
      
      return data;
    },
    onSuccess: (data) => {
      // You can add additional success handling here
      console.log('Orders placed successfully:', data.orders);
    },
    onError: (error: Error) => {
      // You can add additional error handling here
      console.error('Order placement failed:', error.message);
    }
  });
};