import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Candidate } from "@/views/candidates/data/parties";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CandidateDetailHeader } from "./CandidateDetailHeader";
import { CandidateDetailTabs, type TabType } from "./CandidateDetailTabs";
import { TabContent } from "./TabContent";

interface CandidateDetailViewProps {
  candidate: Candidate;
  onBackPress: () => void;
}

export const CandidateDetailView: React.FC<CandidateDetailViewProps> = ({
  candidate,
  onBackPress,
}) => {
  console.log(
    "CandidateDetailView - Rendering with candidate:",
    candidate.name
  );
  const [activeTab, setActiveTab] = useState<TabType>("trayectoria");
  const backgroundColor = useThemeColor("background");
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";
  const gradientColors = Colors[theme].gradient;
  const gradientBackgroundColor = gradientColors[0];

  return (
    <View className="flex-1" style={{ backgroundColor }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={gradientBackgroundColor}
      />

      {/* Barra superior del sistema con color específico */}
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: gradientBackgroundColor }}
      />

      <View style={{ backgroundColor: gradientBackgroundColor, height: 20 }} />

      <SafeAreaView
        style={[styles.container, { backgroundColor }]}
        edges={["bottom"]}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <CandidateDetailHeader
            candidate={candidate}
            onBackPress={onBackPress}
          />

          <CandidateDetailTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <TabContent activeTab={activeTab} candidate={candidate} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
