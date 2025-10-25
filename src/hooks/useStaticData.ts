import { useEffect, useState } from "react";
import staticData from "../data/staticData.json";

export interface StaticData {
  authorities: any[];
  popularCandidates: any[];
  parties: any[];
  mainCandidates: any[];
  candidates: any[];
}

export function useStaticData() {
  const [data, setData] = useState<StaticData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simular carga asíncrona
      setTimeout(() => {
        setData(staticData as StaticData);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Error al cargar los datos");
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
