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
          className="inline-flex justify-center items-center w-52 rounded border border-neutral-300 shadow-soft px-4 py-2.5 bg-white text-xs font-semibold text-neutral-700 uppercase tracking-wider hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.label}
          {isOpen ? <FiChevronUp className="ml-2 text-neutral-500" size={14} /> : <FiChevronDown className="ml-2 text-neutral-500" size={14} />}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-52 rounded shadow-medium bg-white border border-neutral-200 z-10">
          <div className="py-1" role="none">
            {sortOptions.map(option => (
              <button
                key={option.value}
                className={`${
                  selectedOption.value === option.value
                    ? 'bg-primary-light text-primary font-bold'
                    : 'text-neutral-700 font-medium'
                } block w-full text-left px-4 py-2.5 text-xs uppercase tracking-wider hover:bg-neutral-50 transition-colors`}
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
