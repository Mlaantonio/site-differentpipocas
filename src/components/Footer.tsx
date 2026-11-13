// src/components/Footer.tsx
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#ec74b7] text-stone-400 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center space-x-6">
          <a href="#home-section" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo Different Pipocas"
              width={133}
              height={133}
              className="h-40 w-auto object-contain"
              priority
            />
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/differentpipocas.gourmet/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/instagram-icon.png" alt="Instagram" width={32} height={32} className="opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://www.facebook.com/differentpipocasgourmet" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/facebook-icon.png" alt="Facebook" width={32} height={32} className="opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/maps-icon.png" alt="Maps" width={32} height={32} className="opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://wa.me/5585996639190?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20produto." target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <a href="tel:+5585996639190">
            <Image src="/images/icons/ligar-icon.png" alt="Ligar" width={32} height={32} className="opacity-80 hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="text-xs text-stone-500">
          <span>
            Copyright © 2026. Design by{' '}
            <a href="https://www.linkedin.com/in/mlaantonio" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-300">
              Mario Coldor
            </a>{' '}
            |{' '}
            <a href="https://webmail-seguro.com.br/differentpipocas.com.br/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-300">
              Acesso Intranet
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}