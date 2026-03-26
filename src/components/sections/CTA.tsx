"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold"
        >
          Ready to Scale Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-white/60"
        >
          Let’s build a growth strategy tailored to your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-lg font-medium transition">
            <Link href="/book-call">Book a Free Call</Link>
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition">
            <Link href="/contact">Contact Us</Link>
          </button>
        </motion.div>

      </div>
    </section>
  );
};