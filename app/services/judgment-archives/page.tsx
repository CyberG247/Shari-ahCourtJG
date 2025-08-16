"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Scale, Search, Filter, Download, Eye, Calendar, FileText, ArrowLeft, BookOpen, Gavel } from "lucide-react"
import Link from "next/link"
import { generatePDFFromHTML } from '@/lib/pdf-utils'

export default function JudgmentArchivesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const judgmentCategories = [
    { name: "Family Law", count: 1250, color: "bg-red-100 text-red-800" },
    { name: "Civil Appeals", count: 890, color: "bg-blue-100 text-blue-800" },
    { name: "Personal Status", count: 650, color: "bg-green-100 text-green-800" },
    { name: "Inheritance", count: 420, color: "bg-purple-100 text-purple-800" },
    { name: "Commercial Law", count: 380, color: "bg-yellow-100 text-yellow-800" },
    { name: "Public Law", count: 180, color: "bg-gray-100 text-gray-800" },
  ]

  const recentJudgments = [
    {
      id: "SCA/JIG/2024/001",
      title: "Musa v. Fatima - Marriage Dissolution Appeal",
      category: "Family Law",
      date: "2024-01-15",
      judge: "Name of Kadi",
      summary:
        "Appeal against lower court decision on marriage dissolution. Court upheld the dissolution based on irreconcilable differences.",
      pages: 12,
      citations: 3,
    },
    {
      id: "SCA/JIG/2024/002",
      title: "Estate of Late Alhaji Ibrahim - Inheritance Dispute",
      category: "Inheritance",
      date: "2024-01-10",
      judge: "Name of Kadi",
      summary:
        "Distribution of deceased's estate among heirs according to Islamic inheritance law. Court provided detailed calculation of shares.",
      pages: 18,
      citations: 7,
    },
    {
      id: "SCA/JIG/2023/156",
      title: "Al-Baraka Trading Co. v. Sunshine Ltd - Commercial Dispute",
      category: "Commercial Law",
      date: "2023-12-20",
      judge: "Name of Kadi",
      summary:
        "Contract dispute involving Islamic commercial principles. Court ruled in favor of appellant based on breach of contract.",
      pages: 15,
      citations: 5,
    },
    {
      id: "SCA/JIG/2023/155",
      title: "Guardianship of Minor Children - Custody Appeal",
      category: "Family Law",
      date: "2023-12-18",
      judge: "Name of Kadi",
      summary:
        "Appeal regarding custody of minor children following divorce. Court considered best interests of children under Islamic law.",
      pages: 10,
      citations: 2,
    },
    {
      id: "SCA/JIG/2023/154",
      title: "Property Boundary Dispute - Civil Appeal",
      category: "Civil Appeals",
      date: "2023-12-15",
      judge: "Name of Kadi",
      summary:
        "Land boundary dispute between neighboring properties. Court ordered new survey and established clear boundaries.",
      pages: 14,
      citations: 4,
    },
  ]

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate search API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSearching(false)
  }

  const getCategoryColor = (category: string) => {
    const categoryObj = judgmentCategories.find((cat) => cat.name === category)
    return categoryObj?.color || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                <p className="text-green-100">Judgment Archives & Legal Database</p>
              </div>
            </div>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Judgment Archives</h2>
            <p className="text-xl text-green-100 mb-8">
              Search and access our comprehensive database of court judgments and legal precedents
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>3,770+ Judgments</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>1992 - Present</span>
              </div>
              <div className="flex items-center">
                <Gavel className="w-5 h-5 mr-2" />
                <span>6 Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-6 h-6 mr-2 text-green-600" />
                Advanced Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="md:col-span-2">
                  <Label htmlFor="search-query">Search Keywords</Label>
                  <Input
                    id="search-query"
                    placeholder="Enter case name, keywords, or citation number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {judgmentCategories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <select
                    id="year"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleSearch} disabled={isSearching} className="bg-green-600 hover:bg-green-700">
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search Judgments
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h3>
            <p className="text-gray-600">Explore judgments organized by legal categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {judgmentCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                    <Badge className={category.color}>{category.count}</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    Browse Cases
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Judgments */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Judgments</h3>
              <p className="text-gray-600">Latest court decisions and rulings</p>
            </div>

            <div className="space-y-6">
              {recentJudgments.map((judgment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{judgment.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="font-medium">{judgment.id}</span>
                              <span>•</span>
                              <span>{new Date(judgment.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{judgment.judge}</span>
                            </div>
                          </div>
                          <Badge className={getCategoryColor(judgment.category)}>{judgment.category}</Badge>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">{judgment.summary}</p>

                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <span>{judgment.pages} pages</span>
                          <span>•</span>
                          <span>{judgment.citations} citations</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-32">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => downloadJudgment(judgment)}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Judgments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Archive Statistics</h3>
            <p className="text-xl text-green-100">Comprehensive legal database at your fingertips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">3,770</div>
              <div className="text-green-200">Total Judgments</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">32</div>
              <div className="text-green-200">Years of Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-green-200">Monthly Searches</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-green-200">Uptime</div>
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
                Comprehensive legal database serving the legal community since 1992.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white">
                    E-Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/marriage-certificate" className="text-gray-400 hover:text-white">
                    Marriage Certificates
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
              <h5 className="font-semibold mb-4">Legal Categories</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Family Law</span>
                </li>
                <li>
                  <span className="text-gray-400">Civil Appeals</span>
                </li>
                <li>
                  <span className="text-gray-400">Inheritance</span>
                </li>
                <li>
                  <span className="text-gray-400">Commercial Law</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Research Help: +234 (0) 64 721 237</p>
                <p>Email: archives@shariahcourt.jigawa.gov.ng</p>
                <p>Hours: Mon-Thu 8AM-4PM</p>
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

  const downloadJudgment = async (judgment: any) => {
    try {
      const judgmentHTML = `
        <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #166534; font-size: 24px; margin-bottom: 10px;">COURT JUDGMENT</h1>
            <h2 style="color: #166534; font-size: 18px; margin-bottom: 5px;">Shari'ah Court of Appeal</h2>
            <h3 style="color: #666; font-size: 14px;">Jigawa State, Nigeria</h3>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #166534; font-size: 20px; margin-bottom: 10px;">${judgment.title}</h2>
            <div style="margin-bottom: 10px;">
              <strong>Case ID:</strong> ${judgment.id}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Date:</strong> ${new Date(judgment.date).toLocaleDateString()}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Judge:</strong> ${judgment.judge}
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Category:</strong> ${judgment.category}
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #166534; font-size: 16px; margin-bottom: 10px;">Summary</h3>
            <p style="line-height: 1.6; text-align: justify;">${judgment.summary}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #166534; font-size: 16px; margin-bottom: 10px;">Judgment Details</h3>
            <p style="line-height: 1.6; text-align: justify;">
              [Full judgment content would be loaded here from the database]
            </p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #ccc; padding-top: 20px;">
            <p style="font-size: 12px; color: #666;">Pages: ${judgment.pages} | Citations: ${judgment.citations}</p>
            <p style="font-size: 12px; color: #666;">Downloaded from Shari'ah Court of Appeal Digital Archives</p>
          </div>
        </div>
      `
      
      await generatePDFFromHTML(judgmentHTML, {
        filename: `Judgment_${judgment.id}_${judgment.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
        scale: 2
      })
    } catch (error) {
      console.error('Error downloading judgment:', error)
      alert('Error downloading judgment. Please try again.')
    }
  }
