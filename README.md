# Altoq PWA 🗳️

Progressive Web App para informarte sobre candidatos y las elecciones presidenciales.

## 🚀 Características

- ✨ Progressive Web App (PWA) con soporte offline
- 📱 Instalable en dispositivos móviles y de escritorio
- 🔔 Notificaciones push web
- 🎨 Diseño responsive y moderno con Tailwind CSS
- ⚡ Construido con Next.js 16 y React 19

## 📋 Requisitos Previos

- Node.js 20 o superior
- pnpm (recomendado) o npm

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/AltoqOfficial/altoq-pwa.git
cd altoq-pwa
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Genera las claves VAPID para notificaciones push:
```bash
npx web-push generate-vapid-keys
```

5. Copia las claves generadas en tu archivo `.env.local`

## 🔐 Variables de Entorno

Este proyecto requiere variables de entorno para funcionar correctamente. Consulta el archivo [ENV_VARIABLES.md](./ENV_VARIABLES.md) para obtener información detallada sobre:

- Cómo generar claves VAPID
- Cómo configurar variables de entorno en Vercel
- Mejores prácticas de seguridad
- Solución de problemas comunes

**Variables requeridas:**
- `NEXT_PUBLIC_VAPID_PUBLIC_KEY` - Clave pública VAPID para notificaciones push
- `VAPID_PRIVATE_KEY` - Clave privada VAPID (solo servidor)

## 🏃‍♂️ Desarrollo

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build

Para crear una versión de producción:

```bash
pnpm build
```

Para iniciar el servidor de producción:

```bash
pnpm start
```

## 🧹 Linting

Para ejecutar el linter:

```bash
pnpm lint
```

## 📦 Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel (ver [ENV_VARIABLES.md](./ENV_VARIABLES.md))
3. Vercel desplegará automáticamente tu aplicación

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AltoqOfficial/altoq-pwa)

**Importante**: Asegúrate de configurar todas las variables de entorno requeridas en Vercel antes del despliegue.

## 🗂️ Estructura del Proyecto

```
altoq-pwa/
├── app/                    # Directorio de la aplicación Next.js
│   ├── actions.ts         # Server Actions (incluye configuración de push)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── manifest.ts        # Manifiesto de PWA
├── src/                   # Código fuente
│   ├── global/           # Componentes y utilidades globales
│   ├── modules/          # Módulos de la aplicación
│   ├── services/         # Servicios y API
│   └── store/            # Estado global
├── public/               # Archivos estáticos
│   └── sw.js            # Service Worker
├── .env.example         # Plantilla de variables de entorno
├── ENV_VARIABLES.md     # Documentación de variables de entorno
└── package.json         # Dependencias y scripts
```

## 🔧 Tecnologías

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Push Notifications**: web-push
- **Language**: TypeScript 5
- **Package Manager**: pnpm

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de Altoq.

## 📧 Contacto

Altoq - [@AltoqOfficial](https://github.com/AltoqOfficial)

---

**⚠️ Nota de Seguridad**: Nunca commitees archivos `.env` o claves privadas al repositorio. Mantén tus credenciales seguras.
