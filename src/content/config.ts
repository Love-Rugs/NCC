import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

const teams = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    yearGroup: z.enum(["2017s", "2018s", "2019s", "2020s"]),
    trainingDay: z.string(),
    trainingTime: z.string(),
    trainingLocation: z.string(),
    coachRole: z.string(),
    status: z.enum(["open", "waitlist", "full"]),
    intro: z.string(),
    calendarUrl: z.string().url().optional()
  })
});

const socialHighlights = defineCollection({
  type: "content",
  schema: z.object({
    platform: z.enum(["instagram", "facebook"]),
    title: z.string(),
    postUrl: z.string().url(),
    thumbnail: z.string().optional(),
    publishDate: z.coerce.date()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

const siteSettings = defineCollection({
  type: "data",
  schema: z.object({
    clubName: z.string(),
    shortName: z.string(),
    tagline: z.string(),
    logoPath: z.string(),
    contactEmail: z.string().email(),
    instagramUrl: z.string().url(),
    facebookUrl: z.string().url(),
    googleCalendarEmbedUrl: z.string().url(),
    googleCalendarPublicUrl: z.string().url(),
    calendarIcsUrl: z.string().url(),
    heroCtaLabel: z.string(),
    heroCtaHref: z.string()
  })
});

export const collections = { news, teams, socialHighlights, pages, siteSettings };
