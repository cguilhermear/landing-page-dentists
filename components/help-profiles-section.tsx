"use client"

import { motion, useInView } from "framer-motion"
import { Baby, Building2, CalendarHeart, CircleHelp, GraduationCap, Video } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const whatsappBase =
  "https://wa.me/5511999999999?text="

const profiles = [
  {
    icon: Baby,
    title: "Sou mãe/pai e quero orientação",
    description: "Rotina, prevenção e dúvidas comuns para cuidar melhor da família.",
    cta: "Orientar minha família",
    message: "Ol%C3%A1%2C%20Dra.%20Giovana.%20Sou%20m%C3%A3e%2Fpai%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20em%20sa%C3%BAde%20bucal.",
  },
  {
    icon: Building2,
    title: "Sou empresa e quero uma palestra",
    description: "Conteúdos preventivos para equipes, SIPATs e semanas de saúde.",
    cta: "Planejar uma palestra",
    message: "Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20falar%20sobre%20uma%20palestra%20para%20empresa.",
  },
  {
    icon: GraduationCap,
    title: "Sou escola/evento e quero uma ação",
    description: "Dinâmicas educativas com linguagem acessível e acolhedora.",
    cta: "Criar uma ação",
    message: "Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20uma%20a%C3%A7%C3%A3o%20educativa%20para%20escola%20ou%20evento.",
  },
  {
    icon: CircleHelp,
    title: "Tenho dúvidas sobre saúde bucal",
    description: "Um primeiro direcionamento para entender o melhor caminho.",
    cta: "Enviar minha dúvida",
    message: "Ol%C3%A1%2C%20Dra.%20Giovana.%20Tenho%20d%C3%BAvidas%20sobre%20sa%C3%BAde%20bucal%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o.",
  },
  {
    icon: Video,
    title: "Quero uma orientação online",
    description: "Conversa educativa, preventiva e responsável para sua necessidade.",
    cta: "Solicitar orientação",
    message: "Ol%C3%A1%2C%20Dra.%20Giovana.%20Quero%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20online.",
  },
]

export function HelpProfilesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="como-posso-ajudar" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
            >
              Escolha como posso te ajudar
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Caminhos simples para receber{" "}
              <span className="text-gradient-rose italic">informação de qualidade</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Cada perfil chega com uma necessidade diferente. A orientação parte dessa escuta para propor conteúdos, palestras ou direcionamentos preventivos com linguagem leve e profissional.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.title}
              href={`${whatsappBase}${profile.message}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * index }}
              whileHover={{ y: -8 }}
              className="group premium-card flex min-h-[284px] flex-col justify-between rounded-lg p-6 outline-none transition-all duration-300 hover:border-accent/45 hover:shadow-xl hover:shadow-charcoal/10 focus-visible:ring-4 focus-visible:ring-ring/25"
              aria-label={profile.title}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-champagne/55 text-accent transition-all duration-300 group-hover:bg-rose-soft group-hover:text-primary">
                  <profile.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-foreground">
                  {profile.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {profile.description}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center text-sm font-medium text-accent transition-colors group-hover:text-primary">
                {profile.cta}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-sage/20 bg-health-blue-soft/30 p-5 sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-3">
            <CalendarHeart className="mt-0.5 h-5 w-5 text-sage" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Precisa de algo mais específico? A proposta pode ser adaptada para famílias, grupos, equipes, escolas, campanhas e eventos.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-sage/30 bg-card/70" asChild>
            <a href="#duvidas">Ver dúvidas comuns</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
