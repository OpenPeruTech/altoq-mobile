import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

/**
 * Componente reutilizable para mostrar tarjetas de autoridades políticas o partidos
 *
 * @param title - Nombre de la autoridad o partido (ej: "Presidente", "Senadores", "Partido 1")
 * @param icon - Nombre del ícono de Ionicons
 * @param count - Número de autoridades a elegir (si es 0, no se muestra)
 * @param color - Color específico del ícono (del sistema AuthorityColors)
 * @param width - Ancho de la tarjeta (usa clases de Tailwind, ej: "w-[120px]" o "w-[30%]")
 *
 * Características:
 * - Texto responsive que se ajusta automáticamente
 * - Permite hasta 2 líneas si el título tiene múltiples palabras
 * - Oculta el número si count es 0 (útil para mostrar solo partidos)
 * - Usa colores del tema dinámicamente (background, texto, bordes)
 * - Ancho personalizable para diferentes layouts
 */
interface AuthorityCardProps {
  title: string;
  icon: string;
  count: number;
  color: string;
  width?: string;
}

export const AuthorityCard: React.FC<AuthorityCardProps> = ({
  title,
  icon,
  count,
  color,
  width = "w-[120px]",
}) => {
  // Obtener colores del tema actual para que sea adaptable a light/dark mode
  const cardBackground = useThemeColor("surface");
  const textPrimary = useThemeColor("text");
  const textSecondary = useThemeColor("textSecondary");
  const borderColor = useThemeColor("border");

  // Detectar si es una sola palabra o múltiples para ajustar el número de líneas
  const isSingleWord = !title.includes(" ");
  const numberOfLines = isSingleWord ? 1 : 2;

  return (
    <TouchableOpacity
      className={`rounded-xl p-3 flex-row items-center mx-2 shadow-sm h-[60px] ${width}`}
      style={{
        backgroundColor: cardBackground,
        borderWidth: 1,
        borderColor: borderColor,
      }}
    >
      <Ionicons name={icon as any} size={22} color={color} />
      <View className="flex-1 items-center ml-2">
        {/* Número de autoridades - Solo se muestra si count > 0 */}
        {count > 0 && (
          <Text
            className="text-lg font-bold text-center"
            style={{ color: textPrimary }}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
          >
            {count}
          </Text>
        )}
        {/* Título de la autoridad */}
        <Text
          className={`text-[11px] text-center ${count > 0 ? "mt-0.5" : ""}`}
          style={{ color: textSecondary }}
          numberOfLines={numberOfLines}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
