// src/app/quiz/page.tsx
import { Updock } from 'next/font/google'
import { prisma } from '@/lib/prisma'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuizClient, { QuizQuestion } from '@/components/QuizClient'

const fontManuscrita = Updock({
  weight: '400',
  subsets: ['latin'],
})

const FALLBACK_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pergunta: "1. Qual o seu 'vibe' de filme/série preferido?",
    respostaA: 'Comédia Romântica / Clássico da Sessão da Tarde',
    respostaB: 'Suspense / Ação com muita adrenalina',
    respostaC: 'Documentário / Filme Cult e de Arte',
    respostaD: 'Fantasia / Animação com um toque de nostalgia',
  },
  {
    id: 2,
    pergunta: '2. Qual o seu tipo de sobremesa favorito?',
    respostaA: 'Torta de Limão ou Mousse de Maracujá (Doce e Cítrico)',
    respostaB: 'Brigadeiro Gourmet ou Petit Gâteau (Muito Doce e Cremoso)',
    respostaC: 'Brownie com Sorvete e Calda de Chocolate Amargo',
    respostaD: 'Nenhuma, prefiro um bom petisco salgado!',
  },
  {
    id: 3,
    pergunta: "3. No quesito 'sabor', qual você prefere?",
    respostaA: 'Um toque de sal que realça o sabor (Agridoce)',
    respostaB: 'O mais doce e açucarado possível!',
    respostaC: 'Sabor forte, intenso e marcante (Umami/Apimentado)',
    respostaD: 'Sabor amargo, que equilibra a doçura',
  },
  {
    id: 4,
    pergunta: '4. Como seria o seu fim de semana perfeito?',
    respostaA: 'Um jantar elegante com um bom vinho e boa companhia.',
    respostaB: 'Ficar de pijama o dia todo maratonando séries debaixo das cobertas.',
    respostaC: 'Sair com os amigos para um barzinho animado ou balada.',
    respostaD: 'Passear ao ar livre, ir a um café charmoso ou exposição de arte.',
  },
  {
    id: 5,
    pergunta: '5. Qual bebida você escolheria para acompanhar sua pipoca?',
    respostaA: 'Uma taça de vinho tinto ou um café espresso intenso.',
    respostaB: 'Um refrigerante bem gelado ou um suco bem doce.',
    respostaC: 'Uma cerveja artesanal trincando ou um drink diferente.',
    respostaD: 'Uma água com gás e limão ou um chá gelado bem refrescante.',
  },
]

export const dynamic = 'force-dynamic'

export default async function QuizPage() {
  let questions: QuizQuestion[] = []

  try {
    questions = await prisma.quiz.findMany({
      orderBy: { id: 'asc' },
    })
  } catch (error) {
    console.error('Erro ao carregar perguntas do banco:', error)
  }

  const finalQuestions = questions.length > 0 ? questions : FALLBACK_QUESTIONS

  return (
    <div className="min-h-screen flex flex-col bg-[#fef5f9] text-stone-800 font-sans">
      <Header />

      {/* Faixa superior para dar contraste ao Header transparente */}
      <div className="bg-stone-900 pt-32 pb-16 px-4 text-center text-white">
        <h1
          className={`${fontManuscrita.className} font-bold text-5xl md:text-7xl text-white [paint-order:stroke_fill] [-webkit-text-stroke:1px_#ffffff]`}
        >
          Descubra a sua Pipoca Ideal
        </h1>
        <p className="mt-3 text-stone-300 max-w-xl mx-auto text-sm md:text-base">
          Responda a 5 perguntas rápidas e descubra qual sabor artesanal da Different Pipocas combina perfeitamente com a sua personalidade!
        </p>
      </div>

      {/* Área do Quiz */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 -mt-8">
        <QuizClient questions={finalQuestions} />
      </main>

      <Footer />
    </div>
  )
}