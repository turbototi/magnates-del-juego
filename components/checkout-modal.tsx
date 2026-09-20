'use client'

import { useMemo, useState, useEffect } from 'react'
import { AlertTriangle, Check, Copy, Factory, MessageCircle, Send, Trash2, Wallet, X } from 'lucide-react'
import { formatARS, IG_URL, type CartItem, FOUNDERS_TOTAL, loadFoundersRemaining, saveFoundersRemaining } from '@/lib/store'

function StepBadge({ n }: { n: number }) {
  return <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-400 font-mono text-xs font-bold text-black">{n}</span>
}

function CopyButton({ text, label, className }: { text: string; label: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(text) } catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  return <button type="button" onClick={copy} className={className?? 'inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs font-semibold text-white'}>{copied? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}{copied? 'Copiado' : label}</button>
}

export function CheckoutModal({ items, total, onCloseAction, onUpdateQuantityAction, onRemoveItemAction }: {
  items: CartItem[]; total: number; onCloseAction: () => void; onUpdateQuantityAction: (id: string, delta: number) => void; onRemoveItemAction: (id: string) => void
}) {
  const [alias, setAlias] = useState('magnates.juego.mp')
  const [titular, setTitular] = useState('Pedilo Md')
  const [quedan, setQuedan] = useState(9)

  useEffect(() => {
    const a = localStorage.getItem('magnates_alias'); if (a) setAlias(a)
    const t = localStorage.getItem('magnates_titular'); if (t) setTitular(t)
    setQuedan(loadFoundersRemaining())
  }, [])

  const handleEnviarComprobante = () => {
    if (quedan > 0) {
      const nuevo = quedan - 1
      setQuedan(nuevo)
      saveFoundersRemaining(nuevo)
      // Dispara evento para que magnates-app.tsx se actualice en toda la web
      window.dispatchEvent(new Event('magnates-founders-update'))
    }
  }

  const isFounder = useMemo(() => items.some(i => i.nombre.toLowerCase().includes('taza')), [items])
  const productLines = useMemo(() => items.map(i => `\n • ${i.nombre} ${i.cantidad > 1? `(x${i.cantidad})` : ''} - ${i.precio === 0? 'A pedido' : formatARS(i.precio * i.cantidad)}`).join(''), [items])
  const totalDisplay = useMemo(() => {
    const sinPrecio = items.some(i => i.precio === 0)
    if (total === 0 && sinPrecio) return 'A cotizar en chat'
    if (sinPrecio && total > 0) return `${formatARS(total)} + A pedido`
    return formatARS(total)
  }, [items, total])
  const template = useMemo(() => `Hola Magnates! Soy el fundador 0X/50 - Dejo mis datos + quiero mi regalo sorpresa:
- Productos:${productLines}
- Talle (si aplica):
- Nombre y Apellido:
- Dirección de envío:
- Localidad y Provincia:
- Código Postal:
- Teléfono:`, [productLines])

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={onCloseAction}>
      <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="w-full max-w-md bg-zinc-900 rounded-t- sm:rounded- border border-zinc-800" onClick={e => e.stopPropagation()}>

          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-4 rounded-t-">
            <h2 className="font-mono text-sm font-bold uppercase text-amber-400">Pago y Despacho</h2>
            <button onClick={onCloseAction} className="flex size-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400"><X className="size-5" /></button>
          </div>

          <div className="flex flex-col gap-6 px-5 py-6">
            <section className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase text-zinc-500">Productos</h3>
              {items.map(i => (
                <div key={i.id} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/50 p-2.5">
                  <div className="flex flex-col"><span className="text-xs font-semibold text-white">{i.nombre}</span><span className="text- text-zinc-400">{i.precio === 0? 'A pedido' : formatARS(i.precio * i.cantidad)}</span></div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-1">
                      <button onClick={() => onUpdateQuantityAction(i.id, -1)} className="px-1 text-zinc-400">-</button>
                      <span className="w-4 text-center font-mono text-xs font-bold text-white">{i.cantidad}</span>
                      <button onClick={() => onUpdateQuantityAction(i.id, 1)} className="px-1 text-zinc-400">+</button>
                    </div>
                    <button onClick={() => onRemoveItemAction(i.id)} className="flex size-7 items-center justify-center rounded-lg bg-red-500/10 text-red-500"><Trash2 className="size-3.5" /></button>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <StepBadge n={1} />
                <h3 className="text-sm font-semibold text-white">Envío</h3>
                {isFounder && <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text- font-bold text-emerald-400">🚚 ENVÍO GRATIS - Quedan {quedan}/{FOUNDERS_TOTAL}</span>}
              </div>
              <div className="flex gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                <AlertTriangle className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                <p className="text-xs leading-relaxed text-zinc-100">
                  <span className="font-bold text-emerald-400">ENVÍO GRATIS - Primeros 10 fundadores 01/50</span>
                  <br />
                  Envío gratis a todo el país por Correo Argentino en la primera tanda. Tu taza 01/50 entra como fundador.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><StepBadge n={2} /><h3 className="text-sm font-semibold text-white">Transferencia</h3></div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-800 p-3">
                <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Wallet className="size-4 text-emerald-400" /><div className="flex flex-col"><span className="text- text-zinc-400">Alias</span><span className="font-mono text-sm font-bold text-white">{alias}</span></div></div><CopyButton text={alias} label="Copiar" /></div>
                <p className="mt-2 text-xs text-zinc-400">Titular: <span className="text-white font-semibold">{titular}</span> - Transferir $35.000</p>
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><StepBadge n={3} /><h3 className="text-sm font-semibold text-white">Datos + Regalo</h3><span className="rounded-full bg-amber-400/20 px-2 py-0.5 text- font-bold text-amber-400">🎁 Regalo al 01</span></div>
              <pre className="whitespace-pre-wrap rounded-xl border border-zinc-800 bg-zinc-800 p-3 font-mono text- leading-relaxed text-zinc-100">{template}</pre>
              <CopyButton text={template} label="📋 Copiar mis datos + quiero regalo sorpresa" className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-3 text-sm font-semibold text-emerald-400" />
            </section>

            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><StepBadge n={4} /><h3 className="text-sm font-semibold text-white">Fabricación exclusiva</h3></div>
              <div className="flex gap-2 rounded-xl border border-zinc-800 bg-zinc-800 p-3"><Factory className="size-4 shrink-0 text-zinc-400 mt-0.5" /><p className="text-xs leading-relaxed text-zinc-400">Tras verificar el pago, tu taza <span className="text-white font-bold">01/50</span> entra a taller para fabricación exclusiva. Te mando foto real de tu caja con viruta + QR historia secreta antes de despachar.</p></div>
            </section>

            <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800 px-3 py-2.5"><span className="text-xs text-zinc-400">Total</span><span className="font-mono text-base font-bold text-emerald-400">{totalDisplay}</span></div>
          </div>

          <div className="flex flex-col gap-2 border-t border-zinc-800 bg-zinc-900 p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" onClick={handleEnviarComprobante} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-400 px-4 py-3.5 text-sm font-bold text-black"><Send className="size-5" />ENVIAR COMPROBANTE Y DATOS POR MD</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-xs font-semibold text-white"><MessageCircle className="size-4" />¿Tenés alguna duda? Escribinos antes</a>
          </div>
        </div>
      </div>
    </div>
  )
}
