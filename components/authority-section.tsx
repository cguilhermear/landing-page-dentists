"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Users, Award, Building2 } from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    value: "15+",
    label: "Anos de Experiência",
    description: "Especialização em estética dental"
  },
  {
    icon: Users,
    value: "5.000+",
    label: "Pacientes Atendidos",
    description: "Sorrisos transformados"
  },
  {
    icon: Award,
    value: "12",
    label: "Certificações",
    description: "Nacionais e internacionais"
  },
  {
    icon: Building2,
    value: "3",
    label: "Unidades",
    description: "São Paulo e região"
  }
]

const certifications = [
  "USP - Especialização em Odontologia Estética",
  "NYU - Advanced Aesthetic Dentistry",
  "Invisalign - Diamond Provider",
  "ABOE - Membro Titular"
]

export function AuthoritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
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
            Excelência Comprovada
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            Tecnologia e expertise para{" "}
            <span className="text-gradient-gold italic">resultados excepcionais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Combinamos as mais avançadas técnicas da odontologia moderna com um atendimento 
            humanizado e personalizado para cada paciente.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl lg:text-4xl font-semibold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-card rounded-2xl p-8 lg:p-12 border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-4">
                Formação e Certificações
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A busca constante por atualização e as mais renomadas certificações 
                garantem que você receba o tratamento mais avançado disponível.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
