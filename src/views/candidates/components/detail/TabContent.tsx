import { useStaticData } from "@/hooks/useStaticData";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Candidate } from "@/views/candidates/data/parties";
import React from "react";
import { Text, View } from "react-native";

import { type TabType } from "./CandidateDetailTabs";

interface TabContentProps {
  activeTab: TabType;
  candidate: Candidate;
}

export const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  candidate,
}) => {
  const { data: staticData } = useStaticData();
  const textColor = useThemeColor("text");
  const textSecondaryColor = useThemeColor("textSecondary");
  const counterBackgroundColor = useThemeColor("counterBackground");
  const accentColor = useThemeColor("primary");

  const positiveAspects = staticData?.candidateAnalysis?.positiveAspects || [];
  const considerations = staticData?.candidateAnalysis?.considerations || [];

  if (activeTab === "trayectoria") {
    return (
      <View className="p-5" style={{ paddingBottom: 50 }}>
        <Text className="text-lg font-bold mb-4" style={{ color: textColor }}>
          Trayectoria Política
        </Text>
        {candidate.timeline?.map((event, index) => (
          <View
            key={index}
            className="mb-4 p-4 rounded-lg"
            style={{ backgroundColor: counterBackgroundColor }}
          >
            <View className="flex-row items-start">
              <View
                className="w-3 h-3 rounded-full mt-2 mr-3"
                style={{ backgroundColor: accentColor }}
              />
              <View className="flex-1">
                <Text
                  className="font-bold text-lg mb-1"
                  style={{ color: accentColor }}
                >
                  {event.year}
                </Text>
                <Text
                  className="font-semibold text-base mb-2"
                  style={{ color: textColor }}
                >
                  {event.title}
                </Text>
                <Text
                  className="text-sm leading-5"
                  style={{ color: textSecondaryColor }}
                >
                  {event.description}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  if (activeTab === "propuestas") {
    return (
      <View className="p-5" style={{ paddingBottom: 80 }}>
        <Text className="text-lg font-bold mb-4" style={{ color: textColor }}>
          Propuestas Principales
        </Text>
        {candidate.proposals?.map((proposal, index) => (
          <View
            key={index}
            className="mb-3 p-3 rounded-lg"
            style={{ backgroundColor: counterBackgroundColor }}
          >
            <Text className="text-sm" style={{ color: textColor }}>
              {index + 1}. {proposal}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  if (activeTab === "positivoNegativo") {
    return (
      <View className="p-5" style={{ paddingBottom: 100 }}>
        <View className="mb-6">
          <Text className="text-lg font-bold mb-3" style={{ color: textColor }}>
            Aspectos Positivos
          </Text>
          <View
            className="p-4 rounded-lg"
            style={{ backgroundColor: counterBackgroundColor }}
          >
            <Text className="text-sm" style={{ color: textSecondaryColor }}>
              {positiveAspects.map((aspect, index) => (
                <React.Fragment key={index}>
                  • {aspect}
                  {index === 0
                    ? ` con ${
                        candidate.timeline?.length || 0
                      } años de trayectoria`
                    : ""}
                  {index < positiveAspects.length - 1 ? "\n" : ""}
                </React.Fragment>
              ))}
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-lg font-bold mb-3" style={{ color: textColor }}>
            Aspectos a Considerar
          </Text>
          <View
            className="p-4 rounded-lg"
            style={{ backgroundColor: counterBackgroundColor }}
          >
            <Text className="text-sm" style={{ color: textSecondaryColor }}>
              {considerations.map((consideration, index) => (
                <React.Fragment key={index}>
                  • {consideration}
                  {index < considerations.length - 1 ? "\n" : ""}
                </React.Fragment>
              ))}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return null;
};
