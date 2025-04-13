import { Roboto } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Daily Space',
  description: 'Daily dose of cosmic beauty from NASA',
}

export default function RootLayout({ children }) {
  return (
    <html lang='uk' suppressHydrationWarning>
      <body className={roboto.className + ' bg-[#17172E] text-white min-h-screen'} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
