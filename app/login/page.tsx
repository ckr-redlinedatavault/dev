"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black text-white font-sans selection:bg-red-600/30 selection:text-white">
      
      {/* Subtle Background Detail */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm px-6"
      >
        {/* Simple Branding */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Sign in<span className="text-red-600">.</span>
          </h1>
          <p className="text-zinc-500 text-sm">
            Enter your credentials to access the portal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Email Field - Just a Line */}
          <div className="space-y-1">
            <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Email Address
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@redlix.dev"
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-800"
            />
          </div>

          {/* Password Field - Just a Line */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                Password
              </label>
              <button type="button" className="text-[10px] text-zinc-600 hover:text-red-500 transition-colors">
                Forgot?
              </button>
            </div>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder:text-zinc-800"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-none text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              Authenticate <ArrowRight size={14} />
            </button>
          </div>
        </form>

        {/* Minimal Footer */}
        <footer className="mt-16 border-t border-zinc-900 pt-6">
          <p className="text-[10px] text-zinc-600 font-medium tracking-[0.1em] uppercase">
            © 2025 Redlix Corp / Core Infrastructure
          </p>
        </footer>
      </motion.div>
    </div>
  );
}