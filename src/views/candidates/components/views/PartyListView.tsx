import { CandidatesUIColors } from "@/constants/Colors";
import { usePartyCandidates } from "@/hooks";
import { Candidate } from "@/views/candidates/data/parties";
import React from "react";
import { StyleSheet } from "react-native";
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

  return (
    <>
      <Loading visible={loading} message="Cargando datos..." />
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <HeaderWithBack title={selectedParty} onBackPress={onBackPress} />
        <CandidatesList
          candidates={partyCandidates}
          partyName={selectedParty}
          searchText={searchText}
          onSearchChange={onSearchChange}
          onCandidatePress={onCandidatePress}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CandidatesUIColors.screenBackground,
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
