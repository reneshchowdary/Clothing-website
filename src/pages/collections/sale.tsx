import Head from 'next/head'
import AnnouncementBar from '../../components/AnnouncementBar'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import FilterSidebar from '../../components/FilterSidebar'
import SortControl from '../../components/SortControl'
import ProductGrid from '../../components/ProductGrid'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

export default function SaleCollection() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Sale' }
  ]

  // Filter products that are on sale (have discount)
  const saleProducts = products.filter(p => p.isOnSale === true || p.discount)

  return (
    <>
      <Head>
        <title>Sale - Libra</title>
        <meta name="description" content="Shop amazing deals and discounts at Libra. Save big on women's fashion and dresses." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-6">
            {/* Desktop Filter Sidebar - LEFT SIDE */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar />
            </div>

            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <button className="flex items-center justify-between w-full bg-white border border-gray-300 py-3 px-4 text-sm font-semibold text-gray-900 uppercase tracking-wider hover:bg-gray-50 transition-colors">
                <span>FILTER</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 17.293A1 1 0 013 17V4z" />
                </svg>
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Sale</h1>
                <p className="text-gray-700 text-base leading-relaxed">
                  Don't miss out on amazing deals! Shop our sale collection and save big on your favorite styles.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 pb-4 border-b border-gray-200 gap-4">
                <div className="text-gray-700 text-sm font-medium">
                  {saleProducts.length} Products
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider hidden sm:block">Sort By</span>
                  <SortControl />
                </div>
              </div>

              <ProductGrid products={saleProducts} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob