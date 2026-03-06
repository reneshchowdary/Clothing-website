import Link from 'next/link'
import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Product } from '../data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)

  const toggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
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

      <div className="pt-3 pb-2">
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
      </div>
    </div>
  )
}

// Made with Bob
