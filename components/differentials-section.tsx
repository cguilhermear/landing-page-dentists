"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Heart, Target, Shield, Cpu, Clock } from "lucide-react"

const differentials = [
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para diagnóstico preciso e tratamentos menos invasivos"
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único e merece atenção personalizada em todas as etapas do tratamento"
  },
  {
    icon: Target,
    title: "Precisão Milimétrica",
    description: "Planejamento digital 3D para resultados previsíveis e naturais"
  },
  {
    icon: Shield,
    title: "Biossegurança Total",
    description: "Protocolos rigorosos de esterilização e segurança em todos os procedimentos"
  },
  {
    icon: Zap,
    title: "Procedimentos Modernos",
    description: "Técnicas minimamente invasivas para recuperação rápida e confortável"
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Respeito ao seu tempo com agendamento preciso e sem esperas desnecessárias"
  }
]

export function DifferentialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Por que nos escolher
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            Diferenciais que fazem{" "}
            <span className="text-gradient-gold italic">toda diferença</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Investimos continuamente em tecnologia, formação e infraestrutura 
            para oferecer o melhor em odontologia estética.
          </motion.p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((differential, index) => (
            <motion.div
              key={differential.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-health-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <differential.icon className="h-7 w-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {differential.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
