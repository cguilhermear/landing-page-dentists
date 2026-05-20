"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-charcoal to-foreground" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-accent" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-accent/50" />
        <div className="absolute bottom-1/4 right-1/2 w-48 h-48 rounded-full border border-accent/30" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8"
        >
          <Calendar className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-accent">Vagas Limitadas</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-primary-foreground leading-tight text-balance"
        >
          Pronto para ter o sorriso{" "}
          <span className="text-gradient-gold italic">dos seus sonhos?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          Agende sua avaliação gratuita e descubra como podemos transformar 
          seu sorriso com tecnologia de ponta e atendimento humanizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 h-16 text-lg font-medium group glow-gold"
            asChild
          >
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-10 h-16 text-lg font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="tel:+5511999999999">
              Ligar Agora
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-primary-foreground/50"
        >
          ✓ Avaliação gratuita &nbsp;•&nbsp; ✓ Sem compromisso &nbsp;•&nbsp; ✓ Resposta em até 2 horas
        </motion.p>
      </div>
    </section>
  )
}
