"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Scale,
  Heart,
  Download,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  Users,
  FileText,
  ArrowLeft,
  Shield,
} from "lucide-react"
import Link from "next/link"
import CertificateTemplate from "./certificate-template"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function MarriageCertificatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    groomFatherName: "",
    brideFatherName: "",
    marriageDate: "",
    marriageLocation: "",
    witness1Name: "",
    witness2Name: "",
    witness1Phone: "",
    witness2Phone: "",
    mahrAmount: "",
    additionalInfo: "",
    applicantName: "",
    applicantPhone: "",
    applicantEmail: "",
    relationship: "",
  })

  const [paymentStatus, setPaymentStatus] = useState("pending") // pending, processing, confirmed, failed
  const [certificateGenerated, setCertificateGenerated] = useState(false)
  const [certificateData, setCertificateData] = useState<any>(null)
  const [paymentReference, setPaymentReference] = useState("")

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call for application submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Generate payment reference
    const paymentRef = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    setPaymentReference(paymentRef)
  }

  const handlePayment = async () => {
    setPaymentStatus("processing")

    // Simulate payment processing (in real app, this would integrate with payment gateway)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate payment confirmation
    const paymentSuccess = Math.random() > 0.1 // 90% success rate for demo

    if (paymentSuccess) {
      setPaymentStatus("confirmed")

      // Automatically generate certificate after payment confirmation
      await generateCertificate()
    } else {
      setPaymentStatus("failed")
    }
  }

  const generateCertificate = async () => {
    // Simulate certificate generation process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const certificate = {
      certificateId: `MC-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")}`,
      issueDate: new Date().toISOString(),
      groomName: formData.groomName,
      brideName: formData.brideName,
      marriageDate: formData.marriageDate,
      marriageLocation: formData.marriageLocation,
      witness1: formData.witness1Name,
      witness2: formData.witness2Name,
      registrar: "Name of Registrar, Chief Registrar",
      digitalSignature: `SHA256:${Math.random().toString(36).substring(2, 15)}`,
      qrCode: `QR-MC-${Date.now()}`,
      status: "Valid",
    }

    setCertificateData(certificate)
    setCertificateGenerated(true)
  }

  const downloadCertificate = async () => {
    if (!certificateData) return;
    
    try {
      // Create a temporary div with the certificate content for PDF generation
      const certificateElement = document.createElement('div');
      certificateElement.innerHTML = `
        <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #166534; font-size: 28px; margin-bottom: 10px;">ISLAMIC MARRIAGE CERTIFICATE</h1>
            <h2 style="color: #166534; font-size: 20px; margin-bottom: 5px;">Shari'ah Court of Appeal</h2>
            <h3 style="color: #666; font-size: 16px;">Jigawa State, Nigeria</h3>
          </div>
          
          <div style="border: 2px solid #166534; padding: 30px; margin: 20px 0;">
            <div style="text-align: center; margin-bottom: 25px;">
              <p style="font-size: 18px; font-weight: bold; color: #166534;">Certificate ID: ${certificateData.certificateId}</p>
              <p style="font-size: 14px; color: #666;">Issue Date: ${new Date(certificateData.issueDate).toLocaleDateString()}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <p style="font-size: 16px; text-align: center; margin-bottom: 20px;">This is to certify that the marriage between:</p>
              
              <div style="display: flex; justify-content: space-between; margin: 20px 0;">
                <div style="width: 45%;">
                  <p style="font-weight: bold; font-size: 16px;">Groom:</p>
                  <p style="font-size: 18px; color: #166534; border-bottom: 1px solid #ccc; padding-bottom: 5px;">${certificateData.groomName}</p>
                </div>
                <div style="width: 45%;">
                  <p style="font-weight: bold; font-size: 16px;">Bride:</p>
                  <p style="font-size: 18px; color: #166534; border-bottom: 1px solid #ccc; padding-bottom: 5px;">${certificateData.brideName}</p>
                </div>
              </div>
              
              <div style="margin: 20px 0;">
                <p style="font-weight: bold; font-size: 16px;">Was solemnized on:</p>
                <p style="font-size: 16px; margin-bottom: 10px;">${certificateData.marriageDate}</p>
                <p style="font-weight: bold; font-size: 16px;">At:</p>
                <p style="font-size: 16px;">${certificateData.marriageLocation}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <p style="font-weight: bold; font-size: 16px;">Witnesses:</p>
                <p style="font-size: 16px;">1. ${certificateData.witness1}</p>
                <p style="font-size: 16px;">2. ${certificateData.witness2}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <p style="font-size: 14px; margin-bottom: 5px;">Issued by: ${certificateData.registrar}</p>
              <p style="font-size: 12px; color: #666;">Digital Signature: ${certificateData.digitalSignature}</p>
              <p style="font-size: 12px; color: #666;">Status: ${certificateData.status}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="font-size: 12px; color: #666;">This certificate is digitally signed and verified by the Shari'ah Court of Appeal, Jigawa State</p>
          </div>
        </div>
      `;
      
      // Temporarily add to DOM for rendering
      certificateElement.style.position = 'absolute';
      certificateElement.style.left = '-9999px';
      document.body.appendChild(certificateElement);
      
      // Generate canvas from the element
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Remove temporary element
      document.body.removeChild(certificateElement);
      
      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Download the PDF
      pdf.save(`Islamic_Marriage_Certificate_${certificateData.certificateId}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to original text download
      const certificateContent = `
ISLAMIC MARRIAGE CERTIFICATE
Shari'ah Court of Appeal, Jigawa State

Certificate ID: ${certificateData.certificateId}
Issue Date: ${new Date(certificateData.issueDate).toLocaleDateString()}

This is to certify that the marriage between:
Groom: ${certificateData.groomName}
Bride: ${certificateData.brideName}

Was solemnized on: ${certificateData.marriageDate}
At: ${certificateData.marriageLocation}

Witnesses:
1. ${certificateData.witness1}
2. ${certificateData.witness2}

Issued by: ${certificateData.registrar}
Digital Signature: ${certificateData.digitalSignature}
      `;

      const blob = new Blob([certificateContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Marriage_Certificate_${certificateData.certificateId}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-green-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Scale className="w-8 h-8 text-green-800" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Shari'ah Court of Appeal</h1>
                <p className="text-green-100">Islamic Marriage Certificate Service</p>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Breadcrumbs */}
        <div className="bg-gray-100 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-4 text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-green-600 transition-colors">
                Services
              </Link>
              <span>/</span>
              <Link href="/services/marriage-certificate" className="hover:text-green-600 transition-colors">
                Marriage Certificate
              </Link>
              <span>/</span>
              <span className="text-green-600 font-medium">Application Status</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Application Submitted */}
            {paymentStatus === "pending" && (
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your application has been received. Please proceed with payment to complete the process.
                </p>
              </div>
            )}

            {/* Payment Processing */}
            {paymentStatus === "processing" && (
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Processing Payment...</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Please wait while we process your payment. Do not close this window.
                </p>
              </div>
            )}

            {/* Payment Confirmed & Certificate Generated */}
            {paymentStatus === "confirmed" && certificateGenerated && (
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificate Generated Successfully!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your payment has been confirmed and your Islamic marriage certificate has been automatically
                  generated.
                </p>
              </div>
            )}

            {/* Payment Failed */}
            {paymentStatus === "failed" && (
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <AlertCircle className="w-12 h-12 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h2>
                <p className="text-xl text-gray-600 mb-8">
                  There was an issue processing your payment. Please try again or contact support.
                </p>
              </div>
            )}

            {/* Application Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Application ID</Label>
                    <p className="text-lg font-semibold">
                      MC-2024-
                      {Math.floor(Math.random() * 10000)
                        .toString()
                        .padStart(4, "0")}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Payment Reference</Label>
                    <p className="text-lg font-semibold">{paymentReference}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Payment Status</Label>
                    <Badge
                      className={
                        paymentStatus === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : paymentStatus === "processing"
                            ? "bg-blue-100 text-blue-800"
                            : paymentStatus === "failed"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {paymentStatus === "confirmed"
                        ? "Paid"
                        : paymentStatus === "processing"
                          ? "Processing"
                          : paymentStatus === "failed"
                            ? "Failed"
                            : "Pending"}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Fee Amount</Label>
                    <p className="text-lg font-semibold">₦2,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Preview (shown after generation) */}
            {certificateGenerated && certificateData && (
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Islamic Marriage Certificate</h3>
                  <p className="text-gray-600">Certificate generated and ready for download</p>
                </div>

                <CertificateTemplate certificateData={certificateData} />

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button onClick={downloadCertificate} className="bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Certificate
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Print Certificate
                  </Button>
                  <Link href="/services/document-verification">
                    <Button variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Payment Section */}
            {paymentStatus === "pending" && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-600" />
                    Payment Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">Islamic Marriage Certificate Fee</span>
                      <span className="text-3xl font-bold text-blue-600">₦2,500</span>
                    </div>
                    <p className="text-sm text-blue-700 mb-4">
                      Payment is required to process your application and generate your certificate.
                    </p>
                    <div className="text-xs text-blue-600">
                      <p>• Secure payment processing</p>
                      <p>• Automatic certificate generation upon confirmation</p>
                      <p>• Digital certificate with blockchain verification</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">Payment Methods</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                          <div className="font-medium">Bank Transfer</div>
                          <div className="text-sm text-gray-500">Direct bank payment</div>
                        </div>
                        <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                          <div className="font-medium">Card Payment</div>
                          <div className="text-sm text-gray-500">Visa, Mastercard</div>
                        </div>
                        <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                          <div className="font-medium">Mobile Money</div>
                          <div className="text-sm text-gray-500">MTN, Airtel, etc.</div>
                        </div>
                      </div>
                    </div>

                    <Button onClick={handlePayment} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      <FileText className="w-5 h-5 mr-2" />
                      Pay ₦2,500 & Generate Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Retry Payment */}
            {paymentStatus === "failed" && (
              <Card className="mb-8">
                <CardContent className="p-6 text-center">
                  <Button onClick={handlePayment} className="bg-red-600 hover:bg-red-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Retry Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Help Section */}
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {paymentStatus === "pending" &&
                  "Complete payment to automatically generate your certificate. You will receive SMS and email notifications."}
                {paymentStatus === "processing" &&
                  "Your payment is being processed. Please do not refresh or close this page."}
                {paymentStatus === "confirmed" &&
                  "Your certificate has been generated and is ready for download. Keep your certificate ID for future reference."}
                {paymentStatus === "failed" &&
                  "Payment failed. Please try again or contact support if the issue persists."}
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!certificateGenerated && (
                <Link href="/services/case-tracking">
                  <Button variant="outline">Track Application Status</Button>
                </Link>
              )}
              <Link href="/services">
                <Button variant="outline">Back to Services</Button>
              </Link>
              {certificateGenerated && (
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Email Certificate
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
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
                <p className="text-green-100">Islamic Marriage Certificate Service</p>
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

      {/* Navigation Breadcrumbs */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-green-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-green-600 font-medium">Marriage Certificate</span>
          </nav>
        </div>
      </div>

      {/* Progress Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Islamic Marriage Certificate Application</h2>
              <Badge className="bg-red-100 text-red-800">
                <Heart className="w-4 h-4 mr-1" />
                Step {currentStep} of {totalSteps}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span className={currentStep >= 1 ? "text-green-600 font-medium" : ""}>Marriage Details</span>
              <span className={currentStep >= 2 ? "text-green-600 font-medium" : ""}>Couple Information</span>
              <span className={currentStep >= 3 ? "text-green-600 font-medium" : ""}>Witnesses</span>
              <span className={currentStep >= 4 ? "text-green-600 font-medium" : ""}>Applicant Info</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {currentStep === 1 && (
                  <>
                    <Calendar className="w-6 h-6 mr-2 text-red-600" />
                    Marriage Details
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <User className="w-6 h-6 mr-2 text-red-600" />
                    Couple Information
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Users className="w-6 h-6 mr-2 text-red-600" />
                    Witnesses Information
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <FileText className="w-6 h-6 mr-2 text-red-600" />
                    Applicant Information
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Step 1: Marriage Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="marriage-date">Marriage Date *</Label>
                      <Input
                        id="marriage-date"
                        type="date"
                        value={formData.marriageDate}
                        onChange={(e) => handleInputChange("marriageDate", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="marriage-location">Marriage Location *</Label>
                      <Input
                        id="marriage-location"
                        placeholder="Enter marriage location (Mosque, City, LGA)"
                        value={formData.marriageLocation}
                        onChange={(e) => handleInputChange("marriageLocation", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mahr-amount">Mahr (Dower) Amount</Label>
                    <Input
                      id="mahr-amount"
                      placeholder="Enter mahr amount (optional)"
                      value={formData.mahrAmount}
                      onChange={(e) => handleInputChange("mahrAmount", e.target.value)}
                    />
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Please ensure all marriage details are accurate as they will appear on the official certificate.
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Step 2: Couple Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-gray-900 border-b pb-2">Groom Information</h4>
                      <div>
                        <Label htmlFor="groom-name">Groom's Full Name *</Label>
                        <Input
                          id="groom-name"
                          placeholder="Enter groom's full name"
                          value={formData.groomName}
                          onChange={(e) => handleInputChange("groomName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="groom-father">Groom's Father's Name *</Label>
                        <Input
                          id="groom-father"
                          placeholder="Enter groom's father's name"
                          value={formData.groomFatherName}
                          onChange={(e) => handleInputChange("groomFatherName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-gray-900 border-b pb-2">Bride Information</h4>
                      <div>
                        <Label htmlFor="bride-name">Bride's Full Name *</Label>
                        <Input
                          id="bride-name"
                          placeholder="Enter bride's full name"
                          value={formData.brideName}
                          onChange={(e) => handleInputChange("brideName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="bride-father">Bride's Father's Name *</Label>
                        <Input
                          id="bride-father"
                          placeholder="Enter bride's father's name"
                          value={formData.brideFatherName}
                          onChange={(e) => handleInputChange("brideFatherName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Witnesses */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-gray-900 border-b pb-2">First Witness</h4>
                      <div>
                        <Label htmlFor="witness1-name">Full Name *</Label>
                        <Input
                          id="witness1-name"
                          placeholder="Enter first witness name"
                          value={formData.witness1Name}
                          onChange={(e) => handleInputChange("witness1Name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="witness1-phone">Phone Number *</Label>
                        <Input
                          id="witness1-phone"
                          placeholder="Enter phone number"
                          value={formData.witness1Phone}
                          onChange={(e) => handleInputChange("witness1Phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-gray-900 border-b pb-2">Second Witness</h4>
                      <div>
                        <Label htmlFor="witness2-name">Full Name *</Label>
                        <Input
                          id="witness2-name"
                          placeholder="Enter second witness name"
                          value={formData.witness2Name}
                          onChange={(e) => handleInputChange("witness2Name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="witness2-phone">Phone Number *</Label>
                        <Input
                          id="witness2-phone"
                          placeholder="Enter phone number"
                          value={formData.witness2Phone}
                          onChange={(e) => handleInputChange("witness2Phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Witnesses must be adult Muslims who were present during the marriage ceremony.
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Step 4: Applicant Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="applicant-name">Applicant's Full Name *</Label>
                      <Input
                        id="applicant-name"
                        placeholder="Enter your full name"
                        value={formData.applicantName}
                        onChange={(e) => handleInputChange("applicantName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="relationship">Relationship to Couple *</Label>
                      <select
                        id="relationship"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={formData.relationship}
                        onChange={(e) => handleInputChange("relationship", e.target.value)}
                        required
                      >
                        <option value="">Select relationship</option>
                        <option value="groom">Groom</option>
                        <option value="bride">Bride</option>
                        <option value="parent">Parent/Guardian</option>
                        <option value="relative">Relative</option>
                        <option value="witness">Witness</option>
                        <option value="legal-representative">Legal Representative</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="applicant-phone">Phone Number *</Label>
                      <Input
                        id="applicant-phone"
                        placeholder="Enter your phone number"
                        value={formData.applicantPhone}
                        onChange={(e) => handleInputChange("applicantPhone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="applicant-email">Email Address</Label>
                      <Input
                        id="applicant-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.applicantEmail}
                        onChange={(e) => handleInputChange("applicantEmail", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Any additional information or special circumstances"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    />
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-3">Application Fee</h5>
                    <div className="flex justify-between items-center">
                      <span className="text-green-700">Islamic Marriage Certificate</span>
                      <span className="text-2xl font-bold text-green-800">₦2,500</span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">
                      Payment will be processed after application review and approval.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} className="bg-red-600 hover:bg-red-700">
                    Next Step
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
