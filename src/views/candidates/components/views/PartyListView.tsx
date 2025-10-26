import { CandidatesUIColors, Colors } from "@/constants/Colors";
import { usePartyCandidates } from "@/hooks";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Candidate } from "@/views/candidates/data/parties";
import React from "react";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loading } from "@/components";
import { CandidatesList } from "../list";
import { HeaderWithBack } from "../shared";

interface PartyListViewProps {
  selectedParty: string;
  searchText: string;
  onSearchChange: (text: string) => void;
  onBackPress: () => void;
  onCandidatePress: (candidate: Candidate) => void;
}

export const PartyListView: React.FC<PartyListViewProps> = ({
  selectedParty,
  searchText,
  onSearchChange,
  onBackPress,
  onCandidatePress,
}) => {
  // Obtener candidatos del partido desde Firebase
  const { candidates: partyCandidates, loading } =
    usePartyCandidates(selectedParty);

  const backgroundColor = useThemeColor("background");

  // 🎨 Colores del gradiente
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const gradientColors = Colors[theme].gradient;
  const gradientBackgroundColor = gradientColors[0];

  return (
    <>
      <Loading visible={loading} message="Cargando datos..." />
      <View style={[styles.container, { backgroundColor }]}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={gradientBackgroundColor}
        />

        {/* Barra superior del sistema con color específico */}
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
          <HeaderWithBack title={selectedParty} onBackPress={onBackPress} />
          <CandidatesList
            candidates={partyCandidates}
            partyName={selectedParty}
            searchText={searchText}
            onSearchChange={onSearchChange}
            onCandidatePress={onCandidatePress}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
