import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, FileText, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ManagementPage() {
  const pastChiefRegistrars = [
    {
      name: "Alhaji Musa Abdullahi",
      tenure: "2010-2015",
      achievements: "Digitized court records, established training programs",
    },
    {
      name: "Alhaji Ibrahim Garba",
      tenure: "2015-2020",
      achievements: "Introduced case management system, expanded court facilities",
    },
  ]

  const currentManagement = [
    {
      name: "Alhaji Ahmad Suleiman",
      position: "Chief Registrar",
      department: "Court Administration",
      experience: "12 years",
      responsibilities: "Overall court administration, case management, staff supervision",
    },
    {
      name: "Hajiya Fatima Usman",
      position: "Deputy Chief Registrar",
      department: "Legal Services",
      experience: "10 years",
      responsibilities: "Legal research, judgment preparation, appeals coordination",
    },
    {
      name: "Alhaji Yusuf Muhammad",
      position: "Principal Registrar",
      department: "Civil Division",
      experience: "8 years",
      responsibilities: "Civil case management, family law matters, inheritance disputes",
    },
    {
      name: "Hajiya Aisha Bello",
      position: "Principal Registrar",
      department: "Appeals Division",
      experience: "7 years",
      responsibilities: "Appeals processing, case scheduling, legal documentation",
    },
    {
      name: "Alhaji Umar Aliyu",
      position: "Senior Registrar",
      department: "Records & Archives",
      experience: "6 years",
      responsibilities: "Court records management, archival services, data security",
    },
    {
      name: "Hajiya Zainab Ibrahim",
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
              <Link href="/management" className="text-green-200 font-semibold">
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Management</h2>
            <p className="text-xl text-green-100">Meet our dedicated administrative team and leadership</p>
          </div>
        </div>
      </section>

      {/* Past Chief Registrars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Past Chief Registrars</h3>
            <p className="text-xl text-gray-600">Honoring our former administrative leaders</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastChiefRegistrars.map((registrar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&query=professional portrait of Nigerian court administrator ${index + 1}`}
                        alt={registrar.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{registrar.name}</h4>
                    <Badge className="bg-red-100 text-red-800 mb-4">Former Chief Registrar</Badge>
                    <p className="text-gray-600 mb-4">Tenure: {registrar.tenure}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Key Achievements</h5>
                    <p className="text-green-700 text-sm">{registrar.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Management Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Current Management Staff</h3>
            <p className="text-xl text-gray-600">Our experienced administrative team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {currentManagement.map((staff, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&query=professional portrait of Nigerian court staff ${index + 1}`}
                        alt={staff.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{staff.name}</h4>
                      <Badge className="bg-green-100 text-green-800 mb-2">{staff.position}</Badge>
                      <p className="text-red-600 font-medium mb-2">{staff.department}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <span className="font-medium">Experience:</span> {staff.experience}
                        </p>
                        <p>
                          <span className="font-medium">Key Responsibilities:</span>
                        </p>
                        <p className="text-xs">{staff.responsibilities}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Organizational Structure</h3>
            <p className="text-xl text-gray-600">Our departments and their functions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      {index === 0 && <Users className="w-5 h-5 text-green-600" />}
                      {index === 1 && <FileText className="w-5 h-5 text-green-600" />}
                      {index === 2 && <Scale className="w-5 h-5 text-green-600" />}
                      {index === 3 && <Calendar className="w-5 h-5 text-green-600" />}
                      {index === 4 && <FileText className="w-5 h-5 text-green-600" />}
                      {index === 5 && <Users className="w-5 h-5 text-green-600" />}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{dept.name}</div>
                      <div className="text-sm text-gray-600">{dept.staff} staff members</div>
                    </div>
                  </CardTitle>
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

      {/* Management Statistics */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Management Overview</h3>
            <p className="text-xl text-green-100">Key statistics about our administrative team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">55</div>
              <div className="text-green-200">Total Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-green-200">Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-200">Years Average Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-200">Staff Retention Rate</div>
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
