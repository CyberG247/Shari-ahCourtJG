'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Building, 
  Users, 
  Phone, 
  Mail, 
  Coins, 
  Scale, 
  CreditCard, 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Search,
  CheckCircle2,
  Landmark,
  BadgePercent,
  Award,
  BookOpen,
  User
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface StaffProfile {
  id: string
  name: string
  position: string
  category: 'executive' | 'director' | 'finance' | 'cashier'
  department: string
  experience: string
  phone: string
  email: string
  responsibilities: string
  qualifications?: string
  officialNote?: string
}

export default function ManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'director' | 'finance' | 'cashier'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const chiefRegistrar: StaffProfile = {
    id: 'cr-gumel',
    name: 'TBD',
    position: 'Acting Chief Registrar & Head of Court Administration',
    category: 'executive',
    department: 'Office of the Chief Registrar, Headquarters, Dutse',
    experience: 'Head of Court Administration',
    phone: '+234 (0) 64 721 234',
    email: 'chiefregistrar@shariahcourt.jigawa.gov.ng',
    qualifications: 'LL.B (Hons), BL, Master of Laws (LL.M)',
    responsibilities: 'Overall judicial administration, execution of court policies, case workflow superintendence across Jigawa State Shari\'a divisions, custody of the Court Seal, and constitutional liaison with the National Judicial Council (NJC) and the Jigawa State Judicial Service Commission (JSC).',
    officialNote: 'Appointed and overseen by the Jigawa State Judicial Service Commission (JSC).'
  }

  const staffDirectory: StaffProfile[] = [
    // --- JSC APPOINTED DIRECTORS & DEPUTY CHIEF REGISTRARS ---
    {
      id: 'dcr-admin-aliyu',
      name: 'TBD',
      position: 'Deputy Chief Registrar I (Administration)',
      category: 'director',
      department: 'Directorate of Court Administration',
      experience: 'Court Administration Directorate',
      phone: '+234 (0) 64 721 235',
      email: 'dcr.admin@shariahcourt.jigawa.gov.ng',
      qualifications: 'LL.B, BL, MPA (Public Administration)',
      responsibilities: 'Directs court administrative machinery, registry personnel coordination, inter-divisional logistics, judicial staff establishment, and execution of administrative directives of the JSC.',
      officialNote: 'Confirmed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'dcr-litigation-alhassan',
      name: 'TBD',
      position: 'Deputy Chief Registrar II (Litigation)',
      category: 'director',
      department: 'Directorate of Litigation & Appellate Proceedings',
      experience: 'Litigation & Appellate Directorate',
      phone: '+234 (0) 64 721 236',
      email: 'dcr.litigation@shariahcourt.jigawa.gov.ng',
      qualifications: 'LL.B (Common & Islamic Law), BL',
      responsibilities: 'Superintends appellate case filings, compilation and settlement of records of proceedings, daily cause list supervision before the Grand Kadi panels, and enforcement of court civil procedure rules.',
      officialNote: 'Confirmed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'chief-inspector-ismail',
      name: 'TBD',
      position: 'Chief Inspector of Shari\'a Courts',
      category: 'director',
      department: 'Shari\'a Courts Inspectorate Division',
      experience: 'Shari\'a Courts Inspectorate',
      phone: '+234 (0) 64 721 237',
      email: 'inspectorate@shariahcourt.jigawa.gov.ng',
      qualifications: 'Diploma in Shari\'a Law, LL.B, BL',
      responsibilities: 'Leads statutory inspections and judicial ethics monitoring of all lower and Upper Shari\'a Courts across the 27 Local Government Areas of Jigawa State, reviewing case dockets, records maintenance, and procedural integrity.',
      officialNote: 'Confirmed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'deputy-inspector-isyaku',
      name: 'TBD',
      position: 'Deputy Chief Inspector of Shari\'a Courts',
      category: 'director',
      department: 'Shari\'a Courts Inspectorate Division',
      experience: 'Shari\'a Courts Inspectorate',
      phone: '+234 (0) 64 721 238',
      email: 'deputy.inspector@shariahcourt.jigawa.gov.ng',
      qualifications: 'Diploma in Islamic Jurisprudence, LL.B',
      responsibilities: 'Conducts regular field inspections, zonal court registry compliance audits, assessment of court physical facilities, and investigation of judicial administrative petitions.',
      officialNote: 'Appointed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'dir-prs-umar',
      name: 'TBD',
      position: 'Director of Planning, Research and Statistics (DPRS)',
      category: 'director',
      department: 'Directorate of Planning, Research & Statistics',
      experience: 'Planning, Research & Statistics',
      phone: '+234 (0) 64 721 239',
      email: 'dprs@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Economics / Statistics, M.Sc Planning',
      responsibilities: 'Heads judicial data analytics, quarterly and annual statistical documentation of instituted and disposed appeals, judicial infrastructure development, court law library modernization, and legal research.',
      officialNote: 'Confirmed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'dir-pm-lawan',
      name: 'TBD',
      position: 'Director of Personnel Management (DPM)',
      category: 'director',
      department: 'Directorate of Personnel Management & Human Resources',
      experience: 'Personnel Management & HR',
      phone: '+234 (0) 64 721 240',
      email: 'dpm@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Public Administration, FCPA',
      responsibilities: 'Oversees staff career progression, personnel establishment records, promotions, training institutes, welfare programs, and disciplinary affairs in liaison with the State Judicial Service Commission.',
      officialNote: 'Confirmed by the Jigawa State Judicial Service Commission.'
    },
    {
      id: 'dir-publicity-wangara',
      name: 'TBD',
      position: 'Director of Protocol and Publicity (Judiciary Spokesperson)',
      category: 'director',
      department: 'Directorate of Protocol, Public Relations & Information',
      experience: 'Protocol & Public Relations',
      phone: '+234 (0) 64 721 241',
      email: 'spokesperson@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.A Mass Communication, Member NIPR',
      responsibilities: 'Official spokesperson for the Jigawa State Judiciary, judicial press releases, public legal enlightenment, media liaison, and protocol arrangements for the Grand Kadi and judicial dignitaries.',
      officialNote: 'Official Judiciary Public Relations & Communications Lead.'
    },

    // --- FINANCE & ACCOUNTS LEADERSHIP (DAF, DEPUTIES, TREASURY, AUDIT) ---
    {
      id: 'daf-finance-lead',
      name: 'TBD',
      position: 'Director of Administration & Finance (DAF)',
      category: 'finance',
      department: 'Directorate of Administration & Finance',
      experience: 'Administration & Finance',
      phone: '+234 (0) 64 721 242',
      email: 'daf@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Accounting / Finance, CNA / ANAN, ACTI',
      responsibilities: 'Directorial head of fiscal operations, statutory budgetary defense before the Jigawa State Government, judicial expenditure control, public procurement compliance, state treasury liaison, and revenue audits.',
      officialNote: 'Head of Administrative & Fiscal Machinery under the Office of the Chief Registrar.'
    },
    {
      id: 'deputy-dir-finance',
      name: 'TBD',
      position: 'Deputy Director (Finance & Accounts)',
      category: 'finance',
      department: 'Finance & Accounts Directorate',
      experience: 'Finance & Accounts Directorate',
      phone: '+234 (0) 64 721 243',
      email: 'finance.accounts@shariahcourt.jigawa.gov.ng',
      qualifications: 'HND / B.Sc Accounting, PGD Financial Management',
      responsibilities: 'Vote book management, expenditure control, Remita statutory fees reconciliation, maintenance of general ledgers, and preparation of monthly financial statements.',
      officialNote: 'Supervises Accounts, Vote Books & Statutory Fee Accounting.'
    },
    {
      id: 'deputy-dir-admin',
      name: 'TBD',
      position: 'Deputy Director (Administration & Establishment)',
      category: 'finance',
      department: 'Administration & Establishment Division',
      experience: 'Administration & Establishment',
      phone: '+234 (0) 64 721 244',
      email: 'admin.establishment@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Public Administration, MPA',
      responsibilities: 'Registry staff establishment records, staff deployment, pension records liaison, office equipment logistics, and inter-departmental administrative coordination.',
      officialNote: 'Directs Staff Establishment & Administrative Operations.'
    },
    {
      id: 'chief-accountant-treasury',
      name: 'TBD',
      position: 'Chief Accountant & Head of Treasury',
      category: 'finance',
      department: 'Treasury & Ledger Division',
      experience: 'Treasury & Ledger Division',
      phone: '+234 (0) 64 721 245',
      email: 'treasury@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Accounting, Certified National Accountant (CNA/ANAN)',
      responsibilities: 'Custody and supervision of treasury cash books, bank mandates, electronic fund transfers, financial ledger validation, and statutory payment processing.',
      officialNote: 'Central Treasury & Disbursement Control.'
    },
    {
      id: 'head-internal-audit',
      name: 'TBD',
      position: 'Head of Internal Audit',
      category: 'finance',
      department: 'Internal Audit Directorate',
      experience: 'Internal Audit Directorate',
      phone: '+234 (0) 64 721 246',
      email: 'audit@shariahcourt.jigawa.gov.ng',
      qualifications: 'B.Sc Accounting, ACA / CNA (In View)',
      responsibilities: 'Independent pre-payment audit of judicial vouchers, post-payment evaluations, verification of statutory court fee receipts, and revenue inspection across all zonal registries.',
      officialNote: 'Statutory Fiscal Compliance & Internal Controls.'
    },

    // --- CASH OFFICES & COURT CASHIERS ---
    {
      id: 'chief-cashier-hq',
      name: 'TBD',
      position: 'Chief Cashier (Central Cash Office - Dutse HQ)',
      category: 'cashier',
      department: 'Central Cash Office (Dutse Headquarters)',
      experience: 'Central Cash Office',
      phone: '+234 (0) 64 721 247',
      email: 'chiefcashier@shariahcourt.jigawa.gov.ng',
      qualifications: 'Diploma in Banking & Finance, B.Sc Finance',
      responsibilities: 'Custody of court revenue funds, collection of statutory appeal filing fees, certified true copy (CTC) payments, daily revenue lodgment into state treasury accounts, and bank teller reconciliation.',
      officialNote: 'Head of Central Cash Office, Headquarters Dutse.'
    },
    {
      id: 'senior-cashier-zonal',
      name: 'TBD',
      position: 'Senior Cashier & Zonal Revenue Collector',
      category: 'cashier',
      department: 'Zonal Cash & Revenue Operations',
      experience: 'Zonal Cash Operations',
      phone: '+234 (0) 64 721 248',
      email: 'revenue.zonal@shariahcourt.jigawa.gov.ng',
      qualifications: 'OND / HND Financial Studies',
      responsibilities: 'Supervises statutory fee collections, probate lodgments, and revenue reconciliation across Hadejia, Kazaure, Ringim, Gumel, and Birnin Kudu appellate zonal registries.',
      officialNote: 'Zonal Court Revenue Supervision.'
    },
    {
      id: 'assistant-cashier-remita',
      name: 'TBD',
      position: 'Assistant Cashier & Remita Desk Officer',
      category: 'cashier',
      department: 'Revenue & Remita Verification Desk',
      experience: 'Revenue & Remita Desk',
      phone: '+234 (0) 64 721 249',
      email: 'remita.desk@shariahcourt.jigawa.gov.ng',
      qualifications: 'Diploma in Accounting Technology, NCE',
      responsibilities: 'Real-time Remita Retrieval Reference (RRR) validation, generation of verifiable official e-receipts, counter transaction authentication, and litigant payment assistance.',
      officialNote: 'Electronic Court Revenue & E-Filing Fee Attestation.'
    },
    {
      id: 'zonal-cashiers-rep',
      name: 'TBD',
      position: 'Divisional Zonal Cashiers (Hadejia, Gumel, Kazaure, Ringim, Birnin Kudu)',
      category: 'cashier',
      department: 'Divisional Registries Cash Desks',
      experience: 'Divisional Registries',
      phone: '+234 (0) 64 721 250',
      email: 'zonal.cashiers@shariahcourt.jigawa.gov.ng',
      qualifications: 'Diplomas in Public Finance & Accounting',
      responsibilities: 'Collection of appellate motion fees, certified records fees, affidavit fees, and probate search fees at divisional appellate registries across Jigawa State.',
      officialNote: 'Field Cash Desks across the 5 Judicial Divisions.'
    }
  ]

  const departments = [
    {
      name: 'Office of the Chief Registrar',
      head: 'TBD (Acting Chief Registrar)',
      staff: 22,
      category: 'Executive & Strategic Oversight',
      functions: [
        'Overall judicial administration and superintendence of court personnel',
        'Custody of the Seal of the Jigawa State Shari’ah Court of Appeal',
        'Execution of judicial policy in consultation with the Hon. Grand Kadi',
        'Constitutional liaison with the National Judicial Council (NJC) and the State Judicial Service Commission (JSC)'
      ]
    },
    {
      name: 'Directorates of Administration & Litigation (DCR I & II)',
      head: 'TBD (DCR I) & TBD (DCR II)',
      staff: 28,
      category: 'Appellate Operations & Registry Leadership',
      functions: [
        'Management of appellate registry operations, filings, and summons',
        'Settlement and transmission of records of proceedings for appellate panels',
        'Supervision of daily cause lists across all appellate divisions',
        'Enforcement of Shari’ah Court of Appeal Civil Procedure Rules'
      ]
    },
    {
      name: 'Shari\'a Courts Inspectorate Division',
      head: 'TBD (Chief Inspector) & TBD (Deputy)',
      staff: 18,
      category: 'Compliance, Ethics & Court Oversight',
      functions: [
        'Routine and unscheduled inspections of Lower & Upper Shari\'a Courts',
        'Monitoring judicial ethics, attendance, and adherence to Islamic jurisprudence',
        'Review of case dockets, bail recognizances, and registry record books',
        'Reporting findings directly to the Grand Kadi and the Judicial Service Commission'
      ]
    },
    {
      name: 'Directorate of Administration & Finance (DAF)',
      head: 'TBD (Director of Administration & Finance)',
      staff: 26,
      category: 'Fiscal Management & State Treasury Liaison',
      functions: [
        'Statutory budgetary preparation, defense, and expenditure control',
        'Judicial payroll administration and staff pension liaison',
        'Oversight of Central Cash Office and divisional revenue collections',
        'Financial records reconciliation with Remita and the Jigawa State Treasury'
      ]
    },
    {
      name: 'Planning, Research & Statistics (DPRS)',
      head: 'TBD (Director, PRS)',
      staff: 12,
      category: 'Judicial Data & Court Expansion',
      functions: [
        'Compilation of annual judicial statistics and case disposal metrics',
        'Strategic planning for court infrastructure expansion across the state',
        'Administration of the appellate law library and legal research databases',
        'Preparation of statutory annual reports for the judiciary'
      ]
    },
    {
      name: 'Central Cash Office & Revenue Desks',
      head: 'TBD (Chief Cashier & Senior Zonal Collectors)',
      staff: 15,
      category: 'Revenue Collection & Remita Validation',
      functions: [
        'Direct collection of statutory appeal filing, search, and certification fees',
        'Validation of Remita RRR electronic payments and issuance of verified receipts',
        'Maintenance of court deposit accounts and bailiff travel mileage funds',
        'Daily revenue lodgments into the Consolidated Revenue Fund of Jigawa State'
      ]
    }
  ]

  const filteredStaff = staffDirectory.filter(staff => {
    const matchCat = 
      selectedCategory === 'all' || 
      (selectedCategory === 'director' && staff.category === 'director') ||
      (selectedCategory === 'finance' && staff.category === 'finance') ||
      (selectedCategory === 'cashier' && staff.category === 'cashier')
    
    const matchSearch = 
      searchQuery === '' ||
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (staff.officialNote && staff.officialNote.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-court-sand-50/40">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white py-12 md:py-16 border-b-4 border-court-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-court-gold-500/20 border border-court-gold-400/40 text-court-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5 text-court-gold-400" />
              <span>Judicial Administration & Treasury</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
              Management, Finance & Administration
            </h1>
            <p className="text-sm sm:text-base text-court-sand-200">
              Official roster of executive leadership, Judicial Service Commission appointees, Directorate of Administration & Finance (DAF), and Court Cashiers of the Jigawa State Shari’ah Court of Appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          
          {/* Chief Registrar Prominent Executive Profile */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-court-green-800 uppercase tracking-wider">
                Head of Court Administration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
                Office of the Chief Registrar
              </h2>
              <div className="w-16 h-1 bg-court-gold-500 mx-auto mt-2 rounded-full"></div>
            </div>

            <Card className="border-2 border-court-green-800 rounded-2xl shadow-judicial overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Col */}
                <div className="md:col-span-4 bg-gradient-to-b from-court-green-950 to-court-green-900 p-5 sm:p-6 flex flex-col items-center justify-center text-center text-white">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white/10 p-2 border-4 border-court-gold-400 shadow-md mb-4 flex flex-col items-center justify-center">
                    <User className="w-14 h-14 text-court-sand-200 stroke-[1.5]" />
                    <span className="text-[9px] font-bold text-court-gold-300 uppercase tracking-wider mt-1">Photo TBD</span>
                  </div>
                  <div className="inline-block mb-1">
                    <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-400/20 text-court-gold-300 border border-court-gold-400/50 uppercase tracking-wider">
                      {chiefRegistrar.name}
                    </span>
                  </div>
                  <Badge className="bg-court-gold-500 text-court-green-950 font-bold text-[10px] mt-1 mb-2">
                    Acting Chief Registrar
                  </Badge>
                  <p className="text-xs text-court-sand-200">{chiefRegistrar.department}</p>
                </div>

                {/* Details Col */}
                <div className="md:col-span-8 p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-2 mb-3 gap-2">
                      <span className="text-xs font-semibold text-court-green-800 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-court-gold-600" />
                        {chiefRegistrar.experience}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {chiefRegistrar.qualifications}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Key Administrative Jurisdiction:
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {chiefRegistrar.responsibilities}
                    </p>

                    {chiefRegistrar.officialNote && (
                      <div className="mt-3 p-2.5 rounded-lg bg-court-sand-100 border border-court-gold-300 text-[11px] text-court-green-950 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-court-green-800 flex-shrink-0" />
                        <span className="font-medium">{chiefRegistrar.officialNote}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-3.5 h-3.5 text-court-green-700 flex-shrink-0" />
                      <a href={`tel:${chiefRegistrar.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-court-green-800 font-semibold">
                        {chiefRegistrar.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-court-green-700 flex-shrink-0" />
                      <span className="truncate hover:text-court-green-800 text-[11px] font-semibold">
                        {chiefRegistrar.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Directory Filter & Search Header */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-court-slate-900">
                  Management, Directors, Finance & Cashiers Roster
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Real administrative data including JSC Appointed Directors, DAF, Deputy Directors, and Cashiers
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search director, cashier, role..."
                  className="pl-9 text-xs bg-white"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Administrative Personnel ({staffDirectory.length})
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('director')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === 'director'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Building className="w-3.5 h-3.5 text-court-gold-500" />
                <span>JSC Directors & DCRs</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('finance')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === 'finance'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Coins className="w-3.5 h-3.5 text-court-gold-500" />
                <span>Director Admin & Finance (DAF) & Deputies</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('cashier')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === 'cashier'
                    ? 'bg-court-green-800 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 text-court-gold-500" />
                <span>Cashiers & Revenue Collectors</span>
              </button>
            </div>
          </div>

          {/* Staff Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {filteredStaff.map((staff) => {
              const isCashier = staff.category === 'cashier'
              const isFinance = staff.category === 'finance'
              const isDirector = staff.category === 'director'

              return (
                <Card 
                  key={staff.id} 
                  className="border border-gray-200 hover:border-court-gold-400 rounded-2xl shadow-sm hover:shadow-judicial transition-all duration-300 flex flex-col justify-between bg-white overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isCashier 
                            ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                            : isFinance 
                              ? 'bg-court-gold-100 text-court-gold-900 border border-court-gold-300' 
                              : 'bg-court-green-100 text-court-green-900 border border-court-green-300'
                        }`}>
                          {isCashier ? (
                            <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                          ) : isFinance ? (
                            <Coins className="w-5 h-5 sm:w-6 sm:h-6" />
                          ) : (
                            <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                          )}
                        </div>
                        <div>
                          <Badge 
                            variant="outline" 
                            className={`text-[9px] font-bold uppercase tracking-wider ${
                              isCashier 
                                ? 'bg-amber-50 text-amber-900 border-amber-300'
                                : isFinance 
                                  ? 'bg-court-gold-50 text-court-gold-900 border-court-gold-300' 
                                  : 'bg-court-green-50 text-court-green-900 border-court-green-300'
                            }`}
                          >
                            {staff.department}
                          </Badge>
                          <div className="text-[10px] text-gray-500">{staff.experience}</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-bold text-court-slate-900 text-base mb-1 leading-snug">
                      {staff.name}
                    </h4>
                    <p className="text-xs font-semibold text-court-gold-700 mb-2">
                      {staff.position}
                    </p>

                    {staff.officialNote && (
                      <div className="text-[10px] text-court-green-900 bg-court-green-50 p-1.5 rounded mb-3 border border-court-green-200 flex items-center gap-1 font-medium">
                        <ShieldCheck className="w-3 h-3 text-court-green-700 flex-shrink-0" />
                        <span>{staff.officialNote}</span>
                      </div>
                    )}

                    {staff.qualifications && (
                      <div className="text-[11px] text-gray-500 mb-3 bg-court-sand-50 p-2 rounded border border-gray-100">
                        <strong>Credentials:</strong> {staff.qualifications}
                      </div>
                    )}

                    <div className="space-y-1 text-xs text-gray-600">
                      <strong className="text-gray-800 text-[11px] block uppercase tracking-wide">
                        Core Jurisdiction & Duties:
                      </strong>
                      <p className="leading-relaxed text-[11px]">
                        {staff.responsibilities}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-court-sand-50/70 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-court-green-700 flex-shrink-0" />
                      <a href={`tel:${staff.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-court-green-800 font-semibold text-[11px]">
                        {staff.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-court-green-700 flex-shrink-0" />
                      <span className="truncate hover:text-court-green-800 text-[10px] font-semibold">
                        {staff.email}
                      </span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Departmental Structure & Directorate Breakdown */}
          <div className="max-w-6xl mx-auto pt-8 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge className="bg-court-green-100 text-court-green-900 border border-court-green-300 font-bold text-xs mb-2">
                Operational Framework
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-court-slate-900">
                Departmental & Financial Directorate Functions
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Official operational scope across judicial administration, inspectorate, finance, planning, and treasury desks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <Card key={idx} className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-judicial transition-shadow flex flex-col justify-between bg-white">
                  <CardHeader className="pb-3 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary" className="text-[10px] font-bold bg-court-sand-100 text-court-slate-900 border border-court-sand-300">
                        {dept.category}
                      </Badge>
                      <span className="text-xs font-bold text-court-green-800">{dept.staff} Personnel</span>
                    </div>
                    <CardTitle className="text-base font-bold text-court-slate-900 leading-snug">
                      {dept.name}
                    </CardTitle>
                    <div className="text-xs text-court-gold-700 font-semibold pt-1">
                      Lead: {dept.head}
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Statutory Functions:
                      </h5>
                      <ul className="space-y-2 text-xs text-gray-600">
                        {dept.functions.map((fn, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-court-green-700 mt-1.5 flex-shrink-0"></span>
                            <span className="leading-relaxed">{fn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
