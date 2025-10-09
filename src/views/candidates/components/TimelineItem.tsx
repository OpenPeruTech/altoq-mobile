import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";


export type TimelineItem = {
  year: string;
  event: string;
};

type Props = {
  data: TimelineItem[];
};

const TimelineBarSlider: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: TimelineItem }) => (
    <View style={styles.item}>
      <Text style={styles.year}>{item.year}</Text>
      <View style={styles.dot} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Línea del Tiempo</Text>
      <View style={styles.line} />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.slider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
    color: "#2d3748",
  },
  line: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#e53e3e",
    zIndex: -1,
  },
  slider: {
    paddingVertical: 40,
    alignItems: "center",
  },
  item: {
    width: 80,
    alignItems: "center",
  },
  year: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    color: "#e53e3e",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e53e3e",
  },
});

export default TimelineBarSlider;
