import { client } from "@/sanity/lib/client";
import { HOME_POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";


type Post = {
  _id: string;
  title: string;
  slug?: { current: string };
  mainImage?: any;
  publishedAt: string;
};

export const Blog = ({ posts }: { posts: Post[] }) => {

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center">
          Latest Blog Posts
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="block"
            >
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:scale-105 hover:border-white/20 transition duration-300 cursor-pointer">
                <img
                  src={urlFor(post.mainImage).width(400).url()}
                  alt={post.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />

                <h3 className="text-xl font-semibold">{post.title}</h3>

                <p className="mt-2 text-sm text-white/60">
                  {new Date(post.publishedAt).toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
