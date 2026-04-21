"use client";

import { motion } from "framer-motion";

export default function DunePage() {
  const charts = [
    {
      id: 1,
      title: "Chart 1",
      embed: "https://dune.com/embeds/6746201/10608649",
      queryLink: "https://dune.com/queries/6746201/10608649/",
    },
    {
      id: 2,
      title: "Chart 2",
      embed: "https://dune.com/embeds/6745996/10608436",
      queryLink: "https://dune.com/queries/6745996/10608436/",
    },
    {
      id: 3,
      title: "Chart 3",
      embed: "https://dune.com/embeds/6746431/10608941",
      queryLink: "https://dune.com/queries/6746431/10608941/",
    },
    {
      id: 4,
      title: "Chart 4",
      embed: "https://dune.com/embeds/6746250/10608713",
      queryLink: "https://dune.com/queries/6746250/10608713/",
    },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-3">
          On-Chain Analytics
        </h1>
        <p className="text-gray-400 text-lg">
          Real-time blockchain insights and DeFi analytics dashboards.
        </p>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {charts.map((chart, index) => (
          <motion.div
            key={chart.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black hover:border-primary transition-all duration-300">
              {/* Header */}
              <div className="p-4 flex justify-between items-center border-b border-gray-800 bg-[#111]">
                <h3 className="text-sm font-semibold text-primary">{chart.title}</h3>
                <a
                  href={chart.queryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-primary transition"
                  title="Open in Dune"
                >
                  ↗
                </a>
              </div>
              
              {/* Chart */}
              <div style={{ height: "400px" }}>
                <iframe
                  src={chart.embed}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ borderRadius: "0 0 16px 16px" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Dashboard Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <a
          href="https://dune.com/munna90s/stablecoins-across-all-chains?utm_source=share&utm_medium=copy&utm_campaign=dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-xl hover:opacity-90 transition"
        >
          View More Dashboards →
        </a>
      </motion.div>
    </div>
  );
}