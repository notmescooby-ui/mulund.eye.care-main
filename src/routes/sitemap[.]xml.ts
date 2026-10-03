import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const PRODUCTION_URL = "https://www.mulundeyecare.com";

const getBaseUrl = (): string => {
  const envUrl =
    (typeof process !== "undefined" && (process.env?.SITE_URL || process.env?.BASE_URL)) ||
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL);
  return (envUrl || PRODUCTION_URL).replace(/\/+$/, "");
};

const BASE_URL = getBaseUrl();

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = getBaseUrl();
        const currentDate = new Date().toISOString().split("T")[0];
        const serviceSlugs = [
          "cataract",
          "glaucoma",
          "dry-eye",
          "comprehensive-checkup",
          "diabetic-eye",
          "pediatric",
          "computer-vision",
          "contact-lens",
          "lasik-evaluation",
          "vision-therapy",
        ];

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: currentDate },
          ...serviceSlugs.map((slug) => ({
            path: `/services/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
            lastmod: currentDate,
          })),
          { path: "/insurance", changefreq: "monthly", priority: "0.7", lastmod: currentDate },
          { path: "/when-to-consult", changefreq: "monthly", priority: "0.7", lastmod: currentDate },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
        ];
        const urls = entries
          .map((e) => {
            const loc = e.path === "/" ? baseUrl : `${baseUrl}${e.path}`;
            return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
