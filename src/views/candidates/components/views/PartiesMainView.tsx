import { CandidatesUIColors, Colors } from "@/constants/Colors";
import { useMainCandidates, useParties } from "@/hooks";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MainCandidate } from "@/views/candidates/data/parties";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@/components";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "../shared";
interface PartiesMainViewProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onPartyPress: (partyName: string) => void;
  onMainCandidatePress: (candidate: MainCandidate) => void;
}

export const PartiesMainView: React.FC<PartiesMainViewProps> = ({
  searchText,
  onSearchChange,
  onPartyPress,
  onMainCandidatePress,
}) => {
  // Obtener datos de Firebase
  const { firstRowParties, loading: partiesLoading } = useParties();

  const { mainCandidates, loading: candidatesLoading } = useMainCandidates();
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const primary = useThemeColor("primary");
  const counterBackgroundColor = useThemeColor("counterBackground");
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const gradientColors = Colors[theme].gradient;
  const gradientBackgroundColor = gradientColors[0];

  return (
    <>
      <Loading
        visible={partiesLoading || candidatesLoading}
        message="Cargando datos..."
      />
      <View style={[styles.container, { backgroundColor }]}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={gradientBackgroundColor}
        />

        <SafeAreaView
          edges={["top"]}
          style={{ backgroundColor: gradientBackgroundColor }}
        />

        <View
          style={{ backgroundColor: gradientBackgroundColor, height: 20 }}
        />

        <SafeAreaView
          style={[styles.container, { backgroundColor }]}
          edges={["bottom"]}
        >
          {/* Header */}
          <LinearGradient
            colors={gradientColors}
            start={{ x: 1, y: -1 }}
            end={{ x: 0, y: 1 }}
            style={{
              paddingTop: 32,
              paddingBottom: 24,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Text className="text-white text-2xl font-bold text-center">
              Lista De Partidos
            </Text>
          </LinearGradient>
          <ScrollView
            className="flex-1 px-4"
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: "50%" }}
          >
            <SearchBar value={searchText} onChangeText={onSearchChange} />
            <View className="flex-row flex-wrap justify-between p-3">
              {firstRowParties.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    console.log("PartiesMainView - Party pressed:", item.name);
                    onPartyPress(item.name);
                  }}
                  className="items-center justify-center p-3 mb-3 shadow-sm"
                  style={{
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    borderRadius: 16,
                    backgroundColor: counterBackgroundColor,
                    width: "31%",
                    minHeight: 110,
                  }}
                >
                  {/* Estrellita en la esquina superior derecha */}
                  <View
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      zIndex: 1,
                    }}
                  >
                    <Ionicons name="star" size={14} color={primary} />
                  </View>

                  {/* Icono del partido arriba */}
                  <View
                    className="rounded-full items-center justify-center mb-2"
                    style={{
                      backgroundColor: item.color || "#F59E0B",
                      marginBottom: 6,
                      width: 56,
                      height: 56,
                    }}
                  >
                    <Text
                      className="font-bold"
                      style={{ color: "#FFFFFF", fontSize: 18 }}
                    >
                      {item.icon}
                    </Text>
                  </View>

                  {/* Nombre del partido abajo */}
                  <Text
                    className="font-semibold text-xs text-center"
                    numberOfLines={2}
                    style={{ color: textColor }}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View
            className="px-5 py-3 pb-20"
            style={{ backgroundColor: backgroundColor }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-1"
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              {mainCandidates.map((candidate, index) => (
                <TouchableOpacity
                  key={candidate.id || index}
                  onPress={() => {
                    console.log(
                      "PartiesMainView - Popular party pressed:",
                      candidate.party
                    );
                    onPartyPress(candidate.party);
                  }}
                  className="mb-4 mr-4 rounded-lg overflow-hidden"
                  style={{
                    width: 260,
                    height: 200,
                    backgroundColor: counterBackgroundColor,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                  }}
                >
                  {/* Imagen en la parte superior - ocupa más de la mitad */}
                  <View
                    style={{
                      height: 100,
                      backgroundColor: candidate.color || primary + "20",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    {candidate.image ? (
                      <Image
                        source={{
                          uri: candidate.image,
                          cache: "force-cache",
                        }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                        onError={(error) => {
                          console.log("Error cargando imagen:", candidate.name);
                        }}
                      />
                    ) : (
                      <View
                        className="w-full h-full items-center justify-center"
                        style={{ backgroundColor: candidate.color || primary }}
                      >
                        <Text
                          className="text-4xl"
                          style={{ color: "#FFFFFF", fontWeight: "bold" }}
                        >
                          {candidate.name.charAt(0)}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Contenido debajo de la imagen */}
                  <View className="p-3">
                    {/* Nombre del partido */}
                    <Text
                      className="text-base font-bold mb-1"
                      style={{ color: textColor }}
                      numberOfLines={1}
                    >
                      {candidate.party}
                    </Text>

                    {/* Descripción del partido */}
                    <Text
                      className="text-xs mb-2"
                      style={{ color: textSecondaryColor }}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {candidate.description}
                    </Text>

                    {/* Botón Ver candidatos */}
                    <TouchableOpacity
                      className="flex-row items-center justify-end"
                      onPress={() => {
                        console.log(
                          "PartiesMainView - Ver candidatos pressed:",
                          candidate.party
                        );
                        onPartyPress(candidate.party);
                      }}
                    >
                      <Text
                        className="text-xs font-semibold mr-2"
                        style={{ color: primary }}
                      >
                        Ver candidatos
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={14}
                        color={primary}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: CandidatesUIColors.headerBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    width: "90%",
    marginTop: 10,
    borderRadius: 10,
  },
  headerTitle: {
    color: CandidatesUIColors.headerText,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },

  scrollContent: {
    alignItems: "center",
  },
  bottomSpacing: {
    height: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: CandidatesUIColors.headerBackground,
    fontSize: 16,
  },
});
