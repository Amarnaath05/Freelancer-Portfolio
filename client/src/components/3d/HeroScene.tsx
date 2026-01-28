import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      wireframeRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#9333ea" />

      <group scale={2.5}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} visible={true}>
          <MeshDistortMaterial
            color="#1e293b"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        <Icosahedron ref={wireframeRef} args={[1.2, 0]}>
          <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
        </Icosahedron>
      </group>
    </>
  );
}
