"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Scale, Clock, Search, Bell, Calendar, FileText, ArrowLeft, AlertCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function CaseTrackingPage() {
  const [trackingId, setTrackingId] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [caseData, setCaseData] = useState<any>(null)
  const [showDemo, setShowDemo] = useState(false)

  const demoCase = {
    id: "SCA/JIG/2024/001",
    title: "Marriage Certificate Application - Musa & Fatima",
    type: "Marriage Certificate",
    status: "Under Review",
    progress: 60,
    submissionDate: "2024-01-15",
    estimatedCompletion: "2024-01-22",
    currentStage: "Document Verification",
    applicant: "Name of Applicant",
    contact: "+234 803 123 4567",
    timeline: [
      {
        stage: "Application Submitted",
        date: "2024-01-15",
        time: "10:30 AM",
        status: "completed",
        description: "Application received and assigned tracking number",
      },
      {
        stage: "Initial Review",
        date: "2024-01-16",
        time: "2:15 PM",
        status: "completed",
        description: "Application reviewed for completeness",
      },
      {
        stage: "Document Verification",
        date: "2024-01-18",
        time: "9:00 AM",
        status: "current",
        description: "Verifying submitted documents and witness information",
      },
      {
        stage: "Approval & Processing",
        date: "2024-01-20",
        time: "Pending",
        status: "pending",
        description: "Final approval and certificate generation",
      },
      {
        stage: "Certificate Ready",
        date: "2024-01-22",
        time: "Pending",
        status: "pending",
        description: "Certificate ready for collection or download",
      },
    ],
    documents: [
      { name: "Application Form", status: "Verified", date: "2024-01-16" },
      { name: "Marriage Proof", status: "Verified", date: "2024-01-16" },
      { name: "Witness Statements", status: "Under Review", date: "2024-01-18" },
      { name: "ID Documents", status: "Verified", date: "2024-01-16" },
    ],
    nextAction: "Awaiting witness verification completion",
    fee: {
      amount: 2500,
      status: "Pending",
      dueDate: "2024-01-20",
    },
  }

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSearching(false)

    if (trackingId.toLowerCase().includes("demo") || trackingId === "SCA/JIG/2024/001") {
      setCaseData(demoCase)
      setShowDemo(true)
    } else {
      setCaseData(null)
      setShowDemo(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "under review":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
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
                <p className="text-green-100">Case Status Tracking System</p>
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
            <h2 className="text-4xl font-bold mb-4">Case Status Tracking</h2>
            <p className="text-xl text-green-100 mb-8">
              Track your applications and cases in real-time with our comprehensive tracking system
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                <span>SMS Notifications</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                <span>Document Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-6 h-6 mr-2 text-blue-600" />
                Track Your Case
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="tracking-id">Case/Application ID *</Label>
                  <Input
                    id="tracking-id"
                    placeholder="Enter your tracking ID (e.g., SCA/JIG/2024/001)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Find your tracking ID in your application receipt or confirmation email
                  </p>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your registered phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">Phone number used during application submission</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSearch}
                  disabled={isSearching || !trackingId || !phoneNumber}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Track Case
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setTrackingId("SCA/JIG/2024/001")
                    setPhoneNumber("+234 803 123 4567")
                  }}
                >
                  Try Demo
                </Button>
              </div>

              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  For security purposes, you need both your tracking ID and registered phone number to access case
                  information.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Details */}
      {showDemo && caseData && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Case Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-blue-600" />
                      Case Overview
                    </div>
                    <Badge className={getStatusColor(caseData?.status || '')}>{caseData?.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Case ID</Label>
                      <p className="text-lg font-semibold">{caseData?.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Case Type</Label>
                      <p className="text-lg font-semibold">{caseData?.type}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Submitted</Label>
                      <p className="text-lg font-semibold">{caseData?.submissionDate ? new Date(caseData?.submissionDate).toLocaleDateString() : ''}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Est. Completion</Label>
                      <p className="text-lg font-semibold">
                        {caseData?.estimatedCompletion ? new Date(caseData?.estimatedCompletion).toLocaleDateString() : ''}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-sm font-medium text-gray-500">Progress</Label>
                      <span className="text-sm font-medium">{caseData?.progress}%</span>
                    </div>
                    <Progress value={caseData?.progress || 0} className="h-3" />
                    <p className="text-sm text-gray-600 mt-2">Current Stage: {caseData?.currentStage}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                    Case Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {caseData?.timeline?.map((item: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div
                          className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                            item.status === "completed"
                              ? "bg-green-500"
                              : item.status === "current"
                                ? "bg-blue-500"
                                : "bg-gray-300"
                          }`}
                        ></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`font-semibold ${
                                item.status === "current" ? "text-blue-600" : "text-gray-900"
                              }`}
                            >
                              {item.stage}
                            </h4>
                            <div className="text-sm text-gray-500">
                              {item.date} {item.time !== "Pending" && `• ${item.time}`}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          {item.status === "current" && (
                            <Badge className="bg-blue-100 text-blue-800 mt-2">In Progress</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documents & Fee Status */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Documents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-blue-600" />
                      Document Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {caseData?.documents?.map((doc: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-gray-500">Submitted: {doc.date}</p>
                          </div>
                          <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Fee & Contact */}
                <div className="space-y-6">
                  {/* Fee Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-6 h-6 mr-2 text-blue-600" />
                        Fee Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Application Fee</span>
                          <span className="text-2xl font-bold">₦{caseData?.fee?.amount?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Status</span>
                          <Badge className={getStatusColor(caseData?.fee?.status || '')}>{caseData?.fee?.status}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Due Date</span>
                          <span>{caseData?.fee?.dueDate}</span>
                        </div>
                        {caseData?.fee?.status === "Pending" && (
                          <Button className="w-full bg-green-600 hover:bg-green-700">Pay Now</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="w-6 h-6 mr-2 text-blue-600" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Case Inquiries: +234 (0) 64 721 238</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">tracking@shariahcourt.jigawa.gov.ng</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Mon-Thu: 8AM-4PM, Fri: 8AM-12PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Next Action */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Next Action Required:</strong> {caseData?.nextAction}
                </AlertDescription>
              </Alert>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-6 h-6 mr-2 text-blue-600" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>SMS Notifications</span>
                        <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email Updates</span>
                        <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm">
                        Update Phone Number
                      </Button>
                      <Button variant="outline" size="sm">
                        Update Email Address
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {!showDemo && caseData === null && trackingId && phoneNumber && !isSearching && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Case Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find a case with the provided tracking ID and phone number. Please check your information
                  and try again.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Ensure your tracking ID is correct</p>
                  <p>• Use the phone number registered during application</p>
                  <p>• Contact support if you continue to have issues</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Need Help?</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Call Support</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Speak directly with our support team for immediate assistance.
                </p>
                <p className="font-medium">+234 (0) 64 721 238</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                <p className="text-gray-600 text-sm mb-3">Send us your questions and we'll respond within 24 hours.</p>
                <p className="font-medium">tracking@shariahcourt.jigawa.gov.ng</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Office Hours</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Visit our office during business hours for in-person assistance.
                </p>
                <p className="font-medium">
                  Mon-Thu: 8AM-4PM
                  <br />
                  Fri: 8AM-12PM
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
                Real-time case tracking system for transparent and efficient service delivery.
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
                  <Link href="/services/judgment-archives" className="text-gray-400 hover:text-white">
                    Judgment Archives
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
              <h5 className="font-semibold mb-4">Case Types</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Marriage Certificates</span>
                </li>
                <li>
                  <span className="text-gray-400">Civil Appeals</span>
                </li>
                <li>
                  <span className="text-gray-400">Family Law Cases</span>
                </li>
                <li>
                  <span className="text-gray-400">Document Requests</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Tracking Help: +234 (0) 64 721 238</p>
                <p>Email: tracking@shariahcourt.jigawa.gov.ng</p>
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

// Add import at the top
import { createReceiptPDF } from '@/lib/pdf-utils'

// Add this function for downloading case status report
const downloadCaseStatusPDF = async (caseData: any) => {
  try {
    const statusHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #166534; font-size: 24px; margin-bottom: 10px;">CASE STATUS REPORT</h1>
          <h2 style="color: #166534; font-size: 18px; margin-bottom: 5px;">Shari'ah Court of Appeal</h2>
          <h3 style="color: #666; font-size: 14px;">Jigawa State, Nigeria</h3>
        </div>
        
        <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
          <div style="margin-bottom: 15px;">
            <strong>Case Number:</strong> ${caseData.caseNumber}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Case Title:</strong> ${caseData.title}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Current Status:</strong> <span style="color: #166534; font-weight: bold;">${caseData.status}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Filed Date:</strong> ${caseData.filedDate}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Next Hearing:</strong> ${caseData.nextHearing || 'To be scheduled'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Assigned Judge:</strong> ${caseData.judge}
          </div>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="font-size: 12px; color: #666;">Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          <p style="font-size: 12px; color: #666;">This report is computer generated from the Court Management System</p>
        </div>
      </div>
    `
    
    await generatePDFFromHTML(statusHTML, {
      filename: `Case_Status_${caseData.caseNumber}_${new Date().toISOString().split('T')[0]}.pdf`,
      scale: 2
    })
  } catch (error) {
    console.error('Error generating case status PDF:', error)
    alert('Error generating PDF. Please try again.')
  }
}
