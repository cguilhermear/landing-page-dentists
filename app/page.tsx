import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AuthoritySection } from "@/components/authority-section"
import { HelpProfilesSection } from "@/components/help-profiles-section"
import { EducationalServicesSection } from "@/components/educational-services-section"
import { ProcessSection } from "@/components/process-section"
import { TopicsSection } from "@/components/topics-section"
import { CorporateSection } from "@/components/corporate-section"
import { ExperienceSection } from "@/components/experience-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <HelpProfilesSection />
      <EducationalServicesSection />
      <ProcessSection />
      <TopicsSection />
      <CorporateSection />
      <ExperienceSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
