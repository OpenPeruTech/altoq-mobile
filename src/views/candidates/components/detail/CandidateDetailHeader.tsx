import { CandidatesUIColors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CandidateDetailHeaderProps {
  candidateName: string;
  onBackPress: () => void;
}

export const CandidateDetailHeader: React.FC<CandidateDetailHeaderProps> = ({
  candidateName,
  onBackPress,
}) => {
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
        <Text style={styles.candidateName}>{candidateName}</Text>
        <Text style={{lineHeight:20}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora esse consectetur animi eos sint doloribus numquam id, suscipit rem pariatur reiciendis expedita, atque harum debitis temporibus nihil eius, quas non?
        </Text>


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
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    color: CandidatesUIColors.textPrimary,
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
