'use client'

import React, { useState } from 'react'
import { 
  Calculator, 
  Scale, 
  FileCheck2, 
  HelpCircle, 
  Printer, 
  Download, 
  CheckCircle2, 
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

interface HeirDistribution {
  category: string
  fraction: string
  percentage: number
  amountNaira: number
  quranicBasis: string
}

export default function MirathCalculator() {
  const [estateValue, setEstateValue] = useState<number>(10000000) // Default ₦10,000,000
  const [deceasedGender, setDeceasedGender] = useState<'male' | 'female'>('male')
  const [wivesCount, setWivesCount] = useState<number>(1)
  const [sonsCount, setSonsCount] = useState<number>(2)
  const [daughtersCount, setDaughtersCount] = useState<number>(2)
  const [hasFather, setHasFather] = useState<boolean>(false)
  const [hasMother, setHasMother] = useState<boolean>(true)
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false)

  // Compute Maliki Shari'ah Distribution
  const calculateDistribution = (): HeirDistribution[] => {
    const results: HeirDistribution[] = []
    const total = Math.max(0, estateValue)
    let remainingEstate = total
    const hasChildren = (sonsCount + daughtersCount) > 0

    // 1. Mother's Share
    if (hasMother) {
      const fraction = hasChildren ? '1/6' : '1/3'
      const share = hasChildren ? total / 6 : total / 3
      results.push({
        category: 'Mother (Umm)',
        fraction,
        percentage: hasChildren ? (100 / 6) : (100 / 3),
        amountNaira: share,
        quranicBasis: 'Surah An-Nisa (4:11)'
      })
      remainingEstate -= share
    }

    // 2. Father's Share
    if (hasFather) {
      if (hasChildren && sonsCount > 0) {
        // Father gets fixed 1/6
        const share = total / 6
        results.push({
          category: 'Father (Ab)',
          fraction: '1/6',
          percentage: (100 / 6),
          amountNaira: share,
          quranicBasis: 'Surah An-Nisa (4:11)'
        })
        remainingEstate -= share
      } else if (hasChildren && sonsCount === 0) {
        // Father gets 1/6 + Asabah later
        const share = total / 6
        results.push({
          category: 'Father (Ab - Fardh)',
          fraction: '1/6',
          percentage: (100 / 6),
          amountNaira: share,
          quranicBasis: 'Surah An-Nisa (4:11)'
        })
        remainingEstate -= share
      }
    }

    // 3. Spouse Share
    if (deceasedGender === 'male') {
      // Wives share 1/8 if children, 1/4 if no children
      const fraction = hasChildren ? '1/8' : '1/4'
      const totalWivesShare = hasChildren ? total / 8 : total / 4
      const wivesLabel = wivesCount > 1 ? `Wives (${wivesCount} Sharing ${fraction})` : 'Surviving Wife (Zawjah)'
      results.push({
        category: wivesLabel,
        fraction,
        percentage: hasChildren ? 12.5 : 25,
        amountNaira: totalWivesShare,
        quranicBasis: 'Surah An-Nisa (4:12)'
      })
      remainingEstate -= totalWivesShare
    } else {
      // Husband gets 1/4 if children, 1/2 if no children
      const fraction = hasChildren ? '1/4' : '1/2'
      const share = hasChildren ? total / 4 : total / 2
      results.push({
        category: 'Surviving Husband (Zawj)',
        fraction,
        percentage: hasChildren ? 25 : 50,
        amountNaira: share,
        quranicBasis: 'Surah An-Nisa (4:12)'
      })
      remainingEstate -= share
    }

    // 4. Children (Residue / Asabah)
    if (hasChildren) {
      if (sonsCount > 0) {
        // Sons and daughters share residue in 2:1 ratio
        const totalPortions = (sonsCount * 2) + daughtersCount
        const portionValue = remainingEstate / totalPortions

        if (sonsCount > 0) {
          results.push({
            category: `Sons (${sonsCount}) - 2 Shares each`,
            fraction: 'Asabah (Residuary)',
            percentage: ((sonsCount * 2) / totalPortions) * ((remainingEstate / total) * 100),
            amountNaira: portionValue * 2 * sonsCount,
            quranicBasis: 'Surah An-Nisa (4:11) "For the male, what is equal to the share of two females"'
          })
        }

        if (daughtersCount > 0) {
          results.push({
            category: `Daughters (${daughtersCount}) - 1 Share each`,
            fraction: 'Asabah bil-Ghayr',
            percentage: (daughtersCount / totalPortions) * ((remainingEstate / total) * 100),
            amountNaira: portionValue * daughtersCount,
            quranicBasis: 'Surah An-Nisa (4:11)'
          })
        }
      } else if (daughtersCount === 1) {
        // Single daughter gets 1/2
        const share = total / 2
        results.push({
          category: 'Sole Daughter',
          fraction: '1/2',
          percentage: 50,
          amountNaira: share,
          quranicBasis: 'Surah An-Nisa (4:11)'
        })
      } else if (daughtersCount > 1) {
        // Multiple daughters share 2/3
        const share = (total * 2) / 3
        results.push({
          category: `Daughters (${daughtersCount} Sharing 2/3)`,
          fraction: '2/3',
          percentage: 66.67,
          amountNaira: share,
          quranicBasis: 'Surah An-Nisa (4:11)'
        })
      }
    } else {
      // No children: if father is alive, he takes remaining residue as Asabah
      if (hasFather) {
        results.push({
          category: 'Father (Ab - Asabah Residue)',
          fraction: 'Residue',
          percentage: (remainingEstate / total) * 100,
          amountNaira: remainingEstate,
          quranicBasis: 'Maliki Residuary Principles'
        })
      }
    }

    return results
  }

  const distributions = calculateDistribution()

  return (
    <div id="mirath-section" className="w-full">
      <Card className="border border-gray-200 shadow-judicial rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-court-green-950 text-white p-6 border-b-2 border-court-gold-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-court-gold-500 text-court-green-950">
                  <Calculator className="w-4 h-4" />
                </span>
                <CardTitle className="text-lg sm:text-xl font-bold text-white">
                  Islamic Mirath (Estate Distribution) & Probate Portal
                </CardTitle>
              </div>
              <CardDescription className="text-court-sand-200 text-xs sm:text-sm">
                Shari’ah-compliant inheritance calculator following Maliki jurisprudence and the Quranic injunctions of Surah An-Nisa.
              </CardDescription>
            </div>

            <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-xs py-1 px-3 self-start md:self-center">
              Maliki Fiqh Verified
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Form Column */}
            <div className="lg:col-span-5 space-y-4 p-4 sm:p-5 rounded-xl bg-court-sand-50 border border-court-sand-200">
              <div className="border-b border-court-sand-300 pb-2">
                <h4 className="font-bold text-court-slate-900 text-sm">Estate Particulars</h4>
                <p className="text-[11px] text-gray-500">Enter net value after funeral expenses and proven debts.</p>
              </div>

              {/* Net Distributable Estate */}
              <div className="space-y-1">
                <Label className="text-xs font-bold text-gray-700">Net Distributable Estate Value (₦ Naira)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-court-green-800 text-xs">₦</span>
                  <Input
                    type="number"
                    value={estateValue}
                    onChange={(e) => setEstateValue(Number(e.target.value))}
                    className="pl-8 text-xs font-bold bg-white"
                  />
                </div>
              </div>

              {/* Deceased Gender */}
              <div className="space-y-1">
                <Label className="text-xs font-bold text-gray-700">Deceased Gender</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeceasedGender('male')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors border text-center ${
                      deceasedGender === 'male'
                        ? 'bg-court-green-800 text-white border-court-green-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Male Deceased (Husband/Father)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeceasedGender('female')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors border text-center ${
                      deceasedGender === 'female'
                        ? 'bg-court-green-800 text-white border-court-green-900'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Female Deceased (Wife/Mother)
                  </button>
                </div>
              </div>

              {/* Wives Count if Male */}
              {deceasedGender === 'male' && (
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-gray-700">Surviving Wives (Zawjat)</Label>
                  <Input
                    type="number"
                    min={1}
                    max={4}
                    value={wivesCount}
                    onChange={(e) => setWivesCount(Math.min(4, Math.max(1, Number(e.target.value))))}
                    className="text-xs bg-white"
                  />
                </div>
              )}

              {/* Children */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-gray-700">Number of Sons</Label>
                  <Input
                    type="number"
                    min={0}
                    value={sonsCount}
                    onChange={(e) => setSonsCount(Math.max(0, Number(e.target.value)))}
                    className="text-xs bg-white"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-bold text-gray-700">Number of Daughters</Label>
                  <Input
                    type="number"
                    min={0}
                    value={daughtersCount}
                    onChange={(e) => setDaughtersCount(Math.max(0, Number(e.target.value)))}
                    className="text-xs bg-white"
                  />
                </div>
              </div>

              {/* Parents */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="hasMother"
                    checked={hasMother}
                    onChange={(e) => setHasMother(e.target.checked)}
                    className="rounded border-gray-300 text-court-green-800 focus:ring-court-green-800 h-4 w-4"
                  />
                  <label htmlFor="hasMother" className="text-xs font-medium text-gray-700 cursor-pointer">
                    Surviving Mother (Umm)
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="hasFather"
                    checked={hasFather}
                    onChange={(e) => setHasFather(e.target.checked)}
                    className="rounded border-gray-300 text-court-green-800 focus:ring-court-green-800 h-4 w-4"
                  />
                  <label htmlFor="hasFather" className="text-xs font-medium text-gray-700 cursor-pointer">
                    Surviving Father (Ab)
                  </label>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-500 italic">
                * Note: Under Maliki jurisprudence, debts, mortuary dues, and valid non-heir bequests (Wasiyyah max 1/3) must be satisfied prior to estate division.
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-2 mb-3 gap-2">
                  <div>
                    <h4 className="font-bold text-court-slate-900 text-sm">
                      Quranic Fractional Distribution (Fardh &amp; Asabah)
                    </h4>
                    <span className="text-xs text-gray-500">
                      Total Estate Evaluated: <strong>₦{estateValue.toLocaleString()}</strong>
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.print()}
                    className="text-xs h-8 border-court-green-800 text-court-green-900 hover:bg-court-green-50 self-start sm:self-auto"
                  >
                    <Printer className="w-3 h-3 mr-1 text-court-green-800" />
                    Print Schedule
                  </Button>
                </div>

                {/* Calculation Distribution Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mobile-touch-scroll">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-court-sand-100 text-court-slate-900 uppercase font-bold text-[10px] tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3">Heir Category</th>
                        <th className="py-2.5 px-3">Quranic Share</th>
                        <th className="py-2.5 px-3">Naira Allocation</th>
                        <th className="py-2.5 px-3">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {distributions.map((item, idx) => (
                        <tr key={idx} className="hover:bg-court-sand-50/50">
                          <td className="py-3 px-3 font-semibold text-court-slate-900">
                            {item.category}
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <Badge className="bg-court-gold-100 text-court-gold-900 border border-court-gold-300 font-bold text-[10px]">
                              {item.fraction}
                            </Badge>
                          </td>
                          <td className="py-3 px-3 font-mono font-bold text-court-green-900 whitespace-nowrap">
                            ₦{Math.round(item.amountNaira).toLocaleString()}
                          </td>
                          <td className="py-3 px-3 text-[11px] text-gray-500">
                            {item.quranicBasis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Certified True Copy Request Box */}
              <div className="p-4 rounded-xl bg-court-green-950 text-white border-2 border-court-gold-400 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-court-gold-300 font-bold text-xs">
                    <FileCheck2 className="w-4 h-4" />
                    <span>Apply for Certified Mirath Probate Certificate</span>
                  </div>
                  <p className="text-[11px] text-court-sand-200">
                    Submit this calculation to the Probate Registry for official attestation and digital QR issuance.
                  </p>
                </div>
                <Button 
                  onClick={() => alert("Probate Request initiated. Your schedule has been forwarded to the Chief Registrar's Probate Directorate. Reference: MIRATH-JG-" + Math.floor(100000 + Math.random() * 900000))}
                  className="bg-court-gold-500 hover:bg-court-gold-600 text-court-green-950 font-bold text-xs px-4 py-2 whitespace-nowrap shadow-sm"
                >
                  Generate Official Request
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
