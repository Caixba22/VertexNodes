// Ruta:
// src/store/useCatalogSelectionStore.ts

/**
 * useCatalogSelectionStore
 *
 * Store global de Zustand para controlar la selección del catálogo.
 *
 * Responsabilidades:
 * - Saber si el usuario eligió "algoritmos" o "estructuras de datos".
 * - Saber qué elemento concreto está seleccionado.
 * - Actuar como router visual del workspace.
 *
 * Este store NO ejecuta algoritmos.
 * Este store NO guarda datos 3D.
 * Este store NO guarda arreglos masivos.
 */

import { create } from "zustand";

import type { CatalogDomainId } from "../shared/types/catalog.types";

interface CatalogSelectionState {
  activeDomainId: CatalogDomainId | null;
  selectedItemId: string | null;

  selectDomain: (domainId: CatalogDomainId) => void;
  selectItem: (itemId: string) => void;
  clearSelection: () => void;
}

export const useCatalogSelectionStore = create<CatalogSelectionState>((set) => ({
  activeDomainId: null,
  selectedItemId: null,

  selectDomain: (domainId) =>
    set({
      activeDomainId: domainId,
      selectedItemId: null,
    }),

  selectItem: (itemId) =>
    set({
      selectedItemId: itemId,
    }),

  clearSelection: () =>
    set({
      activeDomainId: null,
      selectedItemId: null,
    }),
}));