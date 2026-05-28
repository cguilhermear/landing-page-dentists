"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, MessageCircle, Presentation, ShieldCheck, Video } from "lucide-react"

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20em%20sa%C3%BAde%20bucal."

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Solicitar orientação",
    href: whatsappUrl,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dragiovanagomes.com.br",
    href: "mailto:contato@dragiovanagomes.com.br",
  },
  {
    icon: Presentation,
    label: "Palestras e consultorias",
    value: "Empresas, escolas e eventos",
    href: "#palestras",
  },
  {
    icon: Video,
    label: "Orientação online",
    value: "Foco educativo e preventivo",
    href: "#orientacao-online",
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      <div className="bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-semibold tracking-tight text-foreground">
                  Dra. Giovana <span className="text-gradient-gold font-serif italic">Gomes</span>
                </span>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Educação, palestras, consultorias e orientação online em saúde bucal preventiva para pessoas, famílias, empresas, escolas e eventos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 flex gap-3"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:bg-rose-soft"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground" />
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="group premium-card flex gap-4 rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-charcoal/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-soft text-accent transition-colors group-hover:bg-champagne/70">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 rounded-lg border border-sage/20 bg-health-blue-soft/35 p-5"
          >
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                As orientações online têm caráter educativo e preventivo. Quando necessário, a avaliação presencial com um profissional será recomendada.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border bg-card py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Dra. Giovana Gomes. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
