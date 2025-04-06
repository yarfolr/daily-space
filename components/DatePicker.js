'use client'

import { useState, useEffect } from 'react'

export default function DatePicker({ onDateChange, selectedDate: initialDate }) {
	const [selectedDate, setSelectedDate] = useState('')
	const [currentDate, setCurrentDate] = useState('')
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (isMounted) {
			const now = new Date()
			const formattedNow = now.toISOString().split('T')[0]
			setCurrentDate(formattedNow)
			setSelectedDate(initialDate || formattedNow)
		}
	}, [initialDate, isMounted])

	const handleSubmit = e => {
		e.preventDefault()
		if (selectedDate) {
			onDateChange(selectedDate)
		}
	}

	const startDate = '1995-06-16'

	const handlePrevDay = () => {
		const date = selectedDate ? new Date(selectedDate) : new Date()
		date.setDate(date.getDate() - 1)
		const formattedDate = date.toISOString().split('T')[0]
		setSelectedDate(formattedDate)
		onDateChange(formattedDate)
	}

	const handleNextDay = () => {
		const date = selectedDate ? new Date(selectedDate) : new Date()
		date.setDate(date.getDate() + 1)
		const formattedDate = date.toISOString().split('T')[0]
		setSelectedDate(formattedDate)
		onDateChange(formattedDate)
	}

	if (!isMounted) {
		return null
	}

	return (
		<div className='flex items-center gap-2'>
			<button
				onClick={handlePrevDay}
				disabled={selectedDate === startDate}
				className='p-2 hover:bg-[#3aafa9]/10 rounded-lg transition-colors duration-200
					disabled:opacity-50 disabled:cursor-not-allowed'
				title='Попередній день'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M15 18l-6-6 6-6' />
				</svg>
			</button>

			<form onSubmit={handleSubmit} className='flex items-center'>
				<input
					type='date'
					value={selectedDate}
					onChange={e => setSelectedDate(e.target.value)}
					min={startDate}
					max={currentDate}
					className='bg-[#252538] border border-[#3aafa9]/30 rounded-lg px-3 py-2
						text-gray-300 focus:outline-none focus:border-[#3aafa9]
						transition-colors duration-200'
				/>
			</form>

			<button
				onClick={handleNextDay}
				disabled={selectedDate === currentDate}
				className='p-2 hover:bg-[#3aafa9]/10 rounded-lg transition-colors duration-200
					disabled:opacity-50 disabled:cursor-not-allowed'
				title='Наступний день'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M9 18l6-6-6-6' />
				</svg>
			</button>
		</div>
	)
}
