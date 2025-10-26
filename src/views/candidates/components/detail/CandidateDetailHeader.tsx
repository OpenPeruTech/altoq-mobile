import { CandidatesUIColors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Candidate } from "@/views/candidates/data/parties";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CandidateDetailHeaderProps {
  candidate: Candidate;
  onBackPress: () => void;
}

export const CandidateDetailHeader: React.FC<CandidateDetailHeaderProps> = ({
  candidate,
  onBackPress,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const primaryColor = useThemeColor("primary");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Imagen de fondo con botón de regreso */}
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={CandidatesUIColors.headerText}
          />
        </TouchableOpacity>

        {/* Imagen de fondo */}
        <View style={styles.coverImage}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Ionicons
                name="person"
                size={60}
                color={CandidatesUIColors.headerText}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Información del candidato */}
      <View style={styles.infoContainer}>
        <Text style={[styles.candidateName, { color: textColor }]}>
          {candidate.name}
        </Text>
        <Text style={[styles.position, { color: primaryColor }]}>
          {candidate.position}
        </Text>
        <Text style={[styles.party, { color: textSecondaryColor }]}>
          Partido: {candidate.party}
        </Text>

        {/* Bio con funcionalidad de expandir/contraer */}
        <View style={styles.bioContainer}>
          <Text
            style={[styles.bio, { color: textSecondaryColor }]}
            numberOfLines={isExpanded ? undefined : 4}
            ellipsizeMode="tail"
          >
            {candidate.bio}
          </Text>

          {candidate.bio && candidate.bio.length > 200 && (
            <TouchableOpacity
              onPress={toggleExpanded}
              style={styles.readMoreButton}
            >
              <Text style={styles.readMoreText}>
                {isExpanded ? "Ver menos" : "Seguir leyendo"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  coverImage: {
    height: 150,
    backgroundColor: CandidatesUIColors.coverBackground,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatarWrapper: {
    position: "absolute",
    bottom: -80,
    left: 10,
  },
  avatarCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#5FD0CF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: CandidatesUIColors.profileBorder,
  },
  infoContainer: {
    marginTop: 90,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  candidateName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 4,
    color: CandidatesUIColors.textPrimary,
  },
  position: {
    fontSize: 16,
    color: CandidatesUIColors.activeTab,
    fontWeight: "600",
    marginBottom: 4,
  },
  party: {
    fontSize: 14,
    color: CandidatesUIColors.textSecondary,
    fontWeight: "500",
    marginBottom: 8,
  },
  bioContainer: {
    marginTop: 8,
  },
  bio: {
    fontSize: 14,
    color: CandidatesUIColors.textSecondary,
    lineHeight: 20,
    textAlign: "justify",
  },
  readMoreButton: {
    marginTop: 8,
    alignSelf: "flex-start",
  },
  readMoreText: {
    fontSize: 14,
    color: "#5FD0CF",
    fontWeight: "600",
  },
  username: {
    fontSize: 14,
    color: CandidatesUIColors.textSecondary,
    fontWeight: "bold",
  },
  badge: {
    flexDirection: "row",
    backgroundColor: CandidatesUIColors.badgeBackground,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 8,
    alignItems: "center",
  },
  badgeText: {
    color: CandidatesUIColors.activeTab,
    fontWeight: "600",
  },
});
