import { AuthorityColors } from "@/constants/Colors";
import { COLLECTIONS } from "../collections";
import { db } from "../config";
import { createFirestoreService } from "../firestoreService";
import { Authority } from "../types";

/**
 * Seeder para las autoridades políticas
 */
export const seedAuthorities = async () => {
  console.log("🌱 Seeding authorities...");
  const service = createFirestoreService<Authority>(
    db,
    COLLECTIONS.AUTHORITIES
  );

  const authorities: Omit<Authority, "id" | "createdAt" | "updatedAt">[] = [
    {
      title: "Presidente",
      icon: "person",
      count: 1,
      colorKey: "president",
      color: AuthorityColors.president,
      order: 1,
    },
    {
      title: "Vicepresidentes",
      icon: "people",
      count: 2,
      colorKey: "vicePresident",
      color: AuthorityColors.vicePresident,
      order: 2,
    },
    {
      title: "Senadores",
      icon: "people-circle",
      count: 60,
      colorKey: "senator",
      color: AuthorityColors.senator,
      order: 3,
    },
    {
      title: "Diputados",
      icon: "people-outline",
      count: 130,
      colorKey: "deputy",
      color: AuthorityColors.deputy,
      order: 4,
    },
    {
      title: "Parlamentos Andinos",
      icon: "library",
      count: 5,
      colorKey: "andeanParliament",
      color: AuthorityColors.andeanParliament,
      order: 5,
    },
  ];

  try {
    for (const authority of authorities) {
      await service.create(authority);
    }
    console.log("✅ Authorities seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding authorities:", error);
    throw error;
  }
};
