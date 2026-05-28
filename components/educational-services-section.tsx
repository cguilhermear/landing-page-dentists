"use client"

import { motion, useInView } from "framer-motion"
import { Building2, FileText, HeartHandshake, Presentation, ShieldCheck, UsersRound, Video } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20conversar%20sobre%20servi%C3%A7os%20educativos%20em%20sa%C3%BAde%20bucal."

const services = [
  {
    icon: Presentation,
    title: "Palestras e workshops",
    description: "Encontros leves e didáticos sobre prevenção, rotina de cuidado e dúvidas frequentes.",
    audience: "Empresas, escolas, eventos e comunidades",
    cta: "Quero uma palestra",
  },
  {
    icon: ShieldCheck,
    title: "Consultoria preventiva",
    description: "Orientação para organizar rotinas, conteúdos e campanhas com foco em saúde bucal.",
    audience: "Famílias, equipes e organizações",
    cta: "Solicitar consultoria",
  },
  {
    icon: Video,
    title: "Orientação online",
    description: "Conversa educativa para esclarecer dúvidas e entender quando buscar avaliação presencial.",
    audience: "Pessoas e famílias com dúvidas",
    cta: "Pedir orientação",
  },
  {
    icon: UsersRound,
    title: "Educação para famílias",
    description: "Conteúdos acessíveis para pais, cuidadores e pessoas que desejam criar hábitos melhores.",
    audience: "Famílias, pais e cuidadores",
    cta: "Orientar minha rotina",
  },
  {
    icon: Building2,
    title: "Ações para empresas",
    description: "Atividades preventivas para programas internos de saúde, bem-estar e qualidade de vida.",
    audience: "RH, lideranças e equipes",
    cta: "Levar para empresa",
  },
  {
    icon: FileText,
    title: "Materiais educativos personalizados",
    description: "Guias, roteiros e conteúdos preventivos adaptados ao público e ao objetivo da ação.",
    audience: "Campanhas, escolas e eventos",
    cta: "Criar material",
  },
]

export function EducationalServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="orientacao-online" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-rose-soft/25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Serviços educativos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Prevenção, orientação e conteúdo para{" "}
            <span className="text-gradient-gold italic">diferentes contextos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Conteúdos, palestras e consultorias pensadas para pessoas, famílias, empresas, escolas e eventos que desejam cuidar melhor da saúde bucal com responsabilidade.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group"
            >
              <div className="premium-card relative flex h-full flex-col overflow-hidden rounded-lg p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/45 hover:shadow-xl hover:shadow-charcoal/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose via-champagne to-sage opacity-80" />

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent transition-all duration-300 group-hover:bg-rose-soft group-hover:text-primary">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 rounded-lg bg-background/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Indicado para
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{service.audience}</p>
                </div>

                <Button
                  variant="ghost"
                  className="mt-6 h-auto justify-start p-0 font-medium text-accent hover:bg-transparent hover:text-primary"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {service.cta}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mt-12 max-w-3xl rounded-lg border border-accent/20 bg-card/80 p-5 text-center shadow-sm"
        >
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sage/15 text-sage">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            As orientações online têm caráter educativo e preventivo. Quando necessário, a avaliação presencial com um profissional será recomendada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
