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
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const logo_altoq = require("../../../assets/images/altoq-logo.png");

export default function HomeView() {
  // 🎨 Colores del tema
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const accentColor = useThemeColor("accent");

  // 🗓️ Fechas de elecciones
  const currentDate = new Date();
  const primeraVueltaDate = new Date("2026-04-05");
  const segundaVueltaDate = new Date("2026-05-24");

  const daysLeftPrimera = Math.ceil(
    (primeraVueltaDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  const daysLeftSegunda = Math.ceil(
    (segundaVueltaDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );

  // 🔥 Datos desde Firebase
  const { authorities, loading: authoritiesLoading } = useAuthorities();
  const { candidates, loading: candidatesLoading } = usePopularCandidates();
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  // 📦 Referencia de candidatos
  const candidatesRef = React.useRef(candidates);
  React.useEffect(() => {
    candidatesRef.current = candidates;
  }, [candidates]);

  // 🎬 Animaciones swipe
  const pan = useState(new Animated.ValueXY())[0];

  const goToNextCandidate = React.useCallback(() => {
    const list = candidatesRef.current;
    if (!list.length) return;

    setCurrentCandidateIndex((prev) => {
      const next = (prev + 1) % list.length;
      Animated.sequence([
        Animated.timing(pan, {
          toValue: { x: -500, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
      return next;
    });
  }, [pan]);

  const goToPreviousCandidate = React.useCallback(() => {
    const list = candidatesRef.current;
    if (!list.length) return;

    setCurrentCandidateIndex((prev) => {
      const next = prev === 0 ? list.length - 1 : prev - 1;
      Animated.sequence([
        Animated.timing(pan, {
          toValue: { x: 500, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
      return next;
    });
  }, [pan]);

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 5,
        onPanResponderMove: Animated.event([null, { dx: pan.x }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (_, g) => {
          const threshold = 50;
          if (g.dx < -threshold) goToNextCandidate();
          else if (g.dx > threshold) goToPreviousCandidate();
          else
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
        },
      }),
    [goToNextCandidate, goToPreviousCandidate]
  );

  const animatedStyle = { transform: pan.getTranslateTransform() };

  // 📘 Información adicional
  const infoCards = [
    {
      title: "Que hace un presidente",
      description:
        "Etapa en la que los partidos deben inscribirse para poder participar en las elecciones generales de 2026.",
    },
    {
      title: "Que pasa si no voto?",
      description:
        "Los partidos presentan sus listas de candidatos al JNE para su evaluación y validación.",
    },
    {
      title: "Que es la segunda vuelta?",
      description:
        "Periodo destinado a la exposición de planes de gobierno, debates y participación ciudadana.",
    },
  ];

  // 📅 Eventos Timeline
  const today = new Date("2026-03-21");
  const events = [
    {
      title: "Inscripción de candidatos en curso",
      
      date: "2026-03-14",
      color: "#20C6C6",
      icon: "checkmark-circle-outline",
      titleIcon: "document-text-outline",
    },
    {
      title: "Publicación del padrón electoral",
      
      date: "2026-04-11",
      color: "#1565C0",
      icon: "checkmark-circle-outline",
      titleIcon: "list-circle-outline",
    },
    {
      title: "Día de elecciones (1ra vuelta)",
      
      date: "2026-04-12",
      color: "#FBC02D",
      icon: "checkmark-circle-outline",
      titleIcon: "file-tray-full-outline",
    },
    {
      title: "Día de elecciones (2da vuelta)",
      
      date: "2026-06-07",
      color: "#26A69A",
      icon: "checkmark-circle-outline",
      titleIcon: "checkmark-done-outline",
    },
  ];

  return (
    <>
      <Loading
        visible={authoritiesLoading || candidatesLoading}
        message="Cargando datos..."
      />
      <SafeAreaView className="flex-1" style={{ backgroundColor }}>
        <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
        <SeederButton />

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 🗳️ CARD PRINCIPAL */}
          <LinearGradient
            colors={["#306A69", "#5FD0CF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="pb-7 px-7 pt-4"
            style={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <View className="flex-row items-center justify-start mb-3">
              <Text
                className="text-2xl font-bold"
                style={{ color: "#FFFFFF", marginRight: 10 }}
              >
                Infórmate
              </Text>
              <Image
                source={logo_altoq}
                style={{ width: 50, height: 50, opacity: 0.9 }}
                resizeMode="contain"
              />
            </View>

            {/* 🧮 Contadores */}
            <View className="flex-row justify-between items-center">
              {/* Primera vuelta */}
              <View className="flex-1 mr-2 p-4 rounded-xl items-center justify-center bg-white">
                <View className="flex-row items-center justify-center w-full">
                  <View className="items-center justify-center flex-1">
                    <Text className="text-xl font-bold text-black text-center">
                      1ra{"\n"}
                      <Text style={{ color: "#5FD0CF" }}>vuelta</Text>
                    </Text>
                  </View>
                  <View className="items-center justify-center flex-1">
                    <Text
                      className="text-5xl font-bold"
                      style={{ color: "#5FD0CF" }}
                    >
                      {daysLeftPrimera}
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: "#5FD0CF" }}>
                      Días
                    </Text>
                  </View>
                </View>
              </View>

              {/* Segunda vuelta */}
              <View className="flex-1 ml-2 p-4 rounded-xl items-center justify-center bg-white">
                <View className="flex-row items-center justify-center w-full">
                  <View className="items-center justify-center flex-1">
                    <Text className="text-xl font-bold text-black text-center">
                      2da{"\n"}
                      <Text style={{ color: "#5FD0CF" }}>vuelta</Text>
                    </Text>
                  </View>
                  <View className="items-center justify-center flex-1">
                    <Text
                      className="text-5xl font-bold"
                      style={{ color: "#5FD0CF" }}
                    >
                      {daysLeftSegunda}
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: "#5FD0CF" }}>
                      Días
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-row items-center mt-5 ">
              <Ionicons name="calendar-outline" size={18} color="#FFFFFF" />
              <Text
                className="text-md ml-2 text-center"
                style={{ color: "#FFFFFF" }}
              >
                Elecciones generales 2026
              </Text>
            </View>
          </LinearGradient>

          {/* 📅 TIMELINE */}
          <View className="mx-5 mt-6 p-5 rounded-2xl bg-white shadow-sm">
            <Text
              className="text-lg font-bold mb-5"
              style={{ color: textColor }}
            >
              Proceso electoral
            </Text>
            {events.map((event, i, arr) => {
              const eventDate = new Date(event.date);
              const isPast = eventDate <= today;
              const isLast = i === arr.length - 1;
              return (
                <View key={i} className="flex-row items-start relative">
                  {!isLast && (
                    <View
                      className="absolute left-3 top-6 w-0.5"
                      style={{
                        backgroundColor: "#20C6C6",
                        height: 50,
                      }}
                    />
                  )}
                  <View
                    className="w-6 h-6 rounded-full items-center justify-center border-2"
                    style={{
                      borderColor: "#20C6C6",
                      backgroundColor: isPast ? "#20C6C6" : "#FFFFFF",
                    }}
                  >
                    {isPast && (
                      <Ionicons
                        name={event.icon as any}
                        size={14}
                        color="#fff"
                      />
                    )}
                  </View>
                  <View className="ml-3 mb-5 flex-1">
                    <View className="flex-row items-center">
                      <Ionicons
                        name={event.titleIcon as any}
                        size={16}
                        color={event.color}
                        style={{ marginRight: 6 }}
                      />
                      <Text
                        className="text-base font-bold flex-shrink"
                        style={{
                          color: isPast ? event.color : "#444",
                        }}
                      >
                        {event.title}
                      </Text>
                    </View>
                    <Text className="text-xs mt-1" style={{ color: "#555" }}>
                      {new Date(event.date).toLocaleDateString("es-PE", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          {/* 🧍 LOS MÁS POPULARES */}
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
                  {candidates.map((_, idx) => (
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

          {/* 📘 INFORMACIÓN ADICIONAL */}
          <View className="mx-5 mt-6 mb-10">
            {infoCards.map((item, index) => (
              <View key={index} className="mb-3">
                <ExpandableInfoCard
                  title={item.title}
                  description={item.description}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

// 🧩 Subcomponente ExpandableInfoCard
const ExpandableInfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useState(new Animated.Value(0))[0];

  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View className="bg-white rounded-2xl p-4 shadow-md">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold text-gray-900">{title}</Text>

        <TouchableOpacity onPress={toggleExpand}>
          <Ionicons
            name={expanded ? "remove-circle-outline" : "add-circle-outline"}
            size={26}
            color="#20C6C6"
          />
        </TouchableOpacity>
      </View>

      <Animated.View
        style={{
          height: animatedHeight,
          opacity: animatedOpacity,
          overflow: "hidden",
        }}
      >
        <Text className="text-gray-600 mt-3 text-sm">{description}</Text>
      </Animated.View>
    </View>
  );
};
