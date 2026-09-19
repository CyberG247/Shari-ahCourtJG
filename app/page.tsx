'use client'

import React from 'react'
import Link from 'next/link'
import HeroSection from '@/components/home/hero-section'
import GrandKadiSection from '@/components/home/grand-kadi-section'
import MissionMetrics from '@/components/home/mission-metrics'
import QuickServicesShowcase from '@/components/home/quick-services-showcase'
import KadisGrid from '@/components/home/kadis-grid'
import ManagementPreview from '@/components/home/management-preview'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Scale, 
  ShieldCheck, 
  ExternalLink,
  HelpCircle,
  FileText
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Dignified Hero Section with Live Docket & Search */}
      <HeroSection />

      {/* 2. Executive Leadership: Grand Kadi's Welcome & Interactive Address Modal */}
      <GrandKadiSection />

      {/* 3. Judicial Mission Spring-Animated Metrics */}
      <MissionMetrics />

      {/* 4. Core Judicial E-Services Showcase */}
      <QuickServicesShowcase />

      {/* 5. The Honorable Kadis Appellate Bench Directory */}
      <KadisGrid />

      {/* 6. Management & Registry Administration */}
      <ManagementPreview />

      {/* 7. Comprehensive Registry & Public Access Information */}
      <section id="contact" className="py-16 bg-court-sand-50 border-t border-gray-200 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-green-100 text-court-green-900 border border-court-green-300 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-court-green-800" />
              <span>Public Service & Legal Aid</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900 tracking-tight">
              Court Registries & Contact Information
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Direct communication channels to our Principal Registry in Dutse and Zonal Appellate Divisions across Jigawa State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Address */}
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center flex flex-col items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-court-green-100 text-court-green-800 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-court-slate-900 text-base mb-2">Principal Registry</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Shari'ah Court of Appeal Headquarters<br />
                Old State Secretariat Complex, Dutse<br />
                Jigawa State, Nigeria
              </p>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-court-gold-700 font-bold">
                Serving All 27 Local Government Areas
              </div>
            </Card>

            {/* Helpline */}
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center flex flex-col items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-court-gold-100 text-court-gold-800 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-court-slate-900 text-base mb-2">Registry Helplines</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <div>
                  <span className="text-gray-400 block text-[10px]">Chief Registrar:</span>
                  <a href="tel:+23464721234" className="font-semibold hover:text-court-green-800 transition-colors">
                    +234 (0) 64 721 234
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Litigation & E-Filing Desk:</span>
                  <a href="tel:+23464721235" className="font-semibold hover:text-court-green-800 transition-colors">
                    +234 (0) 64 721 235
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-court-green-800 font-bold">
                Mon - Thu: 8am - 4pm • Fri: 8am - 1pm
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center flex flex-col items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-court-green-100 text-court-green-800 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-court-slate-900 text-base mb-2">Electronic Inquiries</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <div>
                  <span className="text-gray-400 block text-[10px]">General Registry:</span>
                  <a href="mailto:info@shariahcourt.jigawa.gov.ng" className="font-semibold hover:text-court-green-800 transition-colors break-all">
                    info@shariahcourt.jigawa.gov.ng
                  </a>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Appeals Lodgment:</span>
                  <a href="mailto:registry@shariahcourt.jigawa.gov.ng" className="font-semibold hover:text-court-green-800 transition-colors break-all">
                    registry@shariahcourt.jigawa.gov.ng
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-emerald-700 font-bold">
                Official Correspondence Channel
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
