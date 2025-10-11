import { COLLECTIONS } from "@/services/firebase/collections";
import { Candidate, MainCandidate, Party } from "@/services/firebase/types";
import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

/**
 * Hook para obtener todos los partidos políticos
 */
export function useParties() {
  const { data, loading, error } = useFirestore<Party>(COLLECTIONS.PARTIES);

  // Agrupar partidos por filas
  const partiesByRow = useMemo(() => {
    const grouped: { [row: number]: Party[] } = {};

    data.forEach((party) => {
      if (!grouped[party.row]) {
        grouped[party.row] = [];
      }
      grouped[party.row].push(party);
    });

    // Ordenar por posición dentro de cada fila
    Object.keys(grouped).forEach((row) => {
      grouped[parseInt(row)].sort(
        (a, b) => (a.position || 0) - (b.position || 0)
      );
    });

    return grouped;
  }, [data]);

  // Extraer filas individuales para facilitar el acceso
  const firstRowParties = partiesByRow[1] || [];
  const secondRowParties = partiesByRow[2] || [];
  const thirdRowParties = partiesByRow[3] || [];
  const fourthRowParties = partiesByRow[4] || [];

  return {
    allParties: data,
    partiesByRow,
    firstRowParties,
    secondRowParties,
    thirdRowParties,
    fourthRowParties,
    loading,
    error,
  };
}

/**
 * Hook para obtener candidatos por partido
 */
export function usePartyCandidates(partyName: string | null) {
  const { data, loading, error } = useFirestore<Candidate>("party-candidates");

  const filteredCandidates = useMemo(() => {
    if (!partyName) return [];
    return data.filter((candidate) => candidate.party === partyName);
  }, [data, partyName]);

  return { candidates: filteredCandidates, loading, error };
}

/**
 * Hook para obtener candidatos principales destacados
 */
export function useMainCandidates() {
  const { data, loading, error } = useFirestore<MainCandidate>(
    COLLECTIONS.MAIN_CANDIDATES
  );

  // Ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [data]);

  return { mainCandidates: sortedData, loading, error };
}
