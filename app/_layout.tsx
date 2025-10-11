import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    medium: require("../assets/fonts/HelveticaNowDisplay-Medium.ttf"),
    extraBold: require("../assets/fonts/HelveticaNowDisplay-ExtraBold.ttf"),
    Bold: require("../assets/fonts/HelveticaNowDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Configurar barra de navegación en Android
  useEffect(() => {
    if (Platform.OS === "android") {
      // Barra de navegación transparente
      NavigationBar.setBackgroundColorAsync("#ffffff01"); // Casi transparente
      NavigationBar.setButtonStyleAsync("dark"); // Botones oscuros
      NavigationBar.setBehaviorAsync("overlay-swipe"); // Los botones aparecen al deslizar
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
