import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '../data/products'

export interface CartItem {
  product: Product
  quantity: number
  selectedSize: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, size: string, quantity?: number) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getCartCount: () => number
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('libra-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error loading cart:', error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('libra-cart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  const addToCart = (product: Product, size: string, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.product.id === product.id && item.selectedSize === size
      )

      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { product, quantity, selectedSize: size }]
    })
  }

  const removeFromCart = (productId: string, size: string) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.product.id === productId && item.selectedSize === size))
    )
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// Made with Bob
