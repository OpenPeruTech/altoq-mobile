/**
 * Hook para acceder a los colores del tema actual
 * Permite usar colores centralizados y cambiar automáticamente entre temas
 */

import { ColorName, Colors, ColorScheme } from "@/constants/Colors";
import { useColorScheme } from "react-native";

/**
 * Hook principal para obtener colores del tema actual
 * @param colorName - Nombre del color a obtener
 * @returns El color correspondiente al tema actual
 */
export function useThemeColor(colorName: ColorName): string {
  // Detectar el esquema de color del sistema
  const colorScheme = useColorScheme();
  const theme: ColorScheme = colorScheme === "dark" ? "dark" : "light";
  return Colors[theme][colorName];
}

/**
 * Hook para obtener múltiples colores del tema actual
 * @param colorNames - Array de nombres de colores
 * @returns Objeto con los colores solicitados
 */
export function useThemeColors(
  colorNames: ColorName[]
): Record<string, string> {
  const colorScheme = useColorScheme();
  const theme: ColorScheme = colorScheme === "dark" ? "dark" : "light";
  const themeColors = Colors[theme];

  const result: Record<string, string> = {};

  for (const colorName of colorNames) {
    result[colorName] = themeColors[colorName];
  }

  return result;
}

/**
 * Hook para obtener todos los colores del tema actual
 * @returns Todos los colores del tema actual
 */
export function useAllThemeColors() {
  const colorScheme = useColorScheme();
  const theme: ColorScheme = colorScheme === "dark" ? "dark" : "light";
  return Colors[theme];
}

/**
 * Hook legacy para compatibilidad con código existente
 * @param props - Props con colores personalizados para light/dark
 * @param colorName - Nombre del color base
 * @returns Color final considerando props personalizados o tema actual
 */
export function useThemeColorWithFallback(
  props: { light?: string; dark?: string },
  colorName: ColorName
) {
  const colorScheme = useColorScheme();
  const theme: ColorScheme = colorScheme === "dark" ? "dark" : "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
