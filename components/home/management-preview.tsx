'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Building, 
  CreditCard, 
  Coins, 
  Users 
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface StaffMember {
  name: string
  role: string
  dept: string
  category: 'executive' | 'director' | 'finance' | 'cashier'
  image: string
}

export default function ManagementPreview() {
  const [activeTab, setActiveTab] = useState<'all' | 'directors' | 'finance' | 'cashiers'>('all')

  const executiveLeadership: StaffMember[] = [
    {
      name: 'Kabiru Gumel Esq.',
      role: 'Acting Chief Registrar & Head of Administration',
      dept: 'Office of the Chief Registrar',
      category: 'executive',
      image: '/staff/kabiru-gumel.jpg'
    },
    {
      name: 'Aliyu Muhammad',
      role: 'Deputy Chief Registrar I (Administration)',
      dept: 'Court Administration Directorate',
      category: 'director',
      image: '/staff/aliyu-muhammad.jpg'
    },
    {
      name: 'Abdulrashid Alhassan',
      role: 'Deputy Chief Registrar II (Litigation)',
      dept: 'Litigation & Appellate Directorate',
      category: 'director',
      image: '/staff/abdulrashid-alhassan.jpg'
    },
    {
      name: 'Isma\'il Sani',
      role: 'Chief Inspector of Shari\'a Courts',
      dept: 'Shari\'a Courts Inspectorate',
      category: 'director',
      image: '/staff/ismail-sani.jpg'
    },
    {
      name: 'Umar Mallam',
      role: 'Director, Planning, Research & Statistics (DPRS)',
      dept: 'Planning, Research & Statistics',
      category: 'director',
      image: '/staff/umar-mallam.jpg'
    },
    {
      name: 'Muhammad Lawan',
      role: 'Director of Personnel Management (DPM)',
      dept: 'Personnel Management & HR',
      category: 'director',
      image: '/staff/muhammad-lawan.jpg'
    },
    {
      name: 'Abbas Rufa\'i Wangara (Abba Wangara)',
      role: 'Director of Protocol & Publicity',
      dept: 'Protocol & Public Relations',
      category: 'director',
      image: '/staff/abba-wangara.jpg'
    },
    {
      name: 'Director of Admin & Finance (DAF)',
      role: 'Director of Administration & Finance',
      dept: 'Directorate of Admin & Finance',
      category: 'finance',
      image: '/staff/director-admin-finance.jpg'
    },
    {
      name: 'Deputy Director (Finance & Accounts)',
      role: 'Deputy Director (Finance & Accounts)',
      dept: 'Finance & Accounts Directorate',
      category: 'finance',
      image: '/staff/deputy-director-finance.jpg'
    },
    {
      name: 'Chief Accountant & Head of Treasury',
      role: 'Chief Accountant & Head of Treasury',
      dept: 'Treasury & Ledger Division',
      category: 'finance',
      image: '/staff/chief-accountant.jpg'
    },
    {
      name: 'Chief Cashier (Dutse Headquarters)',
      role: 'Chief Cashier (Central Cash Office)',
      dept: 'Central Cash Office (Dutse HQ)',
      category: 'cashier',
      image: '/staff/chief-cashier.jpg'
    },
    {
      name: 'Assistant Cashier & Remita Desk Officer',
      role: 'Assistant Cashier & Remita Desk Officer',
      dept: 'Revenue & Remita Verification Desk',
      category: 'cashier',
      image: '/staff/assistant-cashier-remita.jpg'
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

        {/* Leadership Cards Grid - Only Pictures, Names, and Designation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredStaff.map((officer, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-court-gold-400 transition-all duration-300 flex flex-col"
            >
              {/* Picture */}
              <div className="relative w-full aspect-[4/5] bg-court-sand-100 overflow-hidden">
                <Image
                  src={officer.image}
                  alt={officer.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name and Designation Only */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-center text-center">
                <h3 className="font-bold text-court-slate-900 text-sm sm:text-base leading-snug">
                  {officer.name}
                </h3>
                <p className="text-xs font-semibold text-court-gold-700 mt-1.5 leading-snug">
                  {officer.role}
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
