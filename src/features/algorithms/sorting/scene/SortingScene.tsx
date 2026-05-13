// Ruta:
// src/features/algorithms/sorting/scene/SortingScene.tsx

/**
 * SortingScene
 *
 * Escena 3D de ordenamientos.
 * Monta cámara, controles, luces y las barras instanciadas.
 */

import { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import {
  SortingBars,
  type DataElement,
} from "../components/SortingBars";

import { useSortingRunner } from "../runtime/useSortingRunner";

interface SortingSceneProps {
  data: DataElement[];
  rawArray: number[];
}

export const SortingScene = ({ data, rawArray }: SortingSceneProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useSortingRunner(meshRef, rawArray);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 13]} fov={34} />

      <OrbitControls makeDefault enableDamping />

      <ambientLight intensity={0.7} />
      <pointLight position={[8, 8, 8]} intensity={80} />

      <SortingBars ref={meshRef} data={data} />
    </>
  );
};