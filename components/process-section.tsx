"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { BookCheck, ClipboardList, Compass, MessageSquareText } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    icon: Compass,
    title: "Você escolhe o tipo de orientação",
    description: "Pode ser uma dúvida individual, uma ação para família, uma palestra ou uma consultoria educativa.",
  },
  {
    icon: MessageSquareText,
    title: "Conta sua necessidade de forma simples",
    description: "A conversa começa com contexto: público, rotina, dúvidas e objetivo do conteúdo ou encontro.",
  },
  {
    icon: BookCheck,
    title: "Recebe direcionamento educativo e preventivo",
    description: "A orientação prioriza clareza, hábitos possíveis e informação segura para decisões mais conscientes.",
  },
  {
    icon: ClipboardList,
    title: "Quando necessário, busca avaliação presencial",
    description: "Se houver sinais que exigem exame, a recomendação será procurar um profissional presencialmente.",
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  })
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="como-funciona" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-soft/25 via-background to-secondary/45" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Como funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Uma jornada clara para receber{" "}
            <span className="text-gradient-rose italic">orientação responsável</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            O processo foi pensado para ser simples, humano e ético desde o primeiro contato.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />
          <motion.div
            style={{ scaleY: progressScale, transformOrigin: "top" }}
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-rose to-sage md:block"
          />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative md:pl-20"
              >
                <div className="absolute left-0 top-6 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-card text-sm font-semibold text-accent shadow-lg shadow-charcoal/5 md:flex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="premium-card grid gap-5 rounded-lg p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-charcoal/10 sm:grid-cols-[auto_1fr] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-champagne/60 text-accent">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="mb-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent md:hidden">
                      Passo {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
