import Head from 'next/head'
import Link from 'next/link'
import { FiTrash2, FiShoppingBag } from 'react-icons/fi'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const incrementQuantity = (productId: string, size: string, currentQuantity: number) => {
    updateQuantity(productId, size, currentQuantity + 1)
  }

  const decrementQuantity = (productId: string, size: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, size, currentQuantity - 1)
    }
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 0 ? (subtotal >= 1000 ? 0 : 99) : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <>
        <Head>
          <title>Shopping Cart - Libra</title>
        </Head>

        <div className="min-h-screen bg-white">
          <AnnouncementBar />
          <Header />

          <div className="container mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <FiShoppingBag className="mx-auto text-gray-300 mb-6" size={80} strokeWidth={1} />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet.
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
        <title>Shopping Cart ({cart.length}) - Libra</title>
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="flex gap-4 bg-white border border-gray-200 p-4"
                  >
                    {/* Product Image */}
                    <Link href={`/product/${item.product.slug}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-24 h-32 object-cover"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col">
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-semibold text-gray-900 hover:text-primary transition-colors mb-1"
                      >
                        {item.product.title}
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">Size: {item.selectedSize}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{item.product.price.toLocaleString()}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{item.product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() =>
                              decrementQuantity(item.product.id, item.selectedSize, item.quantity)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            −
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center border-x border-gray-300 text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              incrementQuantity(item.product.id, item.selectedSize, item.quantity)
                            }
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1 text-sm"
                        >
                          <FiTrash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
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
                  {subtotal < 1000 && subtotal > 0 && (
                    <p className="text-xs text-gray-600">
                      Add ₹{(1000 - subtotal).toLocaleString()} more for FREE shipping
                    </p>
                  )}
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full bg-primary text-white text-center py-3 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors mb-3"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/collections/dresses"
                  className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 font-semibold uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                >
                  Continue Shopping
                </Link>
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