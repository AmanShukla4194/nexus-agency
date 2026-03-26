import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    body,
    mainImage
  }
`;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) return <div className="p-10">Post not found</div>;

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-display font-bold">{post.title}</h1>
      <img
        src={urlFor(post.mainImage).width(800).url()}
        alt={post.title}
        className="rounded-xl my-6"
      />

      <p className="mt-2 text-sm text-white/60">
        {new Date(post.publishedAt).toDateString()}
      </p>

      <div className="mt-8 prose prose-invert">
        <PortableText value={post.body} />
      </div>
    </section>
  );
}
