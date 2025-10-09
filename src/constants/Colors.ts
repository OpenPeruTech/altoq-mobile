/**
 * Sistema de colores centralizado para YoElijo Mobile
 * Todos los colores de la aplicación deben definirse aquí para mantener consistencia
 * y facilitar cambios futuros.
 */

// Colores principales de la marca YoElijo
const primaryBrand = "#E30613"; // Rojo principal
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

    // Colores de fondo
    background: "#FFFFFF",
    backgroundSecondary: "#F8F9FA",
    surface: "#FFFFFF",

    // Colores de interfaz
    tint: primaryBrand,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: primaryBrand,

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
    textOnPrimary: "#FFFFFF",

    // Colores de fondo
    background: "#1F2937", // Más claro que el negro actual
    backgroundSecondary: "#374151",
    surface: "#4B5563",

    // Colores de interfaz
    tint: primaryBrand,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: primaryBrand,

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

// Exportar tipos para TypeScript
export type ColorScheme = keyof typeof Colors;
export type ColorName = keyof typeof Colors.light;
