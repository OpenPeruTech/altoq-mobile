import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const CandidatesScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const parties = [
    "Partido 1",
    "Partido 2",
    "Partido 3",
    "Partido 4",
    "Partido 5",
    "Partido 6",
    "Partido 7",
    "Partido 8",
  ];

  const mainCandidates = [
    {
      id: 1,
      name: "Postulante 1",
      party: "Partido Político 1",
    },
    {
      id: 2,
      name: "Postulante 2",
      party: "Partido Político 2",
    },
    {
      id: 3,
      name: "Postulante 3",
      party: "Partido Político 3",
    },
  ];

  const handleSearch = (text: string) => {
    setSearchText(text);
    // Implementar lógica de búsqueda aquí
  };

  const getPartyColor = (index: number) => {
    const colors = ["#45b7d1", "#4ecdc4", "#ff6b6b", "#ffa726", "#6c5ce7"];
    return colors[index % colors.length];
  };

  return (
    <SafeAreaView style={candidateStyles.container}>
      {/* Header */}
      <View style={candidateStyles.header}>
        <Text style={candidateStyles.headerTitle}>Lista De Candidatos</Text>
      </View>

      <ScrollView
        style={candidateStyles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={candidateStyles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={candidateStyles.searchIcon}
          />
          <TextInput
            style={candidateStyles.searchInput}
            placeholder="¿Estas buscando algún candidato?"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Parties Grid */}
        <View style={candidateStyles.section}>
          <View style={candidateStyles.partiesGrid}>
            {parties.map((party, index) => (
              <TouchableOpacity key={index} style={candidateStyles.partyCard}>
                <Ionicons
                  name="people"
                  size={24}
                  color={getPartyColor(index)}
                />
                <Text style={candidateStyles.partyText}>{party}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Main Candidates */}
        <View style={candidateStyles.section}>
          <Text style={candidateStyles.sectionTitle}>
            Principales Candidatos
          </Text>

          <View style={candidateStyles.candidatesRow}>
            {mainCandidates.map((candidate, index) => (
              <TouchableOpacity
                key={candidate.id}
                style={candidateStyles.candidateCard}
              >
                <AvatarPlaceholder
                  name={candidate.name}
                  size={70}
                  backgroundColor={getPartyColor(index)}
                />
                <Text style={candidateStyles.candidateName}>
                  {candidate.name}
                </Text>
                <Text style={candidateStyles.candidateParty}>
                  {candidate.party}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={candidateStyles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const candidateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#e53e3e",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
  section: {
    padding: 20,
  },
  partiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  partyCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  partyText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  candidatesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  candidateCard: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  candidateName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 4,
    marginTop: 8,
  },
  candidateParty: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  bottomSpacing: {
    height: 100,
  },
});
