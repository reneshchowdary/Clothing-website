import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Libra</title>
        <meta name="description" content="Read Libra's terms of service to understand the rules and regulations for using our website and services." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-gray">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Libra. By accessing or using our website, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update, change, or replace any part of these Terms of Service at any time. 
                It is your responsibility to check this page periodically for changes. Your continued use of the website 
                following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Eligibility</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must be at least 18 years old to use our website and make purchases. By using our website, you 
                represent and warrant that you are at least 18 years of age.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Account Registration</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you create an account with us, you must provide accurate, complete, and current information. 
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Maintaining the confidentiality of your account and password</li>
                <li>Restricting access to your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Prohibited Activities</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the website for any unlawful purpose or in violation of these Terms</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Use any automated system to access the website</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website</li>
                <li>Impersonate any person or entity</li>
                <li>Engage in any fraudulent activity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Orders</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Product Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that 
                product descriptions, colors, or other content on the website are accurate, complete, reliable, current, 
                or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or 
                update information at any time without prior notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Pricing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All prices are listed in Indian Rupees (INR) and are subject to change without notice. We reserve the 
                right to modify prices at any time. In the event of a pricing error, we reserve the right to cancel any 
                orders placed at the incorrect price.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Order Acceptance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product 
                availability, errors in product or pricing information, or suspected fraudulent activity. If your order 
                is cancelled after payment has been processed, we will issue a full refund.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Payment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We accept various payment methods as displayed on our website. By providing payment information, you 
                represent and warrant that you are authorized to use the payment method and authorize us to charge the 
                total amount of your order.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping and Delivery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We ship to addresses within India only. Shipping times and costs are provided during checkout and may 
                vary based on your location and selected shipping method. We are not responsible for delays caused by 
                shipping carriers or circumstances beyond our control.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Risk of loss and title for items purchased pass to you upon delivery to the shipping carrier. For more 
                information, please refer to our Shipping Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer returns and exchanges within 15 days of delivery, subject to our Return Policy. Items must be 
                unused, unwashed, and in their original condition with all tags attached. Please refer to our Returns & 
                Exchanges page for detailed information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Refunds will be processed to the original payment method within 5-7 business days after we receive and 
                verify the returned item.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, product 
                descriptions, and software, is the property of Libra or its content suppliers and is protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Reproduce, distribute, or display any content without our written permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Use our content for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website and all products are provided "as is" and "as available" without any warranties of any kind, 
                either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free 
                of viruses or other harmful components.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, we disclaim all warranties, including but not limited to implied 
                warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, Libra and its affiliates, officers, directors, employees, and 
                agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including but not limited to loss of profits, data, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Your use or inability to use the website</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the website</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Any errors or omissions in any content</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our total liability to you for any claims arising from your use of the website shall not exceed the 
                amount you paid for products purchased through the website in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Libra and its affiliates, officers, directors, 
                employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including 
                reasonable attorneys' fees) arising from your use of the website, violation of these Terms, or 
                infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the 
                website shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall 
                continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid 
                provision that most closely matches the intent of the original provision.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service, together with our Privacy Policy and any other legal notices published on the 
                website, constitute the entire agreement between you and Libra regarding your use of the website and 
                supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> care@libra.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 12345 67890</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Fashion Street, Mumbai, Maharashtra 400001, India</p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

// Made with Bob
