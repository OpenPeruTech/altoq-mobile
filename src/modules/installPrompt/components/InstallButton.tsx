"use client";
import { useInstallPrompt } from "../hooks/useInstallPrompt";
import { Download, CheckCircle, Smartphone } from "lucide-react";

export function InstallButton() {
  const { isInstallable, isInstalled, handleInstallClick } = useInstallPrompt();

  // Si ya está instalada, mostrar estado
  if (isInstalled) {
    return (
      <div className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600/20 text-green-400 rounded-lg border border-green-500/30">
        <CheckCircle className="w-5 h-5" />
        <span className="font-semibold">App Instalada</span>
      </div>
    );
  }

  // Si es instalable, mostrar botón activo
  if (isInstallable) {
    return (
      <button
        onClick={handleInstallClick}
        className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-primary rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:bg-accent-2 transition-all hover:scale-105 active:scale-95"
        aria-label="Instalar aplicación"
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        <span>Instalar App</span>
      </button>
    );
  }

  // Si no es instalable aún, mostrar un mensaje informativo
  return (
    <div className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/5 text-white/60 rounded-lg border border-white/10 text-xs sm:text-sm">
      <Smartphone className="w-4 h-4" />
      <span>Disponible como PWA</span>
    </div>
  );
}
