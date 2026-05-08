import { Canvas } from "@react-three/fiber";
import { SortingScene } from "../scenes/SortingScene";

export default function SimulatorPage() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#050505", position: "relative" }}>
      {/* 1. MUNDO 3D */}
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <color attach="background" args={["#050505"]} />
        <SortingScene />
      </Canvas>
      
      {/* 2. INTERFAZ DE USUARIO (HTML) */}
      <div style={{ 
        position: "absolute", 
        top: 40, 
        left: 40, 
        color: "white", 
        fontFamily: "sans-serif",
        pointerEvents: "none" // Para que no bloquee el click al 3D
      }}>
        <h1 style={{ margin: 0, letterSpacing: "2px", fontSize: "14px", opacity: 0.5 }}>PROJECT:</h1>
        <h2 style={{ margin: 0, fontSize: "32px", fontWeight: "bold" }}>VERTEX_NODES</h2>
        <p style={{ opacity: 0.7 }}>Visualizador de Algoritmos v1.0</p>
      </div>
    </div>
  );
}