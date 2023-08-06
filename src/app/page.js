"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <CTA />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    </main>
  );
}
