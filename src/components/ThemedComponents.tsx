/**
 * Componentes temáticos reutilizables que usan el sistema de colores centralizado
 * Estos componentes cambian automáticamente entre temas claro y oscuro
 */

import {
  useAllThemeColors,
  useThemeColor,
  useThemeColorWithFallback,
} from "@/hooks/useThemeColor";
import React from "react";
import { Pressable, Text, View } from "react-native";

// Tipos para los componentes
interface ThemedTextProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  color?:
    | "text"
    | "textSecondary"
    | "textTertiary"
    | "textOnPrimary"
    | "primary"
    | "secondary";
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  lightColor?: string;
  darkColor?: string;
}

interface ThemedViewProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  backgroundColor?: "background" | "backgroundSecondary" | "surface";
}

interface ThemedButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  style?: any;
}

/**
 * Componente de texto temático
 */
export function ThemedText({
  children,
  className = "",
  style,
  color = "text",
  type = "default",
  lightColor,
  darkColor,
  ...rest
}: ThemedTextProps) {
  // Siempre llamar ambos hooks para evitar hooks condicionales
  const themeColor = useThemeColor(color);
  const fallbackColor = useThemeColorWithFallback(
    { light: lightColor, dark: darkColor },
    "text"
  );

  // Usar el color apropiado
  const textColor = lightColor || darkColor ? fallbackColor : themeColor;

  // Estilos basados en el tipo
  const getTypeStyles = () => {
    switch (type) {
      case "title":
        return {
          fontSize: 32,
          fontWeight: "bold" as const,
          lineHeight: 32,
        };
      case "subtitle":
        return {
          fontSize: 20,
          fontWeight: "bold" as const,
        };
      case "defaultSemiBold":
        return {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "600" as const,
        };
      case "link":
        return {
          lineHeight: 30,
          fontSize: 16,
          color: "#0a7ea4", // Color específico para links
        };
      case "default":
      default:
        return {
          fontSize: 16,
          lineHeight: 24,
        };
    }
  };

  const typeStyles = getTypeStyles();

  return (
    <Text
      className={className}
      style={[{ color: textColor }, typeStyles, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}

/**
 * Componente de vista temática
 */
export function ThemedView({
  children,
  className = "",
  style,
  backgroundColor = "background",
}: ThemedViewProps) {
  const bgColor = useThemeColor(backgroundColor);

  return (
    <View className={className} style={[{ backgroundColor: bgColor }, style]}>
      {children}
    </View>
  );
}

/**
 * Componente de botón temático
 */
export function ThemedButton({
  children,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  style,
}: ThemedButtonProps) {
  const colors = useAllThemeColors();

  const getButtonStyles = () => {
    const baseStyles = {
      borderRadius: 8,
      alignItems: "center" as const,
      justifyContent: "center" as const,
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyles = {
      small: { paddingHorizontal: 12, paddingVertical: 8 },
      medium: { paddingHorizontal: 16, paddingVertical: 12 },
      large: { paddingHorizontal: 20, paddingVertical: 16 },
    };

    const variantStyles = {
      primary: {
        backgroundColor: colors.primary,
        borderWidth: 0,
      },
      secondary: {
        backgroundColor: colors.secondary,
        borderWidth: 0,
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: colors.primary,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      className={className}
      style={[getButtonStyles(), style]}
    >
      <ThemedText color={variant === "outline" ? "primary" : "textOnPrimary"}>
        {children}
      </ThemedText>
    </Pressable>
  );
}

/**
 * Componente de tarjeta temática
 */
interface ThemedCardProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
  padding?: "small" | "medium" | "large";
}

export function ThemedCard({
  children,
  className = "",
  style,
  padding = "medium",
}: ThemedCardProps) {
  const colors = useAllThemeColors();

  const paddingStyles = {
    small: { padding: 8 },
    medium: { padding: 16 },
    large: { padding: 24 },
  };

  return (
    <View
      className={`rounded-lg ${className}`}
      style={[
        {
          backgroundColor: colors.surface,
          borderWidth: 1,
          borderColor: colors.border,
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        paddingStyles[padding],
        style,
      ]}
    >
      {children}
    </View>
  );
}

/**
 * Hook para obtener estilos temáticos comunes
 */
export function useThemedStyles() {
  const colors = useAllThemeColors();

  return {
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    button: {
      primary: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center" as const,
        justifyContent: "center" as const,
      },
      secondary: {
        backgroundColor: colors.secondary,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center" as const,
        justifyContent: "center" as const,
      },
      outline: {
        backgroundColor: "transparent",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        borderWidth: 2,
        borderColor: colors.primary,
      },
    },
    text: {
      primary: {
        color: colors.text,
        fontSize: 16,
      },
      secondary: {
        color: colors.textSecondary,
        fontSize: 14,
      },
      title: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "bold" as const,
      },
      subtitle: {
        color: colors.textSecondary,
        fontSize: 18,
        fontWeight: "600" as const,
      },
    },
  };
}
