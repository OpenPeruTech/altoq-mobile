export interface Party {
  id: string;
  name: string;
  type: "simple" | "icon";
  icon?: string;
  color?: string;
}

export interface Candidate {
  id: number;
  name: string;
  party: string;
}

export interface MainCandidate {
  id: number;
  name: string;
  party: string;
  description: string;
}

// Primera fila - 5 partidos
export const firstRowParties: Party[] = [
  { id: "1", name: "Partido 1", type: "simple" },
  { id: "2", name: "Partido 2", type: "simple" },
  { id: "3", name: "Partido 3", type: "simple" },
  { id: "4", name: "Partido 4", type: "simple" },
  { id: "5", name: "Partido 5", type: "simple" },
];

// Segunda fila - 3 partidos (estilo home)
export const secondRowParties: Party[] = [
  {
    id: "6",
    name: "Partido 6",
    type: "icon",
    icon: "people",
    color: "#45b7d1",
  },
  {
    id: "7",
    name: "Partido 7",
    type: "icon",
    icon: "people",
    color: "#4ecdc4",
  },
  {
    id: "8",
    name: "Partido 8",
    type: "icon",
    icon: "people",
    color: "#ff6b6b",
  },
];

// Tercera fila - 5 partidos
export const thirdRowParties: Party[] = [
  { id: "9", name: "Partido 1", type: "simple" },
  { id: "10", name: "Partido 2", type: "simple" },
  { id: "11", name: "Partido 3", type: "simple" },
  { id: "12", name: "Partido 4", type: "simple" },
  { id: "13", name: "Partido 5", type: "simple" },
];

// Cuarta fila - 3 partidos (estilo home)
export const fourthRowParties: Party[] = [
  {
    id: "14",
    name: "Partido 6",
    type: "icon",
    icon: "people",
    color: "#ffa726",
  },
  {
    id: "15",
    name: "Partido 7",
    type: "icon",
    icon: "people",
    color: "#6c5ce7",
  },
  {
    id: "16",
    name: "Partido 8",
    type: "icon",
    icon: "people",
    color: "#e91e63",
  },
];

// Candidatos principales
export const mainCandidates: MainCandidate[] = [
  {
    id: 1,
    name: "Postulante 1",
    party: "Partido Político",
    description: "Partido político 1",
  },
  {
    id: 2,
    name: "Postulante 2",
    party: "Partido Político",
    description: "Partido político 2",
  },
  {
    id: 3,
    name: "Postulante 3",
    party: "Partido Político",
    description: "Partido político 3",
  },
];

// Candidatos por partido
export const candidatesByParty: { [key: string]: Candidate[] } = {
  "Partido 1": [
    { id: 1, name: "Candidato 1", party: "Partido 1" },
    { id: 2, name: "Candidato 2", party: "Partido 1" },
    { id: 3, name: "Candidato 3", party: "Partido 1" },
    { id: 4, name: "Candidato 4", party: "Partido 1" },
    { id: 5, name: "Candidato 5", party: "Partido 1" },
    { id: 6, name: "Candidato 6", party: "Partido 1" },
    { id: 7, name: "Candidato 7", party: "Partido 1" },
    { id: 8, name: "Candidato 8", party: "Partido 1" },
  ],
  "Partido 2": [
    { id: 9, name: "Candidato 1", party: "Partido 2" },
    { id: 10, name: "Candidato 2", party: "Partido 2" },
    { id: 11, name: "Candidato 3", party: "Partido 2" },
  ],
};

// Colores para partidos
export const getPartyColor = (index: number): string => {
  const colors = ["#45b7d1", "#4ecdc4", "#ff6b6b", "#ffa726", "#6c5ce7"];
  return colors[index % colors.length];
};
