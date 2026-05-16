// Ruta:
// src/sections/workSpaceSection/AlgorithmsWorkspaceSection.tsx

/**
 * AlgorithmsWorkspaceSection
 *
 * Workspace visual para algoritmos.
 *
 * Responsabilidades:
 * - Mostrar el selector de algoritmos disponibles.
 * - Detectar qué algoritmo eligió el usuario desde el catálogo.
 * - Montar la escena 3D correspondiente dentro de Canvas.
 * - Mostrar controles de reproducción para ejecutar/pausar/resetear.
 *
 * Conexión:
 * selectItem() cambia selectedItemId.
 * Si selectedItemId === "bubble-sort", se monta SortingScene.
 * SortingScene usa useSortingRunner.
 * useSortingRunner ejecuta bubbleSortGenerator.
 */

import { Canvas } from "@react-three/fiber";

import { CATALOG_CATEGORIES } from "../../shared/constants/catalogCategories";
import { CATALOG_ITEMS } from "../../shared/constants/catalogItems";
import { PlaybackControls } from "../../shared/components/ui/PlaybackControls";

import { useCatalogSelectionStore } from "../../store/useCatalogSelectionStore";
import { useAlgoRuntimeStore } from "../../store/useAlgoRuntimeStore";

import { SortingScene } from "../../features/algorithms/sorting/scene/SortingScene";
import type { DataElement } from "../../features/algorithms/sorting/components/SortingBars";

/**
 * Cantidad inicial de barras para Bubble Sort.
 *
 * Si quieres más barras, cambia este número.
 * Recomendado:
 * - 16 a 24 para visualización clara.
 * - 32 o más si ajustas cámara y spacing.
 */
const BUBBLE_SORT_BAR_COUNT = 24;

/**
 * Genera un arreglo del 1 al tamaño indicado
 * y lo revuelve usando Fisher-Yates.
 */
const createShuffledArray = (size: number): number[] => {
  const values = Array.from({ length: size }, (_, index) => index + 1);

  for (let index = values.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [values[index], values[randomIndex]] = [
      values[randomIndex],
      values[index],
    ];
  }

  return values;
};

/**
 * Arreglo inicial aleatorio para Bubble Sort.
 *
 * Cada número representa la altura de una barra.
 */
const BUBBLE_SORT_INITIAL_ARRAY = createShuffledArray(BUBBLE_SORT_BAR_COUNT);

const bubbleSortData: DataElement[] = BUBBLE_SORT_INITIAL_ARRAY.map((value) => ({
  value,
}));

export const AlgorithmsWorkspaceSection = () => {
  const selectedItemId = useCatalogSelectionStore(
    (state) => state.selectedItemId,
  );

  const selectItem = useCatalogSelectionStore((state) => state.selectItem);
  const resetRuntime = useAlgoRuntimeStore((state) => state.reset);

  const algorithmItems = CATALOG_ITEMS.filter(
    (item) => item.type === "algorithm",
  );

  const availableCategories = CATALOG_CATEGORIES.filter((category) =>
    algorithmItems.some((item) => item.categoryId === category.id),
  ).sort((a, b) => a.order - b.order);

  const selectedItem = algorithmItems.find((item) => item.id === selectedItemId);

  const handleSelectAlgorithm = (itemId: string) => {
    /**
     * Cada vez que se cambia de algoritmo, se reinicia el runtime.
     * Así evitamos que quede corriendo un algoritmo anterior.
     */
    resetRuntime();
    selectItem(itemId);
  };

  const renderSelectedAlgorithmScene = () => {
    if (!selectedItem) {
      return (
        <div className="flex h-full items-center justify-center px-6 text-center">
          <p className="text-3xl font-black uppercase tracking-tighter text-text-primary/10 sm:text-4xl md:text-6xl">
            Selecciona un algoritmo
          </p>
        </div>
      );
    }

    /**
     * IMPORTANTE:
     * Este id debe coincidir exactamente con el id definido en catalogItems.ts.
     */
    if (selectedItem.id === "bubble-sort") {
      return (
        <div className="flex h-full w-full flex-col">
          <div className="border-b border-algo-border bg-surface/80 p-3 sm:p-4">
            <PlaybackControls />
          </div>

          <div className="min-h-0 flex-1">
            <Canvas className="h-full w-full">
              <SortingScene
                data={bubbleSortData}
                rawArray={BUBBLE_SORT_INITIAL_ARRAY}
              />
            </Canvas>
          </div>
        </div>
      );
    }

    return (
      <div className="flex h-full items-center justify-center px-6 text-center">
        <div>
          <p className="text-3xl font-black uppercase tracking-tighter text-text-primary/10 sm:text-4xl md:text-6xl">
            {selectedItem.name}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
            Este algoritmo está en el catálogo, pero todavía no tiene escena 3D
            conectada.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full px-3 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-algo-border bg-surface p-4 shadow-2xl sm:rounded-[2.5rem] sm:p-8">
        <div className="mb-6 border-b border-algo-border pb-6 sm:mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-data-comparing">
            Algorithms Workspace
          </p>

          <h2 className="mt-2 text-2xl font-black text-text-primary sm:text-3xl">
            Algoritmos
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
            Selecciona un algoritmo para visualizar su ejecución paso a paso.
          </p>
        </div>

        <div className="max-w-xl">
          <label
            htmlFor="algorithm-select"
            className="mb-3 block text-sm font-bold text-text-primary"
          >
            Tipo de algoritmo
          </label>

          <div className="relative">
            <select
              id="algorithm-select"
              value={selectedItemId ?? ""}
              onChange={(event) => handleSelectAlgorithm(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-algo-border bg-data-background px-5 py-4 pr-12 text-sm font-semibold text-text-primary outline-none transition hover:bg-surface-hover focus:border-data-active"
            >
              <option value="" disabled>
                Selecciona un algoritmo
              </option>

              {availableCategories.map((category) => {
                const categoryItems = algorithmItems.filter(
                  (item) => item.categoryId === category.id,
                );

                return (
                  <optgroup key={category.id} label={category.title}>
                    {categoryItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                        {item.complexity ? ` · ${item.complexity}` : ""}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>

            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-algo-accent">
              ▼
            </span>
          </div>

          {selectedItem && (
            <div className="mt-4 rounded-2xl border border-algo-border bg-data-background/60 p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-text-primary">
                    {selectedItem.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {selectedItem.description}
                  </p>
                </div>

                {selectedItem.complexity && (
                  <span className="rounded-full border border-algo-border bg-surface px-3 py-1 font-mono text-[10px] text-text-secondary">
                    {selectedItem.complexity}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 h-[520px] overflow-hidden rounded-[1.5rem] border border-algo-border bg-data-background sm:h-[560px] sm:rounded-[2rem] md:aspect-video md:h-auto">
          {renderSelectedAlgorithmScene()}
        </div>
      </div>
    </section>
  );
};