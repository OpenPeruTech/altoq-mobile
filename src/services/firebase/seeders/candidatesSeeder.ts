import { COLLECTIONS } from "../collections";
import { db } from "../config";
import { createFirestoreService } from "../firestoreService";
import { PopularCandidate } from "../types";

/**
 * Seeder para los candidatos populares (Home Screen)
 */
export const seedPopularCandidates = async () => {
  console.log("🌱 Seeding popular candidates...");
  const service = createFirestoreService<PopularCandidate>(
    db,
    COLLECTIONS.CANDIDATES
  );

  const candidates: Omit<PopularCandidate, "id" | "createdAt" | "updatedAt">[] =
    [
      {
        name: "Keiko Fujimori",
        party: "Fuerza Popular",
        percentage: 20,
        details: "Líder de Fuerza Popular",
        color: "#0033a0",
        order: 1,
      },
      {
        name: "Rafael López Aliaga",
        party: "Renovación Popular",
        percentage: 15,
        details: "Alcalde de Lima",
        color: "#ffcc00",
        order: 2,
      },
      {
        name: "Verónika Mendoza",
        party: "Nuevo Perú",
        percentage: 12,
        details: "Ex candidata presidencial",
        color: "#d32f2f",
        order: 3,
      },
    ];

  try {
    for (const candidate of candidates) {
      await service.create(candidate);
    }
    console.log("✅ Popular candidates seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding popular candidates:", error);
    throw error;
  }
};
