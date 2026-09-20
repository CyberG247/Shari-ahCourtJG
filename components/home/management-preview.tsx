'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Building, 
  CreditCard, 
  Coins, 
  Users,
  User
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface StaffMember {
  name: string
  role: string
  dept: string
  category: 'executive' | 'director' | 'finance' | 'cashier'
}

export default function ManagementPreview() {
  const [activeTab, setActiveTab] = useState<'all' | 'directors' | 'finance' | 'cashiers'>('all')

  const executiveLeadership: StaffMember[] = [
    {
      name: 'TBD',
      role: 'Acting Chief Registrar & Head of Administration',
      dept: 'Office of the Chief Registrar',
      category: 'executive'
    },
    {
      name: 'TBD',
      role: 'Deputy Chief Registrar I (Administration)',
      dept: 'Court Administration Directorate',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Deputy Chief Registrar II (Litigation)',
      dept: 'Litigation & Appellate Directorate',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Chief Inspector of Shari\'a Courts',
      dept: 'Shari\'a Courts Inspectorate',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Director, Planning, Research & Statistics (DPRS)',
      dept: 'Planning, Research & Statistics',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Director of Personnel Management (DPM)',
      dept: 'Personnel Management & HR',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Director of Protocol & Publicity',
      dept: 'Protocol & Public Relations',
      category: 'director'
    },
    {
      name: 'TBD',
      role: 'Director of Administration & Finance (DAF)',
      dept: 'Directorate of Admin & Finance',
      category: 'finance'
    },
    {
      name: 'TBD',
      role: 'Deputy Director (Finance & Accounts)',
      dept: 'Finance & Accounts Directorate',
      category: 'finance'
    },
    {
      name: 'TBD',
      role: 'Chief Accountant & Head of Treasury',
      dept: 'Treasury & Ledger Division',
      category: 'finance'
    },
    {
      name: 'TBD',
      role: 'Chief Cashier (Central Cash Office)',
      dept: 'Central Cash Office (Dutse HQ)',
      category: 'cashier'
    },
    {
      name: 'TBD',
      role: 'Assistant Cashier & Remita Desk Officer',
      dept: 'Revenue & Remita Verification Desk',
      category: 'cashier'
    }
  ]

  const filteredStaff = executiveLeadership.filter(s => {
    if (activeTab === 'all') return true
    if (activeTab === 'directors') return s.category === 'director' || s.category === 'executive'
    if (activeTab === 'finance') return s.category === 'finance'
    if (activeTab === 'cashiers') return s.category === 'cashier'
    return true
  })

  return (
    <section id="management" className="py-16 md:py-24 bg-white border-t border-gray-200 relative">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-green-100 text-court-green-900 border border-court-green-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-court-green-800" />
            <span>Management, Finance & Cash Office</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-court-slate-900 tracking-tight">
            Management, Finance & Registry Leadership
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Official administrative machinery appointed by the Jigawa State Judicial Service Commission (JSC), including the Chief Registrar, Directors, Directorate of Administration & Finance (DAF), and Court Cashiers.
          </p>
          <div className="w-20 h-1 bg-court-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dedicated Finance Staff Highlight Alert Bar */}
        <div className="max-w-6xl mx-auto mb-8 p-4 rounded-xl bg-court-sand-100 border border-court-gold-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-court-slate-900">
            <div className="p-2 rounded-lg bg-court-gold-500 text-court-green-950 font-bold">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-court-green-900 text-sm block">
                Directorate of Administration & Finance (DAF) & Court Cashiers
              </span>
              <span className="text-gray-600">
                Official directory of the Director Admin & Finance, Deputy Directors, Chief Accountant, and Central/Zonal Cashiers.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-court-green-800 text-white text-xs px-3 py-1">
              JSC Appointed & Verified
            </Badge>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-court-green-800 text-white shadow-sm'
                : 'bg-court-sand-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Executive Personnel ({executiveLeadership.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('directors')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'directors'
                ? 'bg-court-green-800 text-white shadow-sm'
                : 'bg-court-sand-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Building className="w-3.5 h-3.5 text-court-gold-600" />
            <span>Chief Registrar & JSC Directors</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('finance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'finance'
                ? 'bg-court-green-800 text-white shadow-sm'
                : 'bg-court-sand-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Coins className="w-3.5 h-3.5 text-court-gold-600" />
            <span>Director Admin & Finance (DAF) & Treasury</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cashiers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'cashiers'
                ? 'bg-court-green-800 text-white shadow-sm'
                : 'bg-court-sand-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-court-gold-600" />
            <span>Court Cashiers & Revenue Officers</span>
          </button>
        </div>

        {/* Leadership Cards Grid - Placeholders for Photos, TBD Names & Designations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredStaff.map((officer, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-court-gold-400 transition-all duration-300 flex flex-col"
            >
              {/* Photo Placeholder */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-court-sand-50 to-court-sand-100/70 flex flex-col items-center justify-center p-6 text-center border-b border-gray-100">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-dashed border-court-gold-300 shadow-sm flex items-center justify-center text-court-slate-400 group-hover:text-court-green-800 group-hover:border-court-green-600 transition-colors">
                  <User className="w-10 h-10 stroke-[1.5]" />
                </div>
                <span className="mt-3 text-[11px] font-semibold tracking-wide text-court-slate-600 uppercase bg-white/90 px-3 py-1 rounded-full border border-court-gold-200 shadow-2xs">
                  Official Photo TBD
                </span>
              </div>

              {/* Name and Designation Only */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-center text-center">
                <div className="inline-block mx-auto mb-1.5">
                  <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider">
                    {officer.name}
                  </span>
                </div>
                <h3 className="font-bold text-court-slate-900 text-sm leading-snug">
                  {officer.role}
                </h3>
                <p className="text-xs text-court-gold-700 mt-1 leading-snug">
                  {officer.dept}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Management Hierarchy Button */}
        <div className="mt-12 text-center">
          <Link href="/management">
            <Button 
              variant="outline"
              className="border-court-green-800 text-court-green-900 hover:bg-court-green-50 text-xs font-semibold px-6"
            >
              <Users className="w-3.5 h-3.5 mr-2" />
              View Full Organizational Structure, Accounts & Cashier Directory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
