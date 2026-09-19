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
    <div className="min-h-screen bg-court-sand-50/40">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-12 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-xs mb-3">
              Territorial Jurisdiction
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Courts & Zonal Divisions</h1>
            <p className="text-sm sm:text-base text-court-sand-200">
              Shari'ah Court of Appeal Headquarters and subordinate Upper Shari'ah Courts across all 27 Local Government Areas
            </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {courtServices.map((service, index) => (
              <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border text-center flex items-center justify-center">
                <p className="text-xs sm:text-sm font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts List */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Court Locations</h3>
            <p className="text-base sm:text-xl text-gray-600">Find the nearest Shari'ah court in your area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courts.map((court, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow rounded-2xl overflow-hidden border border-gray-200">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg text-green-800 mb-1 sm:mb-2">{court.name}</CardTitle>
                      <Badge variant="outline" className="text-[10px] sm:text-xs mb-2 sm:mb-3">{court.type}</Badge>
                    </div>
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-4">
                  <p className="text-gray-600 text-xs sm:text-sm">{court.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-800">{court.location}</p>
                        <p className="text-[11px] sm:text-xs text-gray-600">{court.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-700">{court.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-700 break-all">{court.email}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-700">{court.jurisdiction}</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-gray-700">{court.workingHours}</p>
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Need Legal Assistance?</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Our courts are here to serve you with fairness and justice according to Islamic principles. 
              Contact the nearest court for your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/services#efiling-gateway" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-semibold">
                  File a Case Online
                </button>
              </Link>
              <Link href="/services/case-tracking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors text-xs sm:text-sm font-semibold">
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