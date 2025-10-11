import { COLLECTIONS } from "@/services/firebase/collections";
import { PopularCandidate } from "@/services/firebase/types";
import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

/**
 * Hook para obtener los candidatos populares (Home Screen)
 */
export function usePopularCandidates() {
  const { data, loading, error } = useFirestore<PopularCandidate>(
    COLLECTIONS.CANDIDATES
  );

  // Ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [data]);

  return { candidates: sortedData, loading, error };
}
