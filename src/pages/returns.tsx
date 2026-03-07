import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiRefreshCw, FiPackage, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export default function Returns() {
  return (
    <>
      <Head>
        <title>Returns & Exchanges - Libra</title>
        <meta name="description" content="Learn about Libra's hassle-free return and exchange policy. Easy returns within 15 days." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We want you to love your purchase. If you're not completely satisfied, we offer easy returns and exchanges within 15 days.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
                <FiRefreshCw className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">15 Days Return</h3>
              <p className="text-sm text-gray-600">Easy returns within 15 days of delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
                <FiPackage className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Pickup</h3>
              <p className="text-sm text-gray-600">We arrange free pickup from your doorstep</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
                <FiCheckCircle className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Refund</h3>
              <p className="text-sm text-gray-600">Refunds processed within 5-7 business days</p>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Policy</h2>
              <div className="bg-gray-50 rounded-lg p-8 space-y-4 text-gray-600">
                <p>
                  At Libra, we strive to ensure your complete satisfaction with every purchase. If for any reason you're not happy with your order, we offer a hassle-free return policy.
                </p>
                <p>
                  You can return any item within <strong className="text-gray-900">15 days of delivery</strong> for a full refund or exchange, provided the item meets our return conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Unused & Unwashed</h3>
                    <p className="text-gray-600">Items must be in their original condition, unused and unwashed.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Original Tags Attached</h3>
                    <p className="text-gray-600">All original tags, labels, and packaging must be intact.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Damage or Alterations</h3>
                    <p className="text-gray-600">Items should not be damaged, altered, or have any signs of wear.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Original Packaging</h3>
                    <p className="text-gray-600">Return items in their original packaging whenever possible.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initiate Return Request</h3>
                    <p className="text-gray-600">
                      Contact our customer care team via email at care@libra.com or call +91 12345 67890 with your order number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Schedule Pickup</h3>
                    <p className="text-gray-600">
                      Once approved, we'll arrange a free pickup from your address at your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pack the Item</h3>
                    <p className="text-gray-600">
                      Pack the item securely with all tags and packaging. Our courier partner will collect it.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Check & Refund</h3>
                    <p className="text-gray-600">
                      Once we receive and verify the item, your refund will be processed within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchange Policy</h2>
              <div className="bg-gray-50 rounded-lg p-8 space-y-4 text-gray-600">
                <p>
                  Want a different size or color? We offer easy exchanges within 15 days of delivery.
                </p>
                <p>
                  Simply initiate a return request and mention that you'd like an exchange. We'll send you the replacement item once we receive your return.
                </p>
                <p className="text-sm">
                  <strong className="text-gray-900">Note:</strong> Exchanges are subject to product availability. If the desired item is out of stock, we'll process a refund instead.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Non-Returnable Items</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex gap-3 mb-4">
                  <FiAlertCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 font-semibold">The following items cannot be returned or exchanged:</p>
                </div>
                <ul className="space-y-2 text-gray-600 ml-8">
                  <li className="list-disc">Innerwear, lingerie, and swimwear (for hygiene reasons)</li>
                  <li className="list-disc">Items marked as "Final Sale" or purchased during clearance sales</li>
                  <li className="list-disc">Customized or personalized items</li>
                  <li className="list-disc">Items without original tags or packaging</li>
                  <li className="list-disc">Items damaged due to misuse or negligence</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Information</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>Refunds are processed to the original payment method used during purchase.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>It takes 5-7 business days for the refund to reflect in your account after processing.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>Shipping charges are non-refundable unless the return is due to our error.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <p>You'll receive an email confirmation once your refund is processed.</p>
                </div>
              </div>
            </section>

            <section className="bg-primary-light rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help with Returns?</h2>
              <p className="text-gray-600 mb-6">
                Our customer care team is here to assist you with any return or exchange queries.
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
