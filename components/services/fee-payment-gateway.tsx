'use client'

import React, { useState } from 'react'
import { 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  Download, 
  Lock, 
  RefreshCw,
  FileText,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function FeePaymentGateway() {
  const [selectedFee, setSelectedFee] = useState('appeal')
  const [suitNumber, setSuitNumber] = useState('SCA/JG/CV/04/2024')
  const [payerName, setPayerName] = useState('Alhaji Ibrahim Danfulani')
  const [payerEmail, setPayerEmail] = useState('i.danfulani@example.com')
  const [payerPhone, setPayerPhone] = useState('+234 803 123 4567')
  
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [transactionRef, setTransactionRef] = useState('')
  const [remitaRrr, setRemitaRrr] = useState('')

  const feeItems: Record<string, { label: string; amount: number; description: string }> = {
    appeal: {
      label: 'Notice of Appeal Lodgment & Record Fee',
      amount: 18500,
      description: 'Statutory fees for originating an appeal before the Shari’ah Court of Appeal.'
    },
    motion: {
      label: 'Motion on Notice (Interlocutory Application)',
      amount: 5000,
      description: 'Filing fees for urgent motions, stay of execution, or extension of time.'
    },
    ctc: {
      label: 'Certified True Copy (CTC) of Judgment',
      amount: 3500,
      description: 'Official attestation and certified transcript of court rulings with QR verification.'
    },
    affidavit: {
      label: 'Sworn Affidavit & Declaration on Oath',
      amount: 2000,
      description: 'Solemn affidavit verification witnessed before the Commissioner for Oaths.'
    }
  }

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      const generatedTx = `JGSCA-PAY-${Math.floor(10000000 + Math.random() * 90000000)}`
      const generatedRrr = `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`
      setTransactionRef(generatedTx)
      setRemitaRrr(generatedRrr)
      setIsProcessing(false)
      setPaymentSuccess(true)
    }, 1500)
  }

  const currentFee = feeItems[selectedFee]

  return (
    <div id="fee-gateway" className="w-full">
      <Card className="border border-gray-200 shadow-judicial rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-court-green-950 text-white p-4 sm:p-6 border-b-2 border-court-gold-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-court-gold-500 text-court-green-950">
                  <CreditCard className="w-4 h-4" />
                </span>
                <CardTitle className="text-base sm:text-xl font-bold text-white">
                  Statutory Filing Fees &amp; Payment Gateway
                </CardTitle>
              </div>
              <CardDescription className="text-court-sand-200 text-xs sm:text-sm">
                Transparent statutory court fee payment system integrating instant Remita/Bank checkout and verifiable official digital receipts.
              </CardDescription>
            </div>

            <Badge className="bg-emerald-600 text-white font-bold text-xs py-1 px-3 self-start sm:self-center">
              GovTech Payment Gateway
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          {paymentSuccess ? (
            /* Official Digital Judiciary Receipt */
            <div className="max-w-xl mx-auto space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center border-4 border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <Badge className="bg-court-green-800 text-white font-bold text-xs">
                  TRANSACTION APPROVED
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-court-slate-900">
                  Statutory Receipt Generated
                </h3>
                <p className="text-xs text-gray-500">
                  Transaction credited to Jigawa State Shari’ah Court of Appeal Treasury Account.
                </p>
              </div>

              {/* Printable Official Receipt Body */}
              <div className="p-4 sm:p-6 rounded-2xl bg-court-sand-50 border-2 border-court-gold-400 text-left space-y-3 font-sans text-xs relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-court-sand-300 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-court-gold-400 flex items-center justify-center flex-shrink-0">
                      <img src="/Court-logo.png" alt="Court Seal" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-court-green-950 text-xs">Shari'ah Court of Appeal</div>
                      <div className="text-[10px] text-gray-500">Jigawa State Government, Nigeria</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-court-green-800 uppercase block">Receipt Date</span>
                    <span className="text-[10px] text-gray-600">{new Date().toLocaleDateString('en-GB')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Transaction Reference</span>
                    <span className="font-mono font-bold text-court-slate-900">{transactionRef}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Remita RRR Code</span>
                    <span className="font-mono font-bold text-court-green-800">{remitaRrr}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-court-sand-300 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Suit Number:</span>
                    <span className="font-mono font-bold text-gray-900">{suitNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payer Name:</span>
                    <span className="font-semibold text-gray-900">{payerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purpose of Payment:</span>
                    <span className="font-semibold text-gray-900 text-right">{currentFee.label}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm font-bold text-court-green-900 border-t border-court-sand-300">
                    <span>Statutory Amount Paid:</span>
                    <span>₦{currentFee.amount.toLocaleString()}.00</span>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-lg border border-court-sand-300 flex items-center justify-between text-[11px] text-emerald-800">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Cryptographically Authenticated</span>
                  </div>
                  <span className="font-mono text-[10px]">STATUS: COMPLETED</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <Button 
                  onClick={() => window.print()} 
                  className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs w-full sm:w-auto"
                >
                  <Printer className="w-4 h-4 mr-1 text-court-gold-400" />
                  Print Official Receipt
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setPaymentSuccess(false)}
                  className="text-xs font-semibold w-full sm:w-auto"
                >
                  Make Another Payment
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Fee Selection List */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                  Select Statutory Fee Category
                </div>

                {Object.entries(feeItems).map(([key, item]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedFee(key)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedFee === key
                        ? 'border-court-green-800 bg-court-green-50/60 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-court-slate-900">{item.label}</span>
                      <span className="font-mono font-bold text-court-green-900 text-xs">
                        ₦{item.amount.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Checkout Form */}
              <div className="lg:col-span-7 p-5 rounded-xl bg-court-sand-50 border border-court-sand-200">
                <form onSubmit={handleProcessPayment} className="space-y-4">
                  <div className="border-b border-court-sand-300 pb-2">
                    <h4 className="font-bold text-court-slate-900 text-sm">Payer & Case Particulars</h4>
                    <p className="text-[11px] text-gray-500">Provide details for statutory fee credit.</p>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-bold text-gray-700">Suit / Matter Reference Number</Label>
                    <Input
                      value={suitNumber}
                      onChange={(e) => setSuitNumber(e.target.value)}
                      placeholder="e.g. SCA/JG/CV/04/2024"
                      className="text-xs bg-white font-mono"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs font-bold text-gray-700">Payer / Counsel Name</Label>
                      <Input
                        value={payerName}
                        onChange={(e) => setPayerName(e.target.value)}
                        placeholder="Full Legal Name"
                        className="text-xs bg-white"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs font-bold text-gray-700">Phone Contact</Label>
                      <Input
                        value={payerPhone}
                        onChange={(e) => setPayerPhone(e.target.value)}
                        placeholder="+234 803 000 0000"
                        className="text-xs bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-bold text-gray-700">Email for Digital Receipt</Label>
                    <Input
                      type="email"
                      value={payerEmail}
                      onChange={(e) => setPayerEmail(e.target.value)}
                      placeholder="counsel@chambers.com"
                      className="text-xs bg-white"
                      required
                    />
                  </div>

                  {/* Summary & Checkout Button */}
                  <div className="pt-3 border-t border-court-sand-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-600">Total Statutory Assessment:</span>
                      <span className="text-lg font-black text-court-green-900">
                        ₦{currentFee.amount.toLocaleString()}.00
                      </span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs py-6 shadow-judicial"
                    >
                      {isProcessing ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Processing Remita / Interswitch Gateway...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-court-gold-400" />
                          Pay ₦{currentFee.amount.toLocaleString()}.00 Online
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
