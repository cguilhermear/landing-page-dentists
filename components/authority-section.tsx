"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { Award, BookOpenCheck, HeartHandshake, Laptop, Presentation, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const authorityItems = [
  {
    icon: Award,
    value: "CD",
    label: "Cirurgiã-dentista",
    description: "Atuação profissional com comunicação clara e responsável.",
  },
  {
    icon: ShieldCheck,
    value: 3,
    suffix: "",
    label: "Frentes de cuidado",
    description: "Educação, prevenção e orientação em saúde bucal.",
  },
  {
    icon: Presentation,
    value: 4,
    suffix: "",
    label: "Formatos educativos",
    description: "Online, palestras, consultorias e materiais personalizados.",
  },
  {
    icon: Laptop,
    value: "1:1",
    label: "Orientação online",
    description: "Escuta individual e direcionamento preventivo quando fizer sentido.",
  },
]

const principles = [
  "Informação clara para decisões mais seguras sobre saúde bucal.",
  "Prevenção também é cuidado.",
  "Orientação profissional para transformar hábitos antes que problemas apareçam.",
  "Conteúdos pensados para pessoas, famílias, equipes e organizações.",
]

function AnimatedValue({
  value,
  suffix = "",
  active,
}: {
  value: number | string
  suffix?: string
  active: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (typeof value !== "number" || !active || shouldReduceMotion) {
      return
    }

    let frame = 0
    const totalFrames = 36
    const animate = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * eased))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [active, shouldReduceMotion, value])

  if (typeof value !== "number" || shouldReduceMotion) {
    return (
      <>
        {value}
        {suffix}
      </>
    )
  }

  return (
    <>
      {displayValue}
      {suffix}
    </>
  )
}

export function AuthoritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-rose-soft/30 to-secondary/45" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Autoridade com acolhimento
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Educação em saúde bucal para{" "}
            <span className="text-gradient-gold italic">rotinas mais conscientes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Giovana Gomes atua levando informação de qualidade sobre saúde bucal de forma leve, acessível e preventiva, ajudando pessoas, famílias e empresas a criarem hábitos mais saudáveis e seguros.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorityItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group"
            >
              <div className="premium-card h-full rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-charcoal/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-soft text-accent transition-colors group-hover:bg-champagne/70">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-semibold tracking-tight text-foreground">
                  <AnimatedValue value={item.value} suffix={item.suffix} active={isInView} />
                </div>
                <p className="mt-2 font-medium text-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-10 grid gap-8 rounded-lg border border-accent/20 bg-card/80 p-6 shadow-xl shadow-charcoal/5 backdrop-blur lg:grid-cols-[0.92fr_1.08fr] lg:p-10"
        >
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-sage/15 text-sage">
              <HeartHandshake className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-foreground">
              Um espaço educativo para cuidar com mais clareza
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A proposta é aproximar conhecimento profissional da vida real: dúvidas de rotina, prevenção, escolhas mais seguras e orientação ética sobre quando procurar uma avaliação presencial.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: 18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.42 + index * 0.06 }}
                className="flex gap-3 rounded-lg bg-secondary/50 p-4"
              >
                <BookOpenCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
