"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="relative bg-card border border-border rounded-xl p-4 shadow-2xl max-w-[240px]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Fechar"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-sm font-medium text-foreground mb-1">
                  Precisa de ajuda? 👋
                </p>
                <p className="text-xs text-muted-foreground">
                  Tire suas dúvidas pelo WhatsApp. Respondemos em até 2 horas!
                </p>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-border" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-white fill-white" />
            
            {/* Pulse Effect */}
            <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
