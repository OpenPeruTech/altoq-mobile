# My Expo App

Este proyecto fue creado con **Expo** usando:

```bash
npx create-expo-app my-app
```

## 🚀 Cómo iniciar el proyecto

1. Clona este repositorio o crea un nuevo proyecto con Expo.
2. Instala dependencias (ya vienen instaladas al crear el proyecto):
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npx expo start
   ```
4. Escanea el código QR con la app de **Expo Go** (disponible en iOS y Android).

## 📂 Estructura del proyecto

```
YoElijo/
src/
├── app/                          # Expo Router - Solo rutas
│   ├── _layout.tsx              # Layout principal
│   ├── index.tsx                # Ruta raíz (splash/onboarding)
│   ├── (tabs)/                  # Grupo de tabs
│   │   ├── _layout.tsx          # Layout de tabs
│   │   ├── index.tsx            # Home tab
│   │   └── candidates.tsx       # Candidatos tab
│   └── +not-found.tsx           # Página 404
├── views/                        # Pantallas principales
│   ├── onboarding/
│   │   ├── SplashScreen.tsx
│   │   ├── OnboardingScreen.tsx
│   │   └── index.ts
│   ├── home/
│   │   ├── HomeScreen.tsx
│   │   └── index.ts
│   ├── candidates/
│   │   ├── CandidatesScreen.tsx
│   │   └── index.ts
│   └── index.ts
├── components/                  # Componentes reutilizables
│   ├── ui/                      # Componentes de UI básicos
│   │   ├── Button/
│   │   ├── Text/
│   │   ├── Container/
│   │   └── index.ts
│   ├── layout/                  # Componentes de layout
│   │   ├── SafeAreaWrapper.tsx
│   │   ├── TabBar.tsx
│   │   └── index.ts
│   ├── onboarding/              # Componentes específicos de onboarding
│   │   ├── OnboardingSlide.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── index.ts
│   └── index.ts
├── hooks/                        # Custom hooks
│   ├── useOnboarding.ts
│   ├── useColorScheme.ts
│   ├── useStorage.ts
│   └── index.ts
├── services/                     # Servicios y API
│   ├── api/
│   │   ├── candidates.ts
│   │   ├── client.ts
│   │   └── index.ts
│   ├── storage.ts
│   └── index.ts
├── constants/                    # Constantes
│   ├── Colors.ts
│   ├── Sizes.ts
│   ├── Fonts.ts
│   └── index.ts
├── types/                       # Tipos de TypeScript
│   ├── navigation.ts
│   ├── candidate.ts
│   └── index.ts
├── utils/                       # Utilidades
│   ├── helpers.ts
│   ├── formatters.ts
│   └── index.ts
└── assets/                      # Assets (imágenes, fuentes, etc.)
    ├── images/
    ├── fonts/
    └── icons/
```

## ✅Principios de la Estructura

```
1. app/ - Solo Rutas (Expo Router)

Contiene únicamente la definición de rutas
Los componentes reales están en views/
Mantiene la estructura limpia y separada

2. views/ - Pantallas Principales

Cada pantalla tiene su propia carpeta
Contiene la lógica específica de cada vista
Exporta componentes a través de index.ts

3. components/ - Componentes Reutilizables

ui/: Componentes básicos (Button, Text, etc.)
layout/: Componentes de estructura
[feature]/: Componentes específicos por funcionalidad

4. hooks/ - Lógica Personalizada

Custom hooks reutilizables
Separación de lógica de presentación

5. services/ - Capa de Datos

API calls
Gestión de datos locales
Servicios externos

6. Organización por Barrels

Cada carpeta tiene su index.ts para exportaciones limpias
Facilita imports y refactoring

Ventajas de esta Estructura

Escalabilidad: Fácil agregar nuevas features
Mantenibilidad: Código organizado y fácil de encontrar
Reutilización: Componentes y hooks reutilizables
Separation of Concerns: Cada carpeta tiene un propósito específico
Testing: Estructura que facilita testing unitario
Team Collaboration: Estructura clara para equipos
```

## 📱 Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (v22 o superior).
- Tener instalada la app **Expo Go** en tu celular.
- (Opcional) Instalar [Expo CLI](https://docs.expo.dev/) globalmente:
  ```bash
  npm install -g expo-cli
  ```

## 🛠️ Comandos útiles

- `npx expo start` → Inicia el proyecto.
- `npm run android` → Corre en emulador Android (si está disponible).
- `npm run ios` → Corre en simulador iOS (solo MacOS).
- `npm run web` → Corre en navegador web.

## ✅ Buenas prácticas

1. Mantener **componentes reutilizables** dentro de `components/`.
2. Centralizar **colores, estilos y constantes** en `constants/`.
3. Usar **hooks** para separar lógica de negocio de la UI.
4. Mantener `assets/` solo para recursos estáticos.
5. Documentar cambios importantes en este archivo.
