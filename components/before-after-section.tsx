"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const transformations = [
  {
    id: 1,
    procedure: "Lentes de Contato Dental",
    description: "Correção de coloração e formato dos dentes anteriores"
  },
  {
    id: 2,
    procedure: "Clareamento + Facetas",
    description: "Transformação completa do sorriso em 3 sessões"
  },
  {
    id: 3,
    procedure: "Invisalign + Lentes",
    description: "Alinhamento e finalização estética perfeita"
  },
  {
    id: 4,
    procedure: "Implantes + Prótese",
    description: "Reabilitação oral completa com estética natural"
  }
]

export function BeforeAfterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
    setSliderPosition(50)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section id="resultados" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-accent uppercase tracking-wider"
          >
            Resultados Reais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance"
          >
            Transformações que{" "}
            <span className="text-gradient-gold italic">mudam vidas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Cada sorriso é único. Veja como nossos pacientes transformaram 
            sua autoestima e confiança com nossos tratamentos.
          </motion.p>
        </div>

        {/* Before/After Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-card border border-border glow-gold">
            {/* Comparison Container */}
            <div className="absolute inset-0">
              {/* Before Side */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-muted to-secondary"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Antes</span>
                    <div className="mt-4 w-32 h-32 rounded-full bg-muted-foreground/10 mx-auto flex items-center justify-center">
                      <span className="text-4xl opacity-30">😐</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Side */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-health-blue/5"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">Depois</span>
                    <div className="mt-4 w-32 h-32 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                      <span className="text-4xl">😁</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <ChevronLeft className="h-4 w-4 text-accent-foreground absolute -left-0.5" />
                  <ChevronRight className="h-4 w-4 text-accent-foreground absolute -right-0.5" />
                </div>
              </div>

              {/* Range Input */}
              <input
                type="range"
                min="10"
                max="90"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                aria-label="Comparar antes e depois"
              />
            </div>

            {/* Procedure Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {transformations[currentIndex].procedure}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {transformations[currentIndex].description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 border-border"
                    onClick={prevSlide}
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 border-border"
                    onClick={nextSlide}
                    aria-label="Próximo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setSliderPosition(50)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-accent" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver transformação ${index + 1}`}
              />
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            * Resultados podem variar de acordo com cada paciente. Imagens ilustrativas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
