import useSWR from 'swr';
import { ApiResponse } from '../types';

// The fetcher function tells SWR how to get the data from our API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useExchangeData(exchange: string | null) {
  // Construct the API URL. The backend is running on port 8000.
  const apiUrl = exchange ? `http://127.0.0.1:8000/analysis/${exchange}` : null;

  const { data, error, isLoading } = useSWR<ApiResponse>(apiUrl, fetcher, {
    // Optional: Re-fetch the data every 60 seconds to keep it fresh
    refreshInterval: 60000, 
  });

  return {
    data: data,
    isLoading,
    isError: error,
  };
}