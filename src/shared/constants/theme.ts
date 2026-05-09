// src/shared/styles/theme.ts
export const ALGO_THEME = {
  data: {
    // Fondo profundo para Canvas / WebGL
    background: "#050816",

    // Color neutro para nodos o barras en estado normal
    default: "#9ca3af",

    // Estado activo: violeta elegante
    active: "#8b5cf6",

    // Estado comparando: dorado suave
    comparing: "#f59e0b",

    // Estado ordenado: verde-teal profesional
    sorted: "#14b8a6",

    // Estado crítico: rosa/rojo controlado
    critical: "#fb7185",
  },

  ui: {
    // Superficies oscuras elegantes
    surface: "#0b1020",
    surfaceHover: "#111827",

    // Bordes más visibles pero sobrios
    border: "#27314a",

    // Texto principal y secundario
    textPrimary: "#f8fafc",
    textSecondary: "#a1a8b8",

    // Acento principal de marca
    accent: "#8b5cf6",
  },

  engine: {
    // Más brillo, pero sin verse exagerado
    glowIntensity: 1.35,

    // Bloom más controlado para que no se vea infantil/neón
    bloomThreshold: 0.85,

    // Malla 3D más sobria
    gridColor: "#27314a",
  },
} as const;

export type AlgoTheme = typeof ALGO_THEME;