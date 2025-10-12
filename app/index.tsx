import { CustomSplashScreen } from "@/components/CustomSplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(
    null
  );
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("hasSeenOnboarding");
      setHasSeenOnboarding(value === "true");
    } catch (error) {
      console.log(error);
      setHasSeenOnboarding(false);
    }
  };

  const handleSplashFinish = () => {
    setShowCustomSplash(false);
    checkOnboarding();
  };

  // Mostrar splash personalizado primero
  if (showCustomSplash) {
    return <CustomSplashScreen onFinish={handleSplashFinish} />;
  }

  // Luego continuar con la lógica normal
  if (hasSeenOnboarding === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#e53e3e" />
      </View>
    );
  }

  if (hasSeenOnboarding) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/onboarding" />;
}
