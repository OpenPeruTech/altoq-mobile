import { CandidatesUIColors } from "@/constants/Colors";
import { useMainCandidates, useParties } from "@/hooks";
import { MainCandidate } from "@/views/candidates/data/parties";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@/components";
import { MainCandidates } from "../list";
import { FivePartyRow, ThreePartyRow } from "../party";
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
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Lista De Candidatos</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Search Bar */}
          <SearchBar value={searchText} onChangeText={onSearchChange} />

          {/* Primera fila - 5 partidos con fotos */}
          {firstRowParties.length > 0 && (
            <FivePartyRow
              parties={firstRowParties}
              onPartyPress={onPartyPress}
            />
          )}

          {/* Segunda fila - 3 partidos estilo home */}
          {secondRowParties.length > 0 && (
            <ThreePartyRow
              parties={secondRowParties}
              onPartyPress={onPartyPress}
            />
          )}

          {/* Tercera fila - 5 partidos con fotos */}
          {thirdRowParties.length > 0 && (
            <FivePartyRow
              parties={thirdRowParties}
              onPartyPress={onPartyPress}
            />
          )}

          {/* Cuarta fila - 3 partidos estilo home */}
          {fourthRowParties.length > 0 && (
            <ThreePartyRow
              parties={fourthRowParties}
              onPartyPress={onPartyPress}
            />
          )}

          {/* Main Candidates */}
          {mainCandidates.length > 0 && (
            <MainCandidates
              candidates={mainCandidates}
              onCandidatePress={onMainCandidatePress}
            />
          )}

          <View style={styles.bottomSpacing} />
        </ScrollView>
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
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  scrollView: {
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
