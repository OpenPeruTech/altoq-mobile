import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "¡Infórmate al toke!",
    subtitle: "Conoce a todos los candidatos en un solo lugar",
  },
  {
    id: 2,
    title: "Sigue las encuestas",
    subtitle: "Mira cómo cambian las preferencias día a día",
  },
  {
    id: 3,
    title: "Vota informado",
    subtitle: "Toma la mejor decisión con información clara",
  },
];

export default function Onboarding() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const handleNext = async () => {
    if (page < slides.length - 1) {
      pagerRef.current?.setPage(page + 1);
    } else {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      router.replace("/(tabs)/Home");
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Skip */}
      <TouchableOpacity
        className="absolute top-12 right-5 z-10"
        onPress={async () => {
          await AsyncStorage.setItem("hasSeenOnboarding", "true");
          router.replace("/(tabs)/Home");
        }}
      >
        <Text className="text-gray-500">Skip</Text>
      </TouchableOpacity>

      {/* Pager */}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {slides.map((slide) => (
          <View
            key={slide.id}
            className="flex-1 justify-center items-center px-6"
          >
            <Text className="text-2xl font-bold text-black mb-3">
              {slide.title}
            </Text>
            <Text className="text-lg text-center text-gray-600">
              {slide.subtitle}
            </Text>
          </View>
        ))}
      </PagerView>

      {/* Indicators + Next */}
      <View className="flex-row items-center justify-between px-8 pb-10">
        <View className="flex-row">
          {slides.map((_, idx) => (
            <View
              key={idx}
              className={`h-2 rounded-full mx-1 ${
                page === idx ? "w-6 bg-red-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          className="bg-red-600 w-14 h-14 rounded-full justify-center items-center"
          onPress={handleNext}
        >
          <Text className="text-white text-2xl">
            {page === slides.length - 1 ? "✓" : "→"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
