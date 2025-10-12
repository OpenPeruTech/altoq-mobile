/**
 * Colores para Tailwind CSS - YoElijo Mobile
 * Este archivo exporta los colores en el formato que Tailwind CSS espera
 * Basado en el sistema de colores centralizado de src/constants/Colors.ts
 */

// Colores principales de la marca YoElijo
const primaryBrand = "#E30613"; // Rojo principal
const secondaryBrand = "#141CFF"; // Azul secundario
const accentBrand = "#F8D9DD"; // Rosa claro para highlights

// Colores para Tailwind CSS
const colors = {
  // Colores principales de marca
  primary: primaryBrand,
  secondary: secondaryBrand,
  accent: accentBrand,

  // Colores de texto
  text: {
    primary: "#0B0B0B",
    secondary: "#687076",
    tertiary: "#A3A3A3",
    onPrimary: "#FFFFFF",
  },

  // Colores de fondo
  background: {
    primary: "#FFFFFF",
    secondary: "#F8F9FA",
    surface: "#FFFFFF",
  },

  // Colores de interfaz
  tint: primaryBrand,
  icon: "#687076",
  tabIcon: {
    default: "#687076",
    selected: primaryBrand,
  },

  // Colores de estado
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Colores neutros
  border: "#E5E7EB",
  divider: "#F3F4F6",
  shadow: "rgba(0, 0, 0, 0.1)",

  // Colores para tema oscuro (se pueden usar con dark: prefix en Tailwind)
  dark: {
    text: {
      primary: "#FFFFFF",
      secondary: "#9BA1A6",
      tertiary: "#6B7280",
      onPrimary: "#FFFFFF",
    },
    background: {
      primary: "#151718",
      secondary: "#1F2937",
      surface: "#374151",
    },
    icon: "#9BA1A6",
    tabIcon: {
      default: "#9BA1A6",
      selected: primaryBrand,
    },
    border: "#374151",
    divider: "#4B5563",
    shadow: "rgba(0, 0, 0, 0.3)",
  },
};

module.exports = colors;
