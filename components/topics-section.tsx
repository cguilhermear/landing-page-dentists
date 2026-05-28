"use client"

import { motion, useInView } from "framer-motion"
import {
  Baby,
  BriefcaseBusiness,
  CalendarDays,
  HeartPulse,
  Leaf,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react"
import { useRef } from "react"

const topics = [
  { icon: ShieldCheck, title: "Prevenção de cáries" },
  { icon: Baby, title: "Saúde bucal infantil" },
  { icon: Leaf, title: "Higiene bucal na rotina" },
  { icon: HeartPulse, title: "Cuidados na gestação" },
  { icon: UserRoundCheck, title: "Saúde bucal para idosos" },
  { icon: Sparkles, title: "Hábitos que prejudicam a saúde bucal" },
  { icon: BriefcaseBusiness, title: "Saúde bucal no ambiente de trabalho" },
  { icon: UsersRound, title: "Orientação para pais e cuidadores" },
  { icon: Megaphone, title: "Campanhas educativas" },
  { icon: CalendarDays, title: "Palestras para empresas e escolas" },
]

export function TopicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="temas" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Temas que podem ser abordados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Conteúdo preventivo para{" "}
            <span className="text-gradient-gold italic">perguntas reais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Os temas podem ser combinados, adaptados por faixa etária e organizados para palestras, workshops, materiais educativos ou orientações online.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              whileHover={{ y: -6 }}
              className="group premium-card min-h-[160px] rounded-lg p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-charcoal/10"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-rose-soft text-accent transition-colors group-hover:bg-champagne/70">
                <topic.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-snug text-foreground">
                {topic.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
