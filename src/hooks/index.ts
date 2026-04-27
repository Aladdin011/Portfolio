/**
 * Custom Hooks
 * Reusable state and side-effect logic
 */

import { useEffect, useState, useCallback } from 'react';
import type { FormState } from '@/types';

/**
 * useForm Hook
 * Manages form state with validation
 */
export function useForm<T extends Record<string, any>>(
  initialState: T,
  onSubmit?: (data: T) => Promise<void>
) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
      setError(null);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);

      try {
        if (onSubmit) {
          await onSubmit(data);
          setSuccess(true);
          setData(initialState);
          setTimeout(() => setSuccess(false), 3000);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    },
    [data, initialState, onSubmit]
  );

  const reset = useCallback(() => {
    setData(initialState);
    setError(null);
    setSuccess(false);
  }, [initialState]);

  return {
    data,
    setData,
    handleChange,
    handleSubmit,
    reset,
    isLoading,
    error,
    success,
  };
}

/**
 * useAsync Hook
 * Handles async operations with loading and error states
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await asyncFunction();
      setData(response);
      return response;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  // Call execute on mount if immediate
  useEffect(() => {
    if (immediate) {
      execute().catch(() => {
        // Error is handled in state
      });
    }
  }, [execute, immediate]);

  return { data, isLoading, error, execute };
}

/**
 * useDebounce Hook
 * Debounces a value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
