'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DatePicker from '@/components/ui/DatePicker'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'
import { useNasaTranslation } from '@/hooks/useNasaTranslation'
import { cn } from '@/lib/utils'

const MediaContent = ({ mediaType, url, title, onLoad, onError, imageLoaded }) => {
  if (mediaType === 'video') {
    return (
      <div className="relative w-full pt-[56.25%] bg-[#252538] rounded-lg overflow-hidden">
        <iframe
          src={url}
          title={title}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative w-full pt-[56.25%] bg-[#252538] rounded-lg overflow-hidden">
      <div className={cn(
        'absolute inset-0 flex items-center justify-center',
        imageLoaded ? 'opacity-0' : 'opacity-100'
      )}>
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>

      <div className={cn(
        'absolute inset-0 transition-opacity duration-500',
        imageLoaded ? 'opacity-100' : 'opacity-0'
      )}>
        <Image
          src={url}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 hover:scale-105"
          quality={90}
          priority
          onLoad={onLoad}
          onError={onError}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 1200px"
        />
      </div>
    </div>
  )
}

export default function DailyImage({ imageData: originalImageData, onDateChange, selectedDate, isLoading }) {
  const [imageLoaded, setImageLoaded] = React.useState(false)
  const [imageError, setImageError] = React.useState(false)
  const [translatedData, setTranslatedData] = React.useState(null)
  const { t } = useTranslation()
  const { translateNasaData } = useNasaTranslation()

  React.useEffect(() => {
    if (originalImageData) {
      translateNasaData(originalImageData).then(setTranslatedData)
    }
  }, [originalImageData, translateNasaData])

  const handleImageLoad = React.useCallback(() => {
    setImageLoaded(true)
    setImageError(false)
  }, [])

  const handleImageError = React.useCallback(() => {
    setImageError(true)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!originalImageData || !translatedData) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-400">{t('dailyImage.noData')}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text text-center sm:text-left">
          {t('dailyImage.title')}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <DatePicker onDateChange={onDateChange} selectedDate={selectedDate} />
          <LanguageSwitcher />
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 text-center px-4">
          {translatedData.title}
        </h3>

        <div className="w-full max-w-[90vw] sm:max-w-none mx-auto">
          <MediaContent
            mediaType={translatedData.media_type}
            url={translatedData.url}
            title={translatedData.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            imageLoaded={imageLoaded}
          />
        </div>

        {imageError && (
          <div className="text-center text-red-500 px-4">
            {t('dailyImage.loadError')}
          </div>
        )}

        <div className="space-y-4 px-4">
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            {translatedData.explanation}
          </p>

          {translatedData.copyright && (
            <p className="text-xs sm:text-sm text-gray-400">
              © {translatedData.copyright}
            </p>
          )}

          <div className="flex justify-center pt-4">
            <Link
              href={translatedData.hdurl || translatedData.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'px-4 py-2 rounded-lg text-sm sm:text-base',
                'bg-[#252538] hover:bg-[#2a2a40]',
                'transition-colors duration-200',
                'w-full sm:w-auto text-center'
              )}
            >
              {t('dailyImage.viewHD')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
