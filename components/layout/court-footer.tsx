'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  FileCheck2, 
  Calendar, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Landmark
} from 'lucide-react'
import { useAccessibility } from '@/components/accessibility/accessibility-provider'

export default function CourtFooter() {
  const { t } = useAccessibility()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-court-green-950 text-white border-t-4 border-court-gold-500 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none islamic-pattern-dark"></div>

      {/* Top Advisory Bar */}
      <div className="bg-court-green-900/90 border-b border-court-green-800/80 py-4 px-4 text-xs">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded bg-court-gold-500/20 text-court-gold-400 border border-court-gold-500/30">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white uppercase tracking-wider">Constitutional Authority:</span>{' '}
              <span className="text-gray-300">
                Established pursuant to Section 275 of the 1999 Constitution of the Federal Republic of Nigeria (as amended).
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-300">
            <span className="inline-flex items-center gap-1.5 text-court-gold-300">
              <Shield className="w-3.5 h-3.5" />
              <span>National Judicial Council (NJC) Accredited</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Institutional Brand & Jurisdiction */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-court-gold-400 flex items-center justify-center flex-shrink-0 shadow-md">
                <img 
                  src="/Court-logo.png" 
                  alt="Official Seal of the Shari'ah Court of Appeal, Jigawa State" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Shari'ah Court of Appeal
                </h3>
                <p className="text-xs text-court-gold-300 font-medium">
                  Jigawa State Judiciary • Nigeria
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed pr-4">
              Upholding the sacred tenets of justice, equity, and Islamic jurisprudence across Jigawa State. 
              The Court exercises appellate and supervisory jurisdiction over Islamic personal status, family law, 
              estate distribution (Mirath), wills, and related civil disputes originating from Area and Upper Shari'ah Courts.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-1 rounded bg-court-green-900 border border-court-green-700 text-gray-200">
                Principal Seat: Dutse
              </span>
              <span className="px-2 py-1 rounded bg-court-green-900 border border-court-green-700 text-gray-200">
                5 Judicial Divisions
              </span>
              <span className="px-2 py-1 rounded bg-court-green-900 border border-court-green-700 text-gray-200">
                99+ Lower Courts
              </span>
            </div>
          </div>

          {/* Col 3: E-Services & Direct Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-court-gold-400 uppercase tracking-wider pb-1 border-b border-court-green-800">
              Judicial E-Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/services#efiling-gateway" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>Electronic Case Filing (E-Filing)</span>
                </Link>
              </li>
              <li>
                <Link href="/services#cause-list-section" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>Daily Cause List & Hearing Board</span>
                </Link>
              </li>
              <li>
                <Link href="/services#mirath-section" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>Mirath (Estate) Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/services/case-tracking" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>Litigant Case Tracking</span>
                </Link>
              </li>
              <li>
                <Link href="/services/marriage-certificate" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>Islamic Marriage Certification</span>
                </Link>
              </li>
              <li>
                <Link href="/services/document-verification" className="hover:text-court-gold-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-court-gold-500" />
                  <span>QR Document Verification</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Zonal Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-court-gold-400 uppercase tracking-wider pb-1 border-b border-court-green-800">
              Judicial Divisions
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Dutse Headquarters:</span>
                  <div className="text-[11px] text-gray-400">Old State Secretariat Complex, Dutse</div>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Hadejia Division:</span>
                  <div className="text-[11px] text-gray-400">Judicial Complex, Kano Road, Hadejia</div>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Kazaure Division:</span>
                  <div className="text-[11px] text-gray-400">High Court Road, Kazaure</div>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white">Gumel & Ringim Divisions</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 5: Hours & Registry Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-court-gold-400 uppercase tracking-wider pb-1 border-b border-court-green-800">
              Registry & Sittings
            </h4>
            <div className="text-xs text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Public Registry Hours:</div>
                  <div className="text-[11px] text-gray-400">Mon – Thu: 8:00 AM – 4:00 PM</div>
                  <div className="text-[11px] text-gray-400">Friday: 8:00 AM – 1:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Chief Registrar Helpline:</div>
                  <div className="text-[11px] text-gray-400">+234 (0) 64 721 234</div>
                  <div className="text-[11px] text-gray-400">+234 (0) 64 721 235</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-court-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Official Correspondence:</div>
                  <div className="text-[11px] text-gray-400 break-all">registry@shariahcourt.jigawa.gov.ng</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, GovTech and Accessibility */}
        <div className="border-t border-court-green-900 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-center sm:text-left">
            <span>© {currentYear} Shari'ah Court of Appeal, Jigawa State. All Rights Reserved.</span>
            <span className="hidden sm:inline text-court-green-800">•</span>
            <span>
              Crafted &amp; Designed By{' '}
              <a
                href="https://www.innovatech-ng.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-court-gold-400 hover:text-court-gold-300 font-semibold underline underline-offset-4 decoration-court-gold-400/60 hover:decoration-court-gold-300 transition-colors cursor-pointer"
              >
                InnovaTech
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-court-gold-300 transition-colors">
              Jurisdiction &amp; Rules
            </Link>
            <span>•</span>
            <Link href="/services/document-verification" className="hover:text-court-gold-300 transition-colors">
              Verify Digital Stamped Orders
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
