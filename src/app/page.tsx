// src/app/page.tsx
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizBalloon from '@/components/QuizBalloon'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      <Header />

      <QuizBalloon />

      {/* Hero Section com zoom no scroll */}
      <HeroSection />



      {/* Quem Somos */}

      <section id="about" className="py-20 bg-stone-100/70">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div className="space-y-4 text-stone-700 leading-relaxed">

      <h2 className="text-3xl font-bold text-stone-900 mb-6">Nossa Empresa</h2>

      <p>

      Na Different Pipocas, acreditamos que cada momento especial merece um sabor único. Nascemos com o propósito de transformar a tradicional pipoca em uma verdadeira experiência gourmet — com combinações surpreendentes, ingredientes de alta qualidade e um toque de criatividade em cada receita.

      </p>

      <p>

      Mais do que um doce, oferecemos uma lembrança afetiva, personalizada para eventos, festas e comemorações empresariais. Seja em aniversários, casamentos, confraternizações ou ações promocionais, nossas pipocas doces são feitas sob medida para encantar os olhos e o paladar.

      </p>

      <p>

      Cada detalhe é pensado com carinho: da escolha dos sabores à embalagem personalizada que combina com o estilo da sua celebração. Nosso compromisso é levar alegria em forma de pipoca, com identidade, sabor e sofisticação.

      </p>

      <p className="font-semibold text-amber-900">

      Different Pipocas. Porque o seu evento merece ser diferente.

      </p>



      <div className="pt-6 border-t border-stone-200">

      <h3 className="text-xl font-bold text-stone-900 mb-2">Por que nos escolher?</h3>

      <p>

      Porque na Different Pipocas, cada detalhe importa. Nascemos com o propósito de transformar a tradicional pipoca em uma verdadeira experiência gourmet — com combinações surpreendentes, ingredientes de alta qualidade e um toque de criatividade em cada receita.

      </p>

      </div>

      </div>



      <div>

      <Image

      src="/images/about/about1.jpg"

      alt="Detalhes das Pipocas Gourmet Different"

      width={600}

      height={400}

      className="rounded-2xl shadow-lg w-full h-auto object-cover"

      />

      </div>

      </div>

      </div>

      </section>



      {/* Portfólio */}

      <section id="portfolio" className="relative py-28 bg-[#fef5f9] overflow-hidden">

      <style>{`

      @keyframes marquee-left {

      0% { transform: translateX(0%); }

      100% { transform: translateX(-50%); }

      }

      @keyframes marquee-right {

      0% { transform: translateX(-50%); }

      100% { transform: translateX(0%); }

      }

      .animate-marquee-left {

      display: flex;

      width: max-content;

      animation: marquee-left 40s linear infinite;

      }

      .animate-marquee-right {

      display: flex;

      width: max-content;

      animation: marquee-right 40s linear infinite;

      }

      `}</style>

      {/* Background Animado Inclinado */}

      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-6 pointer-events-none -rotate-6 scale-[1.35] opacity-[0.15]">

      {/* Linha 1 - Desliza para a esquerda */}

      <div className="animate-marquee-left text-[120px] font-black text-pink-900 uppercase tracking-tighter whitespace-nowrap">

      {"DIFFERENT PIPOCAS • ".repeat(15)}

      </div>

      {/* Linha 2 - Desliza para a direita */}

      <div className="animate-marquee-right text-[120px] font-black text-[#ec74b7] uppercase tracking-tighter whitespace-nowrap">

      {"DIFFERENT PIPOCAS • ".repeat(15)}

      </div>

      {/* Linha 3 - Desliza para a esquerda */}

      <div className="animate-marquee-left text-[120px] font-black text-pink-900 uppercase tracking-tighter whitespace-nowrap">

      {"DIFFERENT PIPOCAS • ".repeat(15)}

      </div>

      </div>



      {/* Conteúdo Frontal (Cards) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-4xl md:text-5xl font-black text-center text-[#ec74b7] mb-16 tracking-tight">

      Nosso Portfólio

      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[

      { img: '/images/portfolio/folio01.jpg', title: 'Especiais', desc: 'Para todo tipo de evento.' },

      { img: '/images/portfolio/folio02.jpg', title: 'Coloridas', desc: 'Pipoca Gourmet deliciosas e coloridas.' },

      { img: '/images/portfolio/folio03.jpg', title: 'Personalizadas', desc: 'Sua festa com a sua personalidade.' },

      { img: '/images/portfolio/folio04.jpg', title: 'Deliciosas', desc: 'Sabores surpreendentes para todos os gostos.' },

      { img: '/images/portfolio/folio05.jpg', title: 'Leite Ninho', desc: 'Um pedacinho do céu na sua boca.' },

      { img: '/images/portfolio/folio06.jpg', title: 'Com chocolate', desc: 'Irresistível sabor que derrete na boca.' },

      { img: '/images/portfolio/folio07.jpg', title: 'Pipoca semi luxo acrílica', desc: '' },

      { img: '/images/portfolio/folio08.jpg', title: 'Pipoca Luxo Premium', desc: 'Linda, em uma embalagem refinada.' },

      ].map((item, index) => (

      <div

      key={index}

      className="bg-white border-[4px] border-[#ec74b7] rounded-t-full rounded-b-3xl p-3 shadow-xl hover:-translate-y-3 transition-transform duration-300 flex flex-col items-center text-center"

      >

      {/* Janela da Imagem (Topo arredondado, base semi-quadrada) */}

      <div className="w-full aspect-square rounded-t-full rounded-b-2xl overflow-hidden bg-stone-100">

      <Image

      src={item.img}

      alt={item.title}

      width={400}

      height={300}

      className="w-full h-full object-cover"

      />

      </div>



      {/* Textos do Card */}

      <div className="pt-6 pb-4 space-y-1 px-2 flex-1 flex flex-col justify-center">

      <h3 className="font-black text-xl text-stone-900 uppercase tracking-wide">

      {item.title}

      </h3>

      {item.desc && (

      <p className="text-sm text-stone-600 font-medium leading-tight">

      {item.desc}

      </p>

      )}

      </div>

      </div>

      ))}

      </div>

      </div>

      </section>



      {/* Equipe / Chef */}

      <section id="team" className="py-20 bg-amber-50/40 overflow-hidden">


      {/* CSS para a animação do carrossel infinito da equipe */}

      <style>{`

      @keyframes carousel-left {

      0% { transform: translateX(0%); }

      100% { transform: translateX(-50%); }

      }

      .animate-carousel {

      display: flex;

      width: max-content;

      animation: carousel-left 20s linear infinite;

      }

      /* Pausa a animação quando o mouse estiver em cima */

      .animate-carousel:hover {

      animation-play-state: paused;

      }

      `}</style>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">


      {/* Carrossel de Imagens Animado */}

      <div className="relative w-full overflow-hidden">

      <div className="animate-carousel gap-6 px-4">

      {/* Array duplicado para garantir a rolagem contínua sem quebras */}

      {[

      'team01.jpg', 'team02.jpg', 'team03.jpg', 'team04.jpg',

      'team01.jpg', 'team02.jpg', 'team03.jpg', 'team04.jpg'

      ].map((file, i) => (

      <div key={i} className="flex-shrink-0 w-64 md:w-80">

      <Image

      src={`/images/team/${file}`}

      alt={`Foto da equipe`}

      width={250}

      height={250}

      className="w-60 aspect-[4/5] object-cover rounded-t-full rounded-b-2xl shadow-lg "

      />

      </div>

      ))}

      </div>

      </div>



      {/* Texto sobre a Chef */}

      <div className="max-w-3xl mx-auto text-center space-y-4">

      <h2 className="text-3xl font-bold text-stone-900">Conheça nossa chef</h2>

      <p className="text-stone-700 leading-relaxed text-sm md:text-base">

      Por trás de cada receita da Different Pipocas está a criatividade e o talento da Chef Lorena, apaixonada por transformar ingredientes simples em experiências inesquecíveis. Com paixão em confeitaria e uma trajetória marcada pela dedicação à arte gourmet, ela encontrou na pipoca um universo de possibilidades. Sua inspiração vem das cores, sabores e emoções que cercam cada comemoração. É ela quem desenvolve combinações únicas, testando novos ingredientes, equilibrando texturas e sempre buscando surpreender com algo novo — sem abrir mão da qualidade e do carinho em cada preparo. Mais do que uma chef, ela é uma criadora de momentos doces e especiais. Seu objetivo é simples: fazer da Different Pipocas uma marca que desperta sorrisos, une pessoas e deixa lembranças gostosas em cada evento.

      </p>

      </div>


      </div>

      </section>

