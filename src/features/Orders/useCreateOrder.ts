import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../services/supabase';




export function useCreateOrder() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const createOrder = async (orders) => {
    setLoading(true);
    setError(null);

    try {
      // Insert each item as a separate order
      const { data, error } = await supabase
        .from('orders')
        .insert(orders)
        .select();

      if (error) throw error;

      // Optionally you could send the user to a confirmation page
      navigate('/order-confirm', {
        state: {
          orderId: data?.[0]?.id, // or a list of order ids
        },
      });

      return data;
    } catch (err: any) {
      console.error('Order creation error:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createOrder, loading, error };
}
