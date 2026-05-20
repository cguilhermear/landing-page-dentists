"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const clinicFeatures = [
  {
    title: "Recepção Premium",
    description: "Ambiente acolhedor e sofisticado para sua chegada"
  },
  {
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração para diagnóstico e tratamento"
  },
  {
    title: "Salas Climatizadas",
    description: "Conforto térmico em todos os ambientes"
  },
  {
    title: "Centro Cirúrgico",
    description: "Ambiente estéril e seguro para procedimentos"
  }
]

export function ClinicExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clinica" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Nossa Estrutura
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            Uma experiência{" "}
            <span className="text-gradient-gold italic">única</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Nossa clínica foi projetada para proporcionar uma experiência 
            de bem-estar completa, do primeiro contato ao pós-tratamento.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 row-span-2 relative group"
          >
            <div className="h-full min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-card to-secondary border border-border">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Ambiente
                </span>
                <h3 className="mt-2 text-2xl lg:text-3xl font-serif font-medium text-foreground">
                  Projetada para seu conforto
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Cada detalhe foi pensado para que você se sinta acolhido 
                  e tranquilo durante todo o tratamento.
                </p>
              </div>

              {/* Decorative */}
              <div className="absolute top-8 right-8 w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-4xl font-serif text-accent">✦</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {clinicFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full min-h-[200px] rounded-2xl bg-card border border-border p-6 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-lg">✦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          {["Scanner Intraoral 3D", "Radiografia Digital", "Laser de Última Geração"].map((tech, index) => (
            <div
              key={tech}
              className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-health-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-foreground">{index + 1}</span>
              </div>
              <span className="font-medium text-foreground">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
