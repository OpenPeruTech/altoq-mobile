import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface CandidateProps {
  name: string;
  party: string;
  percentage: number;
  details: string;
  color: string;
}

export const CandidateCard: React.FC<CandidateProps> = ({
  name,
  party,
  percentage,
  details,
  color,
}) => {
  const cardBackground = useThemeColor("surface");
  const borderColor = useThemeColor("border");
  return (
    <View
      className="bg-white rounded-xl p-4 flex-row items-start shadow-md"
      style={{
        backgroundColor: cardBackground,
        borderWidth: 1,
        borderColor: borderColor,
      }}
    >
      {/* Left side */}
      <View className="w-30 items-center">
        <AvatarPlaceholder name={name} size={50} backgroundColor={color} />

        <Text className="text-base font-bold text-gray-800 mt-2 text-center">
          {name}
        </Text>
        <Text className="text-sm text-gray-500 text-center mb-2">{party}</Text>

        <View className="flex-row items-center mt-1">
          <Text className="text-lg font-bold text-green-500 mr-1">
            {percentage}%
          </Text>
          <Ionicons name="trending-up" size={16} color="#22c55e" />
        </View>
      </View>

      {/* Divider */}
      <View className="w-px bg-gray-200 mx-3 self-stretch" />

      {/* Right side */}
      <View className="flex-1 ml-3">
        <Text className="text-xs text-gray-400 leading-4">{details}</Text>
      </View>
    </View>
  );
};
