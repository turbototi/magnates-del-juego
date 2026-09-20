'use client'

import { useMemo, useState, useEffect } from 'react'
import {
  AlertTriangle,
  Check,
  Copy,
  Factory,
  MessageCircle,
  Send,
  Trash2,
  Wallet,
  X,
} from 'lucide-react'
import { ALIAS, formatARS, IG_URL, type CartItem } from '@/lib/store'

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold font-mono text-xs font-bold text-background">
      {n}
    </span>
  )
}

function CopyButton({
  text,
  label,
  className,
}: {
  text: string
  label: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      }
    } catch {}

    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error('Error al intentar copiar:', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        className??
        'inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted'
      }
    >
      {copied? (
        <Check className="size-3.5 text-dollar" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      {copied? 'Copiado' : label}
    </button>
  )
}

export function CheckoutModal({
  items,
  total,
  onCloseAction,
  onUpdateQuantityAction,
  onRemoveItemAction,
}: {
  items: CartItem[]
  total: number
  onCloseAction: () => void
  onUpdateQuantityAction: (id: string, delta: number) => void
  onRemoveItemAction: (id: string) => void
}) {
  // CORRECCIÓN: Alias visible por defecto para no frenar la venta
  const [alias, setAlias] = useState('magnates.juego.mp')
  const [titular, setTitular] = useState('Pedilo Md')

  useEffect(() => {
    const savedAlias = localStorage.getItem('magnates_alias')
    const savedTitular = localStorage.getItem('magnates_titular')
    if (savedAlias) setAlias(savedAlias)
    if (savedTitular) setTitular(savedTitular)
    // Si no hay nada guardado, usa el que te hace vender: magnates.juego.mp
    if (!savedAlias && ALIAS!== 'magnates.juego.mp') {
      // Opcional: podés forzar el alias nuevo aunque ALIAS sea otro
    }
  }, [])

  const isFounderOrder = useMemo(() => items.some(i => i.nombre.toLowerCase().includes('taza')), [items])

  const productLines = useMemo(
    () =>
      items
       .map((i) => {
          const subtotal = i.precio * i.cantidad
          const precioTexto = i.precio === 0? 'A pedido' : formatARS(subtotal)
          return `\n • ${i.nombre} ${i.cantidad > 1? `(x${i.cantidad})` : ''} - ${precioTexto}`
        })
       .join(''),
    [items],
  )

  const totalDisplay = useMemo(() => {
    const tieneSinPrecio = items.some((i) => i.precio === 0)
    if (total === 0 && tieneSinPrecio) return 'A cotizar en chat'
    if (tieneSinPrecio && total > 0) return `${formatARS(total)} + A pedido`
    return formatARS(total)
  }, [items, total])

  const template = useMemo(
    () =>
      `Hola Magnates! Soy el fundador 0X/50 - Dejo mis datos + quiero mi regalo sorpresa:
- Productos:${productLines}
- Talle (si aplica):
- Nombre y Apellido:
- Dirección de envío:
- Localidad y Provincia:
- Código Postal:
- Teléfono:
- Soy de Miramar / Fuera de Miramar: `,
    [productLines],
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/70 backdrop-blur-md animate-in fade-in duration-200 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      onClick={onCloseAction}
    >
      <div
        className="flex max-h- w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-border bg-card animate-in slide-in-from-bottom-6 duration-300 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2
            id="checkout-title"
            className="font-mono text-sm font-bold uppercase tracking-wide text-gold"
          >
            Pago y Despacho
          </h2>
          <button
            type="button"
            onClick={onCloseAction}
            aria-label="Cerrar"
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex flex-col gap-5 overflow-y-auto px-5 py-5">
          {/* Listado y gestión rápida de productos en el checkout */}
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Productos en tu pedido
            </h3>
            <div className="flex flex-col gap-2">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary p-2.5"
                >
                  <div className="flex flex-col pr-2">
                    <span className="text-xs font-semibold text-foreground">
                      {i.nombre}
                    </span>
                    <span className="text- text-muted-foreground">
                      {i.precio === 0? 'A pedido' : formatARS(i.precio * i.cantidad)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-lg border border-border bg-card px-2 py-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantityAction(i.id, -1)}
                        className="text-muted-foreground hover:text-foreground px-1 text-xs font-bold"
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>
                      <span className="font-mono text-xs font-bold text-foreground w-4 text-center">
                        {i.cantidad}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantityAction(i.id, 1)}
                        className="text-muted-foreground hover:text-foreground px-1 text-xs font-bold"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItemAction(i.id)}
                      className="flex size-7 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 transition-colors hover:bg-red-500/20"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="size-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Paso 1 - CORRECCIÓN ENVÍO GRATIS */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={1} />
              <h3 className="text-sm font-semibold text-foreground">
                Envío
              </h3>
              {isFounderOrder && (
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text- font-bold text-emerald-400">
                  🚚 ENVÍO GRATIS - Quedan 9/10
                </span>
              )}
            </div>
            <div className="flex gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3">
              <AlertTriangle
                className="mt-0.5 size-4 shrink-0 text-emerald-400"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-foreground">
                <span className="font-bold text-emerald-400">🚚 ENVÍO GRATIS - Primeros 10 fundadores 01/50 - Quedan 9/10</span>
                <br />
                Para Miramar y zona: entrega en mano. Para resto del país: gratis por Correo Argentino en la primera tanda. Después $4.500. Tu taza 01/50 entra como fundador.
              </p>
            </div>
          </section>

          {/* Paso 2 - CORRECCIÓN ALIAS VISIBLE */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={2} />
              <h3 className="text-sm font-semibold text-foreground">
                Transferencia
              </h3>
            </div>
            <div className="rounded-xl border border-border bg-secondary p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Wallet className="size-4 text-dollar" aria-hidden="true" />
                  <div className="flex flex-col leading-tight">
                    <span className="text- text-muted-foreground">
                      Alias
                    </span>
                    <span className="font-mono text-sm font-bold text-foreground">
                      {alias}
                    </span>
                  </div>
                </div>
                <CopyButton text={alias} label="Copiar" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Titular: <span className="text-foreground font-semibold">{titular}</span> - Copiar alias y transferir $35.000
              </p>
            </div>
          </section>

          {/* Paso 3 - CORRECCIÓN DATOS + REGALO */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={3} />
              <h3 className="text-sm font-semibold text-foreground">
                Datos + Regalo
              </h3>
              {isFounderOrder && (
                <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text- font-bold text-amber-400">
                  🎁 Regalo sorpresa al 01
                </span>
              )}
            </div>
            <pre className="whitespace-pre-wrap rounded-xl border border-border bg-secondary p-3 font-mono text- leading-relaxed text-foreground">
              {template}
            </pre>
            <CopyButton
              text={template}
              label="📋 Copiar mis datos + quiero regalo sorpresa"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-dollar/40 bg-dollar/10 px-3 py-2.5 text-sm font-semibold text-dollar transition-colors hover:bg-dollar/20"
            />
          </section>

          {/* Paso 4 - CORRECCIÓN FABRICACIÓN EXCLUSIVA */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={4} />
              <h3 className="text-sm font-semibold text-foreground">
                Fabricación exclusiva
              </h3>
            </div>
            <div className="flex gap-2 rounded-xl border border-border bg-secondary p-3">
              <Factory
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Tras verificar el pago, tu taza <span className="text-foreground font-bold">01/50</span> entra a taller para fabricación exclusiva. Te mando foto real de tu caja con viruta + QR historia secreta antes de despachar.
              </p>
            </div>
          </section>

          <div className="flex items-center justify-between rounded-xl border border-border bg-secondary px-3 py-2.5">
            <span className="text-xs text-muted-foreground">
              Total productos
            </span>
            <span className="font-mono text-base font-bold text-dollar">
              {totalDisplay}
            </span>
          </div>
          {isFounderOrder && (
            <p className="text-center text- font-bold text-emerald-400">
              ✅ Estás entrando como fundador 01/50 con envío gratis + regalo sorpresa
            </p>
          )}
        </div>

        <header className="flex flex-col gap-2 border-t border-border p-4">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-dollar to-gold px-4 py-3.5 text-sm font-bold text-background transition-transform active:translate-y-px"
          >
            <Send className="size-5" aria-hidden="true" />
            ENVIAR COMPROBANTE Y DATOS POR MD
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <MessageCircle className="size-4 text-muted-foreground" aria-hidden="true" />
            ¿Tenés alguna duda o consulta? Escribinos antes
          </a>
        </header>
      </div>
    </div>
  )
}
