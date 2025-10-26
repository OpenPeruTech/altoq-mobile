import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "¿Estás buscando algo en particular?",
}) => {
  const backgroundColor = useThemeColor("background");
  const primary = useThemeColor("primary");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const counterBackgroundColor = useThemeColor("counterBackground");

  return (
    <View
      style={{ backgroundColor: backgroundColor }}
      className="w-full flex items-center mt-6 mb-4"
    >
      <View
        className="flex-row items-center bg-white px-4 py-2 shadow-sm w-11/12"
        style={{
          borderRadius: 15,
          borderColor: primary,
          borderWidth: 1,
          backgroundColor: counterBackgroundColor,
        }}
      >
        <Ionicons name="search" size={20} color="#000" />
        <TextInput
          className="flex-1 ml-3 py-2"
          style={{ fontSize: 13, color: textColor }}
          placeholder={placeholder}
          placeholderTextColor={textSecondaryColor}
          value={value}
          onChangeText={onChangeText}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};
