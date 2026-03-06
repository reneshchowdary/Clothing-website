# Libra - Women's Fashion E-commerce Website

A pixel-accurate clone of the Libas dresses collection page built with Next.js, React, and TailwindCSS.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Product Catalog**: Browse through a collection of dresses with filtering and sorting options
- **Advanced Filtering**: Filter products by size, color, category, fabric, occasion, pattern, price, style, sleeve length, and neck
- **Product Quick View**: Quick view modal for fast product preview
- **Shopping Cart**: Add products to cart with local storage persistence
- **Wishlist**: Save favorite products for later
- **Search Functionality**: Search overlay for finding products
- **Newsletter Subscription**: Email subscription form for updates
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions

## 📁 Project Structure

```
libra-clothing/
├── public/                  # Static files
│   ├── images/              # Product images
│   └── favicon.ico          # Favicon
├── src/
│   ├── components/          # Reusable components
│   │   ├── AnnouncementBar.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── SortControl.tsx
│   ├── data/                 # Data files
│   │   └── products.ts      # Product data
│   ├── pages/                # Next.js pages
│   │   ├── collections/
│   │   │   └── dresses.tsx   # Dresses collection page
│   │   ├── product/
│   │   │   └── [slug].tsx    # Product detail page
│   │   ├── _app.tsx          # Next.js app
│   │   ├── _document.tsx     # Next.js document
│   │   └── index.tsx         # Home page
│   └── styles/               # Global styles
│       └── globals.css       # Tailwind CSS
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **React Icons**: Popular icons for React applications

## 🎨 Customization

### Changing Brand Colors

Edit the `tailwind.config.js` file to modify the color palette:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1538', // Libas pink color
          light: '#F5E6E8',
          dark: '#6D0F2A',
        },
        // ... other colors
      }
    }
  }
}
```

### Adding Products

Edit the `src/data/products.ts` file to add or modify products:

```typescript
export const products: Product[] = [
  {
    id: '1',
    title: 'Mauve Printed Cotton Fit and Flare One Piece Dress',
    price: 2699,
    originalPrice: 8999,
    discount: 71,
    image: '/images/products/dress1.jpg',
    // ... other product properties
  },
  // Add more products...
]
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (2 columns)
- **Tablet**: 640px - 768px (2-3 columns)
- **Desktop**: 768px - 1024px (3 columns)
- **Large Desktop**: > 1024px (4 columns)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a frontend-only implementation
- No backend or payment processing
- Product images use placeholders
- For educational and portfolio purposes

## 🔮 Future Enhancements

- [ ] Implement cart functionality with context
- [ ] Add product detail page with image gallery
- [ ] Implement user authentication
- [ ] Add order history
- [ ] Implement product reviews and ratings
- [ ] Add size guide modal
- [ ] Implement image zoom functionality
- [ ] Add related products section
- [ ] Backend integration
- [ ] Payment gateway integration

## 📄 License

This project is open source and available for educational purposes.