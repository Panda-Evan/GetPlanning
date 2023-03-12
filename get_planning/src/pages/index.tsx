import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/NavBar'
import Agenda from '@/components/Planning/Agenda'
import H from '@/components/Principal'
import Pricing from '@/components/pricing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Planning</title>
      </Head>
      < Navbar />
      <H />
      <Pricing />
    </>
  )
}
