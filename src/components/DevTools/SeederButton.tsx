import { useThemeColor } from "@/hooks/useThemeColor";
import { runAllSeeders } from "@/services/firebase/seeders";
import React, { useState } from "react";
import { Alert, View } from "react-native";

/**
 * Componente de desarrollo para ejecutar los seeders
 * IMPORTANTE: Solo usar en desarrollo, no en producción
 */
export function SeederButton() {
  const [isSeeding, setIsSeeding] = useState(false);
  const primaryColor = useThemeColor("primary");

  const handleSeed = async () => {
    Alert.alert(
      "Confirmar Seeding",
      "¿Estás seguro que quieres poblar la base de datos? Esto agregará datos de prueba.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sí, continuar",
          style: "destructive",
          onPress: async () => {
            setIsSeeding(true);
            try {
              const result = await runAllSeeders();
              if (result.success) {
                Alert.alert(
                  "Éxito",
                  "La base de datos ha sido poblada correctamente"
                );
              } else {
                Alert.alert(
                  "Error",
                  "Hubo un error al poblar la base de datos"
                );
              }
            } catch (error) {
              Alert.alert(
                "Error",
                `Error: ${
                  error instanceof Error ? error.message : "Unknown error"
                }`
              );
            } finally {
              setIsSeeding(false);
            }
          },
        },
      ]
    );
  };

  // Solo mostrar en desarrollo
  if (__DEV__) {
    return (
      <View className="absolute bottom-20 right-5 z-50">
        {/* <Pressable
          onPress={handleSeed}
          disabled={isSeeding}
          className="px-4 py-3 rounded-full shadow-lg"
          style={{
            backgroundColor: primaryColor,
            opacity: isSeeding ? 0.7 : 1,
          }}
        >
          {isSeeding ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-bold text-xs">🌱 Seed DB</Text>
          )}
        </Pressable> */}
      </View>
    );
  }

  return null;
}
