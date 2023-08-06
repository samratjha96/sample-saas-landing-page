"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <CTA />
        <Newsletter />
      </div>
    </main>
  );
}
