import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import InternshipsSection from "@/components/internships-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import LogoSection from "@/components/logo-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="internships">
        <InternshipsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <LogoSection />
      <Footer />
    </main>
  )
}

