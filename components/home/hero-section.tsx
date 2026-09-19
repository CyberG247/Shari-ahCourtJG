'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  FileText, 
  Scale, 
  Search, 
  Calendar, 
  Calculator, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAccessibility } from '@/components/accessibility/accessibility-provider'

export default function HeroSection() {
  const router = useRouter()
  const { t } = useAccessibility()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/services/case-tracking?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-court-green-950 via-court-green-900 to-court-green-950 text-white overflow-hidden py-12 md:py-20 border-b-4 border-court-gold-500">
      {/* Subtle Islamic Motif Ambient Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>

      {/* Decorative Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-court-green-700/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Live Judicial Docket Announcement Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 sm:p-1.5 sm:pr-4 rounded-2xl sm:rounded-full bg-court-green-900/90 border border-court-gold-400/40 text-xs shadow-judicial-gold backdrop-blur-md text-center sm:text-left">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-court-gold-500 text-court-green-950 font-extrabold uppercase text-[10px] tracking-wider flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-court-green-950 animate-ping"></span>
              Live Docket
            </span>
            <p className="text-court-sand-100 font-medium text-xs line-clamp-1 sm:line-clamp-none">
              Hon. Grand Kadi Appellate Panel sitting active in Courtroom 1 (Dutse Headquarters).
            </p>
            <Link 
              href="/services#cause-list-section" 
              className="sm:ml-auto text-court-gold-300 hover:text-white font-semibold flex items-center gap-0.5 whitespace-nowrap text-[11px]"
            >
              <span>View Board</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Hero Title & Dignified Judicial Mission */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          {/* Official Court Seal Emblem */}
          <div className="flex justify-center mb-5">
            <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-white p-2 border-2 border-court-gold-400 shadow-judicial-gold flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src="/Court-logo.png" 
                alt="Official Seal of the Shari'ah Court of Appeal, Jigawa State" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-court-green-800/80 border border-court-green-700/80 text-court-gold-300 text-[10px] sm:text-xs font-semibold mb-4 tracking-wide text-center">
            <Award className="w-3.5 h-3.5 text-court-gold-400 flex-shrink-0" />
            <span>JIGAWA STATE JUDICIARY • FEDERAL REPUBLIC OF NIGERIA</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Upholding Sacred Justice in Accordance with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-court-gold-300 via-court-gold-400 to-court-gold-200">
              Shari’ah Principles
            </span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 font-normal leading-relaxed px-2">
            The superior appellate jurisdiction of Jigawa State delivering fair, transparent, and expeditious Islamic judicial administration for all citizens, legal practitioners, and courts.
          </p>

          {/* Core Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-10 w-full">
            <Link href="/services#efiling-gateway" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 font-bold px-5 sm:px-7 py-5 sm:py-6 text-xs sm:text-sm shadow-judicial-gold hover:scale-[1.02] transition-transform"
              >
                <FileText className="w-4 h-4 mr-2" />
                {t('eFiling', 'Initiate E-Filing')}
              </Button>
            </Link>

            <Link href="/services#cause-list-section" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-court-green-900/60 border-court-gold-400/50 text-white hover:bg-court-green-800 hover:text-court-gold-200 px-5 sm:px-6 py-5 sm:py-6 text-xs sm:text-sm backdrop-blur-sm"
              >
                <Calendar className="w-4 h-4 mr-2 text-court-gold-400" />
                Cause Lists & Hearing Board
              </Button>
            </Link>

            <Link href="/services#mirath-section" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="ghost" 
                className="w-full sm:w-auto text-court-sand-100 hover:text-white hover:bg-court-green-800/50 px-4 sm:px-5 py-5 sm:py-6 text-xs sm:text-sm"
              >
                <Calculator className="w-4 h-4 mr-2 text-court-gold-400" />
                Mirath Estate Calculator
              </Button>
            </Link>
          </div>

          {/* Fast Search Case Bar */}
          <div className="max-w-2xl mx-auto px-1 sm:px-0">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder={t('searchPlaceholder', "Search Suit No., Litigant, or Judgments...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-24 sm:pr-28 py-5 sm:py-6 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 border-2 border-court-gold-400/80 shadow-2xl focus-visible:ring-2 focus-visible:ring-court-gold-500 text-xs sm:text-sm font-medium"
                />
              </div>
              <Button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-court-green-800 hover:bg-court-green-900 text-white font-semibold text-[11px] sm:text-xs px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg"
              >
                Search Docket
              </Button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-2 text-[10px] sm:text-[11px] text-gray-300">
              <span className="text-court-gold-300">Popular:</span>
              <button 
                type="button" 
                onClick={() => setSearchQuery('SCA/JG/2024')} 
                className="hover:text-white underline underline-offset-2"
              >
                2024 Appeals
              </button>
              <span>•</span>
              <button 
                type="button" 
                onClick={() => setSearchQuery('Inheritance')} 
                className="hover:text-white underline underline-offset-2"
              >
                Mirath Precedents
              </button>
              <span>•</span>
              <button 
                type="button" 
                onClick={() => setSearchQuery('Divorce')} 
                className="hover:text-white underline underline-offset-2"
              >
                Matrimonial Causes
              </button>
            </div>
          </div>
        </div>

        {/* Verified Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto pt-6 border-t border-court-green-800/70 text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-court-green-900/40 border border-court-green-800/40">
            <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-court-gold-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-gray-200">WCAG 2.1 AA Compliant</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-court-green-900/40 border border-court-green-800/40">
            <Scale className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-court-gold-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-gray-200">Maliki Jurisprudence</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-court-green-900/40 border border-court-green-800/40">
            <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-court-gold-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-gray-200">Certified Digital Filing</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 rounded-lg bg-court-green-900/40 border border-court-green-800/40">
            <BookOpen className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-court-gold-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-gray-200">Public Law Archives</span>
          </div>
        </div>
      </div>
    </section>
  )
}
