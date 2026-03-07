import Head from 'next/head'
import { useState } from 'react'
import AnnouncementBar from '../components/AnnouncementBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiInfo } from 'react-icons/fi'

export default function SizeGuide() {
  const [activeTab, setActiveTab] = useState<'dresses' | 'tops' | 'bottoms'>('dresses')

  return (
    <>
      <Head>
        <title>Size Guide - Libra</title>
        <meta name="description" content="Find your perfect fit with Libra's comprehensive size guide. Detailed measurements for all our clothing categories." />
      </Head>

      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />

        <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit with our detailed size charts. All measurements are in inches.
            </p>
          </div>

          {/* How to Measure */}
          <div className="max-w-4xl mx-auto mb-12 bg-primary-light rounded-lg p-8">
            <div className="flex gap-3 mb-4">
              <FiInfo className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How to Measure</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Bust:</strong> Measure around the fullest part of your bust, keeping the tape parallel to the floor.</p>
                  <p><strong>Waist:</strong> Measure around the narrowest part of your natural waistline.</p>
                  <p><strong>Hips:</strong> Measure around the fullest part of your hips, approximately 8 inches below your waist.</p>
                  <p><strong>Length:</strong> Measure from the highest point of your shoulder down to the desired length.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('dresses')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'dresses'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dresses
              </button>
              <button
                onClick={() => setActiveTab('tops')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'tops'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tops
              </button>
              <button
                onClick={() => setActiveTab('bottoms')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'bottoms'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Bottoms
              </button>
            </div>
          </div>

          {/* Size Charts */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'dresses' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dresses Size Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Size</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Bust (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Waist (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Hips (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Length (inches)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XS</td>
                          <td className="px-4 py-3">32-33</td>
                          <td className="px-4 py-3">24-25</td>
                          <td className="px-4 py-3">34-35</td>
                          <td className="px-4 py-3">38-40</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">S</td>
                          <td className="px-4 py-3">34-35</td>
                          <td className="px-4 py-3">26-27</td>
                          <td className="px-4 py-3">36-37</td>
                          <td className="px-4 py-3">38-40</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">M</td>
                          <td className="px-4 py-3">36-37</td>
                          <td className="px-4 py-3">28-29</td>
                          <td className="px-4 py-3">38-39</td>
                          <td className="px-4 py-3">39-41</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">L</td>
                          <td className="px-4 py-3">38-40</td>
                          <td className="px-4 py-3">30-32</td>
                          <td className="px-4 py-3">40-42</td>
                          <td className="px-4 py-3">39-41</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XL</td>
                          <td className="px-4 py-3">41-43</td>
                          <td className="px-4 py-3">33-35</td>
                          <td className="px-4 py-3">43-45</td>
                          <td className="px-4 py-3">40-42</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">XXL</td>
                          <td className="px-4 py-3">44-46</td>
                          <td className="px-4 py-3">36-38</td>
                          <td className="px-4 py-3">46-48</td>
                          <td className="px-4 py-3">40-42</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tops' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tops Size Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Size</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Bust (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Waist (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Shoulder (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Length (inches)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XS</td>
                          <td className="px-4 py-3">32-33</td>
                          <td className="px-4 py-3">24-25</td>
                          <td className="px-4 py-3">14-14.5</td>
                          <td className="px-4 py-3">23-24</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">S</td>
                          <td className="px-4 py-3">34-35</td>
                          <td className="px-4 py-3">26-27</td>
                          <td className="px-4 py-3">14.5-15</td>
                          <td className="px-4 py-3">24-25</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">M</td>
                          <td className="px-4 py-3">36-37</td>
                          <td className="px-4 py-3">28-29</td>
                          <td className="px-4 py-3">15-15.5</td>
                          <td className="px-4 py-3">25-26</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">L</td>
                          <td className="px-4 py-3">38-40</td>
                          <td className="px-4 py-3">30-32</td>
                          <td className="px-4 py-3">15.5-16</td>
                          <td className="px-4 py-3">26-27</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XL</td>
                          <td className="px-4 py-3">41-43</td>
                          <td className="px-4 py-3">33-35</td>
                          <td className="px-4 py-3">16-16.5</td>
                          <td className="px-4 py-3">27-28</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">XXL</td>
                          <td className="px-4 py-3">44-46</td>
                          <td className="px-4 py-3">36-38</td>
                          <td className="px-4 py-3">16.5-17</td>
                          <td className="px-4 py-3">28-29</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bottoms' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Bottoms Size Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Size</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Waist (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Hips (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Inseam (inches)</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Length (inches)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XS</td>
                          <td className="px-4 py-3">24-25</td>
                          <td className="px-4 py-3">34-35</td>
                          <td className="px-4 py-3">28-29</td>
                          <td className="px-4 py-3">37-38</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">S</td>
                          <td className="px-4 py-3">26-27</td>
                          <td className="px-4 py-3">36-37</td>
                          <td className="px-4 py-3">29-30</td>
                          <td className="px-4 py-3">38-39</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">M</td>
                          <td className="px-4 py-3">28-29</td>
                          <td className="px-4 py-3">38-39</td>
                          <td className="px-4 py-3">30-31</td>
                          <td className="px-4 py-3">39-40</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">L</td>
                          <td className="px-4 py-3">30-32</td>
                          <td className="px-4 py-3">40-42</td>
                          <td className="px-4 py-3">31-32</td>
                          <td className="px-4 py-3">40-41</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">XL</td>
                          <td className="px-4 py-3">33-35</td>
                          <td className="px-4 py-3">43-45</td>
                          <td className="px-4 py-3">32-33</td>
                          <td className="px-4 py-3">41-42</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">XXL</td>
                          <td className="px-4 py-3">36-38</td>
                          <td className="px-4 py-3">46-48</td>
                          <td className="px-4 py-3">33-34</td>
                          <td className="px-4 py-3">42-43</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Fit Tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Fit Tips</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>If you're between sizes, we recommend sizing up for a more comfortable fit.</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Check the product description for specific fit information (slim fit, regular fit, relaxed fit).</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Measurements may vary slightly (±0.5 inches) due to the nature of the fabric.</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>For ethnic wear, refer to the specific size chart provided on the product page.</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Still unsure? Contact our customer care team for personalized sizing assistance.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-12 text-center bg-primary-light rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Help Finding Your Size?</h2>
            <p className="text-gray-600 mb-6">
              Our customer care team is here to help you find the perfect fit.
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
