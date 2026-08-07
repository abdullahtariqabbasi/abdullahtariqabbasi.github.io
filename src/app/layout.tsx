import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Abdullah Tariq Abbasi — Full Stack AI Engineer",
  description:
    "Full Stack AI Engineer with 7+ years building production Computer Vision, Generative AI, Agentic AI, and full-stack web platforms.",
  keywords: [
    "Full Stack AI Engineer",
    "AI Engineer",
    "Computer Vision",
    "Generative AI",
    "Agentic AI",
    "MLOps",
    "LLM Fine-Tuning",
    "Next.js",
    "LangChain",
    "Abdullah Tariq Abbasi",
  ],
  authors: [{ name: "Abdullah Tariq Abbasi" }],
  openGraph: {
    title: "Abdullah Tariq Abbasi — Full Stack AI Engineer",
    description:
      "Full Stack AI Engineer (7+ yrs) building production AI systems and full-stack web platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
