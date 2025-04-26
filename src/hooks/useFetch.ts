import { useState, useEffect } from 'react';
import type { CareerAPIResponse } from '../types';

export const useFetch = <T>(
  url: string,
  transformCareerData?: (data: CareerAPIResponse) => T,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error while loading data');
        const result = await response.json();
        setData(transformCareerData ? transformCareerData(result) : result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, transformCareerData]);

  return { data, loading, error };
};
