import useSWR from "swr";
import { ApiResponse } from "../types";

// The fetcher function tells SWR how to get the data from our API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useExchangeData(exchange: string | null) {
  // Construct the API URL. The backend is running on port 8000.
  // const apiUrl = exchange ? `http://127.0.0.1:8000/analysis/${exchange}` : null;
  // =================== THE BACKEND IS NOT HOSTED YET> SO KEEP THE MOCK DATA FOR IT ===================
  // ++++++++++++++++++++++++++++++++ You can get the backend code from https://github.com/GihanEbi/bitcoin-flow-analyzer-backend.git ++++++++++++++++++++++++++++++++
  let apiUrl = {};
  if (exchange === "Binance") {
    apiUrl = {
      analysis: [
        {
          exchange: "Binance",
          flow_type: "inflow",
          current_volume_btc: 8163.5,
          baseline_volume_btc_30d_avg: 10137.9,
          deviation_percent: -19.48,
          alert: false,
        },
        {
          exchange: "Binance",
          flow_type: "outflow",
          current_volume_btc: 14277.44,
          baseline_volume_btc_30d_avg: 9620.4,
          deviation_percent: 48.41,
          alert: true,
        },
      ],
    };
  } else if (exchange === "Coinbase") {
    apiUrl = {
      analysis: [
        {
          exchange: "Coinbase",
          flow_type: "inflow",
          current_volume_btc: 13776.76,
          baseline_volume_btc_30d_avg: 10919.17,
          deviation_percent: 26.17,
          alert: true,
        },
        {
          exchange: "Coinbase",
          flow_type: "outflow",
          current_volume_btc: 3567.31,
          baseline_volume_btc_30d_avg: 7734.48,
          deviation_percent: -53.88,
          alert: false,
        },
      ],
    };
  } else if (exchange === "Kraken") {
    apiUrl = {
      analysis: [
        {
          exchange: "Kraken",
          flow_type: "inflow",
          current_volume_btc: 7392.56,
          baseline_volume_btc_30d_avg: 5302.87,
          deviation_percent: 39.41,
          alert: true,
        },
        {
          exchange: "Kraken",
          flow_type: "outflow",
          current_volume_btc: 10769.01,
          baseline_volume_btc_30d_avg: 9312.99,
          deviation_percent: 15.63,
          alert: true,
        },
      ],
    };
  }

  // const { data, error, isLoading } = useSWR<ApiResponse>(apiUrl, fetcher, {
  //   // Optional: Re-fetch the data every 60 seconds to keep it fresh
  //   refreshInterval: 60000,
  // });

  return {
    data: apiUrl as ApiResponse,
    isLoading: false,
    isError: false,
  };
}
