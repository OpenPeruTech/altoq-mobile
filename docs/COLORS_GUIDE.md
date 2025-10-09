# Guía del Sistema de Colores - YoElijo Mobile

## Descripción General

Este documento explica cómo usar el sistema de colores centralizado en la aplicación YoElijo Mobile. El sistema está diseñado para mantener consistencia visual y facilitar cambios futuros de marca.

## Archivo Principal de Colores

Todos los colores están definidos en `src/constants/Colors.ts`. Este archivo contiene:

- **Colores de marca**: Colores principales de YoElijo
- **Colores de tema**: Colores para modo claro y oscuro
- **Colores semánticos**: Colores para diferentes estados y propósitos

## Estructura de Colores

```typescript
export const Colors = {
  light: {
    // Colores principales
    primary: "#E30613", // Rojo principal de YoElijo
    secondary: "#141CFF", // Azul secundario
    accent: "#F8D9DD", // Rosa claro para highlights

    // Colores de texto
    text: "#0B0B0B", // Texto principal
    textSecondary: "#687076", // Texto secundario
    textTertiary: "#A3A3A3", // Texto terciario
    textOnPrimary: "#FFFFFF", // Texto sobre fondo primario

    // Colores de fondo
    background: "#FFFFFF", // Fondo principal
    backgroundSecondary: "#F8F9FA", // Fondo secundario
    surface: "#FFFFFF", // Superficies de componentes

    // Colores de estado
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Colores de interfaz
    border: "#E5E7EB",
    divider: "#F3F4F6",
    shadow: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    // Mismos colores pero adaptados para tema oscuro
    // ...
  },
};
```

## Hooks Disponibles

### 1. `useThemeColor(colorName)`

Obtiene un color específico del tema actual:

```typescript
import { useThemeColor } from "@/hooks/useThemeColor";

function MyComponent() {
  const primaryColor = useThemeColor("primary");
  const textColor = useThemeColor("text");

  return (
    <View style={{ backgroundColor: primaryColor }}>
      <Text style={{ color: textColor }}>Hola Mundo</Text>
    </View>
  );
}
```

### 2. `useThemeColors(colorNames)`

Obtiene múltiples colores de una vez:

```typescript
import { useThemeColors } from "@/hooks/useThemeColor";

function MyComponent() {
  const { primary, text, background } = useThemeColors([
    "primary",
    "text",
    "background",
  ]);

  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: text }}>Texto</Text>
      <View style={{ backgroundColor: primary }} />
    </View>
  );
}
```

### 3. `useAllThemeColors()`

Obtiene todos los colores del tema actual:

```typescript
import { useAllThemeColors } from "@/hooks/useThemeColor";

function MyComponent() {
  const colors = useAllThemeColors();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Todo el tema</Text>
    </View>
  );
}
```

## Componentes Temáticos

### Componentes Básicos

```typescript
import { ThemedText, ThemedView, ThemedButton, ThemedCard } from "@/components";

function MyComponent() {
  return (
    <ThemedView backgroundColor="surface">
      <ThemedText color="text" className="text-lg font-bold">
        Título
      </ThemedText>

      <ThemedText color="textSecondary">Subtítulo</ThemedText>

      <ThemedButton variant="primary" onPress={() => {}}>
        Botón Primario
      </ThemedButton>

      <ThemedCard padding="large">
        <ThemedText>Contenido de la tarjeta</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
}
```

### Hook de Estilos Temáticos

```typescript
import { useThemedStyles } from "@/components";

function MyComponent() {
  const styles = useThemedStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text.title}>Título</Text>
      <Pressable style={styles.button.primary}>
        <Text style={styles.text.primary}>Botón</Text>
      </Pressable>
    </View>
  );
}
```

## Colores de Marca

Para colores específicos de la marca, usa `BrandColors`:

```typescript
import { BrandColors } from "@/constants/Colors";

// Uso directo cuando necesites colores específicos de marca
const logoColor = BrandColors.primary; // "#E30613"
```

## Mejores Prácticas

### ✅ Hacer

1. **Usar los hooks temáticos** en lugar de colores hardcodeados
2. **Importar desde el archivo centralizado** de colores
3. **Usar colores semánticos** (text, background, etc.) en lugar de colores específicos
4. **Probar en ambos temas** (claro y oscuro)

### ❌ Evitar

1. **Colores hardcodeados** en componentes
2. **Múltiples definiciones** del mismo color
3. **Usar colores específicos** cuando hay alternativas semánticas
4. **Olvidar el tema oscuro**

## Ejemplo Completo

```typescript
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ThemedText,
  ThemedView,
  ThemedButton,
  useThemeColor,
  useThemedStyles,
} from "@/components";

export function ExampleScreen() {
  const primaryColor = useThemeColor("primary");
  const styles = useThemedStyles();

  return (
    <ThemedView style={styles.container}>
      <ThemedCard padding="large">
        <ThemedText color="text" className="text-2xl font-bold mb-4">
          Ejemplo de Uso
        </ThemedText>

        <ThemedText color="textSecondary" className="mb-6">
          Este componente usa el sistema de colores centralizado
        </ThemedText>

        <ThemedButton
          variant="primary"
          onPress={() => console.log("Presionado")}
          className="mb-4"
        >
          Botón Primario
        </ThemedButton>

        <ThemedButton
          variant="outline"
          onPress={() => console.log("Secundario")}
        >
          Botón Secundario
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
}
```

## Migración de Código Existente

Para migrar código existente:

1. **Identificar colores hardcodeados**
2. **Reemplazar con hooks temáticos**
3. **Usar componentes temáticos** cuando sea posible
4. **Probar en ambos temas**

### Antes:

```typescript
<View style={{ backgroundColor: "#E30613" }}>
  <Text style={{ color: "#FFFFFF" }}>Texto</Text>
</View>
```

### Después:

```typescript
<ThemedView backgroundColor="primary">
  <ThemedText color="textOnPrimary">Texto</ThemedText>
</ThemedView>
```

## Mantenimiento

- **Cambios de marca**: Solo modificar `src/constants/Colors.ts`
- **Nuevos colores**: Agregar a ambos temas (light/dark)
- **Documentación**: Actualizar esta guía cuando se agreguen nuevos colores
