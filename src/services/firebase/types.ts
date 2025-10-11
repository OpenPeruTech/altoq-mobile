import { Timestamp } from "firebase/firestore";

/**
 * Tipos base para documentos de Firestore
 */
export interface FirestoreDocument {
  id?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

/**
 * Autoridades políticas
 */
export interface Authority extends FirestoreDocument {
  title: string;
  icon: string;
  count: number;
  colorKey:
    | "president"
    | "vicePresident"
    | "senator"
    | "deputy"
    | "andeanParliament";
  color: string;
  order: number; // Para mantener el orden de visualización
}

/**
 * Candidatos populares (para la pantalla Home)
 */
export interface PopularCandidate extends FirestoreDocument {
  name: string;
  party: string;
  percentage: number;
  details: string;
  color: string;
  order: number; // Para mantener el orden en el carrusel
}

/**
 * Partidos políticos
 */
export interface Party extends FirestoreDocument {
  name: string;
  type: "simple" | "icon";
  icon?: string;
  color?: string;
  row: number; // Fila en la que aparece (1, 2, 3, 4)
  position: number; // Posición dentro de la fila
}

/**
 * Candidatos por partido
 */
export interface Candidate extends FirestoreDocument {
  name: string;
  party: string;
  partyId: string;
  position?: string;
  bio?: string;
  proposals?: string[];
  timeline?: TimelineEvent[];
}

/**
 * Candidatos principales destacados
 */
export interface MainCandidate extends FirestoreDocument {
  name: string;
  party: string;
  partyId: string;
  description: string;
  image?: string;
  order: number;
}

/**
 * Eventos de timeline para candidatos
 */
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

/**
 * Noticias
 */
export interface News extends FirestoreDocument {
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl?: string;
  publishedAt: Timestamp;
  author?: string;
}

/**
 * Resultados electorales
 */
export interface Result extends FirestoreDocument {
  candidateName: string;
  candidateId: string;
  party: string;
  votes: number;
  percentage: number;
  region?: string;
  lastUpdated: Timestamp;
}
