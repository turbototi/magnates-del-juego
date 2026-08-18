export type Category =
  | 'regalos-magnates'
  | 'gorro'
  | 'buzo'
  | 'remeras'
  | 'taza'

export type Product = {
  id: string
  nombre: string
  descripcion: string
  precio: number
  categoria: Category
  imagen: string
  /** Imágenes adicionales (galería). La principal es `imagen`. */
  imagenes?: string[]
}

export type CartItem = Product & { cantidad: number }

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'regalos-magnates', label: '🎁 Regalos magnates' },
  { id: 'gorro', label: '🧢 Gorro' },
  { id: 'buzo', label: '🧥 Buzo' },
  { id: 'remeras', label: '👕 Remeras' },
  { id: 'taza', label: '☕ Taza' },
]

export const ALIAS = 'MAGNATES.DEL.JUEGO'
export const IG_URL = 'https://ig.me'

export type PaymentInfo = {
  alias: string
  titular: string
}

export const DEFAULT_PAYMENT_INFO: PaymentInfo = {
  alias: 'MAGNATES.DEL.JUEGO',
  titular: 'Tu Nombre Completo',
}

const PAYMENT_KEY = 'magnates_pago_v1'

export function loadPaymentInfo(): PaymentInfo {
  if (typeof window === 'undefined') return DEFAULT_PAYMENT_INFO
  try {
    const raw = window.localStorage.getItem(PAYMENT_KEY)
    if (!raw) return DEFAULT_PAYMENT_INFO
    const parsed = JSON.parse(raw) as Partial<PaymentInfo>
    return {
      alias: parsed.alias?.trim() || DEFAULT_PAYMENT_INFO.alias,
      titular: parsed.titular?.trim() || DEFAULT_PAYMENT_INFO.titular,
    }
  } catch {
    return DEFAULT_PAYMENT_INFO
  }
}

export function savePaymentInfo(info: PaymentInfo) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(PAYMENT_KEY, JSON.stringify(info))
}

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 'buzo-magnate',
    nombre: 'Buzo Magnate Edition',
    descripcion: 'Buzo con capucha y friza premium. Calidad superior.',
    precio: 25000,
    categoria: 'buzo',
    imagen: '/placeholder.svg',
  },
  {
    id: 'gorro-magnate',
    nombre: 'Gorro Snapback Magnate',
    descripcion: 'Gorra bordada de alta durabilidad.',
    precio: 14000,
    categoria: 'gorro',
    imagen: '/placeholder.svg',
  },
  {
    id: 'taza-magnate',
    nombre: 'Taza Cerámica Magnates',
    descripcion: 'Cerámica mate 350ml para tu café diario.',
    precio: 8500,
    categoria: 'taza',
    imagen: '/placeholder.svg',
  },
]

const STORAGE_KEY = 'magnates_productos_v2'

export function loadProducts(): Product[] {
  if (typeof window === 'undefined') return DEFAULT_PRODUCTS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PRODUCTS
    const parsed = JSON.parse(raw) as Product[]
    if (!Array.isArray(parsed)) return DEFAULT_PRODUCTS
    return parsed
  } catch {
    return DEFAULT_PRODUCTS
  }
}

export function saveProducts(products: Product[]) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export function formatARS(value: number): string {
  if (value <= 0) return 'A pedido'
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value)
}