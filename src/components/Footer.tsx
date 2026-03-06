import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Explore More */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Explore More</h3>
            <ul className="space-y-2.5">
              <li><Link href="/collections/dresses" className="text-sm text-gray-700 hover:text-primary transition-colors">Dresses</Link></li>
              <li><Link href="/collections/tops" className="text-sm text-gray-700 hover:text-primary transition-colors">Tops</Link></li>
              <li><Link href="/collections/bottoms" className="text-sm text-gray-700 hover:text-primary transition-colors">Bottoms</Link></li>
              <li><Link href="/collections/jumpsuits" className="text-sm text-gray-700 hover:text-primary transition-colors">Jumpsuits</Link></li>
              <li><Link href="/collections/ethnic" className="text-sm text-gray-700 hover:text-primary transition-colors">Ethnic Wear</Link></li>
            </ul>
          </div>

          {/* Customer Experience */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Customer Experience</h3>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className="text-sm text-gray-700 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-700 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-700 hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-700 hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-sm text-gray-700 hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-2.5">
              <li><a href="mailto:care@libra.com" className="text-sm text-gray-700 hover:text-primary transition-colors">care@libra.com</a></li>
              <li><a href="tel:+911234567890" className="text-sm text-gray-700 hover:text-primary transition-colors">+91 12345 67890</a></li>
              <li><span className="text-sm text-gray-600">Mon-Sat, 10AM-6PM</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Subscribe to get special offers and style updates</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2.5 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white px-4 py-2.5 text-sm font-medium uppercase tracking-wide hover:bg-primary-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Libra. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Made with Bob
