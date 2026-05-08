import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DataBarProps {
  index: number;
  value: number;       // La altura de la barra
  total: number;       // Para calcular la posición X
  status?: 'default' | 'active' | 'sorted' | 'comparing';
}

export const DataBar = ({ index, value, total, status = 'default' }: DataBarProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Definimos colores según el estado
  const colors = {
    default: "#4444ff",    // Azul Vertex
    active: "#ff0055",     // Rosa/Rojo para el que se mueve
    comparing: "#ffff00",  // Amarillo para comparaciones
    sorted: "#00ff88"      // Verde para finalizados
  };

  return (
    <mesh 
      ref={meshRef} 
      // Posicionamos: X basada en índice, Y basada en la mitad de su altura 
      // para que "nazca" desde el suelo.
      position={[(index - total / 2) * 1.2, value / 2, 0]}
    >
      <boxGeometry args={[1, value, 1]} />
      <meshStandardMaterial 
        color={colors[status]} 
        emissive={status !== 'default' ? colors[status] : "black"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};