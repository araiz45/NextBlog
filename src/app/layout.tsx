import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/component/Header'
import StyledComponentsRegistry from './registry'
import Footer from '@/component/Footer'


export const metadata: Metadata = {
  title: 'Aaraiz Zahid Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
              {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
