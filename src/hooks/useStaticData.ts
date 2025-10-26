import { useEffect, useState } from "react";
import staticData from "../data/staticData.json";

export interface FilterOption {
  id: string;
  name: string;
  type: string;
}

export interface ElectionInfo {
  infoCards: Array<{
    title: string;
    description: string;
  }>;
  electionEvents: Array<{
    title: string;
    date: string;
    color: string;
    icon: string;
    titleIcon: string;
  }>;
  electionDates: {
    today: string;
    primeraVuelta: string;
    segundaVuelta: string;
    name: string;
  };
}

export interface CandidateAnalysis {
  positiveAspects: string[];
  considerations: string[];
}

export interface StaticData {
  filterOptions: FilterOption[];
  authorities: any[];
  popularCandidates: any[];
  parties: any[];
  mainCandidates: any[];
  candidates: any[];
  electionInfo: ElectionInfo;
  candidateAnalysis: CandidateAnalysis;
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
