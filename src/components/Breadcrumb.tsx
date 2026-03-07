import Link from 'next/link'

interface BreadcrumbProps {
  items: { name: string; href?: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-3" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 text-xs">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-500 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-neutral-900 font-semibold">{item.name}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-neutral-300">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Made with Bob
