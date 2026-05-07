import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useStore } from '../store/useStore'; // 👈 El 3D también importa el cerebro

// 1. Extraemos el cubo a su propia "Malla Inteligente"
function VehicleModel() {
  // El cubo se suscribe a la variable isRunning
  const isRunning = useStore((state) => state.isRunning);

  return (
    // Si está corriendo, lo elevamos a Y=1. Si no, baja a Y=0.5
    <mesh position={[0, isRunning ? 1 : 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Cambiamos el color de la pintura dependiendo del estado */}
      <meshStandardMaterial color={isRunning ? "#00ffcc" : "#ff3366"} />
    </mesh>
  );
}

export default function CampusScene() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Grid infiniteGrid fadeDistance={40} sectionColor="#00e5ff" cellColor="#1a1a2e" />

      {/* 2. Inyectamos nuestro cubo inteligente aquí */}
      <VehicleModel />

    </Canvas>
  );
}