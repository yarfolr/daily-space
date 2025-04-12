'use client'

import React from 'react'
import Image from 'next/image'
import DatePicker from './DatePicker'

export default function DailyImage({ imageData, onDateChange, selectedDate, isLoading }) {
    const [imageLoaded, setImageLoaded] = React.useState(false)

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    if (isLoading) {
        return (
            <div className="relative bg-gradient-to-b from-[#252538]/95 to-[#1a1a2e]/95 rounded-2xl p-4 md:p-8 shadow-2xl min-h-[200px] transition-all duration-500">
                <div className="flex flex-col items-center justify-center space-y-8 animate-pulse">
                    <div className="h-8 w-64 bg-[#3aafa9]/20 rounded" />
                    <div className="w-full aspect-[16/9] bg-[#3aafa9]/10 rounded-xl" />
                    <div className="w-full max-w-2xl space-y-4">
                        <div className="h-4 w-3/4 bg-[#3aafa9]/20 rounded mx-auto" />
                        <div className="h-4 w-1/2 bg-[#3aafa9]/20 rounded mx-auto" />
                    </div>
                </div>
            </div>
        )
    }

    if (!imageData) {
        return (
            <div className="relative bg-gradient-to-b from-[#252538]/95 to-[#1a1a2e]/95 rounded-2xl p-4 md:p-8 shadow-2xl min-h-[200px] transition-all duration-500">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-[#3aafa9] animate-pulse">Завантаження даних...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="relative bg-gradient-to-b from-[#252538]/95 to-[#1a1a2e]/95 rounded-2xl p-4 md:p-8 shadow-2xl min-h-[200px] transition-all duration-500">
            <div className="absolute inset-0 -z-10 bg-[#3aafa9]/10 rounded-2xl blur-xl" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#3aafa9] to-purple-500 text-transparent bg-clip-text">
                    Астрономічне зображення дня
                </h2>
                <DatePicker onDateChange={onDateChange} selectedDate={selectedDate} />
            </div>

            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 text-center">
                    {imageData.title}
                </h3>
                
                <div className="relative w-full bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg">
                    {imageData.media_type === 'video' ? (
                        <div className="relative pt-[56.25%]">
                            <iframe
                                src={imageData.url}
                                title={imageData.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                    ) : (
                        <div className="relative pt-[56.25%]">
                            <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                                <Image
                                    src={imageData.url}
                                    alt={imageData.title}
                                    fill
                                    className="object-contain transition-transform duration-500 hover:scale-105"
                                    quality={90}
                                    priority
                                    onLoad={handleImageLoad}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <p className="text-base md:text-lg leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
                    {imageData.explanation}
                </p>

                {imageData.hdurl && (
                    <a
                        href={imageData.hdurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full text-[#3aafa9] hover:text-[#2c928b] transition-colors duration-200 mt-4"
                    >
                        <span>Переглянути HD версію</span>
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
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    )
}
