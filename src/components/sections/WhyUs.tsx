"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Data-Driven Approach",
    desc: "We make decisions based on real analytics and performance metrics.",
  },
  {
    title: "Proven Results",
    desc: "Our strategies have consistently delivered measurable growth.",
  },
  {
    title: "Full-Funnel Strategy",
    desc: "From awareness to conversion, we optimize every step.",
  },
  {
    title: "Dedicated Support",
    desc: "We work closely with you to achieve your business goals.",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Why Choose Us
        </h2>

        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          We combine strategy, creativity, and technology to deliver exceptional results.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/10 bg-dark-900/50 backdrop-blur-lg text-left"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};