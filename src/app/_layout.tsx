import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import "../../global.css";
SplashScreen.preventAutoHideAsync();
function InitialLayout() {
  useEffect(() => {
    const timeout = setTimeout(async () => {
      const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");
      if (hasSeenOnboarding) {
        router.replace("/(tabs)/Home");
      } else {
        router.replace("/onboarding");
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackButtonDisplayMode: "minimal",
      }}
    />
  );
}
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    medium: require("../../assets/fonts/HelveticaNowDisplay-Medium.ttf"),
    extraBold: require("../../assets/fonts/HelveticaNowDisplay-ExtraBold.ttf"),
    Bold: require("../../assets/fonts/HelveticaNowDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <InitialLayout />;
}
