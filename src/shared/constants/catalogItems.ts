// Ruta:
// src/shared/constants/catalogItems.ts

import type { CatalogItem } from "../types/catalog.types";

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "bubble-sort",
    name: "Bubble Sort",
    type: "algorithm",
    categoryId: "sorting-basics",
    description: "Ordenamiento por comparación adyacente.",
    complexity: "O(n²)",
    tags: ["ordenamiento", "comparación"],
  },
];

/**
 * Próximos elementos a implementar:
 *
 * Estructuras de datos:
 * - array
 * - stack
 * - queue
 * - linked-list
 * - binary-search-tree
 * - heap
 * - graph-basic
 *
 * Algoritmos:
 * - insertion-sort
 * - quick-sort
 * - merge-sort
 * - heap-sort
 * - counting-sort
 */