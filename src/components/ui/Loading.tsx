import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

interface LoadingProps {
  message?: string;
  visible?: boolean;
}

/**
 * Componente Loading reutilizable con overlay
 * Similar al componente web pero adaptado para React Native
 */
export const Loading: React.FC<LoadingProps> = ({
  message = "Cargando...",
  visible = true,
}) => {
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("text");
  const surfaceColor = useThemeColor("surface");

  if (!visible) return null;

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: surfaceColor,
            },
          ]}
        >
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={[styles.text, { color: textColor }]}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    minWidth: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
