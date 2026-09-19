import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Scale, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  Globe2, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Landmark, 
  ChevronRight,
  UserCheck,
  Building,
  ScrollText
} from 'lucide-react'
import { getKadiById, getAllKadis } from '@/lib/kadis-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const kadis = getAllKadis()
  return kadis.map((kadi) => ({
    id: kadi.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const kadi = getKadiById(id)

  if (!kadi) {
    return {
      title: 'Kadi Profile Not Found | Jigawa State Shari\'ah Court of Appeal',
      description: 'The requested judicial officer profile could not be found.',
    }
  }

  return {
    title: `${kadi.name} | Shari'ah Court of Appeal Jigawa State`,
    description: `Official judicial biography, qualifications, career highlights, and landmark decisions of ${kadi.name}, ${kadi.roleTitle} at the Shari'ah Court of Appeal, Jigawa State.`,
  }
}

export default async function KadiProfilePage({ params }: PageProps) {
  const { id } = await params
  const kadi = getKadiById(id)

  if (!kadi) {
    notFound()
  }

  const allKadis = getAllKadis()
  const otherKadis = allKadis.filter((k) => k.id !== kadi.id)

  return (
    <div className="min-h-screen bg-[#fafaf7] text-court-slate-900 pb-20">
      {/* Top Banner / Breadcrumb Bar */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white border-b-4 border-court-gold-500 relative overflow-hidden">
        {/* Subtle Watermark Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-80 h-80 opacity-5 pointer-events-none">
          <img src="/Court-logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-court-sand-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-court-gold-400 transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-court-gold-400/70" />
            <Link href="/about" className="hover:text-court-gold-400 transition-colors">
              About The Court
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-court-gold-400/70" />
            <Link href="/#honorable-kadis" className="hover:text-court-gold-400 transition-colors">
              The Appellate Bench
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-court-gold-400/70" />
            <span className="text-court-gold-300 font-semibold">{kadi.fullName}</span>
          </nav>

          {/* Return button */}
          <div className="mb-4">
            <Link 
              href="/#honorable-kadis"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-court-sand-100 border border-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-court-gold-400" />
              <span>Back to Appellate Bench</span>
            </Link>
          </div>

          {/* Hero Profile Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Jurist Portrait Frame */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-court-gold-500 to-court-green-700 rounded-2xl opacity-60 blur-sm group-hover:opacity-90 transition duration-500"></div>
                
                <div className="relative bg-white p-3 rounded-2xl shadow-judicial border border-court-gold-300">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-court-green-950 border border-gray-200">
                    {kadi.image ? (
                      <Image
                        src={kadi.image}
                        alt={kadi.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#eaedf0] relative p-6 select-none">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <div className="w-40 h-40 rounded-full border border-gray-300"></div>
                          <div className="absolute w-28 h-28 rounded-full border border-gray-300"></div>
                          <div className="absolute w-56 h-56 rounded-full border border-gray-200"></div>
                        </div>
                        <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md">
                          <Scale className="w-10 h-10 text-court-green-800" />
                        </div>
                        <p className="relative z-10 mt-3 text-xs text-gray-500 font-semibold tracking-wide">
                          Official Judicial Portrait
                        </p>
                      </div>
                    )}

                    {/* Gradient Overlay at Bottom of Photo */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-court-green-950/90 via-court-green-950/40 to-transparent p-4 text-white">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-court-gold-400" />
                        <span className="text-[11px] font-bold tracking-wider uppercase text-court-gold-300">
                          Constitutional Judicial Officer
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Badges Under Portrait */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-court-sand-100 p-2 rounded-lg border border-gray-200">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Status</div>
                      <div className="text-court-green-900 font-bold text-xs flex items-center justify-center gap-1 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Active Jurist</span>
                      </div>
                    </div>
                    <div className="bg-court-sand-100 p-2 rounded-lg border border-gray-200">
                      <div className="text-[10px] uppercase font-bold text-gray-500">Appointed</div>
                      <div className="text-court-slate-900 font-bold text-xs mt-0.5">
                        {kadi.appointmentYear} – Date
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Summary & Role Titles */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-court-gold-500/20 text-court-gold-300 border border-court-gold-400/30 text-xs font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5 text-court-gold-400" />
                <span>{kadi.honorific}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {kadi.name}
              </h1>

              <p className="text-base sm:text-lg text-court-sand-100 font-medium leading-snug">
                {kadi.roleTitle} &bull; <span className="text-court-gold-300">{kadi.rank}</span>
              </p>

              {/* Division & NJC Recommendation Alert */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-court-sand-100 font-medium">
                  <MapPin className="w-4 h-4 text-court-gold-400 flex-shrink-0" />
                  <span><strong>Assigned Division:</strong> {kadi.division}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-court-sand-200">
                  <Award className="w-4 h-4 text-court-gold-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Appointment:</strong> {kadi.njcRecommendation}</span>
                </div>
              </div>

              {/* Quick Spec Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] uppercase tracking-wider text-court-sand-300 block font-semibold">
                    Bench Role
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">
                    {kadi.rank}
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[10px] uppercase tracking-wider text-court-sand-300 block font-semibold">
                    Judicial Tenure
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block truncate">
                    {kadi.appointmentPeriod}
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase tracking-wider text-court-sand-300 block font-semibold">
                    Jurisprudence
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-court-gold-300 mt-0.5 block truncate">
                    Maliki / Islamic Law
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detailed Content */}
      <div className="container mx-auto px-4 -mt-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column: Biography, Academic, Highlights & Decisions */}
          <div className="lg:col-span-8 space-y-8">
            {/* Official Judicial Biography */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-court-green-950 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-court-green-800" />
                  <span>Official Judicial Biography</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                {kadi.biography.map((paragraph, idx) => (
                  <p key={idx} className="font-normal text-justify">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Qualifications & Educational Background */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-court-green-950 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-court-green-800" />
                  <span>Academic Qualifications &amp; Legal Training</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {kadi.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                      <div className="w-6 h-6 rounded-full bg-court-green-100 text-court-green-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-court-green-200">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{qual}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Landmark Decisions & Appellate Precedents */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-court-green-950 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-court-green-800" />
                  <span>Notable Precedents &amp; Appellate Decisions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-4">
                {kadi.landmarkDecisions.map((decision, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 sm:p-5 rounded-xl border border-gray-200 bg-[#fdfdfb] hover:border-court-gold-400 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-court-green-900 bg-court-green-100 px-2.5 py-1 rounded border border-court-green-200">
                        {decision.suitNumber}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>Term: {decision.year}</span>
                      </span>
                    </div>

                    <h4 className="font-bold text-court-slate-900 text-base sm:text-lg mb-1">
                      {decision.title}
                    </h4>

                    <div className="inline-block text-[11px] font-bold text-court-gold-800 bg-court-gold-100/80 px-2 py-0.5 rounded mb-2 border border-court-gold-200">
                      Subject: {decision.subject}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {decision.summary}
                    </p>
                  </div>
                ))}

                <div className="pt-2 text-center">
                  <Link 
                    href={`/services/judgment-archives?kadi=${encodeURIComponent(kadi.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-court-green-800 hover:text-court-green-950 hover:underline"
                  >
                    <span>Browse All Law Reports &amp; Full Judgments for {kadi.fullName}</span>
                    <span className="font-mono">--&gt;</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* International Delegations & Judicial Conferences */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-court-green-950 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-court-green-800" />
                  <span>Conferences, Foreign Delegations &amp; Judicial Missions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-3">
                  {kadi.internationalMissions.map((mission, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-court-sand-50/80 border border-gray-200">
                      <div className="w-7 h-7 rounded-lg bg-court-gold-100 text-court-gold-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-court-gold-300">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                        {mission}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Column: Career Highlights, Focus Areas, Bench Peers */}
          <div className="lg:col-span-4 space-y-6">
            {/* Career Highlights Card */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-3">
                <CardTitle className="text-base font-bold text-court-green-950 flex items-center gap-2">
                  <Award className="w-4 h-4 text-court-gold-600" />
                  <span>Career Highlights &amp; Appointments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                {kadi.careerHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-court-green-700 mt-2 flex-shrink-0"></div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Jurisprudential Focus Areas */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-3">
                <CardTitle className="text-base font-bold text-court-green-950 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-court-green-800" />
                  <span>Jurisprudential Areas of Focus</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2">
                  {kadi.jurisprudentialFocus.map((focus, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-court-green-50 text-court-green-900 border border-court-green-200"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Judicial Division Contact Desk */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-court-green-950 to-court-green-900 text-white border border-court-gold-400/40 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-court-gold-400" />
                <h4 className="font-bold text-sm text-white">Judicial Registry Liaison</h4>
              </div>
              <p className="text-xs text-court-sand-200 leading-relaxed">
                Appellate records, certified proceedings, and cause list submissions for matters assigned to {kadi.fullName} can be coordinated through the Chief Registrar's Headquarters in Dutse.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/services/cause-lists"
                  className="flex items-center justify-between text-xs font-semibold bg-white/10 hover:bg-white/20 p-2.5 rounded-lg text-white border border-white/10 transition-colors"
                >
                  <span>Check Hearing Cause Lists</span>
                  <span className="font-mono text-court-gold-300">--&gt;</span>
                </Link>
                <Link
                  href="/services/certified-copies"
                  className="flex items-center justify-between text-xs font-semibold bg-white/10 hover:bg-white/20 p-2.5 rounded-lg text-white border border-white/10 transition-colors"
                >
                  <span>Apply for CTC of Judgment</span>
                  <span className="font-mono text-court-gold-300">--&gt;</span>
                </Link>
              </div>
            </div>

            {/* Other Members of the Appellate Bench */}
            <Card className="border border-gray-200/90 shadow-sm rounded-2xl bg-white overflow-hidden">
              <CardHeader className="bg-court-sand-50/70 border-b border-gray-100 pb-3">
                <CardTitle className="text-base font-bold text-court-green-950 flex items-center justify-between">
                  <span>Appellate Bench Colleagues</span>
                  <Scale className="w-4 h-4 text-court-green-800" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-2.5">
                {otherKadis.map((peer) => (
                  <Link
                    key={peer.id}
                    href={`/kadis/${peer.id}`}
                    className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-court-sand-100/70 border border-transparent hover:border-gray-200 transition-all duration-200"
                  >
                    <div className="min-w-0 pr-2">
                      <h5 className="text-xs font-bold text-court-green-950 group-hover:text-court-green-800 truncate">
                        {peer.name}
                      </h5>
                      <p className="text-[11px] text-gray-500 truncate">
                        {peer.rank} &bull; {peer.appointmentYear}
                      </p>
                    </div>
                    {/* Required button with '-->' arrow */}
                    <span className="font-mono text-xs font-extrabold text-court-green-800 group-hover:text-court-gold-600 group-hover:translate-x-1 transition-transform flex-shrink-0">
                      --&gt;
                    </span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
