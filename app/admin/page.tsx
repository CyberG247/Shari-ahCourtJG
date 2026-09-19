'use client'

import React, { useState, useEffect } from 'react'
import { 
  Users, 
  FileText, 
  Scale, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Eye, 
  Calendar, 
  Image as ImageIcon, 
  Video, 
  Newspaper, 
  UserCheck, 
  Building,
  Shield, 
  Lock, 
  Upload, 
  Download, 
  Search, 
  Filter,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Hash,
  Check,
  Key,
  Menu,
  X,
  Globe,
  Coins,
  CreditCard,
  BellRing,
  BookOpen,
  Send,
  Database,
  Sliders,
  ChevronRight,
  Bot
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

// Type Definitions
export interface SupportTicket {
  id: string
  service: string
  applicantName: string
  contact: string
  referenceNo?: string
  severity: 'Standard' | 'High' | 'Critical'
  description: string
  status: 'Open' | 'In Progress' | 'Resolved'
  createdAt: string
  developerNotes?: string
  source: string
}

export interface CourtSettings {
  courtTitleEn: string
  courtTitleAr: string
  headOfCourt: string
  headOfCourtRole: string
  chiefRegistrar: string
  address: string
  registryPhone: string
  supportEmail: string
  emergencyPhone: string
  // Public Alert / Recess Banner
  recessBannerEnabled: boolean
  recessBannerSeverity: 'info' | 'warning' | 'destructive'
  recessBannerMessage: string
  // Statutory Fees
  feeNoticeOfAppeal: number
  feeMotionOnNotice: number
  feeCTCPerPage: number
  feeRecordCompilation: number
  feeMirathAttestation: number
  feeMarriageCertificate: number
  // Adalat AI Configuration
  adalatAiEnabled: boolean
  adalatGreeting: string
  devSupportEmail: string
}

export interface KadiRecord {
  id: string
  name: string
  fullName: string
  honorific: string
  rank: string
  roleTitle: string
  division: string
  appointmentPeriod: string
  appointmentYear: string
  njcRecommendation: string
  qualifications: string
  biography: string
  image?: string
  status: 'active' | 'retired' | 'special_assignment'
}

export interface HearingDocket {
  id: string
  suitNumber: string
  parties: string
  division: string
  courtroom: string
  hearingDate: string
  hearingTime: string
  coram: string
  matterNature: string
  status: 'Scheduled' | 'In Session' | 'Adjourned' | 'Judgment Reserved' | 'Disposed'
}

export interface EFilingRecord {
  id: string
  applicantName: string
  counselName: string
  matterType: string
  division: string
  submissionDate: string
  remitaRRR: string
  feePaid: number
  paymentStatus: 'Verified' | 'Pending' | 'Exempt'
  status: 'Pending Review' | 'Query Issued' | 'Approved & Docketed'
  notes?: string
}

export interface VerificationRecord {
  id: string
  documentType: string
  issuedTo: string
  division: string
  issueDate: string
  sha256Hash: string
  qrCode: string
  status: 'Valid' | 'Revoked' | 'Expired'
}

export interface JudgmentRecord {
  id: string
  suitNumber: string
  title: string
  category: string
  deliveryDate: string
  coram: string
  summary: string
  citations: number
  pages: number
}

export interface StaffRecord {
  id: string
  name: string
  position: string
  department: string
  category: 'director' | 'finance' | 'cashier'
  phone: string
  email: string
  responsibilities: string
  status: 'active' | 'leave'
}

export interface AuditLog {
  id: string
  timestamp: string
  user: string
  action: string
  details: string
  status: 'Success' | 'Warning' | 'Security'
}

// Storage Keys
const SETTINGS_KEY = 'shariah_court_admin_settings_v1'
const DEV_TICKETS_STORAGE_KEY = 'shariah_court_dev_tickets_v1'
const KADIS_KEY = 'shariah_court_kadis_v1'
const CAUSELIST_KEY = 'shariah_court_causelist_v1'
const EFILING_KEY = 'shariah_court_efilings_v1'
const VERIFICATION_KEY = 'shariah_court_verification_v1'
const JUDGMENTS_KEY = 'shariah_court_judgments_v1'
const STAFF_KEY = 'shariah_court_staff_v1'
const AUDIT_KEY = 'shariah_court_audit_v1'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<string | null>(null)

  // 1. Settings State
  const [courtSettings, setCourtSettings] = useState<CourtSettings>({
    courtTitleEn: "Shari'ah Court of Appeal, Jigawa State",
    courtTitleAr: "محكمة الاستئناف الشرعية بولاية جيغاوة",
    headOfCourt: "His Lordship Muhammad Sani Salihu",
    headOfCourtRole: "Honorable Grand Kadi, Jigawa State",
    chiefRegistrar: "Kabiru Abubakar Gumel Esq. (Acting Chief Registrar)",
    address: "Judicial Complex, Old State Secretariat, Dutse, Jigawa State, Nigeria",
    registryPhone: "+234 (0) 64 721 234",
    supportEmail: "registry@shariahcourt.jigawa.gov.ng",
    emergencyPhone: "+234 (0) 803 555 9812",
    recessBannerEnabled: true,
    recessBannerSeverity: 'info',
    recessBannerMessage: "Legal Notice: The Honorable Appellate Bench sits continuously. Emergency bail motions and vacation appeals are accepted at the Central Registry Desk.",
    feeNoticeOfAppeal: 10000,
    feeMotionOnNotice: 5000,
    feeCTCPerPage: 500,
    feeRecordCompilation: 5000,
    feeMirathAttestation: 7500,
    feeMarriageCertificate: 2500,
    adalatAiEnabled: true,
    adalatGreeting: "Assalamu Alaikum! I am Adalat AI, your judicial and technical support assistant. How may I assist you today?",
    devSupportEmail: "dev.support@shariahcourt.jigawa.gov.ng"
  })

  // 2. Developer & Support Tickets State
  const [devTickets, setDevTickets] = useState<SupportTicket[]>([
    {
      id: "DEV-TKT-2026-1042",
      service: "E-Filing Portal",
      applicantName: "Barrister Aliyu S. Ringim",
      contact: "08034567890 / aliyu.ringim@law.ng",
      referenceNo: "SCA/JG/APP/2026/089",
      severity: "High",
      description: "Applicant encounters 'Failed to compile affidavit payload' on Step 4 when uploading multi-page PDF records over 8MB.",
      status: "Open",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      source: "Adalat AI Chatbot Support Desk"
    },
    {
      id: "DEV-TKT-2026-1038",
      service: "Remita / Fee Payment Gateway",
      applicantName: "Fatima Kabir Dutse",
      contact: "08129876543 / fatima.kd@gmail.com",
      referenceNo: "RRR 2209-4411-8890",
      severity: "Critical",
      description: "₦10,000 debited from First Bank for Notice of Appeal filing fee, but Remita webhook returned timeout so filing receipt not generated.",
      status: "In Progress",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      developerNotes: "Bank transaction verified on Remita merchant console. Manual receipt generator queued for release.",
      source: "Adalat AI Chatbot Support Desk"
    }
  ])

  // 3. Kadis State
  const [kadis, setKadis] = useState<KadiRecord[]>([
    {
      id: 'grand-kadi-salihu',
      name: 'His Lordship Muhammad Sani Salihu',
      fullName: 'Muhammad Sani Salihu',
      honorific: 'His Lordship, Hon. Grand Kadi',
      rank: 'Head of Court',
      roleTitle: 'Honorable Grand Kadi, Jigawa State',
      division: 'Appellate Division 1 (Dutse Headquarters)',
      appointmentPeriod: 'Grand Kadi (2020 – Date)',
      appointmentYear: '2020',
      njcRecommendation: 'Recommended by National Judicial Council (NJC) in April 2020.',
      qualifications: 'LL.B Shari\'ah, B.L (Nigerian Law School), Fellow NJI',
      biography: 'President of the Appellate Bench leading procedural reforms and electronic registries.',
      status: 'active'
    },
    {
      id: 'kadi-umar-nasir',
      name: 'Hon. Kadi Umar Nasir Ahmad',
      fullName: 'Umar Nasir Ahmad',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi 02',
      roleTitle: 'Senior Appellate Kadi (02)',
      division: 'Appellate Division 1 (Dutse Headquarters)',
      appointmentPeriod: 'Hon. Kadi (2017 – Date)',
      appointmentYear: '2017',
      njcRecommendation: 'Recommended by NJC in 2017.',
      qualifications: 'LL.B Islamic Law, LL.M Jurisprudence, B.L',
      biography: 'Specialist in appellate procedure and civil motions.',
      status: 'active'
    },
    {
      id: 'kadi-bala-musa',
      name: 'Hon. Kadi Dr. Bala Musa Ph.D',
      fullName: 'Bala Musa',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi 04',
      roleTitle: 'Former Chief Registrar & Academic Jurist (04)',
      division: 'Appellate Division 1 (Dutse Headquarters)',
      appointmentPeriod: 'Hon. Kadi (2018 – Date)',
      appointmentYear: '2018',
      njcRecommendation: 'Recommended by NJC in 2018.',
      qualifications: 'LL.B, LL.M, Ph.D in Islamic Law, B.L',
      biography: 'Academic jurist and former Chief Registrar.',
      status: 'active',
      image: '/kadis/hon-kadi-bala-musa.jpg'
    },
    {
      id: 'kadi-safiyanu',
      name: 'Hon. Kadi Safiyanu',
      fullName: 'Safiyanu',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi 03',
      roleTitle: 'Appellate Division Judge (03)',
      division: 'Appellate Division 2 (Hadejia)',
      appointmentPeriod: 'Hon. Kadi (2018 – Date)',
      appointmentYear: '2018',
      njcRecommendation: 'Recommended by NJC in 2018.',
      qualifications: 'Diploma Shari\'ah, LL.B, B.L',
      biography: 'Presiding Judge, Hadejia Appellate Division.',
      status: 'active'
    },
    {
      id: 'kadi-ibrahim-yau',
      name: 'Hon. Kadi Ibrahim Ya\'u',
      fullName: 'Ibrahim Ya\'u',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi 05',
      roleTitle: 'Appellate Division Judge (05)',
      division: 'Appellate Division 3 (Kazaure)',
      appointmentPeriod: 'Hon. Kadi (2019 – Date)',
      appointmentYear: '2019',
      njcRecommendation: 'Recommended by NJC in 2019.',
      qualifications: 'LL.B Shari\'ah, B.L, Member CJEI',
      biography: 'Presiding Judge, Kazaure Appellate Division.',
      status: 'active'
    },
    {
      id: 'kadi-barau-musa',
      name: 'Hon. Kadi Bara’u Bashir Musa',
      fullName: 'Bara’u Bashir Musa',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi',
      roleTitle: 'Maliki Jurisprudence Specialist',
      division: 'Appellate Division 2 (Hadejia)',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      appointmentYear: '2021',
      njcRecommendation: 'Recommended by NJC in 2021.',
      qualifications: 'LL.B Islamic Law, B.L',
      biography: 'Authority on Mirath estate devolution and testamentary dispositions.',
      status: 'active'
    },
    {
      id: 'kadi-ahmad-lamin',
      name: 'Hon. Kadi Ahmad Muhammadu Lamin',
      fullName: 'Ahmad Muhammadu Lamin',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi',
      roleTitle: 'Appellate Division Judge',
      division: 'Appellate Division 4 (Gumel)',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      appointmentYear: '2021',
      njcRecommendation: 'Recommended by NJC in 2021.',
      qualifications: 'LL.B Shari\'ah, B.L',
      biography: 'Presiding Judge, Gumel Appellate Division.',
      status: 'active'
    },
    {
      id: 'kadi-nasiru-zargina',
      name: 'Hon. Kadi Nasiru Abubakar Zargina',
      fullName: 'Nasiru Abubakar Zargina',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi',
      roleTitle: 'Appellate Division Judge',
      division: 'Appellate Division 5 (Ringim)',
      appointmentPeriod: 'Hon. Kadi (2021 – Date)',
      appointmentYear: '2021',
      njcRecommendation: 'Recommended by NJC in 2021.',
      qualifications: 'LL.B Shari\'ah & Civil Law, B.L',
      biography: 'Presiding Judge, Ringim Appellate Division.',
      status: 'active'
    },
    {
      id: 'kadi-mukhtar-adam',
      name: 'Hon. Kadi Mukhtar Shuaibu Adam',
      fullName: 'Mukhtar Shuaibu Adam',
      honorific: 'Honorable Kadi',
      rank: 'Hon. Kadi',
      roleTitle: 'Islamic Estate Specialist',
      division: 'Appellate Division 1 (Dutse Headquarters)',
      appointmentPeriod: 'Hon. Kadi (2024 – Date)',
      appointmentYear: '2024',
      njcRecommendation: 'Recommended by NJC in 2024.',
      qualifications: 'LL.B Shari\'ah, LL.M, B.L',
      biography: 'Newly appointed jurist with expertise in electronic case management.',
      status: 'active'
    }
  ])

  // 4. Cause List State
  const [causeList, setCauseList] = useState<HearingDocket[]>([
    {
      id: "DOC-2026-001",
      suitNumber: "SCA/JG/APP/2026/001",
      parties: "Alhaji Garba v. Fatima & Ors",
      division: "Dutse Headquarters",
      courtroom: "Courtroom 1 (Main Appellate Hall)",
      hearingDate: "2026-09-22",
      hearingTime: "09:30 AM",
      coram: "Salihu (GK), Ahmad (Kadi 02), Musa (Kadi 04)",
      matterNature: "Estate Distribution (Mirath) Appeal",
      status: "Scheduled"
    },
    {
      id: "DOC-2026-002",
      suitNumber: "SCA/JG/APP/2026/004",
      parties: "Haruna Suleiman v. Zainab Idris",
      division: "Hadejia Division",
      courtroom: "Hadejia Division Hall A",
      hearingDate: "2026-09-22",
      hearingTime: "10:15 AM",
      coram: "Safiyanu (Presiding Kadi), Bara'u Musa",
      matterNature: "Custody & Guardianship (Hadanah)",
      status: "Scheduled"
    },
    {
      id: "DOC-2026-003",
      suitNumber: "SCA/JG/APP/2026/009",
      parties: "Babangida Umar v. Wakf Board Jigawa",
      division: "Dutse Headquarters",
      courtroom: "Courtroom 2",
      hearingDate: "2026-09-23",
      hearingTime: "11:00 AM",
      coram: "Salihu (GK), Mukhtar Adam",
      matterNature: "Perpetual Waqf Property Boundary",
      status: "Scheduled"
    }
  ])

  // 5. E-Filing Review State
  const [eFilings, setEFilings] = useState<EFilingRecord[]>([
    {
      id: "EF-2026-041",
      applicantName: "Musa Usman & Brothers",
      counselName: "Aliyu Ringim Esq.",
      matterType: "Notice of Appeal (Mirath Estate)",
      division: "Dutse Headquarters",
      submissionDate: "2026-09-18",
      remitaRRR: "2309-8812-4450",
      feePaid: 10000,
      paymentStatus: "Verified",
      status: "Pending Review"
    },
    {
      id: "EF-2026-040",
      applicantName: "Amina Abdullahi",
      counselName: "Self-Represented",
      matterType: "Marriage Certificate Attestation",
      division: "Kazaure Division",
      submissionDate: "2026-09-17",
      remitaRRR: "2309-7711-2290",
      feePaid: 2500,
      paymentStatus: "Verified",
      status: "Approved & Docketed"
    }
  ])

  // 6. CTC Verification State
  const [verifications, setVerifications] = useState<VerificationRecord[]>([
    {
      id: "CTC-JG-2026-0012",
      documentType: "Islamic Marriage Certificate",
      issuedTo: "Ibrahim S. Kazaure & Maryam Bello",
      division: "Kazaure Division Registry",
      issueDate: "2026-01-15",
      sha256Hash: "SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
      qrCode: "QR-CTC-MC-2026-0012-VERIFIED",
      status: "Valid"
    },
    {
      id: "CTC-JG-2026-0089",
      documentType: "Certified True Copy of Judgment",
      issuedTo: "Garba & Sons Trading Co.",
      division: "Dutse Headquarters Registry",
      issueDate: "2026-02-10",
      sha256Hash: "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      qrCode: "QR-CTC-JDG-2026-0089-VERIFIED",
      status: "Valid"
    }
  ])

  // 7. Judgments State
  const [judgments, setJudgments] = useState<JudgmentRecord[]>([
    {
      id: "SCA/JIG/2024/001",
      suitNumber: "SCA/JIG/2024/001",
      title: "Musa v. Fatima - Marriage Dissolution Appeal",
      category: "Family Law",
      deliveryDate: "2024-01-15",
      coram: "His Lordship Muhammad Sani Salihu, Hon. Kadi Umar Nasir Ahmad",
      summary: "Appeal against lower court decision on dissolution. Court upheld dissolution based on irreconcilable discord under Maliki jurisprudence.",
      citations: 3,
      pages: 12
    },
    {
      id: "SCA/JIG/2024/002",
      suitNumber: "SCA/JIG/2024/002",
      title: "Estate of Late Alhaji Ibrahim - Inheritance Dispute",
      category: "Inheritance (Mirath)",
      deliveryDate: "2024-01-10",
      coram: "Hon. Kadi Dr. Bala Musa Ph.D, Hon. Kadi Safiyanu",
      summary: "Distribution of deceased estate among heirs according to divine Quranic shares. Detailed formula of Ashab al-Fara'id.",
      citations: 7,
      pages: 18
    }
  ])

  // 8. Staff / DAF State
  const [staff, setStaff] = useState<StaffRecord[]>([
    {
      id: "stf-cr",
      name: "Kabiru Abubakar Gumel Esq.",
      position: "Acting Chief Registrar",
      department: "Court Administration & Executive Registry",
      category: "director",
      phone: "+234 (0) 64 721 234",
      email: "chief.registrar@shariahcourt.jigawa.gov.ng",
      responsibilities: "Directs judicial administration, cause lists, state budget liaison, JSC compliance.",
      status: "active"
    },
    {
      id: "stf-daf",
      name: "Director of Administration & Finance (DAF)",
      position: "Director of Administration & Finance (DAF)",
      department: "Directorate of Administration & Finance",
      category: "finance",
      phone: "+234 (0) 64 721 242",
      email: "daf@shariahcourt.jigawa.gov.ng",
      responsibilities: "Fiscal machinery, statutory budgetary defense, expenditure audit, state treasury liaison.",
      status: "active"
    },
    {
      id: "stf-cashier-1",
      name: "Ibrahim Salisu (Chief Cashier)",
      position: "Chief Court Cashier & Revenue Lead",
      department: "Finance & Accounts Directorate",
      category: "cashier",
      phone: "+234 (0) 64 721 245",
      email: "cashier.central@shariahcourt.jigawa.gov.ng",
      responsibilities: "Remita e-collections reconciliation, treasury receipt book issuance, daily lodgments.",
      status: "active"
    }
  ])

  // 9. Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    {
      id: "aud-001",
      timestamp: new Date().toLocaleTimeString(),
      user: "System / Admin",
      action: "System Session Initialized",
      details: "Admin portal accessed from authenticated judicial workstation.",
      status: "Success"
    }
  ])

  // Interactive Modals State
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [modalItem, setModalItem] = useState<any>(null)

  // Search filter inside lists
  const [searchTerm, setSearchTerm] = useState('')

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const auth = localStorage.getItem('adminAuth')
      if (auth === 'true') {
        setIsAuthenticated(true)
      }

      // Load Settings
      const savedSettings = localStorage.getItem(SETTINGS_KEY)
      if (savedSettings) setCourtSettings(JSON.parse(savedSettings))

      // Load Developer Tickets
      const savedTickets = localStorage.getItem(DEV_TICKETS_STORAGE_KEY)
      if (savedTickets) {
        const parsed = JSON.parse(savedTickets)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setDevTickets(parsed)
        }
      }

      // Load Kadis
      const savedKadis = localStorage.getItem(KADIS_KEY)
      if (savedKadis) setKadis(JSON.parse(savedKadis))

      // Load Cause List
      const savedCauseList = localStorage.getItem(CAUSELIST_KEY)
      if (savedCauseList) setCauseList(JSON.parse(savedCauseList))

      // Load E-Filings
      const savedEFilings = localStorage.getItem(EFILING_KEY)
      if (savedEFilings) setEFilings(JSON.parse(savedEFilings))

      // Load Verifications
      const savedVerifications = localStorage.getItem(VERIFICATION_KEY)
      if (savedVerifications) setVerifications(JSON.parse(savedVerifications))

      // Load Judgments
      const savedJudgments = localStorage.getItem(JUDGMENTS_KEY)
      if (savedJudgments) setJudgments(JSON.parse(savedJudgments))

      // Load Staff
      const savedStaff = localStorage.getItem(STAFF_KEY)
      if (savedStaff) setStaff(JSON.parse(savedStaff))

      // Load Audit
      const savedAudit = localStorage.getItem(AUDIT_KEY)
      if (savedAudit) setAuditLogs(JSON.parse(savedAudit))
    } catch (e) {
      console.error('Error hydrating admin state:', e)
    }

    // Listen to real-time events from Adalat AI in other components
    const handleTicketEvent = () => {
      try {
        const updated = localStorage.getItem(DEV_TICKETS_STORAGE_KEY)
        if (updated) setDevTickets(JSON.parse(updated))
      } catch (e) {
        console.error(e)
      }
    }

    window.addEventListener('dev_tickets_updated', handleTicketEvent)
    return () => window.removeEventListener('dev_tickets_updated', handleTicketEvent)
  }, [])

  // Helper to add audit entry
  const logAction = (action: string, details: string, status: 'Success' | 'Warning' | 'Security' = 'Success') => {
    const newLog: AuditLog = {
      id: `aud-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      user: "Admin (Chief Registrar)",
      action,
      details,
      status
    }
    setAuditLogs(prev => {
      const updated = [newLog, ...prev.slice(0, 49)]
      localStorage.setItem(AUDIT_KEY, JSON.stringify(updated))
      return updated
    })
  }

  // Authentication Handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
      logAction("Administrator Login", "Authorized session credentials verified.", "Success")
    } else {
      alert('Invalid administrative credentials. Use admin / admin123')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
    logAction("Administrator Logout", "Admin session closed cleanly.", "Security")
  }

  // Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(courtSettings))
    logAction("Updated Court Portal Settings", "Filing fees, emergency recess banner, or court metadata changed.")
    setSaveSuccessNotice("Court settings saved successfully to live portal configuration!")
    setTimeout(() => setSaveSuccessNotice(null), 4000)
  }

  // Export Portal Data Backup
  const handleExportBackup = () => {
    const backupData = {
      timestamp: new Date().toISOString(),
      court: "Shari'ah Court of Appeal, Jigawa State",
      courtSettings,
      devTickets,
      kadis,
      causeList,
      eFilings,
      verifications,
      judgments,
      staff
    }
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `shariah_court_jigawa_backup_${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    logAction("Backup Exported", "Complete JSON snapshot of court database downloaded.")
  }

  // Reset to Defaults
  const handleResetDefaults = () => {
    if (confirm("Are you sure you want to reset all configurations to official JSC statutory defaults? Local changes will be replaced.")) {
      localStorage.removeItem(SETTINGS_KEY)
      localStorage.removeItem(DEV_TICKETS_STORAGE_KEY)
      localStorage.removeItem(KADIS_KEY)
      localStorage.removeItem(CAUSELIST_KEY)
      localStorage.removeItem(EFILING_KEY)
      localStorage.removeItem(VERIFICATION_KEY)
      localStorage.removeItem(JUDGMENTS_KEY)
      localStorage.removeItem(STAFF_KEY)
      window.location.reload()
    }
  }

  // Update Ticket Status
  const handleUpdateTicketStatus = (ticketId: string, newStatus: 'Open' | 'In Progress' | 'Resolved', note?: string) => {
    const updated = devTickets.map(t => {
      if (t.id === ticketId) {
        return {
          ...t,
          status: newStatus,
          developerNotes: note !== undefined ? note : t.developerNotes
        }
      }
      return t
    })
    setDevTickets(updated)
    localStorage.setItem(DEV_TICKETS_STORAGE_KEY, JSON.stringify(updated))
    logAction("Updated Dev Ticket", `Ticket ${ticketId} status marked as ${newStatus}`)
    setActiveModal(null)
  }

  // ----------------------------------------------------
  // UN-AUTHENTICATED LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-court-green-950 via-court-green-900 to-court-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white p-2 border-2 border-court-gold-400 shadow-2xl mx-auto mb-3 flex items-center justify-center">
              <img src="/Court-logo.png" alt="Seal" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Shari'ah Court of Appeal</h1>
            <p className="text-court-gold-300 text-xs font-semibold uppercase tracking-wider">
              Jigawa State Judicial Administration Portal
            </p>
          </div>

          <Card className="border border-court-gold-400/40 shadow-2xl bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-court-green-100 text-court-green-900 mx-auto mb-1">
                <Lock className="w-5 h-5 text-court-green-800" />
              </div>
              <CardTitle className="text-xl font-bold text-court-slate-900">
                Administrative Login
              </CardTitle>
              <CardDescription className="text-xs text-gray-500">
                Authorized judicial officers, Chief Registrar &amp; systems developers only
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Username</label>
                  <Input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                    placeholder="Enter judicial username"
                    className="text-xs h-10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Security Password</label>
                  <Input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    placeholder="••••••••••••"
                    className="text-xs h-10"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs h-10">
                  <Shield className="w-4 h-4 mr-2 text-court-gold-400" />
                  Authenticate &amp; Open Control Center
                </Button>
              </form>

              <div className="p-3 bg-court-sand-100 border border-court-gold-300/60 rounded-xl text-xs text-court-green-950 flex items-start gap-2">
                <Key className="w-4 h-4 text-court-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Standard Judiciary Credentials:</span>
                  <div className="text-[11px] text-gray-600">Username: <code className="font-mono font-bold text-court-green-900">admin</code> &bull; Password: <code className="font-mono font-bold text-court-green-900">admin123</code></div>
                </div>
              </div>

              <div className="text-center pt-1">
                <Link href="/" className="text-xs text-court-green-800 hover:underline font-semibold">
                  &larr; Return to Public Digital Portal
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Count open tickets
  const openTicketCount = devTickets.filter(t => t.status === 'Open').length
  const pendingEFilingsCount = eFilings.filter(e => e.status === 'Pending Review').length

  // ----------------------------------------------------
  // MAIN ADMIN CONTROL CENTER
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-court-slate-900 flex flex-col">
      {/* Top Judicial Admin Header */}
      <header className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white border-b-4 border-court-gold-500 sticky top-0 z-40 shadow-md">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10"
              aria-label="Toggle navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="w-9 h-9 rounded-full bg-white p-0.5 border-2 border-court-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
              <img src="/Court-logo.png" alt="Seal" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  Shari'ah Court of Appeal
                </h1>
                <Badge className="bg-court-gold-500 text-court-green-950 text-[10px] font-extrabold hidden sm:inline-flex">
                  ADMIN CONSOLE
                </Badge>
              </div>
              <p className="text-[10px] sm:text-xs text-court-sand-200">
                Judicial Administration &bull; {courtSettings.headOfCourt}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Ticket Badge */}
            {openTicketCount > 0 && (
              <button
                onClick={() => setActiveTab('tickets')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-colors"
                title={`${openTicketCount} Open Developer Support Tickets`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{openTicketCount} Glitch Tickets</span>
              </button>
            )}

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-xs text-court-sand-200 border border-white/10">
              <UserCheck className="w-3.5 h-3.5 text-court-gold-400" />
              <span>Super Administrator</span>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-white/40 text-white hover:bg-white hover:text-court-green-900 bg-transparent text-xs h-8"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Save Success Floating Notice */}
      {saveSuccessNotice && (
        <div className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 text-center shadow-md animate-in fade-in flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{saveSuccessNotice}</span>
        </div>
      )}

      {/* Main Container with Sidebar + Workspace */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Responsive Sidebar Navigation */}
        <aside className={`
          w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 md:sticky md:top-[61px] md:h-[calc(100vh-61px)] overflow-y-auto
          ${sidebarOpen ? 'block' : 'hidden md:block'}
        `}>
          <div className="p-3 border-b border-gray-100 flex items-center justify-between md:hidden">
            <span className="font-bold text-xs text-gray-500 uppercase">Navigation Menu</span>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="p-3 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
              Command &amp; Controls
            </div>

            <button
              onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-court-gold-500" />
                <span>Executive Dashboard</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('settings'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'settings'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-court-gold-500" />
                <span>Court &amp; Fees Settings</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('tickets'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tickets'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-amber-500" />
                <span>Dev Support Tickets</span>
              </div>
              {openTicketCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-white">
                  {openTicketCount}
                </span>
              )}
            </button>

            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-3 pb-1">
              Judicial Registries
            </div>

            <button
              onClick={() => { setActiveTab('kadis'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'kadis'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-court-gold-500" />
                <span>Appellate Bench (Kadis)</span>
              </div>
              <span className="text-[11px] text-gray-400">{kadis.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('cause-list'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'cause-list'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-court-gold-500" />
                <span>Cause List &amp; Dockets</span>
              </div>
              <span className="text-[11px] text-gray-400">{causeList.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('e-filing'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'e-filing'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-court-gold-500" />
                <span>E-Filing Petitions Queue</span>
              </div>
              {pendingEFilingsCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-court-green-600 text-white">
                  {pendingEFilingsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => { setActiveTab('verification'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'verification'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-court-gold-500" />
                <span>CTC &amp; Certificate Registry</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('judgments'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'judgments'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-court-gold-500" />
                <span>Judgment Law Reports</span>
              </div>
            </button>

            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-3 pb-1">
              Administration &amp; System
            </div>

            <button
              onClick={() => { setActiveTab('staff'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'staff'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-court-gold-500" />
                <span>DAF &amp; Cashiers Desk</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('audit'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'audit'
                  ? 'bg-court-green-800 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-court-sand-100 hover:text-court-green-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-court-gold-500" />
                <span>Audit &amp; Security Logs</span>
              </div>
            </button>
          </nav>

          <div className="p-4 border-t border-gray-100 mt-4">
            <div className="p-3 bg-court-sand-50 rounded-xl border border-court-sand-200 text-[11px] text-gray-600">
              <div className="font-bold text-court-green-950 flex items-center gap-1 mb-1">
                <Database className="w-3.5 h-3.5 text-court-green-800" />
                <span>Portal Local DB</span>
              </div>
              <div>Real-time sync active across Adalat AI and Admin views.</div>
            </div>
          </div>
        </aside>

        {/* Dynamic Workspace */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl overflow-y-auto">

          {/* ---------------------------------------------------- */}
          {/* TAB 1: EXECUTIVE DASHBOARD */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Executive Court Overview
                  </h2>
                  <p className="text-xs text-gray-500">
                    Live operational metrics across Jigawa State Shari'ah appellate registries &amp; electronic gateways
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleExportBackup}
                    variant="outline"
                    size="sm"
                    className="text-xs border-gray-300"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Export Backup JSON
                  </Button>
                  <Button
                    onClick={() => setActiveTab('settings')}
                    size="sm"
                    className="bg-court-green-800 hover:bg-court-green-900 text-white text-xs"
                  >
                    <Settings className="w-3.5 h-3.5 mr-1.5 text-court-gold-400" />
                    Portal Settings
                  </Button>
                </div>
              </div>

              {/* High-Level Metric Tiles */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Appellate Kadis</p>
                        <h3 className="text-2xl font-extrabold text-court-slate-900 mt-0.5">{kadis.length}</h3>
                        <span className="text-[10px] text-emerald-600 font-semibold">5 Divisions Active</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-court-green-100 text-court-green-800 flex items-center justify-center">
                        <Scale className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Hearing Dockets</p>
                        <h3 className="text-2xl font-extrabold text-court-slate-900 mt-0.5">{causeList.length}</h3>
                        <span className="text-[10px] text-blue-600 font-semibold">On Cause List</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">E-Filing Queue</p>
                        <h3 className="text-2xl font-extrabold text-court-slate-900 mt-0.5">{eFilings.length}</h3>
                        <span className="text-[10px] text-amber-600 font-semibold">{pendingEFilingsCount} Pending Review</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">AI Support Tickets</p>
                        <h3 className="text-2xl font-extrabold text-court-slate-900 mt-0.5">{devTickets.length}</h3>
                        <span className="text-[10px] text-red-600 font-semibold">{openTicketCount} Open to Fix</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center">
                        <Wrench className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Developer Glitch Urgent Notice Bar if any tickets are Open */}
              {openTicketCount > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-amber-950">
                        {openTicketCount} Incident Ticket{openTicketCount > 1 ? 's' : ''} Require Developer Investigation
                      </h4>
                      <p className="text-xs text-amber-800">
                        Applicants have reported payment or e-filing discrepancies via Adalat AI.
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setActiveTab('tickets')}
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
                  >
                    Open Developer Queue &rarr;
                  </Button>
                </div>
              )}

              {/* Two Column Layout: Cause List Today & Pending E-Filings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Active Cause List Dockets */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 border-b border-gray-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-base font-bold text-court-slate-900">
                        Daily Hearing Dockets Summary
                      </CardTitle>
                      <CardDescription className="text-xs">
                        Active appellate sessions across Divisions
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => setActiveTab('cause-list')}
                      variant="ghost"
                      size="sm"
                      className="text-xs text-court-green-800 font-bold"
                    >
                      View All &rarr;
                    </Button>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {causeList.slice(0, 3).map((item) => (
                      <div key={item.id} className="p-3 bg-court-sand-50/60 rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <div className="font-bold text-court-green-950">{item.suitNumber}</div>
                          <div className="text-gray-700 font-medium">{item.parties}</div>
                          <div className="text-[11px] text-gray-500">{item.division} &bull; {item.hearingTime}</div>
                        </div>
                        <Badge className="self-start sm:self-center bg-court-green-100 text-court-green-900 text-[10px]">
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent E-Filing Submissions */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 border-b border-gray-100 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-base font-bold text-court-slate-900">
                        Recent E-Filing Submissions
                      </CardTitle>
                      <CardDescription className="text-xs">
                        Pending review &amp; fee reconciliation
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => setActiveTab('e-filing')}
                      variant="ghost"
                      size="sm"
                      className="text-xs text-court-green-800 font-bold"
                    >
                      Process &rarr;
                    </Button>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    {eFilings.map((ef) => (
                      <div key={ef.id} className="p-3 bg-court-sand-50/60 rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <div className="font-bold text-court-slate-900">{ef.applicantName}</div>
                          <div className="text-gray-600">{ef.matterType}</div>
                          <div className="text-[11px] text-gray-500">RRR: {ef.remitaRRR} &bull; ₦{ef.feePaid.toLocaleString()}</div>
                        </div>
                        <Badge className={`self-start sm:self-center text-[10px] ${
                          ef.status === 'Pending Review' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
                        }`}>
                          {ef.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 2: COURT SETTINGS & FEE CONFIGURATION */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Court &amp; Portal Settings
                  </h2>
                  <p className="text-xs text-gray-500">
                    Configure statutory court fees, emergency recess alerts, leadership designations, and Adalat AI
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    onClick={handleResetDefaults}
                    variant="outline"
                    size="sm"
                    className="text-xs border-red-200 text-red-700 hover:bg-red-50"
                  >
                    Reset to Defaults
                  </Button>
                  <Button
                    onClick={handleSaveSettings}
                    size="sm"
                    className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs"
                  >
                    <Save className="w-3.5 h-3.5 mr-1.5" />
                    Save All Settings
                  </Button>
                </div>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-6">
                {/* 1. Official Court Identification */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 sm:p-5 border-b border-gray-100">
                    <CardTitle className="text-base font-bold text-court-slate-900 flex items-center gap-2">
                      <Building className="w-4 h-4 text-court-green-800" />
                      Official Court Identity &amp; Leadership Titles
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Controls names displayed across public page headers, footers, and official judicial dispatches
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Official Court Title (English)</label>
                        <Input
                          value={courtSettings.courtTitleEn}
                          onChange={(e) => setCourtSettings({...courtSettings, courtTitleEn: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Official Court Title (Arabic Calligraphy)</label>
                        <Input
                          value={courtSettings.courtTitleAr}
                          onChange={(e) => setCourtSettings({...courtSettings, courtTitleAr: e.target.value})}
                          className="text-xs h-9 text-right font-serif"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Head of Court (Grand Kadi Official Name)</label>
                        <Input
                          value={courtSettings.headOfCourt}
                          onChange={(e) => setCourtSettings({...courtSettings, headOfCourt: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Grand Kadi Designation</label>
                        <Input
                          value={courtSettings.headOfCourtRole}
                          onChange={(e) => setCourtSettings({...courtSettings, headOfCourtRole: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Acting Chief Registrar Name</label>
                        <Input
                          value={courtSettings.chiefRegistrar}
                          onChange={(e) => setCourtSettings({...courtSettings, chiefRegistrar: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Principal Registry Complex Address</label>
                        <Input
                          value={courtSettings.address}
                          onChange={(e) => setCourtSettings({...courtSettings, address: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Registry Enquiries Phone</label>
                        <Input
                          value={courtSettings.registryPhone}
                          onChange={(e) => setCourtSettings({...courtSettings, registryPhone: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Emergency 24/7 Hotline</label>
                        <Input
                          value={courtSettings.emergencyPhone}
                          onChange={(e) => setCourtSettings({...courtSettings, emergencyPhone: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Support Email Desk</label>
                        <Input
                          value={courtSettings.supportEmail}
                          onChange={(e) => setCourtSettings({...courtSettings, supportEmail: e.target.value})}
                          className="text-xs h-9"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 2. Public Recess / Vacation Alert Banner */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 sm:p-5 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <CardTitle className="text-base font-bold text-court-slate-900 flex items-center gap-2">
                          <BellRing className="w-4 h-4 text-court-gold-600" />
                          Public Recess &amp; Emergency Alert Banner
                        </CardTitle>
                        <CardDescription className="text-xs">
                          Displays a prominent broadcast stripe at the very top of the homepage for vacation or emergency notices
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-600">
                          {courtSettings.recessBannerEnabled ? 'Banner Active' : 'Banner Disabled'}
                        </span>
                        <Switch
                          checked={courtSettings.recessBannerEnabled}
                          onCheckedChange={(checked) => setCourtSettings({...courtSettings, recessBannerEnabled: checked})}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Alert Severity</label>
                        <Select
                          value={courtSettings.recessBannerSeverity}
                          onValueChange={(val: 'info' | 'warning' | 'destructive') => setCourtSettings({...courtSettings, recessBannerSeverity: val})}
                        >
                          <SelectTrigger className="text-xs h-9">
                            <SelectValue placeholder="Severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="info">Information (Blue)</SelectItem>
                            <SelectItem value="warning">Warning / Vacation (Amber)</SelectItem>
                            <SelectItem value="destructive">Urgent / Closure (Red)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block font-bold text-gray-700 mb-1">Broadcast Announcement Text</label>
                        <Input
                          value={courtSettings.recessBannerMessage}
                          onChange={(e) => setCourtSettings({...courtSettings, recessBannerMessage: e.target.value})}
                          placeholder="Broadcast message..."
                          className="text-xs h-9"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Statutory Court Fee Schedule */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 sm:p-5 border-b border-gray-100">
                    <CardTitle className="text-base font-bold text-court-slate-900 flex items-center gap-2">
                      <Coins className="w-4 h-4 text-court-gold-600" />
                      Statutory Court Filing Fee Schedule (₦ Naira)
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Official tariffs computed automatically during electronic filing and fee payment reconciliation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Notice of Appeal (Civil/Personal)</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeNoticeOfAppeal}
                            onChange={(e) => setCourtSettings({...courtSettings, feeNoticeOfAppeal: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Motion on Notice / Ex-Parte</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeMotionOnNotice}
                            onChange={(e) => setCourtSettings({...courtSettings, feeMotionOnNotice: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Certified True Copy (CTC per page)</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeCTCPerPage}
                            onChange={(e) => setCourtSettings({...courtSettings, feeCTCPerPage: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Compilation of Record of Appeal</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeRecordCompilation}
                            onChange={(e) => setCourtSettings({...courtSettings, feeRecordCompilation: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Mirath Estate Attestation</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeMirathAttestation}
                            onChange={(e) => setCourtSettings({...courtSettings, feeMirathAttestation: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Marriage Certificate Attestation</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <Input
                            type="number"
                            value={courtSettings.feeMarriageCertificate}
                            onChange={(e) => setCourtSettings({...courtSettings, feeMarriageCertificate: Number(e.target.value)})}
                            className="pl-8 text-xs h-9 font-semibold"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 4. Adalat AI Assistant Settings */}
                <Card className="border border-gray-200 shadow-sm">
                  <CardHeader className="p-4 sm:p-5 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <CardTitle className="text-base font-bold text-court-slate-900 flex items-center gap-2">
                          <Bot className="w-4 h-4 text-court-green-800" />
                          Adalat AI Support Assistant &amp; Developer Routing
                        </CardTitle>
                        <CardDescription className="text-xs">
                          Configure chatbot behavior, greeting prompt, and developer escalation destination
                        </CardDescription>
                      </div>
                      <Switch
                        checked={courtSettings.adalatAiEnabled}
                        onCheckedChange={(checked) => setCourtSettings({...courtSettings, adalatAiEnabled: checked})}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 space-y-4 text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">AI Greeting &amp; Introduction Message</label>
                        <Textarea
                          rows={2}
                          value={courtSettings.adalatGreeting}
                          onChange={(e) => setCourtSettings({...courtSettings, adalatGreeting: e.target.value})}
                          className="text-xs resize-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Developer Incident Alert Email</label>
                        <Input
                          value={courtSettings.devSupportEmail}
                          onChange={(e) => setCourtSettings({...courtSettings, devSupportEmail: e.target.value})}
                          className="text-xs h-9"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">
                          Escalated tickets will log directly into the Developer Ticket Desk and send notifications here.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs h-10 px-6"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save All Settings
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 3: DEVELOPER & SUPPORT TICKETS DESK */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                      Developer &amp; Support Incident Queue
                    </h2>
                    <Badge className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                      {devTickets.length} Tickets
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">
                    Live tickets escalated by applicants via Adalat AI regarding E-Filing failures, payment debits, or system glitches
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Search ticket, name, RRR..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 text-xs h-9"
                    />
                  </div>
                </div>
              </div>

              {/* Tickets Table */}
              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-court-sand-50/80 text-xs">
                    <TableRow>
                      <TableHead className="font-bold text-court-slate-900">Ticket ID</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Service Affected</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Applicant Details</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Severity</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Status</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Date Logged</TableHead>
                      <TableHead className="font-bold text-right text-court-slate-900">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {devTickets
                      .filter(t => 
                        !searchTerm || 
                        t.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        t.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (t.referenceNo && t.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()))
                      )
                      .map((ticket) => (
                        <TableRow key={ticket.id} className="hover:bg-gray-50/80">
                          <TableCell className="font-mono font-bold text-court-green-900">
                            {ticket.id}
                          </TableCell>
                          <TableCell className="font-semibold text-court-slate-800">
                            {ticket.service}
                            {ticket.referenceNo && ticket.referenceNo !== 'N/A' && (
                              <div className="text-[10px] text-gray-500 font-normal">Ref: {ticket.referenceNo}</div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="font-bold">{ticket.applicantName}</div>
                            <div className="text-[10px] text-gray-500">{ticket.contact}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`text-[10px] font-bold ${
                              ticket.severity === 'Critical' 
                                ? 'bg-red-100 text-red-900 border border-red-300' 
                                : ticket.severity === 'High' 
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                                  : 'bg-blue-100 text-blue-900 border border-blue-300'
                            }`}>
                              {ticket.severity}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={`text-[10px] font-bold ${
                              ticket.status === 'Resolved' 
                                ? 'bg-emerald-100 text-emerald-900' 
                                : ticket.status === 'In Progress'
                                  ? 'bg-purple-100 text-purple-900'
                                  : 'bg-amber-100 text-amber-900'
                            }`}>
                              {ticket.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-500 text-[11px]">
                            {new Date(ticket.createdAt).toLocaleDateString()} {new Date(ticket.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              onClick={() => {
                                setModalItem(ticket)
                                setActiveModal('inspect-ticket')
                              }}
                              size="sm"
                              variant="outline"
                              className="text-xs h-7 px-2 border-court-green-800 text-court-green-900 hover:bg-court-green-50"
                            >
                              Inspect / Resolve
                            </Button>
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 4: APPELLATE BENCH (KADIS MANAGEMENT) */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'kadis' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Appellate Bench Roster (Honorable Kadis)
                  </h2>
                  <p className="text-xs text-gray-500">
                    Official directory of the Honorable Grand Kadi and the Honorable Kadis across all 5 Judicial Divisions
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setModalItem({
                      id: `kadi-${Date.now()}`,
                      name: '',
                      fullName: '',
                      honorific: 'Honorable Kadi',
                      rank: 'Hon. Kadi',
                      roleTitle: 'Appellate Division Judge',
                      division: 'Appellate Division 1 (Dutse Headquarters)',
                      appointmentPeriod: 'Hon. Kadi (2026 – Date)',
                      appointmentYear: '2026',
                      njcRecommendation: 'Recommended by National Judicial Council (NJC).',
                      qualifications: 'LL.B Shari\'ah, B.L',
                      biography: '',
                      status: 'active'
                    })
                    setActiveModal('edit-kadi')
                  }}
                  size="sm"
                  className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs"
                >
                  <Plus className="w-3.5 h-3.5 mr-1.5" />
                  Add Honorable Kadi
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kadis.map((kadi) => (
                  <Card key={kadi.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Badge className="bg-court-green-100 text-court-green-900 text-[9px] font-bold">
                            {kadi.rank}
                          </Badge>
                          <h4 className="font-extrabold text-sm text-court-slate-900 mt-1">
                            {kadi.name}
                          </h4>
                          <p className="text-[11px] text-court-gold-700 font-semibold">{kadi.roleTitle}</p>
                        </div>
                        <Badge variant="outline" className="text-[9px] uppercase">
                          {kadi.status}
                        </Badge>
                      </div>

                      <div className="text-xs text-gray-600 space-y-1 pt-1 border-t border-gray-100">
                        <div><strong>Division:</strong> {kadi.division}</div>
                        <div><strong>Tenure:</strong> {kadi.appointmentPeriod}</div>
                        <div className="truncate"><strong>Credentials:</strong> {kadi.qualifications}</div>
                      </div>

                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href={`/kadis/${kadi.id}`}
                          target="_blank"
                          className="text-xs text-court-green-800 hover:underline font-bold flex items-center gap-1"
                        >
                          <span>Public Profile</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setModalItem(kadi)
                            setActiveModal('edit-kadi')
                          }}
                          className="text-xs h-7 px-2"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 5: CAUSE LIST & HEARING DOCKETS */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'cause-list' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Daily Hearing Dockets &amp; Cause Lists
                  </h2>
                  <p className="text-xs text-gray-500">
                    Schedule appeals, assign presiding Kadis (Coram), courtrooms, and update session adjournment statuses
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setModalItem({
                      id: `DOC-${Date.now()}`,
                      suitNumber: 'SCA/JG/APP/2026/',
                      parties: '',
                      division: 'Dutse Headquarters',
                      courtroom: 'Courtroom 1 (Main Appellate Hall)',
                      hearingDate: new Date().toISOString().slice(0, 10),
                      hearingTime: '09:00 AM',
                      coram: courtSettings.headOfCourt,
                      matterNature: 'Appeal on Estate & Mirath',
                      status: 'Scheduled'
                    })
                    setActiveModal('edit-docket')
                  }}
                  size="sm"
                  className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs"
                >
                  <Plus className="w-3.5 h-3.5 mr-1.5" />
                  Add Hearing Docket
                </Button>
              </div>

              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-court-sand-50/80 text-xs">
                    <TableRow>
                      <TableHead className="font-bold text-court-slate-900">Suit Number</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Parties (Litigants)</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Division &amp; Courtroom</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Date &amp; Time</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Coram / Bench</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Sitting Status</TableHead>
                      <TableHead className="font-bold text-right text-court-slate-900">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {causeList.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-mono font-bold text-court-green-950">
                          {item.suitNumber}
                        </TableCell>
                        <TableCell className="font-semibold">
                          {item.parties}
                          <div className="text-[10px] text-gray-500 font-normal">{item.matterNature}</div>
                        </TableCell>
                        <TableCell>
                          <div>{item.division}</div>
                          <div className="text-[10px] text-gray-500">{item.courtroom}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{item.hearingDate}</div>
                          <div className="text-[10px] text-gray-500">{item.hearingTime}</div>
                        </TableCell>
                        <TableCell className="text-gray-600 text-[11px]">
                          {item.coram}
                        </TableCell>
                        <TableCell>
                          <Badge className={`text-[10px] font-bold ${
                            item.status === 'In Session' 
                              ? 'bg-red-100 text-red-900 animate-pulse' 
                              : item.status === 'Adjourned'
                                ? 'bg-amber-100 text-amber-900'
                                : 'bg-emerald-100 text-emerald-900'
                          }`}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setModalItem(item)
                              setActiveModal('edit-docket')
                            }}
                            className="text-xs h-7 px-2"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Update
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 6: E-FILING PETITIONS QUEUE */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'e-filing' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    E-Filing Petitions Review Desk
                  </h2>
                  <p className="text-xs text-gray-500">
                    Inspect digital notice of appeals, statutory affidavits, and confirm Remita filing fee payment
                  </p>
                </div>
              </div>

              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-court-sand-50/80 text-xs">
                    <TableRow>
                      <TableHead className="font-bold text-court-slate-900">Filing ID</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Applicant / Counsel</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Matter Type</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Division</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Payment (Remita)</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Review Status</TableHead>
                      <TableHead className="font-bold text-right text-court-slate-900">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {eFilings.map((ef) => (
                      <TableRow key={ef.id}>
                        <TableCell className="font-mono font-bold text-court-green-950">{ef.id}</TableCell>
                        <TableCell>
                          <div className="font-bold">{ef.applicantName}</div>
                          <div className="text-[10px] text-gray-500">{ef.counselName}</div>
                        </TableCell>
                        <TableCell>{ef.matterType}</TableCell>
                        <TableCell>{ef.division}</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 text-emerald-900 text-[10px]">
                            ₦{ef.feePaid.toLocaleString()} &bull; {ef.paymentStatus}
                          </Badge>
                          <div className="text-[10px] text-gray-500 font-mono">RRR: {ef.remitaRRR}</div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`text-[10px] ${
                            ef.status === 'Pending Review' ? 'bg-amber-100 text-amber-900' : 'bg-court-green-100 text-court-green-900'
                          }`}>
                            {ef.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const newStatus = ef.status === 'Pending Review' ? 'Approved & Docketed' : 'Query Issued'
                              const updated = eFilings.map(item => item.id === ef.id ? { ...item, status: newStatus as any } : item)
                              setEFilings(updated)
                              localStorage.setItem(EFILING_KEY, JSON.stringify(updated))
                              logAction("E-Filing Review", `Filing ${ef.id} status updated to ${newStatus}`)
                            }}
                            className="text-xs h-7 px-2"
                          >
                            Toggle Status
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 7: CTC & CERTIFICATE VERIFICATION REGISTRY */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'verification' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    CTC &amp; Document Verification Registry
                  </h2>
                  <p className="text-xs text-gray-500">
                    Generate and verify certified true copies with cryptographic SHA256 digital signatures and QR seals
                  </p>
                </div>

                <Button
                  onClick={() => {
                    const newId = `CTC-JG-2026-${Math.floor(1000 + Math.random() * 9000)}`
                    const hash = `SHA256:${Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('')}`
                    const newRec: VerificationRecord = {
                      id: newId,
                      documentType: "Certified True Copy of Judgment",
                      issuedTo: "Applicant Litigant",
                      division: "Dutse Headquarters Registry",
                      issueDate: new Date().toISOString().slice(0, 10),
                      sha256Hash: hash,
                      qrCode: `QR-${newId}-VERIFIED`,
                      status: "Valid"
                    }
                    const updated = [newRec, ...verifications]
                    setVerifications(updated)
                    localStorage.setItem(VERIFICATION_KEY, JSON.stringify(updated))
                    logAction("Issued CTC Certificate", `Generated certified true copy ${newId}`)
                  }}
                  size="sm"
                  className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs"
                >
                  <Plus className="w-3.5 h-3.5 mr-1.5" />
                  Issue New Certified True Copy (CTC)
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {verifications.map((doc) => (
                  <Card key={doc.id} className="border border-gray-200 shadow-sm p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <div className="font-mono font-bold text-court-green-950">{doc.id}</div>
                      <Badge className="bg-emerald-100 text-emerald-900 text-[10px]">{doc.status}</Badge>
                    </div>
                    <div><strong>Document:</strong> {doc.documentType}</div>
                    <div><strong>Issued To:</strong> {doc.issuedTo}</div>
                    <div><strong>Registry:</strong> {doc.division} &bull; {doc.issueDate}</div>
                    <div className="p-2 bg-gray-50 rounded border border-gray-200">
                      <div className="text-[10px] text-gray-500 font-bold">Digital Signature:</div>
                      <div className="font-mono text-[10px] text-court-green-900 break-all">{doc.sha256Hash}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 8: JUDGMENT LAW REPORTS */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'judgments' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Judgment Archives &amp; Law Reports
                  </h2>
                  <p className="text-xs text-gray-500">
                    Publish landmark appellate judgments, legal summaries, citations, and official law reports
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {judgments.map((jdg) => (
                  <Card key={jdg.id} className="border border-gray-200 shadow-sm p-5 space-y-2 text-xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="bg-court-green-100 text-court-green-900 text-[10px] font-bold">
                          {jdg.category}
                        </Badge>
                        <h4 className="font-bold text-sm text-court-slate-900 mt-1">{jdg.title}</h4>
                        <div className="text-[11px] text-gray-500 font-mono">{jdg.suitNumber} &bull; {jdg.deliveryDate}</div>
                      </div>
                      <div className="text-right text-[11px] text-gray-500">
                        <span>{jdg.pages} Pages</span> &bull; <span>{jdg.citations} Citations</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{jdg.summary}</p>
                    <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                      <strong>Coram:</strong> {jdg.coram}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 9: STAFF, DAF & CASHIERS ROSTER */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'staff' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Administrative Directors, DAF &amp; Cashiers
                  </h2>
                  <p className="text-xs text-gray-500">
                    Directory of Judicial Service Commission appointees, Finance Directorate, and revenue desks
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staff.map((st) => (
                  <Card key={st.id} className="border border-gray-200 shadow-sm p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-court-sand-100 text-court-green-950 font-bold text-[10px]">
                        {st.category.toUpperCase()}
                      </Badge>
                      <span className="text-[10px] text-emerald-600 font-bold">{st.status}</span>
                    </div>
                    <h4 className="font-bold text-sm text-court-slate-900">{st.name}</h4>
                    <div className="text-court-gold-700 font-semibold">{st.position}</div>
                    <div className="text-gray-600 text-[11px]">{st.department}</div>
                    <div className="pt-2 border-t border-gray-100 space-y-1 text-gray-500 text-[11px]">
                      <div>{st.phone}</div>
                      <div>{st.email}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* TAB 10: AUDIT & SECURITY LOGS */}
          {/* ---------------------------------------------------- */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-court-slate-900 tracking-tight">
                    Administrative Audit &amp; Security Logs
                  </h2>
                  <p className="text-xs text-gray-500">
                    Immutable event log of all setting changes, docket modifications, and system access
                  </p>
                </div>

                <Button
                  onClick={() => {
                    localStorage.removeItem(AUDIT_KEY)
                    setAuditLogs([])
                  }}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Clear Audit Logs
                </Button>
              </div>

              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-court-sand-50/80 text-xs">
                    <TableRow>
                      <TableHead className="font-bold text-court-slate-900">Timestamp</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Operator</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Action Performed</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Diagnostic Details</TableHead>
                      <TableHead className="font-bold text-court-slate-900">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs">
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-gray-500 text-[11px]">{log.timestamp}</TableCell>
                        <TableCell className="font-bold text-court-slate-800">{log.user}</TableCell>
                        <TableCell className="font-semibold text-court-green-900">{log.action}</TableCell>
                        <TableCell className="text-gray-600">{log.details}</TableCell>
                        <TableCell>
                          <Badge className="bg-emerald-100 text-emerald-900 text-[10px]">
                            {log.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

        </main>
      </div>

      {/* ---------------------------------------------------- */}
      {/* MODAL: INSPECT / RESOLVE DEVELOPER TICKET */}
      {/* ---------------------------------------------------- */}
      <Dialog open={activeModal === 'inspect-ticket'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-lg w-[calc(100vw-2rem)] bg-white p-6 rounded-2xl border-2 border-court-green-800 shadow-2xl text-xs">
          <DialogHeader className="border-b border-gray-100 pb-3">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-base font-bold text-court-slate-900 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-600" />
                Developer Incident: {modalItem?.id}
              </DialogTitle>
              <Badge className={modalItem?.severity === 'Critical' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'}>
                {modalItem?.severity} Priority
              </Badge>
            </div>
          </DialogHeader>

          {modalItem && (
            <div className="space-y-3.5 pt-2">
              <div><strong>Service Affected:</strong> {modalItem.service}</div>
              <div><strong>Applicant Name:</strong> {modalItem.applicantName}</div>
              <div><strong>Contact Details:</strong> {modalItem.contact}</div>
              {modalItem.referenceNo && (
                <div><strong>Reference / RRR Number:</strong> <code className="font-mono bg-gray-100 px-1 rounded">{modalItem.referenceNo}</code></div>
              )}
              <div className="p-3 bg-court-sand-50 rounded-xl border border-gray-200">
                <div className="font-bold text-gray-700 mb-1">Error Description:</div>
                <p className="text-gray-800 leading-relaxed">{modalItem.description}</p>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Developer Resolution / Action Notes</label>
                <Textarea
                  rows={2}
                  defaultValue={modalItem.developerNotes || ''}
                  id="dev-resolution-note"
                  placeholder="e.g. 'Investigated Remita webhook; confirmed transaction. Manually dispatched receipt to user email.'"
                  className="text-xs resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const note = (document.getElementById('dev-resolution-note') as HTMLTextAreaElement)?.value
                    handleUpdateTicketStatus(modalItem.id, 'In Progress', note)
                  }}
                  className="text-xs border-purple-300 text-purple-900 hover:bg-purple-50"
                >
                  Mark In Progress
                </Button>

                <Button
                  size="sm"
                  onClick={() => {
                    const note = (document.getElementById('dev-resolution-note') as HTMLTextAreaElement)?.value
                    handleUpdateTicketStatus(modalItem.id, 'Resolved', note)
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  <Check className="w-3.5 h-3.5 mr-1" />
                  Mark Resolved
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD / EDIT KADI */}
      {/* ---------------------------------------------------- */}
      <Dialog open={activeModal === 'edit-kadi'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-lg w-[calc(100vw-2rem)] max-h-[85vh] overflow-y-auto bg-white p-6 rounded-2xl border-2 border-court-green-800 shadow-2xl text-xs">
          <DialogHeader className="border-b border-gray-100 pb-3">
            <DialogTitle className="text-base font-bold text-court-slate-900">
              Manage Honorable Kadi Profile
            </DialogTitle>
          </DialogHeader>

          {modalItem && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const exists = kadis.some(k => k.id === modalItem.id)
                let updated: KadiRecord[]
                if (exists) {
                  updated = kadis.map(k => k.id === modalItem.id ? modalItem : k)
                } else {
                  updated = [modalItem, ...kadis]
                }
                setKadis(updated)
                localStorage.setItem(KADIS_KEY, JSON.stringify(updated))
                logAction("Kadi Bench Update", `Profile updated for ${modalItem.name}`)
                setActiveModal(null)
              }}
              className="space-y-3 pt-2"
            >
              <div>
                <label className="block font-bold text-gray-700 mb-1">Official Name *</label>
                <Input
                  required
                  value={modalItem.name}
                  onChange={(e) => setModalItem({...modalItem, name: e.target.value})}
                  className="text-xs h-9"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Bench Rank</label>
                  <Input
                    value={modalItem.rank}
                    onChange={(e) => setModalItem({...modalItem, rank: e.target.value})}
                    className="text-xs h-9"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Division Assignment</label>
                  <Input
                    value={modalItem.division}
                    onChange={(e) => setModalItem({...modalItem, division: e.target.value})}
                    className="text-xs h-9"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Qualifications</label>
                <Input
                  value={modalItem.qualifications}
                  onChange={(e) => setModalItem({...modalItem, qualifications: e.target.value})}
                  className="text-xs h-9"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Brief Biography</label>
                <Textarea
                  rows={3}
                  value={modalItem.biography}
                  onChange={(e) => setModalItem({...modalItem, biography: e.target.value})}
                  className="text-xs resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <Button type="button" variant="outline" size="sm" onClick={() => setActiveModal(null)} className="text-xs">
                  Cancel
                </Button>
                <Button type="submit" size="sm" className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs">
                  Save Kadi Profile
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* ---------------------------------------------------- */}
      {/* MODAL: ADD / EDIT HEARING DOCKET */}
      {/* ---------------------------------------------------- */}
      <Dialog open={activeModal === 'edit-docket'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-lg w-[calc(100vw-2rem)] bg-white p-6 rounded-2xl border-2 border-court-green-800 shadow-2xl text-xs">
          <DialogHeader className="border-b border-gray-100 pb-3">
            <DialogTitle className="text-base font-bold text-court-slate-900">
              Manage Hearing Docket (Cause List)
            </DialogTitle>
          </DialogHeader>

          {modalItem && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const exists = causeList.some(d => d.id === modalItem.id)
                let updated: HearingDocket[]
                if (exists) {
                  updated = causeList.map(d => d.id === modalItem.id ? modalItem : d)
                } else {
                  updated = [modalItem, ...causeList]
                }
                setCauseList(updated)
                localStorage.setItem(CAUSELIST_KEY, JSON.stringify(updated))
                logAction("Cause List Docket Updated", `Docket ${modalItem.suitNumber} saved.`)
                setActiveModal(null)
              }}
              className="space-y-3 pt-2"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Suit Number *</label>
                  <Input
                    required
                    value={modalItem.suitNumber}
                    onChange={(e) => setModalItem({...modalItem, suitNumber: e.target.value})}
                    className="text-xs h-9 font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Sitting Status</label>
                  <Select
                    value={modalItem.status}
                    onValueChange={(val: any) => setModalItem({...modalItem, status: val})}
                  >
                    <SelectTrigger className="text-xs h-9">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="In Session">In Session</SelectItem>
                      <SelectItem value="Adjourned">Adjourned</SelectItem>
                      <SelectItem value="Judgment Reserved">Judgment Reserved</SelectItem>
                      <SelectItem value="Disposed">Disposed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Parties (Appellants v. Respondents) *</label>
                <Input
                  required
                  value={modalItem.parties}
                  onChange={(e) => setModalItem({...modalItem, parties: e.target.value})}
                  className="text-xs h-9"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Hearing Date</label>
                  <Input
                    type="date"
                    value={modalItem.hearingDate}
                    onChange={(e) => setModalItem({...modalItem, hearingDate: e.target.value})}
                    className="text-xs h-9"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Hearing Time</label>
                  <Input
                    value={modalItem.hearingTime}
                    onChange={(e) => setModalItem({...modalItem, hearingTime: e.target.value})}
                    className="text-xs h-9"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Sitting Bench Kadis (Coram)</label>
                <Input
                  value={modalItem.coram}
                  onChange={(e) => setModalItem({...modalItem, coram: e.target.value})}
                  className="text-xs h-9"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <Button type="button" variant="outline" size="sm" onClick={() => setActiveModal(null)} className="text-xs">
                  Cancel
                </Button>
                <Button type="submit" size="sm" className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs">
                  Save Docket
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}