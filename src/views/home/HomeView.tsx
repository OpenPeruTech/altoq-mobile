import { AuthorityCard } from "@/components/AuthorityCard";
import { CandidateCard } from "@/components/CandidateCard";
import { SeederButton } from "@/components/DevTools/SeederButton";
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
import { LinearGradient } from "expo-linear-gradient";
const logo_altoq = require("../../../assets/images/altoq-logo.png");

export default function HomeView() {
  // Obtener colores del tema
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const accentColor = useThemeColor("accent");
  const warningColor = useThemeColor("warning");
  const currentDate = new Date();

  // Fechas para las vueltas electorales
  const primeraVueltaDate = new Date("2026-04-05");
  const segundaVueltaDate = new Date("2026-05-24");

  // Cálculo de días para cada vuelta
  const timeDiffPrimera = primeraVueltaDate.getTime() - currentDate.getTime();
  const daysLeftPrimera = Math.ceil(timeDiffPrimera / (1000 * 3600 * 24));

  const timeDiffSegunda = segundaVueltaDate.getTime() - currentDate.getTime();
  const daysLeftSegunda = Math.ceil(timeDiffSegunda / (1000 * 3600 * 24));

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
        <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
        <SeederButton />
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Card Principal con Linear Gradient */}
          <LinearGradient
            colors={["#306A69", "#5FD0CF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="pb-5"
            style={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            {/* Header dentro del card */}
            <View className="pt-2 px-5">
              <View className="flex-row items-center">
                <Text
                  className="text-2xl font-bold ml-3"
                  style={{ color: "#FFFFFF" }}
                >
                  Informate
                </Text>
                <Image
                  source={logo_altoq}
                  style={{ width: 50, height: 50, opacity: 0.9 }}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Contenido del Countdown */}
            <View className="px-5 mt-4">
              {/* CONTENEDOR DE VUELTAS - Ahora con dos cards separados */}
              <View className="flex-row justify-between items-center">
                {/* Card Primera Vuelta */}
                <View
                  className="flex-1 mr-2 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text
                        className="text-1xl font-bold"
                        style={{ color: "#000000" }}
                      >
                        1ra{"\n"}
                        <Text style={{ color: "#5FD0CF" }}>vuelta</Text>
                      </Text>
                    </View>
                    <View className="items-center flex-1">
                      <Text
                        className="text-5xl font-bold"
                        style={{ color: "#5FD0CF" }}
                      >
                        {daysLeftPrimera}
                      </Text>
                      <Text
                        className="text-xs mt-1"
                        style={{ color: "#5FD0CF" }}
                      >
                        Días
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Card Segunda Vuelta */}
                <View
                  className="flex-1 ml-2 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text
                        className=" text-1xl font-bold"
                        style={{ color: "#000000" }}
                      >
                        2da{"\n"}
                        <Text style={{ color: "#5FD0CF" }}>vuelta</Text>
                      </Text>
                    </View>
                    <View className="items-center flex-1">
                      <Text
                        className="text-5xl font-bold"
                        style={{ color: "#5FD0CF" }}
                      >
                        {daysLeftSegunda}
                      </Text>
                      <Text
                        className="text-xs mt-1"
                        style={{ color: "#5FD0CF" }}
                      >
                        Días
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Información adicional */}
              <View className="flex-row items-center mt-5">
                <Ionicons name="calendar" size={18} color="#FFFFFF" />
                <Text
                  className="text-md ml-2 text-center"
                  style={{ color: "#FFFFFF" }}
                >
                  Elecciones generales 2026
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* Componente Proceso Electoral */}
          <View className="mx-5 mt-6 p-5 rounded-2xl bg-white">
            <Text
              className="text-lg font-bold mb-4"
              style={{ color: textColor }}
            >
              Proceso electoral
            </Text>

            <View className="space-y-1">
              {/* Inscripción De Candidatos En Curso - PRIMERO MARCADO */}
              <View className="flex-row items-center">
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={primaryColor}
                  style={{ marginRight: 12 }}
                />
                <Text className="text-sm flex-1" style={{ color: textColor }}>
                  Inscripción De Candidatos En Curso
                </Text>
              </View>

              {/* Línea divisoria */}
              <View className="h-4 w-px bg-gray-300 ml-2" />

              {/* Publicación Del Padrón Electoral - SEGUNDO NO MARCADO */}
              <View className="flex-row items-center">
                <View className="w-5 h-5 rounded-full border-2 border-gray-400 mr-3 ml-0.5" />
                <Text className="text-sm flex-1" style={{ color: textColor }}>
                  Publicación Del Padrón Electoral
                </Text>
              </View>

              {/* Línea divisoria */}
              <View className="h-4 w-px bg-gray-300 ml-2" />

              {/* Día De Votación - TERCERO NO MARCADO */}
              <View className="flex-row items-center">
                <View className="w-5 h-5 rounded-full border-2 border-gray-400 mr-3 ml-0.5" />
                <Text className="text-sm flex-1" style={{ color: textColor }}>
                  Día De Votación: 12 De Abril De 2026
                </Text>
              </View>

              {/* Línea divisoria */}
              <View className="h-4 w-px bg-gray-300 ml-2" />

              {/* Segunda Vuelta - CUARTO NO MARCADO */}
              <View className="flex-row items-center">
                <View className="w-5 h-5 rounded-full border-2 border-gray-400 mr-3 ml-0.5" />
                <Text className="text-sm flex-1" style={{ color: textColor }}>
                  Segunda Vuelta (Si Aplica): Junio 2026
                </Text>
              </View>
            </View>
          </View>

          {/* Resto del contenido */}
          <View className="flex-1" style={{ backgroundColor }}>
  
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
