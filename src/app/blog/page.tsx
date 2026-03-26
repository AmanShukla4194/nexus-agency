import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }
`;

export default async function BlogPage() {
  const posts = await client.fetch(QUERY);

  return (
    <section className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Our Services
        </h1>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="block"
            >
              <div className="p-6 rounded-xl border border-black-200 bg-blue-400 hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(400).url()}
                    alt={post.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                )}

                <h3 className="text-xl font-semibold text-white">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-white-600">
                  {new Date(post.publishedAt).toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
