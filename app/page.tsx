"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Dither from "@/components/Dither";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Terminal, Activity } from 'lucide-react';

export default function DeveloperPortal() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-red-600/30 selection:text-white">
      
      {/* 1. BACKGROUND LAYER (Dither) */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* 2. OVERLAY LAYER: VIGNETTE & GRID */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none" />
      <div className="absolute inset-0 z-[2] opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 3. UI LAYER (Content) */}
      <div className="relative z-10 flex flex-col h-full w-full">
        
        {/* TOP BAR / LOGO */}
        <header className="p-8 w-full">
          <div className="flex items-center gap-2 group cursor-pointer w-fit">
            <span className="text-2xl font-light text-red-600 transition-transform group-hover:scale-y-125">|</span>
            <span className="text-lg font-black uppercase tracking-tighter text-white">
              Redlix<span className="text-red-600">.</span>Dev
            </span>
          </div>
        </header>

        {/* MAIN HERO CONTENT */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-red-600" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-red-600">
                V4.0 Engineering Access
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter uppercase mb-6"
            >
              Developer <br />
              Portal<span className="text-red-600">.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-zinc-400 max-w-sm font-medium leading-relaxed mb-10 uppercase tracking-tight"
            >
              Access high-performance APIs and tactical documentation. 
              Build with the <span className="text-white font-bold">Redlix SDK</span> for enterprise-grade scalability.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/login"
                className="group relative px-8 py-4 bg-red-600 text-white font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                  Initialize <ArrowRight size={14} />
                </span>
              </Link>
              
              <button className="px-8 py-4 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center gap-3 backdrop-blur-sm">
                <Terminal size={14} className="text-red-600" /> Documentation
              </button>
            </motion.div>
          </div>
        </main>

        {/* FOOTER / HUD */}
        <footer className="p-8 w-full flex justify-between items-end border-t border-white/5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Activity size={12} className="text-red-600 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/60">System Status: Nominal</span>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
              Uplink: HYD_17.38_SECURE
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-zinc-600" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{time} IST</span>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
              © 2025 REDLIX_CORP
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
