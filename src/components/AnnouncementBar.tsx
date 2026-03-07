import { useState, useEffect } from 'react'

const announcements = [
  "Free Shipping on Orders Above ₹999",
  "New Arrivals • Shop the Latest Collection",
  "Easy Returns Within 15 Days"
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
    <div className="bg-neutral-900 text-white py-2.5 text-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative h-5">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 text-xs font-medium tracking-wider ${
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
