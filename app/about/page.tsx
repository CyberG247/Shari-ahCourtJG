import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Target, Eye, Heart, BookOpen, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const formerGrandKadis = [
    { name: "Name of Kadi", tenure: "2010-2015", image: "former-kadi-1" },
    { name: "Name of Kadi", tenure: "2015-2020", image: "former-kadi-2" },
  ]

  const currentKadis = [
    { name: "Name of Kadi", specialization: "Senior Kadi & Administrative Head", experience: "15 years" },
    { name: "Name of Kadi", specialization: "Family Law & Personal Status", experience: "12 years" },
    { name: "Name of Kadi", specialization: "Civil Appeals & Commercial Law", experience: "10 years" },
    { name: "Name of Kadi", specialization: "Inheritance & Property Disputes", experience: "8 years" },
    { name: "Name of Kadi", specialization: "Criminal Appeals & Public Law", experience: "7 years" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white text-black shadow-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border">
                <img 
                  src="/nigeria-logo.png" 
                  alt="Nigerian Coat of Arms" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">Shari'ah Court of Appeal</h1>
                <p className="text-gray-600">Jigawa State, Nigeria</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 bg-green-100 text-green-600 rounded-lg font-semibold">
                About Us
              </Link>
              <Link href="/management" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium">
                Management
              </Link>
              <Link href="/courts" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium">
                Courts
              </Link>
              <Link href="/media" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium">
                Media
              </Link>
              <Link href="/services" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-semibold">
                E-Services
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-green-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-green-100">Learn about our history, mission, and the people who serve justice</p>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formerGrandKadis.map((kadi, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=160&width=160&query=professional portrait of former Nigerian Islamic Grand Kadi ${index + 1}`}
                      alt={kadi.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{kadi.name}</h4>
                  <Badge className="bg-red-100 text-red-800 mb-4">Former Grand Kadi</Badge>
                  <p className="text-gray-600">Tenure: {kadi.tenure}</p>
                </CardContent>
              </Card>
            ))}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {currentKadis.map((kadi, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=80&width=80&query=professional portrait of Nigerian Islamic Kadi ${index + 1}`}
                        alt={kadi.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{kadi.name}</h4>
                      <p className="text-green-600 font-medium mb-2">{kadi.specialization}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Experience: {kadi.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Shari'ah Court</h4>
                  <p className="text-sm text-gray-400">Jigawa State</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Upholding justice in accordance with Shari'ah principles since establishment.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/management" className="text-gray-400 hover:text-white">
                    Management
                  </Link>
                </li>
                <li>
                  <Link href="/courts" className="text-gray-400 hover:text-white">
                    Courts
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Family Law</span>
                </li>
                <li>
                  <span className="text-gray-400">Civil Appeals</span>
                </li>
                <li>
                  <span className="text-gray-400">Marriage Certificates</span>
                </li>
                <li>
                  <span className="text-gray-400">Legal Documentation</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Dutse, Jigawa State</p>
                <p>+234 (0) 64 721 234</p>
                <p>info@shariahcourt.jigawa.gov.ng</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shari'ah Court of Appeal, Jigawa State. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
