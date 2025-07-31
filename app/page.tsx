import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, FileText, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const kadis = [
    { name: "Hon. Kadi Abdullahi Musa", rank: "Hon. Kadi 01", designation: "Senior Kadi" },
    { name: "Hon. Kadi Fatima Ibrahim", rank: "Hon. Kadi 02", designation: "Family Law Specialist" },
    { name: "Hon. Kadi Muhammad Sani", rank: "Hon. Kadi 03", designation: "Civil Appeals" },
    { name: "Hon. Kadi Aisha Garba", rank: "Hon. Kadi 04", designation: "Commercial Law" },
    { name: "Hon. Kadi Usman Aliyu", rank: "Hon. Kadi 05", designation: "Criminal Appeals" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Scale className="w-8 h-8 text-green-800" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Shari'ah Court of Appeal</h1>
                <p className="text-green-100">Jigawa State, Nigeria</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-green-200 transition-colors">
                About Us
              </Link>
              <Link href="/management" className="hover:text-green-200 transition-colors">
                Management
              </Link>
              <Link href="/courts" className="hover:text-green-200 transition-colors">
                Courts
              </Link>
              <Link href="/services" className="hover:text-green-200 transition-colors">
                E-Services
              </Link>
              <Link href="/media" className="hover:text-green-200 transition-colors">
                Media
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upholding Justice in Accordance with Shari'ah Principles
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Serving the people of Jigawa State with integrity, wisdom, and adherence to Islamic jurisprudence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <FileText className="w-5 h-5 mr-2" />
                Access E-Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
              >
                <Scale className="w-5 h-5 mr-2" />
                View Judgments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Kadi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <div className="w-80 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="His Lordship, the Honorable Grand Kadi"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                  His Lordship, the Honorable Grand Kadi
                </Badge>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Welcome Message</h3>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    "Assalamu Alaikum and welcome to the official website of the Shari'ah Court of Appeal, Jigawa State.
                    It is my honor to serve as the Grand Kadi of this esteemed institution, upholding the principles of
                    Islamic jurisprudence while ensuring justice for all."
                  </p>
                  <p>
                    "Having served as Chief Registrar before assuming this office in December 2020, I bring decades of
                    experience in Islamic law and court administration. Our commitment remains unwavering in delivering
                    fair, timely, and accessible justice to the people of Jigawa State."
                  </p>
                </div>
                <div className="mt-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-800 mb-2">Jurisdiction & Powers</h4>
                  <p className="text-green-700">
                    The Shari'ah Court of Appeal exercises appellate jurisdiction over all Shari'ah matters including
                    personal status, family law, inheritance, and civil disputes in accordance with Islamic law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honorable Kadis Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Distinguished Honorable Kadis</h3>
            <p className="text-xl text-gray-600">
              Meet our esteemed panel of Kadis who bring wisdom and expertise to our court
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {kadis.map((kadi, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=128&width=128&query=professional portrait of Nigerian Islamic judge ${index + 1}`}
                      alt={kadi.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-red-100 text-red-800 mb-2">{kadi.rank}</Badge>
                  <h4 className="font-semibold text-gray-900 mb-1">{kadi.name}</h4>
                  <p className="text-sm text-gray-600">{kadi.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-200">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-green-200">Cases Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-green-200">Area Courts</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive legal services in accordance with Shari'ah law</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Family Law</h4>
                <p className="text-gray-600">Marriage, divorce, custody, and inheritance matters under Islamic law</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Civil Appeals</h4>
                <p className="text-gray-600">Appellate jurisdiction over civil matters and commercial disputes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Legal Certification</h4>
                <p className="text-gray-600">Islamic marriage certificates and legal document authentication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-xl text-gray-600">Get in touch with the Shari'ah Court of Appeal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-600">
                  Shari'ah Court of Appeal
                  <br />
                  Dutse, Jigawa State
                  <br />
                  Nigeria
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">
                  +234 (0) 64 721 234
                  <br />
                  +234 (0) 64 721 235
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">
                  info@shariahcourt.jigawa.gov.ng
                  <br />
                  registry@shariahcourt.jigawa.gov.ng
                </p>
              </div>
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
                  <Link href="/about" className="text-gray-400 hover:text-white">
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
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    E-Services
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
              <h5 className="font-semibold mb-4">Office Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Monday - Thursday: 8:00 AM - 4:00 PM</p>
                <p>Friday: 8:00 AM - 12:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
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
