'use client'

import { useMemo, useState, useEffect } from 'react'
import {
  AlertTriangle,
  Check,
  Copy,
  Factory,
  MessageCircle,
  Send,
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
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {
          setCopied(false)
        }
      }}
      className={
        className ??
        'inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted'
      }
    >
      {copied ? (
        <Check className="size-3.5 text-dollar" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      {copied ? 'Copiado' : label}
    </button>
  )
}

export function CheckoutModal({
  items,
  total,
  onClose,
}: {
  items: CartItem[]
  total: number
  onClose: () => void
}) {
  // Estados para cargar el Alias y el Titular configurados en el Admin
  const [alias, setAlias] = useState(ALIAS)
  const [titular, setTitular] = useState('Tu Nombre Completo')

  useEffect(() => {
    const savedAlias = localStorage.getItem('magnates_alias')
    const savedTitular = localStorage.getItem('magnates_titular')
    if (savedAlias) setAlias(savedAlias)
    if (savedTitular) setTitular(savedTitular)
  }, [])

  const productLines = useMemo(
    () =>
      items
        .map(
          (i) =>
            `${i.nombre}${i.cantidad > 1 ? ` x${i.cantidad}` : ''}`,
        )
        .join(', '),
    [items],
  )

  const template = useMemo(
    () =>
      `Hola Magnates! Dejo mis datos para el pedido:
- Productos: ${productLines}
- Talle (si aplica): 
- Nombre y Apellido: 
- Dirección de envío: 
- Localidad y Provincia: 
- Código Postal: 
- Teléfono: `,
    [productLines],
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/70 backdrop-blur-md animate-in fade-in duration-200 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-border bg-card animate-in slide-in-from-bottom-6 duration-300 sm:rounded-3xl"
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
            onClick={onClose}
            aria-label="Cerrar"
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex flex-col gap-5 overflow-y-auto px-5 py-5">
          {/* Paso 1 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={1} />
              <h3 className="text-sm font-semibold text-foreground">
                Acordar envío
              </h3>
            </div>
            <div className="flex gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3">
              <AlertTriangle
                className="mt-0.5 size-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-foreground">
                <span className="font-bold text-gold">IMPORTANTE:</span> El
                precio actual corresponde únicamente al producto. El costo de
                envío se calculará y sumará al total en el chat de Instagram
                según tu código postal y localidad.
              </p>
            </div>
          </section>

          {/* Paso 2 */}
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
                    <span className="text-[11px] text-muted-foreground">
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
                Titular: <span className="text-foreground">{titular}</span>
              </p>
            </div>
          </section>

          {/* Paso 3 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={3} />
              <h3 className="text-sm font-semibold text-foreground">
                Plantilla de datos
              </h3>
            </div>
            <pre className="whitespace-pre-wrap rounded-xl border border-border bg-secondary p-3 font-mono text-[11px] leading-relaxed text-foreground">
              {template}
            </pre>
            <CopyButton
              text={template}
              label="📋 Copiar mis datos de envío"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-dollar/40 bg-dollar/10 px-3 py-2.5 text-sm font-semibold text-dollar transition-colors hover:bg-dollar/20"
            />
          </section>

          {/* Paso 4 */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <StepBadge n={4} />
              <h3 className="text-sm font-semibold text-foreground">
                Fabricación
              </h3>
            </div>
            <div className="flex gap-2 rounded-xl border border-border bg-secondary p-3">
              <Factory
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Tras verificar el pago del producto + envío en el chat, tu
                pedido entra a taller para su fabricación exclusiva y posterior
                despacho.
              </p>
            </div>
          </section>

          <div className="flex items-center justify-between rounded-xl border border-border bg-secondary px-3 py-2.5">
            <span className="text-xs text-muted-foreground">
              Total productos
            </span>
            <span className="font-mono text-base font-bold text-dollar">
              {total === 0 ? 'A pedido' : formatARS(total)}
            </span>
          </div>
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