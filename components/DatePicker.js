'use client'

import { useState, useEffect } from 'react'

export default function DatePicker({ onDateChange, selectedDate: initialDate }) {
    const [date, setDate] = useState(new Date())
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        if (initialDate) {
            setDate(new Date(initialDate))
        }
    }, [initialDate])

    const startDate = new Date('1995-06-16')
    const currentDate = new Date()

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]
    }

    const updateDate = (newDate) => {
        if (newDate >= startDate && newDate <= currentDate) {
            setDate(newDate)
            onDateChange(formatDate(newDate))
        }
    }

    const handlePrevDay = () => {
        const newDate = new Date(date)
        newDate.setDate(date.getDate() - 1)
        updateDate(newDate)
    }

    const handleNextDay = () => {
        const newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        updateDate(newDate)
    }

    const handleInputChange = (e) => {
        const newDate = new Date(e.target.value)
        updateDate(newDate)
    }

    if (!isMounted) return null

    return (
        <div className="flex items-center gap-2 bg-[#1a1a2e]/50 p-2 rounded-xl shadow-lg backdrop-blur-sm">
            <button
                onClick={handlePrevDay}
                disabled={date <= startDate}
                className="
                    p-2 hover:bg-[#3aafa9]/10 rounded-lg
                    transition-all duration-200 ease-in-out
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:scale-110 active:scale-95
                "
                title="Попередній день"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <input
                type="date"
                value={formatDate(date)}
                onChange={handleInputChange}
                min={formatDate(startDate)}
                max={formatDate(currentDate)}
                className="
                    bg-[#252538] border border-[#3aafa9]/30 rounded-lg
                    px-3 py-2 text-gray-300 focus:outline-none
                    focus:border-[#3aafa9] transition-all duration-200
                    hover:border-[#3aafa9]/50 w-36 text-center
                    cursor-pointer
                "
            />

            <button
                onClick={handleNextDay}
                disabled={date >= currentDate}
                className="
                    p-2 hover:bg-[#3aafa9]/10 rounded-lg
                    transition-all duration-200 ease-in-out
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:scale-110 active:scale-95
                "
                title="Наступний день"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    )
}
