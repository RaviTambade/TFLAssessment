import { useState, useCallback } from 'react';
import axios from 'axios';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (config: any) => Promise<T | null>;
}

/**
 * Custom hook for handling API calls with loading and error states
 */
export function useApi<T = any>(
  initialData: T | null = null
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: initialData,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (config: any) => {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await axios(config);
        setState({ data: response.data as T, loading: false, error: null });
        return response.data as T;
      } catch (err: unknown) {
        let errorMessage = 'An unexpected error occurred';
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'object' && err !== null && 'response' in err) {
          const axiosErr = err as any;
          errorMessage = axiosErr.response?.data?.message || axiosErr.message || 'An unexpected error occurred';
        }
        setState({ data: null, loading: false, error: errorMessage });
        return null;
      }
    },
    []
  );

  return { ...state, execute };
}

/**
 * Hook for managing form state with TypeScript support
 */
export function useFormState<T extends Record<string, any>>(
  initialState: T
): [T, (field: keyof T, value: any) => void, () => void] {
  const [state, setState] = useState(initialState);

  const updateField = (field: keyof T, value: any) => {
    setState((prev: T) => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, updateField, reset];
}
