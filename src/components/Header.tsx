import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header bg-white border-b border-neutral-200 ${isSticky ? 'sticky top-0 z-50 shadow-soft' : ''}`}>
      <div className="container mx-auto px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 tracking-tight hover:text-primary transition-colors">
            LIBRA
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Home</Link>
            <Link href="/collections/dresses" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Dresses</Link>
            <Link href="/collections/new" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">New</Link>
            <Link href="/collections/sale" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Sale</Link>
            <Link href="/collections/ethnic" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Ethnic</Link>
          </nav>

          {/* Icons */}
          <div className="flex space-x-5 items-center">
            <button className="text-neutral-700 hover:text-primary transition-colors" aria-label="Search">
              <FiSearch size={20} strokeWidth={1.5} />
            </button>
            <button className="text-neutral-700 hover:text-primary transition-colors hidden sm:block" aria-label="Account">
              <FiUser size={20} strokeWidth={1.5} />
            </button>
            <Link href="/cart" className="text-neutral-700 hover:text-primary transition-colors relative" aria-label="Cart">
              <FiShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-neutral-700 hover:text-primary transition-colors ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4 border-t border-neutral-200 mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Home</Link>
              <Link href="/collections/dresses" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Dresses</Link>
              <Link href="/collections/new" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">New</Link>
              <Link href="/collections/sale" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Sale</Link>
              <Link href="/collections/ethnic" className="text-neutral-700 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">Ethnic</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Made with Bob
