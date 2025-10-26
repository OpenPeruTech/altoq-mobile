import { useMemo } from "react";
import { useStaticData } from "./useStaticData";

/**
 * Hook para obtener las autoridades políticas
 */
export function useAuthorities() {
  const { data, loading, error } = useStaticData();

  // Ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    if (!data?.authorities) return [];
    return [...data.authorities].sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );
  }, [data?.authorities]);

  return { authorities: sortedData, loading, error };
}
