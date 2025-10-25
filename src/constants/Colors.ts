/**
 * Sistema de colores centralizado para YoElijo Mobile
 * Todos los colores de la aplicación deben definirse aquí para mantener consistencia
 * y facilitar cambios futuros.
 */

// Colores principales de la marca YoElijo
const primaryBrand = "#5FD0CF"; // Rojo principal
const secondaryBrand = "#141CFF"; // Azul secundario
const accentBrand = "#F8D9DD"; // Rosa claro para highlights

export const Colors = {
  light: {
    // Colores principales
    primary: primaryBrand,
    secondary: secondaryBrand,
    accent: accentBrand,

    // Colores de texto
    text: "#0B0B0B",
    textSecondary: "#687076",
    textTertiary: "#A3A3A3",
    textOnPrimary: "#FFFFFF",
    textOnboarding: "#5FD0CF",
    backgroundOnboardingOne: "#20244B",

    // Colores de fondo
    background: "#FFFFFF",
    backgroundSecondary: "#F8F9FA",
    surface: "#FFFFFF",

    // Colores de interfaz
    tint: primaryBrand,
    icon: "#687076",
    tabIconDefault: "#9CA3AF",
    tabIconSelected: primaryBrand,
    tabBarBackground: "#FFFFFF",
    tabBarBorder: "#E5E7EB",
    gradient: ["#5FD0CF", "#306A69"] as const,

    // Colores de estado
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Colores neutros
    border: "#E5E7EB",
    divider: "#F3F4F6",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    // Colores principales
    primary: primaryBrand,
    secondary: secondaryBrand,
    accent: accentBrand,

    // Colores de texto
    text: "#FFFFFF",
    textSecondary: "#9BA1A6",
    textTertiary: "#6B7280",
    textOnPrimary: "#5FD0CF",
    textOnboarding: "#5FD0CF",
    backgroundOnboardingOne: "#20244B",

    // Colores de fondo
    background: "#1F2937", // Más claro que el negro actual
    backgroundSecondary: "#374151",
    surface: "#4B5563",

    // Colores de interfaz
    tint: primaryBrand,
    icon: "#9BA1A6",
    tabIconDefault: "#6B7280",
    tabIconSelected: primaryBrand,
    tabBarBackground: "#1F2937",
    tabBarBorder: "#374151",

    // Colores de estado
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Colores neutros
    border: "#374151",
    divider: "#4B5563",
    shadow: "rgba(0, 0, 0, 0.3)",
  },
};

// Exportar colores específicos para uso directo cuando sea necesario
export const BrandColors = {
  primary: primaryBrand,
  secondary: secondaryBrand,
  accent: accentBrand,
} as const;

// Colores para las autoridades políticas
export const AuthorityColors = {
  president: "#ff6b6b", // Rojo suave para Presidente
  vicePresident: "#4ecdc4", // Turquesa para Vicepresidentes
  senator: "#45b7d1", // Azul claro para Senadores
  deputy: "#f9ca24", // Amarillo para Diputados
  andeanParliament: "#6c5ce7", // Morado para Parlamentos Andinos
} as const;

// Colores para la UI de candidatos
export const CandidatesUIColors = {
  // Headers y navegación
  headerBackground: "#f50a0aff",
  headerText: "#FFFFFF",

  // Cards y superficies
  cardBackground: "#FFFFFF",
  cardBorder: "#00000025",
  cardShadow: "#000",

  // Textos
  textPrimary: "#333",
  textSecondary: "#666",
  textTertiary: "#999",

  // Fondos
  screenBackground: "#f8f9fa",

  // Estados y detalles
  activeTab: "#E30613", // Rojo principal
  inactiveTab: "#A7A9A8",
  tabBorder: "#eee",
  badgeBackground: "#F8D9DD", // Rosa claro para badges

  // Avatares y fotos
  avatarOverlay: "rgba(0,0,0,0.4)",
  coverBackground: "#1e293b",
  profileBorder: "#fff",

  // Timeline y detalles
  timelineDot: "#E30613",
  timelineText: "#333",
} as const;

// Exportar tipos para TypeScript
export type ColorScheme = keyof typeof Colors;
export type ColorName = keyof typeof Colors.light;
export type AuthorityColorType = keyof typeof AuthorityColors;
export type CandidatesUIColorType = keyof typeof CandidatesUIColors;
