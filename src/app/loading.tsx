"use client";

import React, { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[100] flex flex-col items-center justify-center font-mono text-[#00FF41]">
      <div className="text-2xl md:text-4xl font-bold mb-8 animate-pulse">
        INITIALIZING_MATRIX...
      </div>
      
      <div className="w-[300px] md:w-[500px] h-2 bg-[#003B00] border border-[#00FF41] relative overflow-hidden">
        <div 
          className="h-full bg-[#00FF41] transition-all duration-100 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <div className="mt-4 text-sm md:text-base">
        LOADING_MODULES: {Math.floor(Math.min(progress, 100))}%
      </div>
    </div>
  );
}
