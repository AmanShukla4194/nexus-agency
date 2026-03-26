"use client";

import { motion } from "framer-motion";

const studies = [
  {
    title: "E-commerce Brand Growth",
    result: "+250% Revenue Increase",
    desc: "Scaled an online store using paid ads and conversion optimization.",
  },
  {
    title: "SaaS Lead Generation",
    result: "+180% Qualified Leads",
    desc: "Built a full-funnel strategy with SEO and landing pages.",
  },
  {
    title: "Local Business Expansion",
    result: "+300% Traffic Growth",
    desc: "Improved local SEO and Google rankings significantly.",
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Case Studies
        </h2>

        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Real results from real clients. See how we help businesses grow.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">

          {studies.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg text-left"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-brand-500 font-medium">
                {item.result}
              </p>

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