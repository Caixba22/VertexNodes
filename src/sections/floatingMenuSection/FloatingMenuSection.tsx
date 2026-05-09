import { useState } from "react";
import type { CatalogDomainId } from "../../shared/types/catalog.types";
import { useCatalogSelectionStore } from "../../store/useCatalogSelectionStore";

type FloatingMenuItem = {
  id: CatalogDomainId;
  label: string;
  description: string;
  accent: "active" | "comparing";
};

const FLOATING_MENU_ITEMS: FloatingMenuItem[] = [
  {
    id: "data-structures",
    label: "Estructuras de datos",
    description: "Visualizar memoria, nodos, árboles y grafos.",
    accent: "active",
  },
  {
    id: "algorithms",
    label: "Algoritmos",
    description: "Visualizar ordenamientos y procesos paso a paso.",
    accent: "comparing",
  },
];

const getAccentClassName = (accent: FloatingMenuItem["accent"]) => {
  const classes: Record<FloatingMenuItem["accent"], string> = {
    active: "bg-data-active",
    comparing: "bg-data-comparing",
  };

  return classes[accent];
};

export const FloatingMenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeDomainId = useCatalogSelectionStore(
    (state) => state.activeDomainId,
  );
  const selectDomain = useCatalogSelectionStore((state) => state.selectDomain);

  const handleSelectDomain = (domainId: CatalogDomainId) => {
    selectDomain(domainId);

    document.getElementById("workspace")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  return (
    <aside className="fixed left-4 right-4 top-24 z-50 pointer-events-auto sm:left-auto sm:right-6 sm:w-80">
      <div className="overflow-hidden rounded-3xl border border-algo-border bg-surface/80 shadow-2xl backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-surface-hover/80"
          aria-expanded={isOpen}
          aria-controls="floating-domain-panel"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-data-active/15 text-algo-accent ring-1 ring-data-active/30">
              ⬡
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                Tipo de visualización
              </p>
              <p className="text-xs text-text-secondary">
                Elige el laboratorio activo
              </p>
            </div>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface-hover text-lg font-black text-algo-accent">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {isOpen && (
          <nav
            id="floating-domain-panel"
            className="border-t border-algo-border p-3"
          >
            <ul className="flex flex-col gap-2">
              {FLOATING_MENU_ITEMS.map((item) => {
                const isActive = activeDomainId === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectDomain(item.id)}
                      className={[
                        "group w-full rounded-2xl border px-4 py-3 text-left transition",
                        isActive
                          ? "border-data-active bg-data-active/15"
                          : "border-transparent hover:border-algo-border hover:bg-surface-hover",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1 h-2.5 w-2.5 rounded-full ${getAccentClassName(
                            item.accent,
                          )}`}
                        />

                        <div>
                          <p className="text-sm font-semibold text-text-primary transition group-hover:text-algo-accent">
                            {item.label}
                          </p>
                          <p className="text-xs leading-relaxed text-text-secondary">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
};