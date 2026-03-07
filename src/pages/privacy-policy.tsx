import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Libra</title>
        <meta name="description" content="Read Libra's privacy policy to understand how we collect, use, and protect your personal information." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-gray">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Libra, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or make a purchase from us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you consent to the data practices described in this policy. If you do not agree with 
                this policy, please do not use our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Create an account on our website</li>
                <li>Place an order or make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This information may include your name, email address, phone number, shipping address, billing address, 
                and payment information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about your orders and account</li>
                <li>Sending promotional emails and marketing communications (with your consent)</li>
                <li>Improving our website and customer service</li>
                <li>Personalizing your shopping experience</li>
                <li>Detecting and preventing fraud or security issues</li>
                <li>Complying with legal obligations</li>
                <li>Analyzing website usage and trends</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your 
                information with:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Service Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We work with trusted third-party service providers who assist us in operating our website, processing 
                payments, shipping orders, and providing customer service. These providers have access to your information 
                only to perform specific tasks on our behalf and are obligated to protect your information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may disclose your information if required by law or in response to valid requests by public authorities, 
                such as a court order or government agency.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Business Transfers</h3>
              <p className="text-gray-600 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
                acquiring entity.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive 
                to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. Cookies are small data files stored on your device.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to 
                use certain features of our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> You can unsubscribe from marketing emails at any time</li>
                <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us at care@libra.com.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please contact us 
                immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                content of these external sites. We encourage you to review the privacy policies of any third-party sites 
                you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" 
                date. Your continued use of our website after such changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
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
