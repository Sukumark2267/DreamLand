import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

config.autoAddCss = false;

// MAIN UI FONTS (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SPORTY BRAND FONT (Anton)
export const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.dreamlandathletics.com"),
  title: {
    default: "Dreamland Athletics | Gym & Fitness Studio in Brampton, Ontario",
    template: "%s | Dreamland Athletics",
  },
  description:
    "Dreamland Athletics is a community-focused gym and fitness studio in Brampton, Ontario dedicated to transformation, strength, and results.",
  keywords: [
    "Dreamland Athletics",
    "Dreamland Athletics Brampton",
    "gym in Brampton",
    "fitness studio Brampton",
    "best gym in Brampton",
    "personal training Brampton",
    "workout studio Brampton Ontario",
    "strength training Brampton",
    "community gym Brampton",
  ],
  applicationName: "Dreamland Athletics",
  authors: [{ name: "Dreamland Athletics" }],
  creator: "Dreamland Athletics",
  publisher: "Dreamland Athletics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dreamland Athletics | Gym & Fitness Studio in Brampton, Ontario",
    description:
      "Join Dreamland Athletics in Brampton for community, transformation, strength, and results.",
    url: "https://www.dreamlandathletics.com",
    siteName: "Dreamland Athletics",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamland Athletics | Gym & Fitness Studio in Brampton, Ontario",
    description:
      "Community-focused gym and fitness studio in Brampton dedicated to strength, transformation, and results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${anton.variable}
          antialiased
        `}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}