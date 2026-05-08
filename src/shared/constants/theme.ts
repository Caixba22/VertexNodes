// src/shared/styles/theme.ts
export const ALGO_THEME = {
  // Capa 1: Lógica del Algoritmo (Lo que vive en el Canvas 3D)
  data: {
    background: '#020617',
    default: '#94a3b8',
    active: '#6366f1',    // Indigo-500
    comparing: '#fbbf24', // Amber-400
    sorted: '#10b981',    // Emerald-500
    critical: '#f43f5e',   // Rose-500 (Pivotes/Raíces)
  },

  // Capa 2: Interfaz de Usuario (DOM/Tailwind)
  ui: {
    surface: '#0f172a',      // Slate-900 (Fondo de Cards)
    surfaceHover: '#1e293b', // Slate-800
    border: '#1e293b',       // Para líneas de separación
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    accent: '#6366f1',       // El color de marca
  },

  // Capa 3: Configuración del Motor R3F
  engine: {
    glowIntensity: 1.5,
    bloomThreshold: 0.9,     // Controla qué tanto brillan los colores active/critical
    gridColor: '#1e293b',    // Color de la malla de referencia en el suelo 3D
  }
} as const;