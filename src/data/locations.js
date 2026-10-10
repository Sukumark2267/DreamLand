export const indiaInstagram = "https://www.instagram.com/dreamland_vikasnagar/";
export const canadaInstagram = "https://www.instagram.com/dreamland_brampton/";
export const officialInstagram = "https://www.instagram.com/dreamlandathletics_official/";

// Keep profile links and locally generated QR assets together.
export const instagramAccounts = [
  { id: "canada", label: "Canada", city: "Brampton, Ontario", handle: "@dreamland_brampton", href: canadaInstagram, qr: "/images/social/instagram-canada.svg" },
  { id: "india", label: "India", city: "Vikas Nagar, Dehradun", handle: "@dreamland_vikasnagar", href: indiaInstagram, qr: "/images/social/instagram-india.svg" },
  { id: "official", label: "Official", city: "Dreamland Athletics", handle: "@dreamlandathletics_official", href: officialInstagram, qr: "/images/social/instagram-official.svg" },
];
export const indiaMaps = process.env.NEXT_PUBLIC_INDIA_MAPS_URL || "";
export const indiaMapsSearch = "https://www.google.com/maps/search/?api=1&query=Dreamland+Athletics+Vikasnagar+Dehradun";
export const indiaHours = "Sunday–Friday: 6:00 am – 11:00 pm";
