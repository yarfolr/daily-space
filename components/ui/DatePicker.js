'use client'

import React from 'react'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

const FIRST_NASA_DATE = new Date('1995-06-16')

export default function DatePicker({ onDateChange, selectedDate }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentMonth, setCurrentMonth] = React.useState(selectedDate || new Date())

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    if (nextMonth <= new Date()) {
      setCurrentMonth(nextMonth)
    }
  }

  const handleDateSelect = (date) => {
    if (date >= FIRST_NASA_DATE && date <= new Date()) {
      onDateChange(date)
      setIsOpen(false)
    }
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    
    // Add empty days for padding
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const days = getDaysInMonth(currentMonth)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full sm:w-[280px] px-4 py-2 sm:py-3',
          'flex items-center justify-between',
          'text-sm sm:text-base font-medium',
          'bg-[#252538]/50 hover:bg-[#252538]/70',
          'border border-[#252538] hover:border-primary/50',
          'rounded-xl backdrop-blur-sm',
          'transition-all duration-200'
        )}
      >
        <span className="truncate">
          {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : t('datePicker.selectDate')}
        </span>
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-50" />
      </button>

      {isOpen && (
        <div className={cn(
          'absolute z-50 mt-2',
          'w-full sm:w-[320px]',
          'p-4 rounded-xl',
          'bg-[#252538]/90 backdrop-blur-sm',
          'border border-[#252538]',
          'shadow-xl'
        )}>
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePreviousMonth}
                className="p-1 hover:bg-[#2a2a40] rounded-lg transition-colors"
                disabled={currentMonth <= FIRST_NASA_DATE}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <span className="text-sm sm:text-base font-medium">
                {format(currentMonth, 'MMMM yyyy')}
              </span>
              
              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-[#2a2a40] rounded-lg transition-colors"
                disabled={new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1) > new Date()}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Calendar */}
            <div>
              {/* Weekdays */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map(day => (
                  <div
                    key={day}
                    className="text-center text-xs text-gray-400 font-medium"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((date, i) => {
                  if (!date) {
                    return <div key={`empty-${i}`} />
                  }

                  const isDisabled = date < FIRST_NASA_DATE || date > new Date()
                  const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                  const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')

                  return (
                    <button
                      key={date.toString()}
                      onClick={() => handleDateSelect(date)}
                      disabled={isDisabled}
                      className={cn(
                        'w-full aspect-square flex items-center justify-center',
                        'text-sm rounded-lg transition-colors',
                        isDisabled && 'text-gray-600 cursor-not-allowed',
                        !isDisabled && 'hover:bg-[#2a2a40]',
                        isSelected && 'bg-primary text-primary-foreground hover:bg-primary/90',
                        isToday && !isSelected && 'bg-[#2a2a40] text-white',
                      )}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
