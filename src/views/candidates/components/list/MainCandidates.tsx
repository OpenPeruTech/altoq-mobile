// components/MainCandidates.tsx
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { CandidatesUIColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainCandidate, getPartyColor } from "../../data/parties";

interface MainCandidatesProps {
  candidates: MainCandidate[];
  onCandidatePress?: (candidate: MainCandidate) => void;
}

/**
 * Componente para mostrar tarjetas de candidatos principales
 *
 * Características responsive:
 * - Textos se ajustan automáticamente en una sola línea
 * - Avatar y contenido centrados verticalmente
 * - Altura aumentada para mejor visualización
 */
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
            <View style={styles.cardContent}>
              <AvatarPlaceholder
                name={candidate.name}
                size={50}
                backgroundColor={getPartyColor(index)}
              />
              <Text
                style={styles.candidateName}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.7}
              >
                {candidate.name}
              </Text>
              <Text
                style={styles.candidateParty}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.7}
              >
                {candidate.party}
              </Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: CandidatesUIColors.textPrimary,
    marginBottom: 16,
  },
  candidatesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  candidateCard: {
    width: "31%",
    backgroundColor: CandidatesUIColors.cardBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CandidatesUIColors.cardBorder,
    minHeight: 140,
    shadowColor: CandidatesUIColors.cardShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  candidateName: {
    fontSize: 13,
    fontWeight: "bold",
    color: CandidatesUIColors.textPrimary,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 4,
    width: "100%",
  },
  candidateParty: {
    fontSize: 11,
    color: CandidatesUIColors.textSecondary,
    textAlign: "center",
    width: "100%",
  },
});
