import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const TimelineView: React.FC = () => {
  return (
    <>
      <View className="items-center px-20">
        <Text className="font-bold text-xl">Línea del Tiempo</Text>
      </View>

      <View className="justify-center items-center p-4 border border-gray-300 rounded-lg m-4 w-11/12">
        {/* Lista de eventos */}
        <View>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <View key={item} className="flex-row items-center mb-2">
              <Text className="text-gray-700">{item}. Lorem ipsum</Text>
            </View>
          ))}
        </View>

        {/* Navegación */}
        <View className="flex-row justify-between w-20 mt-4">
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
