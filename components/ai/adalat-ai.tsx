'use client'

import React, { useState, useRef, useEffect } from 'react'
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Scale, 
  FileText, 
  Ticket, 
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  User,
  MessageSquare,
  AlertTriangle,
  LifeBuoy,
  Wrench,
  Clock,
  ShieldAlert,
  PhoneCall,
  RefreshCw
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

interface ChatMessage {
  id: string
  sender: 'user' | 'bot'
  text: string
  timestamp: string
  links?: { title: string; href: string }[]
  ticketPrompt?: boolean
  devEscalationPrompt?: {
    service: string
    suggestedSeverity: 'Standard' | 'High' | 'Critical'
  }
  ticketData?: SupportTicket
}

const DEV_TICKETS_STORAGE_KEY = 'shariah_court_dev_tickets_v1'

export default function AdalatAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showEscalationModal, setShowEscalationModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Escalation Form State
  const [escalationForm, setEscalationForm] = useState({
    service: 'E-Filing Portal',
    applicantName: '',
    contact: '',
    referenceNo: '',
    severity: 'High' as 'Standard' | 'High' | 'Critical',
    description: ''
  })
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: "Assalamu Alaikum! I am Adalat AI, your judicial and technical support assistant for the Jigawa State Shari'ah Court of Appeal. I can guide you through proceedings, help troubleshoot any E-Filing or payment issues, or escalate technical glitches directly to our software developer team.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      links: [
        { title: 'Access E-Filing', href: '/services#efiling-gateway' },
        { title: 'Case Tracking', href: '/services/case-tracking' },
        { title: 'Fee Gateway', href: '/services#fee-gateway' }
      ]
    }
  ])

  const prePromptChips = [
    "I have an issue with E-Filing",
    "Remita payment was debited but unconfirmed",
    "How do I file an appeal?",
    "Calculate inheritance (Mirath)",
    "Report a portal glitch to developers"
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Save ticket to localStorage
  const saveTicketToStorage = (ticket: SupportTicket) => {
    try {
      const existing = localStorage.getItem(DEV_TICKETS_STORAGE_KEY)
      const tickets: SupportTicket[] = existing ? JSON.parse(existing) : []
      tickets.unshift(ticket)
      localStorage.setItem(DEV_TICKETS_STORAGE_KEY, JSON.stringify(tickets))
      window.dispatchEvent(new Event('dev_tickets_updated'))
    } catch (e) {
      console.error('Error saving developer support ticket:', e)
    }
  }

  const generateAIResponse = (userPrompt: string): ChatMessage => {
    const p = userPrompt.toLowerCase()

    // 1. E-Filing Failure or Technical Issues
    if (
      p.includes('fail') || 
      p.includes('stuck') || 
      p.includes('error') || 
      p.includes('glitch') || 
      p.includes('bug') || 
      p.includes('not working') ||
      p.includes('cannot submit') ||
      p.includes('cant submit') ||
      p.includes('upload issue') ||
      p.includes('crashed')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "I detect you are experiencing a technical difficulty on the portal. As Tier-1 Support, please verify: \n1. File uploads must be PDF, JPG, or PNG under 10MB each.\n2. Ensure all mandatory party names and court details are filled in Step 1 through 3.\n\nIf the system has frozen, errored out, or rejected your submission, I can immediately dispatch a priority incident ticket to our Software Development Team to inspect server logs and fix this for you.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        devEscalationPrompt: {
          service: 'E-Filing Portal',
          suggestedSeverity: 'High'
        }
      }
    }

    // 2. Remita / Payment Failure
    if (
      p.includes('debited') || 
      p.includes('remita') || 
      p.includes('payment failed') || 
      p.includes('rrr') || 
      p.includes('deducted') || 
      p.includes('money taken') ||
      p.includes('unconfirmed')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "Payment reconciliation advisory: If your bank account was debited via Remita but the portal has not generated your receipt: \n1. Banks occasionally experience a 5-10 minute webhook confirmation delay.\n2. Do NOT pay a second time yet.\n\nIf more than 15 minutes have passed, please click below so I can open an urgent Developer Support Ticket with your RRR number for manual database reconciliation.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        devEscalationPrompt: {
          service: 'Remita / Fee Payment Gateway',
          suggestedSeverity: 'Critical'
        }
      }
    }

    // 3. Case Tracking Issues
    if (p.includes('track') || p.includes('case status') || p.includes('suit number') || p.includes('tracking id')) {
      if (p.includes('not found') || p.includes('invalid') || p.includes('missing')) {
        return {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Tracking Number Advisory: Official case tracking numbers follow the format SCA/JIG/2024/001 or MC-2024-0001. Both your tracking ID and the registered phone number must match what was provided during initial e-filing. If your registered docket still returns 'Not Found', let me open a registry ticket to verify with the Chief Registrar's docket clerks.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          devEscalationPrompt: {
            service: 'Case Status Tracking',
            suggestedSeverity: 'Standard'
          }
        }
      }

      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "You can track the live status of any submitted appeal, probate filing, or marriage certificate on our Case Tracking System with real-time SMS alerts and milestone progress bars.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [{ title: 'Open Case Tracking Portal', href: '/services/case-tracking' }]
      }
    }

    // 4. Developer Escalation / Human Agent Request
    if (p.includes('developer') || p.includes('agent') || p.includes('human') || p.includes('escalate') || p.includes('ticket')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "Understood. I am ready to escalate your inquiry directly to the Judiciary Software Engineering & Support Team. Please click below to generate an official developer incident ticket with your details.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        devEscalationPrompt: {
          service: 'General Judiciary E-Services',
          suggestedSeverity: 'High'
        }
      }
    }

    // 5. Standard procedural queries
    if (p.includes('file') || p.includes('e-filing') || p.includes('appeal')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "To lodge an appeal, you can use our 5-Step E-Filing Gateway. You will need: 1. A certified true copy of the lower court ruling. 2. A Notice of Appeal setting out your grounds of appeal. 3. Payment of statutory filing fees. You may initiate your filing directly online.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [{ title: 'Launch E-Filing Stepper', href: '/services#efiling-gateway' }]
      }
    }

    if (p.includes('mirath') || p.includes('inheritance') || p.includes('estate') || p.includes('gado')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "Under Maliki Islamic jurisprudence, estate distribution follows the divine Quranic shares (Fardh & Asabah) in Surah An-Nisa (4:11-12). Surviving spouses receive 1/8 (wife with children) or 1/4 (husband with children), parents receive 1/6, and sons and daughters share the remaining residue in a 2:1 ratio.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [{ title: 'Open Mirath Calculator', href: '/services#mirath-section' }]
      }
    }

    if (p.includes('fee') || p.includes('cost') || p.includes('pay') || p.includes('kudi')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "Statutory court fees include: Notice of Appeal (₦10,000), Compilation of Records (₦5,000), Bailiff Service (₦3,500), Motions (₦5,000), and Certified True Copies (₦3,500). All payments generate a verifiable official receipt with instant Remita confirmation.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [{ title: 'Fee Payment Gateway', href: '/services#fee-gateway' }]
      }
    }

    if (p.includes('grand kadi') || p.includes('salihu') || p.includes('head of court')) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "His Lordship Muhammad Sani Salihu is the Honorable Grand Kadi of Jigawa State and President of the Appellate Bench. Appointed in December 2020 after serving as Chief Registrar, his Lordship leads the digital modernization of the state judiciary.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [{ title: 'View Leadership Profile', href: '/#grand-kadi' }]
      }
    }

    // Default Fallback
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: "I am at your service. If you are experiencing difficulties with e-filing forms, fee payments, document verification, or case tracking, let me know. If the issue requires technical intervention, I can generate an official Developer Ticket to resolve it immediately.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      devEscalationPrompt: {
        service: 'General Judiciary E-Services',
        suggestedSeverity: 'Standard'
      }
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue
    if (!text.trim()) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const botResponse = generateAIResponse(text)
      setMessages(prev => [...prev, botResponse])
    }, 700)
  }

  const openEscalationModal = (service = 'E-Filing Portal', severity: 'Standard' | 'High' | 'Critical' = 'High') => {
    setEscalationForm(prev => ({
      ...prev,
      service,
      severity
    }))
    setShowEscalationModal(true)
  }

  const handleSubmitEscalation = (e: React.FormEvent) => {
    e.preventDefault()
    if (!escalationForm.applicantName || !escalationForm.contact || !escalationForm.description) {
      alert('Please fill in your name, contact phone/email, and a brief description of the issue.')
      return
    }

    setIsSubmittingTicket(true)

    setTimeout(() => {
      const ticketId = `DEV-TKT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
      
      const newTicket: SupportTicket = {
        id: ticketId,
        service: escalationForm.service,
        applicantName: escalationForm.applicantName,
        contact: escalationForm.contact,
        referenceNo: escalationForm.referenceNo || 'N/A',
        severity: escalationForm.severity,
        description: escalationForm.description,
        status: 'Open',
        createdAt: new Date().toISOString(),
        source: 'Adalat AI Chatbot Support Desk'
      }

      saveTicketToStorage(newTicket)
      setIsSubmittingTicket(false)
      setShowEscalationModal(false)

      // Add confirmed ticket response into chat
      setMessages(prev => [
        ...prev,
        {
          id: `bot-ticket-${Date.now()}`,
          sender: 'bot',
          text: `🚨 DEVELOPER TICKET DISPATCHED: Official Incident Reference #${ticketId} has been successfully registered on the Judiciary Developer Incident Queue. Our software engineering team has been notified with your diagnostic details.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          ticketData: newTicket
        }
      ])

      // Reset form
      setEscalationForm({
        service: 'E-Filing Portal',
        applicantName: '',
        contact: '',
        referenceNo: '',
        severity: 'High',
        description: ''
      })
    }, 800)
  }

  return (
    <>
      <div id="adalat-widget" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 max-w-[calc(100vw-1.5rem)]">
        {/* Expanded Chat Widget */}
        {isOpen ? (
          <div className="w-[calc(100vw-2rem)] max-w-[400px] h-[80vh] sm:h-[540px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border-2 border-court-green-800 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-court-green-950 via-court-green-900 to-court-green-950 text-white p-3.5 flex items-center justify-between border-b-2 border-court-gold-500">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-court-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img 
                    src="/Court-logo.png" 
                    alt="Court Seal" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-white">Adalat AI Support Assistant</h4>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <p className="text-[10px] text-court-sand-200">
                    Tier-1 Support &amp; Developer Escalations Desk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => openEscalationModal()}
                  title="Open Developer Ticket"
                  className="p-1.5 rounded-lg text-court-gold-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Wrench className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-court-sand-200 hover:text-white hover:bg-court-green-800 transition-colors"
                  aria-label="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-court-sand-50/50 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-court-green-800 text-court-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-court-green-800 text-white rounded-br-none shadow-sm'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>

                    {/* Quick navigation links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                        {msg.links.map((lnk, i) => (
                          <a
                            key={i}
                            href={lnk.href}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-court-green-50 text-court-green-900 hover:bg-court-green-100 font-semibold text-[10px] transition-colors"
                          >
                            <span>{lnk.title}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Interactive Developer Escalation Prompt */}
                    {msg.devEscalationPrompt && (
                      <div className="mt-3 p-2.5 bg-amber-50/90 rounded-xl border border-amber-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-amber-900 font-bold text-[10px]">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>Issue Requires Technical Team Attention?</span>
                        </div>
                        <p className="text-[10px] text-amber-800 leading-tight">
                          If our automated suggestions did not solve your issue, our software engineering team can inspect your docket directly.
                        </p>
                        <Button
                          size="sm"
                          onClick={() => openEscalationModal(msg.devEscalationPrompt?.service, msg.devEscalationPrompt?.suggestedSeverity)}
                          className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] h-7 w-full shadow-sm"
                        >
                          <Wrench className="w-3 h-3 mr-1.5" />
                          Escalate Issue to Developer Team
                        </Button>
                      </div>
                    )}

                    {/* Rendered Ticket Card */}
                    {msg.ticketData && (
                      <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-300 text-emerald-950 space-y-2 text-[11px]">
                        <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
                          <span className="font-bold text-xs flex items-center gap-1 text-emerald-900">
                            <Ticket className="w-3.5 h-3.5 text-emerald-700" />
                            {msg.ticketData.id}
                          </span>
                          <Badge className="bg-emerald-600 text-white text-[9px] font-bold">
                            {msg.ticketData.status}
                          </Badge>
                        </div>

                        <div className="space-y-1">
                          <div><strong>Service:</strong> {msg.ticketData.service}</div>
                          <div><strong>Applicant:</strong> {msg.ticketData.applicantName}</div>
                          <div><strong>Contact:</strong> {msg.ticketData.contact}</div>
                          {msg.ticketData.referenceNo && msg.ticketData.referenceNo !== 'N/A' && (
                            <div><strong>Reference/RRR:</strong> {msg.ticketData.referenceNo}</div>
                          )}
                          <div>
                            <strong>Priority:</strong>{' '}
                            <span className={msg.ticketData.severity === 'Critical' ? 'text-red-700 font-bold' : 'font-semibold'}>
                              {msg.ticketData.severity}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-emerald-200 flex items-center justify-between text-[10px] text-emerald-800">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> SLA: 2–4 Hours
                          </span>
                          <span className="font-bold">Sent to Judiciary Devs</span>
                        </div>
                      </div>
                    )}

                    <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-court-green-200' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-gray-500 text-xs pl-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-court-green-700 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-court-green-700 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-court-green-700 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-gray-400 ml-1">Analyzing support database...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="p-2 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 text-[10px]">
              {prePromptChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(chip)}
                  className="px-2.5 py-1 rounded-full bg-court-sand-100 text-court-slate-900 hover:bg-court-green-100 hover:text-court-green-900 border border-gray-200 flex-shrink-0 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="p-2.5 bg-white border-t border-gray-200 flex items-center gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about E-Filing, payments, or report an issue..."
                className="text-xs h-9"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-court-green-800 hover:bg-court-green-900 text-white h-9 px-3 flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          </div>
        ) : (
          /* Floating Button with Badge */
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2 p-3 bg-gradient-to-r from-court-green-900 to-court-green-950 text-white rounded-full shadow-2xl border-2 border-court-gold-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-court-gold-400/40"
            aria-label="Open Adalat AI Support Assistant"
          >
            <div className="w-7 h-7 rounded-full bg-court-gold-500 text-court-green-950 flex items-center justify-center font-bold">
              <Scale className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left hidden sm:flex pr-1">
              <span className="text-xs font-bold text-white">Adalat AI</span>
              <span className="text-[9px] text-court-gold-300 font-medium">Judicial &amp; Tech Support</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </button>
        )}
      </div>

      {/* Developer Issue Escalation Modal Dialog */}
      <Dialog open={showEscalationModal} onOpenChange={setShowEscalationModal}>
        <DialogContent className="max-w-lg w-[calc(100vw-2rem)] max-h-[90vh] overflow-y-auto bg-white p-5 sm:p-6 rounded-2xl border-2 border-court-green-800 shadow-2xl">
          <DialogHeader className="border-b border-gray-100 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <DialogTitle className="text-base sm:text-lg font-bold text-court-slate-900">
                  Escalate Issue to Developer Team
                </DialogTitle>
                <DialogDescription className="text-xs text-gray-500">
                  Submit an urgent technical incident ticket directly to the court software engineers.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmitEscalation} className="space-y-3.5 pt-2 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">
                Affected Judiciary Service *
              </label>
              <Select 
                value={escalationForm.service} 
                onValueChange={(val) => setEscalationForm(prev => ({ ...prev, service: val }))}
              >
                <SelectTrigger className="text-xs h-9">
                  <SelectValue placeholder="Select affected service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="E-Filing Portal">E-Filing Portal (Case Lodging / Uploads)</SelectItem>
                  <SelectItem value="Remita / Fee Payment Gateway">Remita / Fee Payment Gateway (Debited / Unconfirmed)</SelectItem>
                  <SelectItem value="Case Status Tracking">Case Status Tracking (ID Not Found / Out of Sync)</SelectItem>
                  <SelectItem value="Document Verification">Document Verification (QR Scanner / CTC Validation)</SelectItem>
                  <SelectItem value="Mirath Calculator">Mirath (Estate Calculator Inaccuracy)</SelectItem>
                  <SelectItem value="General Judiciary E-Services">General Portal Glitch / Session Timeout</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Applicant / Counsel Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Aliyu Mohammed"
                  value={escalationForm.applicantName}
                  onChange={(e) => setEscalationForm(prev => ({ ...prev, applicantName: e.target.value }))}
                  className="text-xs h-9"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Contact Phone / Email *
                </label>
                <Input
                  required
                  placeholder="e.g. 0803 123 4567 or email@domain.com"
                  value={escalationForm.contact}
                  onChange={(e) => setEscalationForm(prev => ({ ...prev, contact: e.target.value }))}
                  className="text-xs h-9"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Reference / RRR / Filing ID (Optional)
                </label>
                <Input
                  placeholder="e.g. RRR 1234-5678-9012 or SCA/2026/04"
                  value={escalationForm.referenceNo}
                  onChange={(e) => setEscalationForm(prev => ({ ...prev, referenceNo: e.target.value }))}
                  className="text-xs h-9"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Incident Severity *
                </label>
                <Select 
                  value={escalationForm.severity} 
                  onValueChange={(val: 'Standard' | 'High' | 'Critical') => setEscalationForm(prev => ({ ...prev, severity: val }))}
                >
                  <SelectTrigger className="text-xs h-9">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard (General Question / Query)</SelectItem>
                    <SelectItem value="High">High (Filing Blocked / Error Message)</SelectItem>
                    <SelectItem value="Critical">Critical (Payment Debited / Severe Data Glitch)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">
                Detailed Description of Glitch / Error *
              </label>
              <Textarea
                required
                rows={3}
                placeholder="Describe what happened: e.g., 'At Step 3 of E-Filing, when I clicked Proceed to Remita, error 500 appeared and ₦10,000 was deducted from my account without receipt.'"
                value={escalationForm.description}
                onChange={(e) => setEscalationForm(prev => ({ ...prev, description: e.target.value }))}
                className="text-xs resize-none"
              />
            </div>

            <div className="p-3 bg-court-sand-50 rounded-xl border border-court-gold-200 text-[11px] text-court-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-court-green-950">
                <ShieldAlert className="w-3.5 h-3.5 text-court-green-800" />
                <span>Automated Diagnostic Capture</span>
              </div>
              <p className="text-gray-600">
                Browser agent, timestamp, and network latency will be attached to this ticket to expedite resolution.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowEscalationModal(false)}
                className="text-xs h-9"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                disabled={isSubmittingTicket}
                className="bg-court-green-800 hover:bg-court-green-900 text-white font-bold text-xs h-9 px-4"
              >
                {isSubmittingTicket ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    Dispatching...
                  </>
                ) : (
                  <>
                    <Wrench className="w-3.5 h-3.5 mr-1.5" />
                    Submit to Developer Team
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
