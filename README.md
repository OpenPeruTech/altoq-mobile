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
│── .expo/ # Archivos internos de Expo (no modificar)
│── .vscode/ # Configuración del editor VSCode
│── app/ # Punto de entrada de la aplicación (screens, rutas, navegación)
│── assets/ # Archivos estáticos (imágenes, fuentes, íconos, sonidos)
│ ├── fonts/ # Fuentes personalizadas
│ └── images/ # Imágenes de la app
│
│── components/ # Componentes reutilizables de UI
│ └── ui/ # Subcarpeta con componentes de interfaz (botones, vistas, etc.)
│
│── constants/ # Constantes globales (colores, estilos, configuraciones)
│ └── Colors.ts
│
│── hooks/ # Custom hooks para lógica reutilizable
│ ├── useColorScheme.ts # Detecta tema claro/oscuro
│ ├── useColorScheme.web.ts # Variante para web
│ └── useThemeColor.ts # Hook para aplicar colores del tema
│
│── node_modules/ # Dependencias instaladas con npm
│── scripts/ # Scripts utilitarios o de configuración
│
│── .gitignore # Archivos/carpetas ignorados por git
│── app.json # Configuración principal de Expo
│── eslint.config.js # Reglas de linting (formato de código)
│── expo-env.d.ts # Tipos de Expo (TypeScript)
│── package.json # Dependencias y scripts del proyecto
│── tsconfig.json # Configuración de TypeScript
│── README.md # Documentación general del proyecto
```

## 📱 Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (v18 o superior).
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