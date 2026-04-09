import HomeClient from "./HomeClient";

export const metadata = {
  title: "Best Gym & Fitness Studio in Brampton, Ontario",
  description:
    "Dreamland Athletics is a community-focused gym and fitness studio in Brampton, Ontario offering strength training, memberships, transformation programs, and fitness services.",
  keywords: [
    "Dreamland Athletics",
    "gym in Brampton",
    "fitness studio Brampton",
    "best gym in Brampton",
    "strength training Brampton",
    "personal training Brampton",
    "gym memberships Brampton",
    "Dreamland Athletics Ontario",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dreamland Athletics | Best Gym & Fitness Studio in Brampton",
    description:
      "Join Dreamland Athletics in Brampton for strength, transformation, memberships, and community-driven fitness.",
    url: "https://www.dreamlandathletics.com",
    siteName: "Dreamland Athletics",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamland Athletics | Best Gym & Fitness Studio in Brampton",
    description:
      "Community-focused fitness studio in Brampton dedicated to strength, results, and transformation.",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Gym",
    name: "Dreamland Athletics",
    url: "https://www.dreamlandathletics.com",
    description:
      "Dreamland Athletics is a community-focused gym and fitness studio in Brampton, Ontario offering strength training, memberships, transformation programs, and fitness services.",
    telephone: "+1-226-577-2122",
    email: "dreamlandathletics@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "860 North Park Drive",
      addressLocality: "Brampton",
      addressRegion: "ON",
      postalCode: "L6S 4N5",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: "Brampton",
    },
    sameAs: [
      "https://www.instagram.com/dreamland_brampton"
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}