// "use client";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <CaseStudies />
      <CTA />
      <Blog />
    </>
  );
}