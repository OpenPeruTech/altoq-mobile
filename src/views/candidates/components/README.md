# 📁 Estructura de Componentes de Candidatos

Esta carpeta contiene todos los componentes relacionados con la sección de candidatos, organizados por funcionalidad.

## 📂 Estructura de Carpetas

```
components/
├── detail/          → Componentes del detalle de un candidato
├── list/            → Componentes de listado de candidatos
├── party/           → Componentes relacionados con partidos políticos
├── views/           → Vistas principales (containers)
└── shared/          → Componentes compartidos/reutilizables
```

## 📋 Detalle de cada carpeta

### 🔍 `detail/` - Detalle del Candidato

Componentes para mostrar información detallada de un candidato específico.

- **CandidateDetailView.tsx** - Vista principal del detalle
- **CandidateDetailHeader.tsx** - Header con foto y nombre
- **CandidateDetailTabs.tsx** - Sistema de tabs
- **TabContent.tsx** - Contenido dinámico según tab
- **TimelineView.tsx** - Vista de línea de tiempo
- **TimelineItem.tsx** - Item individual de la línea de tiempo

### 📃 `list/` - Listas de Candidatos

Componentes para mostrar listas y tarjetas de candidatos.

- **CandidatesList.tsx** - Lista completa de candidatos
- **CandidateCard.tsx** - Tarjeta individual de candidato
- **MainCandidates.tsx** - Tarjetas de candidatos principales

### 🏛️ `party/` - Partidos Políticos

Componentes para mostrar información de partidos políticos.

- **FivePartyRow.tsx** - Fila de 5 partidos (compacta)
- **ThreePartyRow.tsx** - Fila de 3 partidos (usa AuthorityCard)
- **PartyRows.tsx** - Componente legacy (puede eliminarse)

### 📱 `views/` - Vistas Principales

Componentes contenedores que componen vistas completas.

- **PartiesMainView.tsx** - Vista principal de partidos
- **PartyListView.tsx** - Vista de lista de candidatos por partido

### 🔧 `shared/` - Componentes Compartidos

Componentes reutilizables en diferentes partes de la sección.

- **HeaderWithBack.tsx** - Header con botón de regreso
- **SearchBar.tsx** - Barra de búsqueda

## 📖 Cómo Usar

### Importación Individual

```typescript
import { CandidateDetailView } from "@/views/candidates/components/detail";
import { MainCandidates } from "@/views/candidates/components/list";
import { HeaderWithBack } from "@/views/candidates/components/shared";
```

### Importación desde el índice principal

```typescript
import {
  CandidateDetailView,
  MainCandidates,
  HeaderWithBack,
} from "@/views/candidates/components";
```

## 🎨 Sistema de Colores

Todos los componentes usan el sistema de colores centralizado:

```typescript
import { CandidatesUIColors } from "@/constants/Colors";
```

## 🔄 Actualizar Estructura

Si necesitas agregar un nuevo componente:

1. **Identifica** a qué categoría pertenece
2. **Crea** el archivo en la carpeta correspondiente
3. **Exporta** desde el `index.ts` de esa carpeta
4. ✅ ¡Listo! Automáticamente disponible desde el índice principal

## 📝 Convenciones

- ✅ Usar **StyleSheet** en lugar de Tailwind (NativeWind)
- ✅ Importar colores desde `CandidatesUIColors`
- ✅ Componentes con documentación JSDoc
- ✅ Props con interfaces TypeScript
- ✅ Exports nombrados (no default)

---

**Última actualización:** 2025-10-11
