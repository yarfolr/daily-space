'use client'

import Image from 'next/image'
import DatePicker from './DatePicker'

export default function DailyImage({ imageData, onDateChange, selectedDate, isLoading }) {
	const cardClasses = {
		base: 'relative bg-[#252538]/95 rounded-2xl p-8 shadow-2xl min-h-[200px]',
		gradient: 'before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:blur-xl',
		purple: 'before:bg-[#3aafa9]/10',
		red: 'before:bg-red-500/10'
	}

	const header = {
		wrap: 'flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8',
		title: 'text-2xl font-bold bg-gradient-to-r from-[#3aafa9] to-purple-500 text-transparent bg-clip-text'
	}

	const renderContent = () => {
		if (isLoading) {
			return (
				<div className='animate-pulse space-y-8'>
					<div className='h-8 w-64 bg-[#3aafa9]/20 rounded mx-auto'></div>
					<div className='aspect-[16/9] w-full bg-[#3aafa9]/10 rounded-xl'></div>
					<div className='space-y-4'>
						<div className='h-4 w-3/4 bg-[#3aafa9]/20 rounded'></div>
						<div className='h-4 w-1/2 bg-[#3aafa9]/20 rounded'></div>
					</div>
				</div>
			)
		}

		if (!imageData) {
			return (
				<div className='text-center py-12'>
					<p className='text-xl text-gray-400'>Завантаження...</p>
				</div>
			)
		}

		if (imageData.error) {
			return (
				<div className='text-center py-12'>
					<p className='text-xl text-red-400'>{imageData.error}</p>
					<p className='text-gray-400 mt-4'>Спробуйте вибрати іншу дату</p>
				</div>
			)
		}

		const hdUrl = imageData.hdurl || imageData.url

		return (
			<div className='space-y-8'>
				<h3 className='text-2xl md:text-3xl font-bold'>{imageData.title}</h3>
				<div className='relative w-full aspect-[16/9] bg-[#1a1a2e] rounded-xl overflow-hidden group'>
					{imageData.media_type === 'video' ? (
						<iframe
							src={imageData.url}
							title={imageData.title}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='w-full h-full'
						/>
					) : (
						<Image
							src={imageData.url}
							alt={imageData.title}
							fill
							className='object-contain transition-all duration-500 group-hover:scale-105'
							quality={85}
							priority
						/>
					)}
				</div>
				<div className='flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-6'>
					<div className='space-y-6 flex-1'>
						<p className='text-lg leading-relaxed text-gray-300'>{imageData.explanation}</p>
						{hdUrl && (
							<a
								href={hdUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 text-[#3aafa9] hover:text-[#2c928b] transition-colors duration-200'
							>
								<span>Переглянути HD версію</span>
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
									<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
									<polyline points='15 3 21 3 21 9' />
									<line x1='10' y1='14' x2='21' y2='3' />
								</svg>
							</a>
						)}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={`${cardClasses.base} ${cardClasses.gradient} ${cardClasses.purple}`}>
			<div className={header.wrap}>
				<h2 className={header.title}>Астрономічне зображення дня</h2>
				<DatePicker onDateChange={onDateChange} selectedDate={selectedDate} />
			</div>
			{renderContent()}
		</div>
	)
}
