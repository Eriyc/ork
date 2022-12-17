import { useState } from 'react';

export const useSupabaseMutation = <T extends object[] | object>() => {
  const [mutationState, setMutationState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: false,
    error: null,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const execute = async (mutation: any) => {
    setMutationState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const { data, error } = await mutation;
      if (error) throw new Error(`Error ${error.code}: ${error.message}`);
      setMutationState(prev => ({
        ...prev,
        data,
        loading: false,
        error: null,
      }));
      return { data, error: null };
    } catch (error) {
      if (error instanceof Error) {
        setMutationState(prev => ({
          ...prev,
          data: null,
          loading: false,
          error: error as Error,
        }));
      }
      return { error, data: null };
    }
  };

  return { ...mutationState, execute };
};
