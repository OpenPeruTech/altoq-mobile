"use client";
import { useEffect } from "react";
import { SplashScreen, useSplashScreen } from "@/modules/splashScreen";
import { InstallButton } from "@/modules/installPrompt";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const { showSplash, completeSplash } = useSplashScreen();

  useEffect(() => {
    // Registrar Service Worker solo en el cliente
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .then(() => console.log("Service Worker registrado"))
        .catch((error) => console.error("Error SW:", error));
    }
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={completeSplash} />;
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">

      <main className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl relative z-10">
        {/* Hero Section */}
        <section className="text-center">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl md:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-white/10 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              ¡Bienvenido a <span className="text-accent">Altoq!</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-7 md:mb-8 lg:mb-10 px-2 md:px-4 lg:px-6 max-w-2xl mx-auto">
              Tu herramienta para informarte sobre candidatos
            </p>

            {/* Próximamente Section */}
            <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-10">
              <p className="text-accent font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3">Próximamente</p>
              <p className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-lg mx-auto">
                Estamos preparando algo increíble para ti
              </p>
            </div>

            {/* Botón de Instalación */}
            <div className="flex justify-center mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              <InstallButton />
            </div>

            {/* Botón de Inscripción */}
            <button
              className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-accent text-primary rounded-lg md:rounded-xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg hover:bg-accent-2 transition-all hover:scale-105 active:scale-95"
              aria-label="Inscribirse para acceso anticipado"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 shrink-0" />
              <span className="truncate">Inscríbete para Acceso Anticipado</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
          <p className="text-white/50 text-xs sm:text-sm md:text-base lg:text-lg">
            © 2025 Altoq - Información electoral
          </p>
        </footer>
      </main>
    </div>
  );
}
