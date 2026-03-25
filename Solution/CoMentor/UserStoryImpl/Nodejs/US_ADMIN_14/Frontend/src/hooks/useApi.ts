import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

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
        setState({ data: response.data, loading: false, error: null });
        return response.data;
      } catch (err: unknown) {
        const errorMessage =
          axios.isAxiosError(err)
            ? err.response?.data?.message || err.message
            : err instanceof Error ? err.message : 'An unexpected error occurred';
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
export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm, setValues };
}

/**
 * Hook for validating form data
 */
export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validate: (values: T) => Record<string, string>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (callback: (values: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        callback(values);
      }
    };
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, handleSubmit, resetForm, setValues };
}
