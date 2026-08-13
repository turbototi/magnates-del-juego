'use client'

import { CreditCard, ShoppingBag } from 'lucide-react'
import { formatARS } from '@/lib/store'

export function CartBar({
  count,
  total,
  onCheckout,
}: {
  count: number
  total: number
  onCheckout: () => void
}) {
  if (count === 0) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="mx-auto max-w-md p-3">
        <button
          type="button"
          onClick={onCheckout}
          aria-label="Abrir formulario de pago y despacho"
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-primary/40 bg-primary px-4 py-3 text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:translate-y-px"
        >
          <span className="flex items-center gap-2">
            <span className="relative inline-flex">
              <ShoppingBag className="size-5" aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-background">
                {count}
              </span>
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[11px] font-medium opacity-80">Total</span>
              <span className="font-mono text-base font-bold">
                {total === 0 ? 'A pedido' : formatARS(total)}
              </span>
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            Iniciar Pedido
            <CreditCard className="size-4" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  )
}