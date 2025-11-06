import Image from "next/image";

interface LogoScreenProps {
  logoSrc?: string;
}

export function LogoScreen({ logoSrc = "/logo-altoque.svg" }: LogoScreenProps) {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-40 h-40 relative overflow-hidden">
          <Image
            src={logoSrc}
            alt="Altoq Logo"
            fill
            className="object-contain animate-pulse"
            priority
          />
        </div>
      </div>
    </div>
  );
}
