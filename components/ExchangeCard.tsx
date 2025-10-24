'use client';
import { AnalysisResult } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExchangeCard = ({ result }: { result: AnalysisResult }) => {
  const isPositive = result.deviation_percent >= 0;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white capitalize">
          {result.flow_type}
        </h3>
        <span
          className={`flex items-center gap-2 font-semibold text-lg ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={20} />
          ) : (
            <ArrowDownRight size={20} />
          )}
          {result.deviation_percent.toFixed(2)}%
        </span>
      </div>

      <div className="space-y-3 text-gray-300">
        <div className="flex justify-between">
          <span>Current Volume:</span>
          <span className="font-mono text-white">
            {result.current_volume_btc.toLocaleString('en-US')} BTC
          </span>
        </div>
        <div className="flex justify-between">
          <span>30d Avg Baseline:</span>
          <span className="font-mono text-white">
            {result.baseline_volume_btc_30d_avg.toLocaleString('en-US')} BTC
          </span>
        </div>
      </div>
      
      {result.alert && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ delay: 0.3 }}
          className="mt-4 flex items-center gap-2 p-2 text-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded-lg text-sm font-semibold"
        >
          <AlertTriangle size={16} />
          Significant Deviation Detected
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExchangeCard;