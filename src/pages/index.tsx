import Head from 'next/head'
import Link from 'next/link'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8)
  
  // Get new arrivals
  const newArrivals = products.filter(p => p.isNew).slice(0, 4)

  return (
    <>
      <Head>
        <title>Libra - Women's Fashion & Dresses</title>
        <meta name="description" content="Discover the latest collection of women's dresses at Libra. Where trend meets tradition." />
      </Head>

      <div className="min-h-screen bg-secondary">
        <AnnouncementBar />
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-light via-secondary to-neutral-100 py-24 lg:py-36">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Where Trend Meets Tradition
              </h1>
              <p className="text-lg lg:text-xl text-neutral-700 mb-10 leading-relaxed">
                Discover Libra's exquisite collection of women's fashion. From elegant dresses to ethnic wear, find your perfect style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections/new"
                  className="bg-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors rounded shadow-sm hover:shadow-lg"
                >
                  Shop New Arrivals
                </Link>
                <Link
                  href="/collections/sale"
                  className="border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors rounded"
                >
                  View Sale
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-16 text-center">Shop By Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/collections/dresses"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4] hover:shadow-xl transition-all rounded-lg"
              >
                <img
                  src="/images/products/dress1.jpg"
                  alt="Dresses"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Dresses</h3>
                    <p className="text-sm font-medium">Explore Collection →</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/collections/new"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4] hover:shadow-xl transition-all rounded-lg"
              >
                <img
                  src="/images/products/dress2.jpg"
                  alt="New Arrivals"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">New Arrivals</h3>
                    <p className="text-sm font-medium">Shop Now →</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/collections/ethnic"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4] hover:shadow-xl transition-all rounded-lg"
              >
                <img
                  src="/images/products/dress8.jpg"
                  alt="Ethnic Wear"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ethnic Wear</h3>
                    <p className="text-sm font-medium">Discover More →</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/collections/sale"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4] hover:shadow-xl transition-all rounded-lg"
              >
                <img
                  src="/images/products/dress4.jpg"
                  alt="Sale"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Sale</h3>
                    <p className="text-sm font-medium">Save Big →</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Featured Products</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                Handpicked styles just for you. Explore our curated collection of trending fashion.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                href="/collections/dresses"
                className="inline-block bg-primary text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors rounded shadow-sm hover:shadow-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 lg:py-28 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-95">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 text-neutral-900 rounded focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors whitespace-nowrap rounded shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
