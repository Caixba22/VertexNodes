// Ruta:
// src/features/algorithms/sorting/logic/bubbleSort.ts

/**
 * bubbleSortGenerator
 *
 * Lógica pura de Bubble Sort.
 * No usa React, Three.js ni Zustand.
 * Solo emite pasos para que el runner los visualice.
 */

import type { AlgoStep } from "../../../../shared/types/runtime.types";

export function* bubbleSortGenerator(
  array: number[],
): Generator<AlgoStep, void, unknown> {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      yield {
        type: "comparing",
        activeIndices: [j, j + 1],
      };

      if (array[j] > array[j + 1]) {
        const temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;

        yield {
          type: "active",
          activeIndices: [j, j + 1],
        };
      }
    }

    yield {
      type: "sorted",
      activeIndices: [n - 1 - i],
    };

    if (!swapped) break;
  }

  yield {
    type: "sorted",
    activeIndices: Array.from({ length: n }, (_, index) => index),
  };
}