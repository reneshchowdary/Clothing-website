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
    <div className="product-card group bg-white overflow-hidden rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block">
          <div className="aspect-[3/4] bg-neutral-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Wishlist button */}
        <button
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-sm hover:shadow-lg transition-all opacity-0 group-hover:opacity-100"
          onClick={toggleWishlist}
          aria-label="Add to wishlist"
        >
          <FiHeart
            size={16}
            strokeWidth={2}
            className={isWishlisted ? 'text-accent fill-current' : 'text-neutral-700'}
          />
        </button>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-neutral-900 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            NEW
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm text-neutral-900 mb-2 line-clamp-2 leading-snug font-medium">
          <Link href={`/product/${product.slug}`} className="hover:text-primary transition-colors">
            {product.title}
          </Link>
        </h3>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-base font-bold text-neutral-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-neutral-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-xs font-bold text-accent">-{product.discount}%</span>
            </>
          )}
        </div>

        {/* Add to Cart Button */}
        {showSizeSelector ? (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-neutral-700 mb-2">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={(e) => handleAddToCart(e, size)}
                  className="px-3 py-1.5 border border-neutral-300 hover:border-primary hover:bg-primary hover:text-white text-xs font-semibold transition-colors rounded"
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowSizeSelector(false)}
              className="text-xs text-neutral-500 hover:text-neutral-700 underline"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 rounded"
          >
            <FiShoppingBag size={14} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

// Made with Bob
