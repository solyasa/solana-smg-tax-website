"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function RewardsCalculator() {
  const [volume, setVolume] = useState<number>(0)
  const [holdings, setHoldings] = useState<number>(0)
  const totalSupply = 1_000_000_000 // 1 billion total supply

  // Calculate rewards
  const dailyRewardsPool = volume * 0.04 // 4% of volume
  const tokenBurnAmount = volume * 0.01 // 1% of volume
  const dailyEarnings = holdings > 0 ? (holdings / totalSupply) * dailyRewardsPool : 0

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9945FF] to-[#14F195] text-transparent bg-clip-text">
        Rewards Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 block mb-2">24h Volume (USD)</label>
          <Input
            type="number"
            placeholder="0"
            value={volume || ""}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="bg-black/40 border-[#14F195]/20 text-white focus:border-[#14F195]/50"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">Your $SMG Holdings</label>
          <Input
            type="number"
            placeholder="0"
            value={holdings || ""}
            onChange={(e) => setHoldings(Number(e.target.value))}
            className="bg-black/40 border-[#14F195]/20 text-white focus:border-[#14F195]/50"
          />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div>
          <div className="text-xl font-semibold mb-2">Daily Rewards Pool:</div>
          <div className="text-[#14F195] text-2xl font-bold">{formatCurrency(dailyRewardsPool)}</div>
        </div>

        <div>
          <div className="text-xl font-semibold mb-2">Your Daily Earnings:</div>
          <div className="text-[#14F195] text-2xl font-bold">{formatCurrency(dailyEarnings)}</div>
        </div>

        <div>
          <div className="text-xl font-semibold mb-2">Token Burn Amount:</div>
          <div className="text-[#14F195] text-2xl font-bold">{formatCurrency(tokenBurnAmount)}</div>
        </div>
      </div>
    </div>
  )
}

