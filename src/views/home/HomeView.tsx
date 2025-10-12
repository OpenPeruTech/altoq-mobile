import { AuthorityCard } from "@/components/AuthorityCard";
import { CandidateCard } from "@/components/CandidateCard";
import { SeederButton } from "@/components/DevTools/SeederButton";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Loading } from "@/components/ui/Loading";
import { useAuthorities, usePopularCandidates } from "@/hooks";
import { useThemeColor } from "@/hooks/useThemeColor";

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  Image,
  PanResponder,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const llamaImage = require("../../../assets/images/llama.png");

export default function HomeView() {
  // Obtener colores del tema
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const accentColor = useThemeColor("accent");
  const warningColor = useThemeColor("warning");
  const currentDate = new Date();
  const electionDate = new Date("2026-04-05");

  const timeDiff = electionDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;
  const hours = currentDate.getHours();

  // Datos de Firebase
  const { authorities, loading: authoritiesLoading } = useAuthorities();
  const { candidates, loading: candidatesLoading } = usePopularCandidates();
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  // Ref para tener siempre la versión actualizada de candidates
  const candidatesRef = React.useRef(candidates);
  React.useEffect(() => {
    candidatesRef.current = candidates;
  }, [candidates]);

  // Debug: Verificar datos
  React.useEffect(() => {
    if (candidates.length > 0) {
      console.log(
        "🔍 All candidates:",
        candidates.map((c, i) => `${i}: ${c?.name || "undefined"}`)
      );

      const currentCandidate = candidates[currentCandidateIndex];
      if (currentCandidate) {
        console.log("✅ Current candidate exists:", currentCandidate.name);
      } else {
        console.error(
          "❌ Current candidate is undefined at index:",
          currentCandidateIndex
        );
      }
    }
  }, [candidates, currentCandidateIndex]);

  // Reset index si está fuera de rango
  React.useEffect(() => {
    if (candidates.length > 0 && currentCandidateIndex >= candidates.length) {
      setCurrentCandidateIndex(0);
    }
  }, [candidates.length, currentCandidateIndex]);

  // Animación para el swipe
  const pan = useState(new Animated.ValueXY())[0];

  // Configurar el PanResponder para detectar gestos de swipe
  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Detectar swipe horizontal
        return Math.abs(gestureState.dx) > 5;
      },
      onPanResponderGrant: () => {
        console.log("🎯 Gesture captured");
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        // Umbral para considerar un swipe
        const swipeThreshold = 50;

        if (gestureState.dx < -swipeThreshold) {
          // Swipe izquierda - siguiente candidato
          goToNextCandidate();
        } else if (gestureState.dx > swipeThreshold) {
          // Swipe derecha - candidato anterior
          goToPreviousCandidate();
        } else {
          // Vuelve a la posición original si no se superó el umbral
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
      onPanResponderTerminationRequest: () => false, // No permitir que otros componentes capturen
    })
  )[0];

  const goToNextCandidate = React.useCallback(() => {
    const currentCandidates = candidatesRef.current;

    if (currentCandidates.length === 0) {
      return;
    }

    setCurrentCandidateIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % currentCandidates.length;
      console.log("🔄 Changing from index", prevIndex, "to", nextIndex);

      Animated.timing(pan, {
        toValue: { x: -500, y: 0 },
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({ x: 500, y: 0 });
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }).start();
      });

      return nextIndex;
    });
  }, [pan]);

  const goToPreviousCandidate = React.useCallback(() => {
    const currentCandidates = candidatesRef.current;

    if (currentCandidates.length === 0) {
      console.log("❌ No candidates available");
      return;
    }

    setCurrentCandidateIndex((prevIndex) => {
      const newPrevIndex =
        prevIndex === 0 ? currentCandidates.length - 1 : prevIndex - 1;

      Animated.timing(pan, {
        toValue: { x: 500, y: 0 },
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({ x: -500, y: 0 });
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }).start();
      });

      return newPrevIndex;
    });
  }, [pan]);

  // Estilo animado para la tarjeta
  const animatedStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <>
      <Loading
        visible={authoritiesLoading || candidatesLoading}
        message="Cargando datos..."
      />
      <SafeAreaView className="flex-1" style={{ backgroundColor }}>
        <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
        <SeederButton />
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="px-5 pt-2">
            <View className="flex-row items-center">
              <AvatarPlaceholder
                name="Kelvin Guerra"
                size={40}
                backgroundColor={warningColor}
              />
              <Text
                className="text-2xl font-bold ml-3"
                style={{ color: textColor }}
              >
                Buenos días!
              </Text>
            </View>
          </View>

          {/* Countdown Card */}
          <View
            className="mx-5 p-5 relative overflow-hidden mt-4"
            style={{ borderRadius: 20, backgroundColor: primaryColor }}
          >
            <View className="flex-row items-center mb-5">
              <Ionicons name="calendar" size={20} color="#FFFFFF" />
              <Text
                className="text-base font-semibold ml-2"
                style={{ color: "#FFFFFF" }}
              >
                Elecciones Generales 2026
              </Text>
            </View>

            {/* CONTENEDOR PRINCIPAL CENTRADO */}
            <View className="flex-row justify-center items-center mb-2">
              {/* Meses */}
              <View className="items-center mx-3">
                <Text
                  className="text-5xl font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  {months.toString().padStart(2, "0")}
                </Text>
                <Text
                  className="text-xs opacity-90"
                  style={{ color: "#FFFFFF" }}
                >
                  Meses
                </Text>
              </View>

              {/* Días */}
              <View className="items-center mx-3">
                <Text
                  className="text-5xl font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  {days.toString().padStart(2, "0")}
                </Text>
                <Text
                  className="text-xs opacity-90"
                  style={{ color: "#FFFFFF" }}
                >
                  Días
                </Text>
              </View>

              {/* Horas */}
              <View className="items-center mx-3">
                <Text
                  className="text-5xl font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  {hours.toString().padStart(2, "0")}
                </Text>
                <Text
                  className="text-xs opacity-90"
                  style={{ color: "#FFFFFF" }}
                >
                  Horas
                </Text>
              </View>
            </View>

            {/* Mascot */}
            <View className="absolute" style={{ right: -60, top: 3 }}>
              <Image
                source={llamaImage}
                style={{ width: 132, height: 132, opacity: 0.9 }}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Authorities */}
          <View className="px-5 mt-6">
            <Text
              className="text-lg font-bold mb-4"
              style={{ color: textColor }}
            >
              ¿Qué autoridades elegiremos?
            </Text>

            {/* Fila superior - Presidente y Vicepresidente centrados */}
            <View className="flex-row justify-center mb-4">
              {authorities.slice(0, 2).map((authority, index) => (
                <AuthorityCard
                  key={authority.id || index}
                  {...authority}
                  width="w-[120px]"
                />
              ))}
            </View>

            {/* Fila inferior - Las otras 3 autoridades en horizontal */}
            <View className="flex-row justify-between">
              {authorities.slice(2).map((authority, index) => (
                <AuthorityCard
                  key={authority.id || index}
                  {...authority}
                  width="w-[30%]"
                />
              ))}
            </View>
          </View>

          {/* Candidates con Swipe (solo manual) */}
          <View className="px-5 mt-6">
            <Text
              className="text-lg font-bold mb-4"
              style={{ color: textColor }}
            >
              Los más populares
            </Text>

            {candidates.length > 0 && candidates[currentCandidateIndex] ? (
              <>
                <Animated.View
                  {...panResponder.panHandlers}
                  style={animatedStyle}
                >
                  <CandidateCard {...candidates[currentCandidateIndex]} />
                </Animated.View>

                <View className="flex-row justify-center mt-3">
                  {candidates.map((_, idx: number) => (
                    <View
                      key={idx}
                      className={`h-2 rounded-full mx-1 ${
                        currentCandidateIndex === idx ? "w-5" : "w-2"
                      }`}
                      style={{
                        backgroundColor:
                          currentCandidateIndex === idx
                            ? primaryColor
                            : accentColor,
                      }}
                    />
                  ))}
                </View>

                {/* Instrucciones para el usuario */}
                <Text
                  className="text-center mt-2 text-xs"
                  style={{ color: textSecondaryColor }}
                >
                  Desliza hacia los lados para cambiar de candidato
                </Text>
              </>
            ) : (
              <Text className="text-gray-500 text-sm">
                {candidates.length === 0
                  ? "Cargando candidatos..."
                  : "Error al cargar candidato"}
              </Text>
            )}
          </View>

          <View className="h-24" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
