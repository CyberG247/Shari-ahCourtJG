'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { 
  Scale, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const stepTime = 20
    const totalSteps = duration / stepTime
    const increment = value / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function MissionMetrics() {
  const metrics = [
    {
      icon: Scale,
      value: 30,
      suffix: '+',
      label: 'Years of Jurisprudence',
      description: 'Appellate excellence under the Nigerian Constitution',
    },
    {
      icon: CheckCircle2,
      value: 5200,
      suffix: '+',
      label: 'Matters Resolved',
      description: 'Appeals and civil disputes disposed with finality',
    },
    {
      icon: Building2,
      value: 99,
      suffix: '+',
      label: 'Subordinate Area Courts',
      description: 'Supervised across all 27 Local Government Areas',
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: '.4%',
      label: 'Disposal Rate',
      description: 'Prompt turnaround within the statutory cause term',
    },
  ]

  return (
    <section className="bg-court-green-900 py-12 border-y-2 border-court-gold-500 text-white relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-court-green-950/60 border border-court-gold-400/20 shadow-judicial hover:border-court-gold-400/50 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-court-gold-500/20 border border-court-gold-400/30 flex items-center justify-center text-court-gold-400 mb-2 sm:mb-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-court-gold-300 mb-1 tracking-tight">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>

                <div className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">
                  {item.label}
                </div>

                <div className="text-[11px] sm:text-xs text-court-sand-200 hidden sm:block">
                  {item.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
