'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { formatARS, type Product } from '@/lib/store'

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (p: Product) => void
}) {
  // El truco: agarramos el texto con comas de tu panel y lo convertimos en la galería de fotos
  const gallery = product.imagen.includes(',')
    ? product.imagen.split(',').map(img => img.trim())
    : [product.imagen]

  // Corregido: inicializamos con la primera foto de la lista de forma limpia
  const [activeImg, setActiveImg] = useState(gallery[0] || product.imagen)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImg || '/placeholder.svg'}
          alt={product.nombre}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {gallery.length > 1 ? (
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/70 to-transparent p-2 z-10">
            {gallery.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImg(img)}
                aria-label={`Ver imagen ${i + 1} de ${product.nombre}`}
                aria-pressed={activeImg === img}
                className={`size-8 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                  activeImg === img
                    ? 'border-gold'
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img || '/placeholder.svg'}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <h3 className="text-sm font-semibold leading-tight text-balance text-foreground">
          {product.nombre}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.descripcion}
        </p>
        <div className="mt-auto flex flex-col gap-2 pt-1">
          <span className="font-mono text-lg font-bold text-dollar">
            {product.precio === 0 ? 'A pedido' : formatARS(product.precio)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-active active:translate-y-px hover:bg-primary/90"
          >
            <Plus className="size-4" aria-hidden="true" />
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
