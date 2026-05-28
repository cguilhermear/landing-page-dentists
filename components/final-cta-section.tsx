"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageCircle, Presentation, ShieldCheck } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const orientationUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20em%20sa%C3%BAde%20bucal."

const lectureUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20conversar%20sobre%20uma%20palestra%20ou%20consultoria%20em%20sa%C3%BAde%20bucal."

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-primary to-accent" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,oklch(0.82_0.055_21_/_0.16)_40%,oklch(0.92_0.04_75_/_0.12)_62%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/85 backdrop-blur"
        >
          <ShieldCheck className="h-4 w-4 text-champagne" />
          Informação, prevenção e responsabilidade
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl font-serif font-medium leading-tight text-primary-foreground text-balance sm:text-4xl lg:text-6xl"
        >
          Pronto para cuidar da saúde bucal com mais clareza e prevenção?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/72 sm:text-xl"
        >
          Leve informação de qualidade para sua rotina, família ou empresa com uma abordagem humana, educativa e segura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-16 rounded-full bg-champagne px-10 text-lg font-medium text-primary shadow-xl shadow-charcoal/15 hover:bg-champagne/90"
            asChild
          >
            <a href={orientationUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orientação
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-16 rounded-full border-primary-foreground/35 bg-transparent px-10 text-lg font-medium text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href={lectureUrl} target="_blank" rel="noopener noreferrer">
              <Presentation className="mr-2 h-5 w-5" />
              Quero uma palestra
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-primary-foreground/58"
        >
          As orientações online têm caráter educativo e preventivo. Quando necessário, a avaliação presencial com um profissional será recomendada.
        </motion.p>
      </div>
    </section>
  )
}
