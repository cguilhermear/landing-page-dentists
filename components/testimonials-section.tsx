"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marina Costa",
    role: "Empresária",
    content: "A Dra. Sofia transformou meu sorriso de forma que eu nem imaginava ser possível. O atendimento é impecável e os resultados superaram todas as minhas expectativas.",
    rating: 5,
    procedure: "Lentes de Contato Dental"
  },
  {
    id: 2,
    name: "Ricardo Almeida",
    role: "Médico",
    content: "Como profissional da saúde, sou muito exigente. A estrutura da clínica e a técnica da Dra. Sofia são excepcionais. Recomendo sem hesitar.",
    rating: 5,
    procedure: "Implantes Dentários"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    role: "Advogada",
    content: "Sempre tive vergonha do meu sorriso. Depois do tratamento com Invisalign, minha vida mudou completamente. Agradeço imensamente!",
    rating: 5,
    procedure: "Invisalign"
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    role: "Executivo",
    content: "Ambiente sofisticado, equipe atenciosa e resultado perfeito. A clínica da Dra. Sofia é referência em qualidade.",
    rating: 5,
    procedure: "Clareamento + Facetas"
  },
  {
    id: 5,
    name: "Patricia Santos",
    role: "Designer",
    content: "O cuidado com cada detalhe do tratamento mostra o quanto a equipe é dedicada. Meu sorriso está natural e lindo!",
    rating: 5,
    procedure: "Harmonização Facial"
  },
  {
    id: 6,
    name: "André Martins",
    role: "Arquiteto",
    content: "Desde a primeira consulta me senti acolhido. O tratamento foi explicado em detalhes e o resultado ficou melhor do que eu esperava.",
    rating: 5,
    procedure: "Lentes de Contato Dental"
  }
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="depoimentos" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            O que nossos{" "}
            <span className="text-gradient-gold italic">pacientes dizem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre sua experiência.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Procedure Tag */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full mb-4">
                  {testimonial.procedure}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-health-blue/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-secondary/50"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <span className="text-muted-foreground text-center">
            Avaliação média de <strong className="text-foreground">+500 reviews</strong> no Google
          </span>
        </motion.div>
      </div>
    </section>
  )
}
