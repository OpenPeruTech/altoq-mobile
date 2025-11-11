/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para PWA
  experimental: {
    // Habilitar características experimentales si es necesario
  },
  // Configuración de Turbopack (Next.js 16+)
  turbopack: {
    // Configuración vacía para silenciar el warning
    // y usar Turbopack por defecto
  },
}

module.exports = nextConfig;