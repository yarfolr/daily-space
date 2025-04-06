'use client'

import { useState, useEffect, useCallback } from 'react'
import DailyImage from '../components/DailyImage'

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

export default function Home() {
    const [mounted, setMounted] = useState(false)
    const [imageData, setImageData] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY

    useEffect(() => {
        setMounted(true)
    }, [])

    const fetchImage = useCallback(async (date) => {
        if (!apiKey) {
            setImageData({
                error: 'Помилка: API ключ NASA не налаштований. Будь ласка, створіть файл .env.local і додайте NEXT_PUBLIC_NASA_API_KEY=ваш_ключ'
            })
            return
        }
        
        setIsLoading(true)

        try {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date ? `&date=${date}` : ''}`
            const response = await fetch(url)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.msg || 'Помилка завантаження зображення')
            }

            localStorage.setItem('lastImageData', JSON.stringify(data))
            localStorage.setItem('lastDate', date || '')

            setImageData(data)
            setSelectedDate(date)
        } catch (error) {
            console.error('Помилка:', error)
            setImageData({ error: error.message })
        } finally {
            setIsLoading(false)
        }
    }, [apiKey, setImageData, setIsLoading, setSelectedDate])

    const debouncedFetchImage = useCallback(
        debounce((date) => {
            fetchImage(date)
        }, 300),
        [fetchImage]
    )

    useEffect(() => {
        if (mounted) {
            const savedData = localStorage.getItem('lastImageData')
            const savedDate = localStorage.getItem('lastDate')

            if (savedData && savedDate) {
                setImageData(JSON.parse(savedData))
                setSelectedDate(savedDate)
            } else {
                fetchImage()
            }
        }
    }, [fetchImage, mounted])

    if (!mounted) {
        return null
    }

    return (
        <main className='min-h-screen pb-8'>
            <div className='max-w-7xl mx-auto'>
                <DailyImage
                    imageData={imageData}
                    onDateChange={debouncedFetchImage}
                    selectedDate={selectedDate}
                    isLoading={isLoading}
                />
            </div>
        </main>
    )
}
