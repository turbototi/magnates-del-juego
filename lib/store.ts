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

export const ALIAS = 'magnates.juego.mp'
export const IG_URL = 'https://ig.me/m/magnatesdeljuego'

export type PaymentInfo = {
  alias: string
  titular: string
}

export const DEFAULT_PAYMENT_INFO: PaymentInfo = {
  alias: 'magnates.juego.mp',
  titular: 'Pedilo Md',
}

const PAYMENT_KEY = 'magnates_pago_v1'

// --- CONTADOR FUNDADORES AUTOMÁTICO ---
export const FOUNDERS_TOTAL = 10
const FOUNDERS_KEY = 'magnates_fundadores_v1'

export function loadFoundersRemaining(): number {
  if (typeof window === 'undefined') return 9
  try {
    const raw = window.localStorage.getItem(FOUNDERS_KEY)
    if (raw === null) return 9
    const n = parseInt(raw, 10)
    return isNaN(n) ? 9 : Math.max(0, Math.min(10, n))
  } catch {
    return 9
  }
}

export function saveFoundersRemaining(n: number) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(FOUNDERS_KEY, String(n))
}

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
    id: 'taza-magnate-01-50',
    nombre: 'Taza Oficial 01/50 - Oxford Negra 350cc',
    descripcion: 'Taza Oficial 01/50 - Oxford Negra 350cc. Viene en caja de madera con viruta + QR con historia secreta de Magnates. Solo 50 en el mundo. Los primeros 10 con envío gratis + Regalo 01 sorpresa',
    precio: 35000,
    categoria: 'taza',
    imagen: '/productos/black_box_flatlay.jpg',
    imagenes: [
      '/productos/black_box_flatlay.jpg',
      '/productos/luxury_box_flatlay.jpg',
      '/productos/magnates_del_juego_card.jpg',
      '/productos/luxury_black_wood_box.jpg'
    ],
  },
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
]

const STORAGE_KEY = 'magnates_productos_v4'

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
