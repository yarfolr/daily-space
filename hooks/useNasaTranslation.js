'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY' // Replace with your API key

export function useNasaTranslation() {
  const { language } = useLanguage()
  const [cache, setCache] = useState(new Map())

  const translateText = async (text, targetLang) => {
    if (!text) return text
    
    // Return original text for English
    if (targetLang === 'en') return text

    // Check cache first
    const cacheKey = `${text}-${targetLang}`
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    try {
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          source: 'en'
        })
      })

      const data = await response.json()
      const translatedText = data.data.translations[0].translatedText

      // Cache the result
      setCache(prev => new Map(prev).set(cacheKey, translatedText))

      return translatedText
    } catch (error) {
      console.error('Translation error:', error)
      return text // Return original text if translation fails
    }
  }

  const translateNasaData = async (nasaData) => {
    if (!nasaData) return nasaData

    const targetLang = language === 'uk' ? 'uk' :
                      language === 'es' ? 'es' :
                      language === 'fr' ? 'fr' :
                      language === 'de' ? 'de' : 'en'

    try {
      const [translatedTitle, translatedExplanation] = await Promise.all([
        translateText(nasaData.title, targetLang),
        translateText(nasaData.explanation, targetLang)
      ])

      return {
        ...nasaData,
        title: translatedTitle,
        explanation: translatedExplanation
      }
    } catch (error) {
      console.error('NASA data translation error:', error)
      return nasaData
    }
  }

  return { translateNasaData }
}
