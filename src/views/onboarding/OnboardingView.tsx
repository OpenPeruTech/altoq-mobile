import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as NavigationBar from "expo-navigation-bar";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { ProgressButton } from "@/components/ui";
import { useAllThemeColors, useThemeColor } from "@/hooks/useThemeColor";

const { width, height } = Dimensions.get("window");

type LineChunk = string | { hi: string };

const SLIDES: { id: string; image: any; lines: LineChunk[][] }[] = [
  {
    id: "1",
    image: require("../../../assets/images/aviso01.png"),
    lines: [
      [{ hi: "¡Infórmate al toke! " }],
      ["Conoce a todos los candidatos en un"],
      ["solo lugar"],
    ],
  },
  {
    id: "2",
    image: require("../../../assets/images/aviso02.png"),
    lines: [
      ["Toda la info que necesitas saber en un"],
      ["solo lugar, ", { hi: " clarito y sin floro " }],
    ],
  },
  {
    id: "3",
    image: require("../../../assets/images/aviso03.png"),
    lines: [
      ["Explora, compara y"],
      ["elige de manera sencilla"],
      ["con ayuda de la ", { hi: " inteligencia artificial " }],
    ],
  },
];

export default function OnboardingView() {
  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);
  const insets = useSafeAreaInsets();

  // Obtener colores del tema actual
  const colors = useAllThemeColors();
  const primaryColor = useThemeColor("primary");
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");

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

  const previous = () => {
    if (index > 0) {
      listRef.current?.scrollToIndex({ index: index - 1, animated: true });
    } else {
      goHome();
    }
  };

  useEffect(() => {
    // StatusBar arriba - cambia según el slide
    const barStyle = index === 0 ? "light-content" : "light-content";
    StatusBar.setBarStyle(barStyle, true);

    // Barra inferior Android
    if (Platform.OS === "android") {
      const navBarColor =
        index === 0 ? colors.backgroundOnboardingOne : backgroundColor;
      NavigationBar.setBackgroundColorAsync(navBarColor);
      NavigationBar.setButtonStyleAsync(index === 0 ? "light" : "dark");
    }
  }, [backgroundColor, index, colors.backgroundOnboardingOne]);

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    if (i !== index) setIndex(i);
  };

  const segments = useMemo(() => SLIDES.map((_, i) => i === index), [index]);

  // Colores dinámicos según el slide actual
  const currentBackgroundColor = colors.backgroundOnboardingOne;
  // index === 0 ? colors.backgroundOnboardingOne : backgroundColor;
  const currentTextColor = index === 0 ? "#FFFFFF" : textColor;

  return (
    <View className="flex-1" style={{ backgroundColor }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={currentBackgroundColor}
      />

      {/* Barra superior del sistema con color específico */}
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: currentBackgroundColor }}
      />
      <View style={{ backgroundColor: currentBackgroundColor, height: 20 }} />

      {/* Top bar - Back button */}
      <View
        className="absolute z-10 px-6 py-4"
        style={{ top: insets.top + 30, left: 0 }}
      >
        <Pressable onPress={previous} hitSlop={8}>
          <Ionicons name="chevron-back" size={32} color={currentTextColor} />
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
        renderItem={({ item }) => {
          const slideBackground =
            item.id === "1" ? colors.backgroundOnboardingOne : backgroundColor;
          const slideTextColor = item.id === "1" ? "#FFFFFF" : textColor;

          return (
            <View
              style={{ width, backgroundColor: slideBackground }}
              className="flex-1"
            >
              {/* Imagen centrada */}
              <View
                style={{ height: height * 0.5 }}
                className="items-center justify-center"
              >
                {/* <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{ width: width, height: height * 0.5 }}
                /> */}
              </View>

              {/* Texto inferior */}
              <View
                style={{ paddingTop: 16, paddingBottom: height * 0.15 }}
                className="px-10"
              >
                {item.lines.map((row: LineChunk[], idx: number) => (
                  <Text
                    key={idx}
                    className="text-[28px] leading-[34px] font-extrabold"
                    style={{ color: slideTextColor }}
                  >
                    {row.map((chunk: LineChunk, i: number) =>
                      typeof chunk === "string" ? (
                        chunk
                      ) : (
                        <Text
                          key={i}
                          style={{
                            color: colors.textOnboarding,
                          }}
                        >
                          {chunk.hi}
                        </Text>
                      )
                    )}
                  </Text>
                ))}
              </View>
            </View>
          );
        }}
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
                  ? "w-7 h-2 rounded-full mr-2"
                  : "w-2.5 h-2.5 rounded-full mr-2"
              }
              style={{
                backgroundColor: active ? primaryColor : colors.accent,
              }}
            />
          ))}
        </View>

        <ProgressButton
          onPress={next}
          progress={(index + 1) / SLIDES.length}
          iconName="chevron-forward"
          iconColor={colors.textOnPrimary}
          backgroundColor={primaryColor}
          progressColor={primaryColor}
          size={64}
        />
      </View>
    </View>
  );
}
