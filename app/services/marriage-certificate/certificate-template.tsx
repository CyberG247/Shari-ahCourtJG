"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Shield } from "lucide-react"

interface CertificateTemplateProps {
  certificateData: {
    certificateId: string
    issueDate: string
    groomName: string
    brideName: string
    marriageDate: string
    marriageLocation: string
    witness1: string
    witness2: string
    registrar: string
    digitalSignature: string
    qrCode: string
  }
}

export default function CertificateTemplate({ certificateData }: CertificateTemplateProps) {
  return (
    <Card className="max-w-4xl mx-auto bg-white border-2 border-green-600 shadow-2xl">
      <CardContent className="p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mr-4">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-green-800">SHARI'AH COURT OF APPEAL</h1>
              <p className="text-lg text-gray-600">JIGAWA STATE, NIGERIA</p>
            </div>
          </div>

          <div className="border-t-4 border-green-600 pt-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">ISLAMIC MARRIAGE CERTIFICATE</h2>
            <p className="text-lg text-gray-600">شهادة الزواج الإسلامية</p>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="space-y-8">
          {/* Certificate ID and Date */}
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="text-sm text-gray-500">Certificate No.</p>
              <p className="text-xl font-bold text-green-800">{certificateData.certificateId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Issue Date</p>
              <p className="text-xl font-bold">{new Date(certificateData.issueDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Main Certificate Text */}
          <div className="text-center space-y-6">
            <p className="text-lg leading-relaxed">This is to certify that the marriage between</p>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">GROOM / العريس</p>
                  <p className="text-2xl font-bold text-green-800 border-b-2 border-green-600 pb-2">
                    {certificateData.groomName}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">BRIDE / العروس</p>
                  <p className="text-2xl font-bold text-green-800 border-b-2 border-green-600 pb-2">
                    {certificateData.brideName}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">was solemnized in accordance with Islamic Law (Shari'ah) on</p>
              <p className="text-xl font-bold text-green-800">
                {new Date(certificateData.marriageDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-lg">
                at <span className="font-semibold">{certificateData.marriageLocation}</span>
              </p>
            </div>
          </div>

          {/* Witnesses */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-center mb-4">WITNESSES / الشهود</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-500">First Witness</p>
                <p className="text-lg font-semibold border-b border-gray-400 pb-1">{certificateData.witness1}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Second Witness</p>
                <p className="text-lg font-semibold border-b border-gray-400 pb-1">{certificateData.witness2}</p>
              </div>
            </div>
          </div>

          {/* Authority */}
          <div className="text-center space-y-4">
            <p className="text-lg">
              This certificate is issued under the authority of the Shari'ah Court of Appeal, Jigawa State
            </p>
            <div className="border-t-2 border-gray-300 pt-6">
              <p className="text-sm text-gray-500">Issued by</p>
              <p className="text-xl font-bold">{certificateData.registrar}</p>
              <p className="text-sm text-gray-600">Chief Registrar</p>
            </div>
          </div>

          {/* Security Features */}
          <div className="border-t-2 border-green-600 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                <div>
                  <p className="text-sm font-semibold">Digital Security</p>
                  <p className="text-xs text-gray-500">Blockchain Verified</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">QR Code: {certificateData.qrCode}</p>
                <Badge className="bg-green-100 text-green-800 mt-1">VERIFIED</Badge>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">Digital Signature: {certificateData.digitalSignature}</p>
              <p className="text-xs text-gray-500 mt-1">
                Verify this certificate at: www.shariahcourt.jigawa.gov.ng/verify
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
