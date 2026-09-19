'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Scale, 
  Calendar, 
  Eye, 
  Download, 
  FileText, 
  Video, 
  Image as ImageIcon, 
  Newspaper,
  Globe,
  MapPin,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Plane,
  Building,
  Sparkles,
  BookOpen
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ConferenceItem {
  id: string
  title: string
  scope: 'international' | 'domestic'
  location: string
  country: string
  flag: string
  date: string
  formattedDate: string
  delegationLead: string
  delegates: string[]
  theme: string
  summary: string
  outcomes: string[]
  isFeatured?: boolean
}

export default function MediaPage() {
  const [conferenceTab, setConferenceTab] = useState<'all' | 'international' | 'domestic'>('all')

  const conferences: ConferenceItem[] = [
    {
      id: 'conf-rabat-2026',
      title: 'International Colloquium on Maliki Islamic Jurisprudence & Contemporary Judicial Adjudication',
      scope: 'international',
      location: 'Rabat, Kingdom of Morocco',
      country: 'Morocco',
      flag: '🇲🇦',
      date: '2026-09-05',
      formattedDate: '5th September, 2026',
      delegationLead: 'Hon. Grand Kadi Muhammad Sani Salihu',
      delegates: [
        'Hon. Grand Kadi Muhammad Sani Salihu (Head of Delegation)',
        'Hon. Kadi Umar Nasir Ahmad (Hon. Kadi 02)',
        'Hon. Kadi Bala Musa Ph.D (Hon. Kadi 04)',
        'Hon. Kadi Ibrahim Ya\'u (Hon. Kadi 05)',
        'Hon. Kadi Ahmad Muhammadu Lamin (Appellate Kadi)'
      ],
      theme: 'Harmonization of Maliki Legal Traditions in Modern Appellate Systems and Cross-Border Estate Administration',
      summary: 'A landmark high-level international judicial summit bringing together Grand Kadis, Supreme Shari\'ah jurists, and Islamic scholars from across North and West Africa. The conference focused on modernizing appellate practice directions, procedural justice in inheritance (Mirath) execution, and international judicial cooperation.',
      outcomes: [
        'Adoption of the Rabat Declaration on Islamic Appellate Procedure Harmonization',
        'Bilateral judicial exchange framework between Jigawa State Shari\'ah Court of Appeal and the Moroccan Supreme Judicial Institute',
        'Comparative study on digital probate registries and cross-border estate succession under Maliki doctrine'
      ],
      isFeatured: true
    },
    {
      id: 'conf-london-2025',
      title: 'Commonwealth & Global Islamic Law Symposium: Cross-Jurisdictional Private International Law',
      scope: 'international',
      location: 'London, United Kingdom',
      country: 'United Kingdom',
      flag: '🇬🇧',
      date: '2025-09-18',
      formattedDate: 'September 2025',
      delegationLead: 'Hon. Kadi Bala Musa Ph.D',
      delegates: [
        'Hon. Kadi Bala Musa Ph.D (Head of Delegation)',
        'Hon. Kadi Ibrahim Ya\'u (Hon. Kadi 05)',
        'Judicial Research Fellows & Senior Registry Counsel'
      ],
      theme: 'Application of Islamic Personal Status and Estate Succession within Common Law Environments',
      summary: 'Convened in London, this international symposium addressed the interaction of Islamic personal law, Waqf charitable endowments, and matrimonial asset distribution within international and commonwealth jurisdictions. The Jigawa judicial delegation presented papers on certified probate execution.',
      outcomes: [
        'Presentation of the Jigawa State Shari\'ah Court certified electronic true copy (CTC) verification framework',
        'Academic exchange with faculty members from SOAS University of London and the Commonwealth Judicial Education Institute (CJEI)',
        'Establishment of research linkages for judicial law report archiving'
      ]
    },
    {
      id: 'conf-abuja-2025',
      title: 'Biennial All-Nigeria Judges Conference of Superior Courts of Record',
      scope: 'domestic',
      location: 'National Judicial Institute (NJI) Complex, Abuja, Nigeria',
      country: 'Nigeria',
      flag: '🇳🇬',
      date: '2025-11-20',
      formattedDate: 'November 2025',
      delegationLead: 'Hon. Grand Kadi Muhammad Sani Salihu',
      delegates: [
        'Hon. Grand Kadi Muhammad Sani Salihu',
        'Hon. Kadis of the Jigawa State Shari\'ah Court of Appeal Bench',
        'Kabiru Gumel Esq. (Acting Chief Registrar)'
      ],
      theme: 'Strengthening Institutional Trust, Judicial Independence, and Expeditious Appellate Disposal',
      summary: 'The statutory national conference under the auspices of the Chief Justice of Nigeria (CJN) and the National Judicial Institute (NJI), gathering all heads of superior courts and jurists across the federation to review constitutional appellate jurisprudence and ethical standards.',
      outcomes: [
        'Implementation of National Judicial Policy guidelines on expeditious resolution of civil and family appeals',
        'Adoption of state-level automated cause list tracking protocols',
        'Review of Judicial Service Commission disciplinary resolutions'
      ]
    },
    {
      id: 'conf-kano-2026',
      title: 'Northern States Shari\'ah Court of Appeal Appellate Jurists Colloquium',
      scope: 'domestic',
      location: 'Kano / Dutse Judicial Enclave, Nigeria',
      country: 'Nigeria',
      flag: '🇳🇬',
      date: '2026-03-14',
      formattedDate: 'March 2026',
      delegationLead: 'Hon. Grand Kadi & Panel of Kadis',
      delegates: [
        'Hon. Grand Kadi Muhammad Sani Salihu',
        'Hon. Kadi Umar Nasir Ahmad',
        'Hon. Kadi Safiyanu',
        'Hon. Kadi Bara’u Bashir Musa',
        'Principal Registrars of the 5 Judicial Divisions'
      ],
      theme: 'Uniform Application of Shari\'ah Court Civil Procedure Rules and Waqf Property Protection',
      summary: 'Regional conference of Northern Nigeria Shari\'ah Courts of Appeal focusing on practice directions, preventing protracted litigation in land tenure disputes, and ensuring equitable Quranic estate distribution.',
      outcomes: [
        'Harmonized practice directions for expedited motion hearings',
        'Standardization of Mirath computation sheets across appellate registries',
        'Continuing judicial education modules for lower Shari\'a court judges'
      ]
    },
    {
      id: 'conf-dutse-2026',
      title: 'Jigawa State Annual Shari\'ah Bench & Bar Collaborative Conference',
      scope: 'domestic',
      location: 'State Judicial Complex Conference Hall, Dutse, Jigawa State',
      country: 'Nigeria',
      flag: '🇳🇬',
      date: '2026-06-11',
      formattedDate: 'June 2026',
      delegationLead: 'Hon. Grand Kadi Muhammad Sani Salihu',
      delegates: [
        'The Entire Appellate Bench of the Shari\'ah Court of Appeal',
        'All Upper Shari\'ah Court Judges (Alkalis)',
        'Nigerian Bar Association (NBA Dutse Branch)',
        'Muslim Lawyers Association of Nigeria (MULAN Jigawa State)'
      ],
      theme: 'Synergy Between Bench and Bar: Enhancing Citizen Access to Justice and Eliminating Trial Delays',
      summary: 'Annual collaborative state forum engaging appellate Kadis, lower trial judges, and legal practitioners to review court rules, electronic filing procedures, and professional ethics.',
      outcomes: [
        'Launch of legal practitioners’ orientation workshops for the Court’s new E-Filing portal',
        'Agreement on strict timeframes for settling and compiling appellate records of proceedings',
        'Public legal enlightenment initiatives for rural communities across the 27 LGAs'
      ]
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: "Jigawa Grand Kadi Leads High-Level Judicial Delegation to International Conference in Rabat, Morocco",
      excerpt: "The Hon. Grand Kadi Muhammad Sani Salihu, accompanied by distinguished Kadis of the Court, represents Nigeria at the prestigious International Colloquium on Islamic Jurisprudence.",
      date: "2026-09-06",
      category: "International Diplomacy",
      image: "/placeholder.jpg",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Shari'ah Court of Appeal Launches State-of-the-Art E-Filing & Digital Cause List Portal",
      excerpt: "Citizens and legal practitioners can now lodge appeals, track cause lists, and verify court orders online with 256-bit institutional encryption.",
      date: "2026-08-15",
      category: "Digital Judiciary",
      image: "/placeholder.jpg",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Judicial Service Commission Confirms New Directorial Appointments for Shari'ah Court of Appeal",
      excerpt: "The JSC confirms appointments of DCRs, Chief Inspector of Shari'a Courts, and Directors to bolster administrative efficiency across all 5 divisions.",
      date: "2026-03-04",
      category: "Appointments",
      image: "/placeholder.jpg",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Automated Mirath Estate Calculator Introduced to Facilitate Transparent Inheritance Distribution",
      excerpt: "The Court pioneers an algorithmic probate solution in strict conformity with Surah An-Nisa (4:11-12) to serve citizens and probate applicants.",
      date: "2026-02-10",
      category: "Public Service",
      image: "/placeholder.jpg",
      readTime: "2 min read"
    }
  ]

  const circulars = [
    {
      id: "circ-01-2026",
      title: "Practice Direction No. 1 of 2026: Mandatory Electronic Transmission of Appeal Records",
      date: "August 2026",
      ref: "JGSCA/PD/2026/01",
      issuedBy: "Office of the Hon. Grand Kadi",
      summary: "Directs all Upper Shari'ah Courts to compile and transmit digitized electronic records of proceedings alongside hard copies to eliminate appellate delays."
    },
    {
      id: "circ-02-2026",
      title: "Notice on Statutory Court Filing Fees & Remita E-Payment Validation",
      date: "May 2026",
      ref: "JGSCA/ADM/CIR/2026/04",
      issuedBy: "Office of the Chief Registrar & Directorate of Admin & Finance (DAF)",
      summary: "Reiterates that all court fee payments must be processed through the approved Remita RRR channels with official digital receipts issued by court cashiers."
    },
    {
      id: "circ-03-2025",
      title: "Circular on Observance of Cause List Sittings and Punctuality Across Zonal Divisions",
      date: "October 2025",
      ref: "JGSCA/INS/2025/11",
      issuedBy: "Chief Inspector of Shari'a Courts",
      summary: "Guidelines on daily cause list administration, timely hearing notices, and attendance across Dutse, Hadejia, Kazaure, Gumel, and Ringim divisions."
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Jigawa State Shari’ah Court of Appeal Law Reports (Volume 14)",
      description: "Compendium of landmark appellate judgments on Islamic personal status, family law, and estate succession.",
      type: "PDF",
      size: "4.2 MB",
      date: "2026-01-15"
    },
    {
      id: 2,
      title: "Official Handbook: Guide to Mirath (Islamic Inheritance) & Waqf Administration",
      description: "Scholarly and procedural guide for legal practitioners, probate administrators, and citizens.",
      type: "PDF",
      size: "2.8 MB",
      date: "2025-11-20"
    },
    {
      id: 3,
      title: "Jigawa State Shari’ah Court Civil Procedure Rules & Practice Directions",
      description: "The statutory procedural framework governing appeal notices, motions, bail recognizances, and execution of judgments.",
      type: "PDF",
      size: "3.5 MB",
      date: "2025-08-10"
    }
  ]

  const filteredConferences = conferences.filter(c => {
    if (conferenceTab === 'all') return true
    return c.scope === conferenceTab
  })

  return (
    <div className="min-h-screen bg-court-sand-50/40">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-12 md:py-16 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-gold-500/20 border border-court-gold-400/40 text-court-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5 text-court-gold-400" />
              <span>Judicial Diplomacy, Media & Public Records</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              Media, Circulars & Publications
            </h1>
            <p className="text-sm sm:text-base text-court-sand-200">
              Official press announcements, practice directions, legal publications, and domestic and international conferences attended by the Honorable Grand Kadi and the Appellate Bench.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-16 max-w-7xl">

        {/* SECTION 1: JUDICIAL CONFERENCES (INTERNATIONAL & DOMESTIC) */}
        <section id="conferences-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-court-green-100 text-court-green-900 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Globe className="w-3 h-3 text-court-green-800" />
                <span>Judicial Conferences & Symposia</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
                Conferences & Colloquiums (Overseas & Domestic)
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                Official chronicle of academic, judicial, and diplomatic conferences attended by the Honorable Grand Kadi and the Distinguished Honorable Kadis in Nigeria and abroad.
              </p>
            </div>

            {/* Scope Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setConferenceTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  conferenceTab === 'all'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Conferences ({conferences.length})
              </button>
              <button
                type="button"
                onClick={() => setConferenceTab('international')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  conferenceTab === 'international'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Plane className="w-3.5 h-3.5 text-court-gold-600" />
                <span>International (Overseas)</span>
              </button>
              <button
                type="button"
                onClick={() => setConferenceTab('domestic')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  conferenceTab === 'domestic'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Building className="w-3.5 h-3.5 text-court-green-700" />
                <span>Domestic (Nigeria)</span>
              </button>
            </div>
          </div>

          {/* Conference Cards List */}
          <div className="space-y-6">
            {filteredConferences.map((conf) => {
              const isInternational = conf.scope === 'international'

              return (
                <Card 
                  key={conf.id} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-judicial ${
                    conf.isFeatured 
                      ? 'border-2 border-court-gold-500 bg-gradient-to-br from-white via-court-sand-50/60 to-white' 
                      : 'border-gray-200 hover:border-court-green-700 bg-white'
                  }`}
                >
                  {/* Top Banner Stripe for Featured / Scope */}
                  <div className={`px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold ${
                    isInternational 
                      ? 'bg-gradient-to-r from-court-green-950 to-court-green-900 text-white' 
                      : 'bg-court-sand-100 text-court-slate-900 border-b border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{conf.flag}</span>
                      <span className="uppercase tracking-wider font-extrabold text-[11px] text-court-gold-300">
                        {conf.scope === 'international' ? 'International Judicial Conference (Overseas)' : 'National / Domestic Conference (Nigeria)'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {conf.isFeatured && (
                        <Badge className="bg-court-gold-500 text-court-green-950 font-extrabold text-[10px] px-2 py-0.5">
                          ★ Most Recent Mission
                        </Badge>
                      )}
                      <span className="flex items-center gap-1 text-[11px] font-medium opacity-90">
                        <Calendar className="w-3.5 h-3.5" />
                        {conf.formattedDate}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      
                      {/* Left: Core Information */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-court-gold-700 font-semibold mb-1">
                            <MapPin className="w-3.5 h-3.5 text-court-gold-600 flex-shrink-0" />
                            <span>{conf.location}</span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-extrabold text-court-slate-900 leading-snug">
                            {conf.title}
                          </h3>
                        </div>

                        {/* Theme Box */}
                        <div className="p-3.5 rounded-xl bg-court-sand-100/70 border border-court-gold-200 text-xs text-court-slate-900">
                          <strong className="block font-bold text-court-green-900 uppercase tracking-wide text-[10px] mb-0.5">
                            Conference Theme:
                          </strong>
                          <p className="italic leading-relaxed font-medium">
                            "{conf.theme}"
                          </p>
                        </div>

                        {/* Narrative Summary */}
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {conf.summary}
                        </p>

                        {/* Key Outcomes */}
                        <div>
                          <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-court-green-700" />
                            <span>Key Deliberations & Communiqué Outcomes:</span>
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                            {conf.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-court-gold-500 mt-1.5 flex-shrink-0"></span>
                                <span className="leading-relaxed text-[11px]">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Official Delegation & Attendees */}
                      <div className="w-full lg:w-80 flex-shrink-0 bg-court-sand-50 rounded-xl p-4 sm:p-5 border border-court-sand-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 border-b border-gray-200 pb-2 mb-3">
                            <Users className="w-4 h-4 text-court-green-800" />
                            <span className="font-bold text-xs text-court-slate-900 uppercase tracking-wider">
                              Official Delegation
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div className="text-[11px] font-bold text-court-green-950 bg-court-green-100/80 p-2 rounded-lg border border-court-green-200 flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-court-gold-600 flex-shrink-0" />
                              <span className="truncate">Led by: {conf.delegationLead}</span>
                            </div>

                            <div className="text-[11px] text-gray-700 space-y-1.5 pt-1">
                              <span className="text-[10px] font-bold uppercase text-gray-500 block">
                                Accompanying Entourage:
                              </span>
                              {conf.delegates.map((del, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-gray-700 leading-tight">
                                  <span className="text-court-gold-600 font-bold">•</span>
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                          <Badge variant="outline" className="text-[10px] bg-white border-court-green-800 text-court-green-900 font-semibold">
                            Archived Dispatch
                          </Badge>
                          <span className="text-[11px] text-court-green-800 font-bold flex items-center gap-0.5">
                            Official Registry Record
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* SECTION 2: LATEST NEWS & DEVELOPMENTS */}
        <section id="news-section">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-court-gold-100 text-court-gold-900 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Newspaper className="w-3 h-3 text-court-gold-700" />
                <span>Official News Bulletin</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
                Latest News & Judicial Dispatches
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="border border-gray-200 hover:border-court-gold-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-judicial transition-all duration-300 flex flex-col justify-between bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge className="bg-court-green-800 text-white text-[10px] font-bold">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5 text-court-gold-600" />
                      <span>{new Date(article.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-court-slate-900 leading-snug hover:text-court-green-800 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                    <span className="text-gray-400 text-[11px]">{article.readTime}</span>
                    <span className="text-court-green-800 font-bold hover:text-court-green-700 flex items-center gap-1">
                      Full Dispatch <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 3: PRACTICE DIRECTIONS & OFFICIAL CIRCULARS */}
        <section id="circulars-section">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-court-green-100 text-court-green-900 text-xs font-bold uppercase tracking-wider mb-1.5">
              <FileText className="w-3 h-3 text-court-green-800" />
              <span>Directorial Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
              Practice Directions & Official Circulars
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Official circular letters issued by the Office of the Grand Kadi, the Chief Registrar, and the Inspectorate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {circulars.map((circ) => (
              <Card key={circ.id} className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm hover:shadow-judicial transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-[10px] font-bold bg-court-sand-100 border-court-sand-300 text-court-slate-900">
                      {circ.ref}
                    </Badge>
                    <span className="text-[11px] text-gray-500 font-medium">{circ.date}</span>
                  </div>

                  <h3 className="font-bold text-court-slate-900 text-sm leading-snug mb-2">
                    {circ.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {circ.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <span className="text-[10px] text-court-gold-700 font-semibold block">
                    Issued by: {circ.issuedBy}
                  </span>
                  <Button variant="outline" size="sm" className="w-full text-xs border-court-green-800 text-court-green-900 hover:bg-court-green-50">
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download Official Circular (PDF)
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 4: LAW REPORTS & STATUTORY PUBLICATIONS */}
        <section id="publications-section">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-court-gold-100 text-court-gold-900 text-xs font-bold uppercase tracking-wider mb-1.5">
              <BookOpen className="w-3 h-3 text-court-gold-700" />
              <span>Appellate Compendiums</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
              Law Reports, Research & Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="border border-gray-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm hover:shadow-judicial transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-court-green-100 text-court-green-900 font-bold text-[10px]">
                      {pub.type} • {pub.size}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">{pub.date}</span>
                  </div>

                  <h3 className="font-bold text-court-slate-900 text-base leading-snug mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {pub.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <Button className="w-full bg-court-green-800 hover:bg-court-green-900 text-white text-xs font-bold">
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download Full Publication
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 5: MEDIA & COMMUNICATIONS DESK */}
        <section className="rounded-2xl bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white p-8 sm:p-10 border-2 border-court-gold-500 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-xs mb-1">
              Directorate of Protocol & Publicity
            </Badge>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Media Inquiries & Official Press Desk
            </h3>
            <p className="text-xs sm:text-sm text-court-sand-200 max-w-xl">
              For official press releases, conference communiqués, photographic records, and judicial interview requests, contact the Spokesperson of the Jigawa State Judiciary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-xs flex-shrink-0">
            <a 
              href="mailto:spokesperson@shariahcourt.jigawa.gov.ng" 
              className="px-5 py-3 rounded-xl bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 font-bold transition-all text-center shadow-judicial-gold"
            >
              Contact Press Bureau
            </a>
            <Link 
              href="/management" 
              className="px-5 py-3 rounded-xl bg-court-green-900/80 hover:bg-court-green-800 text-white border border-court-gold-400/50 font-semibold transition-all text-center"
            >
              Protocol & Publicity Directorate
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}