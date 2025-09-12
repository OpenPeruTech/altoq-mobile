// components/MainCandidates.tsx
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainCandidate, getPartyColor } from "../data/parties";

interface MainCandidatesProps {
  candidates: MainCandidate[];
  onCandidatePress?: (candidate: MainCandidate) => void;
}

export const MainCandidates: React.FC<MainCandidatesProps> = ({
  candidates,
  onCandidatePress,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Principales Candidatos</Text>
      <View style={styles.candidatesRow}>
        {candidates.map((candidate, index) => (
          <TouchableOpacity
            key={candidate.id}
            style={styles.candidateCard}
            onPress={() => onCandidatePress?.(candidate)}
          >
            <AvatarPlaceholder
              name={candidate.name}
              size={60}
              backgroundColor={getPartyColor(index)}
            />
            <Text style={styles.candidateName}>{candidate.name}</Text>
            <Text style={styles.candidateParty}>{candidate.party}</Text>
            <Text style={styles.candidateDescription}>
              {candidate.description}
            </Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  candidatesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  candidateCard: {
    alignItems: "center",
    width: "30%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00000025",
  },
  candidateName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 4,
  },
  candidateParty: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    marginBottom: 2,
  },
  candidateDescription: {
    fontSize: 10,
    color: "#999",
    textAlign: "center",
  },
});
