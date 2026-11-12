import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const head = Chakra_Petch({ subsets: ["latin"], weight: ["400", "600"], variable: "--head" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--mono" });

export const metadata: Metadata = {
  title: "Tushar Singh | Every build is a small eureka.",
  description: "Tushar Singh, AI/ML engineer and web and DevOps engineer. Projects in medical imaging, weather forecasting and LLM agents.",
  metadataBase: new URL("https://eureka7.xyz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${head.variable} ${mono.variable}`}><body>{children}</body></html>;
}
