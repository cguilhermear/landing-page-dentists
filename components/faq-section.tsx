"use client"

import { motion, useInView } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "A orientação online substitui uma consulta presencial?",
    answer:
      "Não. As orientações online têm caráter educativo e preventivo. Quando necessário, a avaliação presencial com um profissional será recomendada.",
  },
  {
    question: "Empresas podem contratar palestras?",
    answer:
      "Sim. As palestras podem ser adaptadas para equipes, SIPATs, semanas de saúde, programas de bem-estar e ações internas de prevenção.",
  },
  {
    question: "É possível criar uma ação educativa personalizada?",
    answer:
      "Sim. O conteúdo pode ser construído de acordo com o público, a faixa etária, o objetivo da campanha e o formato desejado.",
  },
  {
    question: "A orientação serve para famílias e crianças?",
    answer:
      "Sim. A orientação pode ajudar pais, cuidadores e famílias a entenderem hábitos preventivos, rotina de higiene e cuidados adequados para diferentes fases da vida.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Você envia uma mensagem contando sua necessidade. A partir disso, é indicado o melhor formato: orientação online, palestra, consultoria, material educativo ou ação personalizada.",
  },
  {
    question: "Que tipo de dúvidas podem ser abordadas?",
    answer:
      "Dúvidas sobre prevenção, rotina de higiene, saúde bucal infantil, cuidados na gestação, saúde bucal no trabalho, campanhas educativas e sinais que merecem atenção profissional.",
  },
  {
    question: "Quando a avaliação presencial é recomendada?",
    answer:
      "Quando houver dor, alteração visível, suspeita de urgência, necessidade de exame, diagnóstico ou qualquer situação que exija avaliação direta por um profissional.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="duvidas" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/35 via-background to-rose-soft/25" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-card text-accent shadow-sm"
          >
            <HelpCircle className="h-6 w-6" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent"
          >
            Dúvidas frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-serif font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Respostas claras antes do{" "}
            <span className="text-gradient-gold italic">primeiro contato</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="rounded-lg border border-accent/20 bg-card/85 p-3 shadow-xl shadow-charcoal/5 backdrop-blur"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border/80 px-4">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
