export default function sitemap() {
  const routes = [
    ["", 1],
    ["/MemberShip", 0.8],
    ["/gallery", 0.7],
    ["/Reviews", 0.7],
    ["/ContactUs", 0.8],
    ["/india/gallery", 0.7],
    ["/india/reviews", 0.7],
  ];

  return routes.map(([route, priority]) => ({
    url: `https://www.dreamlandathletics.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
