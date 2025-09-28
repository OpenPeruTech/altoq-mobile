import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const ACCENT = "#E30613";
const BLACK = "#0B0B0B";

type LineChunk = string | { hi: string };

const SLIDES: { id: string; image: any; lines: LineChunk[][] }[] = [
  {
    id: "1",
    image: require("../../assets/images/splash-icon.png"),
    lines: [
      ["¡Infórmate ", { hi: "al toke!" }],
      ["Conoce a todos los candidatos en un"],
      ["solo lugar"],
    ],
  },
  {
    id: "2",
    image: require("../../assets/images/splash-icon.png"),
    lines: [
      ["Toda la info que necesitas saber en un"],
      ["solo lugar, ", { hi: "clarito y sin floro" }],
    ],
  },
  {
    id: "3",
    image: require("../../assets/images/splash-icon.png"),
    lines: [
      ["Explora, compara y"],
      ["elige de manera sencilla"],
      ["con ayuda de la ", { hi: "inteligencia artificial" }],
    ],
  },
];

export default function Onboarding() {
  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const goHome = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    router.replace("/(tabs)/home");
  };

  const next = () => {
    if (index < SLIDES.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      goHome();
    }
  };

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    if (i !== index) setIndex(i);
  };

  const segments = useMemo(() => SLIDES.map((_, i) => i <= index), [index]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top bar */}
      <View className="h-11 items-end justify-center px-4">
        <Pressable onPress={goHome} hitSlop={8}>
          <Text className="text-base font-medium text-gray-500">Skip</Text>
        </Pressable>
      </View>

      {/* Slides */}
      <FlatList
        ref={listRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        keyExtractor={(s) => s.id}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumEnd}
        getItemLayout={(_, i) => ({
          length: width,
          offset: width * i,
          index: i,
        })}
        renderItem={({ item }) => (
          <View style={{ width }} className="flex-1 bg-white">
            {/* Imagen centrada */}
            <View
              style={{ height: height * 0.48 }}
              className="items-center justify-center"
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: width * 0.72, height: "100%" as any }}
              />
            </View>

            {/* Texto inferior */}
            <View style={{ paddingBottom: height * 0.12 }} className="px-6">
              {item.lines.map((row, idx) => (
                <Text
                  key={idx}
                  className="text-[28px] leading-[34px] font-extrabold text-[#0B0B0B] mb-1.5"
                >
                  {row.map((chunk, i) =>
                    typeof chunk === "string" ? (
                      <Text key={i}>{chunk}</Text>
                    ) : (
                      <Text
                        key={i}
                        className="bg-[#E30613] text-white px-1.5 rounded-md"
                      >
                        {chunk.hi}
                      </Text>
                    )
                  )}
                </Text>
              ))}
            </View>
          </View>
        )}
      />

      {/* Bottom controls */}
      <View className="absolute bottom-7 left-4 right-4 flex-row items-center justify-between">
        {/* Barra progresiva 3 segmentos */}
        <View className="flex-row items-center">
          {segments.map((active, i) => (
            <View
              key={i}
              className={
                active
                  ? "bg-[#E30613] w-7 h-2 rounded-full mr-2"
                  : "bg-[#f8d9dd] w-2.5 h-2.5 rounded-full mr-2"
              }
            />
          ))}
        </View>

        {/* Botón siguiente */}
        <Pressable
          onPress={next}
          className="w-16 h-16 rounded-full border-2 items-center justify-center"
          style={{ borderColor: ACCENT }}
        >
          <View
            className="rounded-full items-center justify-center"
            style={{ backgroundColor: ACCENT, width: 52, height: 52 }}
          >
            <Image
              source={require("../../assets/images/progress.png")}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
