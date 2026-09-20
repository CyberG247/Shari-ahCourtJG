'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Award, 
  Quote, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  Scale, 
  X,
  FileCheck,
  History
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

export default function GrandKadiSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="grand-kadi" className="py-16 md:py-24 bg-court-sand-50 relative overflow-hidden border-b border-gray-200">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none">
        <img src="/Court-logo.png" alt="Watermark" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-gold-100 text-court-gold-900 border border-court-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5 text-court-gold-700" />
              <span>Leadership & Judicial Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-court-slate-900 tracking-tight">
              Address by the Honorable Grand Kadi
            </h2>
            <div className="w-20 h-1 bg-court-gold-500 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Executive Layout: Portrait & Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Executive Portrait with Depth & Crest Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                {/* Decorative Frame Elements */}
                <div className="absolute -inset-2 bg-gradient-to-r from-court-green-800 to-court-gold-500 rounded-2xl opacity-40 blur-md group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative bg-white p-3 rounded-2xl shadow-judicial border border-court-gold-300">
                  <div className="relative h-80 sm:h-96 md:h-[420px] w-full rounded-xl overflow-hidden bg-court-green-950">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="His Lordship, Hon. Grand Kadi Muhammad Sani Salihu"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-court-green-950/80 via-transparent to-transparent"></div>
                    
                    {/* Floating Title Inside Photo */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-court-gold-400 bg-court-green-950/80 px-2 py-0.5 rounded inline-block mb-1">
                        Head of Court
                      </span>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        Hon. Grand Kadi Muhammad Sani Salihu
                      </h3>
                      <p className="text-xs text-court-sand-200">
                        Grand Kadi, Shari'ah Court of Appeal, Jigawa State
                      </p>
                    </div>
                  </div>

                  {/* Official Insignia Pill & Profile Link */}
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between px-2.5 py-1.5 bg-court-sand-100 rounded-lg text-xs border border-court-sand-200">
                      <span className="text-court-slate-800 font-semibold flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-court-gold-600" />
                        Appointed 2020 (NJC)
                      </span>
                      <span className="text-court-green-800 font-bold text-[11px]">
                        Principal Seat: Dutse
                      </span>
                    </div>

                    <Link
                      href="/kadis/grand-kadi-salihu"
                      className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-court-green-900 hover:bg-court-green-800 text-white text-xs font-semibold shadow-sm transition-all duration-200 group/btn border border-court-gold-400/30 hover:border-court-gold-400"
                      title="View His Lordship Hon. Grand Kadi's full profile and biography"
                    >
                      <span>Grand Kadi Profile &amp; Biography</span>
                      <span className="font-mono text-court-gold-300 group-hover/btn:text-white font-extrabold text-sm group-hover/btn:translate-x-1 transition-transform tracking-wider">
                        --&gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Vision Excerpt & Institutional Mandate */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative p-6 sm:p-8 bg-white rounded-2xl shadow-judicial border-l-4 border-court-green-800 border-t border-r border-b border-gray-200">
                <Quote className="w-10 h-10 text-court-gold-400/40 absolute top-4 right-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-court-green-900 mb-4">
                  "Delivering Pure Judicial Integrity in Islamic Jurisprudence"
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    <span className="font-semibold text-court-slate-900">Assalamu Alaikum wa Rahmatullahi wa Barakatuh.</span>{' '}
                    Welcome to the official digital portal of the Shari'ah Court of Appeal, Jigawa State. 
                    It remains our sacred institutional responsibility to uphold justice with complete fidelity to 
                    the Qur'an, the Sunnah, and the established principles of Islamic jurisprudence as provided 
                    under the Constitution of the Federal Republic of Nigeria.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Having served as Chief Registrar before ascending to this solemn office in December 2020, 
                    our bench is tirelessly executing administrative and technological reforms. 
                    Our modernized E-Services, transparent cause lists, and electronic filing gateways ensure that justice is neither delayed nor denied to the humblest citizen of Jigawa State.
                  </p>
                </div>

                {/* Digital Signature Insignia Mock & Action Buttons */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-serif italic text-court-green-900 text-lg sm:text-xl font-bold tracking-wider">
                      His Lordship Muhammad Sani Salihu
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      Honorable Grand Kadi, Jigawa State.
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Link
                      href="/kadis/grand-kadi-salihu"
                      className="inline-flex items-center gap-2 bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all duration-200 group/btn"
                    >
                      <span>View Full Profile</span>
                      <span className="font-mono font-extrabold text-sm tracking-wider text-court-green-950 group-hover/btn:translate-x-1 transition-transform">
                        --&gt;
                      </span>
                    </Link>

                    <Button
                      onClick={() => setModalOpen(true)}
                      variant="outline"
                      className="border-court-green-800 text-court-green-900 hover:bg-court-green-50 font-semibold text-xs px-4 py-2 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-1.5 text-court-green-700" />
                      Read Address
                    </Button>

                    <Link
                      href="/past-kadis"
                      className="inline-flex items-center gap-1.5 border border-court-gold-600/50 bg-court-gold-50 hover:bg-court-gold-100 text-court-green-950 font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-colors"
                      title="View Former Grand Kadis and Historical Bench"
                    >
                      <History className="w-3.5 h-3.5 text-court-gold-700" />
                      <span>Past Grand Kadis</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Jurisdictional Competence Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white border border-court-gold-200 shadow-sm">
                  <div className="text-court-gold-600 font-bold text-xs uppercase tracking-wide mb-1">
                    Appellate Scope
                  </div>
                  <div className="text-xs text-gray-700">
                    Supervisory and appellate jurisdiction over all Area & Upper Shari'ah Courts across 27 LGAs.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-court-gold-200 shadow-sm">
                  <div className="text-court-gold-600 font-bold text-xs uppercase tracking-wide mb-1">
                    Islamic Personal Law
                  </div>
                  <div className="text-xs text-gray-700">
                    Determination of questions regarding Muslim marriage, divorce, guardianship, and family status.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-court-gold-200 shadow-sm">
                  <div className="text-court-gold-600 font-bold text-xs uppercase tracking-wide mb-1">
                    Mirath & Estate
                  </div>
                  <div className="text-xs text-gray-700">
                    Distribution of deceased estates, Wakf endowments, and testamentary dispositions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive "Read Full Address" Modal Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto bg-white p-4 sm:p-8 rounded-2xl border-2 border-court-gold-400 shadow-2xl">
          <DialogHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-court-green-900 p-1 flex items-center justify-center text-court-gold-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-court-slate-900">
                  Official Inaugural & Annual Judicial Address
                </DialogTitle>
                <DialogDescription className="text-xs text-gray-500">
                  Delivered by His Lordship, Hon. Grand Kadi Muhammad Sani Salihu
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4 text-sm text-gray-700 leading-relaxed pt-3">
            <p className="font-semibold text-court-green-900">
              Bismillahir Rahmanir Rahim. All praises are due to Allah (SWT), Lord of the worlds, and peace and blessings be upon His Noble Prophet Muhammad (SAW).
            </p>
            
            <p>
              I welcome you all to the digital headquarters of the Shari'ah Court of Appeal of Jigawa State. 
              The appellate court stands as a pillar of trust, ensuring that the adjudication of Islamic legal matters adheres strictly to Maliki jurisprudence while preserving the fundamental constitutional rights of every litigant.
            </p>

            <h4 className="font-bold text-court-slate-900 text-base pt-2">
              Three Pillars of Our Judicial Reform Agenda:
            </h4>

            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-court-green-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Speedy & Accessible Justice:</strong> Eliminating case backlogs through continuous legal research, dedicated appellate sittings, and digital cause listing.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-court-green-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Digital Judiciary & E-Filing:</strong> Permitting legal practitioners and citizens to initiate petitions, submit records of proceedings, and calculate Mirath estate distributions remotely.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-court-green-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Integrity & Scholarly Excellence:</strong> Fostering judicial ethics through rigorous workshops for Kadis, Area Court judges, and registry staff.
                </div>
              </li>
            </ul>

            <p className="pt-2 text-xs text-gray-600 italic border-l-2 border-court-gold-500 pl-3">
              "Let righteousness and fear of Allah be your guiding compass. Justice is the bond that binds civilized humanity."
            </p>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <div>
                <div className="font-bold text-xs text-court-slate-900">His Lordship Muhammad Sani Salihu</div>
                <div className="text-[11px] text-gray-500">Honorable Grand Kadi, Jigawa State.</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(false)}
                className="text-xs"
              >
                Close Address
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
