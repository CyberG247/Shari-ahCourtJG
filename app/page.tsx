'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, FileText, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function HomePage() {
  const kadis = [
    { name: "Hon. Kadi Umar Nasir Ahmad", rank: "Hon. Kadi 02", designation: "TBD" },
    { name: "Hon. Kadi Safiyanu", rank: "Hon. Kadi 02", designation: "TBD" },
    { name: "Hon. Kadi Bala Musa Ph.D", rank: "Hon. Kadi 04", designation: "TBD" },
    { name: "Hon. Kadi Ibrahim Ya'u", rank: "Hon. Kadi 05", designation: "TBD" },
    { name: "Name of Kadi", rank: "Hon. Kadi 05", designation: "TBD" },
    { name: "Name of Kadi", rank: "Hon. Kadi 06", designation: "TBD" },
    { name: "Name of Kadi", rank: "Hon. Kadi 07", designation: "TBD" },
    { name: "Name of Kadi", rank: "Hon. Kadi 08", designation: "TBD" },
    { name: "Name of Kadi", rank: "Hon. Kadi 09", designation: "TBD" }, 
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white text-black shadow-lg border-b animate-fade-in-up">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-fade-in-left">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border animate-float">
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
            <nav className="hidden md:flex space-x-6 animate-fade-in-right">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium hover:scale-105">
                About Us
              </Link>
              <Link href="/management" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium hover:scale-105">
                Management
              </Link>
              <Link href="/courts" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium hover:scale-105">
                Courts
              </Link>
              <Link href="/media" className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-green-600 transition-all duration-300 text-black font-medium hover:scale-105">
                Media
              </Link>
              <Link href="/services" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105 animate-pulse-glow">
                E-Services
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Extended Hero Section with Grand Kadi */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Main Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce-in">
              Welcome to the Official Website Of The
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animate-delay-200">
              Shari'ah Court Of Appeal
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100 animate-fade-in-up animate-delay-300">
              Jigawa State, Nigeria
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-6 animate-fade-in-up animate-delay-400">
              Upholding Justice in Accordance with Shari'ah Principles
            </h3>
            <p className="text-xl mb-8 text-green-100 animate-fade-in-up animate-delay-500">
              Serving the people of Jigawa State with integrity, wisdom, and adherence to Islamic jurisprudence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
              <Link href="/services">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-300">
                  <FileText className="w-5 h-5 mr-2" />
                  Access E-Services
                </Button>
              </Link>
              <Link href="/services/judgment-archives">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Scale className="w-5 h-5 mr-2" />
                  View Judgments
                </Button>
              </Link>
            </div>
          </div>

          {/* Grand Kadi Section - Now within the green background */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center scroll-animate-left">
                <div className="w-80 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="His Lordship, Grand Kadi Muhammad Sani Salihu "
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="bg-white/20 text-white text-sm px-3 py-1 border border-white/30 hover:bg-white/30 transition-all duration-300">
                  His Lordship, Hon. Grand Kadi Muhammad Sani Salihu
                </Badge>
              </div>
              <div className="scroll-animate-right">
                <h3 className="text-3xl font-bold text-white mb-6">Welcome Message</h3>
                <div className="prose prose-lg text-green-100 space-y-4">
                  <p className="hover:text-white transition-colors duration-300">
                    "Assalamu Alaikum and welcome to the official website of the Shari'ah Court of Appeal, Jigawa State.
                    It is my honor to serve as the Grand Kadi of this esteemed institution, upholding the principles of
                    Islamic jurisprudence while ensuring justice for all."
                  </p>
                  <p className="hover:text-white transition-colors duration-300">
                    "Having served as Chief Registrar before assuming this office in December 2020, I bring decades of
                    experience in Islamic law and court administration. Our commitment remains unwavering in delivering
                    fair, timely, and accessible justice to the people of Jigawa State."
                  </p>
                </div>
                <div className="mt-8 p-6 bg-white/10 rounded-lg border-l-4 border-white/50 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-2">Jurisdiction & Powers</h4>
                  <p className="text-green-100">
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
          <div className="text-center mb-12 scroll-animate">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Distinguished Honorable Kadis</h3>
            <p className="text-xl text-gray-600">
              Meet our esteemed panel of Kadis who bring wisdom and expertise to our court
            </p>
          </div>

          <div className="relative overflow-hidden scroll-animate">
            <div className="flex animate-scroll-left space-x-6">
              {/* Duplicate the kadis array to create seamless loop */}
              {[...kadis, ...kadis].map((kadi, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 flex-shrink-0 w-64 hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 hover:shadow-lg transition-all duration-300">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&query=professional portrait of Nigerian Islamic judge ${(index % kadis.length) + 1}`}
                        alt={kadi.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <Badge className="bg-red-100 text-red-800 mb-2 hover:bg-red-200 transition-colors duration-300">{kadi.rank}</Badge>
                    <h4 className="font-semibold text-gray-900 mb-1">{kadi.name}</h4>
                    <p className="text-sm text-gray-600">{kadi.designation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-animate-scale animate-delay-100">
              <div className="text-4xl font-bold mb-2 hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-green-200">Years of Service</div>
            </div>
            <div className="scroll-animate-scale animate-delay-200">
              <div className="text-4xl font-bold mb-2 hover:scale-110 transition-transform duration-300">5,000+</div>
              <div className="text-green-200">Cases Resolved</div>
            </div>
            <div className="scroll-animate-scale animate-delay-300">
              <div className="text-4xl font-bold mb-2 hover:scale-110 transition-transform duration-300">99+</div>
              <div className="text-green-200">Area Courts</div>
            </div>
            <div className="scroll-animate-scale animate-delay-400">
              <div className="text-4xl font-bold mb-2 hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive legal services in accordance with Shari'ah law</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 scroll-animate-left hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300 hover:scale-110">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Family Law</h4>
                <p className="text-gray-600">Marriage, divorce, custody, and inheritance matters under Islamic law</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 scroll-animate animate-delay-200 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors duration-300 hover:scale-110">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Civil Appeals</h4>
                <p className="text-gray-600">Appellate jurisdiction over civil matters and commercial disputes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 scroll-animate-right animate-delay-400 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300 hover:scale-110">
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
            <div className="text-center mb-12 scroll-animate">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-xl text-gray-600">Get in touch with the Shari'ah Court of Appeal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center scroll-animate-left">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-all duration-300 hover:scale-110">
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

              <div className="text-center scroll-animate animate-delay-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-all duration-300 hover:scale-110">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-600">
                  +234 (0) 64 721 234
                  <br />
                  +234 (0) 64 721 235
                </p>
              </div>

              <div className="text-center scroll-animate-right animate-delay-400">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-all duration-300 hover:scale-110">
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
            <div className="scroll-animate-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 animate-float">
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

            <div className="scroll-animate animate-delay-200">
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/management" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1">
                    Management
                  </Link>
                </li>
                <li>
                  <Link href="/courts" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1">
                    Courts
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1">
                    E-Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="scroll-animate animate-delay-300">
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">Family Law</span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">Civil Appeals</span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">Marriage Certificates</span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">Legal Documentation</span>
                </li>
              </ul>
            </div>

            <div className="scroll-animate-right animate-delay-400">
              <h5 className="font-semibold mb-4">Office Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p className="hover:text-white transition-colors duration-300">Monday - Thursday: 8:00 AM - 4:00 PM</p>
                <p className="hover:text-white transition-colors duration-300">Friday: 8:00 AM - 12:00 PM</p>
                <p className="hover:text-white transition-colors duration-300">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center scroll-animate">
            <p className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
              © {new Date().getFullYear()} Shari'ah Court of Appeal, Jigawa State. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
