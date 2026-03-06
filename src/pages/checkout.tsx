import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getCartTotal, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
  })

  const subtotal = getCartTotal()
  const shipping = subtotal >= 1000 ? 0 : 99
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      clearCart()
      router.push('/order-success')
    }, 2000)
  }

  if (cart.length === 0) {
    return (
      <>
        <Head>
          <title>Checkout - Libra</title>
        </Head>

        <div className="min-h-screen bg-white">
          <AnnouncementBar />
          <Header />

          <div className="container mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Please add items to your cart before proceeding to checkout.
              </p>
              <Link
                href="/collections/dresses"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Checkout - Libra</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <div className="bg-white border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">Cash on Delivery</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">UPI</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={`${item.product.id}-${item.selectedSize}`}
                        className="flex gap-3 pb-3 border-b border-gray-200"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-16 h-20 object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                            {item.product.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            Size: {item.selectedSize} | Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-bold text-gray-900 mt-1">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? 'FREE' : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full py-3 font-semibold uppercase tracking-wide transition-colors ${
                      isProcessing
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob