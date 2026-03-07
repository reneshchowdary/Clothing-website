import Head from 'next/head'
import AnnouncementBar from '../../components/AnnouncementBar'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import FilterSidebar from '../../components/FilterSidebar'
import SortControl from '../../components/SortControl'
import ProductGrid from '../../components/ProductGrid'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

export default function DressesCollection() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Dresses For Women' }
  ]

  return (
    <>
      <Head>
        <title>Dresses For Women - Libra</title>
        <meta name="description" content="Explore Libra's collection of dresses for women. Where trend meets tradition with our latest drop of women's dresses." />
      </Head>

      <div className="min-h-screen bg-secondary">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-8 lg:py-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mt-6">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block flex-shrink-0">
              <div className="sticky top-24">
                <FilterSidebar />
              </div>
            </aside>

            {/* Mobile filter button */}
            <div className="lg:hidden">
              <button className="flex items-center justify-between w-full bg-white border border-neutral-300 py-3 px-5 text-sm font-bold text-neutral-900 uppercase tracking-wider hover:bg-neutral-50 transition-colors rounded shadow-soft">
                <span>Filter & Sort</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293.707L3.293 17.293A1 1 0 013 17V4z" />
                </svg>
              </button>
            </div>

            <main className="flex-1 min-w-0">
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">Dresses For Women</h1>
                <p className="text-neutral-600 text-base leading-relaxed">
                  Where trend meets tradition with Libra's latest drop of women's dresses.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 pb-4 border-b border-neutral-200 gap-4">
                <div className="text-neutral-700 text-sm font-semibold">
                  {products.length} Products
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-600 font-bold uppercase tracking-wider hidden sm:block">Sort By</span>
                  <SortControl />
                </div>
              </div>

              <ProductGrid products={products} />
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
