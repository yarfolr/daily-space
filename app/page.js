'use client'

import { useState, useCallback } from 'react'
import DailyImage from '@/components/features/nasa/DailyImage'
import StartScreen from '@/components/features/nasa/StartScreen'
import { useDebounce } from '@/hooks/useDebounce'

export default function Home() {
  const [isStarted, setIsStarted] = useState(false)
  const [imageData, setImageData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchImageData = useCallback(async (date) => {
    if (!process.env.NEXT_PUBLIC_NASA_API_KEY) {
      setError(new Error('NASA API key is not configured'))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}`
      )

      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status)
      }

      const data = await response.json()
      setImageData(data)
    } catch (error) {
      console.error('Error fetching NASA APOD:', error)
      setError(error)
      setImageData(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const debouncedFetchImage = useDebounce(fetchImageData, 300)

  const handleDateChange = useCallback((date) => {
    debouncedFetchImage(date)
  }, [debouncedFetchImage])

  const handleStart = useCallback(() => {
    setIsStarted(true)
    debouncedFetchImage(new Date().toISOString().split('T')[0])
  }, [debouncedFetchImage, setIsStarted])

  if (!isStarted) {
    return <StartScreen onStart={handleStart} />
  }

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background">
      <DailyImage
        imageData={imageData}
        onDateChange={handleDateChange}
        selectedDate={imageData?.date}
        isLoading={isLoading}
        error={error}
      />
    </main>
  )
}
