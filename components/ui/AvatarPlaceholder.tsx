import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface AvatarPlaceholderProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({
  name,
  size = 40,
  backgroundColor = "#ffa726",
  textColor = "#fff",
  style,
}) => {
  // Extraer iniciales del nombre
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const avatarStyle = [
    styles.container,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
    },
    style,
  ];

  const textStyle = [
    styles.text,
    {
      fontSize: size * 0.4,
      color: textColor,
    },
  ];

  return (
    <View style={avatarStyle}>
      <Text style={textStyle}>{getInitials(name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
