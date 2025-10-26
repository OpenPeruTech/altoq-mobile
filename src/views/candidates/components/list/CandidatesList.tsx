import { FilterOption, useStaticData } from "@/hooks/useStaticData";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  const { data } = useStaticData();
  const [selectedFilter, setSelectedFilter] = useState("Lima");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const counterBackgroundColor = useThemeColor("counterBackground");
  const borderColor = useThemeColor("border");
  const primaryColor = useThemeColor("primary");

  const filterOptions: FilterOption[] = data?.filterOptions || [];

  const handleFilterSelect = (filterName: string) => {
    setSelectedFilter(filterName);
    setIsDropdownOpen(false);
  };

  // Estilos estáticos
  const staticStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
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
    },
    filtersContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingHorizontal: 30,
      marginBottom: 8,
    },
    filterSelect: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 10,
      borderWidth: 1,
      minWidth: 120,
    },
    filterText: {
      fontSize: 14,
      marginRight: 8,
      flex: 1,
    },
    dropdownContainer: {
      position: "relative",
      zIndex: 1000,
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      right: 0,
      borderRadius: 10,
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
      minWidth: 150,
      marginTop: 4,
    },
    dropdownItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
    },
    dropdownText: {
      fontSize: 14,
      flex: 1,
    },
    selectedDropdownText: {
      fontWeight: "600",
    },
    candidatesListContainer: {
      paddingHorizontal: 30,
      marginTop: 8,
    },
    candidateListItem: {
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
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
      fontWeight: "500",
      textAlignVertical: "center",
      flexShrink: 1,
      marginLeft: 12,
    },
    verMasText: {
      fontSize: 13,
      textAlignVertical: "center",
      paddingRight: 20,
    },
    bottomSpacing: {
      height: 60,
    },
  });

  // Estilos dinámicos
  const dynamicStyles = {
    searchContainer: [
      staticStyles.searchContainer,
      { backgroundColor: counterBackgroundColor },
    ],
    searchInput: [staticStyles.searchInput, { color: textColor }],
    filterSelect: [
      staticStyles.filterSelect,
      { backgroundColor: counterBackgroundColor, borderColor: borderColor },
    ],
    filterText: [staticStyles.filterText, { color: textColor }],
    dropdown: [
      staticStyles.dropdown,
      { backgroundColor: counterBackgroundColor, borderColor: borderColor },
    ],
    dropdownItem: [
      staticStyles.dropdownItem,
      { borderBottomColor: borderColor },
    ],
    selectedDropdownItem: [
      staticStyles.dropdownItem,
      { backgroundColor: borderColor },
    ],
    dropdownText: [staticStyles.dropdownText, { color: textColor }],
    selectedDropdownText: [
      staticStyles.selectedDropdownText,
      { color: primaryColor },
    ],
    candidateListItem: [
      staticStyles.candidateListItem,
      { backgroundColor: counterBackgroundColor, borderColor: borderColor },
    ],
    candidateListName: [staticStyles.candidateListName, { color: textColor }],
    verMasText: [staticStyles.verMasText, { color: primaryColor }],
  };

  return (
    <ScrollView
      style={staticStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar
        onChangeText={onSearchChange}
        value={searchText}
        placeholder="¿Estas buscando algun candidato?"
      />
      {/* Filtros */}
      <View style={staticStyles.filtersContainer}>
        <View style={staticStyles.dropdownContainer}>
          <TouchableOpacity
            style={dynamicStyles.filterSelect}
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Text style={dynamicStyles.filterText}>{selectedFilter}</Text>
            <Ionicons
              name={isDropdownOpen ? "chevron-up" : "chevron-down"}
              size={16}
              color={textSecondaryColor}
            />
          </TouchableOpacity>

          {isDropdownOpen && (
            <View style={dynamicStyles.dropdown}>
              {filterOptions.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  style={
                    selectedFilter === filter.name
                      ? dynamicStyles.selectedDropdownItem
                      : dynamicStyles.dropdownItem
                  }
                  onPress={() => handleFilterSelect(filter.name)}
                >
                  <Text
                    style={
                      selectedFilter === filter.name
                        ? dynamicStyles.selectedDropdownText
                        : dynamicStyles.dropdownText
                    }
                  >
                    {filter.name}
                  </Text>
                  {selectedFilter === filter.name && (
                    <Ionicons name="checkmark" size={16} color="#5FD0CF" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Lista de candidatos */}
      <View style={staticStyles.candidatesListContainer}>
        {candidates.map((candidate, index) => (
          <TouchableOpacity
            key={candidate.id}
            style={dynamicStyles.candidateListItem}
            onPress={() => onCandidatePress?.(candidate)}
          >
            <View style={staticStyles.candidateInfo}>
              <Ionicons
                name="people"
                size={24}
                color={getPartyColor(index)}
                style={staticStyles.candidateIcon}
              />
              <Text
                style={dynamicStyles.candidateListName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {candidate.name}
              </Text>
            </View>
            <Text style={dynamicStyles.verMasText}>Ver Más</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={staticStyles.bottomSpacing} />
    </ScrollView>
  );
};
