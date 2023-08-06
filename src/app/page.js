"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <CTA/>
      </div>
    </main>
  )
}
