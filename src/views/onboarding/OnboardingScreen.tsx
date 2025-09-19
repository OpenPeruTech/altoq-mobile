import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface OnboardingScreenProps {
  slides: string[];
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  slides,
  onComplete,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Animate slide in
    translateY.value = withTiming(0, { duration: 800 });
    opacity.value = withTiming(1, { duration: 800 });

    // Auto advance slides
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        onComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide]}</Text>
        </View>

        {currentSlide < slides.length - 1 && (
          <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
            <Ionicons name="chevron-forward" size={24} color="#ffffff" />
          </TouchableOpacity>
        )}
      </Animated.View>

      <View style={styles.progressContainer}>
        <View style={styles.progressDots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === currentSlide && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 120,
    paddingBottom: 60,
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
    lineHeight: 36,
  },
  nextButton: {
    alignSelf: "flex-end",
    backgroundColor: "#e53e3e",
    borderRadius: 50,
    padding: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  progressContainer: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#cccccc",
  },
  activeDot: {
    backgroundColor: "#e53e3e",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
