'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FileText, 
  Calendar, 
  Calculator, 
  Search, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Lock,
  UploadCloud
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function QuickServicesShowcase() {
  const services = [
    {
      id: 'efiling',
      title: 'E-Filing & Case Management',
      badge: 'Certified GovTech',
      description: 'Streamlined electronic lodgment for legal counsel and litigants. Initiate appeals, submit verified affidavits, and track submissions.',
      icon: UploadCloud,
      href: '/services#efiling-gateway',
      color: 'emerald',
      features: ['5-Step Filing Wizard', 'PDF/A Validation', 'Electronic NBA Seal Check']
    },
    {
      id: 'causelist',
      title: 'Real-time Cause List & Docket',
      badge: 'Live Hearing Board',
      description: 'Search and monitor daily hearing dockets across all judicial divisions (Dutse, Hadejia, Kazaure, Gumel, Ringim).',
      icon: Calendar,
      href: '/services#cause-list-section',
      color: 'amber',
      features: ['Daily Division Schedules', '1-Click PDF Export', 'Calendar Sync (.ics)']
    },
    {
      id: 'mirath',
      title: 'Mirath (Inheritance) Portal',
      badge: 'Maliki Jurisprudence',
      description: 'Automated Islamic estate distribution calculator based on Quranic fractional shares (Fardh & Asabah) and Certified True Copy requests.',
      icon: Calculator,
      href: '/services#mirath-section',
      color: 'emerald',
      features: ['Quranic Share Breakdown', 'Exact Naira Allocation', 'Official Probate Request']
    },
    {
      id: 'casetracking',
      title: 'Case Status Tracking',
      badge: 'Public Registry',
      description: 'Track the real-time progress of pending appeals, ruling dates, and judge assignments with instant Suit Number lookup.',
      icon: Search,
      href: '/services/case-tracking',
      color: 'blue',
      features: ['Instant Suit Lookup', 'Proceedings Timeline', 'Next Hearing Alerts']
    },
    {
      id: 'marriagecert',
      title: 'Islamic Marriage Certification',
      badge: 'Vital Registry',
      description: 'Official digital issuance and renewal of Shari’ah marriage certificates with cryptographic QR seals for international recognition.',
      icon: Heart,
      href: '/services/marriage-certificate',
      color: 'rose',
      features: ['Court Authenticated', 'QR Verification Stamp', 'Digital Download']
    },
    {
      id: 'verification',
      title: 'QR Document Verification',
      badge: 'Anti-Fraud Security',
      description: 'Instantly verify certified judgments, rulings, and court orders issued by the Jigawa State Shari’ah Court of Appeal.',
      icon: ShieldCheck,
      href: '/services/document-verification',
      color: 'purple',
      features: ['Instant Barcode Scan', 'Cryptographic Seal', 'Tamper-Proof Audit']
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-court-sand-50/70 relative border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-gold-100 text-court-gold-900 border border-court-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-court-gold-700" />
            <span>Digital Judiciary Modernization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-court-slate-900 tracking-tight">
            Integrated Judicial E-Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Access secure, 24/7 digital judicial services engineered to streamline court processes, protect litigant rights, and enhance transparency.
          </p>
          <div className="w-20 h-1 bg-court-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((srv) => {
            const Icon = srv.icon
            return (
              <Card 
                key={srv.id} 
                className="group relative bg-white border border-gray-200 hover:border-court-green-700 shadow-sm hover:shadow-judicial transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-court-green-50 border border-court-green-200 flex items-center justify-center text-court-green-800 group-hover:bg-court-green-800 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-bold bg-court-sand-100 text-court-slate-800 border border-court-sand-300">
                      {srv.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-court-slate-900 mb-2 group-hover:text-court-green-800 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-court-gold-500 mr-2"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link href={srv.href}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-gray-300 text-court-green-900 hover:bg-court-green-800 hover:text-white hover:border-court-green-800 font-semibold text-xs transition-colors py-5"
                    >
                      <span>Access Portal</span>
                      <ArrowRight className="w-4 h-4 text-court-gold-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>

        {/* E-Services Hub Banner Callout */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-court-green-900 to-court-green-950 text-white shadow-judicial flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 border-2 border-court-gold-500/40">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-court-gold-300">
              Need assistance navigating judicial filings?
            </h4>
            <p className="text-xs text-gray-200">
              Use our resident AI Judicial Assistant ("Adalat AI") or download statutory procedural forms.
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
            <Link href="/services" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 font-bold text-xs px-5 shadow-sm py-5">
                Open E-Services Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
