import { seedAuthorities } from "./authoritiesSeeder";
import { seedPopularCandidates } from "./candidatesSeeder";
import {
  seedMainCandidates,
  seedParties,
  seedPartyCandidates,
} from "./partiesSeeder";

/**
 * Ejecutar todos los seeders
 * IMPORTANTE: Solo ejecutar una vez o después de limpiar la base de datos
 */
export const runAllSeeders = async () => {
  console.log("🚀 Starting database seeding...");

  try {
    // 1. Seed authorities
    await seedAuthorities();

    // 2. Seed popular candidates (Home screen)
    await seedPopularCandidates();

    // 3. Seed parties y obtener IDs
    const partyIds = await seedParties();

    // 4. Seed party candidates (usando los IDs de parties)
    await seedPartyCandidates(partyIds);

    // 5. Seed main candidates (usando los IDs de parties)
    await seedMainCandidates(partyIds);

    console.log("All data seeded successfully!");
    return { success: true };
  } catch (error) {
    console.error("Error during seeding:", error);
    return { success: false, error };
  }
};

// Exportar seeders individuales por si se necesitan ejecutar por separado
export { seedAuthorities } from "./authoritiesSeeder";
export { seedPopularCandidates } from "./candidatesSeeder";
export {
  seedMainCandidates,
  seedParties,
  seedPartyCandidates,
} from "./partiesSeeder";
