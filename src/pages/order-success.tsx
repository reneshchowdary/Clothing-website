import Head from 'next/head'
import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function OrderSuccessPage() {
  const orderNumber = `LIB${Date.now().toString().slice(-8)}`

  return (
    <>
      <Head>
        <title>Order Confirmed - Libra</title>
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <FiCheckCircle className="mx-auto text-green-600 mb-6" size={80} strokeWidth={1.5} />
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Order Placed Successfully!
            </h1>
            
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your order
            </p>
            
            <p className="text-gray-600 mb-8">
              Your order number is: <span className="font-bold text-primary">{orderNumber}</span>
            </p>

            <div className="bg-gray-50 border border-gray-200 p-6 mb-8 text-left">
              <h2 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>You will receive an order confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>We'll send you a shipping notification when your order is dispatched</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Expected delivery: 5-7 business days</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/collections/dresses"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 font-semibold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob