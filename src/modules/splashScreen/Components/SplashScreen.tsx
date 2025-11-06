"use client";
import { Info, Sparkles, Brain } from "lucide-react";
import { useSplashNavigation, useInstallPrompt } from "../hooks/useSplashScreen";
import { LogoScreen } from "./LogoScreen";
import { StepContent } from "./StepContent";
import { ProgressButton } from "./ProgressButton";

interface SplashScreenProps {
  onComplete: () => void;
}

const steps = [
  {
    icon: Info,
    description: (
      <>
        <span className="text-[#53E4E3]">¡Informate Altoq!</span> Conoce a
        todos los candidatos en un solo lugar
      </>
    ),
  },
  {
    icon: Sparkles,
    description: (
      <>
        Toda la info que necesitas saber en un solo lugar,{" "}
        <span className="text-[#53E4E3]">clarito y sin floro</span>
      </>
    ),
  },
  {
    icon: Brain,
    description: (
      <>
        Explora, compara y elige de manera sencilla con ayuda de la{" "}
        <span className="text-[#5FD0CF]">inteligencia artificial</span>
      </>
    ),
  },
];

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const { showSteps, currentStep, handleNext, progress } = useSplashNavigation(
    steps.length,
    onComplete
  );
  const { showInstallPrompt, handleInstall, handleSkip } = useInstallPrompt(onComplete);

  if (!showSteps) {
    return <LogoScreen />;
  }

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 bg-primary z-50 flex flex-col justify-end p-8 pb-12">
      <div className="w-full flex items-end justify-between">
        <StepContent
          icon={currentStepData.icon}
          description={currentStepData.description}
          currentStep={currentStep}
          totalSteps={steps.length}
          isLastStep={isLastStep}
          showInstallPrompt={showInstallPrompt}
          onInstall={handleInstall}
          onSkip={handleSkip}
        />

        <ProgressButton progress={progress} onClick={handleNext} />
      </div>
    </div>
  );
}
