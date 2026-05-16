// src/shared/constants/theme.ts
export const ALGO_THEME = {
  data: {
    // Fondo profundo para Canvas / WebGL
    background: "#050816",

    // Color base para barras en estado normal
    default: "#38bdf8",

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
    surface: "#0b1020",
    surfaceHover: "#111827",
    border: "#27314a",
    textPrimary: "#f8fafc",
    textSecondary: "#a1a8b8",
    accent: "#8b5cf6",
  },

  engine: {
    glowIntensity: 1.35,
    bloomThreshold: 0.85,
    gridColor: "#27314a",
  },
} as const;

export type AlgoTheme = typeof ALGO_THEME;