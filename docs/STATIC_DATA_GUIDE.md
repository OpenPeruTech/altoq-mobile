# Guía de Datos Estáticos - staticData.json

Esta documentación explica cada nodo del archivo `src/data/staticData.json`, dónde se utiliza en la aplicación y cómo agregar nuevos datos.

## Tabla de Contenidos

1. [Estructura General](#estructura-general)
2. [Nodos del JSON](#nodos-del-json)
   - [filterOptions](#filteroptions)
   - [authorities](#authorities)
   - [popularCandidates](#popularcandidates)
   - [parties](#parties)
   - [mainCandidates](#maincandidates)
   - [candidates](#candidates)
   - [electionInfo](#electioninfo)
   - [candidateAnalysis](#candidateanalysis)
3. [Ejemplos de Agregar Datos](#ejemplos-de-agregar-datos)

---

## Estructura General

El archivo `staticData.json` contiene toda la información estática de la aplicación. Se accede mediante el hook `useStaticData()` ubicado en `src/hooks/useStaticData.ts`.

```typescript
// Ejemplo de uso básico
import { useStaticData } from "@/hooks/useStaticData";

function MyComponent() {
  const { data, loading, error } = useStaticData();

  // Acceder a los datos
  const parties = data?.parties || [];

  return <View>...</View>;
}
```

---

## Nodos del JSON

### filterOptions

**Descripción:** Opciones de filtrado geográfico por región/departamento.

**Componentes donde se usa:**

- `src/views/candidates/components/list/CandidatesList.tsx`

**Hook relacionado:** Ninguno (se usa directamente con `useStaticData`)

**Estructura:**

```json
{
  "id": "1",
  "name": "Lima",
  "type": "region"
}
```

**Ejemplo de agregar una región:**

```json
{
  "filterOptions": [
    // ... regiones existentes
    {
      "id": "7",
      "name": "Cajamarca",
      "type": "region"
    }
  ]
}
```

---

### authorities

**Descripción:** Lista de cargos públicos electos (Presidente, Vicepresidentes, Congresistas, etc.)

**Componentes donde se usa:**

- `src/views/home/HomeView.tsx` (via `useAuthorities`)

**Hook relacionado:** `useAuthorities()` en `src/hooks/useAuthorities.ts`

**Estructura:**

```json
{
  "id": "1",
  "title": "Presidente",
  "icon": "person",
  "count": 1,
  "colorKey": "president",
  "color": "#FF6B35",
  "order": 1
}
```

**Campos:**

- `id`: Identificador único
- `title`: Nombre del cargo (ej: "Presidente", "Vicepresidentes")
- `icon`: Icono de Ionicons a mostrar
- `count`: Número de personas para ese cargo
- `colorKey`: Clave de color para el tema
- `color`: Color hexadecimal específico
- `order`: Orden de visualización (se ordena automáticamente)

**Ejemplo de agregar una autoridad:**

```json
{
  "authorities": [
    // ... autoridades existentes
    {
      "id": "5",
      "title": "Gobernadores Regionales",
      "icon": "map",
      "count": 26,
      "colorKey": "governor",
      "color": "#9C27B0",
      "order": 5
    }
  ]
}
```

---

### popularCandidates

**Descripción:** Candidatos destacados que se muestran en el home con tarjetas deslizables.

**Componentes donde se usa:**

- `src/views/home/HomeView.tsx`
- `src/components/CandidateCard/index.tsx`

**Hook relacionado:** `usePopularCandidates()` en `src/hooks/useCandidates.ts`

**Estructura:**

```json
{
  "id": "1",
  "name": "Keiko Fujimori",
  "party": "Fuerza Popular",
  "percentage": 25.3,
  "details": "Líder de Fuerza Popular, ex candidata presidencial...",
  "color": "#0033a0",
  "order": 1,
  "experience": "Ex congresista",
  "age": 48,
  "region": "Lima"
}
```

**Campos:**

- `id`: Identificador único
- `name`: Nombre completo del candidato
- `party`: Partido político
- `percentage`: Porcentaje de votos estimado
- `details`: Descripción breve del candidato
- `color`: Color del partido (hexadecimal)
- `order`: Orden de visualización
- `experience`: Experiencia profesional
- `age`: Edad
- `region`: Región de origen

**Ejemplo de agregar un candidato popular:**

```json
{
  "popularCandidates": [
    // ... candidatos existentes
    {
      "id": "6",
      "name": "Martín Vizcarra",
      "party": "Contigo",
      "percentage": 8.5,
      "details": "Ex presidente, ingeniero. Líder del partido Contigo.",
      "color": "#4CAF50",
      "order": 6,
      "experience": "Ex presidente",
      "age": 60,
      "region": "Lima"
    }
  ]
}
```

---

### parties

**Descripción:** Lista completa de partidos políticos con su información visual.

**Componentes donde se usa:**

- `src/views/candidates/components/party/PartyRows.tsx`
- `src/views/candidates/components/party/ThreePartyRow.tsx`
- `src/views/candidates/components/party/FivePartyRow.tsx`

**Hook relacionado:** `useParties()` en `src/hooks/useParties.ts`

**Estructura:**

```json
{
  "id": "1",
  "name": "Fuerza Popular",
  "type": "icon",
  "icon": "FP",
  "color": "#0033a0",
  "row": 1,
  "position": 1
}
```

**Campos:**

- `id`: Identificador único
- `name`: Nombre completo del partido
- `type`: Tipo de visualización ("icon")
- `icon`: Texto a mostrar en el ícono (iniciales)
- `color`: Color del partido (hexadecimal)
- `row`: Número de fila (1-4)
- `position`: Posición dentro de la fila

**Ejemplo de agregar un partido:**

```json
{
  "parties": [
    // ... partidos existentes
    {
      "id": "29",
      "name": "Partido Democrático",
      "type": "icon",
      "icon": "PD",
      "color": "#E91E63",
      "row": 1,
      "position": 9
    }
  ]
}
```

---

### mainCandidates

**Descripción:** Candidatos principales que se muestran en la vista de listado principal de candidatos.

**Componentes donde se usa:**

- `src/views/candidates/components/list/MainCandidates.tsx`

**Hook relacionado:** `useMainCandidates()` en `src/hooks/useParties.ts`

**Estructura:**

```json
{
  "id": "1",
  "name": "Keiko Fujimori",
  "party": "Fuerza Popular",
  "partyId": "1",
  "description": "Líder de Fuerza Popular, ex candidata presidencial...",
  "image": "https://i.pravatar.cc/300?img=63",
  "order": 1
}
```

**Campos:**

- `id`: Identificador único
- `name`: Nombre completo
- `party`: Nombre del partido
- `partyId`: ID del partido (relacionado con `parties`)
- `description`: Descripción breve
- `image`: URL de la imagen del candidato
- `order`: Orden de visualización

**Ejemplo de agregar un candidato principal:**

```json
{
  "mainCandidates": [
    // ... candidatos existentes
    {
      "id": "11",
      "name": "Marco Arana",
      "party": "Frente Amplio",
      "partyId": "10",
      "description": "Sacerdote católico y político peruano...",
      "image": "https://i.pravatar.cc/300?img=58",
      "order": 11
    }
  ]
}
```

---

### candidates

**Descripción:** Información detallada completa de todos los candidatos con biografía, propuestas y timeline.

**Componentes donde se usa:**

- `src/views/candidates/components/detail/CandidateDetailView.tsx`
- `src/views/candidates/components/detail/TabContent.tsx`
- `src/views/candidates/components/detail/TimelineView.tsx`

**Hook relacionado:** `usePartyCandidates(partyName)` en `src/hooks/useParties.ts`

**Estructura completa:**

```json
{
  "id": "1",
  "name": "Keiko Fujimori",
  "party": "Fuerza Popular",
  "partyId": "1",
  "position": "Candidata Presidencial",
  "bio": "Política peruana nacida en Lima en 1975...",
  "proposals": [
    "Implementar el Sistema Nacional de Seguridad...",
    "Crear 1 millón de empleos formales..."
  ],
  "timeline": [
    {
      "year": 2010,
      "title": "Liderazgo en Fuerza Popular",
      "description": "Asume la presidencia del partido..."
    }
  ]
}
```

**Campos:**

- `id`: Identificador único
- `name`: Nombre completo
- `party`: Nombre del partido
- `partyId`: ID del partido
- `position`: Posición actual o cargo
- `bio`: Biografía completa
- `proposals`: Array de propuestas (strings)
- `timeline`: Array de eventos cronológicos
  - `year`: Año del evento
  - `title`: Título del evento
  - `description`: Descripción del evento

**Ejemplo de agregar un candidato completo:**

```json
{
  "candidates": [
    // ... candidatos existentes
    {
      "id": "21",
      "name": "Luis Castañeda",
      "party": "Somos Perú",
      "partyId": "8",
      "position": "Ex Alcalde de Lima",
      "bio": "Médico y político peruano, ex alcalde de Lima...",
      "proposals": [
        "Desarrollo urbano sostenible",
        "Mejora de infraestructura vial",
        "Programa de salud pública"
      ],
      "timeline": [
        {
          "year": 2002,
          "title": "Alcalde de Lima",
          "description": "Elegido alcalde de Lima"
        },
        {
          "year": 2011,
          "title": "Candidatura presidencial",
          "description": "Candidato presidencial por Somos Perú"
        }
      ]
    }
  ]
}
```

---

### electionInfo

**Descripción:** Información sobre las elecciones: fechas, eventos y tarjetas informativas.

**Componentes donde se usa:**

- `src/views/home/HomeView.tsx`

**Hook relacionado:** Se accede directamente con `useStaticData()`

**Estructura:**

```json
{
  "electionInfo": {
    "infoCards": [
      {
        "title": "Que hace un presidente",
        "description": "Etapa en la que los partidos deben inscribirse..."
      }
    ],
    "electionEvents": [
      {
        "title": "Inscripción de candidatos en curso",
        "date": "2026-03-14",
        "color": "#20C6C6",
        "icon": "checkmark-circle-outline",
        "titleIcon": "document-text-outline"
      }
    ],
    "electionDates": {
      "today": "2026-03-21",
      "primeraVuelta": "2026-04-05",
      "segundaVuelta": "2026-05-24",
      "name": "Elecciones generales 2026"
    }
  }
}
```

**Campos:**

- `infoCards`: Tarjetas informativas educativas
  - `title`: Título de la tarjeta
  - `description`: Descripción del contenido
- `electionEvents`: Eventos del proceso electoral
  - `title`: Nombre del evento
  - `date`: Fecha (formato YYYY-MM-DD)
  - `color`: Color del evento
  - `icon`: Icono de Ionicons
  - `titleIcon`: Icono del título
- `electionDates`: Fechas importantes
  - `today`: Fecha actual (simulada)
  - `primeraVuelta`: Fecha de primera vuelta
  - `segundaVuelta`: Fecha de segunda vuelta
  - `name`: Nombre de las elecciones

**Ejemplo de agregar un evento:**

```json
{
  "electionInfo": {
    "electionEvents": [
      // ... eventos existentes
      {
        "title": "Publicación de resultados oficiales",
        "date": "2026-04-15",
        "color": "#4CAF50",
        "icon": "checkmark-circle-outline",
        "titleIcon": "document-check-outline"
      }
    ]
  }
}
```

---

### candidateAnalysis

**Descripción:** Análisis general de candidatos con aspectos positivos y consideraciones.

**Componentes donde se usa:**

- Actualmente no se usa directamente en la UI

**Hook relacionado:** Se accede directamente con `useStaticData()`

**Estructura:**

```json
{
  "candidateAnalysis": {
    "positiveAspects": [
      "Experiencia política sólida",
      "Propuestas específicas y cuantificadas",
      ...
    ],
    "considerations": [
      "Necesidad de mayor experiencia en gestión gubernamental",
      "Desafíos en la implementación de propuestas ambiciosas",
      ...
    ]
  }
}
```

**Campos:**

- `positiveAspects`: Array de aspectos positivos (strings)
- `considerations`: Array de consideraciones o advertencias (strings)

**Ejemplo de actualizar el análisis:**

```json
{
  "candidateAnalysis": {
    "positiveAspects": [
      "Experiencia política sólida",
      "Propuestas específicas y cuantificadas",
      "Conocimiento del sector público y privado",
      "Liderazgo reconocido en su partido político",
      "Compromiso con la transparencia y lucha anticorrupción",
      "Trayectoria de gestión exitosa"
    ],
    "considerations": [
      "Necesidad de mayor experiencia en gestión gubernamental",
      "Desafíos en la implementación de propuestas ambiciosas",
      "Requiere consenso político para reformas estructurales",
      "Presupuesto limitado para todas las propuestas",
      "Dependencia de factores externos (economía global, pandemia)",
      "Desafíos en la coordinación con poderes del Estado"
    ]
  }
}
```

---

## Ejemplos de Agregar Datos

### Ejemplo 1: Agregar un nuevo partido político

```json
{
  "id": "30",
  "name": "Partido Verde del Perú",
  "type": "icon",
  "icon": "PV",
  "color": "#388E3C",
  "row": 2,
  "position": 7
}
```

**Ubicación:** Array `parties` en `src/data/staticData.json`

---

### Ejemplo 2: Agregar un candidato completo con timeline

```json
{
  "id": "22",
  "name": "Ana Jara",
  "party": "Perú Posible",
  "partyId": "19",
  "position": "Ex Primera Ministra",
  "bio": "Abogada y política peruana con amplia experiencia en gestión pública. Ex primera ministra durante el gobierno de Ollanta Humala.",
  "proposals": [
    "Reforma del sistema de justicia",
    "Fortalecimiento de las instituciones",
    "Desarrollo económico sostenible",
    "Protección de derechos humanos"
  ],
  "timeline": [
    {
      "year": 2010,
      "title": "Elección como Congresista",
      "description": "Elegida congresista por Ica"
    },
    {
      "year": 2014,
      "title": "Primera Ministra",
      "description": "Designada primera ministra por Ollanta Humala"
    },
    {
      "year": 2021,
      "title": "Candidatura presidencial",
      "description": "Candidata a la presidencia por Perú Posible"
    }
  ]
}
```

**Ubicación:** Array `candidates` en `src/data/staticData.json`

---

### Ejemplo 3: Actualizar fechas de elección

```json
{
  "electionDates": {
    "today": "2026-05-01",
    "primeraVuelta": "2026-06-10",
    "segundaVuelta": "2026-07-28",
    "name": "Elecciones generales 2026"
  }
}
```

**Ubicación:** Objeto `electionInfo.electionDates` en `src/data/staticData.json`

---

## Notas Importantes

1. **IDs únicos:** Todos los IDs deben ser únicos dentro de su respectivo array
2. **Orden:** Los campos `order` determinan el orden de visualización (menor a mayor)
3. **Relaciones:** Los campos `partyId` deben coincidir con un `id` existente en el array `parties`
4. **Formato de fechas:** Usar formato ISO 8601 (YYYY-MM-DD) para las fechas
5. **Colores:** Usar formato hexadecimal (#RRGGBB) para todos los colores
6. **Iconos:** Los iconos deben ser nombres válidos de Ionicons

---

## Hooks Disponibles

Para acceder a estos datos en los componentes:

```typescript
import {
  useStaticData,
  useAuthorities,
  usePopularCandidates,
  useMainCandidates,
  useParties,
  usePartyCandidates,
} from "@/hooks";

// Acceso directo a todos los datos
const { data } = useStaticData();

// Autoridades (ordenadas por 'order')
const { authorities, loading } = useAuthorities();

// Candidatos populares (ordenados por 'order')
const { candidates, loading } = usePopularCandidates();

// Candidatos principales (ordenados por 'order')
const { mainCandidates, loading } = useMainCandidates();

// Partidos políticos agrupados por fila
const {
  allParties,
  partiesByRow,
  firstRowParties,
  secondRowParties,
  thirdRowParties,
  fourthRowParties,
} = useParties();

// Candidatos filtrados por partido
const { candidates } = usePartyCandidates("Fuerza Popular");
```

---

## Mantenimiento

Para mantener la integridad de los datos:

1. **Validar JSON:** Usa un validador JSON antes de guardar cambios
2. **IDs consecutivos:** Mantén los IDs consecutivos y únicos
3. **Consistencia:** Asegúrate de que los `partyId` coincidan con IDs existentes
4. **Fechas:** Actualiza las fechas según el calendario electoral real
5. **Testing:** Prueba los cambios en desarrollo antes de producción
