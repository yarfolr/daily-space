import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: 'Щоденний Космос',
	description: 'Календарь Зображень космосу від NASA',
}

export default function RootLayout({ children }) {
	return (
		<html lang='uk' suppressHydrationWarning>
			<body className='bg-[#17172E] text-white min-h-screen' suppressHydrationWarning>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
					<header className='text-center mb-12'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text'>
							Щоденний Космос
						</h1>
						<p className='text-lg text-gray-400'>
							Відкрий для себе красу Всесвіту з щоденними зображеннями від NASA
						</p>
					</header>
					{children}
				</div>
			</body>
		</html>
	)
}
