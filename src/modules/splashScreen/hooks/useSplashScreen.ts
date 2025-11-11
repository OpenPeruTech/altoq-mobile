import { useState, useEffect } from 'react';

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSeenSplash, setHasSeenSplash] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true);
    
    // Verificar si ya vio el splash en esta sesión
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem('splash-seen');
      if (seen) {
        setShowSplash(false);
        setHasSeenSplash(true);
      }
    }
  }, []);

  const completeSplash = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('splash-seen', 'true');
    }
    setShowSplash(false);
    setHasSeenSplash(true);
  };

  return {
    showSplash: isClient ? showSplash : true,
    hasSeenSplash,
    completeSplash,
  };
}

export function useSplashNavigation(totalSteps: number, onComplete: () => void) {
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Mostrar logo durante 5 segundos antes de los steps
    const logoTimer = setTimeout(() => {
      setShowSteps(true);
    }, 5000);

    return () => clearTimeout(logoTimer);
  }, []);

  const handleNext = () => {
    console.log('handleNext called, currentStep:', currentStep, 'totalSteps:', totalSteps);
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => {
        const next = prev + 1;
        console.log('Moving to step:', next);
        return next;
      });
    } else {
      console.log('Completing splash');
      onComplete();
    }
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return {
    showSteps,
    currentStep,
    handleNext,
    progress,
  };
}

export function useInstallPrompt(onComplete: () => void) {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true);
    
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("beforeinstallprompt", handler);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("beforeinstallprompt", handler);
      }
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      onComplete();
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App instalada");
    }

    setDeferredPrompt(null);
    onComplete();
  };

  const handleSkip = () => {
    onComplete();
  };

  return {
    showInstallPrompt: isClient ? showInstallPrompt : false,
    handleInstall,
    handleSkip,
  };
}
