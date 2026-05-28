"use client"

import { motion, useInView } from "framer-motion"
import { Quote, Sparkles } from "lucide-react"
import { useRef } from "react"

const perceptionCards = [
  {
    role: "Famílias",
    title: "Clareza para a rotina",
    content: "Orientações simples de entender, com foco em hábitos possíveis e cuidados preventivos no dia a dia.",
  },
  {
    role: "Empresas",
    title: "Conteúdo útil para equipes",
    content: "Palestras com linguagem acessível, profissional e aplicável a programas de saúde e bem-estar.",
  },
  {
    role: "Escolas e eventos",
    title: "Didática acolhedora",
    content: "Ações educativas pensadas para públicos diferentes, sempre com leveza, organização e responsabilidade.",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiencia" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-rose-soft/25 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Experiência educativa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            O que torna a orientação{" "}
            <span className="text-gradient-rose italic">acolhedora e confiável</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            A comunicação é pensada para reduzir dúvidas, aproximar prevenção da vida real e dar mais segurança para pessoas, famílias e organizações.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {perceptionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="premium-card relative h-full rounded-lg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-charcoal/10">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/12" />
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {card.role}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mt-10 rounded-lg border border-accent/20 bg-card/80 p-6 text-center shadow-sm"
        >
          <Sparkles className="mx-auto mb-3 h-5 w-5 text-accent" />
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground">
            O foco está em educação, prevenção e direcionamento ético, sem promessas absolutas e sem substituir avaliações presenciais quando elas forem necessárias.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
