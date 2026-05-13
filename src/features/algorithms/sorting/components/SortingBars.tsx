// Ruta:
// src/features/algorithms/sorting/components/SortingBars.tsx

/**
 * SortingBars
 *
 * Dibuja muchas barras 3D usando InstancedMesh.
 * Esto permite representar arreglos grandes con un solo draw call.
 */

import {
  forwardRef,
  useLayoutEffect,
  useRef,
  useImperativeHandle,
} from "react";
import * as THREE from "three";

import { ALGO_THEME } from "../../../../shared/constants/theme";

export interface DataElement {
  value: number;
}

interface SortingBarsProps {
  data: DataElement[];
}

const dummy = new THREE.Object3D();
const defaultColor = new THREE.Color(ALGO_THEME.data.default);

/**
 * Evita división entre cero o valores inválidos.
 */
export const getSafeMaxValue = (values: number[]) => {
  if (values.length === 0) return 1;

  const max = Math.max(...values);

  return Number.isFinite(max) && max > 0 ? max : 1;
};

/**
 * Calcula posición y escala de una barra.
 * Se usa tanto al crear las barras como al animarlas.
 */
export const applyBarTransform = (
  object: THREE.Object3D,
  index: number,
  total: number,
  value: number,
  maxValue: number,
) => {
  const spacing = 1.15;
  const width = 0.75;
  const depth = 0.75;
  const maxHeight = 6;

  const height = Math.max(0.15, (value / maxValue) * maxHeight);
  const x = (index - (total - 1) / 2) * spacing;

  object.position.set(x, height / 2, 0);
  object.scale.set(width, height, depth);
  object.rotation.set(0, 0, 0);
  object.updateMatrix();
};

export const SortingBars = forwardRef<THREE.InstancedMesh, SortingBarsProps>(
  ({ data }, ref) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    useImperativeHandle(ref, () => meshRef.current as THREE.InstancedMesh);

    useLayoutEffect(() => {
      const mesh = meshRef.current;

      if (!mesh) return;

      const values = data.map((item) => item.value);
      const total = values.length;
      const maxValue = getSafeMaxValue(values);

      for (let index = 0; index < total; index++) {
        applyBarTransform(dummy, index, total, values[index], maxValue);

        mesh.setMatrixAt(index, dummy.matrix);
        mesh.setColorAt(index, defaultColor);
      }

      mesh.instanceMatrix.needsUpdate = true;

      if (mesh.instanceColor) {
        mesh.instanceColor.needsUpdate = true;
      }
    }, [data]);

    return (
      <instancedMesh ref={meshRef} args={[undefined, undefined, data.length]}>
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial
          vertexColors
          color="white"
          roughness={0.35}
          metalness={0.1}
        />
      </instancedMesh>
    );
  },
);

SortingBars.displayName = "SortingBars";