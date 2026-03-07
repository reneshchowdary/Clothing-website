import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Libra</title>
        <meta name="description" content="Get in touch with Libra. We're here to help with any questions about our products or services." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or need assistance? We'd love to hear from you. Our team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to assist you with any questions about our products, orders, or services. 
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiMail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:care@libra.com" className="text-gray-600 hover:text-primary transition-colors">
                      care@libra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiPhone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-primary transition-colors">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiMapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Fashion Street<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiClock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
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
