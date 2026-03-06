import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const sortOptions = [
  { value: 'featured', label: 'FEATURED' },
  { value: 'price-low', label: 'PRICE: LOW TO HIGH' },
  { value: 'price-high', label: 'PRICE: HIGH TO LOW' },
  { value: 'newest', label: 'DATE: NEW TO OLD' }
]

export default function SortControl() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(sortOptions[0])

  const handleOptionClick = (option: typeof sortOptions[0]) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left sort-dropdown">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-48 rounded-sm border border-gray-300 shadow-sm px-3 py-2 bg-white text-xs font-medium text-gray-700 uppercase tracking-wider hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.label}
          {isOpen ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-48 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="none">
            {sortOptions.map(option => (
              <button
                key={option.value}
                className={`${
                  selectedOption.value === option.value
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } block w-full text-left px-3 py-1.5 text-xs uppercase tracking-wider hover:bg-gray-100`}
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Made with Bob
