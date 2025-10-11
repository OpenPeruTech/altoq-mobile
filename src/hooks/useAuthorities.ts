import { COLLECTIONS } from "@/services/firebase/collections";
import { Authority } from "@/services/firebase/types";
import { useMemo } from "react";
import { useFirestore } from "./useFirestore";

/**
 * Hook para obtener las autoridades políticas
 */
export function useAuthorities() {
  const { data, loading, error } = useFirestore<Authority>(
    COLLECTIONS.AUTHORITIES
  );

  // Ordenar por el campo 'order'
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [data]);

  return { authorities: sortedData, loading, error };
}
