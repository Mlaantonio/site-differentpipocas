// src/components/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Updock } from 'next/font/google'

const fontManuscrita = Updock({
  weight: '400',
  subsets: ['latin'],
})

export default function HeroSection() {
  const [scale, setScale] = useState(1.25) // Zoom inicial de 25%

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const maxScroll = 950 // Distância de rolagem até zerar o zoom
          const progress = Math.min(scrollY / maxScroll, 1)

          // Reduz gradativamente de 1.50 para 0.5
          const currentScale = 1.50 - progress * 0.50
          setScale(currentScale)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="home-section"
      className="relative isolate py-38 md:py-56 text-center px-4 overflow-hidden min-h-[950px] flex items-center justify-center"
    >
      {/* Container da imagem que recebe o zoom dinâmico */}
      <div
        className="absolute inset-0 -z-20 will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <Image
          src="/images/hero/hero.jpg"
          alt="Background Different Pipocas Gourmet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-stone-900/60 -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-4 text-white">
        <h1
          className={`${fontManuscrita.className} font-bold text-6xl md:text-8xl text-white leading-tight [paint-order:stroke_fill] [-webkit-text-stroke:2px_#ffffff] [text-shadow:_0_5px_16px_rgba(0,0,0,0.99)]`}
        >
          Pipoca feita com amor.
        </h1>
        <p
          className={`${fontManuscrita.className} font-bold text-3xl md:text-5xl text-white [paint-order:stroke_fill] [-webkit-text-stroke:1px_#ffffff] [text-shadow:_0_5px_10px_rgba(0,0,0,0.99)]`}
        >
          Muita pipoca, isso é incrível!!!
        </p>
        <div className="pt-6">
          <a
            href="#portfolio"
            className="font-sans inline-block bg-pink-400 hover:bg-pink-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all border border-amber-400/30 text-base"
          >
            Especial de Hoje
          </a>
        </div>
      </div>
    </section>
  )
}