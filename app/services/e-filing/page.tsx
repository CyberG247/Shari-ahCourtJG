'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { FileText, Upload, CreditCard, Eye, Download, Calendar, User, Phone, Mail, MapPin, AlertCircle, CheckCircle, Clock, Scale } from 'lucide-react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface CaseFile {
  id: string
  caseNumber: string
  title: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected'
  dateSubmitted: string
  court: string
  amount: number
  documents: string[]
}

interface PaymentRecord {
  id: string
  caseId: string
  amount: number
  type: string
  status: 'Pending' | 'Paid' | 'Failed'
  date: string
  reference: string
}

export default function EFilingPage() {
  const [activeTab, setActiveTab] = useState('new-case')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [showPaymentSummary, setShowPaymentSummary] = useState(false)
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [generatedCaseNumber, setGeneratedCaseNumber] = useState('')
  const [paymentReference, setPaymentReference] = useState('')
  const receiptRef = useRef<HTMLDivElement>(null)
  
  // Form states
  const [caseType, setCaseType] = useState('')
  const [caseTitle, setCaseTitle] = useState('')
  const [caseDescription, setCaseDescription] = useState('')
  const [applicantName, setApplicantName] = useState('')
  const [applicantPhone, setApplicantPhone] = useState('')
  const [applicantEmail, setApplicantEmail] = useState('')
  const [applicantAddress, setApplicantAddress] = useState('')
  const [respondentName, setRespondentName] = useState('')
  const [respondentAddress, setRespondentAddress] = useState('')
  const [selectedCourt, setSelectedCourt] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  // Mock data
  const myCases: CaseFile[] = [
    {
      id: '1',
      caseNumber: 'SHC/JG/2024/001',
      title: 'Marriage Dissolution Case',
      type: 'Family Law',
      status: 'Under Review',
      dateSubmitted: '2024-01-15',
      court: 'Jigawa State Sharia Court of Appeal',
      amount: 15000,
      documents: ['Petition.pdf', 'Marriage Certificate.pdf', 'Evidence.pdf']
    },
    {
      id: '2',
      caseNumber: 'SHC/JG/2024/002',
      title: 'Inheritance Dispute',
      type: 'Inheritance Law',
      status: 'Accepted',
      dateSubmitted: '2024-01-10',
      court: 'Jigawa State Sharia Court',
      amount: 25000,
      documents: ['Will.pdf', 'Death Certificate.pdf', 'Property Documents.pdf']
    }
  ]

  const paymentHistory: PaymentRecord[] = [
    {
      id: '1',
      caseId: '1',
      amount: 15000,
      type: 'Filing Fee',
      status: 'Paid',
      date: '2024-01-15',
      reference: 'PAY-2024-001'
    },
    {
      id: '2',
      caseId: '2',
      amount: 25000,
      type: 'Filing Fee',
      status: 'Paid',
      date: '2024-01-10',
      reference: 'PAY-2024-002'
    }
  ]

  const caseTypes = [
    'Marriage and Divorce',
    'Inheritance and Succession',
    'Commercial Disputes',
    'Land and Property',
    'Child Custody',
    'Maintenance and Support',
    'Criminal Matters',
    'Appeal Cases'
  ]

  const courts = [
    'Jigawa State Sharia Court of Appeal',
    'Jigawa State Sharia Court',
    'Dutse Sharia Court',
    'Hadejia Sharia Court',
    'Gumel Sharia Court',
    'Kazaure Sharia Court'
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newFiles = Array.from(files)
      setUploadedFiles(prev => [...prev, ...newFiles])
      
      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 200)
    }
  }

  const handleSubmitCase = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      const caseNum = `SHC/JG/2024/${String(Math.floor(Math.random() * 1000) + 1).padStart(3, '0')}`
      setGeneratedCaseNumber(caseNum)
      setShowPaymentSummary(true)
    }, 2000)
  }

  const handleProceedToPayment = () => {
    setShowPaymentSummary(false)
    setShowPaymentProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      const payRef = `PAY-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 10000) + 1).padStart(4, '0')}`
      setPaymentReference(payRef)
      setShowPaymentProcessing(false)
      setShowReceipt(true)
    }, 3000)
  }

  const handleNewCase = () => {
    setShowReceipt(false)
    setShowPaymentSummary(false)
    setShowPaymentProcessing(false)
    setSubmissionSuccess(false)
    setCaseType('')
    setCaseTitle('')
    setCaseDescription('')
    setApplicantName('')
    setApplicantPhone('')
    setApplicantEmail('')
    setApplicantAddress('')
    setRespondentName('')
    setRespondentAddress('')
    setSelectedCourt('')
    setUploadedFiles([])
    setUploadProgress(0)
    setGeneratedCaseNumber('')
    setPaymentReference('')
  }

  const downloadReceiptPDF = async () => {
    if (!receiptRef.current) return
    
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      })
      
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      
      let position = 0
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
      
      pdf.save(`Receipt-${generatedCaseNumber}-${paymentReference}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback to print
      window.print()
    }
  }

  const getFilingFee = () => {
    switch (caseType) {
      case 'Marriage and Divorce': return 15000
      case 'Inheritance and Succession': return 25000
      case 'Commercial Disputes': return 30000
      case 'Land and Property': return 20000
      case 'Child Custody': return 18000
      case 'Maintenance and Support': return 12000
      case 'Criminal Matters': return 35000
      case 'Appeal Cases': return 50000
      default: return 15000
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-800'
      case 'Submitted': return 'bg-blue-100 text-blue-800'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800'
      case 'Accepted': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accepted': return <CheckCircle className="h-4 w-4" />
      case 'Under Review': return <Clock className="h-4 w-4" />
      case 'Rejected': return <AlertCircle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  // Payment Summary Modal
  if (showPaymentSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mt-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-800">Payment Summary</CardTitle>
              <CardDescription>Review your case details and proceed to payment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Case Number Generated</h3>
                <p className="text-2xl font-bold text-green-900">{generatedCaseNumber}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Case Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Case Type:</span>
                      <span className="font-medium">{caseType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Case Title:</span>
                      <span className="font-medium">{caseTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Court:</span>
                      <span className="font-medium">{selectedCourt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Applicant:</span>
                      <span className="font-medium">{applicantName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Documents:</span>
                      <span className="font-medium">{uploadedFiles.length} files</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Payment Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Filing Fee:</span>
                      <span className="font-medium">₦{getFilingFee().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee:</span>
                      <span className="font-medium">₦2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Charge:</span>
                      <span className="font-medium">₦500</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-green-800">₦{(getFilingFee() + 2500).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between pt-6">
                <Button variant="outline" onClick={() => setShowPaymentSummary(false)}>
                  Back to Form
                </Button>
                <Button onClick={handleProceedToPayment} className="bg-green-800 hover:bg-green-700">
                  Proceed to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Payment Processing Modal
  if (showPaymentProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="mt-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-800">Processing Payment</CardTitle>
              <CardDescription>Please wait while we process your payment</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-800"></div>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold">Processing Payment...</p>
                <p className="text-gray-600">Case Number: {generatedCaseNumber}</p>
                <p className="text-gray-600">Amount: ₦{(getFilingFee() + 2500).toLocaleString()}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  Please do not close this window or navigate away from this page.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Payment Receipt Modal
  if (showReceipt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Header */}
          <div className="mb-6">
            <nav className="flex items-center space-x-4 text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-green-600 transition-colors">
                Services
              </Link>
              <span>/</span>
              <Link href="/services/e-filing" className="hover:text-green-600 transition-colors">
                E-Filing
              </Link>
              <span>/</span>
              <span className="text-green-600 font-medium">Receipt</span>
            </nav>
          </div>
          
          <Card className="mt-8">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-800">Payment Successful!</CardTitle>
              <CardDescription>Your case has been filed successfully</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div ref={receiptRef} className="bg-green-50 p-6 rounded-lg">
                {/* Receipt Header */}
                <div className="text-center mb-6 border-b border-green-200 pb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Scale className="h-8 w-8 text-green-800 mr-2" />
                    <div>
                      <h2 className="text-lg font-bold text-green-800">Shari'ah Court of Appeal</h2>
                      <p className="text-sm text-green-600">Jigawa State, Nigeria</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-green-800 text-xl">Official Payment Receipt</h3>
                  <p className="text-sm text-gray-600">E-Filing System Transaction</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Case Information</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Case Number:</span>
                        <span className="font-medium">{generatedCaseNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Case Type:</span>
                        <span className="font-medium">{caseType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Case Title:</span>
                        <span className="font-medium">{caseTitle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Applicant:</span>
                        <span className="font-medium">{applicantName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Court:</span>
                        <span className="font-medium">{selectedCourt}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Payment Details</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Payment Reference:</span>
                        <span className="font-medium">{paymentReference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Date:</span>
                        <span className="font-medium">{new Date().toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Time:</span>
                        <span className="font-medium">{new Date().toLocaleTimeString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount Paid:</span>
                        <span className="font-medium">₦{(getFilingFee() + 2500).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-medium text-green-600">Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-green-200">
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Your case will be reviewed within 3-5 business days</li>
                    <li>• You will receive SMS and email notifications for updates</li>
                    <li>• Track your case status using the case number above</li>
                    <li>• Keep this receipt for your records</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" onClick={downloadReceiptPDF}>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" onClick={() => window.print()}>
                    Print Receipt
                  </Button>
                </div>
                <Button onClick={handleNewCase} className="bg-green-800 hover:bg-green-700">
                  File Another Case
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="mb-6">
          <nav className="flex items-center space-x-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-green-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-green-600 font-medium">E-Filing System</span>
          </nav>
        </div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">E-Filing System</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            File your cases electronically with the Jigawa State Sharia Court System. 
            Fast, secure, and convenient online case submission and tracking.
          </p>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="new-case" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              New Case
            </TabsTrigger>
            <TabsTrigger value="my-cases" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              My Cases
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Help & Guide
            </TabsTrigger>
          </TabsList>

          {/* New Case Filing */}
          <TabsContent value="new-case">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  File New Case
                </CardTitle>
                <CardDescription>
                  Complete the form below to file a new case with the Sharia Court
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submissionSuccess && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Case submitted successfully! You will receive a confirmation email with your case number.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Case Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Case Information</h3>
                    
                    <div>
                      <Label htmlFor="case-type">Case Type *</Label>
                      <Select value={caseType} onValueChange={setCaseType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          {caseTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="case-title">Case Title *</Label>
                      <Input
                        id="case-title"
                        value={caseTitle}
                        onChange={(e) => setCaseTitle(e.target.value)}
                        placeholder="Enter case title"
                      />
                    </div>

                    <div>
                      <Label htmlFor="court">Preferred Court *</Label>
                      <Select value={selectedCourt} onValueChange={setSelectedCourt}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select court" />
                        </SelectTrigger>
                        <SelectContent>
                          {courts.map((court) => (
                            <SelectItem key={court} value={court}>{court}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="case-description">Case Description *</Label>
                      <Textarea
                        id="case-description"
                        value={caseDescription}
                        onChange={(e) => setCaseDescription(e.target.value)}
                        placeholder="Provide detailed description of your case"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Applicant Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Applicant Information</h3>
                    
                    <div>
                      <Label htmlFor="applicant-name">Full Name *</Label>
                      <Input
                        id="applicant-name"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicant-phone">Phone Number *</Label>
                      <Input
                        id="applicant-phone"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicant-email">Email Address</Label>
                      <Input
                        id="applicant-email"
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicant-address">Address *</Label>
                      <Textarea
                        id="applicant-address"
                        value={applicantAddress}
                        onChange={(e) => setApplicantAddress(e.target.value)}
                        placeholder="Enter complete address"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Respondent Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Respondent Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="respondent-name">Respondent Name *</Label>
                      <Input
                        id="respondent-name"
                        value={respondentName}
                        onChange={(e) => setRespondentName(e.target.value)}
                        placeholder="Enter respondent name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="respondent-address">Respondent Address *</Label>
                      <Input
                        id="respondent-address"
                        value={respondentAddress}
                        onChange={(e) => setRespondentAddress(e.target.value)}
                        placeholder="Enter respondent address"
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Supporting Documents</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <div className="space-y-2">
                      <Label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:text-blue-500">
                        Click to upload files or drag and drop
                      </Label>
                      <Input
                        id="file-upload"
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <p className="text-sm text-gray-500">
                        PDF, DOC, DOCX, JPG, PNG up to 10MB each
                      </p>
                    </div>
                  </div>

                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                    </div>
                  )}

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Uploaded Files:</h4>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{file.name}</span>
                          <Badge variant="secondary">{(file.size / 1024 / 1024).toFixed(2)} MB</Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button 
                    onClick={handleSubmitCase}
                    disabled={isSubmitting || !caseType || !caseTitle || !applicantName}
                    className="px-8"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Case'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Cases */}
          <TabsContent value="my-cases">
            <Card>
              <CardHeader>
                <CardTitle>My Cases</CardTitle>
                <CardDescription>Track the status of your submitted cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myCases.map((caseFile) => (
                    <div key={caseFile.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{caseFile.title}</h3>
                            <Badge className={getStatusColor(caseFile.status)}>
                              {getStatusIcon(caseFile.status)}
                              {caseFile.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">Case No: {caseFile.caseNumber}</p>
                          <p className="text-sm text-gray-600">Type: {caseFile.type}</p>
                          <p className="text-sm text-gray-600">Court: {caseFile.court}</p>
                          <p className="text-sm text-gray-600">Submitted: {caseFile.dateSubmitted}</p>
                          <p className="text-sm text-gray-600">Filing Fee: ₦{caseFile.amount.toLocaleString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Documents:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseFile.documents.map((doc, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View your payment records and outstanding fees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{payment.type}</h3>
                            <Badge className={payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {payment.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">Reference: {payment.reference}</p>
                          <p className="text-sm text-gray-600">Date: {payment.date}</p>
                          <p className="text-sm font-medium">Amount: ₦{payment.amount.toLocaleString()}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Help & Guide */}
          <TabsContent value="help">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Filing Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Required Documents:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Valid identification (National ID, Driver's License, or Passport)</li>
                      <li>• Relevant certificates (Marriage, Birth, Death certificates as applicable)</li>
                      <li>• Supporting evidence documents</li>
                      <li>• Proof of payment for filing fees</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Filing Fees:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Marriage/Divorce Cases: ₦15,000</li>
                      <li>• Inheritance Cases: ₦25,000</li>
                      <li>• Commercial Disputes: ₦30,000</li>
                      <li>• Appeal Cases: ₦50,000</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">+234 (0) 64 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">efiling@jigawashariacourt.gov.ng</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-gray-600">
                        Jigawa State Sharia Court of Appeal<br />
                        Dutse, Jigawa State, Nigeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}