"use client"

import { Twitter, Disc, Globe } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import RewardsCalculator from "@/components/RewardsCalculator"
import React, { useState, useEffect } from "react"

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-b from-[#9945FF] via-[#14F195] to-[#00C2FF] opacity-30" />
  ),
})

export default function Home() {
  const [is3DLoaded, setIs3DLoaded] = useState(false)

  useEffect(() => {
    console.log("Home component mounted")
  }, [])

  const glowVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      textShadow: ["0 0 20px #9945FF", "0 0 30px #14F195", "0 0 40px #00C2FF", "0 0 30px #14F195", "0 0 20px #9945FF"],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-[#050B1F] text-white overflow-hidden">
      {/* Header */}
      <header className="p-4">
        <div className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text font-bold text-xl">
          $SMG
        </div>
      </header>

      {/* 1. Solana Money Glitch Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ErrorBoundary
            fallback={
              <div className="w-full h-full bg-gradient-to-b from-[#9945FF] via-[#14F195] to-[#00C2FF] opacity-30" />
            }
          >
            <Scene3D />
          </ErrorBoundary>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full text-center space-y-16"
          >
            <motion.h1
              className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text text-6xl md:text-8xl font-oswald tracking-tight uppercase font-bold py-20"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            >
              Solana Money Glitch
            </motion.h1>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-medium text-gray-300 bg-gradient-to-r from-purple-900/30 via-emerald-900/30 to-blue-900/30 backdrop-blur-sm p-4 rounded-lg mx-auto max-w-2xl border border-[#14F195]/20">
                First Deflationary Solana Reward Token
              </p>
              <p className="text-lg md:text-xl text-gray-400 bg-gradient-to-r from-purple-900/20 via-emerald-900/20 to-blue-900/20 backdrop-blur-sm p-4 rounded-lg mx-auto max-w-2xl border border-[#14F195]/10">
                Earn Solana rewards every 5 minutes just by holding $SMG tokens
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-20">
              {["Globe", "Disc", "Twitter"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gradient-to-r from-purple-900/20 via-emerald-900/20 to-blue-900/20 hover:from-purple-900/30 hover:via-emerald-900/30 hover:to-blue-900/30 p-4 rounded-full transition-colors backdrop-blur-sm border border-[#14F195]/20"
                >
                  {icon === "Globe" && <Globe className="w-6 h-6 text-[#14F195]" />}
                  {icon === "Disc" && <Disc className="w-6 h-6 text-[#00C2FF]" />}
                  {icon === "Twitter" && <Twitter className="w-6 h-6 text-[#9945FF]" />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Automatic Solana Rewards Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-[#0A1A3D]/40 to-transparent">
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.h2
            className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text text-5xl md:text-6xl font-oswald tracking-tight uppercase font-bold mb-12 text-center"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            Automatic Solana Rewards
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Calculator card */}
            <motion.div
              className="bg-[#020B1D] p-8 rounded-lg border border-[#14F195]/30 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <RewardsCalculator />
            </motion.div>

            {/* How It Works card - remains the same */}
            <motion.div
              className="bg-[#020B1D] p-8 rounded-lg border border-[#14F195]/30 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-oswald uppercase font-bold mb-6 bg-gradient-to-r from-[#14F195] to-[#00C2FF] text-transparent bg-clip-text">
                How It Works
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#9945FF]">→</span>
                  <span className="text-gray-200">5% tax collected from every buy/sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14F195]">→</span>
                  <span className="text-gray-200">1% used for auto token burn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C2FF]">→</span>
                  <span className="text-gray-200">4% tax auto-converted to Solana</span>
                </li>
              </ul>
            </motion.div>

            {/* Benefits card - remains the same */}
            <motion.div
              className="bg-[#020B1D] p-8 rounded-lg border border-[#14F195]/30 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-oswald uppercase font-bold mb-6 bg-gradient-to-r from-[#00C2FF] to-[#9945FF] text-transparent bg-clip-text">
                Benefits
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#9945FF]">→</span>
                  <span className="text-gray-200">Earn passive Solana income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14F195]">→</span>
                  <span className="text-gray-200">Deflationary token model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C2FF]">→</span>
                  <span className="text-gray-200">Automatic rewards, no claiming</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Why Choose $SMG? Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-[#0A1A3D]/40 to-transparent">
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.h2
            className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text text-5xl md:text-6xl font-oswald tracking-tight uppercase font-bold mb-12 text-center"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            Why Choose $SMG?
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                symbol: ">_",
                title: "5% Tax Distribution",
                description: "Every transaction fuels the reward pool",
                gradient: "from-[#9945FF] to-[#14F195]",
              },
              {
                symbol: "[ ]",
                title: "Auto-Claim System",
                description: "Rewards every 5 minutes, hassle-free",
                gradient: "from-[#14F195] to-[#00C2FF]",
              },
              {
                symbol: "$_",
                title: "Solana Rewards",
                description: "Earn Solana by simply holding",
                gradient: "from-[#00C2FF] to-[#9945FF]",
              },
              {
                symbol: "//",
                title: "Fair Token Launch",
                description: "100% fair, no pre-sale or team tokens",
                gradient: "from-[#9945FF] to-[#14F195]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#020B1D] p-6 rounded-xl border border-[#14F195]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text font-mono text-4xl mb-4`}
                >
                  {item.symbol}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Tokenomics Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-[#0A1A3D]/40 to-transparent">
        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.h2
            className="bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text text-5xl md:text-6xl font-oswald tracking-tight uppercase font-bold mb-12 text-center"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            Tokenomics
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                symbol: "[ 1B ]",
                value: "1,000,000,000",
                label: "Total Supply",
                gradient: "from-[#9945FF] to-[#14F195]",
              },
              {
                symbol: "====",
                value: "100%",
                label: "Initial Liquidity",
                gradient: "from-[#14F195] to-[#00C2FF]",
              },
              {
                symbol: "<5%>",
                value: "5%",
                label: "Tax",
                gradient: "from-[#00C2FF] to-[#9945FF]",
              },
              {
                symbol: ">>100<<",
                value: "100%",
                label: "Fair Launch",
                gradient: "from-[#9945FF] to-[#14F195]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#020B1D] p-6 rounded-xl border border-[#14F195]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text font-mono text-3xl mb-4`}
                >
                  {item.symbol}
                </div>
                <div className="text-2xl font-bold mb-2 text-white">{item.value}</div>
                <div className="text-gray-200">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. True Fair Launch Section */}
      <section className="py-24 relative">
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div
            className="bg-[#020B1D] p-8 rounded-xl max-w-3xl mx-auto border border-[#14F195]/30"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF] text-transparent bg-clip-text">
              True Fair Launch Deflation Mechanism
            </h3>
            <p className="text-gray-200 leading-relaxed text-center">
              100% of supply added to liquidity at launch. No team tokens, no pre-sale, no wallet limits. 5% tax
              distributed as Solana rewards to holders and token burn every 5 minutes.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error("Error in Page ErrorBoundary:", error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

