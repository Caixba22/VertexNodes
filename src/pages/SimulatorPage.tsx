import MainLayout from '../layouts/MainLayout';
import CampusScene from '../scenes/CampusScene';
import { useStore } from '../store/useStore'; // 👈 Importamos nuestro cerebro

export default function SimulatorPage() {
  // Conectamos las variables y acciones de Zustand a esta pantalla
  const battery = useStore((state) => state.battery);
  const isRunning = useStore((state) => state.isRunning);
  const toggleSimulation = useStore((state) => state.toggleSimulation);
  const consumeBattery = useStore((state) => state.consumeBattery);

  return (
    <MainLayout 
      uiPanel={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h2 style={{ color: '#00e5ff', margin: 0 }}>TELEMETRÍA</h2>
          
          {/* Mostramos los datos en vivo */}
          <div style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '24px' }}>🔋 Batería: <strong>{battery}%</strong></p>
            <p style={{ margin: 0 }}>Estado: {isRunning ? '🟢 En ruta' : '🔴 Detenido'}</p>
          </div>

          {/* Botones que envían órdenes a Zustand */}
          <button 
            onClick={toggleSimulation}
            style={{ padding: '12px', background: isRunning ? '#ff3366' : '#00e5ff', color: '#000', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {isRunning ? 'Pausar Simulación' : 'Iniciar Simulación'}
          </button>

          <button 
            onClick={() => consumeBattery(10)}
            style={{ padding: '12px', background: 'transparent', color: '#00e5ff', border: '1px solid #00e5ff', cursor: 'pointer' }}
          >
            Gastar 10% de Energía
          </button>
        </div>
      }
      mapArea={
        <CampusScene />
      }
    />
  );
}