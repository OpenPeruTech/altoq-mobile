import React, { useState } from "react";
import { OnboardingScreen } from "./OnboardingScreen";
import { SplashScreen } from "./SplashScreen";

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  onComplete,
}) => {
  const [currentScreen, setCurrentScreen] = useState<"splash" | "onboarding">(
    "splash"
  );

  const onboardingSlides = [
    "Infórmate fácil, conoce a todos los candidatos en un solo lugar",
    "Tu decisión cuenta, accede a la información clara y centralizada de cada propuesta",
    "Explora, compara y elige con conocimiento: toda la información electoral en tu bolsillo",
  ];

  const handleSplashComplete = () => {
    setCurrentScreen("onboarding");
  };

  if (currentScreen === "splash") {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return <OnboardingScreen slides={onboardingSlides} onComplete={onComplete} />;
};
