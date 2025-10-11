/**
 * Nombres de las colecciones de Firestore
 * Centralizado para evitar errores de tipeo
 */
export const COLLECTIONS = {
  AUTHORITIES: "authorities",
  CANDIDATES: "candidates",
  PARTIES: "parties",
  MAIN_CANDIDATES: "main-candidates",
  NEWS: "news",
  RESULTS: "results",
} as const;

export type CollectionName = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];
