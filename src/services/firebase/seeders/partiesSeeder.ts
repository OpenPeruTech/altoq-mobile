import { COLLECTIONS } from "../collections";
import { db } from "../config";
import { createFirestoreService } from "../firestoreService";
import { Candidate, MainCandidate, Party } from "../types";

/**
 * Seeder para partidos políticos
 */
export const seedParties = async () => {
  console.log("🌱 Seeding parties...");
  const service = createFirestoreService<Party>(db, COLLECTIONS.PARTIES);

  const parties: Omit<Party, "id" | "createdAt" | "updatedAt">[] = [
    // Primera fila - 5 partidos simples
    { name: "Partido 1", type: "simple", row: 1, position: 1 },
    { name: "Partido 2", type: "simple", row: 1, position: 2 },
    { name: "Partido 3", type: "simple", row: 1, position: 3 },
    { name: "Partido 4", type: "simple", row: 1, position: 4 },
    { name: "Partido 5", type: "simple", row: 1, position: 5 },

    // Segunda fila - 3 partidos con iconos
    {
      name: "Partido 6",
      type: "icon",
      icon: "people",
      color: "#45b7d1",
      row: 2,
      position: 1,
    },
    {
      name: "Partido 7",
      type: "icon",
      icon: "people",
      color: "#4ecdc4",
      row: 2,
      position: 2,
    },
    {
      name: "Partido 8",
      type: "icon",
      icon: "people",
      color: "#ff6b6b",
      row: 2,
      position: 3,
    },

    // Tercera fila - 5 partidos simples
    { name: "Partido 9", type: "simple", row: 3, position: 1 },
    { name: "Partido 10", type: "simple", row: 3, position: 2 },
    { name: "Partido 11", type: "simple", row: 3, position: 3 },
    { name: "Partido 12", type: "simple", row: 3, position: 4 },
    { name: "Partido 13", type: "simple", row: 3, position: 5 },

    // Cuarta fila - 3 partidos con iconos
    {
      name: "Partido 14",
      type: "icon",
      icon: "people",
      color: "#ffa726",
      row: 4,
      position: 1,
    },
    {
      name: "Partido 15",
      type: "icon",
      icon: "people",
      color: "#6c5ce7",
      row: 4,
      position: 2,
    },
    {
      name: "Partido 16",
      type: "icon",
      icon: "people",
      color: "#e91e63",
      row: 4,
      position: 3,
    },
  ];

  try {
    const partyIds: { [name: string]: string } = {};

    for (const party of parties) {
      const id = await service.create(party);
      partyIds[party.name] = id;
    }

    console.log("Parties seeded successfully!");
    return partyIds; // Retornar IDs para usarlos en candidatos
  } catch (error) {
    console.error("Error seeding parties:", error);
    throw error;
  }
};

/**
 * Seeder para candidatos por partido
 */
export const seedPartyCandidates = async (partyIds: {
  [name: string]: string;
}) => {
  console.log("🌱 Seeding party candidates...");
  const service = createFirestoreService<Candidate>(
    db,
    "party-candidates" // Colección separada para candidatos por partido
  );

  const candidates: Omit<Candidate, "id" | "createdAt" | "updatedAt">[] = [];

  // Partido 1 - 8 candidatos
  for (let i = 1; i <= 8; i++) {
    candidates.push({
      name: `Candidato ${i}`,
      party: "Partido 1",
      partyId: partyIds["Partido 1"],
      position: i <= 4 ? "Senador" : "Diputado",
      bio: `Biografía del candidato ${i}`,
    });
  }

  // Partido 2 - 3 candidatos
  for (let i = 1; i <= 3; i++) {
    candidates.push({
      name: `Candidato ${i}`,
      party: "Partido 2",
      partyId: partyIds["Partido 2"],
      position: "Senador",
      bio: `Biografía del candidato ${i}`,
    });
  }

  try {
    for (const candidate of candidates) {
      await service.create(candidate);
    }
    console.log("Party candidates seeded successfully!");
  } catch (error) {
    console.error("Error seeding party candidates:", error);
    throw error;
  }
};

/**
 * Seeder para candidatos principales destacados
 */
export const seedMainCandidates = async (partyIds: {
  [name: string]: string;
}) => {
  console.log("🌱 Seeding main candidates...");
  const service = createFirestoreService<MainCandidate>(
    db,
    COLLECTIONS.MAIN_CANDIDATES
  );

  const mainCandidates: Omit<
    MainCandidate,
    "id" | "createdAt" | "updatedAt"
  >[] = [
    {
      name: "Postulante 1",
      party: "Partido Político",
      partyId: partyIds["Partido 1"] || "",
      description: "Partido político 1",
      order: 1,
    },
    {
      name: "Postulante 2",
      party: "Partido Político",
      partyId: partyIds["Partido 2"] || "",
      description: "Partido político 2",
      order: 2,
    },
    {
      name: "Postulante 3",
      party: "Partido Político",
      partyId: partyIds["Partido 3"] || "",
      description: "Partido político 3",
      order: 3,
    },
  ];

  try {
    for (const candidate of mainCandidates) {
      await service.create(candidate);
    }
    console.log("Main candidates seeded successfully!");
  } catch (error) {
    console.error("Error seeding main candidates:", error);
    throw error;
  }
};
