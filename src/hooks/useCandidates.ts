import { useMemo } from "react";
import { useStaticData } from "./useStaticData";

/**
 * Hook para obtener los candidatos populares (Home Screen)
 */
export function usePopularCandidates() {
  const { data, loading, error } = useStaticData();

  // Obtener candidatos populares y ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    if (!data?.popularCandidates) return [];
    return [...data.popularCandidates].sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );
  }, [data?.popularCandidates]);

  return { candidates: sortedData, loading, error };
}
