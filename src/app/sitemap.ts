import { MetadataRoute } from "next";
import { BLOG_ARTICLES, SERVICES, AUTHORS, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = SITE_URL;
    const now = new Date().toISOString();

    const staticPages: MetadataRoute.Sitemap = [
        { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${base}/cennik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/serwis-rowerowy-mokotow`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/serwis-rowerowy-ursynow`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/serwis-rowerowy-wola`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ];

    const servicePages: MetadataRoute.Sitemap = SERVICES.map(s => ({
        url: `${base}/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map(a => ({
        url: `${base}/blog/${a.slug}`,
        lastModified: a.updatedDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const authorPages: MetadataRoute.Sitemap = AUTHORS.map(a => ({
        url: `${base}/authors/${a.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));

    return [...staticPages, ...servicePages, ...blogPages, ...authorPages];
}
