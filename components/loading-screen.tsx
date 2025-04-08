"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setIsComplete(true);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-md px-4">
        <div className="relative h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
            className="absolute h-full rounded-full bg-green-600 dark:bg-green-500"
          />
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Loading... {progress}%
        </div>
      </div>
    </motion.div>
  );
}