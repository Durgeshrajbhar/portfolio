"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-3">Achievements</h1>
        <p className="text-gray-400">Recognition and certifications for continuous learning</p>
      </motion.div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Hackathon Finalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300"
        >
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-primary mb-2">Hackathon Finalist</h3>
          <p className="text-gray-400">Participated in blockchain and Web3 hackathons, building innovative solutions and competing with industry leaders.</p>
        </motion.div>

        {/* Blockchain Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300"
        >
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-xl font-bold text-primary mb-2">Blockchain Deep Dive</h3>
          <p className="text-gray-400 mb-4">Completed Binance Academy's comprehensive blockchain certification course.</p>
          <a
            href="https://www.binance.com/en/academy/courses/certificate/3c4edb6ff79397188e732582ab7e230084528b32006c5d317017b3f134c1e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-black rounded-lg font-semibold text-sm hover:opacity-90 transition"
          >
            View Certificate ↗
          </a>
        </motion.div>
      </div>

      {/* Certificate Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 bg-[#111] rounded-2xl border border-gray-800"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Certification</h2>
        <div className="relative w-full rounded-xl overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300">
          <Image
            src="/block.jpg"
            alt="Binance Academy Blockchain Certification"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Binance Academy Certificate of Completion - Blockchain Deep Dive Course
        </p>
      </motion.div>
    </div>
  );
}
