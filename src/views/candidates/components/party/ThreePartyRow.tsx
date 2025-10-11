import { AuthorityCard } from "@/components/AuthorityCard";
import React from "react";
import { StyleSheet, View } from "react-native";

import { Party } from "../../data/parties";

interface ThreePartyRowProps {
  parties: Party[];
  onPartyPress: (partyName: string) => void;
}

/**
 * Componente para mostrar una fila de 3 partidos políticos
 * Reutiliza el componente AuthorityCard para mantener consistencia en el diseño
 *
 * Nota: Los partidos de 3 filas tienen un diseño similar a las tarjetas de autoridades,
 * por lo que reutilizamos ese componente para evitar duplicación de código.
 */
export const ThreePartyRow: React.FC<ThreePartyRowProps> = ({
  parties,
  onPartyPress,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.partyRow}>
        {parties.map((party) => (
          <View key={party.id} style={styles.cardWrapper}>
            <AuthorityCard
              title={party.name}
              icon={party.icon || "people"}
              count={0} // No mostramos número para partidos
              color={party.color || "#999"}
              width="w-full"
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  partyRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  cardWrapper: {
    width: "31%",
  },
});
