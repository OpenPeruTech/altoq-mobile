/**
 * Tipos y utilidades para candidatos y partidos
 *
 * Los tipos ahora provienen de Firebase como fuente de verdad única.
 * Los datos se obtienen dinámicamente de Firestore usando los hooks correspondientes.
 *
 * @deprecated Los datos mockeados han sido movidos a Firebase
 * Usar los hooks: useParties(), usePartyCandidates(), useMainCandidates()
 */

// Importar tipos de Firebase (source of truth)
import type {
  Candidate,
  MainCandidate,
  Party,
} from "@/services/firebase/types";

// Re-exportar para mantener compatibilidad
export type { Candidate, MainCandidate, Party };

// Función de utilidad para colores de partidos
export const getPartyColor = (index: number): string => {
  const colors = ["#45b7d1", "#4ecdc4", "#ff6b6b", "#ffa726", "#6c5ce7"];
  return colors[index % colors.length];
};
