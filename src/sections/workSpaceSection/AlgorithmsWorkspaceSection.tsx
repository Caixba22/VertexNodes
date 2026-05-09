import { CATALOG_CATEGORIES } from "../../shared/constants/catalogCategories";
import { CATALOG_ITEMS } from "../../shared/constants/catalogItems";
import { useCatalogSelectionStore } from "../../store/useCatalogSelectionStore";

export const AlgorithmsWorkspaceSection = () => {
  const selectedItemId = useCatalogSelectionStore(
    (state) => state.selectedItemId,
  );
  const selectItem = useCatalogSelectionStore((state) => state.selectItem);

  const algorithmItems = CATALOG_ITEMS.filter(
    (item) => item.type === "algorithm",
  );

  const availableCategories = CATALOG_CATEGORIES.filter((category) =>
    algorithmItems.some((item) => item.categoryId === category.id),
  ).sort((a, b) => a.order - b.order);

  const selectedItem = algorithmItems.find((item) => item.id === selectedItemId);

  return (
    <section className="w-full px-6 pb-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-algo-border bg-surface p-8 shadow-2xl">
        <div className="mb-8 border-b border-algo-border pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-data-comparing">
            Algorithms Workspace
          </p>

          <h2 className="mt-2 text-3xl font-black text-text-primary">
            Algoritmos
          </h2>

          <p className="mt-3 max-w-2xl text-text-secondary">
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
              onChange={(event) => selectItem(event.target.value)}
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
            <div className="mt-4 rounded-2xl border border-algo-border bg-data-background/60 p-5">
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

        <div className="mt-8 aspect-video overflow-hidden rounded-[2rem] border border-algo-border bg-data-background">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <div>
              <p className="text-4xl font-black uppercase tracking-tighter text-text-primary/10 md:text-6xl">
                {selectedItem?.name ?? "Selecciona un algoritmo"}
              </p>

              {selectedItem && (
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
                  {selectedItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};