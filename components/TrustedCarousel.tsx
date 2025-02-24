"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Coins, Mountain, Link, BarChart2, Bot, Brain, CircleIcon as Chain } from "lucide-react"

const logos = [
  {
    name: "Binance",
    image: "/placeholder.svg?height=40&width=160",
    icon: Coins,
  },
  {
    name: "Avalanche",
    image: "/placeholder.svg?height=40&width=160",
    icon: Mountain,
  },
  {
    name: "BNB Chain",
    image: "/placeholder.svg?height=40&width=160",
    icon: Link,
  },
  {
    name: "DEXTools",
    image: "/placeholder.svg?height=40&width=160",
    icon: BarChart2,
  },
  {
    name: "AIMBOT",
    image: "/placeholder.svg?height=40&width=160",
    icon: Bot,
  },
  {
    name: "Algora",
    image: "/placeholder.svg?height=40&width=160",
    icon: Brain,
  },
  {
    name: "IB Chain",
    image: "/placeholder.svg?height=40&width=160",
    icon: Chain,
  },
]

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos]

export default function TrustedCarousel() {
  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            TRUSTED BY THE
            <br />
            INDUSTRY LEADERS
          </h2>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <Image
                      src={logo.image || "/placeholder.svg"}
                      alt={logo.name}
                      width={160}
                      height={40}
                      className="w-auto h-8 opacity-70 group-hover:opacity-100 transition-opacity absolute"
                    />
                    <logo.icon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

