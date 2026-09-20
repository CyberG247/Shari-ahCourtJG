import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, Target, Eye, Heart, BookOpen, Users, User, History, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { pastKadisList } from "@/lib/past-kadis-data"

export default function AboutPage() {
  const formerGrandKadis = pastKadisList.filter(k => k.roleCategory === 'grand-kadi')

  const currentKadis = [
    { id: "kadi-umar-nasir", name: "Hon. Kadi Umar Nasir Ahmad", appointmentPeriod: "Hon. Kadi (2017 – Date)", specialization: "Senior Appellate Kadi (02)", division: "Appellate Division 1 (Dutse)" },
    { id: "kadi-safiyanu", name: "Hon. Kadi Safiyanu", appointmentPeriod: "Hon. Kadi (2018 – Date)", specialization: "Appellate Division Judge (03)", division: "Appellate Division 2 (Hadejia)" },
    { id: "kadi-bala-musa", name: "Hon. Kadi Dr. Bala Musa Ph.D", appointmentPeriod: "Hon. Kadi (2018 – Date)", specialization: "Former Chief Registrar & Academic Jurist (04)", division: "Appellate Division 1 (Dutse)", image: "/kadis/hon-kadi-bala-musa.jpg" },
    { id: "kadi-ibrahim-yau", name: "Hon. Kadi Ibrahim Ya'u", appointmentPeriod: "Hon. Kadi (2019 – Date)", specialization: "Appellate Division Judge (05)", division: "Appellate Division 3 (Kazaure)" },
    { id: "kadi-barau-musa", name: "Hon. Kadi Bara’u Bashir Musa", appointmentPeriod: "Hon. Kadi (2021 – Date)", specialization: "Maliki Jurisprudence Specialist", division: "Appellate Division 2 (Hadejia)" },
    { id: "kadi-ahmad-lamin", name: "Hon. Kadi Ahmad Muhammadu Lamin", appointmentPeriod: "Hon. Kadi (2021 – Date)", specialization: "Appellate Division Judge", division: "Appellate Division 4 (Gumel)" },
    { id: "kadi-nasiru-zargina", name: "Hon. Kadi Nasiru Abubakar Zargina", appointmentPeriod: "Hon. Kadi (2021 – Date)", specialization: "Appellate Division Judge", division: "Appellate Division 5 (Ringim)" },
    { id: "kadi-mukhtar-adam", name: "Hon. Kadi Mukhtar Shuaibu Adam", appointmentPeriod: "Hon. Kadi (2024 – Date)", specialization: "Islamic Estate Specialist", division: "Appellate Division 1 (Dutse)" },
  ]


  return (
    <div className="min-h-screen bg-court-sand-50/40">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-12 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-white p-2 border-2 border-court-gold-400 shadow-judicial-gold flex items-center justify-center">
                <img 
                  src="/Court-logo.png" 
                  alt="Official Seal of the Shari'ah Court of Appeal, Jigawa State" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-xs mb-3">
              Institutional Overview
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">About The Court</h1>
            <p className="text-sm sm:text-base text-court-sand-200">
              Constitutional authority, appellate jurisdiction, and the history of judicial stewardship in Jigawa State
            </p>
          </div>
        </div>
      </section>

      {/* Court History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Court History</h3>
              <p className="text-xl text-gray-600">A legacy of justice and Islamic jurisprudence</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600 mb-8">
                <h4 className="text-2xl font-semibold text-green-800 mb-4">Establishment & Evolution</h4>
                <p className="mb-4">
                  The Shari'ah Court of Appeal, Jigawa State was established following the creation of Jigawa State in
                  1991, as part of Nigeria's commitment to providing accessible Islamic legal services to its Muslim
                  population. The court was formally inaugurated in 1992, marking the beginning of a new era in Islamic
                  jurisprudence within the state.
                </p>
                <p className="mb-4">
                  Over the decades, the court has evolved from a modest institution to a comprehensive judicial body
                  that handles complex appeals and provides guidance on Islamic law matters. The court has consistently
                  maintained its commitment to upholding the principles of Shari'ah while adapting to modern legal
                  challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                      Key Milestones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Badge className="bg-green-100 text-green-800 mr-3 mt-1">1992</Badge>
                        <span>Court establishment and first sitting</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="bg-green-100 text-green-800 mr-3 mt-1">1998</Badge>
                        <span>Introduction of family law specialization</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="bg-green-100 text-green-800 mr-3 mt-1">2005</Badge>
                        <span>Expansion to cover all 27 LGAs</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="bg-green-100 text-green-800 mr-3 mt-1">2015</Badge>
                        <span>Digital case management system</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="bg-green-100 text-green-800 mr-3 mt-1">2021</Badge>
                        <span>E-services portal launch</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 mr-2 text-green-600" />
                      Court Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">5,000+</div>
                        <div className="text-sm text-gray-600">Cases resolved since establishment</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <div className="text-sm text-gray-600">Area Courts under jurisdiction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">27</div>
                        <div className="text-sm text-gray-600">Local Government Areas served</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Public satisfaction rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Former Grand Kadis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Former Grand Kadis</h3>
            <p className="text-xl text-gray-600">Honoring our distinguished past leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {formerGrandKadis.map((kadi) => (
              <Card key={kadi.id} className="text-center rounded-2xl border border-gray-200 hover:border-court-gold-400 transition-all shadow-sm bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-court-sand-100 border-2 border-dashed border-court-gold-300 flex items-center justify-center text-court-green-900 shadow-inner">
                    <User className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="text-base font-bold text-court-slate-900 font-serif mb-1 leading-snug">{kadi.name}</h4>
                  <Badge className={`${kadi.status === 'deceased' ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-court-green-100 text-court-green-900 border-court-green-300'} text-[10px] font-bold mb-2`}>
                    {kadi.status === 'deceased' ? 'In Memoriam' : 'Retired Grand Kadi'}
                  </Badge>
                  <p className="text-xs text-gray-500 font-medium">Tenure: {kadi.tenureYears}</p>
                  {kadi.traditionalOrHonoraryTitles && (
                    <p className="text-[11px] text-court-green-800 font-semibold mt-1 truncate">
                      {kadi.traditionalOrHonoraryTitles}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/past-kadis"
              className="inline-flex items-center justify-center border border-court-green-800 text-court-green-900 bg-white hover:bg-court-green-50 text-xs font-semibold px-6 py-2.5 rounded-md shadow-sm transition-colors"
            >
              <History className="w-3.5 h-3.5 mr-2" />
              View Full Roll of Honor &amp; Historical Kadis Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Current Kadis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Current Honorable Kadis</h3>
            <p className="text-xl text-gray-600">Our distinguished panel of Islamic law experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentKadis.map((kadi, index) => (
              <Card key={index} className="group border border-gray-200/90 hover:border-court-green-700/60 rounded-2xl p-4 bg-white shadow-sm hover:shadow-judicial transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#eef0f2] border border-gray-200/80 mb-3.5 flex items-center justify-center group-hover:border-court-gold-400 transition-colors">
                    {kadi.image ? (
                      <Image
                        src={kadi.image}
                        alt={kadi.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#e9ecef] relative p-6 select-none">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <div className="w-32 h-32 rounded-full border border-gray-300"></div>
                          <div className="absolute w-20 h-20 rounded-full border border-gray-300"></div>
                          <div className="absolute w-44 h-44 rounded-full border border-gray-200"></div>
                        </div>
                        <div className="relative z-10 w-14 h-14 rounded-full bg-white/80 border border-gray-300/80 flex items-center justify-center shadow-sm">
                          <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  <Link href={`/kadis/${kadi.id}`}>
                    <h4 className="font-bold text-center text-court-green-900 text-base sm:text-lg leading-snug tracking-tight group-hover:text-court-green-700 transition-colors">
                      {kadi.name}
                    </h4>
                  </Link>
                  <p className="text-xs sm:text-sm text-gray-500 text-center font-medium mt-1">
                    {kadi.appointmentPeriod}
                  </p>
                  <div className="flex justify-center mt-2">
                    <span className="text-[11px] text-gray-500 font-medium px-2.5 py-0.5 rounded-full bg-court-sand-100 border border-gray-200">
                      {kadi.division}
                    </span>
                  </div>
                </div>

                {/* Profile Button with required '-->' arrow */}
                <div className="mt-4 pt-3 border-t border-gray-100">
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
                </div>
              </Card>
            ))}
          </div>

          {/* Link to Past Grand Kadis & Kadis */}
          <div className="mt-12 text-center">
            <Link 
              href="/past-kadis"
              className="inline-flex items-center justify-center border border-court-green-800 text-court-green-900 bg-white hover:bg-court-green-50 text-xs font-semibold px-6 py-2.5 rounded-md shadow-sm transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 mr-2" />
              Explore Roll of Honor: Past Grand Kadis &amp; Kadis (1991 – Present)
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Mission & Vision</h3>
              <p className="text-xl text-green-100">Our core principles and objectives</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="w-8 h-8 mr-3 text-green-300" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To provide accessible, fair, and timely justice in accordance with Shari'ah principles, serving the
                    people of Jigawa State with integrity, wisdom, and compassion while upholding the highest standards
                    of Islamic jurisprudence and legal excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Eye className="w-8 h-8 mr-3 text-green-300" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To be the leading Shari'ah Court of Appeal in Nigeria, recognized for excellence in Islamic
                    jurisprudence, innovative legal services, and unwavering commitment to justice, peace, and the rule
                    of law in our society.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl justify-center">
                    <Heart className="w-8 h-8 mr-3 text-red-300" />
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Justice (Adl)</h4>
                      <p>Upholding fairness and equity in all our decisions and proceedings</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Integrity (Amanah)</h4>
                      <p>Maintaining the highest ethical standards and trustworthiness</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Wisdom (Hikmah)</h4>
                      <p>Applying Islamic knowledge and legal expertise with discernment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
