'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ImageUp,
  Pencil,
  Plus,
  Save,
  Trash2,
  Wallet,
  X,
} from 'lucide-react'
import {
  CATEGORIES,
  formatARS,
  type Category,
  type Product,
} from '@/lib/store'

const inputClass =
  'w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary'

const labelClass = 'text-xs font-medium text-muted-foreground'

function categoryLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id
}

function ImageField({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    // Evitamos convertir a Base64 para no romper el localStorage con archivos pesados.
    // Solo sugerimos la ruta local basándonos en el nombre del archivo seleccionado.
    onChange(`/productos/${file.name}`)
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={value.startsWith('data:') ? '' : value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ej: /productos/Chomba.png"
        className={inputClass}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <ImageUp className="size-3.5" aria-hidden="true" />
          Ruta automática de archivo
        </button>
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value || '/placeholder.svg'}
            alt="Vista previa"
            className="size-10 rounded-lg border border-border object-cover"
          />
        ) : null}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </div>
    </div>
  )
}

const emptyForm = {
  nombre: '',
  descripcion: '',
  precio: '',
  categoria: 'remeras' as Category,
  imagen: '',
}

export function AdminPanel({
  products,
  onAdd,
  onUpdate,
  onDelete,
  onBack,
}: {
  products: Product[]
  onAdd: (p: Product) => void
  onUpdate: (p: Product) => void
  onDelete: (id: string) => void
  onBack: () => void
}) {
  const [form, setForm] = useState(emptyForm)
  const [editing, setEditing] = useState<Product | null>(null)

  // Estados para la configuración de cobro (Alias y Titular)
  const [adminAlias, setAdminAlias] = useState('MAGNATES.DEL.JUEGO')
  const [adminTitular, setAdminTitular] = useState('Tu Nombre Completo')

  useEffect(() => {
    const savedAlias = localStorage.getItem('magnates_alias')
    const savedTitular = localStorage.getItem('magnates_titular')
    if (savedAlias) setAdminAlias(savedAlias)
    if (savedTitular) setAdminTitular(savedTitular)
  }, [])

  function handleSaveConfig(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem('magnates_alias', adminAlias.trim())
    localStorage.setItem('magnates_titular', adminTitular.trim())
    alert('¡Datos de cobro actualizados con éxito!')
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    // Reemplaza comas por puntos para evitar errores de formato numérico
    const precioClean = String(form.precio).replace(',', '.')
    const precio = Number(precioClean)

    if (!form.nombre.trim() || !Number.isFinite(precio) || precio < 0) {
      alert('Por favor, ingresa un nombre válido y un precio correcto.')
      return
    }

    onAdd({
      id: `p-${Date.now()}`,
      nombre: form.nombre.trim(),
      descripcion: form.descripcion.trim(),
      precio,
      categoria: form.categoria,
      imagen: form.imagen.trim() || '/placeholder.svg',
    })
    setForm(emptyForm)
  }

  function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault()
    if (!editing) return
    const precioClean = String(editing.precio).replace(',', '.')
    const precio = Number(precioClean)

    if (!editing.nombre.trim() || !Number.isFinite(precio) || precio < 0) {
      alert('Por favor, revisa los datos de edición.')
      return
    }
    onUpdate({ ...editing, precio })
    setEditing(null)
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 pb-16 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-lg font-bold uppercase tracking-wide text-gold">
          Modo Administrador
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Ver tienda
        </button>
      </div>

      {/* Configuración de Cobro */}
      <form
        onSubmit={handleSaveConfig}
        className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
      >
        <div className="flex items-center gap-2">
          <Wallet className="size-4 text-dollar" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-foreground">
            Configuración de Cobro (Alias y Titular)
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Alias de Mercado Pago / Banco</label>
          <input
            value={adminAlias}
            onChange={(e) => setAdminAlias(e.target.value)}
            className={`${inputClass} font-mono`}
            placeholder="Ej: MAGNATES.DEL.JUEGO"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Nombre del Titular</label>
          <input
            value={adminTitular}
            onChange={(e) => setAdminTitular(e.target.value)}
            className={inputClass}
            placeholder="Ej: Juan Cruz Lertora"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-dollar/40 bg-dollar/10 text-sm font-semibold text-dollar transition-transform active:translate-y-px hover:bg-dollar/20"
        >
          <Save className="size-4" aria-hidden="true" />
          Guardar datos de cobro
        </button>
      </form>

      {/* Alta de productos */}
      <form
        onSubmit={handleAdd}
        className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
      >
        <h3 className="text-sm font-semibold text-foreground">
          Agregar producto
        </h3>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Nombre</label>
          <input
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className={inputClass}
            placeholder="Ej: Buzo Magnate"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Descripción</label>
          <input
            value={form.descripcion}
            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            className={inputClass}
            placeholder="Descripción corta"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className={labelClass}>Precio (ARS)</label>
            <input
              type="text"
              inputMode="decimal"
              value={form.precio}
              onChange={(e) => setForm({ ...form, precio: e.target.value })}
              className={inputClass}
              placeholder="0"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass}>Categoría</label>
            <select
              value={form.categoria}
              onChange={(e) =>
                setForm({ ...form, categoria: e.target.value as Category })
              }
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className={labelClass}>Imagen</label>
          <ImageField
            value={form.imagen}
            onChange={(v) => setForm({ ...form, imagen: v })}
          />
        </div>
        <button
          type="submit"
          className="mt-1 inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-transform active:translate-y-px hover:bg-primary/90"
        >
          <Plus className="size-4" aria-hidden="true" />
          Agregar a la tienda
        </button>
      </form>

      {/* Gestión */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">
          Productos cargados ({products.length})
        </h3>
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-border bg-card p-3"
          >
            {editing?.id === p.id ? (
              <form onSubmit={handleSaveEdit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Nombre</label>
                  <input
                    value={editing.nombre}
                    onChange={(e) =>
                      setEditing({ ...editing, nombre: e.target.value })
                    }
                    className={inputClass}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Precio (ARS)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={editing.precio}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          precio: e.target.value as unknown as number,
                        })
                      }
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Categoría</label>
                    <select
                      value={editing.categoria}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          categoria: e.target.value as Category,
                        })
                      }
                      className={inputClass}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className={labelClass}>Imagen</label>
                  <ImageField
                    value={editing.imagen}
                    onChange={(v) => setEditing({ ...editing, imagen: v })}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    <Save className="size-4" aria-hidden="true" />
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(null)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
                  >
                    <X className="size-4" aria-hidden="true" />
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imagen || '/placeholder.svg'}
                  alt={p.nombre}
                  className="size-14 shrink-0 rounded-xl border border-border object-cover"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {p.nombre}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {categoryLabel(p.categoria)}
                  </span>
                  <span className="font-mono text-sm font-bold text-dollar">
                    {formatARS(p.precio)}
                  </span>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <button
                    type="button"
                    aria-label={`Editar ${p.nombre}`}
                    onClick={() => setEditing(p)}
                    className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors hover:bg-muted"
                  >
                    <Pencil className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Borrar ${p.nombre}`}
                    onClick={() => onDelete(p.id)}
                    className="flex size-9 items-center justify-center rounded-lg border border-destructive/30 bg-destructive/10 text-destructive transition-colors hover:bg-destructive/20"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {products.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted-foreground">
            No hay productos cargados todavía.
          </p>
        ) : null}
      </div>
    </div>
  )
}