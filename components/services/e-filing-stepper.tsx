'use client'

import React, { useState } from 'react'
import { 
  FileText, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Scale, 
  Calendar,
  Lock,
  Download,
  Printer
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function EFilingStepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionComplete, setSubmissionComplete] = useState(false)
  const [filingReference, setFilingReference] = useState('')

  // Form State
  const [formData, setFormData] = useState({
    division: 'Dutse Central Headquarters',
    caseCategory: 'Civil Appeal (Matrimonial & Family)',
    lowerCourtNumber: '',
    lowerCourtName: 'Upper Shari’ah Court Dutse',
    appellantName: '',
    appellantPhone: '',
    appellantEmail: '',
    appellantAddress: '',
    respondentName: '',
    respondentAddress: '',
    counselName: '',
    counselNbaSeal: '',
    counselPhone: '',
    groundsOfAppeal: '',
    reliefsSought: '',
  })

  // Simulated Uploaded Files
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; status: string }[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploadProgress(20)
    setTimeout(() => setUploadProgress(65), 300)
    setTimeout(() => {
      setUploadProgress(100)
      const newFiles = Array.from(files).map(f => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(2) + ' MB',
        status: 'Verified PDF/A'
      }))
      setUploadedFiles(prev => [...prev, ...newFiles])
    }, 700)
  }

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(prev => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const handleSubmitFiling = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      const generatedRef = `JGSCA/EF/${new Date().getFullYear()}/${Math.floor(100000 + Math.random() * 900000)}`
      setFilingReference(generatedRef)
      setIsSubmitting(false)
      setSubmissionComplete(true)
    }, 1200)
  }

  const resetForm = () => {
    setCurrentStep(1)
    setSubmissionComplete(false)
    setUploadedFiles([])
    setFilingReference('')
  }

  const steps = [
    { number: 1, title: 'Division & Category' },
    { number: 2, title: 'Parties & Counsel' },
    { number: 3, title: 'Grounds & Reliefs' },
    { number: 4, title: 'Document Upload' },
    { number: 5, title: 'Review & Fee' }
  ]

  return (
    <div id="efiling-gateway" className="w-full">
      <Card className="border-2 border-court-green-800 shadow-judicial rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-gradient-to-r from-court-green-950 to-court-green-900 text-white p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-court-gold-500 text-court-green-950">
                  <Scale className="w-4 h-4" />
                </span>
                <CardTitle className="text-lg sm:text-xl font-bold text-white">
                  Electronic Appeal Lodgment (E-Filing Portal)
                </CardTitle>
              </div>
              <CardDescription className="text-court-sand-200 text-xs sm:text-sm">
                Official electronic filing gateway for the Shari’ah Court of Appeal of Jigawa State.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center">
              <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-xs py-1 px-3">
                <Lock className="w-3 h-3 mr-1" />
                256-Bit Encrypted
              </Badge>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          {!submissionComplete && (
            <div className="mt-6 pt-4 border-t border-court-green-800">
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {steps.map((step) => {
                  const isCompleted = currentStep > step.number
                  const isCurrent = currentStep === step.number
                  return (
                    <div key={step.number} className="text-center">
                      <div className="flex items-center justify-center mb-1 sm:mb-1.5">
                        <div 
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold transition-colors ${
                            isCurrent 
                              ? 'bg-court-gold-400 text-court-green-950 ring-2 sm:ring-4 ring-court-gold-500/30' 
                              : isCompleted 
                                ? 'bg-court-green-700 text-white' 
                                : 'bg-court-green-900/60 text-gray-400 border border-court-green-800'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : step.number}
                        </div>
                      </div>
                      <div className={`hidden sm:block text-[10px] sm:text-xs font-semibold truncate ${isCurrent ? 'text-court-gold-300' : 'text-gray-400'}`}>
                        {step.title}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Mobile Current Step Subtitle */}
              <div className="sm:hidden text-center mt-2 text-[11px] font-bold text-court-gold-300">
                Step {currentStep} of 5: <span className="text-white font-medium">{steps[currentStep - 1]?.title}</span>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="p-4 sm:p-8">
          {/* Submission Success State */}
          {submissionComplete ? (
            <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-court-green-100 text-court-green-800 mx-auto flex items-center justify-center border-4 border-court-green-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <Badge className="bg-court-green-800 text-white font-bold text-xs py-1 px-3">
                  FILING RECEIVED & LODGED
                </Badge>
                <h3 className="text-2xl font-black text-court-slate-900">
                  Appeal Notice Successfully Registered
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Your petition has been securely transmitted to the Principal Registry (Dutse Headquarters). 
                  A judicial registrar will review and assign your docket within 24 operational hours.
                </p>
              </div>

              {/* Verified Electronic Filing Receipt Card */}
              <div className="p-6 bg-court-sand-50 rounded-2xl border-2 border-court-gold-400 text-left space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-court-gold-300 pb-2">
                  <span className="text-xs font-bold text-court-slate-800 uppercase tracking-wider">
                    Official Filing Reference:
                  </span>
                  <span className="font-mono font-bold text-court-green-900 text-sm sm:text-base">
                    {filingReference}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Appellant:</span>
                    <div className="font-semibold text-gray-900">{formData.appellantName || 'Alhaji Ibrahim Danfulani'}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Respondent:</span>
                    <div className="font-semibold text-gray-900">{formData.respondentName || 'Mallam Yusuf & 2 Ors'}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Division:</span>
                    <div className="font-semibold text-gray-900">{formData.division}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Date Lodged:</span>
                    <div className="font-semibold text-gray-900">{new Date().toLocaleDateString('en-GB')}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                  <span>Statutory Assessment Fee: <strong>₦18,500.00</strong></span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Fee Confirmed
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button 
                  onClick={() => window.print()}
                  className="bg-court-green-800 hover:bg-court-green-900 text-white text-xs font-bold"
                >
                  <Printer className="w-4 h-4 mr-2 text-court-gold-400" />
                  Print Official E-Filing Stamp
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="border-court-green-800 text-court-green-900 hover:bg-court-green-50 text-xs font-semibold"
                >
                  File Another Appeal
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* STEP 1: Division & Category */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-court-slate-900 text-base">
                      Step 1: Judicial Division & Subject Matter Classification
                    </h3>
                    <p className="text-xs text-gray-500">
                      Specify the appropriate appellate division and the nature of the Islamic dispute.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Appellate Judicial Division</Label>
                      <Select 
                        value={formData.division} 
                        onValueChange={(val) => setFormData(prev => ({ ...prev, division: val }))}
                      >
                        <SelectTrigger className="text-xs">
                          <SelectValue placeholder="Select division" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dutse Central Headquarters">Dutse Central Headquarters</SelectItem>
                          <SelectItem value="Hadejia Judicial Division">Hadejia Judicial Division</SelectItem>
                          <SelectItem value="Kazaure Judicial Division">Kazaure Judicial Division</SelectItem>
                          <SelectItem value="Gumel Judicial Division">Gumel Judicial Division</SelectItem>
                          <SelectItem value="Ringim Judicial Division">Ringim Judicial Division</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Subject Matter Category</Label>
                      <Select 
                        value={formData.caseCategory} 
                        onValueChange={(val) => setFormData(prev => ({ ...prev, caseCategory: val }))}
                      >
                        <SelectTrigger className="text-xs">
                          <SelectValue placeholder="Select classification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Civil Appeal (Matrimonial & Family)">Civil Appeal (Matrimonial & Family Law)</SelectItem>
                          <SelectItem value="Islamic Estate & Mirath Distribution">Islamic Estate & Mirath Distribution</SelectItem>
                          <SelectItem value="Waqf & Charitable Endowment Appeal">Waqf & Charitable Endowment Appeal</SelectItem>
                          <SelectItem value="Guardianship & Custody (Hadanah)">Guardianship & Custody (Hadanah)</SelectItem>
                          <SelectItem value="Islamic Commercial & Debt Dispute">Islamic Commercial & Debt Dispute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Originating Lower Court Name</Label>
                      <Input
                        value={formData.lowerCourtName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lowerCourtName: e.target.value }))}
                        placeholder="e.g. Upper Shari'ah Court Dutse"
                        className="text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Lower Court Suit Number</Label>
                      <Input
                        value={formData.lowerCourtNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, lowerCourtNumber: e.target.value }))}
                        placeholder="e.g. USC/DT/CV/14/2024"
                        className="text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Parties & Counsel Particulars */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-court-slate-900 text-base">
                      Step 2: Litigant & Legal Counsel Particulars
                    </h3>
                    <p className="text-xs text-gray-500">
                      Provide verified contact particulars for court service and electronic notifications.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Appellant Full Name / Title</Label>
                      <Input
                        value={formData.appellantName}
                        onChange={(e) => setFormData(prev => ({ ...prev, appellantName: e.target.value }))}
                        placeholder="e.g. Alhaji Ibrahim Danfulani"
                        className="text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Appellant Phone Number</Label>
                      <Input
                        value={formData.appellantPhone}
                        onChange={(e) => setFormData(prev => ({ ...prev, appellantPhone: e.target.value }))}
                        placeholder="+234 803 000 0000"
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Respondent Full Name</Label>
                      <Input
                        value={formData.respondentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, respondentName: e.target.value }))}
                        placeholder="e.g. Mallam Yusuf & 2 Ors"
                        className="text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-gray-700">Legal Counsel Name (if represented)</Label>
                      <Input
                        value={formData.counselName}
                        onChange={(e) => setFormData(prev => ({ ...prev, counselName: e.target.value }))}
                        placeholder="e.g. Barrister A. K. Dutse (SAN)"
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-700">Counsel NBA Enrollment Seal Number</Label>
                    <Input
                      value={formData.counselNbaSeal}
                      onChange={(e) => setFormData(prev => ({ ...prev, counselNbaSeal: e.target.value }))}
                      placeholder="e.g. NBA/2014/09874"
                      className="text-xs"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Grounds of Appeal & Reliefs Sought */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-court-slate-900 text-base">
                      Step 3: Grounds of Appeal & Prayers
                    </h3>
                    <p className="text-xs text-gray-500">
                      Summarize the errors in Islamic law or evaluation of evidence committed by the lower court.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-700">Grounds of Appeal (Summarized)</Label>
                    <Textarea
                      rows={4}
                      value={formData.groundsOfAppeal}
                      onChange={(e) => setFormData(prev => ({ ...prev, groundsOfAppeal: e.target.value }))}
                      placeholder="e.g. 1. The learned trial judge erred in Islamic law by disregarding the statutory share of the maternal grandmother under Maliki jurisprudence..."
                      className="text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-gray-700">Reliefs / Prayers Sought from the Appellate Bench</Label>
                    <Textarea
                      rows={3}
                      value={formData.reliefsSought}
                      onChange={(e) => setFormData(prev => ({ ...prev, reliefsSought: e.target.value }))}
                      placeholder="e.g. An Order setting aside the ruling of the Upper Shari'ah Court and remitting the estate distribution for retrial..."
                      className="text-xs"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Documents & Affidavit Upload */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-court-slate-900 text-base">
                      Step 4: Affidavits & Certified Record Upload
                    </h3>
                    <p className="text-xs text-gray-500">
                      Upload supporting documents in PDF or PDF/A format (Max 25MB per document).
                    </p>
                  </div>

                  {/* Dropzone */}
                  <div className="border-2 border-dashed border-court-green-700/50 hover:border-court-green-800 rounded-xl p-6 text-center bg-court-sand-50/50 hover:bg-court-sand-50 transition-colors">
                    <Upload className="w-8 h-8 text-court-green-800 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-court-slate-900 mb-1">
                      Drag & Drop Notice of Appeal, Affidavits & Certified Lower Court Ruling
                    </div>
                    <p className="text-[11px] text-gray-500 mb-3">
                      Accepts PDF, PDF/A. High-resolution scanned certified true copies are required.
                    </p>
                    <label className="inline-block">
                      <input 
                        type="file" 
                        multiple 
                        accept=".pdf" 
                        className="hidden" 
                        onChange={handleFileUpload}
                      />
                      <span className="cursor-pointer px-4 py-2 rounded-lg bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs shadow-sm inline-flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-court-gold-400" />
                        Select Files from Device
                      </span>
                    </label>
                  </div>

                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Uploading & Validating Document Integrity...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-1.5 bg-gray-200" />
                    </div>
                  )}

                  {/* File List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-gray-700">Uploaded Documents ({uploadedFiles.length}):</div>
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200 text-xs shadow-sm">
                          <div className="flex items-center gap-2 truncate">
                            <FileText className="w-4 h-4 text-court-green-700 flex-shrink-0" />
                            <span className="font-semibold text-gray-800 truncate">{file.name}</span>
                            <span className="text-gray-400 text-[11px]">({file.size})</span>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px]">
                            {file.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 5: Review & Statutory Assessment */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="font-bold text-court-slate-900 text-base">
                      Step 5: Pre-Filing Review & Statutory Fee Assessment
                    </h3>
                    <p className="text-xs text-gray-500">
                      Confirm all particulars before final electronic submission and docket entry.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-court-sand-100/70 border border-court-sand-300 space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-gray-500">Appellate Division:</span>
                        <div className="font-bold text-gray-900">{formData.division}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Subject Category:</span>
                        <div className="font-bold text-gray-900">{formData.caseCategory}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Appellant:</span>
                        <div className="font-bold text-gray-900">{formData.appellantName || 'Alhaji Ibrahim Danfulani'}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Respondent:</span>
                        <div className="font-bold text-gray-900">{formData.respondentName || 'Mallam Yusuf & 2 Ors'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Statutory Assessment Table */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-court-green-950 text-white px-4 py-2 text-xs font-bold">
                      Statutory Registry Assessment (Jigawa Court Rules 2024)
                    </div>
                    <div className="p-3 space-y-2 text-xs divide-y divide-gray-100">
                      <div className="flex justify-between pt-1">
                        <span className="text-gray-600">Notice of Appeal Lodgment Fee</span>
                        <span className="font-semibold">₦10,000.00</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-gray-600">Compilation & Transmission of Records</span>
                        <span className="font-semibold">₦5,000.00</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-gray-600">Bailiff Service & Hearing Notice Dispatch</span>
                        <span className="font-semibold">₦3,500.00</span>
                      </div>
                      <div className="flex justify-between pt-2 text-sm font-bold text-court-green-900 border-t-2 border-gray-200">
                        <span>Total Statutory Payable</span>
                        <span>₦18,500.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>
                      By clicking <strong>Submit Electronic Filing</strong>, you attest under judicial penalty that the submitted particulars and attached certified documents are authentic copies of lower court proceedings.
                    </span>
                  </div>
                </div>
              )}

              {/* Stepper Navigation Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between pt-4 border-t border-gray-200 gap-2.5 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  disabled={currentStep === 1 || isSubmitting}
                  onClick={handlePrev}
                  className="text-xs w-full sm:w-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  Previous Step
                </Button>

                {currentStep < 5 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-court-green-800 hover:bg-court-green-900 text-white text-xs font-bold w-full sm:w-auto"
                  >
                    Proceed to Step {currentStep + 1}
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmitFiling}
                    className="bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 text-xs font-black px-6 shadow-judicial-gold w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Transmitting to Judicial Registry...' : 'Submit Electronic Filing'}
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
