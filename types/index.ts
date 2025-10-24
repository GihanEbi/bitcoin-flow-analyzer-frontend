export interface AnalysisResult {
  exchange: string;
  flow_type: 'inflow' | 'outflow';
  current_volume_btc: number;
  baseline_volume_btc_30d_avg: number;
  deviation_percent: number;
  alert: boolean;
}

export interface ApiResponse {
  analysis: AnalysisResult[];
}