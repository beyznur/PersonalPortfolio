import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Robots = () => {
  const robot = useGLTF("./robot/scene.gltf", {
    animations: true,
  
  });


  const [rotation, setRotation] = useState([0, 0, 0.1]);

  useFrame(() => {
    setRotation((prevRotation) => [
      prevRotation[0],
      prevRotation[1] + 0.01, 
      prevRotation[2],
    ]);
  });
  

  return (
    
    <mesh >
      <hemisphereLight intensity={3} groundColor="blue" />
      <spotLight
        position={[-20, 0, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
      />
      <pointLight intensity={1} position={[0, 20, 0]} />
      <primitive
        object={robot.scene}
        scale={[0.75, 0.75, 0.75]}
        position={[0, -0.5, 0]}
        rotation={rotation}
       
        
      />
      
    </mesh>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 10, 0], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robots />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
