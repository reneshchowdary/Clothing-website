import Head from 'next/head'
import { useRouter } from 'next/router'
import AnnouncementBar from '../../components/AnnouncementBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query

  // Handle loading state
  if (router.isFallback || !slug) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  // Find the product by slug
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <a href="/collections/dresses" className="text-primary hover:underline">
            Back to collections
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{product.title} - Libra</title>
        <meta name="description" content={product.title} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>

              <div className="flex items-center mb-4">
                <span className="text-2xl font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="mx-3 text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-accent font-medium">{product.discount}% OFF</span>
                  </>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">SELECT SIZE</h3>
                <div className="flex space-x-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-primary transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors">
                  ADD TO CART
                </button>
                <button className="w-full border border-primary text-primary py-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  BUY NOW
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-700 mb-2">PRODUCT DETAILS</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Fabric:</strong> {product.fabric.join(', ')}</li>
                  <li><strong>Occasion:</strong> {product.occasion.join(', ')}</li>
                  <li><strong>Pattern:</strong> {product.pattern.join(', ')}</li>
                  <li><strong>Style:</strong> {product.style.join(', ')}</li>
                  <li><strong>Sleeve Length:</strong> {product.sleeveLength}</li>
                  <li><strong>Neck:</strong> {product.neck}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
