"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Box, Sphere, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

const TokenomicsObjects = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3
  })

  return (
    <group ref={groupRef}>
      <Box args={[0.5, 0.5, 0.5]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#00FF88" />
      </Box>
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00FF88" wireframe />
      </Sphere>
      <Box args={[0.5, 0.5, 0.5]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#00FF88" />
      </Box>
    </group>
  )
}

export default function TokenomicsScene() {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <TokenomicsObjects />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

