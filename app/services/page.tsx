'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import EFilingStepper from '@/components/services/e-filing-stepper'
import CauseListTracker from '@/components/services/cause-list-tracker'
import MirathCalculator from '@/components/services/mirath-calculator'
import FeePaymentGateway from '@/components/services/fee-payment-gateway'
import { 
  FileText, 
  Calendar, 
  Calculator, 
  CreditCard, 
  Search, 
  ShieldCheck, 
  Heart, 
  Clock, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Scale
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'efiling' | 'causelist' | 'mirath' | 'fees'>('efiling')

  // Check URL hash on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash.includes('cause-list')) setActiveTab('causelist')
      else if (hash.includes('mirath')) setActiveTab('mirath')
      else if (hash.includes('fee')) setActiveTab('fees')
      else if (hash.includes('efiling')) setActiveTab('efiling')
    }
  }, [])

  return (
    <div className="flex flex-col w-full bg-court-sand-50/50 min-h-screen">
      {/* Top Banner & Breadcrumb */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-10 md:py-16 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-court-sand-200 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-court-gold-400 font-semibold">Judicial E-Services Hub</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-gold-500/20 border border-court-gold-400/40 text-court-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-court-gold-400" />
              <span>Digital Judiciary Ecosystem</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Appellate Digital Services Portal
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
              Engineered for legal practitioners, litigants, and citizens. Initiate appeals, monitor live daily court dockets, compute Quranic inheritance allocations, and pay statutory fees securely.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-court-sand-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-court-gold-400" />
                <span>24/7 Digital Availability</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-court-gold-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-court-gold-400" />
                <span>NJC Accredited Court Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main E-Services Interactive Hub */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Interactive Service Tab Switcher */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 bg-white rounded-2xl border-2 border-gray-200 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('efiling')}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'efiling'
                    ? 'bg-court-green-800 text-white shadow-md'
                    : 'text-court-slate-900 hover:bg-court-green-50'
                }`}
              >
                <FileText className={`w-4 h-4 ${activeTab === 'efiling' ? 'text-court-gold-400' : 'text-court-green-700'}`} />
                <span>E-Filing Portal</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('causelist')}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'causelist'
                    ? 'bg-court-green-800 text-white shadow-md'
                    : 'text-court-slate-900 hover:bg-court-green-50'
                }`}
              >
                <Calendar className={`w-4 h-4 ${activeTab === 'causelist' ? 'text-court-gold-400' : 'text-court-green-700'}`} />
                <span>Cause Lists & Docket</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('mirath')}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'mirath'
                    ? 'bg-court-green-800 text-white shadow-md'
                    : 'text-court-slate-900 hover:bg-court-green-50'
                }`}
              >
                <Calculator className={`w-4 h-4 ${activeTab === 'mirath' ? 'text-court-gold-400' : 'text-court-green-700'}`} />
                <span>Mirath Calculator</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fees')}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'fees'
                    ? 'bg-court-green-800 text-white shadow-md'
                    : 'text-court-slate-900 hover:bg-court-green-50'
                }`}
              >
                <CreditCard className={`w-4 h-4 ${activeTab === 'fees' ? 'text-court-gold-400' : 'text-court-green-700'}`} />
                <span>Court Fee Gateway</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content Container */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'efiling' && (
              <div className="animate-in fade-in duration-300">
                <EFilingStepper />
              </div>
            )}

            {activeTab === 'causelist' && (
              <div className="animate-in fade-in duration-300">
                <CauseListTracker />
              </div>
            )}

            {activeTab === 'mirath' && (
              <div className="animate-in fade-in duration-300">
                <MirathCalculator />
              </div>
            )}

            {activeTab === 'fees' && (
              <div className="animate-in fade-in duration-300">
                <FeePaymentGateway />
              </div>
            )}
          </div>

          {/* Additional Public Digital Judiciary Services Cards */}
          <div className="max-w-5xl mx-auto mt-14 pt-10 border-t border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-court-slate-900">
                Additional Digital Registry Services
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Quick access to specialized appellate judicial certificates and historical archives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Marriage Certificate */}
              <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-judicial transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-court-slate-900 text-sm mb-1.5">
                    Islamic Marriage Certification
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Apply for an official Shari'ah marriage certificate attested by the Chief Registrar with cryptographic QR code validation.
                  </p>
                </div>
                <Link href="/services/marriage-certificate">
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold text-court-green-900 border-gray-300 hover:bg-court-green-50">
                    Apply for Certificate
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </Card>

              {/* Judgment Archives */}
              <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-judicial transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-court-green-100 text-court-green-800 flex items-center justify-center mb-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-court-slate-900 text-sm mb-1.5">
                    Appellate Law Reports & Archives
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Access our searchable database of landmark Shari'ah appellate judgments, citations, and judicial precedents from 1991 to date.
                  </p>
                </div>
                <Link href="/services/judgment-archives">
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold text-court-green-900 border-gray-300 hover:bg-court-green-50">
                    Search Precedents
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </Card>

              {/* Document QR Verification */}
              <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-judicial transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-court-slate-900 text-sm mb-1.5">
                    Anti-Fraud Document Verification
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Scan or enter the verification barcode on any certified true copy or court order to verify official court authenticity.
                  </p>
                </div>
                <Link href="/services/document-verification">
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold text-court-green-900 border-gray-300 hover:bg-court-green-50">
                    Verify Document
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
