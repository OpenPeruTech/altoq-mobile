import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import authorityData from "@/views/home/data/authorityData.json";
import candidatesData from "@/views/home/data/candidates.json";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CandidateCard } from "../candidates/components/CandidateCard";

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
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCandidateIndex((prev) => (prev + 1) % candidatesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
              <TouchableOpacity
                key={index}
                style={[
                  styles.authorityCard,
                  { width: index < 2 ? "48%" : "30%" }, // 🔹 2 arriba, 3 abajo
                ]}
              >
                <Ionicons
                  name={authority.icon as any}
                  size={22}
                  color={authority.color}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.authorityCount}>{authority.count}</Text>
                  <Text style={styles.authorityTitle}>{authority.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Popular Candidates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Los más populares</Text>
          <CandidateCard {...candidatesData[currentCandidateIndex]} />

          <View style={styles.paginationDots}>
            {candidatesData.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.dot,
                  currentCandidateIndex === idx ? styles.activeDot : null,
                ]}
              />
            ))}
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    marginLeft: 8,
  },
  authorityCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  authorityTitle: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
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

  leftContainer: {
    width: 100,
    alignItems: "center",
  },

  rightContainer: {
    flex: 1,
    marginLeft: 12,
  },

  candidateName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },

  candidateParty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },

  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginRight: 4,
  },

  candidateDetails: {
    fontSize: 12,
    color: "#999",
    lineHeight: 16,
  },

  divider: {
    width: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 12,
    alignSelf: "stretch",
  },
  paginationDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f3c6c6",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#e53e3e",
    width: 20,
    borderRadius: 5,
  },

  bottomSpacing: {
    height: 100,
  },
});
