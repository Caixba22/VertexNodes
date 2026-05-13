// Ruta:
// src/shared/types/runtime.types.ts

/**
 * Tipos de orquestación asíncrona para VertexNodes.
 *
 * Este archivo define el idioma común entre:
 * - Algoritmos puros, por ejemplo bubbleSortGenerator.
 * - Runners, por ejemplo useSortingRunner.
 * - Stores de ejecución, por ejemplo useAlgoRuntimeStore.
 *
 * Importante:
 * El algoritmo NO manda todo el arreglo en cada frame.
 * Solo manda el tipo de acción y los índices afectados.
 */

/**
 * Estado global del runtime.
 *
 * idle     → sin iniciar o reiniciado
 * running  → ejecutándose
 * paused   → pausado
 * finished → terminado
 */
export type RuntimeStatus = "idle" | "running" | "paused" | "finished";

/**
 * Acciones que puede emitir un algoritmo.
 *
 * comparing → comparando elementos
 * active    → acción principal, por ejemplo intercambio
 * sorted    → elemento confirmado como ordenado
 * critical  → estado especial de alerta, útil para futuras visualizaciones
 */
export type AlgoStepType = "comparing" | "active" | "sorted" | "critical";

/**
 * Estado visual de un elemento.
 *
 * default se usa para pintar el estado base,
 * pero normalmente NO lo emite el algoritmo como paso.
 */
export type VisualElementStatus = AlgoStepType | "default";

export interface AlgoStep {
  /**
   * Tipo de acción que ocurre en este checkpoint.
   */
  type: AlgoStepType;

  /**
   * Índices afectados por este paso.
   */
  activeIndices: number[];
}