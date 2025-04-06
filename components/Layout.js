'use client'

export default function LayoutContent({ children }) {
    return (
        <>
            <header className='text-center py-4'>
                <h1 className='text-3xl font-bold'>Щоденний Космос</h1>
            </header>
            {children}
        </>
    )
}
