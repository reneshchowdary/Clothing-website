import Link from 'next/link'

interface BreadcrumbProps {
  items: { name: string; href?: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 text-xs">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-primary"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.name}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Made with Bob
