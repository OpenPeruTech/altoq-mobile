import { CandidatesUIColors, Colors } from "@/constants/Colors";
import { useMainCandidates, useParties } from "@/hooks";
import { MainCandidate } from "@/views/candidates/data/parties";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@/components";
import { Ionicons } from "@expo/vector-icons";
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
  const {
    firstRowParties,
    secondRowParties,
    thirdRowParties,
    fourthRowParties,
    loading: partiesLoading,
  } = useParties();

  const { mainCandidates, loading: candidatesLoading } = useMainCandidates();

  // const isLoading = partiesLoading || candidatesLoading;

  return (
    <>
      <Loading
        visible={partiesLoading || candidatesLoading}
        message="Cargando datos..."
      />
      <StatusBar barStyle={"light-content"} backgroundColor={"#5FD0CF"} translucent={false} />




      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        {/* Header */}
        <LinearGradient
          colors={Colors.light.gradient}
          start={{ x: 1, y: -1 }}
          end={{ x: 0, y: 1 }}
          style={{
            paddingTop: 32,
            paddingBottom: 24,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15
          }}
        >
          <Text className="text-white text-2xl font-bold text-center">
            Lista De Partidos
          </Text>
        </LinearGradient>
        {/* Search Bar */}
        <SearchBar value={searchText} onChangeText={onSearchChange} />
        <ScrollView
          className="flex-1 px-4 s"
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          <View className="flex-row flex-wrap justify-between p-4">
            {firstRowParties.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => onPartyPress(item.name)}
                className="w-[48%] bg-white  p-4 mb-4 shadow-sm border-[0.5px] "
                style={{ overflow: 'hidden', borderColor:"#e0e0e0", borderRadius: 16 }}
              >
                <View className="items-center justify-center flex-row gap-2">
                  {/* Avatar del partido */}
                  <View className="w-8 h-8 rounded-sm bg-red-200 items-center justify-center mb-3" />

                  {/* Contenedor del nombre */}
                  <View style={{ minHeight: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      className="text-gray-800 font-semibold text-center text-sm"
                      numberOfLines={1}
                      style={{ color: CandidatesUIColors.textSecondary }}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

            ))}
          </View>

        </ScrollView>
        <View className="bg-gray-50 px-5 py-4 pb-60  ">
          <Text className="text-gray-900 font-bold mb-4 p-4" style={{ fontSize: 16 }} >
            Partidos Populares
          </Text>

          <View className="flex-row justify-around mt-2">
            {[1, 2, 3].map((item, index) => (
              <View key={item} className="items-center border-[0.5px] border-[#0000001A] p-4 mb-4 rounded-lg">
                <View
                  className="w-16 h-16 rounded-full items-center justify-center mb-2"
                  style={{
                    backgroundColor: index === 0 ? '#F59E0B' : index === 1 ? '#FB923C' : '#FB7185'
                  }}
                >
                  <Ionicons name="people" size={28} color="#fff" />
                </View>
                <Text className="text-gray-600 text-xs text-center"
                  style={{ color: CandidatesUIColors.textTertiary }}
                >
                  Partido Político {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CandidatesUIColors.screenBackground,
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
