// Ruta:
// src/shared/components/ui/PlaybackControls.tsx

/**
 * PlaybackControls
 *
 * Controles visuales de reproducción.
 *
 * Responsabilidades:
 * - Iniciar, pausar y reiniciar el runtime.
 * - Cambiar la velocidad de ejecución.
 * - Mostrar el estado actual del algoritmo.
 *
 * Este componente NO ejecuta el algoritmo.
 * Solo modifica useAlgoRuntimeStore.
 */

import { useAlgoRuntimeStore } from "../../../store/useAlgoRuntimeStore";

export const PlaybackControls = () => {
  const status = useAlgoRuntimeStore((state) => state.status);
  const speed = useAlgoRuntimeStore((state) => state.speed);
  const play = useAlgoRuntimeStore((state) => state.play);
  const pause = useAlgoRuntimeStore((state) => state.pause);
  const reset = useAlgoRuntimeStore((state) => state.reset);
  const setSpeed = useAlgoRuntimeStore((state) => state.setSpeed);

  const isRunning = status === "running";
  const isFinished = status === "finished";

  return (
    <div className="flex items-center gap-4">
      {/* Botón Play / Pause */}
      <button
        type="button"
        onClick={isRunning ? pause : play}
        disabled={isFinished}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-algo-accent text-white shadow-lg transition hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={isRunning ? "Pausar algoritmo" : "Iniciar algoritmo"}
      >
        <span className="text-xl font-black">
          {isRunning ? "⏸" : "▶"}
        </span>
      </button>

      {/* Botón Reset */}
      <button
        type="button"
        onClick={reset}
        disabled={status === "idle"}
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-algo-border bg-surface-hover text-text-secondary transition hover:text-text-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Reiniciar algoritmo"
      >
        <span className="text-xl font-black">⟲</span>
      </button>

      <div className="mx-2 h-8 w-px bg-algo-border" />

      {/* Control de velocidad */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="speed-slider"
          className="text-xs font-bold text-text-secondary"
        >
          Velocidad: {speed}x
        </label>

        <input
          id="speed-slider"
          type="range"
          min="1"
          max="8"
          step="1"
          value={speed}
          onChange={(event) => setSpeed(Number(event.target.value))}
          className="w-32 cursor-pointer accent-algo-accent"
        />
      </div>

      {/* Indicador de estado */}
      <div className="ml-auto flex items-center gap-2 rounded-lg border border-algo-border bg-surface px-3 py-1.5">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            status === "running"
              ? "bg-data-active animate-pulse"
              : status === "paused"
                ? "bg-data-comparing"
                : status === "finished"
                  ? "bg-data-sorted"
                  : "bg-text-secondary"
          }`}
        />

        <span className="text-xs font-bold uppercase tracking-wider text-text-primary">
          {status}
        </span>
      </div>
    </div>
  );
};