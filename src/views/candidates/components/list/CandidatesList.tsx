import { CandidatesUIColors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Candidate, getPartyColor } from "../../data/parties";
import { SearchBar } from "../shared";

interface CandidatesListProps {
  candidates: Candidate[];
  partyName: string;
  searchText: string;
  onSearchChange: (text: string) => void;
  onCandidatePress?: (candidate: Candidate) => void;
}

export const CandidatesList: React.FC<CandidatesListProps> = ({
  candidates,
  partyName,
  searchText,
  onSearchChange,
  onCandidatePress,
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <SearchBar onChangeText={onSearchChange} value={searchText} placeholder="¿Estas buscando algun candidato?" />
      {/* Filtros */}
      <View style={styles.filtersContainer}>
   
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Lima</Text>
          <Ionicons name="chevron-down" size={16} color={CandidatesUIColors.textTertiary} />
        </TouchableOpacity>
      </View>

      {/* Lista de candidatos */}
      <View style={styles.candidatesListContainer}>
        {candidates.map((candidate, index) => (
          <TouchableOpacity
            key={candidate.id}
            style={styles.candidateListItem}
            onPress={() => onCandidatePress?.(candidate)}
          >
            <View style={styles.candidateInfo}>
              <Ionicons
                name="people"
                size={24}
                color={getPartyColor(index)}
                style={styles.candidateIcon}
              />
              <Text
                style={styles.candidateListName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {candidate.name}
              </Text>
            </View>
            <Text style={styles.verMasText}>Ver Más</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
    gap: 8,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  filterText: {
    fontSize: 14,
    color: CandidatesUIColors.textTertiary,
    marginRight: 4,
  },
  candidatesListContainer: {
    paddingHorizontal: 30,
    marginTop: 8,
  },
  candidateListItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding:14,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  candidateInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  candidateIcon: {
    marginRight: 8,
  },
  candidateListName: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
    textAlignVertical: "center",
    flexShrink: 1,
    marginLeft: 12,
  },
  verMasText: {
    fontSize: 13,
    color: "#666",
    textAlignVertical: "center",
    paddingRight: 20,
  },
  bottomSpacing: {
    height: 60,
  },
});
