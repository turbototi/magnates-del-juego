'use client'

import { useState } from 'react'
import { Plus, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatARS, type Product } from '@/lib/store'

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (p: Product) => void
}) {
  // El truco de las comas para la galería
  const gallery = product.imagen.includes(',')
    ? product.imagen.split(',').map(img => img.trim())
    : [product.imagen]

  const [activeImg, setActiveImg] = useState(gallery[0] || product.imagen)
  const [zoomOpen, setZoomOpen] = useState(false)
  const [zoomIdx, setZoomIdx] = useState(0)

  // Función para abrir la foto en gigante
  function openZoom(imgUrl: string) {
    const idx = gallery.indexOf(imgUrl)
    setZoomIdx(idx >= 0 ? idx : 0)
    setZoomOpen(true)
  }

  // Pasar fotos dentro de la pantalla gigante
  function nextZoomImg(e: React.MouseEvent) {
    e.stopPropagation()
    setZoomIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  function prevZoomImg(e: React.MouseEvent) {
    e.stopPropagation()
    setZoomIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
        {/* Contenedor de imagen principal */}
        <div className="relative aspect-square overflow-hidden bg-secondary cursor-zoom-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeImg || '/placeholder.svg'}
            alt={product.nombre}
            onClick={() => openZoom(activeImg)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Miniaturas de abajo */}
          {gallery.length > 1 ? (
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 z-10 overflow-x-auto">
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

        {/* Detalles del producto */}
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

      {/* MODAL DE PANTALLA COMPLETA (PANTALLA GIGANTE CON FLECHAS) */}
      {zoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setZoomOpen(false)}
        >
          {/* Botón de Cerrar */}
          <button
            onClick={() => setZoomOpen(false)}
            className="absolute top-4 right-4 z-50 rounded-full bg-zinc-900/80 p-2.5 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="size-6" />
          </button>

          {/* Contenedor central de la foto gigante */}
          <div className="relative max-h-[80vh] max-w-full sm:max-w-xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gallery[zoomIdx] || '/placeholder.svg'}
              alt={product.nombre}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl select-none"
            />

            {/* Flechas de navegación en grande (Solo si hay más de 1 imagen) */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevZoomImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/90 p-3 text-white hover:bg-zinc-800 active:scale-90 transition-all"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={nextZoomImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/90 p-3 text-white hover:bg-zinc-800 active:scale-90 transition-all"
                >
                  <ChevronRight className="size-6" />
                </button>

                {/* Contador de imágenes en la barra inferior (Ej: 1 / 3) */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-zinc-500">
                  {zoomIdx + 1} / {gallery.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
