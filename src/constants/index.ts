/**
 * Application Constants
 * Central location for all application-wide constants
 */

// Application metadata
export const APP_NAME = "Altoq";
export const APP_DESCRIPTION =
  "Vota informado en las Elecciones Generales 2026";
export const APP_URL = "https://altoqperu.com";

// Election dates
export const ELECTION_DATE = new Date("2026-04-05"); // Update with actual date
export const REGISTRATION_DEADLINE = new Date("2026-03-05"); // Update with actual date

// API Configuration
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.altoqperu.com";
export const API_TIMEOUT = 30000; // 30 seconds

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: "altoq_user_preferences",
  ONBOARDING_COMPLETED: "altoq_onboarding_completed",
  FAVORITES: "altoq_favorites",
  THEME: "altoq_theme",
} as const;

// Routes
export const ROUTES = {
  HOME: "/",
  CANDIDATES: "/candidates",
  CANDIDATE_DETAIL: "/candidates/:id",
  PROPOSALS: "/proposals",
  ABOUT: "/about",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  CONTACT: "/contact",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: "https://facebook.com/altoq",
  TWITTER: "https://twitter.com/altoq",
  INSTAGRAM: "https://instagram.com/altoq",
  LINKEDIN: "https://linkedin.com/company/altoq",
} as const;

// Animation Durations (in ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// SEO Metadata
export const SEO = {
  TITLE_TEMPLATE: "%s | Altoq",
  DEFAULT_TITLE: "Altoq - Vota Informado",
  DESCRIPTION: APP_DESCRIPTION,
  KEYWORDS: [
    "elecciones",
    "perú",
    "2026",
    "candidatos",
    "votar",
    "democracia",
    "política",
    "informado",
  ],
} as const;
