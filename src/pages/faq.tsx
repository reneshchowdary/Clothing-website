import Head from 'next/head'
import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiChevronDown } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I place an order?",
    answer: "Browse our collections, select your desired items, choose your size, and click 'Add to Cart'. Once you're ready, proceed to checkout, fill in your shipping details, and complete the payment to place your order."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), UPI, net banking, and popular digital wallets. All transactions are secure and encrypted."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days delivery. You'll receive a tracking number once your order ships."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within India only. We're working on expanding our shipping to international destinations soon. Subscribe to our newsletter to stay updated."
  },
  {
    question: "What is your return policy?",
    answer: "We offer easy returns and exchanges within 15 days of delivery. Items must be unused, unwashed, and in original condition with tags attached. Visit our Returns page for detailed information."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can use this number to track your package on our courier partner's website."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "You can modify or cancel your order within 2 hours of placing it. After that, the order enters processing and cannot be changed. Contact our customer care immediately if you need assistance."
  },
  {
    question: "How do I choose the right size?",
    answer: "Please refer to our Size Guide page for detailed measurements. Each product page also includes specific sizing information. If you're between sizes, we recommend sizing up for a comfortable fit."
  },
  {
    question: "Are the colors accurate on the website?",
    answer: "We strive to display colors as accurately as possible. However, actual colors may vary slightly due to screen settings and lighting conditions. Product descriptions include detailed color information."
  },
  {
    question: "Do you restock sold-out items?",
    answer: "Popular items are regularly restocked. You can sign up for restock notifications on the product page, and we'll email you when the item is available again."
  },
  {
    question: "How do I care for my Libra garments?",
    answer: "Care instructions are provided on the product label and description. Generally, we recommend gentle machine wash or hand wash in cold water, and air drying to maintain fabric quality."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! We offer complimentary gift wrapping for all orders. Simply select the gift wrap option during checkout and add a personalized message."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions - Libra</title>
        <meta name="description" content="Find answers to common questions about shopping at Libra, including shipping, returns, sizing, and more." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about shopping with Libra. 
              Can't find what you're looking for? <a href="/contact" className="text-primary hover:underline">Contact us</a>.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <FiChevronDown
                    className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our customer care team is here to help you with any inquiries.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
