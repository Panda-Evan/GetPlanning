import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/NavBar'
import Agenda from '@/components/Planning/Agenda'
import Register from '@/components/Form/Register'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Planning</title>
      </Head>
      
      <main>
        < Navbar />
        <Agenda />
        <Register/>
      </main>

      <footer>
        
      </footer>
    </>
  )
}
