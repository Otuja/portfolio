"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const DigitalCircuit = () => {
  const traceCount = 300;
  const chipCount = 50;
  const pulseCount = 100;
  
  const tracesRef = useRef<THREE.InstancedMesh>(null);
  const chipsRef = useRef<THREE.InstancedMesh>(null);
  const pulsesRef = useRef<THREE.InstancedMesh>(null);
  
  // Generate Circuit Layout
  const layout = useMemo(() => {
    const traces = [];
    const chips = [];
    const pulses = [];
    
    // Grid size
    const size = 40;
    const step = 2;

    // Generate Traces (Lines)
    for (let i = 0; i < traceCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const length = 2 + Math.random() * 8;
      const x = (Math.floor(Math.random() * size) - size/2) * step;
      const z = (Math.floor(Math.random() * size) - size/2) * step;
      
      traces.push({ 
        x: x + (isHorizontal ? length/2 : 0), 
        z: z + (isHorizontal ? 0 : length/2), 
        scaleX: isHorizontal ? length : 0.1, 
        scaleZ: isHorizontal ? 0.1 : length 
      });
    }

    // Generate Chips
    for (let i = 0; i < chipCount; i++) {
      const x = (Math.floor(Math.random() * size) - size/2) * step;
      const z = (Math.floor(Math.random() * size) - size/2) * step;
      const w = 1 + Math.random() * 2;
      const d = 1 + Math.random() * 2;
      chips.push({ x, z, w, d });
    }

    // Generate Pulses
    for (let i = 0; i < pulseCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const length = 10; // Path length
      const x = (Math.floor(Math.random() * size) - size/2) * step;
      const z = (Math.floor(Math.random() * size) - size/2) * step;
      const speed = 0.1 + Math.random() * 0.3;
      
      pulses.push({ 
        startX: x, startZ: z, 
        isHorizontal, length, speed, 
        progress: Math.random() * length 
      });
    }

    return { traces, chips, pulses };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize Static Meshes (Traces & Chips)
  useMemo(() => {
    // We'll set these in useFrame for simplicity or strictly here if we had access to refs immediately.
    // But refs are null initially. We can use a layout effect or just check in useFrame once.
  }, []);

  useFrame(() => {
    if (!tracesRef.current || !chipsRef.current || !pulsesRef.current) return;

    // Set Traces (Static)
    if (tracesRef.current.count > 0 && !tracesRef.current.userData.init) {
      layout.traces.forEach((trace, i) => {
        dummy.position.set(trace.x, 0, trace.z);
        dummy.scale.set(trace.scaleX, 0.05, trace.scaleZ);
        dummy.updateMatrix();
        tracesRef.current!.setMatrixAt(i, dummy.matrix);
      });
      tracesRef.current.instanceMatrix.needsUpdate = true;
      tracesRef.current.userData.init = true;
    }

    // Set Chips (Static)
    if (chipsRef.current.count > 0 && !chipsRef.current.userData.init) {
      layout.chips.forEach((chip, i) => {
        dummy.position.set(chip.x, 0.2, chip.z);
        dummy.scale.set(chip.w, 0.4, chip.d);
        dummy.updateMatrix();
        chipsRef.current!.setMatrixAt(i, dummy.matrix);
      });
      chipsRef.current.instanceMatrix.needsUpdate = true;
      chipsRef.current.userData.init = true;
    }

    // Animate Pulses
    layout.pulses.forEach((pulse, i) => {
      pulse.progress += pulse.speed;
      if (pulse.progress > pulse.length) pulse.progress = 0;

      const currentPos = pulse.progress - (pulse.length/2);
      
      const x = pulse.isHorizontal ? pulse.startX + currentPos : pulse.startX;
      const z = pulse.isHorizontal ? pulse.startZ : pulse.startZ + currentPos;

      dummy.position.set(x, 0.1, z);
      dummy.scale.set(0.3, 0.3, 0.3);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      
      pulsesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    pulsesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      {/* Traces */}
      <instancedMesh ref={tracesRef} args={[undefined, undefined, traceCount]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#003B00" transparent opacity={0.5} />
      </instancedMesh>

      {/* Chips */}
      <instancedMesh ref={chipsRef} args={[undefined, undefined, chipCount]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#001a00" 
          emissive="#00FF41" 
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>

      {/* Pulses (Data) */}
      <instancedMesh ref={pulsesRef} args={[undefined, undefined, pulseCount]}>
        <boxGeometry args={[0.5, 0.1, 0.5]} />
        <meshBasicMaterial color="#00FF41" />
      </instancedMesh>
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full bg-black">
      <Canvas camera={{ position: [20, 20, 20], fov: 45 }}>
        <fog attach="fog" args={['#000000', 20, 80]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 20, 10]} intensity={1} color="#00FF41" distance={50} />
        <pointLight position={[-20, 10, -20]} intensity={0.5} color="#00FF41" distance={50} />
        
        <DigitalCircuit />
        
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
};

export default HeroScene;
