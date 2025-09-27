import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    type: "logo",
    title: "Yo",
    titleRed: "Elijo",
    showIllustration: true,
  },
  {
    id: 2,
    type: "content",
    title: "¡Infórmate ",
    titleHighlight: "al toke!",
    subtitle: "Conoce a todos los candidatos en un solo lugar",
    showIllustration: false,
    showIcon: true,
  },
  {
    id: 3,
    type: "content",
    title: "Toda la info que necesitas saber en un solo lugar, ",
    titleHighlight: "clarito y sin floro",
    showIllustration: false,
    showIcon: false,
  },
  {
    id: 4,
    type: "content",
    title: "Explora, compara y elige de manera sencilla con ayuda de la ",
    titleHighlight: "inteligencia artificial",
    showIllustration: false,
    showIcon: false,
  },
];

// Componente de ilustración simple para YoElijo
const FamilyIllustration = () => (
  <View className="items-center justify-center mb-20">
    <View className="relative">
      {/* Padre */}
      <View className="w-16 h-20 bg-pink-300 rounded-t-full rounded-b-lg mb-2 items-center justify-center">
        <View className="w-8 h-6 bg-pink-400 rounded-full mb-2" />
        <View className="w-12 h-8 bg-red-400 rounded" />
      </View>

      {/* Madre */}
      <View className="absolute -right-8 top-0 w-16 h-20 bg-pink-200 rounded-t-full rounded-b-lg items-center justify-center">
        <View className="w-8 h-6 bg-pink-300 rounded-full mb-2" />
        <View className="w-12 h-8 bg-red-300 rounded" />
      </View>

      {/* Niño */}
      <View className="absolute -bottom-4 -left-2 w-12 h-16 bg-pink-400 rounded-t-full rounded-b-lg items-center justify-center">
        <View className="w-6 h-4 bg-pink-500 rounded-full mb-1" />
        <View className="w-8 h-6 bg-pink-300 rounded" />
      </View>
    </View>
  </View>
);

// Componente de icono para la pantalla "Infórmate"
const InfoIcon = () => (
  <View className="items-center justify-center mb-12">
    <View className="w-32 h-32 bg-red-100 rounded-full items-center justify-center mb-4">
      <View className="w-20 h-20 bg-red-500 rounded-full items-center justify-center">
        {/* Icono de información simple */}
        <View className="w-3 h-3 bg-white rounded-full mb-1" />
        <View className="w-1 h-8 bg-white rounded-full" />
      </View>
    </View>
  </View>
);

// Componente para el botón con progreso circular
const CircularProgressButton = ({
  progress,
  onPress,
  isLast,
}: {
  progress: number;
  onPress: () => void;
  isLast: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="relative w-14 h-14">
      {/* Círculo de fondo */}
      <View className="absolute inset-0 w-14 h-14 rounded-full bg-red-600 justify-center items-center shadow-lg">
        <Text className="text-white text-xl font-bold">
          {isLast ? "✓" : "→"}
        </Text>
      </View>

      {/* Progreso circular */}
      <View
        className="absolute inset-0 w-14 h-14"
        style={{ transform: [{ rotate: "-90deg" }] }}
      >
        <View
          className="w-14 h-14 rounded-full border-2 border-red-200"
          style={{
            borderTopColor: "rgb(220 38 38)",
            borderRightColor:
              progress > 0.25 ? "rgb(220 38 38)" : "rgb(254 202 202)",
            borderBottomColor:
              progress > 0.5 ? "rgb(220 38 38)" : "rgb(254 202 202)",
            borderLeftColor:
              progress > 0.75 ? "rgb(220 38 38)" : "rgb(254 202 202)",
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function Onboarding() {
  const flatListRef = useRef<FlatList>(null);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const handleNext = async () => {
    if (page < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: page + 1 });
    } else {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      router.replace("/(tabs)/home");
    }
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const newPage = Math.round(offsetX / width);
    setPage(newPage);
  };

  const renderSlide = ({ item }: { item: (typeof slides)[0] }) => {
    if (item.type === "logo") {
      return (
        <View
          style={{ width }}
          className="flex-1 justify-center items-center px-6 bg-white"
        >
          {/* {item.showIllustration && <FamilyIllustration />} */}
          <View className="flex-row items-center">
            <Text className="text-5xl font-bold text-black">{item.title}</Text>
            <Text className="text-5xl font-bold text-red-600">
              {item.titleRed}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{ width }} className="flex-1 bg-white">
        {/* Icono en el centro (solo para la pantalla "Infórmate") */}
        {item.showIcon && (
          <View className="flex-1 justify-center items-center">
            <InfoIcon />
          </View>
        )}

        {/* Contenido en la parte inferior */}
        <View className="absolute bottom-40 left-0 right-0 px-10">
          <Text className="text-3xl font-bold text-black leading-tight">
            {item.title}
            {item.titleHighlight && (
              <Text
                className="text-white text-3xl font-bold px-3 py-2"
                style={{
                  backgroundColor: "#dc2626",
                  borderRadius: 15,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 12,
                  borderBottomLeftRadius: 18,
                  transform: [{ rotate: "-1deg" }],
                  shadowColor: "#dc2626",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 4,
                }}
              >
                {item.titleHighlight}
              </Text>
            )}
          </Text>
          {item.subtitle && (
            <Text className="text-3xl font-bold text-black leading-tight">
              {item.subtitle}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Mostrar la barra de estado */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      {/* Skip Button */}
      <TouchableOpacity
        className="absolute top-16 right-5 z-10"
        onPress={async () => {
          await AsyncStorage.setItem("hasSeenOnboarding", "true");
          router.replace("/(tabs)/home");
        }}
      >
        <Text className="text-gray-500 text-base">Skip</Text>
      </TouchableOpacity>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={renderSlide}
      />

      {/* Indicators + Next Button */}
      <View className="absolute bottom-16 left-0 right-0 flex-row items-center justify-between px-8">
        {/* Page Indicators */}
        <View className="flex-row">
          {slides.map((_, idx) => (
            <View
              key={idx}
              className={`h-2 rounded-full mx-1 ${
                page === idx ? "w-8 bg-red-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </View>

        {/* Next Button with Circular Progress */}
        <CircularProgressButton
          progress={(page + 1) / slides.length}
          onPress={handleNext}
          isLast={page === slides.length - 1}
        />
      </View>
    </View>
  );
}
