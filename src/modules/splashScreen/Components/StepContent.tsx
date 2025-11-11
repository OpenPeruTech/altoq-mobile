import { Download } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StepContentProps {
  icon: LucideIcon;
  description: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  isLastStep: boolean;
  showInstallPrompt: boolean;
  onInstall: () => void;
  onSkip: () => void;
}

export function StepContent({
  icon: Icon,
  description,
  currentStep,
  totalSteps,
  isLastStep,
  showInstallPrompt,
  onInstall,
  onSkip,
}: StepContentProps) {
  return (
    <div className="flex-1 max-w-2xl">
      {/* Icono del step */}
      <div className="mb-4 animate-fade-in">
        <Icon className="w-12 h-12 text-[#53E4E3]" />
      </div>

      {/* Descripción */}
      <div className="mb-6 animate-fade-in">
        <p className="text-white text-2xl font-semibold leading-relaxed">
          {description}
        </p>
      </div>

      {/* Indicadores de progreso */}
      <div className="flex gap-2 mb-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentStep ? "w-12 bg-[#53E4E3]" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Botones de instalación (aparecen en el último step) */}
      {isLastStep && (
        <div className="flex gap-3 mt-6 animate-fade-in">
          {showInstallPrompt && (
            <button
              onClick={onInstall}
              className="btn-accent px-6 py-3 text-sm font-bold shadow-lg flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Instalar Ahora
            </button>
          )}
          <button
            onClick={onSkip}
            className="px-6 py-3 text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            {showInstallPrompt ? "Más tarde" : "Continuar"}
          </button>
        </div>
      )}
    </div>
  );
}
