'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Scale, 
  GraduationCap, 
  BookOpen, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Award
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface KadiProfile {
  id: string
  name: string
  rank: string
  roleTitle: string
  appointmentPeriod: string
  qualifications: string
  division: string
  landmarkJudgments: string
  image?: string
}

export default function KadisGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const kadisList: KadiProfile[] = [
    {
      id: 'kadi-umar-nasir',
      name: 'Hon. Kadi Umar Nasir Ahmad',
      rank: 'Hon. Kadi 02',
      roleTitle: 'Hon. Kadi 02',
      appointmentPeriod: 'Hon. Kadi (2017 – Date)',
      qualifications: 'LL.B (Common & Islamic Law), BL',
      division: 'Appellate Division 1 (Dutse)',
      landmarkJudgments: 'SCA/JG/CV/08/2022 (Matrimonial Rights)'
    },
    {
      id: 'kadi-safiyanu',
      name: 'Hon. Kadi Safiyanu',
      rank: 'Hon. Kadi 03',
      roleTitle: 'Hon. Kadi 03',
      appointmentPeriod: 'Hon. Kadi (2018 – Date)',
      qualifications: 'Diploma in Shari\'ah & Civil Law, BL',
      division: 'Appellate Division 2 (Hadejia)',
      landmarkJudgments: 'SCA/JG/CV/19/2023 (Waqf Endowment)'
    },
    {
      id: 'kadi-bala-musa',
      name: 'Hon. Kadi Dr. Bala Musa Ph.D',
      rank: 'Hon. Kadi 04',
      roleTitle: 'Hon. Kadi 04',
      appointmentPeriod: 'Hon. Kadi (2018 – Date)',
      qualifications: 'Ph.D in Islamic Studies (ABU Zaria), BL, Former Chief Registrar',
      division: 'Appellate Division 1 (Dutse)',
      landmarkJudgments: 'SCA/JG/CV/03/2023 (Custody & Hadanah)',
      image: '/kadis/hon-kadi-bala-musa.jpg'
    },
    {
      id: 'kadi-ibrahim-yau',
      name: 'Hon. Kadi Ibrahim Ya\'u',
      rank: 'Hon. Kadi 05',
      roleTitle: 'Hon. Kadi 05',
      appointmentPeriod: 'Hon. Kadi (2019 – Date)',
      qualifications: 'LL.B (Shari\'ah), BL',
      division: 'Appellate Division 3 (Kazaure)',
      landmarkJudgments: 'SCA/JG/AP/27/2022 (Inheritance Shares)'
    },
    {
      id: 'kadi-barau-musa',
      name: 'Hon. Kadi Bara’u Bashir Musa',
      rank: 'Hon. Kadi',
      roleTitle: 'Hon. Kadi',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      qualifications: 'LL.B, BL, Maliki Jurisprudence Specialist',
      division: 'Appellate Division 2 (Hadejia)',
      landmarkJudgments: 'SCA/JG/CV/14/2023 (Contractual Shari\'ah)'
    },
    {
      id: 'kadi-ahmad-lamin',
      name: 'Hon. Kadi Ahmad Muhammadu Lamin',
      rank: 'Hon. Kadi',
      roleTitle: 'Hon. Kadi',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      qualifications: 'LL.B (Shari\'ah & Civil Law), BL',
      division: 'Appellate Division 4 (Gumel)',
      landmarkJudgments: 'SCA/JG/AP/05/2024 (Mirath Distribution)'
    },
    {
      id: 'kadi-nasiru-zargina',
      name: 'Hon. Kadi Nasiru Abubakar Zargina',
      rank: 'Hon. Kadi',
      roleTitle: 'Hon. Kadi',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      qualifications: 'LL.B (Hons), BL',
      division: 'Appellate Division 5 (Ringim)',
      landmarkJudgments: 'SCA/JG/CV/31/2023 (Civil Procedure)'
    },
    {
      id: 'kadi-mukhtar-adam',
      name: 'Hon. Kadi Mukhtar Shuaibu Adam',
      rank: 'Hon. Kadi',
      roleTitle: 'Hon. Kadi',
      appointmentPeriod: 'Hon. Kadi (2024 – Date)',
      qualifications: 'LL.B, BL, Islamic Estate Jurisprudence',
      division: 'Appellate Division 1 (Dutse)',
      landmarkJudgments: 'SCA/JG/AP/09/2024 (Appellate Review)'
    }
  ]

  const toggleDetails = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section id="honorable-kadis" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-green-100 text-court-green-900 border border-court-green-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5 text-court-green-800" />
            <span>The Appellate Bench</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-court-slate-900 tracking-tight">
            The Distinguished Honorable Kadis
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            The venerable jurists of the Jigawa State Shari’ah Court of Appeal administering sacred justice, equity, and Islamic appellate jurisprudence.
          </p>
          <div className="w-20 h-1 bg-court-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Kadis Grid - 3 Cards per Row matching Screenshot Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {kadisList.map((kadi) => {
            const isExpanded = expandedId === kadi.id

            return (
              <Card 
                key={kadi.id} 
                className="group border border-gray-200/90 hover:border-court-green-700/60 rounded-2xl p-4 bg-white shadow-sm hover:shadow-judicial transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Box: Clean Aspect-Ratio Container */}
                  <Link href={`/kadis/${kadi.id}`} className="block relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#eef0f2] border border-gray-200/80 mb-3.5 group-hover:border-court-gold-400 transition-colors">
                    {kadi.image ? (
                      <Image
                        src={kadi.image}
                        alt={kadi.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Placeholder Frame with radial camera/photo icon matching user's design */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#e9ecef] relative p-6 select-none">
                        {/* Subtle radial geometric circles */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <div className="w-32 h-32 rounded-full border border-gray-300"></div>
                          <div className="absolute w-20 h-20 rounded-full border border-gray-300"></div>
                          <div className="absolute w-44 h-44 rounded-full border border-gray-200"></div>
                        </div>

                        {/* Central Photo Icon */}
                        <div className="relative z-10 w-14 h-14 rounded-full bg-white/80 border border-gray-300/80 flex items-center justify-center shadow-sm">
                          <svg 
                            className="w-7 h-7 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </Link>

                  {/* Kadi Name: Bold Judicial Green Text linking to profile */}
                  <Link href={`/kadis/${kadi.id}`} className="block">
                    <h3 className="font-bold text-center text-court-green-900 text-base sm:text-lg leading-snug tracking-tight group-hover:text-court-green-700 transition-colors">
                      {kadi.name}
                    </h3>
                  </Link>

                  {/* Year of Appointment to Date: Muted Centered Text */}
                  <p className="text-xs sm:text-sm text-gray-500 text-center font-medium mt-1">
                    {kadi.appointmentPeriod}
                  </p>

                  {/* Division Badge */}
                  <div className="flex justify-center mt-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-court-sand-100 text-gray-600 text-[11px] font-medium border border-gray-200">
                      <MapPin className="w-3 h-3 text-court-gold-600" />
                      <span>{kadi.division}</span>
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons: Profile Button with '-->' arrow and Credentials Drawer */}
                <div className="mt-4 space-y-2">
                  {/* Primary Profile Action Button with required '-->' arrow */}
                  <Link
                    href={`/kadis/${kadi.id}`}
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-court-green-900 hover:bg-court-green-800 text-white text-xs font-semibold shadow-sm transition-all duration-200 group/btn border border-court-gold-400/30 hover:border-court-gold-400"
                    title={`View official profile of ${kadi.name}`}
                  >
                    <span>View Profile &amp; Biography</span>
                    <span className="font-mono text-court-gold-300 group-hover/btn:text-white font-extrabold text-sm group-hover/btn:translate-x-1 transition-transform tracking-wider">
                      --&gt;
                    </span>
                  </Link>

                  {/* Collapsible Judicial Credentials & Precedent Accordion */}
                  <div className="pt-2 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => toggleDetails(kadi.id)}
                      className="w-full flex items-center justify-between text-[11px] font-semibold text-gray-500 hover:text-court-green-800 transition-colors py-1 focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Credentials' : 'Quick Credentials'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-court-green-700" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 space-y-2 text-xs text-gray-600 bg-court-sand-50/70 p-3 rounded-lg border border-gray-100 animate-in fade-in-50 duration-200">
                        <div className="flex items-start gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-court-green-700 mt-0.5 flex-shrink-0" />
                          <span className="text-[11px] leading-relaxed">{kadi.qualifications}</span>
                        </div>

                        <div className="pt-1.5 border-t border-gray-200/60 flex items-center justify-between">
                          <span className="text-[10px] text-gray-500 font-semibold uppercase">Precedent:</span>
                          <Link 
                            href={`/services/judgment-archives?kadi=${encodeURIComponent(kadi.name)}`}
                            className="text-[11px] font-semibold text-court-green-800 hover:underline flex items-center gap-1"
                          >
                            <span className="truncate max-w-[140px]">{kadi.landmarkJudgments}</span>
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom Navigation Link */}
        <div className="mt-14 text-center">
          <Link 
            href="/past-kadis"
            className="inline-flex items-center justify-center border border-court-green-800 text-court-green-900 bg-white hover:bg-court-green-50 text-xs font-semibold px-6 py-2.5 rounded-md shadow-sm transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            View Judicial Bench History &amp; Roll of Former Grand Kadis
          </Link>
        </div>
      </div>
    </section>
  )
}
