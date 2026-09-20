'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Building, 
  Award, 
  BookOpen, 
  Scale, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Search, 
  Heart, 
  ShieldCheck, 
  User, 
  ChevronDown, 
  ChevronUp, 
  History, 
  Sparkles,
  ArrowLeft,
  GraduationCap
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { pastKadisList, PastKadiProfile } from '@/lib/past-kadis-data'

export default function PastKadisPage() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'grand-kadi' | 'kadi' | 'retired' | 'deceased'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedKadi, setExpandedKadi] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedKadi(prev => (prev === id ? null : id))
  }

  const filteredJurists = pastKadisList.filter(jurist => {
    // Category match
    const matchCategory = 
      filterCategory === 'all' ||
      (filterCategory === 'grand-kadi' && jurist.roleCategory === 'grand-kadi') ||
      (filterCategory === 'kadi' && jurist.roleCategory === 'kadi') ||
      (filterCategory === 'retired' && jurist.status === 'retired') ||
      (filterCategory === 'deceased' && jurist.status === 'deceased')

    // Search match
    const query = searchQuery.toLowerCase().trim()
    const matchSearch = 
      query === '' ||
      jurist.name.toLowerCase().includes(query) ||
      jurist.rankTitle.toLowerCase().includes(query) ||
      jurist.tenureYears.toLowerCase().includes(query) ||
      jurist.division.toLowerCase().includes(query) ||
      (jurist.traditionalOrHonoraryTitles && jurist.traditionalOrHonoraryTitles.toLowerCase().includes(query))

    return matchCategory && matchSearch
  })

  const deceasedCount = pastKadisList.filter(k => k.status === 'deceased').length
  const retiredCount = pastKadisList.filter(k => k.status === 'retired').length
  const grandKadiCount = pastKadisList.filter(k => k.roleCategory === 'grand-kadi').length

  return (
    <div className="min-h-screen bg-[#fafaf7]">
      {/* Breadcrumb Bar */}
      <div className="bg-court-green-950 text-white/80 py-3 border-b border-court-gold-500/30 text-xs">
        <div className="container mx-auto px-4 flex items-center gap-2">
          <Link href="/" className="hover:text-court-gold-300 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-court-gold-400" />
          <Link href="/about" className="hover:text-court-gold-300 transition-colors">About Us</Link>
          <ChevronRight className="w-3 h-3 text-court-gold-400" />
          <span className="text-court-gold-300 font-semibold">Roll of Honor (Past Grand Kadis &amp; Kadis)</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-14 md:py-20 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-court-gold-500/20 border border-court-gold-400/40 text-court-gold-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <History className="w-3.5 h-3.5 text-court-gold-400" />
            <span>Roll of Honor &amp; Judicial Heritage (1991 – Present)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight">
            Past Honorable Grand Kadis &amp; Kadis
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-court-sand-200 mt-4 leading-relaxed font-light">
            Commemorating the illustrious jurists, heads of court, and scholarly legal architects who laid the foundations and nurtured Islamic appellate jurisprudence in Jigawa State since its establishment on August 27, 1991.
          </p>

          <div className="w-24 h-1 bg-court-gold-500 mx-auto mt-6 rounded-full shadow-glow"></div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-xl sm:text-2xl font-black text-court-gold-400 font-serif">1991</span>
              <span className="text-gray-300 text-[11px]">Year Established</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-xl sm:text-2xl font-black text-court-gold-400 font-serif">{grandKadiCount}</span>
              <span className="text-gray-300 text-[11px]">Past Grand Kadis</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-xl sm:text-2xl font-black text-court-gold-400 font-serif">{retiredCount}</span>
              <span className="text-gray-300 text-[11px]">Honorably Retired</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-xl sm:text-2xl font-black text-court-gold-400 font-serif">{deceasedCount}</span>
              <span className="text-gray-300 text-[11px]">In Memoriam (Marigayi)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Filter and Search Bar */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-court-slate-900 tracking-tight">
                Judicial Roster of Former Bench Members
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Historical records of retired and deceased jurists of the Jigawa State Shari’ah Court of Appeal.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, title, or division..."
                className="pl-10 text-xs bg-white border-gray-300 focus:border-court-gold-500 rounded-xl"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterCategory === 'all'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Historic Jurists ({pastKadisList.length})
            </button>

            <button
              type="button"
              onClick={() => setFilterCategory('grand-kadi')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterCategory === 'grand-kadi'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-court-gold-600" />
              <span>Past Grand Kadis (Heads of Court)</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterCategory('kadi')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterCategory === 'kadi'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-court-gold-600" />
              <span>Past Honorable Kadis</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterCategory('retired')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterCategory === 'retired'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Retired with Honor ({retiredCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilterCategory('deceased')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                filterCategory === 'deceased'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-amber-600" />
              <span>In Memoriam / Deceased ({deceasedCount})</span>
            </button>
          </div>
        </div>

        {/* Jurists Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {filteredJurists.map((jurist) => {
            const isGrandKadi = jurist.roleCategory === 'grand-kadi'
            const isDeceased = jurist.status === 'deceased'
            const isExpanded = expandedKadi === jurist.id

            return (
              <Card 
                key={jurist.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-judicial ${
                  isDeceased 
                    ? 'border-amber-200 hover:border-amber-400' 
                    : 'border-gray-200 hover:border-court-gold-400'
                }`}
              >
                {/* Header Strip */}
                <div className={`px-6 py-3 flex items-center justify-between text-xs border-b ${
                  isDeceased 
                    ? 'bg-gradient-to-r from-amber-50 to-amber-100/50 border-amber-200 text-amber-900' 
                    : 'bg-court-sand-50/80 border-gray-100 text-gray-700'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-[11px] text-court-slate-800 uppercase tracking-wider">
                      {jurist.rankTitle}
                    </span>
                  </div>

                  {/* Status Badge */}
                  {isDeceased ? (
                    <Badge className="bg-amber-700 text-white text-[10px] font-bold px-2.5 py-0.5 border-none flex items-center gap-1">
                      <span>In Memoriam (Marigayi)</span>
                    </Badge>
                  ) : (
                    <Badge className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-0.5 border-none flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Retired with Honor</span>
                    </Badge>
                  )}
                </div>

                {/* Card Main Body */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    {/* Placeholder Frame: Dignified Ceremonial Avatar */}
                    <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl bg-gradient-to-b from-court-sand-100 to-court-sand-200/80 border-2 border-dashed border-court-gold-300 flex flex-col items-center justify-center text-center p-2 flex-shrink-0 shadow-inner">
                      <div className="w-12 h-12 rounded-full bg-white/90 border border-court-gold-300 flex items-center justify-center text-court-green-900 shadow-sm mb-1.5">
                        <User className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-court-slate-600 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                        {isGrandKadi ? 'Grand Kadi' : 'Hon. Kadi'}
                      </span>
                    </div>

                    {/* Basic Jurist Details */}
                    <div className="flex-grow">
                      <div className="text-[11px] font-semibold text-court-gold-700 uppercase tracking-wider mb-0.5">
                        {jurist.honorific}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-court-slate-900 font-serif leading-snug">
                        {jurist.name}
                      </h3>

                      {jurist.traditionalOrHonoraryTitles && (
                        <div className="mt-1 text-xs text-court-green-800 font-medium">
                          ★ {jurist.traditionalOrHonoraryTitles}
                        </div>
                      )}

                      <div className="mt-3 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-gray-600">
                        <span className="flex items-center gap-1 text-court-slate-700 font-semibold bg-court-sand-100 px-2 py-0.5 rounded">
                          <Calendar className="w-3.5 h-3.5 text-court-gold-600" />
                          <span>Tenure: {jurist.tenureYears}</span>
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-court-green-700" />
                          <span>{jurist.division}</span>
                        </span>
                      </div>

                      {/* Deceased Memorial Notice */}
                      {isDeceased && jurist.passingDate && (
                        <div className="mt-3 p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950 flex items-start gap-2">
                          <Heart className="w-3.5 h-3.5 text-amber-700 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold">Demise:</span> {jurist.passingDate} ({jurist.passingYear})
                            {jurist.burialOrMemorialLocation && (
                              <div className="text-[10px] text-amber-800 mt-0.5">
                                {jurist.burialOrMemorialLocation}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Biography Snippet */}
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
                    <p>{jurist.biography[0]}</p>
                    {isExpanded && jurist.biography.slice(1).map((para, i) => (
                      <p key={i} className="text-gray-600">{para}</p>
                    ))}
                  </div>

                  {/* Collapsible Key Contributions & Jurisprudence */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4 pt-4 border-t border-gray-100 animate-in fade-in-50 duration-200">
                      {/* Key Contributions */}
                      <div>
                        <h4 className="text-xs font-bold text-court-green-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-court-gold-600" />
                          <span>Key Institutional &amp; Judicial Contributions:</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-600 pl-2">
                          {jurist.keyContributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-court-gold-500 mt-1.5 flex-shrink-0"></span>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Jurisprudential Specialization */}
                      <div>
                        <h4 className="text-xs font-bold text-court-green-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-court-gold-600" />
                          <span>Jurisprudential Areas of Focus:</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {jurist.jurisprudentialSpecialization.map((spec, sidx) => (
                            <span 
                              key={sidx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-court-sand-100 text-court-green-950 border border-court-gold-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Historical Note */}
                      <div className="p-3 rounded-lg bg-court-sand-50 border border-court-gold-200 text-xs text-court-slate-800 italic">
                        <strong>Historical Citation:</strong> "{jurist.historicalNotes}"
                      </div>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <div className="mt-4 pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => toggleExpand(jurist.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-court-green-800 hover:text-court-gold-700 transition-colors py-1 focus:outline-none"
                    >
                      <span>{isExpanded ? 'Show Less' : 'View Full Biography & Legacy'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Historical Timeline of the Shari'ah Court of Appeal */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <div className="text-center mb-8">
            <Badge className="bg-court-green-100 text-court-green-900 border border-court-green-300 text-xs font-bold mb-2">
              Judicial Evolution
            </Badge>
            <h3 className="text-2xl font-extrabold text-court-slate-900 font-serif">
              Institutional Milestones Since 1991
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Key constitutional and administrative epochs shaping the Jigawa State Shari’ah appellate bench.
            </p>
          </div>

          <div className="relative border-l-2 border-court-gold-400 pl-6 ml-4 sm:ml-8 space-y-8">
            {/* 1991 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-court-green-800 border-2 border-white shadow"></div>
              <span className="inline-block px-2 py-0.5 rounded bg-court-green-100 text-court-green-900 text-xs font-bold mb-1">
                August 27, 1991
              </span>
              <h4 className="font-bold text-court-slate-900 text-sm sm:text-base">
                State Creation &amp; Inception of the Appellate Court
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Jigawa State was carved out of Kano State by the Federal Military Government. The foundational machinery of the Shari’ah Court of Appeal was constituted in Dutse under pioneer leadership, inheriting jurisdictions in Islamic personal law across the 27 Local Government Areas.
              </p>
            </div>

            {/* 2000 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-court-gold-500 border-2 border-white shadow"></div>
              <span className="inline-block px-2 py-0.5 rounded bg-court-gold-100 text-court-gold-900 text-xs font-bold mb-1">
                2000 – 2002
              </span>
              <h4 className="font-bold text-court-slate-900 text-sm sm:text-base">
                Statutory Shari’ah Legal Framework Expansion
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Enactment of comprehensive Shari’ah court legislation in Jigawa State, establishing Upper Shari’a Courts, structured appellate divisions, and formalizing the appellate inspectorate division.
              </p>
            </div>

            {/* 2012 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-court-green-800 border-2 border-white shadow"></div>
              <span className="inline-block px-2 py-0.5 rounded bg-court-green-100 text-court-green-900 text-xs font-bold mb-1">
                2012 – 2015
              </span>
              <h4 className="font-bold text-court-slate-900 text-sm sm:text-base">
                Judicial Complex Development &amp; Rural Registry Expansion
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Modernization of court premises in Dutse, construction of official residences for the Grand Kadi and Kadis, and expansion of judicial divisional registries to Hadejia, Gumel, Kazaure, Ringim, and Birnin Kudu.
              </p>
            </div>

            {/* 2020 to Date */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-court-green-900 border-2 border-court-gold-400 shadow"></div>
              <span className="inline-block px-2 py-0.5 rounded bg-court-green-800 text-white text-xs font-bold mb-1">
                2020 – Present
              </span>
              <h4 className="font-bold text-court-slate-900 text-sm sm:text-base">
                Modern Appellate Governance &amp; Digital Transformation
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                Appointment of Hon. Grand Kadi Muhammad Sani Salihu by the NJC; inauguration of electronic filing, automated cause lists, unannounced judicial ethics inspections, and digital judgment archiving.
              </p>
            </div>
          </div>
        </div>

        {/* Solemn In Memoriam Tribute Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white border-2 border-court-gold-400 text-center relative overflow-hidden shadow-judicial">
          <div className="absolute inset-0 opacity-10 islamic-pattern-dark pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-court-gold-500/20 text-court-gold-400 border border-court-gold-400/40 mb-3">
              <Heart className="w-6 h-6 text-court-gold-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-white tracking-wide">
              Tribute to Our Departed Judicial Forefathers
            </h3>
            <p className="text-xs sm:text-sm text-court-sand-200 mt-2 max-w-2xl mx-auto leading-relaxed">
              "We pray that Almighty Allah (SWT) in His infinite mercy grants al-Jannatul Firdaus to the late Hon. Grand Kadi Isah Jibrin Gantsa, the late Hon. Kadi Bashir Birnin-Kudu, and all deceased judicial officers who served the course of justice and uprightness in Jigawa State. Their scholarly rulings and dedication remain an enduring legacy for generations."
            </p>
            <div className="mt-4 font-arabic text-base sm:text-lg text-court-gold-300">
              إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ • رَحِمَهُمُ ٱللَّٰهُ رَحْمَةً وَاسِعَةً
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTAs */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="/#honorable-kadis"
            className="inline-flex items-center justify-center border border-court-green-800 text-court-green-900 bg-white hover:bg-court-green-50 text-xs font-semibold px-6 py-2.5 rounded-md shadow-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
            Return to Current Appellate Bench
          </Link>

          <Link 
            href="/services/judgment-archives"
            className="inline-flex items-center justify-center bg-court-green-900 hover:bg-court-green-800 text-white text-xs font-semibold px-6 py-2.5 rounded-md shadow-sm border border-court-gold-400 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            Explore Landmark Precedents &amp; Law Reports
          </Link>
        </div>
      </div>
    </div>
  )
}
