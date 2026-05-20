"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Paulista, 1000 - Conjunto 1501",
    detail: "Bela Vista, São Paulo - SP"
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 99999-9999",
    detail: "(11) 3333-3333"
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@drasofiamendes.com.br",
    detail: null
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 8h às 19h",
    detail: "Sábados: 8h às 13h"
  }
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
]

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-secondary/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Brand & Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-semibold tracking-tight text-foreground">
                  Dra. Sofia <span className="text-gradient-gold font-serif italic">Mendes</span>
                </span>
                <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                  Odontologia estética de alto padrão. Transformando sorrisos 
                  e vidas há mais de 15 anos com tecnologia, precisão e arte.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  CRO-SP 123456 | Responsável Técnica
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8 flex gap-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground">
                      {info.value}
                    </p>
                    {info.detail && (
                      <p className="text-sm text-muted-foreground">
                        {info.detail}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 rounded-2xl overflow-hidden border border-border bg-card"
          >
            <div className="aspect-[21/9] lg:aspect-[21/6] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Clique para abrir no Google Maps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-card border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Dra. Sofia Mendes. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
