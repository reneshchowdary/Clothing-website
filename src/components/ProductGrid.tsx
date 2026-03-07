import ProductCard from './ProductCard'
import { Product } from '../data/products'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// Made with Bob
