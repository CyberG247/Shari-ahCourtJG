import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, MapPin, Phone, Mail, Clock, Users, Building } from "lucide-react"
import Link from "next/link"

export default function CourtsPage() {
  const courts = [
    {
      name: "Shari'ah Court of Appeal",
      type: "Appellate Court",
      location: "Dutse, Jigawa State",
      address: "Court of Appeal Complex, Dutse",
      phone: "+234-XXX-XXX-XXXX",
      email: "appeal@jigawasharia.gov.ng",
      jurisdiction: "Statewide Appeals",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "The highest Shari'ah court in Jigawa State, handling appeals from lower courts and ensuring proper application of Islamic law."
    },
    {
      name: "Upper Shari'ah Court, Dutse",
      type: "Upper Area Court",
      location: "Dutse Local Government",
      address: "Upper Shari'ah Court Complex, Dutse",
      phone: "+234-XXX-XXX-XXXX",
      email: "dutse@jigawasharia.gov.ng",
      jurisdiction: "Dutse and surrounding areas",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "Handles serious civil and criminal matters under Islamic law for Dutse Local Government Area."
    },
    {
      name: "Upper Shari'ah Court, Hadejia",
      type: "Upper Area Court",
      location: "Hadejia Local Government",
      address: "Upper Shari'ah Court Complex, Hadejia",
      phone: "+234-XXX-XXX-XXXX",
      email: "hadejia@jigawasharia.gov.ng",
      jurisdiction: "Hadejia and surrounding areas",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "Serves the Hadejia Local Government Area with comprehensive Shari'ah legal services."
    },
    {
      name: "Upper Shari'ah Court, Gumel",
      type: "Upper Area Court",
      location: "Gumel Local Government",
      address: "Upper Shari'ah Court Complex, Gumel",
      phone: "+234-XXX-XXX-XXXX",
      email: "gumel@jigawasharia.gov.ng",
      jurisdiction: "Gumel and surrounding areas",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "Provides Shari'ah legal services to residents of Gumel Local Government Area."
    },
    {
      name: "Upper Shari'ah Court, Kazaure",
      type: "Upper Area Court",
      location: "Kazaure Local Government",
      address: "Upper Shari'ah Court Complex, Kazaure",
      phone: "+234-XXX-XXX-XXXX",
      email: "kazaure@jigawasharia.gov.ng",
      jurisdiction: "Kazaure and surrounding areas",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "Handles Shari'ah legal matters for the Kazaure Local Government Area."
    },
    {
      name: "Upper Shari'ah Court, Ringim",
      type: "Upper Area Court",
      location: "Ringim Local Government",
      address: "Upper Shari'ah Court Complex, Ringim",
      phone: "+234-XXX-XXX-XXXX",
      email: "ringim@jigawasharia.gov.ng",
      jurisdiction: "Ringim and surrounding areas",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
      description: "Serves the legal needs of Ringim Local Government Area under Islamic law."
    }
  ]

  const courtServices = [
    "Civil Disputes Resolution",
    "Family Law Matters",
    "Inheritance Cases",
    "Marriage and Divorce",
    "Commercial Disputes",
    "Criminal Cases",
    "Appeals Processing",
    "Legal Documentation"
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
              <Link href="/courts" className="px-3 py-2 bg-green-100 text-green-600 rounded-lg font-semibold">
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
            <span className="text-green-600 font-medium">Courts</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Courts</h2>
            <p className="text-xl text-green-100">Serving justice across Jigawa State with Islamic principles</p>
          </div>
        </div>
      </section>

      {/* Court Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Court Services</h3>
            <p className="text-gray-600">Comprehensive legal services under Islamic law</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {courtServices.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <p className="text-sm font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Court Locations</h3>
            <p className="text-xl text-gray-600">Find the nearest Shari'ah court in your area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-green-800 mb-2">{court.name}</CardTitle>
                      <Badge variant="outline" className="mb-3">{court.type}</Badge>
                    </div>
                    <Building className="w-6 h-6 text-green-600 mt-1" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{court.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{court.location}</p>
                        <p className="text-xs text-gray-600">{court.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{court.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{court.email}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{court.jurisdiction}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{court.workingHours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Legal Assistance?</h3>
            <p className="text-gray-600 mb-6">
              Our courts are here to serve you with fairness and justice according to Islamic principles. 
              Contact the nearest court for your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/e-filing">
                <button className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  File a Case Online
                </button>
              </Link>
              <Link href="/services/case-tracking">
                <button className="border border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  Track Your Case
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}