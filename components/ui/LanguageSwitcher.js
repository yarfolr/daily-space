'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export default function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          'bg-[#252538] border border-[#3aafa9]/30',
          'hover:border-[#3aafa9]/50 transition-all duration-200',
          'text-gray-300'
        )}
      >
        <span>{languages[language].flag}</span>
        <span>{languages[language].name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 z-50">
          <div className={cn(
            'bg-[#252538] border border-[#3aafa9]/30 rounded-lg',
            'p-2 min-w-[150px] shadow-xl'
          )}>
            {Object.values(languages).map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={cn(
                  'flex items-center gap-2 w-full px-3 py-2 rounded-lg',
                  'hover:bg-[#3aafa9]/10 transition-all duration-200',
                  'text-gray-300',
                  language === lang.code && 'bg-[#3aafa9]/20'
                )}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
