import { OrbitControls, Grid, Center } from "@react-three/drei";
import { DataBar } from "../shared/components/3d/DataBar";

export const SortingScene = () => {
  // Array de prueba para ver algo de inmediato
  const testData = [4, 7, 2, 9, 5, 1, 8, 3];

  return (
    <>
      <OrbitControls makeDefault />
      
      {/* Luces para dar volumen */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={200} /> 
      
      <Grid 
        infiniteGrid 
        fadeDistance={30} 
        sectionSize={1} 
        sectionColor="#222" 
        cellColor="#111" 
      />

      <Center top>
        {testData.map((val, i) => (
          <DataBar 
            key={i} 
            index={i} 
            value={val} 
            total={testData.length} 
            status={i === 2 ? 'active' : 'default'} // Marcamos uno de prueba
          />
        ))}
      </Center>
    </>
  );
};