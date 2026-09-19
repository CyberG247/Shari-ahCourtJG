'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Scale, 
  ChevronDown, 
  FileText, 
  Search, 
  Calendar, 
  Users, 
  Phone, 
  Menu, 
  X, 
  ExternalLink,
  BookOpen,
  Award,
  Clock,
  Sparkles
} from 'lucide-react'
import { useAccessibility } from '@/components/accessibility/accessibility-provider'
import { Button } from '@/components/ui/button'

export default function CourtHeader() {
  const { t } = useAccessibility()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Main Glassmorphic Sticky Header */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-court-header shadow-judicial py-2.5' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3.5'
        }`}
        aria-label="Primary Navigation"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Institutional Brand Identity */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-court-green-800 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-court-sand-50 p-1 border-2 border-court-green-800 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/Court-logo.png" 
                alt="Jigawa State Shari'ah Court of Appeal Emblem" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to nigeria-logo if Court-logo fails
                  (e.target as HTMLImageElement).src = "/nigeria-logo.png"
                }}
              />
            </div>
            <div>
              <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-court-green-900 group-hover:text-court-green-700 transition-colors block leading-tight">
                {t('courtTitle', "Shari'ah Court of Appeal")}
              </span>
              <p className="text-[11px] sm:text-xs font-medium text-court-slate-800 mt-0.5">
                {t('courtSubtitle', "Jigawa State, Nigeria")}
              </p>
            </div>
          </Link>

          {/* Desktop Mega-Menu Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-gray-800">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-md hover:text-court-green-800 hover:bg-court-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-court-green-800"
            >
              {t('home', 'Home')}
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  activeDropdown === 'about' ? 'text-court-green-800 bg-court-green-50' : 'hover:text-court-green-800 hover:bg-court-green-50'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>{t('aboutUs', 'About Us')}</span>
                <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-judicial-gold border border-court-gold-200 p-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <Link 
                    href="/about" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-court-green-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Institutional History</div>
                      <div className="text-xs text-gray-500">Established under the Constitution of Nigeria</div>
                    </div>
                  </Link>
                  <Link 
                    href="/courts" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <Scale className="w-5 h-5 text-court-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Court Divisions & Jurisdiction</div>
                      <div className="text-xs text-gray-500">Appellate oversight across all 27 LGAs</div>
                    </div>
                  </Link>
                  <Link 
                    href="/management" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <Users className="w-5 h-5 text-court-green-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Registry & Management</div>
                      <div className="text-xs text-gray-500">Chief Registrar & Departmental administration</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* The Bench Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('bench')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  activeDropdown === 'bench' ? 'text-court-green-800 bg-court-green-50' : 'hover:text-court-green-800 hover:bg-court-green-50'
                }`}
                aria-expanded={activeDropdown === 'bench'}
              >
                <span>{t('theBench', 'The Bench')}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {activeDropdown === 'bench' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-judicial-gold border border-court-gold-200 p-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <Link 
                    href="/#grand-kadi" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <Award className="w-5 h-5 text-court-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Hon. Grand Kadi Muhammad Sani Salihu</div>
                      <div className="text-xs text-gray-500">Head of Court & President of the Appellate Bench</div>
                    </div>
                  </Link>
                  <Link 
                    href="/#honorable-kadis" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <Users className="w-5 h-5 text-court-green-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Honorable Kadis Directory</div>
                      <div className="text-xs text-gray-500">Distinguished appellate judges & scholarly profiles</div>
                    </div>
                  </Link>
                  <Link 
                    href="/services/judgment-archives" 
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-court-green-50 text-gray-800 hover:text-court-green-900 transition-colors"
                  >
                    <FileText className="w-5 h-5 text-court-green-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Appellate Law Reports</div>
                      <div className="text-xs text-gray-500">Search landmark Shari'ah decisions & precedents</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* E-Services Mega Menu Link */}
            <Link 
              href="/services" 
              className="px-3 py-2 rounded-md hover:text-court-green-800 hover:bg-court-green-50 transition-colors flex items-center gap-1.5 font-semibold text-court-green-900"
            >
              <span>{t('eServices', 'E-Services')}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </Link>

            {/* Cause Lists */}
            <Link 
              href="/services#cause-list-section" 
              className="px-3 py-2 rounded-md hover:text-court-green-800 hover:bg-court-green-50 transition-colors"
            >
              {t('causeLists', 'Cause Lists')}
            </Link>

            {/* Media */}
            <Link 
              href="/media" 
              className="px-3 py-2 rounded-md hover:text-court-green-800 hover:bg-court-green-50 transition-colors"
            >
              {t('media', 'Media')}
            </Link>
          </div>

          {/* Quick Action Button & E-Filing Gateway */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="/services#efiling-gateway">
              <Button 
                size="sm" 
                className="bg-court-green-800 hover:bg-court-green-900 text-white shadow-sm hover:shadow-judicial transition-all text-xs font-bold px-4"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 text-court-gold-400" />
                {t('eFiling', 'E-Filing Portal')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-court-green-900 hover:bg-court-green-50 focus:outline-none focus:ring-2 focus:ring-court-green-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto mobile-touch-scroll">
            <div className="pb-3 border-b border-gray-100">
              <Link
                href="/services#efiling-gateway"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-court-green-800 text-white text-xs font-bold text-center w-full"
              >
                <FileText className="w-4 h-4 text-court-gold-300" />
                <span>E-Filing Portal</span>
              </Link>
            </div>

            <nav className="space-y-1 text-sm font-medium">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                {t('home', 'Home')}
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                {t('aboutUs', 'About Us & Jurisdiction')}
              </Link>
              <Link 
                href="/management" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                {t('management', 'Management & Registry')}
              </Link>
              <Link 
                href="/#honorable-kadis" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                {t('theBench', 'The Bench (Honorable Kadis)')}
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-semibold text-court-green-800 bg-court-green-50/70"
              >
                {t('eServices', 'E-Services Ecosystem')}
              </Link>
              <Link 
                href="/services/case-tracking" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800 pl-6 text-xs text-gray-600"
              >
                • Case Status Tracking
              </Link>
              <Link 
                href="/services#mirath-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800 pl-6 text-xs text-gray-600"
              >
                • Mirath (Islamic Estate Calculator)
              </Link>
              <Link 
                href="/services/judgment-archives" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800 pl-6 text-xs text-gray-600"
              >
                • Judgment Archives & Precedents
              </Link>
              <Link 
                href="/courts" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                Zonal Divisions & Area Courts
              </Link>
              <Link 
                href="/media" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-court-green-50 hover:text-court-green-800"
              >
                {t('media', 'Media & Press Releases')}
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}
