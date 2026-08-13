'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_PAYMENT_INFO,
  loadPaymentInfo,
  loadProducts,
  savePaymentInfo,
  saveProducts,
  type CartItem,
  type PaymentInfo,
  type Product,
} from '@/lib/store'
import { StoreView } from '@/components/store-view'
import { CartBar } from '@/components/cart-bar'
import { CheckoutModal } from '@/components/checkout-modal'
import { AdminPanel } from '@/components/admin-panel'

export function MagnatesApp() {
  const [products, setProducts] = useState<Product[]>([])
  const [paymentInfo, setPaymentInfo] =
    useState<PaymentInfo>(DEFAULT_PAYMENT_INFO)
  const [hydrated, setHydrated] = useState(false)
  const [cart, setCart] = useState<Record<string, number>>({})
  const [view, setView] = useState<'store' | 'admin'>('store')
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  // Cargar productos y datos de transferencia desde localStorage al montar
  useEffect(() => {
    setProducts(loadProducts())
    setPaymentInfo(loadPaymentInfo())
    setHydrated(true)
  }, [])

  // Persistir en localStorage cada vez que cambian
  useEffect(() => {
    if (hydrated) saveProducts(products)
  }, [products, hydrated])

  useEffect(() => {
    if (hydrated) savePaymentInfo(paymentInfo)
  }, [paymentInfo, hydrated])

  const cartItems: CartItem[] = useMemo(() => {
    return Object.entries(cart)
      .map(([id, cantidad]) => {
        const product = products.find((p) => p.id === id)
        return product ? { ...product, cantidad } : null
      })
      .filter((x): x is CartItem => x !== null)
  }, [cart, products])

  const total = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.precio * i.cantidad, 0),
    [cartItems],
  )
  const count = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.cantidad, 0),
    [cartItems],
  )

  function addToCart(p: Product) {
    setCart((prev) => ({ ...prev, [p.id]: (prev[p.id] ?? 0) + 1 }))
  }

  function addProduct(p: Product) {
    setProducts((prev) => [p, ...prev])
  }

  function updateProduct(updated: Product) {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
  }

  function deleteProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    setCart((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }

  if (!hydrated) return null

  if (view === 'admin') {
    return (
      <AdminPanel
        products={products}
        onAdd={addProduct}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
        onBack={() => setView('store')}
      />
    )
  }

  return (
    <>
      <StoreView
        products={products}
        onAdd={addToCart}
        onOpenAdmin={() => setView('admin')}
      />
      <CartBar
        count={count}
        total={total}
        onCheckoutAction={() => setCheckoutOpen(true)}
      />
      {checkoutOpen ? (
        <CheckoutModal
          items={cartItems}
          total={total}
          onCloseAction={() => setCheckoutOpen(false)}
        />
      ) : null}
    </>
  )
}