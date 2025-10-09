import { CandidatesList } from "@/views/candidates/components/CandidatesList";
import { MainCandidates } from "@/views/candidates/components/MainCandidates";
import { PartyRows } from "@/views/candidates/components/PartyRows";
import {
  Candidate,
  candidatesByParty,
  firstRowParties,
  fourthRowParties,
  MainCandidate,
  mainCandidates,
  secondRowParties,
  thirdRowParties,
} from "@/views/candidates/data/parties";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





export default function CandidatesScreen() {
  const [searchText, setSearchText] = useState("");
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [activeTab, setActiveTab] = useState<"trayectoria" | "plan" | "propuestas">("trayectoria");
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
    // Implementar navegación al detalle del candidato
    setSelectedCandidate(candidate);

    console.log("Candidato seleccionado:", candidate);
  };

  const handleMainCandidatePress = (candidate: MainCandidate) => {
    // Implementar navegación al detalle del candidato principal
    console.log("Candidato principal seleccionado:", candidate);
  };
  // Si hay un candidato seleccionado, mostrar su detalle
  if (selectedCandidate) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* Imagen de fondo con botón de regreso */}
          <View className="relative">
            <TouchableOpacity
              onPress={() => setSelectedCandidate(null)}
              className="absolute top-3 left-3 bg-black/40 p-2 rounded-full z-10"
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Imagen de fondo */}
            <View className="h-60 bg-slate-800 justify-end items-center">
              <View className="absolute -bottom-10">
                <View className="w-40 h-40 rounded-full bg-red-600 justify-center items-center border-4 border-white">
                  <Ionicons name="person" size={60} color="#fff" />
                </View>
              </View>
            </View>
          </View>

          {/* Información del candidato */}
          <View className="items-center mt-14 px-5">
            <Text className="text-lg font-bold text-gray-900">{selectedCandidate.name}</Text>
            <Text className="text-sm text-gray-500 font-bold">
              @{selectedCandidate.name.toLowerCase().replace(/\s+/g, "")}
            </Text>

            <View className="flex-row bg-red-200 px-3 py-1 rounded-full mt-2 items-center">
              <Text className="text-red-600 font-semibold">Presidente</Text>
            </View>

            {/* Tabs */}
            <View className="flex-row justify-center border-b-2 border-gray-100 mt-6 mb-4">
              {[
                { key: "trayectoria", label: "Trayectoria Política" },
                { key: "plan", label: "Plan de Gobierno" },
                { key: "propuestas", label: "Propuestas" },
              ].map((tab) => (
                <TouchableOpacity
                  key={tab.key}
                  onPress={() => setActiveTab(tab.key as any)}
                  className={`px-3 py-2 mx-2 ${activeTab === tab.key ? "border-b-2 border-red-600" : ""
                    }`}
                >
                  <Text
                    className={`font-semibold ${activeTab === tab.key ? "text-red-600" : "text-gray-600"
                      }`}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Vistas dinámicas */}
            {activeTab === "trayectoria" && (
              <>
                <View className="items-center px-20">
                  <Text className="font-bold text-xl">Línea del Tiempo</Text>
                </View>

                <View className="justify-center items-center p-4 border border-gray-300 rounded-lg m-4 w-11/12">
                  {/* Lista de eventos */}
                  <View >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <View key={item} className="flex-row items-center mb-2">
                        <Text className="text-gray-700">{item}. Lorem ipsum</Text>
                      </View>
                    ))}
                  </View>

                  {/* Navegación */}
                  <View className="flex-row justify-between w-20 mt-4">
                    <TouchableOpacity>
                      <Ionicons name="chevron-back" size={24} color="#999" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons name="chevron-forward" size={24} color="#999" />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}

            {activeTab === "plan" && (
              <Text className="p-5 text-gray-700">Aquí va el contenido del Plan de Gobierno.</Text>
            )}

            {activeTab === "propuestas" && (
              <Text className="p-5 text-gray-700">Aquí van las Propuestas del candidato.</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }


  // Si hay un partido seleccionado, mostrar la vista de candidatos
  if (selectedParty) {
    const partyCandidates = candidatesByParty[selectedParty] || [];

    return (
      <SafeAreaView style={styles.container}>
        {/* Header con botón de regreso */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Acción Popular</Text>
          <View style={styles.placeholder} />
        </View>

        <CandidatesList
          candidates={partyCandidates}
          partyName={selectedParty}
          searchText={searchText}
          onSearchChange={handleSearch}
          onCandidatePress={handleCandidatePress}
        />
      </SafeAreaView>
    );
  }

  // Vista principal de partidos
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista De Candidatos</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="¿Estas buscando algún candidato?"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Primera fila - 5 partidos con fotos */}
        <PartyRows
          parties={firstRowParties}
          onPartyPress={handlePartyPress}
          rowType="five"
        />

        {/* Segunda fila - 3 partidos estilo home */}
        <PartyRows
          parties={secondRowParties}
          onPartyPress={handlePartyPress}
          rowType="three"
        />

        {/* Tercera fila - 5 partidos con fotos */}
        <PartyRows
          parties={thirdRowParties}
          onPartyPress={handlePartyPress}
          rowType="five"
        />

        {/* Cuarta fila - 3 partidos estilo home */}
        <PartyRows
          parties={fourthRowParties}
          onPartyPress={handlePartyPress}
          rowType="three"
        />

        {/* Main Candidates */}
        <MainCandidates
          candidates={mainCandidates}
          onCandidatePress={handleMainCandidatePress}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#e53e3e",
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  bottomSpacing: {
    height: 100,
  },
  detailScrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  detailHeader: {
    position: "relative",
  },
  detailBackButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 6,
    borderRadius: 20,
  },
  coverImage: {
    height: 160,
    backgroundColor: "#1e293b",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 0,
  },
  avatarWrapper: {
    position: "absolute",
    bottom: -40,
    alignSelf: "center",
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e53e3e",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  detailContent: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  detailName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  detailUsername: {
    fontSize: 14,
    color: "#555",
  },
  detailRole: {
    color: "#e53e3e",
    fontWeight: "600",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  tabActive: {
    paddingVertical: 6,
    paddingHorizontal: 12,

  },
  tabText: {
    color: "#777",
    fontSize: 14,
  },
  tabTextActive: {
    color: "#e53e3e",
    fontWeight: "600",
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timelineBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignSelf: "center",
    marginBottom: 10,
  },
  timelineYear: {
    color: "#e53e3e",
    fontSize: 16,
    fontWeight: "bold",
  },
  timelineList: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timelineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#e53e3e",
    marginRight: 8,
  },
  timelineText: {
    fontSize: 14,
    color: "#333",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    alignSelf: "center",
    marginVertical: 20,
  },

});
