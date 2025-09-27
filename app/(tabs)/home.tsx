import { CandidateCard } from "@/components/CandidateCard";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Typography } from "@/components/ui/text";
import { autoritiesData } from "@/mooks/autoritiesData";
import { candidaties } from "@/mooks/candidaties";

import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const currentDate = new Date();
  const electionDate = new Date("2026-04-05");

  const timeDiff = electionDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;
  const hours = currentDate.getHours();
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCandidateIndex((prev) => (prev + 1) % candidaties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-2">
          <View className="flex-row items-center">
            <AvatarPlaceholder
              name="Usuario YoElijo"
              size={40}
              backgroundColor="#ffa726"
            />
            <Typography variant="titlelg"> Buenos Días!</Typography>
          </View>
        </View>

        {/* Countdown Card */}
        <View className="bg-red-600 mx-5 rounded-2xl p-5 relative overflow-hidden mt-4">
          <View className="flex-row items-center mb-5">
            <Ionicons name="calendar" size={20} color="#fff" />
            <Text className="text-white text-base font-semibold ml-2">
              Elecciones Generales 2026
            </Text>
          </View>

          <View className="flex-row justify-around mb-2">
            <View className="items-center">
              <Text className="text-white text-3xl font-bold">
                {months.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Meses</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-3xl font-bold">
                {days.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Días</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-3xl font-bold">
                {hours.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Horas</Text>
            </View>
          </View>

          {/* Mascot */}
          <View className="absolute right-2 bottom-2">
            <View className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <Text className="text-4xl">🦙</Text>
            </View>
          </View>
        </View>

        {/* Authorities */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            ¿Qué autoridades elegiremos?
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {autoritiesData.map((authority, index) => (
              <TouchableOpacity
                key={index}
                className={`bg-white rounded-lg p-3 flex-row items-center mb-3 shadow-sm ${
                  index < 2 ? "w-[48%]" : "w-[30%]"
                }`}
              >
                <Ionicons
                  name={authority.icon as any}
                  size={22}
                  color={authority.color}
                />
                <View className="flex-1 items-center ml-2">
                  <Text className="text-lg font-bold text-gray-800 text-center">
                    {authority.count}
                  </Text>
                  <Text className="text-[11px] text-gray-500 text-center mt-0.5">
                    {authority.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Candidates */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Los más populares
          </Text>

          <CandidateCard {...candidaties[currentCandidateIndex]} />

          <View className="flex-row justify-center mt-3">
            {candidaties.map((_: any, idx: any) => (
              <View
                key={idx}
                className={`h-2 rounded-full mx-1 ${
                  currentCandidateIndex === idx
                    ? "bg-red-600 w-5"
                    : "bg-red-200 w-2"
                }`}
              />
            ))}
          </View>
        </View>

        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
