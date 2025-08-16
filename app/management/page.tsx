import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, FileText, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ManagementPage() {
  const currentManagement = [
    {
      name: "Kabiru Abubakar Gumel Esq.",
      position: "Chief Registrar",
      department: "Court Administration",
      experience: "20+ years",
      responsibilities: "Overall court administration, case management, staff supervision",
    },
    {
      name: "Name of Registrar",
      position: "Deputy Chief Registrar",
      department: "Legal Services",
      experience: "10 years",
      responsibilities: "Legal research, judgment preparation, appeals coordination",
    },
    {
      name: "Name of Registrar",
      position: "Principal Registrar",
      department: "Civil Division",
      experience: "8 years",
      responsibilities: "Civil case management, family law matters, inheritance disputes",
    },
    {
      name: "Name of Registrar",
      position: "Principal Registrar",
      department: "Appeals Division",
      experience: "7 years",
      responsibilities: "Appeals processing, case scheduling, legal documentation",
    },
    {
      name: "Name of Registrar",
      position: "Senior Registrar",
      department: "Records & Archives",
      experience: "6 years",
      responsibilities: "Court records management, archival services, data security",
    },
    {
      name: "Name of Registrar",
      position: "Senior Registrar",
      department: "Public Relations",
      experience: "5 years",
      responsibilities: "Public engagement, media relations, community outreach",
    },
  ]

  const departments = [
    {
      name: "Court Administration",
      head: "Chief Registrar",
      staff: 15,
      functions: ["Overall court management", "Policy implementation", "Staff coordination", "Budget management"],
    },
    {
      name: "Legal Services",
      head: "Deputy Chief Registrar",
      staff: 12,
      functions: ["Legal research", "Judgment drafting", "Case analysis", "Legal advisory services"],
    },
    {
      name: "Civil Division",
      head: "Principal Registrar",
      staff: 10,
      functions: ["Civil case processing", "Family law matters", "Inheritance disputes", "Property cases"],
    },
    {
      name: "Appeals Division",
      head: "Principal Registrar",
      staff: 8,
      functions: ["Appeals processing", "Case scheduling", "Legal documentation", "Court proceedings"],
    },
    {
      name: "Records & Archives",
      head: "Senior Registrar",
      staff: 6,
      functions: ["Records management", "Digital archiving", "Data security", "Information retrieval"],
    },
    {
      name: "Public Relations",
      head: "Senior Registrar",
      staff: 4,
      functions: ["Community outreach", "Media relations", "Public education", "Stakeholder engagement"],
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
              <Link href="/management" className="px-3 py-2 bg-green-100 text-green-600 rounded-lg font-semibold">
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Management</h2>
            <p className="text-xl text-green-100">Meet our dedicated administrative team and leadership</p>
          </div>
        </div>
      </section>

      {/* Current Management Staff */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Chief Registrar - Prominent Display */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Chief Registrar</h3>
            <p className="text-xl text-gray-600 mb-8">Head of Court Administration</p>
            
            <div className="max-w-md mx-auto">
              <Card className="hover:shadow-xl transition-shadow border-2 border-green-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-green-100">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&query=professional portrait of Nigerian court official chief registrar`}
                        alt="Kabiru Abubakar Gumel Esq."
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Kabiru Abubakar Gumel Esq.</h4>
                    <Badge className="bg-green-100 text-green-800 mb-3 text-lg px-4 py-2">Chief Registrar</Badge>
                    <p className="text-gray-600 mb-2">Court Administration</p>
                    <p className="text-blue-600 font-medium mb-4 text-lg">Experience: 20+ years</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Responsibilities</h5>
                    <p className="text-gray-700">Overall court administration, case management, staff supervision</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Other Management Staff */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Management Team</h3>
            <p className="text-xl text-gray-600">Supporting administrative staff</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentManagement.slice(1).map((staff, index) => (
              <Card key={index + 1} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&query=professional portrait of Nigerian court official ${index + 2}`}
                        alt={staff.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{staff.name}</h4>
                    <Badge className="bg-green-100 text-green-800 mb-2">{staff.position}</Badge>
                    <p className="text-sm text-gray-600 mb-2">{staff.department}</p>
                    <p className="text-sm text-blue-600 font-medium mb-3">Experience: {staff.experience}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Responsibilities</h5>
                    <p className="text-gray-700 text-xs">{staff.responsibilities}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Departments</h3>
            <p className="text-xl text-gray-600">Organizational structure and functions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900">{dept.name}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">{dept.staff} Staff</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge className="bg-red-100 text-red-800 mb-3">Head: {dept.head}</Badge>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Functions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {dept.functions.map((func, funcIndex) => (
                        <li key={funcIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {func}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/nigeria-logo.png" 
                    alt="Nigerian Coat of Arms" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Shari'ah Court</h4>
                  <p className="text-green-200 text-sm">Jigawa State</p>
                </div>
              </div>
              <p className="text-green-200 text-sm">
                Upholding justice in accordance with Shari'ah principles, serving the people of Jigawa State with integrity and wisdom.
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
                  <Link href="/management" className="text-white">
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
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    E-Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/e-filing" className="text-gray-400 hover:text-white">
                    E-Filing
                  </Link>
                </li>
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
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-sm text-green-200">
                <p>Shari'ah Court of Appeal Complex</p>
                <p>Dutse, Jigawa State, Nigeria</p>
                <p>Phone: +234 XXX XXX XXXX</p>
                <p>Email: info@jigawashariah.gov.ng</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200 text-sm">
              © 2024 Shari'ah Court of Appeal, Jigawa State. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
