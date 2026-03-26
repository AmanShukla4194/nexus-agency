import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ui/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexus Agency — Digital Marketing That Scales",
    template: "%s | Nexus Agency",
  },
  description:
    "We help ambitious brands grow through SEO, paid ads, content strategy, and conversion-focused web design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-dark-900 text-white antialiased`}
        style={{
    backgroundImage: "url('/images/dg3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
      >
        <div className="bg-black/70 min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <Chatbot />
        </div>
      </body>
    </html>
  );
}