import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

interface ProgressButtonProps {
  onPress: () => void;
  progress: number; // 0-1 (0 = 0%, 1 = 100%)
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  progressColor?: string;
  size?: number;
}

export function ProgressButton({
  onPress,
  progress,
  iconName,
  iconSize = 24,
  iconColor = Colors.light.textOnPrimary,
  backgroundColor = Colors.light.primary,
  progressColor = Colors.light.primary,
  size = 64,
}: ProgressButtonProps) {
  // Calcular los ángulos para cada cuarto del círculo
  const getProgressStyle = () => {
    const borderWidth = 3;
    const progressStyle: any = {
      position: "absolute",
      width: size + 8,
      height: size + 8,
      borderRadius: (size + 8) / 2,
      borderWidth,
      borderColor: "transparent",
      top: -4,
      left: -4,
    };

    // Determinar qué bordes mostrar según el progreso
    if (progress > 0) {
      progressStyle.borderTopColor = backgroundColor;
    }
    if (progress > 0.25) {
      progressStyle.borderRightColor = backgroundColor;
    }
    if (progress > 0.5) {
      progressStyle.borderBottomColor = backgroundColor;
    }
    if (progress > 0.75) {
      progressStyle.borderLeftColor = backgroundColor;
    }

    return progressStyle;
  };

  return (
    <View style={{ width: size, height: size }}>
      {/* Círculo de progreso de fondo */}
      <View
        style={{
          position: "absolute",
          width: size + 8,
          height: size + 8,
          borderRadius: (size + 8) / 2,
          borderWidth: 3,
          borderColor: backgroundColor,
          opacity: 0.3,
          top: -4,
          left: -4,
        }}
      />

      {/* Círculo de progreso activo */}
      <View style={getProgressStyle()} />

      {/* Botón central */}
      <Pressable
        onPress={onPress}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: backgroundColor,
        }}
      >
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </Pressable>
    </View>
  );
}
