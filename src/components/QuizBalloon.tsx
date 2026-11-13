// src/components/QuizBalloon.tsx
import Link from 'next/link'

export default function QuizBalloon() {
  return (
    <Link
      href="/quiz"
      aria-label="Faça nosso quiz"
      className="fixed left-4 bottom-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-2xl rounded-bl-none bg-stone-900/60 hover:bg-[#ec74b7]/90 backdrop-blur-md text-white border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <span className="text-lg group-hover:animate-bounce">🍿</span>
      <span className="text-sm font-bold tracking-wide">
        Faça nosso quiz
      </span>
    </Link>
  )
}