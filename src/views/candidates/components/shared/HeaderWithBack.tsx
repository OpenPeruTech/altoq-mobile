import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

interface HeaderWithBackProps {
  title: string;
  onBackPress: () => void;
}

export const HeaderWithBack: React.FC<HeaderWithBackProps> = ({
  title,
  onBackPress,
}) => {
  return (
    <LinearGradient colors={Colors.light.gradient}
      start={{ x: 1, y: -1 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingTop: 32,
        paddingBottom: 24,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
      }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#5FD0CF"} translucent={false} />
      <View style={{display: 'flex', flexDirection: 'row',
         alignItems: 'center', alignSelf: 'center'}}>
        <TouchableOpacity onPress={onBackPress} >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold text-center">{title}</Text>
      </View>

    </LinearGradient>
  );
};

