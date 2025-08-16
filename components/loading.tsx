"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function GlobalLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto mb-6 animate-pulse">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Image
                src="/nigeria-logo.png"
                alt="Nigerian Coat of Arms"
                width={80}
                height={80}
                className="w-20 h-20 object-contain animate-bounce"
              />
            </div>
          </div>
          
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-40 h-40 mx-auto">
            <div className="w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2 animate-fade-in">Shari'ah Court of Appeal</h2>
          <p className="text-green-100 mb-6 animate-fade-in-delay">Jigawa State, Nigeria</p>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}