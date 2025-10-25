import React from "react";
import { Text, View } from "react-native";

export const TimelineView: React.FC = () => {
  return (
  
      <View style={{ padding: 20 }}>
        <View className="p-4" style={{ borderRadius: 10, backgroundColor: "#D9D9D959", paddingTop: 10 }}>
          <Text className="font-bold text-xl text-start " style={{marginVertical:8, marginHorizontal:2}}>Línea del Tiempo</Text>
          <Text style={{lineHeight:20}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Incidunt iste est totam, dolore unde voluptatibus mollitia amet odit?
            Est molestiae rem, quaerat suscipit quasi expedita alias architecto eos?
            Reprehenderit, ipsa!
          </Text>
        </View>
      </View>


  );
};
