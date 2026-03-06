import Link from 'next/link'
import { useState } from 'react'
import { FiHeart, FiShoppingBag } from 'react-icons/fi'
import { Product } from '../data/products'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)
  const [showSizeSelector, setShowSizeSelector] = useState<boolean>(false)
  const { addToCart } = useCart()

  const toggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, size?: string) => {
    e.preventDefault()
    if (!size && product.sizes.length > 0) {
      setShowSizeSelector(true)
      return
    }
    const selectedSize = size || product.sizes[0] || 'One Size'
    addToCart(product, selectedSize, 1)
    setShowSizeSelector(false)
    
    // Show brief success feedback
    const button = e.currentTarget
    const originalText = button.textContent
    button.textContent = 'Added!'
    button.classList.add('bg-green-600')
    setTimeout(() => {
      button.textContent = originalText
      button.classList.remove('bg-green-600')
    }, 1000)
  }

  return (
    <div className="product-card group bg-white overflow-hidden">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block">
          <div className="aspect-[3/4] bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Wishlist button - positioned at top right */}
        <button
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all opacity-0 group-hover:opacity-100"
          onClick={toggleWishlist}
          aria-label="Add to wishlist"
        >
          <FiHeart
            size={16}
            strokeWidth={2}
            className={isWishlisted ? 'text-primary fill-current' : 'text-gray-700'}
          />
        </button>

        {/* New badge - top left */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider">
            NEW
          </span>
        )}
      </div>

      <div className="pt-3 pb-4">
        <h3 className="text-sm text-gray-900 mb-1.5 line-clamp-2 leading-snug">
          <Link href={`/product/${product.slug}`} className="hover:text-primary transition-colors">
            {product.title}
          </Link>
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-xs font-semibold text-red-600">({product.discount}% OFF)</span>
            </>
          )}
        </div>

        {/* Add to Cart Button - Always visible */}
        {showSizeSelector ? (
          <div className="mt-3 space-y-2">
            <p className="text-xs font-semibold text-gray-700 mb-1">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={(e) => handleAddToCart(e, size)}
                  className="px-3 py-1.5 border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-xs font-medium transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSizeSelector(false)}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-3 w-full bg-primary text-white py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
          >
            <FiShoppingBag size={16} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

// Made with Bob
