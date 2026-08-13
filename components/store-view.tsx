'use client'

import { useMemo, useState } from 'react'
import { Zap } from 'lucide-react'
import type { Product } from '@/lib/store'
import { CategoryFilter, type Filter } from '@/components/category-filter'
import { ProductCard } from '@/components/product-card'

export function StoreView({
  products,
  onAdd,
  onOpenAdmin,
}: {
  products: Product[]
  onAdd: (p: Product) => void
  onOpenAdmin: () => void
}) {
  const [filter, setFilter] = useState<Filter>('todos')
  const [logoClicks, setLogoClicks] = useState(0)

  function handleLogoClick() {
    const next = logoClicks + 1
    if (next >= 4) {
      setLogoClicks(0)
      onOpenAdmin()
    } else {
      setLogoClicks(next)
    }
  }

  const filtered = useMemo(
    () =>
      filter === 'todos'
        ? products
        : products.filter((p) => p.categoria === filter),
    [products, filter],
  )

  return (
    <>
      {/* Barra notificación */}
      <div className="flex items-center justify-center gap-1.5 bg-primary px-4 py-2 text-center text-[11px] font-medium leading-tight text-primary-foreground">
        <Zap className="size-3.5 shrink-0" aria-hidden="true" />
        <span className="text-pretty">
          Productos exclusivos fabricados bajo pedido para la comunidad de
          Magnates del Juego
        </span>
      </div>

      <main className="mx-auto max-w-md px-4 pb-32">
        {/* Hero */}
        <header className="flex flex-col items-center gap-3 py-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-magnates.png"
            alt="Logo de Magnates del Juego"
            onClick={handleLogoClick}
            className="mx-auto h-32 w-32 cursor-pointer object-cover select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] active:scale-95 transition-transform"
            title="Magnates del Juego"
          />
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Magnates del Juego
          </h1>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold">
            Deportes • Dinero • Estrategia 📈💰
          </p>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Merchandising premium para quienes juegan a lo grande. Piezas
            exclusivas, fabricadas a demanda para la comunidad.
          </p>
        </header>

        {/* Banner publicitario */}
        <section
          aria-label="Campaña destacada"
          className="relative mb-4 overflow-hidden rounded-2xl border border-gold/25"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/banner-auto.webp"
            alt="Gorra y vaso térmico de Magnates del Juego en el interior de un auto deportivo de lujo"
            className="h-56 w-full object-cover sm:h-64"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              Colección Oficial
            </p>
            <h2 className="mt-1 text-balance text-lg font-bold leading-snug text-white drop-shadow">
              La indumentaria elegida por quienes conocen el negocio
            </h2>
          </div>
        </section>

        {/* Filtros */}
        <div className="sticky top-0 z-20 -mx-4 bg-background/90 px-4 py-3 backdrop-blur">
          <CategoryFilter active={filter} onChange={setFilter} />
        </div>

        {/* Catálogo */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 pt-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No hay productos en esta categoría.
          </p>
        )}

        {/* Footer limpio */}
        <footer className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-6 text-center">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Magnates del Juego · Tienda Oficial
          </p>
        </footer>
      </main>
    </>
  )
}