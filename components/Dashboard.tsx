'use client';
import { useState } from 'react';
import { useExchangeData } from '../hooks/useExchangeData';
import ExchangeCard from './ExchangeCard';
import { motion, AnimatePresence } from 'framer-motion';

const exchanges = ['Binance', 'Coinbase', 'Kraken'];

const Dashboard = () => {
  const [selectedExchange, setSelectedExchange] = useState(exchanges[0]);
  const { data, isLoading, isError } = useExchangeData(selectedExchange);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-white text-center mb-2 tracking-tight"
        >
          Bitcoin Exchange Flow Analysis
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center"
        >
          Real-time monitoring of exchange inflows and outflows.
        </motion.p>
      </header>

      <div className="flex justify-center gap-2 mb-8 p-1 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-lg">
        {exchanges.map((exchange) => (
          <button
            key={exchange}
            onClick={() => setSelectedExchange(exchange)}
            className={`w-full px-4 py-2 rounded-md text-sm font-semibold transition-colors relative ${
              selectedExchange === exchange
                ? 'text-white'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
            }`}
          >
            {selectedExchange === exchange && (
              <motion.div
                layoutId="active-exchange-pill"
                className="absolute inset-0 bg-blue-600 rounded-md"
                style={{ borderRadius: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{exchange}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedExchange}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="min-h-[250px]" // Prevents layout shift while loading
        >
          {isLoading && <div className="text-center text-gray-400 pt-16">Loading exchange data...</div>}
          {isError && <div className="text-center text-red-500 pt-16">Failed to load data. Is the backend API running?</div>}
          {data && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {data.analysis.map((result) => (
                <ExchangeCard key={result.flow_type} result={result} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;