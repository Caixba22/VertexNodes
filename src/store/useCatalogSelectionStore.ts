import { create } from "zustand";
import type { CatalogDomainId } from "../shared/types/catalog.types";

type CatalogSelectionState = {
  activeDomainId: CatalogDomainId | null;
  selectedItemId: string | null;
  selectDomain: (domainId: CatalogDomainId) => void;
  selectItem: (itemId: string) => void;
  clearSelection: () => void;
};

export const useCatalogSelectionStore = create<CatalogSelectionState>((set) => ({
  activeDomainId: null,
  selectedItemId: null,

  selectDomain: (domainId) => {
    set({
      activeDomainId: domainId,
      selectedItemId: null,
    });
  },

  selectItem: (itemId) => {
    set({ selectedItemId: itemId });
  },

  clearSelection: () => {
    set({
      activeDomainId: null,
      selectedItemId: null,
    });
  },
}));