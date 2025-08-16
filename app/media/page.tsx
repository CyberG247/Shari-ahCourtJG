import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Calendar, Eye, Download, FileText, Video, Image as ImageIcon, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MediaPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Shari'ah Court of Appeal Launches New E-Filing System",
      excerpt: "The court introduces a modern digital platform to streamline case filing and improve access to justice.",
      date: "2024-01-15",
      category: "Technology",
      image: "/placeholder.jpg",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Annual Legal Conference on Islamic Jurisprudence",
      excerpt: "Leading scholars and legal experts gather to discuss contemporary issues in Islamic law.",
      date: "2024-01-10",
      category: "Events",
      image: "/placeholder.jpg",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "New Marriage Certificate Service Now Available Online",
      excerpt: "Citizens can now apply for and download Islamic marriage certificates through our digital platform.",
      date: "2024-01-05",
      category: "Services",
      image: "/placeholder.jpg",
      readTime: "2 min read"
    },
    {
      id: 4,
      title: "Court Celebrates 10 Years of Service Excellence",
      excerpt: "A decade of delivering justice and upholding Islamic principles in Jigawa State.",
      date: "2023-12-20",
      category: "Milestone",
      image: "/placeholder.jpg",
      readTime: "4 min read"
    }
  ]

  const pressReleases = [
    {
      id: 1,
      title: "Court Announces New Operating Hours",
      date: "2024-01-12",
      summary: "Effective February 1st, 2024, all courts will operate extended hours to better serve the public."
    },
    {
      id: 2,
      title: "Appointment of New Senior Kadis",
      date: "2024-01-08",
      summary: "The Governor has approved the appointment of three new Senior Kadis to strengthen the judiciary."
    },
    {
      id: 3,
      title: "Digital Transformation Initiative Launch",
      date: "2024-01-03",
      summary: "The court system embarks on a comprehensive digital transformation to improve service delivery."
    }
  ]

  const mediaGallery = [
    {
      id: 1,
      type: "image",
      title: "Court Opening Ceremony",
      description: "Grand opening of the new court complex",
      date: "2023-12-15",
      thumbnail: "/placeholder.jpg"
    },
    {
      id: 2,
      type: "video",
      title: "Legal Education Workshop",
      description: "Community outreach program on Islamic law",
      date: "2023-12-10",
      thumbnail: "/placeholder.jpg"
    },
    {
      id: 3,
      type: "image",
      title: "Judges Swearing-in Ceremony",
      description: "New judges take oath of office",
      date: "2023-12-05",
      thumbnail: "/placeholder.jpg"
    },
    {
      id: 4,
      type: "video",
      title: "Court Technology Demo",
      description: "Demonstration of new e-filing system",
      date: "2023-12-01",
      thumbnail: "/placeholder.jpg"
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Annual Report 2023",
      description: "Comprehensive overview of court activities and achievements",
      type: "PDF",
      size: "2.5 MB",
      date: "2024-01-01"
    },
    {
      id: 2,
      title: "Guide to Islamic Family Law",
      description: "Educational resource for understanding family law principles",
      type: "PDF",
      size: "1.8 MB",
      date: "2023-11-15"
    },
    {
      id: 3,
      title: "Court Procedures Manual",
      description: "Step-by-step guide for court procedures and requirements",
      type: "PDF",
      size: "3.2 MB",
      date: "2023-10-20"
    }
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
              <Link href="/media" className="px-3 py-2 bg-green-100 text-green-600 rounded-lg font-semibold">
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
            <span className="text-green-600 font-medium">Media</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Media Center</h2>
            <p className="text-xl text-green-100">Stay informed with the latest news, updates, and resources</p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h3>
            <p className="text-xl text-gray-600">Recent developments and announcements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {newsArticles.slice(0, 4).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-800">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 line-clamp-2">{article.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <button className="mt-4 text-green-800 font-medium hover:text-green-600 transition-colors">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h3>
            <p className="text-gray-600">Official announcements and statements</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{release.title}</h4>
                      <p className="text-gray-600 mb-3">{release.summary}</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(release.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Newspaper className="w-6 h-6 text-green-600 ml-4 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Media Gallery</h3>
            <p className="text-xl text-gray-600">Photos and videos from court events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaGallery.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {item.type === 'video' ? (
                      <Video className="w-6 h-6 text-white bg-black bg-opacity-50 rounded p-1" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-white bg-black bg-opacity-50 rounded p-1" />
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 line-clamp-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Publications & Resources</h3>
            <p className="text-gray-600">Download official documents and educational materials</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication) => (
              <Card key={publication.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <FileText className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{publication.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{publication.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{publication.type} • {publication.size}</span>
                        <span>{new Date(publication.date).toLocaleDateString()}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-green-800 hover:text-green-600 transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">Download</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Media */}
      <section className="py-12 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
            <p className="text-green-100 mb-6">
              For media inquiries, interview requests, or additional information, please contact our media relations team.
            </p>
            <div className="space-y-2">
              <p className="text-green-100">
                <strong>Email:</strong> media@jigawasharia.gov.ng
              </p>
              <p className="text-green-100">
                <strong>Phone:</strong> +234-XXX-XXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}