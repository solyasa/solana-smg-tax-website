"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const TaxDistribution = () => (
  <mesh>
    <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
    <meshStandardMaterial color="#00FF88" />
    <mesh position={[0, 0.2, 0]}>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
    <mesh position={[0, 0.4, 0]}>
      <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </mesh>
)

const AutoClaim = () => (
  <mesh>
    <torusGeometry args={[0.5, 0.2, 16, 100]} />
    <meshStandardMaterial color="#00FF88" />
    <mesh rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[0.2, 0.8, 0.2]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </mesh>
)

const SolanaRewards = () => (
  <group>
    <mesh>
      <torusGeometry args={[0.5, 0.1, 16, 100]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
    <mesh rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[0.2, 1, 0.1]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </group>
)

const FairLaunch = () => (
  <group>
    <mesh position={[0, 0.5, 0]}>
      <coneGeometry args={[0.5, 1, 32]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
    <mesh position={[0, -0.2, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </group>
)

const TotalSupply = () => (
  <group>
    {[0, 1, 2].map((i) => (
      <mesh key={i} position={[0.3 * (i - 1), 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
        <meshStandardMaterial color="#00FF88" />
      </mesh>
    ))}
  </group>
)

const InitialLiquidity = () => (
  <group>
    <mesh>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#00FF88" wireframe />
    </mesh>
    <mesh>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </group>
)

const Tax = () => (
  <group>
    <mesh position={[0.25, 0, 0]}>
      <boxGeometry args={[0.4, 0.6, 0.1]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
    <mesh position={[-0.25, 0, 0]}>
      <boxGeometry args={[0.4, 0.4, 0.1]} />
      <meshStandardMaterial color="#00FF88" />
    </mesh>
  </group>
)

const iconComponents = {
  TaxDistribution,
  AutoClaim,
  SolanaRewards,
  FairLaunch,
  TotalSupply,
  InitialLiquidity,
  Tax,
}

interface Icon3DProps {
  icon: keyof typeof iconComponents
}

const Icon3D: React.FC<Icon3DProps> = ({ icon }) => {
  const IconComponent = iconComponents[icon]

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <IconComponent />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Icon3D

