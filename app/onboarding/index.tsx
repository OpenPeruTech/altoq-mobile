import AsyncStorage from "@react-native-async-storage/async-storage";
import * as NavigationBar from "expo-navigation-bar";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const ACCENT = "#E30613";

type LineChunk = string | { hi: string };

const SLIDES: { id: string; image: any; lines: LineChunk[][] }[] = [
  {
    id: "1",
    image: require("../../assets/images/aviso01.png"),
    lines: [
      ["¡Infórmate ", { hi: " al toke! " }],
      ["Conoce a todos los candidatos en un"],
      ["solo lugar"],
    ],
  },
  {
    id: "2",
    image: require("../../assets/images/aviso02.png"),
    lines: [
      ["Toda la info que necesitas saber en un"],
      ["solo lugar, ", { hi: " clarito y sin floro " }],
    ],
  },
  {
    id: "3",
    image: require("../../assets/images/aviso03.png"),
    lines: [
      ["Explora, compara y"],
      ["elige de manera sencilla"],
      ["con ayuda de la ", { hi: " inteligencia artificial " }],
    ],
  },
];

export default function Onboarding() {
  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const insets = useSafeAreaInsets();

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

  useEffect(() => {
    // StatusBar arriba
    StatusBar.setBarStyle("dark-content", true);

    // Barra inferior Android
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#fff");
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, []);

  const PROGRESS_IMAGES = [
    require("../../assets/images/progress-1.png"),
    require("../../assets/images/progress-2.png"),
    require("../../assets/images/progress-3.png"),
  ];

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    if (i !== index) setIndex(i);
  };

  const segments = useMemo(() => SLIDES.map((_, i) => i === index), [index]);

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["top", "left", "right", "bottom"]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top bar */}
      <View className="h-11 items-end justify-center px-4">
        <Pressable onPress={goHome} hitSlop={8}>
          <Text className="text-base font-medium text-gray-900">Skip</Text>
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
              style={{ height: height * 0.5 }}
              className="items-center justify-center"
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: width, height: height * 0.5 }}
              />
            </View>

            {/* Texto inferior */}
            <View
              style={{ paddingTop: 16, paddingBottom: height * 0.15 }}
              className="px-10"
            >
              {item.lines.map((row: LineChunk[], idx: number) => (
                <Text
                  key={idx}
                  className="text-[28px] leading-[34px] font-extrabold text-[#0B0B0B] mb-1.5"
                >
                  {row.map((chunk: LineChunk, i: number) =>
                    typeof chunk === "string" ? (
                      <Text key={i}>{chunk}</Text>
                    ) : (
                      <Text
                        key={i}
                        className="bg-[#E30613] text-white px-2 py-0 rounded-md"
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
      <View
        className="absolute left-8 right-8 flex-row items-center justify-between"
        style={{ bottom: insets.bottom + 16 }}
      >
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

        <Pressable
          onPress={next}
          className="w-16 h-16 rounded-full border-2 items-center justify-center"
          style={{ borderColor: ACCENT }}
        >
          <View
            className="rounded-full items-center justify-center"
            style={{ backgroundColor: ACCENT, width: 52, height: 52 }}
          >
            <Image source={PROGRESS_IMAGES[index]} resizeMode="contain" />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
