import { create } from 'zustand';

// 1. EL CONTRATO: Definimos qué datos existirán en nuestro tablero
interface SimulatorState {
  // Variables
  battery: number;
  isRunning: boolean;
  
  // Acciones
  toggleSimulation: () => void;
  consumeBattery: (amount: number) => void;
}

// 2. LA CREACIÓN: Inicializamos el tablero con valores por defecto
export const useStore = create<SimulatorState>((set) => ({
  
  // Valores iniciales cuando carga la página
  battery: 100,
  isRunning: false,

  // Acción para prender/apagar el simulador
  toggleSimulation: () => set((state) => ({ 
    isRunning: !state.isRunning 
  })),

  // Acción para restar batería (asegurando que no baje de cero)
  consumeBattery: (amount) => set((state) => ({ 
    battery: Math.max(0, state.battery - amount) 
  })),

}));