'use client'

import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const languages = {
  uk: { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  en: { code: 'en', name: 'English', flag: '🇬🇧' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  it: { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  pl: { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷' },
  zh: { code: 'zh', name: '中文', flag: '🇨🇳' },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uk')

  const value = {
    language,
    setLanguage,
    languages
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
