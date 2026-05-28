"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dra.%20Giovana.%20Gostaria%20de%20solicitar%20uma%20orienta%C3%A7%C3%A3o%20em%20sa%C3%BAde%20bucal."

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/60 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-2xl shadow-charcoal/18 transition-colors hover:bg-primary/90 sm:bottom-6 sm:right-6 sm:px-5"
          aria-label="Falar com a Dra. Giovana pelo WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Falar com a Dra. Giovana</span>
          <span className="sm:hidden">Orientação</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
