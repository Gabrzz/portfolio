import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel | AI Engineer, Automation Architect & Tech Consultant",
  description: "Construindo soluções inteligentes para empresas através de Inteligência Artificial, automação avançada e arquitetura de tecnologia de alto nível.",
  keywords: [
    "AI Engineer",
    "Automation Architect",
    "Technology Consultant",
    "Inteligência Artificial",
    "Automação",
    "Agentes de IA",
    "Next.js",
    "TypeScript",
    "RAG",
    "n8n",
    "OpenAI"
  ],
  authors: [{ name: "Gabriel" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#050505",
  openGraph: {
    title: "Gabriel | AI Engineer, Automation Architect & Tech Consultant",
    description: "Construindo soluções inteligentes para empresas através de Inteligência Artificial, automação avançada e arquitetura de tecnologia de alto nível.",
    url: "https://gabriel.tech", // Placeholder, will update on host
    siteName: "Gabriel Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel | AI Engineer, Automation Architect & Tech Consultant",
    description: "Construindo soluções inteligentes para empresas através de Inteligência Artificial, automação avançada e arquitetura de tecnologia de alto nível.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased bg-darkBg text-white selection:bg-techCyan/30 selection:text-white overflow-x-hidden">
        {/* Custom cursor for premium interaction */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
