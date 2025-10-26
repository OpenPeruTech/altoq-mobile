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
  experience?: string;
  age?: number;
  region?: string;
}

export const CandidateCard: React.FC<CandidateProps> = ({
  name,
  party,
  percentage,
  details,
  color,
  experience,
  age,
  region,
}) => {
  const cardBackground = useThemeColor("surface");
  const counterBackground = useThemeColor("counterBackground");
  const borderColor = useThemeColor("border");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  return (
    <View
      className="bg-white rounded-xl p-4 flex-row items-start shadow-md"
      style={{
        backgroundColor: counterBackground,
        borderWidth: 1,
        borderColor: borderColor,
      }}
    >
      {/* Left side */}
      <View className="w-30 items-center">
        <AvatarPlaceholder name={name} size={50} backgroundColor={color} />

        <Text
          className="text-base font-bold mt-2 text-center"
          style={{ color: textColor }}
        >
          {name}
        </Text>
        <Text
          className="text-sm text-center mb-2"
          style={{ color: textSecondaryColor }}
        >
          {party}
        </Text>

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
        <View className="mb-2">
          <Text
            className="text-sm font-semibold mb-1"
            style={{ color: textColor }}
          >
            Detalles
          </Text>
          <Text
            className="text-xs leading-4"
            style={{ color: textSecondaryColor }}
          >
            {details}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="people" size={14} color="#6B7280" />
            <Text
              className="text-xs ml-1"
              style={{ color: textSecondaryColor }}
            >
              Partido
            </Text>
          </View>
          <Text className="text-xs font-medium" style={{ color: textColor }}>
            {party}
          </Text>
        </View>

        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center">
            <Ionicons name="trending-up" size={14} color="#10B981" />
            <Text
              className="text-xs ml-1"
              style={{ color: textSecondaryColor }}
            >
              Popularidad
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-xs font-bold text-green-600 mr-1">
              {percentage}%
            </Text>
            <View
              className="w-8 h-1 rounded-full"
              style={{ backgroundColor: color, opacity: 0.3 }}
            />
          </View>
        </View>

        {experience && (
          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center">
              <Ionicons name="briefcase" size={14} color="#6B7280" />
              <Text
                className="text-xs ml-1"
                style={{ color: textSecondaryColor }}
              >
                Experiencia
              </Text>
            </View>
            <Text className="text-xs font-medium" style={{ color: textColor }}>
              {experience}
            </Text>
          </View>
        )}

        <View className="flex-row items-center justify-between mt-2">
          {age && (
            <View className="flex-row items-center">
              <Ionicons name="calendar" size={14} color="#6B7280" />
              <Text
                className="text-xs ml-1"
                style={{ color: textSecondaryColor }}
              >
                {age} años
              </Text>
            </View>
          )}
          {region && (
            <View className="flex-row items-center">
              <Ionicons name="location" size={14} color="#6B7280" />
              <Text
                className="text-xs ml-1"
                style={{ color: textSecondaryColor }}
              >
                {region}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
