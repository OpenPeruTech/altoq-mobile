import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const HomeScreen: React.FC = () => {
  const currentDate = new Date();
  const electionDate = new Date("2026-04-05"); // Fecha de ejemplo

  // Calcular días restantes
  const timeDiff = electionDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Calcular meses, días y horas para el contador
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;
  const hours = currentDate.getHours();

  const authorityData = [
    { title: "Presidente", icon: "person", count: 1, color: "#ff6b6b" },
    { title: "Vicepresidentes", icon: "people", count: 2, color: "#4ecdc4" },
    { title: "Senadores", icon: "people-circle", count: 60, color: "#45b7d1" },
    {
      title: "Diputados",
      icon: "people-outline",
      count: 130,
      color: "#f9ca24",
    },
    {
      title: "Parlamentos Andinos",
      icon: "library",
      count: 5,
      color: "#6c5ce7",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.greeting}>
            <AvatarPlaceholder
              name="Usuario YoElijo"
              size={40}
              backgroundColor="#ffa726"
            />
            <Text style={styles.greetingText}>Buenos Días!</Text>
          </View>
        </View>

        {/* Countdown Card */}
        <View style={styles.countdownCard}>
          <View style={styles.countdownHeader}>
            <Ionicons name="calendar" size={20} color="#fff" />
            <Text style={styles.countdownTitle}>Elecciones Generales 2026</Text>
          </View>

          <View style={styles.countdownNumbers}>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>
                {months.toString().padStart(2, "0")}
              </Text>
              <Text style={styles.timeLabel}>Meses</Text>
            </View>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>
                {days.toString().padStart(2, "0")}
              </Text>
              <Text style={styles.timeLabel}>Días</Text>
            </View>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>
                {hours.toString().padStart(2, "0")}
              </Text>
              <Text style={styles.timeLabel}>Horas</Text>
            </View>
          </View>

          {/* Mascot Placeholder */}
          <View style={styles.mascotContainer}>
            <View style={styles.mascotPlaceholder}>
              <Text style={styles.mascotEmoji}>🦙</Text>
            </View>
          </View>
        </View>

        {/* Authorities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Qué autoridades elegiremos?</Text>

          <View style={styles.authoritiesGrid}>
            {authorityData.map((authority, index) => (
              <TouchableOpacity key={index} style={styles.authorityCard}>
                <Ionicons
                  name={authority.icon as any}
                  size={24}
                  color={authority.color}
                />
                <Text style={styles.authorityCount}>{authority.count}</Text>
                <Text style={styles.authorityTitle}>{authority.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Candidates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Los más populares</Text>

          <View style={styles.candidateCard}>
            <AvatarPlaceholder
              name="Postulante 1"
              size={50}
              backgroundColor="#e53e3e"
            />
            <View style={styles.candidateInfo}>
              <Text style={styles.candidateName}>Postulante 1</Text>
              <Text style={styles.candidateParty}>Partido Político 1</Text>
              <Text style={styles.candidateDetails}>
                Lorem ipsum Lorem ipsum
              </Text>
              <Text style={styles.candidateDetails}>
                Lorem ipsum Lorem ipsum
              </Text>
              <Text style={styles.candidateDetails}>
                Lorem ipsum Lorem ipsum
              </Text>
              <Text style={styles.candidateDetails}>Lorem lorem</Text>
            </View>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentage}>12%</Text>
              <Ionicons name="trending-up" size={16} color="#4CAF50" />
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 12,
  },
  countdownCard: {
    backgroundColor: "#e53e3e",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  countdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  countdownTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  countdownNumbers: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  timeBlock: {
    alignItems: "center",
  },
  timeNumber: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  timeLabel: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.9,
  },
  mascotContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  mascotPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  mascotEmoji: {
    fontSize: 40,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  authoritiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  authorityCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authorityCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 4,
  },
  authorityTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  candidateCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  candidateInfo: {
    flex: 1,
    marginLeft: 12,
  },
  candidateName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  candidateParty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  candidateDetails: {
    fontSize: 12,
    color: "#999",
    lineHeight: 16,
  },
  percentageContainer: {
    alignItems: "center",
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 4,
  },
  bottomSpacing: {
    height: 100,
  },
});
