import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#e53e3e",
        tabBarInactiveTintColor: "#999999",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false, // Oculta las etiquetas de texto
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "#f0f0f0",
            elevation: 10,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            paddingBottom: 5,
            height: 60,
          },
        }),
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
