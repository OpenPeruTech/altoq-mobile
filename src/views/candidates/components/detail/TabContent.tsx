import React from "react";
import { Text } from "react-native";

import { type TabType } from "./CandidateDetailTabs";
import { TimelineView } from "./TimelineView";

interface TabContentProps {
  activeTab: TabType;
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  if (activeTab === "trayectoria") {
    return (
      <TimelineView />
    );
  }

  if (activeTab === "plan") {
    return (
      <Text className="p-5 text-gray-700">
        Aquí va el contenido del Plan de Gobierno.
      </Text>
    );
  }

  if (activeTab === "propuestas") {
    return (
      <Text className="p-5 text-gray-700">
        Aquí van las Propuestas del candidato.
      </Text>
    );
  }

  return null;
};
