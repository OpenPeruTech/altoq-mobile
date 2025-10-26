import { useMemo } from "react";
import { useStaticData } from "./useStaticData";

/**
 * Hook para obtener todos los partidos políticos
 */
export function useParties() {
  const { data, loading, error } = useStaticData();

  // Agrupar partidos por filas
  const partiesByRow = useMemo(() => {
    if (!data?.parties) return {};

    const grouped: { [row: number]: any[] } = {};

    data.parties.forEach((party) => {
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
  }, [data?.parties]);

  // Extraer filas individuales para facilitar el acceso
  const firstRowParties = partiesByRow[1] || [];
  const secondRowParties = partiesByRow[2] || [];
  const thirdRowParties = partiesByRow[3] || [];
  const fourthRowParties = partiesByRow[4] || [];

  return {
    allParties: data?.parties || [],
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
  const { data, loading, error } = useStaticData();

  const filteredCandidates = useMemo(() => {
    console.log("usePartyCandidates - partyName:", partyName);
    console.log(
      "usePartyCandidates - data?.candidates:",
      data?.candidates?.length
    );

    if (!partyName || !data?.candidates) {
      console.log("usePartyCandidates - No partyName or candidates data");
      return [];
    }

    const filtered = data.candidates.filter(
      (candidate) => candidate.party === partyName
    );
    console.log("usePartyCandidates - filtered candidates:", filtered.length);
    console.log(
      "usePartyCandidates - all parties in data:",
      data.candidates.map((c) => c.party)
    );

    return filtered;
  }, [data?.candidates, partyName]);

  return { candidates: filteredCandidates, loading, error };
}

/**
 * Hook para obtener candidatos principales destacados
 */
export function useMainCandidates() {
  const { data, loading, error } = useStaticData();

  // Ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    if (!data?.mainCandidates) return [];
    return [...data.mainCandidates].sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );
  }, [data?.mainCandidates]);

  return { mainCandidates: sortedData, loading, error };
}
