// CandidatesScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CandidatesList } from "./components/CandidatesList";
import { MainCandidates } from "./components/MainCandidates";
import { PartyRows } from "./components/PartyRows";
import {
  Candidate,
  candidatesByParty,
  firstRowParties,
  fourthRowParties,
  MainCandidate,
  mainCandidates,
  secondRowParties,
  thirdRowParties,
} from "./data/parties";

export const CandidatesScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedParty, setSelectedParty] = useState<string | null>(null);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handlePartyPress = (partyName: string) => {
    setSelectedParty(partyName);
  };

  const handleBackPress = () => {
    setSelectedParty(null);
    setSearchText(""); // Limpiar búsqueda al regresar
  };

  const handleCandidatePress = (candidate: Candidate) => {
    // Implementar navegación al detalle del candidato
    console.log("Candidato seleccionado:", candidate);
  };

  const handleMainCandidatePress = (candidate: MainCandidate) => {
    // Implementar navegación al detalle del candidato principal
    console.log("Candidato principal seleccionado:", candidate);
  };

  // Si hay un partido seleccionado, mostrar la vista de candidatos
  if (selectedParty) {
    const partyCandidates = candidatesByParty[selectedParty] || [];

    return (
      <SafeAreaView style={styles.container}>
        {/* Header con botón de regreso */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Acción Popular</Text>
          <View style={styles.placeholder} />
        </View>

        <CandidatesList
          candidates={partyCandidates}
          partyName={selectedParty}
          searchText={searchText}
          onSearchChange={handleSearch}
          onCandidatePress={handleCandidatePress}
        />
      </SafeAreaView>
    );
  }

  // Vista principal de partidos
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista De Candidatos</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="¿Estas buscando algún candidato?"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Primera fila - 5 partidos con fotos */}
        <PartyRows
          parties={firstRowParties}
          onPartyPress={handlePartyPress}
          rowType="five"
        />

        {/* Segunda fila - 3 partidos estilo home */}
        <PartyRows
          parties={secondRowParties}
          onPartyPress={handlePartyPress}
          rowType="three"
        />

        {/* Tercera fila - 5 partidos con fotos */}
        <PartyRows
          parties={thirdRowParties}
          onPartyPress={handlePartyPress}
          rowType="five"
        />

        {/* Cuarta fila - 3 partidos estilo home */}
        <PartyRows
          parties={fourthRowParties}
          onPartyPress={handlePartyPress}
          rowType="three"
        />

        {/* Main Candidates */}
        <MainCandidates
          candidates={mainCandidates}
          onCandidatePress={handleMainCandidatePress}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#e53e3e",
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  bottomSpacing: {
    height: 100,
  },
});
