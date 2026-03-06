import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AnnouncementBar from '../../components/AnnouncementBar'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [addedToCart, setAddedToCart] = useState<boolean>(false)
  const { addToCart } = useCart()

  // Find the product by slug
  const product = slug ? products.find(p => p.slug === slug) : null

  // Show not found if product doesn't exist and slug is loaded
  if (slug && !product) {
    return (
      <>
        <Head>
          <title>Product Not Found - Libra</title>
        </Head>
        <div className="min-h-screen bg-white">
          <AnnouncementBar />
          <Header />
          <div className="container mx-auto px-6 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
            <Link href="/collections/dresses" className="text-primary hover:underline font-medium">
              ← Back to Collections
            </Link>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  // Show loading only if slug is not yet available
  if (!slug || !product) {
    return null
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/collections/dresses' },
    { name: product.title }
  ]

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert('Please select a size')
      return
    }
    const size = selectedSize || product.sizes[0] || 'One Size'
    addToCart(product, size, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert('Please select a size')
      return
    }
    const size = selectedSize || product.sizes[0] || 'One Size'
    addToCart(product, size, quantity)
    router.push('/checkout')
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  return (
    <>
      <Head>
        <title>{product.title} - Libra</title>
        <meta name="description" content={product.title} />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            {/* Product Image */}
            <div className="bg-gray-50">
              <div className="aspect-[3/4] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    NEW
                  </span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 flex items-center justify-center font-semibold transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors font-semibold"
                    >
                      −
                    </button>
                    <span className="w-12 h-10 flex items-center justify-center border-x-2 border-gray-300 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 font-semibold uppercase tracking-wide transition-colors ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full border-2 border-primary text-primary py-4 font-semibold uppercase tracking-wide hover:bg-primary hover:text-white transition-colors"
                >
                  Buy Now
                </button>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Product Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Fabric:</dt>
                    <dd className="text-gray-600">{product.fabric.join(', ')}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Occasion:</dt>
                    <dd className="text-gray-600">{product.occasion.join(', ')}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Pattern:</dt>
                    <dd className="text-gray-600">{product.pattern.join(', ')}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Style:</dt>
                    <dd className="text-gray-600">{product.style.join(', ')}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Sleeve:</dt>
                    <dd className="text-gray-600">{product.sleeveLength}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold text-gray-700 w-32">Neck:</dt>
                    <dd className="text-gray-600">{product.neck}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
