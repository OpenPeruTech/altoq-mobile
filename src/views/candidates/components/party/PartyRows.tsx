// components/PartyRows.tsx
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Party, getPartyColor } from "../../data/parties";

interface PartyRowsProps {
  parties: Party[];
  onPartyPress: (partyName: string) => void;
  rowType: "five" | "three";
}

export const PartyRows: React.FC<PartyRowsProps> = ({
  parties,
  onPartyPress,
  rowType,
}) => {
  if (rowType === "five") {
    return (
      <View style={styles.section}>
        <View style={styles.fivePartyRow}>
          {parties.map((party, index) => (
            <TouchableOpacity
              key={party.id}
              style={styles.smallPartyCard}
              onPress={() => onPartyPress(party.name)}
            >
              <AvatarPlaceholder
                name={party.name}
                size={50}
                backgroundColor={getPartyColor(index)}
              />
              <Text style={styles.smallPartyText}>{party.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  // rowType === "three"
  return (
    <View style={styles.section}>
      <View style={styles.threePartyRow}>
        {parties.map((party, index) => (
          <TouchableOpacity
            key={party.id}
            style={styles.homeStyleCard}
            onPress={() => onPartyPress(party.name)}
          >
            <Ionicons name={party.icon as any} size={22} color={party.color} />
            <View style={styles.textContainer}>
              <Text style={styles.homeStyleTitle}>{party.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  // Estilo para filas de 5 partidos
  fivePartyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallPartyCard: {
    alignItems: "center",
    width: "18%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  smallPartyText: {
    fontSize: 10,
    color: "#333",
    textAlign: "center",
    marginTop: 6,
    fontWeight: "500",
  },
  // Estilo para filas de 3 partidos (estilo home)
  threePartyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeStyleCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 8,
  },
  homeStyleTitle: {
    fontSize: 11,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
});
