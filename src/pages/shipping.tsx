import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiTruck, FiPackage, FiMapPin, FiClock } from 'react-icons/fi'

export default function Shipping() {
  return (
    <>
      <Head>
        <title>Shipping Information - Libra</title>
        <meta name="description" content="Learn about Libra's shipping options, delivery times, and policies." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver fashion to your doorstep with care. Learn about our shipping options and policies.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <FiTruck className="text-primary" size={28} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Standard Shipping</h2>
              <p className="text-gray-600 mb-4">
                Our standard shipping option delivers your order within 5-7 business days.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <FiClock className="text-primary" size={16} />
                  <span className="text-gray-700">Delivery: 5-7 business days</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiPackage className="text-primary" size={16} />
                  <span className="text-gray-700">Free on orders above ₹999</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-primary" size={16} />
                  <span className="text-gray-700">Available across India</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-2 border-primary">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <FiTruck className="text-primary" size={28} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Express Shipping</h2>
              <p className="text-gray-600 mb-4">
                Need it faster? Choose express shipping for quick delivery.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <FiClock className="text-primary" size={16} />
                  <span className="text-gray-700">Delivery: 2-3 business days</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiPackage className="text-primary" size={16} />
                  <span className="text-gray-700">Additional ₹150 charge</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-primary" size={16} />
                  <span className="text-gray-700">Available in major cities</span>
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Order Confirmation</h3>
                    <p className="text-gray-600">
                      Once you place your order, you'll receive an email confirmation with your order details and estimated delivery date.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
                    <p className="text-gray-600">
                      Your order is carefully packed and prepared for shipment. This typically takes 1-2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shipment</h3>
                    <p className="text-gray-600">
                      Once shipped, you'll receive a tracking number via email and SMS to monitor your package's journey.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                    <p className="text-gray-600">
                      Your package arrives at your doorstep. Our courier partner will contact you before delivery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Charges</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-semibold text-gray-900">Order Value</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Standard Shipping</th>
                      <th className="text-left py-3 font-semibold text-gray-900">Express Shipping</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Below ₹999</td>
                      <td className="py-3">₹99</td>
                      <td className="py-3">₹249</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">₹999 - ₹2499</td>
                      <td className="py-3 text-green-600 font-semibold">FREE</td>
                      <td className="py-3">₹150</td>
                    </tr>
                    <tr>
                      <td className="py-3">Above ₹2499</td>
                      <td className="py-3 text-green-600 font-semibold">FREE</td>
                      <td className="py-3">₹150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>Delivery times are estimates and may vary based on location and external factors.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>Orders placed on weekends or holidays will be processed on the next business day.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>We currently ship within India only. International shipping coming soon.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>Please ensure someone is available to receive the package at the delivery address.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>For any shipping-related queries, contact our customer care team.</p>
                </div>
              </div>
            </section>

            <section className="bg-primary-light rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Track Your Order</h2>
              <p className="text-gray-600 mb-6">
                Use your tracking number to monitor your package's journey in real-time.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                Contact Support
              </a>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