{/* Contato */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-stone-900">Entre em contato</h2>
            <hr className="w-16 mx-auto border-gray-600 border-2 rounded" />
            <p className="font-semibold text-stone-800">Deixe seu comentário, dúvida ou sugestão!</p>
            <p className="text-sm text-stone-600">
              Sua opinião é muito importante para nós. Escolha o canal de sua preferência e fale diretamente com a nossa equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
{/* Botões de Ação Direta */}
            <div className="bg-gray-600 p-8 rounded-2xl border border-stone-200 flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-bold text-white text-center mb-4">Como prefere falar com a gente?</h3>
              
              <a
                href="https://wa.me/5585996639190?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <Image 
                  src="/images/icons/whatsapp-icon.png" 
                  alt="WhatsApp" 
                  width={24} 
                  height={24} 
                  className="brightness-0 invert" 
                />
                Chamar no WhatsApp
              </a>

              <a
                href="mailto:contato@differentpipocas.com.br"
                className="flex items-center justify-center gap-3 w-full bg-[#ec74b7] hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-2xl leading-none">✉</span>
                Enviar E-mail
              </a>
            </div>

            {/* Informações da Empresa */}
            <div className="flex flex-col justify-center space-y-4 p-8 bg-gray-300 text-gray-500 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-black">Different Pipocas Gourmet</h3>
              <p className="text-pink-600">Passaré - Fortaleza, Ceará</p>
              <p>
                <a href="mailto:contato@differentpipocas.com.br" className="underline hover:text-pink-600 transition-colors">
                  contato@differentpipocas.com.br
                </a>
              </p>
              <p>
                <a href="tel:+5585996639190" className="underline hover:text-pink-600 transition-colors">
                  (85) 99663-9190
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}