// Ruta:
// src/store/useAlgoRuntimeStore.ts

/**
 * useAlgoRuntimeStore
 *
 * Store global de Zustand para controlar la ejecución de algoritmos.
 *
 * Responsabilidades:
 * - Guardar estado ligero de reproducción.
 * - Controlar play, pause, reset, finish y velocidad.
 * - No guardar arreglos grandes ni datos mutables del canvas.
 *
 * Lo usan:
 * - PlaybackControls para cambiar el estado.
 * - useSortingRunner para leer el estado y ejecutar el algoritmo.
 */

import { create } from "zustand";

import type { RuntimeStatus } from "../shared/types/runtime.types";

interface AlgoRuntimeState {
  status: RuntimeStatus;
  speed: number;

  play: () => void;
  pause: () => void;
  reset: () => void;
  finish: () => void;
  setSpeed: (speed: number) => void;
}

export const useAlgoRuntimeStore = create<AlgoRuntimeState>((set) => ({
  status: "idle",
  speed: 1,

  play: () =>
    set((state) => ({
      status: state.status === "finished" ? "finished" : "running",
    })),

  pause: () =>
    set((state) => ({
      status: state.status === "running" ? "paused" : state.status,
    })),

  reset: () =>
    set({
      status: "idle",
    }),

  finish: () =>
    set({
      status: "finished",
    }),

  setSpeed: (speed) =>
    set({
      speed: Math.min(8, Math.max(1, speed)),
    }),
}));