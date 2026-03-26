"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold leading-tight"
        >
          Grow Your Brand With{" "}
          <span className="text-brand-500">Data-Driven Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
        >
          We help startups and businesses scale with SEO, paid ads, content
          strategy, and conversion-focused web design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Link href="/book-call">
            <button className="bg-brand-500 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition">
              Get Started
            </button>
          </Link>

          <Link href="/case-studies">
            <button className="bg-brand-500 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition">
              View Case Studies
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
