import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const tabIconSelected = useThemeColor("tabIconSelected");
  const tabIconDefault = useThemeColor("tabIconDefault");
  const tabBarBackground = useThemeColor("tabBarBackground");
  const tabBarBorder = useThemeColor("tabBarBorder");

  // Altura del TabBar que incluye el espacio del sistema
  const tabBarHeight = 60 + insets.bottom;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabIconSelected,
        tabBarInactiveTintColor: tabIconDefault,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0, // Pegado al borde inferior
          left: 0,
          right: 0,
          backgroundColor: tabBarBackground,
          height: tabBarHeight,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10, // Respeta el espacio del sistema
          paddingTop: 8,
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: tabBarBorder,
          // Sin sombra
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "house.fill" : "house"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="candidates"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "person.3.fill" : "person.3"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "chart.bar.fill" : "chart.bar"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name={focused ? "newspaper.fill" : "newspaper"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
