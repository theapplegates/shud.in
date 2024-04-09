import type { Metadata } from 'next'

import cn from 'clsx'
import localFont from 'next/font/local'

import './globals.css'
import Navbar from './_components/navbar'
import { ViewTransitions } from './_components/view-transitions'

const sans = localFont({
  src: './_fonts/InterVariable.woff2',
  preload: true,
  variable: '--sans',
})

const serif = localFont({
  src: './_fonts/LoraItalicVariable.woff2',
  preload: true,
  variable: '--serif',
})

export const metadata: Metadata = {
  title: 'Shu Ding',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={cn(
            sans.variable,
            serif.variable,
            'container p-10 mx-auto',
            'text-rurikon-500 leading-7',
            'antialiased'
          )}
        >
          <div className='flex'>
            <Navbar />
            <main className='relative flex-1 max-w-2xl pl-10 [contain:inline-size]'>
              <div className='absolute w-px h-full bg-rurikon-100/70 left-0' />
              <article>{children}</article>
            </main>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
