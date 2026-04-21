"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Code2, Send, User } from "lucide-react";

export default function About() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("Sending...");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setContactStatus("Message sent! I'll get back to you soon.");
        setContactForm({ name: "", email: "", message: "" });
        console.log("[v0] Contact message saved:", data);
      } else {
        setContactStatus(data.error || "Failed to send message");
      }
    } catch (error) {
      setContactStatus("Failed to send message");
      console.error("[v0] Contact form error:", error);
    }

    setTimeout(() => setContactStatus(""), 3000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("Subscribing...");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus("Thanks for subscribing!");
        setNewsletterEmail("");
        console.log("[v0] Newsletter subscription saved:", data);
      } else {
        setNewsletterStatus(data.error || "Failed to subscribe");
      }
    } catch (error) {
      setNewsletterStatus("Failed to subscribe");
      console.error("[v0] Newsletter form error:", error);
    }

    setTimeout(() => setNewsletterStatus(""), 3000);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
        <p className="text-gray-400 space-y-4">
          <span className="block">
            Web3 Analyst skilled in Dune Analytics, DeFi research, and blockchain intelligence tools. I'm passionate about transforming complex blockchain data into actionable insights.
          </span>
          <span className="block">
            My work sits at the intersection of AI, on-chain analytics, and decentralized finance (DeFi), where I build data-driven solutions to understand market behavior, protocols, and user activity.
          </span>
          <span className="block">
            I specialize in tools like Dune Analytics, Arkham, DeFiLlama, and Messari, using them to track wallet activity, analyze token flows, and uncover trends across the crypto ecosystem.
          </span>
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-12 p-6 bg-[#111] rounded-2xl border border-gray-800"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Connect With Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="https://github.com/durgeshrajbhar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 flex items-center gap-3 group"
          >
            <Code2 className="w-5 h-5 text-gray-400 group-hover:text-primary transition" />
            <span className="text-sm font-semibold text-gray-400 group-hover:text-primary transition">GitHub</span>
          </a>
          <a
            href="https://twitter.com/munna90s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 flex items-center gap-3 group"
          >
            <User className="w-5 h-5 text-gray-400 group-hover:text-primary transition" />
            <span className="text-sm font-semibold text-gray-400 group-hover:text-primary transition">Twitter</span>
          </a>
          <a
            href="https://linkedin.com/in/durgeshrajbhar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 flex items-center gap-3 group"
          >
            <User className="w-5 h-5 text-gray-400 group-hover:text-primary transition" />
            <span className="text-sm font-semibold text-gray-400 group-hover:text-primary transition">LinkedIn</span>
          </a>
          <a
            href="mailto:rajbhardurgesh236@gmail.com"
            className="p-4 bg-black rounded-lg border border-gray-800 hover:border-primary transition-all duration-300 flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition" />
            <span className="text-sm font-semibold text-gray-400 group-hover:text-primary transition">Email</span>
          </a>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#111] rounded-2xl border border-gray-800"
        >
          <h2 className="text-xl font-bold text-primary mb-4">📨 Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">Get weekly insights on Web3 analytics and DeFi research.</p>
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="rajbhardurgesh3236@gmail.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary outline-none transition"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-black font-bold rounded-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
            {newsletterStatus && (
              <p className="text-green-400 text-sm">{newsletterStatus}</p>
            )}
          </form>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-6 bg-[#111] rounded-2xl border border-gray-800"
        >
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Send className="w-5 h-5" /> Get In Touch
          </h2>
          <form onSubmit={handleContactSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              required
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary outline-none transition"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              required
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary outline-none transition"
            />
            <textarea
              placeholder="Your message..."
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              required
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-primary outline-none transition resize-none h-24"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-black font-bold rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
            {contactStatus && (
              <p className="text-green-400 text-sm">{contactStatus}</p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-6 bg-[#111] rounded-2xl border border-gray-800"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Tools & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Dune Analytics", "Arkham", "Python", "Next.js", "DeFiLlama", "Messari", "TypeScript", "Solidity"].map((skill, i) => (
            <div
              key={i}
              className="p-4 bg-black rounded-lg border border-gray-800 text-center text-sm font-semibold text-primary hover:border-primary transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
