"use client"

import React, { Suspense, useEffect, useState, useMemo } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"

function SolanaLogo() {
  return (
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
  )
}

function Particles() {
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
    <>
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
    </>
  )
}

function Scene() {
  const { scene } = useThree()

  useEffect(() => {
    console.log("Scene initialized")
    console.log("Scene object:", scene)
  }, [scene])

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <SolanaLogo />
        <Particles />
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  )
}

function Fallback() {
  return <div className="w-full h-full bg-gradient-to-b from-[#9945FF] via-[#14F195] to-[#00C2FF] opacity-30" />
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("Scene3D component mounted")
  }, [])

  if (!mounted) {
    return <Fallback />
  }

  return (
    <ErrorBoundary fallback={<Fallback />}>
      <Suspense fallback={<Fallback />}>
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </ErrorBoundary>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error("Error in Scene3D ErrorBoundary:", error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Scene3D ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

