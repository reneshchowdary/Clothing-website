import Head from 'next/head'
import Link from 'next/link'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Libra - Women's Fashion & Dresses</title>
        <meta name="description" content="Discover the latest collection of women's dresses at Libra" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <AnnouncementBar />
        <Header />

        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">Welcome to Libra</h1>
          <p className="text-lg mb-8">Discover our collection of beautiful dresses for every occasion.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/collections/dresses"
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Dresses Collection</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">Shop Dresses</h2>
                <p className="text-gray-600 mt-2">Explore our latest collection of dresses</p>
              </div>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
