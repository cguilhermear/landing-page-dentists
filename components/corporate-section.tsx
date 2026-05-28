"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, CalendarCheck, GraduationCap, Megaphone, Sparkles } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20levar%20uma%20a%C3%A7%C3%A3o%20educativa%20de%20sa%C3%BAde%20bucal%20para%20minha%20empresa%2C%20escola%20ou%20evento."

const corporateCards = [
  {
    icon: CalendarCheck,
    title: "SIPAT e semanas de saúde",
    description: "Conteúdos objetivos para ações internas de prevenção e bem-estar.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Empresas e equipes",
    description: "Palestras para colaboradores, lideranças, RH e programas de qualidade de vida.",
  },
  {
    icon: GraduationCap,
    title: "Escolas e famílias",
    description: "Atividades educativas com linguagem adequada para pais, cuidadores e estudantes.",
  },
  {
    icon: Megaphone,
    title: "Eventos e campanhas preventivas",
    description: "Roteiros, materiais e ações alinhados ao público e ao objetivo da campanha.",
  },
]

export function CorporateSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="palestras" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-primary to-accent" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,oklch(0.92_0.04_75_/_0.14)_45%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/85 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-champagne" />
              Palestras, workshops e ações educativas
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 max-w-3xl text-3xl font-serif font-medium leading-tight tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              Leve saúde bucal preventiva para sua empresa, escola ou evento
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/76"
            >
              Palestras, ações educativas e conteúdos personalizados para estimular prevenção, bem-estar e informação de qualidade de forma leve, acessível e profissional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-14 rounded-full bg-champagne px-8 text-base font-medium text-primary hover:bg-champagne/90"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quero uma palestra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-primary-foreground/35 bg-transparent px-8 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#temas">Ver temas</a>
              </Button>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {corporateCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-primary-foreground/16 bg-primary-foreground/10 p-5 text-primary-foreground shadow-2xl shadow-charcoal/10 backdrop-blur transition-all duration-300 hover:border-champagne/50 hover:bg-primary-foreground/14"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-foreground/12 text-champagne">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
