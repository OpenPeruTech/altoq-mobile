import { CandidatesUIColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TabType = "trayectoria" | "plan" | "propuestas";

interface Tab {
  key: TabType;
  label: string;
}

interface CandidateDetailTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: Tab[] = [
  { key: "trayectoria", label: "Trayectoria Política" },
  { key: "plan", label: "Plan de Gobierno" },
  { key: "propuestas", label: "Propuestas" },
];

export const CandidateDetailTabs: React.FC<CandidateDetailTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsRow}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => onTabChange(tab.key)}
            style={[
              styles.tab,
              index === 1 ? styles.tabCenter : styles.tabSide,
              activeTab === tab.key && styles.activeTabBorder,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: CandidatesUIColors.tabBorder,
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tab: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  tabCenter: {
    marginHorizontal: 12,
  },
  tabSide: {
    marginHorizontal: 4,
  },
  activeTabBorder: {
    borderBottomWidth: 2,
    borderBottomColor: CandidatesUIColors.activeTab,
  },
  tabText: {
    fontWeight: "600",
    fontSize: 14,
    color: CandidatesUIColors.inactiveTab,
  },
  activeTabText: {
    color: CandidatesUIColors.activeTab,
  },
});

export type { TabType };
