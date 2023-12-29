import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tim Moran | Front End Developer',
  description:
    'The personal website of Tim Moran, a front end developer specialising in React and Next JS based in Brisbane, Australia.',
  icons: {
    icon: '/tm.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex justify-center">{children}</body>
    </html>
  )
}
