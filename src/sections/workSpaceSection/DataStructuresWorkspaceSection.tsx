import { CATALOG_CATEGORIES } from "../../shared/constants/catalogCategories";
import { CATALOG_ITEMS } from "../../shared/constants/catalogItems";
import { useCatalogSelectionStore } from "../../store/useCatalogSelectionStore";

export const DataStructuresWorkspaceSection = () => {
  const selectedItemId = useCatalogSelectionStore(
    (state) => state.selectedItemId,
  );
  const selectItem = useCatalogSelectionStore((state) => state.selectItem);

  const dataStructureItems = CATALOG_ITEMS.filter(
    (item) => item.type === "data-structure",
  );

  const availableCategories = CATALOG_CATEGORIES.filter((category) =>
    dataStructureItems.some((item) => item.categoryId === category.id),
  ).sort((a, b) => a.order - b.order);

  const selectedItem = dataStructureItems.find(
    (item) => item.id === selectedItemId,
  );

  return (
    <section className="w-full px-6 pb-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-algo-border bg-surface p-8 shadow-2xl">
        <div className="mb-8 border-b border-algo-border pb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-data-comparing">
            Data Structures Workspace
          </p>

          <h2 className="mt-2 text-3xl font-black text-text-primary">
            Estructuras de datos
          </h2>

          <p className="mt-3 max-w-2xl text-text-secondary">
            Selecciona una estructura para visualizar su comportamiento en el
            espacio 3D.
          </p>
        </div>

        <div className="max-w-xl">
          <label
            htmlFor="data-structure-select"
            className="mb-3 block text-sm font-bold text-text-primary"
          >
            Tipo de estructura
          </label>

          <div className="relative">
            <select
              id="data-structure-select"
              value={selectedItemId ?? ""}
              onChange={(event) => selectItem(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-algo-border bg-data-background px-5 py-4 pr-12 text-sm font-semibold text-text-primary outline-none transition hover:bg-surface-hover focus:border-data-active"
            >
              <option value="" disabled>
                Selecciona una estructura
              </option>

              {availableCategories.map((category) => {
                const categoryItems = dataStructureItems.filter(
                  (item) => item.categoryId === category.id,
                );

                return (
                  <optgroup key={category.id} label={category.title}>
                    {categoryItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
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
              <h3 className="font-bold text-text-primary">
                {selectedItem.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {selectedItem.description}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 aspect-video overflow-hidden rounded-[2rem] border border-algo-border bg-data-background">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <div>
              <p className="text-4xl font-black uppercase tracking-tighter text-text-primary/10 md:text-6xl">
                {selectedItem?.name ?? "Selecciona una estructura"}
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