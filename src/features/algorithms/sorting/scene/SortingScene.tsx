// Ruta:
// src/features/algorithms/sorting/scene/SortingScene.tsx

/**
 * SortingScene
 *
 * Escena 3D de ordenamientos.
 * Monta cámara, controles, luces y las barras instanciadas.
 *
 * Ajuste responsivo:
 * - En escritorio la cámara queda más cerca.
 * - En móvil la cámara se aleja para que entren mejor las barras.
 */

import { useMemo, useRef } from "react";
import { useThree } from "@react-three/fiber";
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

  const canvasWidth = useThree((state) => state.size.width);

  const isMobile = canvasWidth < 640;

  const cameraPosition = useMemo<[number, number, number]>(
    () => (isMobile ? [0, 3.4, 50] : [0, 3.2, 18]),
    [isMobile],
  );

  const cameraTarget = useMemo(() => new THREE.Vector3(0, 3, 0), []);

  const cameraFov = isMobile ? 52 : 46;

  useSortingRunner(meshRef, rawArray);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        fov={cameraFov}
      />

      <OrbitControls
        makeDefault
        enableDamping
        target={cameraTarget}
      />

      <ambientLight intensity={0.45} />
      <pointLight position={[8, 8, 8]} intensity={20} />

      <SortingBars ref={meshRef} data={data} />
    </>
  );
};