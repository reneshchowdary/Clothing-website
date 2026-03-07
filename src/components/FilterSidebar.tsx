import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { filterOptions } from '../data/products'

interface FilterGroupProps {
  title: string
  options: string[]
  isOpen: boolean
  onToggle: () => void
}

function FilterGroup({ title, options, isOpen, onToggle }: FilterGroupProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionChange = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  return (
    <div className="py-5 border-b border-neutral-200">
      <button
        className="flex justify-between items-center w-full text-xs font-bold text-neutral-900 uppercase tracking-wider hover:text-primary transition-colors"
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp className="text-neutral-500" size={16} /> : <FiChevronDown className="text-neutral-500" size={16} />}
      </button>

      {isOpen && (
        <div className="mt-4 space-y-3">
          {options.map(option => (
            <div key={option} className="flex items-center group">
              <input
                type="checkbox"
                id={`${title.toLowerCase().replace(/\s+/g, '-')}-${option.toLowerCase().replace(/\s+/g, '-')}`}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                className="h-4 w-4 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 border-neutral-300 rounded cursor-pointer transition-colors"
              />
              <label
                htmlFor={`${title.toLowerCase().replace(/\s+/g, '-')}-${option.toLowerCase().replace(/\s+/g, '-')}`}
                className="ml-3 block text-sm text-neutral-600 cursor-pointer group-hover:text-neutral-900 transition-colors"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function FilterSidebar() {
  const [openFilters, setOpenFilters] = useState({
    size: true,
    colors: false,
    category: false,
    fabric: false,
    occasion: false,
    pattern: false,
    price: false,
    style: false,
    sleeve: false,
    neck: false
  })

  const toggleFilter = (filter: keyof typeof openFilters) => {
    setOpenFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }))
  }

  return (
    <div className="filter-sidebar w-full lg:w-72 bg-white rounded-lg border border-neutral-200 p-6">
      <div className="mb-6 pb-4 border-b border-neutral-200">
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Filters</h2>
      </div>

      <FilterGroup
        title="SIZE"
        options={filterOptions.sizes}
        isOpen={openFilters.size}
        onToggle={() => toggleFilter('size')}
      />

      <FilterGroup
        title="COLORS"
        options={filterOptions.colors}
        isOpen={openFilters.colors}
        onToggle={() => toggleFilter('colors')}
      />

      <FilterGroup
        title="CATEGORY"
        options={filterOptions.categories}
        isOpen={openFilters.category}
        onToggle={() => toggleFilter('category')}
      />

      <FilterGroup
        title="FABRIC"
        options={filterOptions.fabrics}
        isOpen={openFilters.fabric}
        onToggle={() => toggleFilter('fabric')}
      />

      <FilterGroup
        title="OCCASION"
        options={filterOptions.occasions}
        isOpen={openFilters.occasion}
        onToggle={() => toggleFilter('occasion')}
      />

      <FilterGroup
        title="PATTERN AND PRINT"
        options={filterOptions.patterns}
        isOpen={openFilters.pattern}
        onToggle={() => toggleFilter('pattern')}
      />

      <div className="py-5 border-b border-neutral-200">
        <button
          className="flex justify-between items-center w-full text-xs font-bold text-neutral-900 uppercase tracking-wider hover:text-primary transition-colors"
          onClick={() => toggleFilter('price')}
        >
          <span>PRICE</span>
          {openFilters.price ? <FiChevronUp className="text-neutral-500" size={16} /> : <FiChevronDown className="text-neutral-500" size={16} />}
        </button>

        {openFilters.price && (
          <div className="mt-5">
            <input
              type="range"
              min="0"
              max="20000"
              step="500"
              className="price-slider w-full"
            />
            <div className="flex justify-between text-xs text-neutral-600 mt-4 font-semibold">
              <span>₹0</span>
              <span>₹20,000+</span>
            </div>
          </div>
        )}
      </div>

      <FilterGroup
        title="STYLE"
        options={filterOptions.styles}
        isOpen={openFilters.style}
        onToggle={() => toggleFilter('style')}
      />

      <FilterGroup
        title="SLEEVE LENGTH"
        options={filterOptions.sleeveLengths}
        isOpen={openFilters.sleeve}
        onToggle={() => toggleFilter('sleeve')}
      />

      <FilterGroup
        title="NECK"
        options={filterOptions.necks}
        isOpen={openFilters.neck}
        onToggle={() => toggleFilter('neck')}
      />
    </div>
  )
}

// Made with Bob
