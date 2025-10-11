import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CandidateProps {
  name: string;
  party: string;
  percentage: number;
  details: string;
  color: string;
}

export const CandidateCard: React.FC<CandidateProps> = ({
  name,
  party,
  percentage,
  details,
  color,
}) => {
  return (
    <View style={styles.candidateCard}>
      <View style={styles.leftContainer}>
        <AvatarPlaceholder name={name} size={50} backgroundColor={color} />
        <Text style={styles.candidateName}>{name}</Text>
        <Text style={styles.candidateParty}>{party}</Text>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Ionicons name="trending-up" size={16} color="#4CAF50" />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.rightContainer}>
        <Text style={styles.candidateDetails}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  candidateCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftContainer: { width: 100, alignItems: "center" },
  rightContainer: { flex: 1, marginLeft: 12 },
  candidateName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  candidateParty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginRight: 4,
  },
  candidateDetails: { fontSize: 12, color: "#999", lineHeight: 16 },
  divider: {
    width: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 12,
    alignSelf: "stretch",
  },
});
