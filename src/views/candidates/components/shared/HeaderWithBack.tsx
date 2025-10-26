import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

interface HeaderWithBackProps {
  title: string;
  onBackPress: () => void;
}

export const HeaderWithBack: React.FC<HeaderWithBackProps> = ({
  title,
  onBackPress,
}) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const gradientColors = Colors[theme].gradient;

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 1, y: -1 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingTop: 32,
        paddingBottom: 24,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"#5FD0CF"}
        translucent={false}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={onBackPress} style={{ marginRight: 16 }}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">{title}</Text>
      </View>
    </LinearGradient>
  );
};
