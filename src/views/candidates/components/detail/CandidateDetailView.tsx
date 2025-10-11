import { Candidate } from "@/views/candidates/data/parties";
import React, { useState } from "react";
import { ScrollView } from "react-native";
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
  const [activeTab, setActiveTab] = useState<TabType>("trayectoria");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <CandidateDetailHeader
          candidateName={candidate.name}
          onBackPress={onBackPress}
        />

        <CandidateDetailTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <TabContent activeTab={activeTab} />
      </ScrollView>
    </SafeAreaView>
  );
};
