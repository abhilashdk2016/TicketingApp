import { Box } from '@mui/material'
import Nav from './(components)/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticket App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Nav />
        <Box className="demo-class" padding={"10px"}>
        {children}
        </Box>
      </body>
    </html>
  )
}
