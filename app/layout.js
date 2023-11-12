import { Inter } from 'next/font/google'
// import './globals.css'





import Navbar from './components/Navbar';
import Footer from './components/Footer';

import FixedBottomNavigation from './components/FixedBottomNavigation';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mama\'s Cleaning | New Jersey',
  description: 'Mama\'s Cleaning Service in New Jersey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


        <body className={inter.className} style={{ padding: '0', margin: '0' }}>




          <Navbar />



          {children}



          <Footer />




          <FixedBottomNavigation />


        </body>


    </html>
  )
}
