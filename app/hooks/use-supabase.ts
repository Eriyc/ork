import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';

export const useSupabaseQuery = <T extends object[] | object>(
  query: Promise<PostgrestSingleResponse<T>>,
) => {
  const [queryState, setQueryState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await query;
        if (error) throw new Error(`Error ${error.code}: ${error.message}`);
        setQueryState(prev => ({ ...prev, data, loading: false, error: null }));
      } catch (error) {
        if (error instanceof Error) {
          setQueryState(prev => ({
            ...prev,
            data: null,
            loading: false,
            error: error as Error,
          }));
          Alert.alert('An error occured', error.message);
        }
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return queryState;
};
