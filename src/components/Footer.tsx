import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Explore More */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-5">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/collections/dresses" className="text-sm text-neutral-600 hover:text-primary transition-colors">Dresses</Link></li>
              <li><Link href="/collections/new" className="text-sm text-neutral-600 hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/collections/sale" className="text-sm text-neutral-600 hover:text-primary transition-colors">Sale</Link></li>
              <li><Link href="/collections/ethnic" className="text-sm text-neutral-600 hover:text-primary transition-colors">Ethnic Wear</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-5">Customer Care</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-neutral-600 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-neutral-600 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-neutral-600 hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm text-neutral-600 hover:text-primary transition-colors">Returns</Link></li>
              <li><Link href="/size-guide" className="text-sm text-neutral-600 hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              <li><a href="mailto:care@libra.com" className="text-sm text-neutral-600 hover:text-primary transition-colors">care@libra.com</a></li>
              <li><a href="tel:+911234567890" className="text-sm text-neutral-600 hover:text-primary transition-colors">+91 12345 67890</a></li>
              <li><span className="text-sm text-neutral-500">Mon-Sat, 10AM-6PM</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-5">Stay Updated</h3>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">Get style tips and exclusive offers</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 text-sm border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              />
              <button className="bg-primary text-white px-4 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} Libra. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-sm text-neutral-500 hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="text-sm text-neutral-500 hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Made with Bob
