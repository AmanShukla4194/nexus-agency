"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google and drive organic traffic that converts.",
  },
  {
    title: "Paid Advertising",
    desc: "Maximize ROI with high-performing ad campaigns.",
  },
  {
    title: "Content Strategy",
    desc: "Engage your audience with powerful and consistent content.",
  },
  {
    title: "Web Design",
    desc: "Conversion-focused websites built for performance.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Our Services
        </h2>

        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          We provide end-to-end digital marketing solutions to grow your brand.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg text-left"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};