import { CandidatesUIColors } from "@/constants/Colors";
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
  placeholder = "¿Estas buscando algún candidato?",
}) => {
  return (
    <View style={{ backgroundColor: CandidatesUIColors.cardBackground }} className="w-full flex items-center mt-6 mb-4">

      <View className="flex-row items-center bg-white px-4 py-2
       rounded-3xl shadow-sm  w-3/4"
       style={{ borderColor: "#e0e0e0" , borderWidth: 1 }}
       >
        <Ionicons
          name="search"
          size={20}
          color="#000"
        />
        <TextInput
          className="flex-1 ml-10 py-2 text-sm text-gray-800 "
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>

  );
};
