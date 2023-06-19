import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task MS',
  description: 'Simple task management system',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <NavBar/>
      {children}
    </body>
    </html>
  )
}
