"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BadgeCheck, BookOpen, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20em%20sa%C3%BAde%20bucal."

const floatingNotes = [
  "Rotina de higiene com mais clareza",
  "Prevenção para famílias e equipes",
  "Quando buscar avaliação presencial",
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 70])
  const cardY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -34])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pastel-wash soft-texture"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.028_21_/_0.55),transparent_46%),linear-gradient(115deg,transparent_0%,oklch(0.88_0.045_78_/_0.34)_48%,transparent_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24 lg:pt-36">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-card/70 px-4 py-2 text-sm font-medium text-accent shadow-sm backdrop-blur"
          >
            <BadgeCheck className="h-4 w-4" />
            Educação - Prevenção - Orientação
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 max-w-3xl text-4xl font-serif font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Saúde bucal com{" "}
            <span className="text-gradient-rose italic">leveza, prevenção</span>{" "}
            e informação de verdade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Palestras, consultorias e orientações online para quem deseja cuidar melhor da saúde bucal com segurança, acolhimento e clareza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-14 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-charcoal/10 hover:bg-primary/90"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Solicitar uma orientação pelo WhatsApp">
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar uma orientação
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-accent/30 bg-card/60 px-8 text-base font-medium hover:bg-rose-soft/60"
              asChild
            >
              <a href="#palestras">
                Conhecer palestras e consultorias
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sage" />
              Orientações com foco educativo, preventivo e responsável.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative"
          style={{ y: imageY }}
        >
          <div className="relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden rounded-[2rem] border border-white/60 bg-card/60 p-2 shadow-2xl shadow-charcoal/10">
            <Image
              src="/giovana-education-hero.png"
              alt="Dra. Giovana Gomes em uma composição premium de educação em saúde bucal"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="rounded-[1.6rem] object-cover object-center"
            />
            <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-charcoal/28 via-transparent to-background/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="absolute -left-2 bottom-8 w-[min(92%,330px)] rounded-lg border border-white/70 bg-card/90 p-4 shadow-2xl shadow-charcoal/10 backdrop-blur md:-left-8"
            style={{ y: cardY }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-soft text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Orientação educativa
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Informação clara para decisões mais seguras sobre saúde bucal.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -right-1 top-10 hidden w-64 rounded-lg border border-accent/20 bg-background/88 p-4 shadow-xl shadow-charcoal/10 backdrop-blur sm:block lg:-right-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Temas frequentes
            </p>
            <div className="mt-3 space-y-2">
              {floatingNotes.map((note) => (
                <div key={note} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {note}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
        aria-label="Ir para a próxima seção"
      >
        <span>Conhecer</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-card/60"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
