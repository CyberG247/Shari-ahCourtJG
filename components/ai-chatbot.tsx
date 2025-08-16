'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, X, Send, Bot, User, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  links?: { text: string; url: string }[]
}

interface ChatbotResponse {
  text: string
  links?: { text: string; url: string }[]
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const generateResponse = (userMessage: string): ChatbotResponse => {
    const message = userMessage.toLowerCase().trim()
    
    // Greetings
    if (message.match(/^(hi|hello|hey|greetings|assalam|peace|good morning|good afternoon|good evening|salam).*$/)) {
      return {
        text: "Assalamu Alaikum and welcome! I am the official AI Assistant for the Jigawa State Shari'ah Court of Appeal. I'm here to help you navigate our services and answer your questions about our court system. How may I assist you today?",
      }
    }

    // Grand Kadi Information
    if (message.includes('grand kadi') || message.includes('GK') || message.includes('State head of court')) {
      return {
        text: "His Lordship, Hon. Grand Kadi Muhammad Sani Salihu serves as the head of the Shari'ah Court of Appeal, Jigawa State. Having previously served as Chief Registrar before assuming office in December 2020, the Grand Kadi brings decades of experience in Islamic law and court administration. The Grand Kadi exercises appellate jurisdiction over all Shari'ah matters including personal status, family law, inheritance, and civil disputes in accordance with Islamic law.",
        links: [{ text: "Learn More About Our Court", url: "/about" }]
      }
    }

    // Specific Kadi Information
    if (message.includes('kadi') && (message.includes('02') || message.includes('2') || message.includes('umar nasir') || message.includes('safiyanu'))) {
      if (message.includes('umar nasir') || (message.includes('kadi') && message.includes('02') && message.includes('umar'))) {
        return {
          text: "Hon. Kadi Umar Nasir Ahmad holds the position of Hon. Kadi 02 in the Jigawa State Shari'ah Court of Appeal. He is one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
          links: [{ text: "View All Distinguished Kadis", url: "/" }]
        }
      }
      if (message.includes('safiyanu') || (message.includes('kadi') && message.includes('02') && message.includes('safiyanu'))) {
        return {
          text: "Hon. Kadi Safiyanu holds the position of Hon. Kadi 02 in the Jigawa State Shari'ah Court of Appeal. He is one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
          links: [{ text: "View All Distinguished Kadis", url: "/" }]
        }
      }
    }

    if (message.includes('kadi') && (message.includes('04') || message.includes('4') || message.includes('bala musa'))) {
      return {
        text: "Hon. Kadi Bala Musa Ph.D holds the position of Hon. Kadi 04 in the Jigawa State Shari'ah Court of Appeal. He is one of our distinguished honorable kadis who brings academic excellence and judicial wisdom to our court system, he also served as the Chief Registrar of the State Shari'ah Court Of Appeal. His Lordship also hold a Ph.D in Islamic Studies from the Prestigious Ahmadu Bello University (ABU), Zaria.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    if (message.includes('kadi') && (message.includes('05') || message.includes('5') || message.includes('ibrahim ya\'u'))) {
      return {
        text: "Hon. Kadi Ibrahim Ya'u holds the position of Hon. Kadi 05 in the Jigawa State Shari'ah Court of Appeal. He is one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    if (message.includes('kadi') && (message.includes('06') || message.includes('6'))) {
      return {
        text: "Hon. Kadi 06 serves in the Jigawa State Shari'ah Court of Appeal as one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    if (message.includes('kadi') && (message.includes('07') || message.includes('7'))) {
      return {
        text: "Hon. Kadi 07 serves in the Jigawa State Shari'ah Court of Appeal as one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    if (message.includes('kadi') && (message.includes('08') || message.includes('8'))) {
      return {
        text: "Hon. Kadi 08 serves in the Jigawa State Shari'ah Court of Appeal as one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    if (message.includes('kadi') && (message.includes('09') || message.includes('9'))) {
      return {
        text: "Hon. Kadi 09 serves in the Jigawa State Shari'ah Court of Appeal as one of our distinguished honorable kadis who brings wisdom and expertise to our court system.",
        links: [{ text: "View All Distinguished Kadis", url: "/" }]
      }
    }

    // General Kadis Information
    if (message.includes('kadis') || message.includes('judges') || message.includes('honorable kadis') || message.includes('distinguished kadis')) {
      return {
        text: "Our Distinguished Honorable Kadis include:\n\n• Hon. Kadi Umar Nasir Ahmad (Hon. Kadi 02)\n• Hon. Kadi Safiyanu (Hon. Kadi 02)\n• Hon. Kadi Bala Musa Ph.D (Hon. Kadi 04)\n• Hon. Kadi Ibrahim Ya'u (Hon. Kadi 05)\n• Hon. Kadi 05\n• Hon. Kadi 06\n• Hon. Kadi 07\n• Hon. Kadi 08\n• Hon. Kadi 09\n\nEach brings wisdom and expertise to our court system, serving the people of Jigawa State with dedication to Islamic jurisprudence.",
        links: [{ text: "Meet Our Distinguished Kadis", url: "/" }]
      }
    }

    // E-Filing System
    if (message.includes('e-filing') || message.includes('file case') || message.includes('submit case') || message.includes('online filing')) {
      return {
        text: "Our E-Filing System allows you to file new cases electronically with comprehensive online case submission. You can upload documents, make payments, and track your case progress all in one place.",
        links: [{ text: "Access E-Filing System", url: "/services/e-filing" }]
      }
    }

    // Islamic Marriage Certificate
    if (message.includes('marriage certificate') || message.includes('nikah') || message.includes('wedding certificate') || message.includes('marriage registration')) {
      return {
        text: "You can apply for official Islamic Marriage Certificates through our online portal. Our system provides digital verification, instant downloads, and ensures full legal validity of your certificates.",
        links: [{ text: "Apply for Marriage Certificate", url: "/services/marriage-certificate" }]
      }
    }

    // Judgment Archives
    if (message.includes('judgment') || message.includes('archives') || message.includes('court records') || message.includes('legal precedent') || message.includes('case law')) {
      return {
        text: "Our Judgment Archives provide access to our comprehensive database of court judgments and legal precedents. You can search cases, filter results, download PDFs, and access citation tools.",
        links: [{ text: "Search Judgment Archives", url: "/services/judgment-archives" }]
      }
    }

    // Case Status Tracking
    if (message.includes('case status') || message.includes('track case') || message.includes('case progress') || message.includes('hearing schedule')) {
      return {
        text: "Track the progress of your ongoing court cases with our real-time Case Status Tracking system. Get SMS notifications, upload documents, and view hearing schedules.",
        links: [{ text: "Track Your Case", url: "/services/case-tracking" }]
      }
    }

    // Document Verification
    if (message.includes('verify document') || message.includes('document verification') || message.includes('authenticate') || message.includes('check document')) {
      return {
        text: "Our Document Verification service allows you to verify the authenticity of court-issued documents instantly using QR code scanning, digital signatures, and blockchain security.",
        links: [{ text: "Verify Documents", url: "/services/document-verification" }]
      }
    }

    // All Services
    if (message.includes('services') || message.includes('e-services') || message.includes('what can you do') || message.includes('available services')) {
      return {
        text: "We offer comprehensive digital services including E-Filing System, Islamic Marriage Certificates, Judgment Archives, Case Status Tracking, and Document Verification. All services are available 24/7 with secure encryption.",
        links: [
          { text: "View All E-Services", url: "/services" },
          { text: "E-Filing System", url: "/services/e-filing" },
          { text: "Marriage Certificates", url: "/services/marriage-certificate" },
          { text: "Judgment Archives", url: "/services/judgment-archives" },
          { text: "Case Tracking", url: "/services/case-tracking" },
          { text: "Document Verification", url: "/services/document-verification" }
        ]
      }
    }

    // About Court
    if (message.includes('about') || message.includes('court information') || message.includes('shari\'ah court') || message.includes('jigawa state')) {
      return {
        text: "The Shari'ah Court of Appeal, Jigawa State, Nigeria upholds justice in accordance with Shari'ah principles. We serve the people of Jigawa State with integrity, wisdom, and adherence to Islamic jurisprudence.",
        links: [{ text: "Learn More About Us", url: "/about" }]
      }
    }

    // Courts
    if (message.includes('courts') || message.includes('court locations') || message.includes('where') || message.includes('branches')) {
      return {
        text: "We have multiple court locations across Jigawa State serving different local government areas. Each court provides comprehensive Shari'ah legal services to their respective communities.",
        links: [{ text: "View Court Locations", url: "/courts" }]
      }
    }

    // Management
    if (message.includes('management') || message.includes('staff') || message.includes('officials') || message.includes('leadership')) {
      return {
        text: "Learn about our court management structure, including our distinguished judges, administrative staff, and leadership team committed to delivering justice.",
        links: [{ text: "View Management Team", url: "/management" }]
      }
    }

    // Contact/Help
    if (message.includes('contact') || message.includes('help') || message.includes('support') || message.includes('phone') || message.includes('email')) {
      return {
        text: "For additional support or inquiries, you can find our contact information on the homepage. We're here to assist you with any questions about our services or court procedures.",
        links: [{ text: "Contact Information", url: "/" }]
      }
    }

    // Default response
    return {
      text: "I'm here to help you with information about the Shari'ah Court of Appeal services. You can ask me about:\n\n• E-Filing System\n• Islamic Marriage Certificates\n• Judgment Archives\n• Case Status Tracking\n• Document Verification\n• Court locations\n• About our court\n\nWhat would you like to know more about?",
      links: [{ text: "View All Services", url: "/services" }]
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        links: response.links
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    // Removed automatic welcome message - chatbot will only respond when user sends a message
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Floating animation container */}
          <div className="relative animate-bounce">
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 w-16 h-16 bg-green-400 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-pulse opacity-30"></div>
            
            {/* Main button with enhanced animations */}
            <Button
              onClick={openChat}
              className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-110 animate-pulse"
              aria-label="Open AI Assistant"
            >
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              
              <Bot className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300 drop-shadow-lg" />
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{background: 'conic-gradient(from 0deg, #fbbf24, #ec4899, #8b5cf6, #fbbf24)', WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))', mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))'}}></div>
            </Button>
            
            {/* Enhanced tooltip with animation */}
            <div className="absolute -top-16 right-0 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 shadow-xl border border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">AI Assistant</span>
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-100"></div>
            <div className="absolute -top-4 right-2 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            <div className="absolute bottom-2 -left-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute -bottom-2 right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
          <Card className="h-full flex flex-col shadow-2xl border-0">
            {/* Header */}
            <CardHeader className="bg-green-600 text-white rounded-t-lg p-4 flex-shrink-0">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img 
                      src="/Court-logo.png" 
                      alt="Court Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-bold">AI Assistant</div>
                    <div className="text-green-100 text-sm">Shari'ah Court of Appeal</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </CardTitle>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-green-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="text-sm whitespace-pre-wrap">{message.text}</div>
                      {message.links && message.links.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.links.map((link, index) => (
                            <Link
                              key={index}
                              href={link.url}
                              className="inline-flex items-center text-sm bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors mr-2 mb-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {link.text}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </Link>
                          ))}
                        </div>
                      )}
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input */}
            <div className="p-4 border-t flex-shrink-0">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-green-600 hover:bg-green-700 px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

export default AIChatbot