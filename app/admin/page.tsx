'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Users, FileText, Scale, Settings, Plus, Edit, Trash2, Save, 
  Eye, Calendar, Image as ImageIcon, Video, Newspaper, UserCheck, Building,
  Shield, Lock, Upload, Download, Search, Filter
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Data states for different content types
  const [kadis, setKadis] = useState([
    { id: 0, name: "Hon. Grand Kadi Muhammad Sani Salihu", rank: "Grand Kadi", designation: "Head of Court", status: "active" },
    { id: 1, name: "Hon. Kadi Umar Nasir Ahmad", rank: "Hon. Kadi 02", designation: "TBD", status: "active" },
    { id: 2, name: "Hon. Kadi Safiyanu", rank: "Hon. Kadi 02", designation: "TBD", status: "active" },
    { id: 3, name: "Hon. Kadi Bala Musa Ph.D", rank: "Hon. Kadi 04", designation: "TBD", status: "active" },
    { id: 4, name: "Hon. Kadi Ibrahim Ya'u", rank: "Hon. Kadi 05", designation: "TBD", status: "active" },
  ])

  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      title: "Court Announces New Operating Hours",
      date: "2024-01-12",
      summary: "Effective February 1st, 2024, all courts will operate extended hours to better serve the public.",
      category: "Announcement",
      status: "published",
      author: "Admin",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Appointment of New Senior Kadis",
      date: "2024-01-08",
      summary: "The Governor has approved the appointment of three new Senior Kadis to strengthen the judiciary.",
      category: "News",
      status: "published",
      author: "Admin",
      image: "/placeholder.jpg"
    }
  ])

  const [managementStaff, setManagementStaff] = useState([
    {
      id: 1,
      name: "Kabiru Abubakar Gumel Esq.",
      position: "Chief Registrar",
      department: "Court Administration",
      experience: "20+ years",
      responsibilities: "Overall court administration, case management, staff supervision",
      status: "active"
    },
    {
      id: 2,
      name: "Name of Registrar",
      position: "Deputy Chief Registrar",
      department: "Legal Services",
      experience: "20+ years",
      responsibilities: "Legal research, judgment preparation, appeals coordination",
      status: "active"
    }
  ])

  const [eServices, setEServices] = useState([
    {
      id: 1,
      title: "E-Filing System",
      description: "File new cases electronically with our comprehensive online case submission system",
      status: "Available",
      href: "/services/e-filing",
      features: ["Online case filing", "Document upload", "Payment integration", "Case tracking"]
    },
    {
      id: 2,
      title: "Islamic Marriage Certificate",
      description: "Apply for and download official Islamic marriage certificates with digital verification",
      status: "Available",
      href: "/services/marriage-certificate",
      features: ["Online application", "Digital verification", "Instant download", "Legal validity"]
    }
  ])

  const [mediaGallery, setMediaGallery] = useState([
    {
      id: 1,
      type: "image",
      title: "Court Opening Ceremony",
      description: "Grand opening of the new court complex",
      date: "2023-12-15",
      thumbnail: "/placeholder.jpg",
      status: "published"
    },
    {
      id: 2,
      type: "video",
      title: "Legal Education Workshop",
      description: "Community outreach program on Islamic law",
      date: "2023-12-10",
      thumbnail: "/placeholder.jpg",
      status: "published"
    }
  ])

  // Form states
  const [editingItem, setEditingItem] = useState(null)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [formData, setFormData] = useState({})

  // Authentication
  const handleLogin = (e) => {
    e.preventDefault()
    // Simple authentication - in production, use proper authentication
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
    } else {
      alert('Invalid credentials')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
  }

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // CRUD Operations
  const handleAdd = (type, data) => {
    const newItem = { ...data, id: Date.now() }
    switch (type) {
      case 'kadis':
        setKadis([...kadis, newItem])
        break
      case 'news':
        setNewsArticles([...newsArticles, newItem])
        break
      case 'management':
        setManagementStaff([...managementStaff, newItem])
        break
      case 'services':
        setEServices([...eServices, newItem])
        break
      case 'media':
        setMediaGallery([...mediaGallery, newItem])
        break
    }
    setShowAddDialog(false)
    setFormData({})
  }

  const handleEdit = (type, id, data) => {
    switch (type) {
      case 'kadis':
        setKadis(kadis.map(item => item.id === id ? { ...item, ...data } : item))
        break
      case 'news':
        setNewsArticles(newsArticles.map(item => item.id === id ? { ...item, ...data } : item))
        break
      case 'management':
        setManagementStaff(managementStaff.map(item => item.id === id ? { ...item, ...data } : item))
        break
      case 'services':
        setEServices(eServices.map(item => item.id === id ? { ...item, ...data } : item))
        break
      case 'media':
        setMediaGallery(mediaGallery.map(item => item.id === id ? { ...item, ...data } : item))
        break
    }
    setEditingItem(null)
  }

  const handleDelete = (type, id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'kadis':
          setKadis(kadis.filter(item => item.id !== id))
          break
        case 'news':
          setNewsArticles(newsArticles.filter(item => item.id !== id))
          break
        case 'management':
          setManagementStaff(managementStaff.filter(item => item.id !== id))
          break
        case 'services':
          setEServices(eServices.filter(item => item.id !== id))
          break
        case 'media':
          setMediaGallery(mediaGallery.filter(item => item.id !== id))
          break
      }
    }
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Admin Panel</CardTitle>
            <p className="text-gray-600">Shari'ah Court of Appeal - Jigawa State</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <Input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Lock className="w-4 h-4 mr-2" />
                Login
              </Button>
            </form>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: admin123
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main Admin Panel
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">Shari'ah Court of Appeal Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">Administrator</Badge>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4">
            <div className="space-y-2">
              <Button
                variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('dashboard')}
              >
                <Settings className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === 'kadis' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('kadis')}
              >
                <Users className="w-4 h-4 mr-2" />
                Kadis Management
              </Button>
              <Button
                variant={activeTab === 'news' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('news')}
              >
                <Newspaper className="w-4 h-4 mr-2" />
                News & Media
              </Button>
              <Button
                variant={activeTab === 'management' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('management')}
              >
                <Building className="w-4 h-4 mr-2" />
                Staff Management
              </Button>
              <Button
                variant={activeTab === 'services' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('services')}
              >
                <FileText className="w-4 h-4 mr-2" />
                E-Services
              </Button>
              <Button
                variant={activeTab === 'media' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('media')}
              >
                <Image className="w-4 h-4 mr-2" />
                Media Gallery
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <div className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Kadis</p>
                        <p className="text-2xl font-bold text-gray-900">{kadis.length}</p>
                      </div>
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">News Articles</p>
                        <p className="text-2xl font-bold text-gray-900">{newsArticles.length}</p>
                      </div>
                      <Newspaper className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Staff Members</p>
                        <p className="text-2xl font-bold text-gray-900">{managementStaff.length}</p>
                      </div>
                      <Building className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">E-Services</p>
                        <p className="text-2xl font-bold text-gray-900">{eServices.length}</p>
                      </div>
                      <FileText className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">New Kadi added</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">News article published</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Staff profile updated</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button onClick={() => { setActiveTab('kadis'); setShowAddDialog(true) }} className="h-20 flex-col">
                        <Plus className="w-6 h-6 mb-2" />
                        Add Kadi
                      </Button>
                      <Button onClick={() => { setActiveTab('news'); setShowAddDialog(true) }} className="h-20 flex-col" variant="outline">
                        <Plus className="w-6 h-6 mb-2" />
                        Add News
                      </Button>
                      <Button onClick={() => { setActiveTab('management'); setShowAddDialog(true) }} className="h-20 flex-col" variant="outline">
                        <Plus className="w-6 h-6 mb-2" />
                        Add Staff
                      </Button>
                      <Button onClick={() => { setActiveTab('services'); setShowAddDialog(true) }} className="h-20 flex-col" variant="outline">
                        <Plus className="w-6 h-6 mb-2" />
                        Add Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Kadis Management */}
          {activeTab === 'kadis' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Kadis Management</h2>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Kadi
                </Button>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="Search kadis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Rank</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kadis
                        .filter(kadi => 
                          kadi.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                          (filterStatus === 'all' || kadi.status === filterStatus)
                        )
                        .map((kadi) => (
                        <TableRow key={kadi.id}>
                          <TableCell className="font-medium">{kadi.name}</TableCell>
                          <TableCell>{kadi.rank}</TableCell>
                          <TableCell>{kadi.designation}</TableCell>
                          <TableCell>
                            <Badge className={kadi.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {kadi.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingItem({type: 'kadis', data: kadi})}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete('kadis', kadi.id)}>
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* News Management */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">News & Media Management</h2>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add News Article
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-800">{article.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.summary}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                        <Badge className={article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {article.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => setEditingItem({type: 'news', data: article})}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete('news', article.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Management Staff */}
          {activeTab === 'management' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Staff Management</h2>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Staff Member
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {managementStaff.map((staff) => (
                  <Card key={staff.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                            <UserCheck className="w-8 h-8 text-gray-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{staff.name}</h3>
                            <p className="text-green-600 font-medium">{staff.position}</p>
                            <p className="text-gray-600 text-sm">{staff.department}</p>
                          </div>
                        </div>
                        <Badge className={staff.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {staff.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm">
                          <span className="font-medium text-gray-700 w-24">Experience:</span>
                          <span className="text-gray-600">{staff.experience}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Responsibilities:</span>
                          <p className="text-gray-600 mt-1">{staff.responsibilities}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => setEditingItem({type: 'management', data: staff})}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete('management', staff.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* E-Services Management */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">E-Services Management</h2>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Service
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        </div>
                        <Badge className={service.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {service.status}
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => setEditingItem({type: 'services', data: service})}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete('services', service.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Media Gallery */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Media Gallery</h2>
                <Button onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Media
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaGallery.map((media) => (
                  <Card key={media.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={media.thumbnail}
                        alt={media.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={media.type === 'video' ? 'bg-red-600' : 'bg-blue-600'}>
                          {media.type === 'video' ? <Video className="w-3 h-3 mr-1" /> : <Image className="w-3 h-3 mr-1" />}
                          {media.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{media.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{media.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{new Date(media.date).toLocaleDateString()}</span>
                        <Badge className={media.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {media.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" onClick={() => setEditingItem({type: 'media', data: media})}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleDelete('media', media.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add/Edit Dialogs would go here - simplified for brevity */}
      {/* In a full implementation, you'd have comprehensive forms for each content type */}
    </div>
  )
}