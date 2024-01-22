import { useState, useEffect, useCallback } from 'react';

import { BASE_URL } from '@/app/utils/constants';

export function useWikiSearch<T>(searchTerm: string) {
  const [status, setStatus] = useState<{
    loading: boolean;
    error?: unknown;
    data?: T[];
  }>({
    loading: false,
  });

  const search = useCallback(async (query: string) => {
    const queryParams = new URLSearchParams({ q: query, limit: '20' });
    const url = `${BASE_URL}?${queryParams.toString()}`;

    setStatus({ loading: true });

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Failed to fetch data from Wikipedia');
      }

      const data = await res.json();

      if (data.pages) {
        setStatus({ loading: false, data: data.pages });
      } else {
        setStatus({ loading: false, data: [] });
      }
    } catch (error) {
      setStatus({ loading: false, error });
      console.error(error);
    }
  }, []);

  const clearData = useCallback(() => {
    setStatus({
      loading: false,
      error: null,
      data: [],
    });
  }, []);

  useEffect(() => {
    if (searchTerm && searchTerm.length > 2) {
      search(searchTerm);
    }
  }, [searchTerm, search]);

  return { ...status, clearData };
}
