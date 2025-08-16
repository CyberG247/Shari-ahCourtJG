"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"
import Image from "next/image"

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
    <div className="max-w-4xl mx-auto bg-white border-4 border-green-600 shadow-2xl print:shadow-none print:border-2" style={{ minHeight: '11in', maxHeight: '11in' }}>
      <div className="p-8 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3 border-2 border-green-600">
              <Image
                src="/nigeria-logo.png"
                alt="Nigerian Coat of Arms"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-green-800">SHARI'AH COURT OF APPEAL</h1>
              <p className="text-base text-gray-600">JIGAWA STATE, NIGERIA</p>
            </div>
          </div>

          <div className="border-t-4 border-green-600 pt-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">ISLAMIC MARRIAGE CERTIFICATE</h2>
            <p className="text-base text-gray-600">شهادة الزواج الإسلامية</p>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="flex-1 space-y-5">
          {/* Certificate ID and Date */}
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <p className="text-xs text-gray-500">Certificate No.</p>
              <p className="text-lg font-bold text-green-800">{certificateData.certificateId}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Issue Date</p>
              <p className="text-lg font-bold">{new Date(certificateData.issueDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Main Certificate Text */}
          <div className="text-center space-y-4">
            <p className="text-base leading-relaxed">This is to certify that the marriage between</p>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">GROOM / العريس</p>
                  <p className="text-xl font-bold text-green-800 border-b-2 border-green-600 pb-1">
                    {certificateData.groomName}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">BRIDE / العروس</p>
                  <p className="text-xl font-bold text-green-800 border-b-2 border-green-600 pb-1">
                    {certificateData.brideName}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-base">was solemnized in accordance with Islamic Law (Shari'ah) on</p>
              <p className="text-lg font-bold text-green-800">
                {new Date(certificateData.marriageDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-base">
                at <span className="font-semibold">{certificateData.marriageLocation}</span>
              </p>
            </div>
          </div>

          {/* Witnesses */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-base font-semibold text-center mb-3">WITNESSES / الشهود</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">First Witness</p>
                <p className="text-base font-semibold border-b border-gray-400 pb-1">{certificateData.witness1}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Second Witness</p>
                <p className="text-base font-semibold border-b border-gray-400 pb-1">{certificateData.witness2}</p>
              </div>
            </div>
          </div>

          {/* Authority */}
          <div className="text-center space-y-3">
            <p className="text-sm">
              This certificate is issued under the authority of the Shari'ah Court of Appeal, Jigawa State
            </p>
            <div className="border-t-2 border-gray-300 pt-3">
              <p className="text-xs text-gray-500">Issued by</p>
              <p className="text-lg font-bold">{certificateData.registrar}</p>
              <p className="text-xs text-gray-600">Chief Registrar</p>
            </div>
          </div>
        </div>

        {/* Security Features - Footer */}
        <div className="border-t-2 border-green-600 pt-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <div>
                <p className="text-xs font-semibold">Digital Security</p>
                <p className="text-xs text-gray-500">Blockchain Verified</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">QR Code: {certificateData.qrCode}</p>
              <Badge className="bg-green-100 text-green-800 mt-1 text-xs">VERIFIED</Badge>
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-500">Digital Signature: {certificateData.digitalSignature}</p>
            <p className="text-xs text-gray-500 mt-1">
              Verify this certificate at: www.shariahcourt.jigawa.gov.ng/verify
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
