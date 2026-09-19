'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type FontSize = 'sm' | 'base' | 'lg'
type Language = 'en' | 'ha'

interface AccessibilityContextType {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  cycleFontSize: () => void
  highContrast: boolean
  toggleHighContrast: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, defaultText?: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    courtTitle: "Shari'ah Court of Appeal",
    courtSubtitle: "Jigawa State, Nigeria",
    home: "Home",
    aboutUs: "About Us",
    theBench: "The Bench",
    eServices: "E-Services",
    causeLists: "Cause Lists & Judgments",
    management: "Management",
    media: "Media & Circulars",
    contact: "Contact Registry",
    eFiling: "E-Filing Portal",
    trackCase: "Track Case Status",
    mirathCalc: "Mirath (Inheritance) Calculator",
    payFees: "Pay Court Fees",
    searchPlaceholder: "Search Suit No., Litigant Name, or Judgment precedent...",
    welcomeGovBanner: "Official Digital Portal of the Jigawa State Judiciary • Federal Republic of Nigeria",
    sslVerified: "SSL Encrypted & Certified Judiciary Portal",
    grandKadiTitle: "His Lordship, Hon. Grand Kadi Muhammad Sani Salihu",
    readFullAddress: "Read Full Address",
    landmarkJudgments: "Landmark Decisions",
    chiefRegistrar: "Chief Registrar's Secretariat",
  },
  ha: {
    courtTitle: "Kotun Daukaka Kara ta Shari'a",
    courtSubtitle: "Jihar Jigawa, Najeriya",
    home: "Gida",
    aboutUs: "Game da Kotu",
    theBench: "Alkalai & Kadis",
    eServices: "Ayyukan Yanar Gizo",
    causeLists: "Jadawalin Shari'a & Hukunce-hukunce",
    management: "Hukumar Gudanarwa",
    media: "Labarai & Sanarwa",
    contact: "Sakatariya & Rajista",
    eFiling: "Shigar da Kara ta Yanar Gizo",
    trackCase: "Bibiyar Matsayin Shari'a",
    mirathCalc: "Lissafin Rabon Gado (Mirathi)",
    payFees: "Biya Kudin Shari'a",
    searchPlaceholder: "Bincika lambar kara, sunan mai kara, ko hukunci...",
    welcomeGovBanner: "Tabbatacciyar Hanyar Yanar Gizo ta Shari'ar Jihar Jigawa • Tarayyar Najeriya",
    sslVerified: "Tabbatacciyar Kuma Amintacciyar Hanyar Kotu",
    grandKadiTitle: "Mai Shari'a, Hon. Grand Kadi Muhammad Sani Salihu",
    readFullAddress: "Karanta Cikakken Jawabi",
    landmarkJudgments: "Hukunce-hukuncen Da Aka Yanke",
    chiefRegistrar: "Ofishin Babban Magatakarda",
  }
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('base')
  const [highContrast, setHighContrast] = useState(false)
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Sync font size class on root html
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.classList.remove('font-scale-sm', 'font-scale-base', 'font-scale-lg')
      root.classList.add(`font-scale-${fontSize}`)
    }
  }, [fontSize])

  useEffect(() => {
    // Sync high contrast class on root html
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (highContrast) {
        root.classList.add('high-contrast')
      } else {
        root.classList.remove('high-contrast')
      }
    }
  }, [highContrast])

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size)
  }

  const cycleFontSize = () => {
    if (fontSize === 'sm') setFontSizeState('base')
    else if (fontSize === 'base') setFontSizeState('lg')
    else setFontSizeState('sm')
  }

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev)
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string, defaultText?: string): string => {
    return translations[language]?.[key] || defaultText || key
  }

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        cycleFontSize,
        highContrast,
        toggleHighContrast,
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}
