import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { CandidatesUIColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { getPartyColor, Party } from "../../data/parties";

interface FivePartyRowProps {
  parties: Party[];
  onPartyPress: (partyName: string) => void;
}

/**
 * Componente para mostrar una fila de 5 partidos políticos
 *
 * Características:
 * - Imagen/avatar cuadrado con border radius de 5px
 * - Texto en una sola línea que se ajusta responsivamente
 * - Diseño compacto y amigable
 */
export const FivePartyRow: React.FC<FivePartyRowProps> = ({
  parties,
  onPartyPress,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.partyRow}>
        {parties.map((party, index) => (
          <TouchableOpacity
            key={party.id}
            style={styles.partyCard}
            onPress={() => onPartyPress(party.name)}
          >
            <AvatarPlaceholder
              name={party.name}
              size={35}
              backgroundColor={getPartyColor(index)}
              style={styles.avatar}
            />
            <Text
              style={styles.partyText}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
            >
              {party.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  partyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  partyCard: {
    alignItems: "center",
    width: "18%",
    backgroundColor: CandidatesUIColors.cardBackground,
    borderRadius: 10,
    padding: 8,
    shadowColor: CandidatesUIColors.cardShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 70,
  },
  avatar: {
    borderRadius: 10,
    marginBottom: 5,
  },
  partyText: {
    fontSize: 10,
    color: CandidatesUIColors.textPrimary,
    textAlign: "center",
    fontWeight: "500",
    width: "100%",
  },
});
