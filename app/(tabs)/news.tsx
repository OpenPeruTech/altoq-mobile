// (pantalla adicional para el futuro)
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NewsTabScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Noticias</Text>
        <Text style={styles.subtitle}>
          Próximamente: Las últimas noticias electorales
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
});

// ===== constants/Colors.ts (actualizado) =====
export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: "#e53e3e", // Color principal YoElijo (rojo)
    icon: "#687076",
    tabIconDefault: "#999999",
    tabIconSelected: "#e53e3e",
    primary: "#e53e3e",
    secondary: "#4ecdc4",
    accent: "#ffa726",
    success: "#4CAF50",
    warning: "#ff9800",
    error: "#f44336",
    surface: "#f8f9fa",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: "#e53e3e",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#e53e3e",
    primary: "#e53e3e",
    secondary: "#4ecdc4",
    accent: "#ffa726",
    success: "#4CAF50",
    warning: "#ff9800",
    error: "#f44336",
    surface: "#1a1a1a",
  },
};
