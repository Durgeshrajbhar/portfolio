"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Vibe coder & Analyst 🚀
      </motion.h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        I build blockchain dashboards, analyze on-chain data, and create DeFi insights using Dune, Arkham & Messari.
      </p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-6"
      >
        <Link href="/dune" className="px-6 py-3 bg-primary text-white rounded-xl inline-block font-semibold">
          View Analytic
        </Link>
      </motion.div>
     

      

    </main>
  );
}
