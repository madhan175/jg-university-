"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralParticles() {
  const ref = useRef<any>(null);
  
  // Generate random points in a sphere
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + 3 * Math.pow(Math.random(), 2);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
      
      // Mouse interaction
      const { x, y } = state.mouse;
      ref.current.rotation.x += y * 0.01;
      ref.current.rotation.y += x * 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c8102e"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function NeuralCanvas() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NeuralParticles />
        </Float>
        
        <fog attach="fog" args={["#000", 2, 10]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
    </div>
  );
}
