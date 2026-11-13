// src/components/QuizClient.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface QuizQuestion {
  id: number
  pergunta: string
  respostaA: string
  respostaB: string
  respostaC: string
  respostaD: string
}

type FlavorKey = 'caramelo_flor_sal' | 'leite_ninho' | 'cheddar_picante' | 'chocolate_belga'

interface FlavorResult {
  name: string
  emoji: string
  description: string
}

const RESULTS: Record<FlavorKey, FlavorResult> = {
  caramelo_flor_sal: {
    name: 'Caramelo e Flor de Sal',
    emoji: '🧂🍬',
    description:
      'Você é sofisticado e adora um equilíbrio perfeito. Seu sabor é a união do doce e do salgado, ideal para acompanhar um bom vinho ou maratonar aquela série de drama.',
  },
  leite_ninho: {
    name: 'Chocolate Branco e Leite Ninho',
    emoji: '🥛🤍',
    description:
      'Você é nostálgico e busca conforto! Seu sabor é doce, cremoso e lembra a infância, perfeito para ser devorado enquanto assiste a uma comédia romântica.',
  },
  cheddar_picante: {
    name: 'Cheddar Picante e Páprica',
    emoji: '🔥🧀',
    description:
      'Você é aventureiro e cheio de energia! Seu sabor é intenso, salgado e com um toque de ardência, feito para quem assiste a filmes de ação e não tem medo de inovar.',
  },
  chocolate_belga: {
    name: 'Chocolate Belga 70% Cacau',
    emoji: '🍫✨',
    description:
      "Você é clássico, mas com um toque de requinte. Seu sabor é o chocolate puro, intenso e gourmet, ideal para uma noite de cinema 'cult' ou um momento de autocuidado.",
  },
}

// Mapeamento de pontuação por índice da pergunta (0 a 4) e alternativa (A, B, C, D)
const SCORE_MATRIX: Record<'A' | 'B' | 'C' | 'D', Partial<Record<FlavorKey, number>>>[] = [
  // Pergunta 1
  {
    A: { leite_ninho: 3, chocolate_belga: 1 },
    B: { cheddar_picante: 3, caramelo_flor_sal: 1 },
    C: { chocolate_belga: 3, caramelo_flor_sal: 2 },
    D: { leite_ninho: 2, cheddar_picante: 1 },
  },
  // Pergunta 2
  {
    A: { caramelo_flor_sal: 3, cheddar_picante: 1 },
    B: { leite_ninho: 3, chocolate_belga: 2 },
    C: { chocolate_belga: 3, caramelo_flor_sal: 1 },
    D: { cheddar_picante: 3, caramelo_flor_sal: 1 },
  },
  // Pergunta 3
  {
    A: { caramelo_flor_sal: 3, cheddar_picante: 2 },
    B: { leite_ninho: 3 },
    C: { cheddar_picante: 3, chocolate_belga: 1 },
    D: { chocolate_belga: 3, caramelo_flor_sal: 1 },
  },
  // Pergunta 4
  {
    A: { chocolate_belga: 3, caramelo_flor_sal: 2 },
    B: { leite_ninho: 3 },
    C: { cheddar_picante: 3 },
    D: { caramelo_flor_sal: 3, chocolate_belga: 1 },
  },
  // Pergunta 5
  {
    A: { chocolate_belga: 3 },
    B: { leite_ninho: 3, caramelo_flor_sal: 1 },
    C: { cheddar_picante: 3 },
    D: { caramelo_flor_sal: 3, leite_ninho: 1 },
  },
]

const INITIAL_SCORES: Record<FlavorKey, number> = {
  caramelo_flor_sal: 0,
  leite_ninho: 0,
  cheddar_picante: 0,
  chocolate_belga: 0,
}

export default function QuizClient({ questions }: { questions: QuizQuestion[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scores, setScores] = useState<Record<FlavorKey, number>>(INITIAL_SCORES)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentIndex]
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100)

  function handleSelectOption(optionKey: 'A' | 'B' | 'C' | 'D') {
    const questionWeights = SCORE_MATRIX[currentIndex] ?? {
      A: { caramelo_flor_sal: 2 },
      B: { leite_ninho: 2 },
      C: { cheddar_picante: 2 },
      D: { chocolate_belga: 2 },
    }

    const earned = questionWeights[optionKey] || {}
    const updatedScores = { ...scores };

    (Object.keys(earned) as FlavorKey[]).forEach((flavor) => {
      updatedScores[flavor] = (updatedScores[flavor] || 0) + (earned[flavor] || 0)
    })

    setScores(updatedScores)

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setIsFinished(true)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setScores(INITIAL_SCORES)
    setIsFinished(false)
  }

  function getWinningFlavor(): FlavorResult {
    let bestMatch: FlavorKey = 'caramelo_flor_sal'
    let maxScore = -1

    ;(Object.keys(scores) as FlavorKey[]).forEach((flavor) => {
      if (scores[flavor] > maxScore) {
        maxScore = scores[flavor]
        bestMatch = flavor
      }
    })

    return RESULTS[bestMatch]
  }

  if (isFinished) {
    const winner = getWinningFlavor()
    const whatsappMessage = encodeURIComponent(
      `Olá! Fiz o quiz no site da Different Pipocas e meu sabor ideal deu: *${winner.name}*! Gostaria de fazer um pedido.`
    )

    return (
      <div className="bg-white border-4 border-[#ec74b7] rounded-3xl p-8 md:p-12 shadow-xl text-center space-y-6 max-w-2xl mx-auto">
        <span className="inline-block bg-[#fef5f9] text-[#ec74b7] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#ec74b7]/30">
          Seu Match Perfeito
        </span>

        <div className="text-6xl">{winner.emoji}</div>

        <h2 className="text-3xl md:text-4xl font-black text-stone-900">
          {winner.name}
        </h2>

        <p className="text-stone-600 text-base md:text-lg leading-relaxed">
          {winner.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/5585996639190?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Pedir esse sabor no WhatsApp
          </a>

          <button
            onClick={handleRestart}
            className="bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-8 rounded-full transition-colors"
          >
            Refazer Quiz
          </button>
        </div>

        <div className="pt-2">
          <Link href="/" className="text-sm text-[#ec74b7] hover:underline font-semibold">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  const options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[] = [
    { key: 'A', text: currentQuestion.respostaA },
    { key: 'B', text: currentQuestion.respostaB },
    { key: 'C', text: currentQuestion.respostaC },
    { key: 'D', text: currentQuestion.respostaD },
  ]

  return (
    <div className="bg-white border-4 border-[#ec74b7] rounded-3xl p-6 md:p-10 shadow-xl max-w-2xl mx-auto space-y-8">
      {/* Barra de Progresso */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-500">
          <span>
            Pergunta {currentIndex + 1} de {questions.length}
          </span>
          <span className="text-[#ec74b7]">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ec74b7] transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 leading-snug">
        {currentQuestion.pergunta}
      </h2>

      {/* Alternativas */}
      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => handleSelectOption(opt.key)}
            className="w-full text-left p-4 rounded-2xl border-2 border-stone-200 hover:border-[#ec74b7] hover:bg-[#fef5f9] transition-all flex items-center gap-4 group"
          >
            <span className="w-9 h-9 rounded-full bg-stone-100 group-hover:bg-[#ec74b7] text-stone-700 group-hover:text-white font-black flex items-center justify-center flex-shrink-0 transition-colors">
              {opt.key}
            </span>
            <span className="font-medium text-stone-800 group-hover:text-stone-950">
              {opt.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}