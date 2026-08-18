'use client'

import { MessageCircle } from 'lucide-react'
import { IG_URL } from '@/lib/store'

export function FloatingChat() {
  return (
    <aside aria-label="Soporte y contacto" className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6">
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por Instagram Direct"
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-purple-950/40 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">¿Dudas? Escribinos al DM</span>
      </a>
    </aside>
  )
}