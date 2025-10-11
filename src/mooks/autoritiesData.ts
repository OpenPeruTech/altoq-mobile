import { AuthorityColors } from "@/constants/Colors";

/**
 * Datos de las autoridades políticas que se eligen en Perú
 * Los colores se obtienen del sistema centralizado AuthorityColors
 * para mantener consistencia en toda la aplicación
 */
export const autoritiesData = [
  {
    title: "Presidente",
    icon: "person",
    count: 1,
    colorKey: "president" as const,
    color: AuthorityColors.president,
  },
  {
    title: "Vicepresidentes",
    icon: "people",
    count: 2,
    colorKey: "vicePresident" as const,
    color: AuthorityColors.vicePresident,
  },
  {
    title: "Senadores",
    icon: "people-circle",
    count: 60,
    colorKey: "senator" as const,
    color: AuthorityColors.senator,
  },
  {
    title: "Diputados",
    icon: "people-outline",
    count: 130,
    colorKey: "deputy" as const,
    color: AuthorityColors.deputy,
  },
  {
    title: "Parlamentos Andinos",
    icon: "library",
    count: 5,
    colorKey: "andeanParliament" as const,
    color: AuthorityColors.andeanParliament,
  },
];

export type AuthorityData = (typeof autoritiesData)[number];
