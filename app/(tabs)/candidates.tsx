import { CandidatesList } from "@/views/candidates/components/CandidatesList";
import { MainCandidates } from "@/views/candidates/components/MainCandidates";
import { PartyRows } from "@/views/candidates/components/PartyRows";
import {
  Candidate,
  candidatesByParty,
  firstRowParties,
  fourthRowParties,
  MainCandidate,
  mainCandidates,
  secondRowParties,
  thirdRowParties,
} from "@/views/candidates/data/parties";
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

export default function CandidatesScreen() {
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
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        {/* Header con botón de regreso */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{selectedParty}</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
   backgroundColor: "#f50a0aff",
    flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 15,
  paddingHorizontal: 20,
  alignSelf: "center", // centra el rectángulo horizontalmente
  width: "90%", // ocupa 90% del ancho
  marginTop: 10,
  borderRadius: 10, // hace que quede con bordes redondeados tipo píldora
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
  scrollContent: {
    alignItems: "center", // Centra horizontalmente buscador + partidos
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",          // Ocupa 90% del ancho
    maxWidth: 400,         // Máximo ancho (opcional)
    alignSelf: "center",   // Lo centra en el scroll
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
