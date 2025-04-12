'use client'

import { useState, useEffect, useCallback } from 'react'
import DailyImage from '@/components/DailyImage'
import StartScreen from '@/components/StartScreen'

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

export default function Home() {
    const [imageData, setImageData] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [started, setStarted] = useState(false)

    const fetchImageData = async (date) => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}`
            )
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            setImageData(data)
        } catch (error) {
            console.error('Error fetching NASA APOD:', error)
            setImageData(null)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDateChange = useCallback((date) => {
        setSelectedDate(date)
    }, [])

    useEffect(() => {
        if (!started) return

        const loadImage = async () => {
            if (selectedDate) {
                await fetchImageData(selectedDate)
            } else {
                const today = new Date().toISOString().split('T')[0]
                setSelectedDate(today)
                await fetchImageData(today)
            }
        }

        loadImage()
    }, [selectedDate, started])

    const handleStart = () => {
        setStarted(true)
    }

    if (!started) {
        return <StartScreen onStart={handleStart} />
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#252538] text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <DailyImage
                    imageData={imageData}
                    onDateChange={handleDateChange}
                    selectedDate={selectedDate}
                    isLoading={isLoading}
                />
            </div>
        </main>
    )
}
