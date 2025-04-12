'use client'

import React from 'react'

export default function StartScreen({ onStart }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#252538] p-4">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#3aafa9] to-purple-500 text-transparent bg-clip-text">
                    Daily Space
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300">
                    Досліджуйте космос кожного дня з NASA&apos;s Astronomy Picture of the Day
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-gray-300 mt-8">
                    <div className="bg-[#1a1a2e]/50 p-6 rounded-xl backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-[#3aafa9] mb-3">Щоденні відкриття</h3>
                        <p>Нові зображення та відео космосу кожного дня з детальними описами від експертів NASA.</p>
                    </div>
                    <div className="bg-[#1a1a2e]/50 p-6 rounded-xl backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-[#3aafa9] mb-3">Подорож у часі</h3>
                        <p>Досліджуйте архів зображень з 1995 року, відкриваючи нові таємниці Всесвіту.</p>
                    </div>
                    <div className="bg-[#1a1a2e]/50 p-6 rounded-xl backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-[#3aafa9] mb-3">HD якість</h3>
                        <p>Насолоджуйтесь вражаючими зображеннями високої якості та плавними анімаціями.</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 mt-8">
                    <button
                        onClick={onStart}
                        className="
                            px-8 py-4 bg-gradient-to-r from-[#3aafa9] to-[#2c928b] rounded-xl
                            text-white text-lg font-semibold
                            hover:from-[#2c928b] hover:to-[#3aafa9]
                            transform hover:scale-105 hover:-rotate-1
                            transition-all duration-300 ease-in-out
                            shadow-lg hover:shadow-xl
                            flex items-center gap-3
                        "
                    >
                        <span>Почати подорож</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-pulse"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                    
                    <a
                        href="https://t.me/rettargatted_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-[#3aafa9] hover:text-[#2c928b]
                            transition-colors duration-200
                            flex items-center gap-2
                            hover:scale-105 transform
                        "
                    >
                        <span>Створено @rettargatted_bot</span>
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
                </div>
            </div>
        </div>
    )
}
