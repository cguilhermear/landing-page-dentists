"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, SmilePlus, Scan, Sun, Palette, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const procedures = [
  {
    icon: Sparkles,
    title: "Lentes de Contato Dental",
    description: "Laminados ultrafinos que transformam seu sorriso em poucas sessões, com resultados naturais e duradouros.",
    highlight: "Mais popular"
  },
  {
    icon: SmilePlus,
    title: "Implantes Dentários",
    description: "Tecnologia de ponta para substituição de dentes perdidos com máxima estética e funcionalidade.",
    highlight: null
  },
  {
    icon: Scan,
    title: "Invisalign",
    description: "Alinhadores transparentes para correção ortodôntica discreta e confortável. Diamond Provider certificada.",
    highlight: "Diamond Provider"
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    description: "Tratamentos personalizados para devolver a luminosidade natural do seu sorriso de forma segura.",
    highlight: null
  },
  {
    icon: Palette,
    title: "Facetas em Porcelana",
    description: "Restaurações estéticas premium para correção de cor, forma e alinhamento dos dentes.",
    highlight: null
  },
  {
    icon: Wand2,
    title: "Harmonização Facial",
    description: "Procedimentos minimamente invasivos para realçar a beleza natural do seu rosto.",
    highlight: "Novidade"
  }
]

export function ProceduresSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="procedimentos" ref={ref} className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Nossos Procedimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            Tratamentos de{" "}
            <span className="text-gradient-gold italic">alto padrão</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Oferecemos os mais avançados procedimentos da odontologia estética, 
            sempre com foco em resultados naturais e personalizados.
          </motion.p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((procedure, index) => (
            <motion.div
              key={procedure.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Highlight Badge */}
                {procedure.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {procedure.highlight}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <procedure.icon className="h-7 w-7 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {procedure.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {procedure.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-medium text-accent hover:text-accent/80 hover:bg-transparent group/btn"
                    asChild
                  >
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      Saber mais
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            asChild
          >
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Fale conosco pelo WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
