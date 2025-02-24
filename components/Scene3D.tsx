"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useRef, useMemo } from "react"

export default function Scene3D() {
  const coinRef = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      const color = [
        "#9945FF", // Purple
        "#14F195", // Green
        "#00C2FF", // Blue
      ][Math.floor(Math.random() * 3)]
      temp.push({ x, y, z, color })
    }
    return temp
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        {/* Solana Logo representation */}
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <mesh>
            <torusGeometry args={[1, 0.3, 16, 100]} />
            <meshStandardMaterial
              color="#14F195"
              emissive="#14F195"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 0, 0.1]}>
            <ringGeometry args={[0.5, 0.7, 32]} />
            <meshStandardMaterial
              color="#9945FF"
              emissive="#9945FF"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>

        {/* Glowing particles */}
        {particles.map((particle, i) => (
          <mesh key={i} position={[particle.x, particle.y, particle.z]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={particle.color}
              emissive={particle.color}
              emissiveIntensity={1}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

