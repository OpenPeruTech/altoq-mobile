import { CandidateCard } from "@/components/CandidateCard";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { autoritiesData } from "@/mooks/autoritiesData";
import { candidaties } from "@/mooks/candidaties";

import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  PanResponder,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const llamaImage = require("../../assets/images/llama.png");

export default function HomeScreen() {
  const currentDate = new Date();
  const electionDate = new Date("2026-04-05");

  const timeDiff = electionDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;
  const hours = currentDate.getHours();

  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  
  // Animación para el swipe
  const pan = useState(new Animated.ValueXY())[0];

  // Configurar el PanResponder para detectar gestos de swipe
  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x }
      ], { useNativeDriver: false }),
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
            useNativeDriver: false
          }).start();
        }
      }
    })
  )[0];

  const goToNextCandidate = () => {
    Animated.timing(pan, {
      toValue: { x: -500, y: 0 },
      duration: 50,
      useNativeDriver: false
    }).start(() => {
      setCurrentCandidateIndex((prev) => (prev + 1) % candidaties.length);
      pan.setValue({ x: 500, y: 0 });
      Animated.timing(pan, {
        toValue: { x: 0, y: 0 },
        duration: 50,
        useNativeDriver: false
      }).start();
    });
  };

  const goToPreviousCandidate = () => {
    Animated.timing(pan, {
      toValue: { x: 500, y: 0 },
      duration: 50,
      useNativeDriver: false
    }).start(() => {
      setCurrentCandidateIndex((prev) => 
        prev === 0 ? candidaties.length - 1 : prev - 1
      );
      pan.setValue({ x: -500, y: 0 });
      Animated.timing(pan, {
        toValue: { x: 0, y: 0 },
        duration: 50,
        useNativeDriver: false
      }).start();
    });
  };

  // Estilo animado para la tarjeta
  const animatedStyle = {
    transform: pan.getTranslateTransform()
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffffff" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View className="px-5 pt-2">
          <View className="flex-row items-center">
            <AvatarPlaceholder
              name="Kelvin Guerra"
              size={40}
              backgroundColor="#ffa726"
            />
            <Text className="text-black text-2xl font-bold ml-3">
              Buenos días!
            </Text>
          </View>
        </View>

        {/* Countdown Card */}
        <View
          className="bg-red-600 mx-5 p-5 relative overflow-hidden mt-4"
          style={{ borderRadius: 20 }}
        >
          <View className="flex-row items-center mb-5">
            <Ionicons name="calendar" size={20} color="#fff" />
            <Text className="text-white text-base font-semibold ml-2">
              Elecciones Generales 2026
            </Text>
          </View>

          {/* CONTENEDOR PRINCIPAL CENTRADO */}
          <View className="flex-row justify-center items-center mb-2">
            {/* Meses */}
            <View className="items-center mx-4">
              <Text className="text-white text-5xl font-bold">
                {months.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Meses</Text>
            </View>

            {/* Días */}
            <View className="items-center mx-4">
              <Text className="text-white text-5xl font-bold">
                {days.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Días</Text>
            </View>

            {/* Horas */}
            <View className="items-center mx-4">
              <Text className="text-white text-5xl font-bold">
                {hours.toString().padStart(2, "0")}
              </Text>
              <Text className="text-white text-xs opacity-90">Horas</Text>
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
          <Text className="text-lg font-bold text-gray-800 mb-4">
            ¿Qué autoridades elegiremos?
          </Text>

          {/* Fila superior - Presidente y Vicepresidente centrados */}
          <View className="flex-row justify-center mb-4">
            {autoritiesData.slice(0, 2).map((authority, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-lg p-3 flex-row items-center mx-2 shadow-sm w-[120px] h-[60px]"
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

          {/* Fila inferior - Las otras 3 autoridades en horizontal */}
          <View className="flex-row justify-between">
            {autoritiesData.slice(2).map((authority, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-lg p-2 flex-row items-center mb-3 shadow-sm w-[30%]"
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

        {/* Candidates con Swipe (solo manual) */}
        <View className="px-5 mt-6">
          <Text className="text-lg font-bold text-gray-800 mb-4">
            Los más populares
          </Text>

          <Animated.View
            {...panResponder.panHandlers}
            style={animatedStyle}
          >obs
          
            <CandidateCard {...candidaties[currentCandidateIndex]} />
          </Animated.View>

          <View className="flex-row justify-center mt-3">
            {candidaties.map((_, idx: number) => (
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

          {/* Instrucciones para el usuario */}
          <Text className="text-center text-gray-500 mt-2 text-xs">
            Desliza hacia los lados para cambiar de candidato
          </Text>
        </View>

        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}