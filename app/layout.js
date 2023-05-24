import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './Nav/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Soeradj Mahabiersing',
  description: 'Portfolio 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav/>
        {children}</body>
    </html>
  )
}
