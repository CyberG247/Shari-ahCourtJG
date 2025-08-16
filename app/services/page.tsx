import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, FileText, Search, Clock, Shield, Users, Heart, ArrowRight, CheckCircle, Upload } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const eServices = [
    {
      title: "E-Filing System",
      description: "File new cases electronically with our comprehensive online case submission system",
      icon: Upload,
      features: ["Online case filing", "Document upload", "Payment integration", "Case tracking"],
      status: "Available",
      href: "/services/e-filing",
      color: "green",
    },
    {
      title: "Islamic Marriage Certificate",
      description: "Apply for and download official Islamic marriage certificates with digital verification",
      icon: Heart,
      features: ["Online application", "Digital verification", "Instant download", "Legal validity"],
      status: "Available",
      href: "/services/marriage-certificate",
      color: "green",
    },
    {
      title: "Judgment Archives",
      description: "Search and access our comprehensive database of court judgments and legal precedents",
      icon: Search,
      features: ["Advanced search", "Case filtering", "PDF downloads", "Citation tools"],
      status: "Available",
      href: "/services/judgment-archives",
      color: "green",
    },
    {
      title: "Case Status Tracking",
      description: "Track the progress of your ongoing court cases with real-time updates",
      icon: Clock,
      features: ["Real-time updates", "SMS notifications", "Document uploads", "Hearing schedules"],
      status: "Available",
      href: "/services/case-tracking",
      color: "green",
    },
    {
      title: "Document Verification",
      description: "Verify the authenticity of court-issued documents instantly",
      icon: Shield,
      features: ["QR code scanning", "Digital signatures", "Blockchain security", "Instant verification"],
      status: "Available",
      href: "/services/document-verification",
      color: "green",
    },
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
              <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium">
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
            <span className="text-green-600 font-medium">E-Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Services Portal</h2>
            <p className="text-xl mb-8 text-green-100">
              Access our comprehensive suite of digital services designed for your convenience and efficiency
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Instant Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h3>
            <p className="text-xl text-gray-600">Choose from our range of digital services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-green-100"
                      >
                        <service.icon
                          className="w-7 h-7 text-green-600"
                        />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{service.title}</div>
                        <Badge className="bg-green-100 text-green-800 mt-1">{service.status}</Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={service.href}>
                    <Button
                      className="w-full group-hover:shadow-lg transition-all duration-300 bg-green-600 hover:bg-green-700"
                    >
                      Access Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Impact</h3>
            <p className="text-xl text-gray-600">Our digital services by the numbers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1,250+</div>
              <div className="text-gray-600">Marriage Certificates</div>
              <div className="text-sm text-gray-500">Issued digitally</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">3,770</div>
              <div className="text-gray-600">Judgments Archived</div>
              <div className="text-sm text-gray-500">Searchable online</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">850+</div>
              <div className="text-gray-600">Cases Tracked</div>
              <div className="text-sm text-gray-500">Real-time updates</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
              <div className="text-sm text-gray-500">User feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Security & Privacy First</h3>
            <p className="text-xl text-green-100 mb-12">
              Your data and documents are protected with enterprise-grade security
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-300" />
                </div>
                <h4 className="font-semibold text-lg mb-2">End-to-End Encryption</h4>
                <p className="text-green-100 text-sm">
                  All data is encrypted during transmission and storage using industry-standard protocols.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-300" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Access Control</h4>
                <p className="text-green-100 text-sm">
                  Multi-factor authentication and role-based access ensure data integrity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-300" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Digital Signatures</h4>
                <p className="text-green-100 text-sm">
                  Blockchain-based digital signatures ensure document authenticity and prevent tampering.
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
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
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
                  <Link href="/services" className="text-white">
                    E-Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/marriage-certificate" className="text-gray-400 hover:text-white">
                    Marriage Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/services/judgment-archives" className="text-gray-400 hover:text-white">
                    Judgment Archives
                  </Link>
                </li>
                <li>
                  <Link href="/services/case-tracking" className="text-gray-400 hover:text-white">
                    Case Tracking
                  </Link>
                </li>
                <li>
                  <Link href="/services/document-verification" className="text-gray-400 hover:text-white">
                    Document Verification
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Help Desk: +234 (0) 64 721 236</p>
                <p>Email: support@shariahcourt.jigawa.gov.ng</p>
                <p>Hours: Mon-Thu 8AM-4PM, Fri 8AM-12PM</p>
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
