"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Scale,
  Shield,
  Upload,
  Scan,
  CheckCircle,
  AlertCircle,
  FileText,
  ArrowLeft,
  Camera,
  Download,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function DocumentVerificationPage() {
  const [verificationMethod, setVerificationMethod] = useState("qr")
  const [documentId, setDocumentId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [uploadedFile, setUploadedFile] = useState<any>(null)

  const demoDocument = {
    id: "MC-2024-0001",
    type: "Islamic Marriage Certificate",
    issuedTo: "Name of Groom & Name of Bride",
    issueDate: "2024-01-20",
    issuedBy: "Shari'ah Court of Appeal, Jigawa State",
    status: "Valid",
    verificationDate: new Date().toISOString(),
    digitalSignature: "SHA256:a1b2c3d4e5f6...",
    blockchainHash: "0x1a2b3c4d5e6f...",
    qrCode: "QR-MC-2024-0001-VERIFIED",
    details: {
      groomName: "Name of Groom",
    brideName: "Name of Bride",
      marriageDate: "2023-12-15",
      marriageLocation: "Central Mosque, Dutse",
      witness1: "Name of Witness",
      witness2: "Name of Witness",
    registrar: "Name of Registrar",
    },
  }

  const handleVerification = async () => {
    setIsVerifying(true)
    // Simulate verification API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsVerifying(false)

    if (documentId.toLowerCase().includes("demo") || documentId === "MC-2024-0001") {
      setVerificationResult(demoDocument)
    } else {
      setVerificationResult({ status: "Invalid", error: "Document not found or invalid" })
    }
  }

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedFile(file)
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
                <p className="text-green-100">Document Verification System</p>
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
            <h2 className="text-4xl font-bold mb-4">Document Verification</h2>
            <p className="text-xl text-green-100 mb-8">
              Instantly verify the authenticity of court-issued documents using our secure verification system
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Blockchain Secured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Instant Verification</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                <span>Digital Signatures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Methods */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Verification Method</h3>
              <p className="text-gray-600">Select how you'd like to verify your document</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card
                className={`cursor-pointer transition-all ${verificationMethod === "qr" ? "ring-2 ring-purple-500 bg-purple-50" : "hover:shadow-lg"}`}
                onClick={() => setVerificationMethod("qr")}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scan className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">QR Code Scan</h4>
                  <p className="text-gray-600 text-sm">Scan the QR code on your document for instant verification</p>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${verificationMethod === "id" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-lg"}`}
                onClick={() => setVerificationMethod("id")}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Document ID</h4>
                  <p className="text-gray-600 text-sm">Enter the document ID number to verify authenticity</p>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${verificationMethod === "upload" ? "ring-2 ring-green-500 bg-green-50" : "hover:shadow-lg"}`}
                onClick={() => setVerificationMethod("upload")}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">File Upload</h4>
                  <p className="text-gray-600 text-sm">Upload a digital copy of your document for verification</p>
                </CardContent>
              </Card>
            </div>

            {/* Verification Interface */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-purple-600" />
                  {verificationMethod === "qr" && "QR Code Verification"}
                  {verificationMethod === "id" && "Document ID Verification"}
                  {verificationMethod === "upload" && "File Upload Verification"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* QR Code Method */}
                {verificationMethod === "qr" && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="text-center">
                          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">Camera will activate here</p>
                        </div>
                      </div>
                      <p className="text-gray-600">Position the QR code within the camera frame</p>
                    </div>

                    <div className="text-center">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Camera className="w-4 h-4 mr-2" />
                        Start Camera
                      </Button>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Make sure your camera has permission to access this website and the QR code is clearly visible.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {/* Document ID Method */}
                {verificationMethod === "id" && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="document-id">Document ID Number *</Label>
                      <Input
                        id="document-id"
                        placeholder="Enter document ID (e.g., MC-2024-0001)"
                        value={documentId}
                        onChange={(e) => setDocumentId(e.target.value)}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Find the document ID on the top right corner of your certificate
                      </p>
                    </div>

                    <Button
                      onClick={handleVerification}
                      disabled={isVerifying || !documentId}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isVerifying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Shield className="w-4 h-4 mr-2" />
                          Verify Document
                        </>
                      )}
                    </Button>

                    <Button variant="outline" onClick={() => setDocumentId("MC-2024-0001")}>
                      Try Demo ID
                    </Button>
                  </div>
                )}

                {/* File Upload Method */}
                {verificationMethod === "upload" && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="file-upload">Upload Document</Label>
                      <div className="mt-2">
                        <input
                          id="file-upload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, PNG, JPG or JPEG (MAX. 10MB)</p>
                          </div>
                        </label>
                      </div>
                      {uploadedFile && (
                        <p className="text-sm text-green-600 mt-2">File uploaded: {uploadedFile.name}</p>
                      )}
                    </div>

                    <Button disabled={!uploadedFile} className="bg-green-600 hover:bg-green-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Verify Uploaded Document
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification Results */}
      {verificationResult && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {verificationResult?.status === "Valid" ? (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Document Verified Successfully
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Document Type</Label>
                          <p className="text-lg font-semibold">{verificationResult?.type}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Document ID</Label>
                          <p className="text-lg font-semibold">{verificationResult?.id}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Issued To</Label>
                          <p className="text-lg font-semibold">{verificationResult?.issuedTo}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Issue Date</Label>
                          <p className="text-lg font-semibold">
                            {verificationResult?.issueDate ? new Date(verificationResult.issueDate).toLocaleDateString() : ''}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Issued By</Label>
                          <p className="text-lg font-semibold">{verificationResult?.issuedBy}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Verification Date</Label>
                          <p className="text-lg font-semibold">
                            {verificationResult?.verificationDate ? new Date(verificationResult.verificationDate).toLocaleString() : ''}
                          </p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-500">Status</Label>
                          <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {verificationResult?.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Document Details */}
                    <div className="mt-8 p-6 bg-white rounded-lg border">
                      <h4 className="font-semibold text-lg mb-4">Document Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Groom:</span> {verificationResult?.details?.groomName}
                        </div>
                        <div>
                          <span className="font-medium">Bride:</span> {verificationResult?.details?.brideName}
                        </div>
                        <div>
                          <span className="font-medium">Marriage Date:</span> {verificationResult?.details?.marriageDate}
                        </div>
                        <div>
                          <span className="font-medium">Location:</span> {verificationResult?.details?.marriageLocation}
                        </div>
                        <div>
                          <span className="font-medium">Witness 1:</span> {verificationResult?.details?.witness1}
                        </div>
                        <div>
                          <span className="font-medium">Witness 2:</span> {verificationResult?.details?.witness2}
                        </div>
                      </div>
                    </div>

                    {/* Security Information */}
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                      <h5 className="font-semibold mb-2">Security Features</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
                        <div>
                          <span className="font-medium">Digital Signature:</span>
                          <br />
                          <code className="bg-white px-1 rounded">{verificationResult?.digitalSignature}</code>
                        </div>
                        <div>
                          <span className="font-medium">Blockchain Hash:</span>
                          <br />
                          <code className="bg-white px-1 rounded">{verificationResult?.blockchainHash}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download Verification Report
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Document
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <AlertCircle className="w-6 h-6 mr-2" />
                      Document Verification Failed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 mb-4">
                      {verificationResult?.error ||
                        "The document could not be verified. It may be invalid, tampered with, or not issued by this court."}
                    </p>

                    <Alert className="border-red-200">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        If you believe this is an error, please contact our support team with the document details.
                      </AlertDescription>
                    </Alert>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button variant="outline">Try Different Method</Button>
                      <Button variant="outline">Contact Support</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">How Document Verification Works</h3>
              <p className="text-xl text-gray-600">Our multi-layered security approach ensures document authenticity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-3">Digital Signatures</h4>
                <p className="text-gray-600 text-sm">
                  Each document is signed with cryptographic signatures that are mathematically impossible to forge.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-3">Blockchain Storage</h4>
                <p className="text-gray-600 text-sm">
                  Document hashes are stored on an immutable blockchain, creating a permanent verification record.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-3">Real-time Verification</h4>
                <p className="text-gray-600 text-sm">
                  Instant verification against our secure database ensures documents haven't been altered or revoked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Security Statistics</h3>
            <p className="text-xl text-green-100">Trusted verification system protecting document integrity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-200">Tamper Detection</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">256-bit</div>
              <div className="text-green-200">Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0.1s</div>
              <div className="text-green-200">Verification Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
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
                Secure document verification system ensuring authenticity and preventing fraud.
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
                  <Link href="/services/case-tracking" className="text-gray-400 hover:text-white">
                    Case Tracking
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Verification Methods</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">QR Code Scanning</span>
                </li>
                <li>
                  <span className="text-gray-400">Document ID Lookup</span>
                </li>
                <li>
                  <span className="text-gray-400">File Upload</span>
                </li>
                <li>
                  <span className="text-gray-400">Blockchain Verification</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Verification Help: +234 (0) 64 721 239</p>
                <p>Email: verify@shariahcourt.jigawa.gov.ng</p>
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

// Add verification report PDF download
const downloadVerificationReport = async (verificationData: any) => {
  try {
    const reportHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #166534; font-size: 24px; margin-bottom: 10px;">DOCUMENT VERIFICATION REPORT</h1>
          <h2 style="color: #166534; font-size: 18px; margin-bottom: 5px;">Shari'ah Court of Appeal</h2>
          <h3 style="color: #666; font-size: 14px;">Jigawa State, Nigeria</h3>
        </div>
        
        <div style="border: 1px solid #ccc; padding: 20px; margin: 20px 0;">
          <div style="margin-bottom: 15px;">
            <strong>Verification ID:</strong> ${verificationData.verificationId}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Document Type:</strong> ${verificationData.documentType}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Document Number:</strong> ${verificationData.documentNumber}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Verification Status:</strong> 
            <span style="color: ${verificationData.isValid ? '#166534' : '#dc2626'}; font-weight: bold;">
              ${verificationData.isValid ? 'VALID' : 'INVALID'}
            </span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Verified On:</strong> ${new Date().toLocaleDateString()}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Digital Signature:</strong> ${verificationData.digitalSignature}
          </div>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="font-size: 12px; color: #666;">This verification report is digitally signed and authenticated</p>
          <p style="font-size: 12px; color: #666;">Generated from the Court Document Verification System</p>
        </div>
      </div>
    `
    
    await generatePDFFromHTML(reportHTML, {
      filename: `Verification_Report_${verificationData.verificationId}.pdf`,
      scale: 2
    })
  } catch (error) {
    console.error('Error generating verification report PDF:', error)
    alert('Error generating PDF. Please try again.')
  }
}
