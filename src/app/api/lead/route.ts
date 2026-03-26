import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const result = await client.create({
      _type: "lead",
      ...data,
    });

    console.log("Saved lead:", result);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error saving lead:", error);

    return NextResponse.json({ success: false });
  }
}