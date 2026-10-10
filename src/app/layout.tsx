import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
// // import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Providers } from './providers'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venkata Rohan Kambhampati | Staff AI Engineer",
  description:
    "Staff AI Engineer building production LLM, RAG, and multi-agent systems on Google Cloud and Microsoft Azure: Google ADK, Gemini, MCP, A2A.",
  metadataBase: new URL("https://venkatarohan.vercel.app"),
  openGraph: {
    title: "Venkata Rohan Kambhampati | Staff AI Engineer",
    description: "Agentic AI on Google Cloud & Azure: Google ADK, Gemini, MCP, A2A, RAG.",
    url: "https://venkatarohan.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <Providers>
          <Header />
          <main className="overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}