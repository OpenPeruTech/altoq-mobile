import { CandidateDetailView } from "@/views/candidates/components/detail";
import {
  PartiesMainView,
  PartyListView,
} from "@/views/candidates/components/views";
import { Candidate, MainCandidate } from "@/views/candidates/data/parties";
import React, { useState } from "react";

/**
 * Vista principal de Candidatos
 *
 * Gestiona tres vistas diferentes:
 * 1. Vista principal de partidos políticos (PartiesMainView)
 * 2. Vista de lista de candidatos por partido (PartyListView)
 * 3. Vista de detalle de un candidato específico (CandidateDetailView)
 *
 * La navegación entre vistas se maneja mediante estados locales.
 */
export default function CandidatesView() {
  // Estados para navegación entre vistas
  const [searchText, setSearchText] = useState("");
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );

  // Handlers para navegación
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handlePartyPress = (partyName: string) => {
    setSelectedParty(partyName);
  };

  const handleBackPress = () => {
    setSelectedParty(null);
    setSearchText(""); // Limpiar búsqueda al regresar
  };

  const handleCandidatePress = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    console.log("Candidato seleccionado:", candidate);
  };

  const handleMainCandidatePress = (candidate: MainCandidate) => {
    console.log("Candidato principal seleccionado:", candidate);
  };

  const handleCandidateDetailBack = () => {
    setSelectedCandidate(null);
  };

  // Vista de detalle del candidato
  if (selectedCandidate) {
    return (
      <CandidateDetailView
        candidate={selectedCandidate}
        onBackPress={handleCandidateDetailBack}
      />
    );
  }

  // Vista de lista de candidatos por partido
  if (selectedParty) {
    return (
      <PartyListView
        selectedParty={selectedParty}
        searchText={searchText}
        onSearchChange={handleSearch}
        onBackPress={handleBackPress}
        onCandidatePress={handleCandidatePress}
      />
    );
  }

  // Vista principal de partidos
  return (
    <PartiesMainView
      searchText={searchText}
      onSearchChange={handleSearch}
      onPartyPress={handlePartyPress}
      onMainCandidatePress={handleMainCandidatePress}
    />
  );
}
