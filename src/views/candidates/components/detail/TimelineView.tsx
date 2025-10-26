import React from "react";
import { Text, View } from "react-native";
import { Candidate } from "@/views/candidates/data/parties";

interface TimelineViewProps {
  candidate: Candidate;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ candidate }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text className="font-bold text-xl text-start mb-4" style={{marginVertical:8, marginHorizontal:2}}>
        Trayectoria Política
      </Text>
      
      {candidate.timeline?.map((event, index) => (
        <View key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
          <View className="flex-row items-start">
            <View className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3" />
            <View className="flex-1">
              <Text className="font-bold text-lg text-blue-600 mb-1">
                {event.year}
              </Text>
              <Text className="font-semibold text-base text-gray-800 mb-2">
                {event.title}
              </Text>
              <Text className="text-gray-600 text-sm leading-5">
                {event.description}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
