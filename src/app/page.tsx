import { Hero } from "@/components/Hero"
import { Tours } from "@/components/Tours"
import { Hotels } from "@/components/Hotel"
import { Testmonial } from "@/components/Testmonial"
import { Footer } from "@/components/Footer"

export default function Home(){
  return (
    <main>
      <Hero />
      <Tours />
      <Hotels />
      <Testmonial />
      <Footer/>
    </main>
  )
}