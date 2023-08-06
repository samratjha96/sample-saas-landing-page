"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}
