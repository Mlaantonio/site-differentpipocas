// src/components/Header.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md shadow-sm border-b border-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#home-section" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Different Pipocas"
            width={133}
            height={133}
            className="h-20 w-auto object-contain"
            priority
          />
        </a>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-pink-500 focus:outline-none"
          aria-label="Abrir Menu"
        >
          <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-xl font-semibold text-white">
          <a href="#home-section" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-pink-500 transition-colors">O que fazemos</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">Quem Somos</a>
          <a href="#portfolio" className="hover:text-pink-500 transition-colors">Portfólio</a>
          <a href="#team" className="hover:text-pink-500 transition-colors">Sobre a Chef</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contato</a>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#ec74b7] border-b border-pink-300/40 px-4 pt-2 pb-4 space-y-2 font-semibold text-white">
          <a href="#home-section" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">O que fazemos</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">Quem Somos</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">Portfólio</a>
          <a href="#team" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">Sobre a Chef</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-pink-500">Contato</a>
        </nav>
      )}
    </header>
  )
}