import { defineCollection, z } from "astro:content";

const teamScope = z.enum(["2017s", "2018s", "2019s", "2020s", "club"]);

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    teamScopes: z.array(teamScope).default(["club"]),
    featured: z.boolean().default(false)
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
    calendarEmbedUrl: z.string().url(),
    calendarPublicUrl: z.string().url(),
    calendarIcsUrl: z.string().url(),
    facebookUrl: z.string().url().optional(),
    instagramUrl: z.string().url().optional(),
    heroImage: z.string().optional()
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

const sponsors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    logoOrImage: z.string(),
    blurb: z.string(),
    sponsorshipType: z.enum(["main_kit", "team_sponsor", "social_supporter", "event_festival", "other"]),
    teamScope: z.enum(["club", "2017s", "2018s", "2019s", "2020s"]),
    whatTheySponsored: z.string(),
    isActive: z.boolean().default(true),
    featuredOrder: z.number().int().optional(),
    websiteUrl: z.string().url().optional(),
    showPublicContact: z.boolean().default(false),
    contactName: z.string().optional(),
    contactEmail: z.string().email().optional(),
    contactPhone: z.string().optional(),
    ctaLabel: z.string().default("Visit Sponsor"),
    ctaUrl: z.string().url().optional(),
    startedOn: z.coerce.date().optional()
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
    heroCtaHref: z.string(),
    joinCutoffMonth: z.number().int().min(1).max(12),
    heroImage: z.string().url().optional(),
    defaultTeamImage: z.string().url().optional()
  })
});

export const collections = { news, teams, socialHighlights, pages, sponsors, siteSettings };
