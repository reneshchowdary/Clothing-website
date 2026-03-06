import { useState, useEffect } from 'react'

const announcements = [
  "BUY FOR ₹2499 & MORE, GET FLAT ₹100 OFF | USE CODE: SALE100",
  "BUY FOR ₹2899 & MORE, GET FLAT ₹200 OFF | USE CODE: SALE200",
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "NEW ARRIVALS - SHOP THE LATEST COLLECTION",
  "EASY RETURNS & EXCHANGES WITHIN 15 DAYS"
]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-900 text-white py-2 text-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative h-5">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 text-xs font-medium tracking-wide ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}
            >
              {announcement}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Made with Bob
