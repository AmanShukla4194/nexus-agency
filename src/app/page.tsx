import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";
import { Blog } from "@/components/sections/Blog";

import { client } from "@/sanity/lib/client";
import { HOME_POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(HOME_POSTS_QUERY); // ✅ FETCH DATA

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <CaseStudies />
      <CTA />

      {/* pass posts here */}
      <Blog posts={posts} />
    </>
  );
}