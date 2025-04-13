'use client'

import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

export default function StartScreen({ onStart }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-gradient-to-b from-background-dark to-background overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl transform rotate-12" />
          <div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-3xl transform -rotate-12" />
        </div>
        
        {/* Language switcher */}
        <div className="absolute top-0 right-0 sm:top-4 sm:right-4">
          <LanguageSwitcher />
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text tracking-tight">
              {t('startScreen.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t('startScreen.subtitle')}
            </p>
          </div>

          {/* Main content */}
          <div className="bg-[#252538]/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 text-white/90">
              {t('startScreen.howItWorks')}
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Daily Photos */}
              <div className="space-y-2 p-4 rounded-xl bg-[#252538]/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="text-xl">🚀</span>
                  <span>{t('startScreen.dailyPhotos')}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t('startScreen.dailyPhotosDesc')}
                </p>
              </div>

              {/* Time Travel */}
              <div className="space-y-2 p-4 rounded-xl bg-[#252538]/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="text-xl">🗓</span>
                  <span>{t('startScreen.timeTravel')}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t('startScreen.timeTravelDesc')}
                </p>
              </div>

              {/* Different Media */}
              <div className="space-y-2 p-4 rounded-xl bg-[#252538]/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="text-xl">🎥</span>
                  <span>{t('startScreen.differentMedia')}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t('startScreen.differentMediaDesc')}
                </p>
              </div>

              {/* Educational Content */}
              <div className="space-y-2 p-4 rounded-xl bg-[#252538]/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="text-xl">📚</span>
                  <span>{t('startScreen.educationalContent')}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t('startScreen.educationalContentDesc')}
                </p>
              </div>

              {/* Easy Navigation */}
              <div className="space-y-2 p-4 rounded-xl bg-[#252538]/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span className="text-xl">🔍</span>
                  <span>{t('startScreen.easyNavigation')}</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t('startScreen.easyNavigationDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Start button */}
          <div className="flex justify-center">
            <button
              onClick={onStart}
              className={cn(
                'w-full sm:w-auto px-8 py-3 rounded-xl',
                'text-base sm:text-lg font-medium',
                'bg-gradient-to-r from-primary to-purple-500',
                'hover:from-primary/90 hover:to-purple-500/90',
                'transform transition-all duration-200',
                'hover:scale-105 active:scale-95',
                'text-background shadow-lg'
              )}
            >
              {t('startScreen.startButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
