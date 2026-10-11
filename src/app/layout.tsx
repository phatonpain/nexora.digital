import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Digital — Engenharia & Design de Alto Padrão",
  description: "Sites, aplicativos, e-commerces e sistemas sob medida. Engenharia digital de elite, design de alto padrão e orçamento gratuito, sem compromisso.",
  openGraph: {
    title: "Nexora Digital — Sua presença, inesquecível.",
    description: "Engenharia e design sob medida para a próxima fase do seu negócio. Solicite um orçamento gratuito.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
