import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <!-- A&J Mobile Detailing Services - Logo attached --> */}
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
