import { ArrowRight } from "lucide-react";

interface ProgressButtonProps {
  progress: number;
  onClick: () => void;
}

export function ProgressButton({ progress, onClick }: ProgressButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="relative ml-8 w-20 h-20">
      {/* SVG para el anillo de progreso */}
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        {/* Círculo de fondo */}
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="4"
        />
        {/* Círculo de progreso */}
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#53E4E3"
          strokeWidth="4"
          strokeDasharray={`${progress * 2.26} 226`}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>

      {/* Botón de avanzar */}
      <button
        onClick={handleClick}
        className="absolute inset-2 rounded-full bg-[#53E4E3] flex items-center justify-center transition-all hover:bg-[#5FD0CF] hover:scale-105 active:scale-95 shadow-2xl"
        aria-label="Siguiente"
      >
        <ArrowRight className="w-8 h-8 text-primary" />
      </button>
    </div>
  );
}
