import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AuthoritySection } from "@/components/authority-section"
import { ProceduresSection } from "@/components/procedures-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { ClinicExperienceSection } from "@/components/clinic-experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <ProceduresSection />
      <BeforeAfterSection />
      <ClinicExperienceSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
