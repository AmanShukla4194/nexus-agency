import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 🔥 Fetch your blog content
    const posts = await client.fetch(`
      *[_type == "post"]{
        title,
        body
      }
    `);

    // Convert blog content into text
    const context = posts
      .map((p: any) => `${p.title}: ${JSON.stringify(p.body)}`)
      .join("\n\n");

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `
You are an AI assistant for Nexus Agency.

Services:
- SEO Optimization
- Paid Ads
- Content Marketing
- Web Design

Use blog content + services to answer.

Always:
- Be concise
- Suggest contacting us when relevant

${context}

Rules:
- Answer ONLY based on this content
- Be professional and helpful
- Promote services when relevant
`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content || "No response",
    });

  } catch (error) {
    return NextResponse.json({
      reply: "Error processing request",
    });
  }
}