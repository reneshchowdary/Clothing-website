const fs = require('fs')
const path = require('path')

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images', 'products')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// Color palettes for dresses
const colors = [
  ['#E8B4D9', '#D4A5C7', '#C096B5'], // Mauve/Pink
  ['#6B9BD1', '#5A8AC0', '#4979AF'], // Blue
  ['#E8C547', '#D7B436', '#C6A325'], // Mustard
  ['#FFB6C1', '#FFA0B0', '#FF8A9F'], // Pink
  ['#2C2C2C', '#1A1A1A', '#0A0A0A'], // Black
  ['#7CB342', '#6AA02F', '#588D1C'], // Green
  ['#FFFFFF', '#F5F5F5', '#E8E8E8'], // White
  ['#DC143C', '#C8102E', '#B40C20'], // Red
  ['#1E3A5F', '#162D4A', '#0E2035'], // Navy
  ['#FFDAB9', '#FFC9A0', '#FFB887'], // Peach
]

// Create SVG placeholder images
for (let i = 1; i <= 20; i++) {
  const imagePath = path.join(imagesDir, `dress${i}.jpg`)
  const colorSet = colors[(i - 1) % colors.length]
  
  const svgContent = `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${colorSet[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${colorSet[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colorSet[2]};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="600" fill="#f5f5f5"/>
  
  <!-- Dress silhouette -->
  <g transform="translate(200, 100)">
    <!-- Bodice -->
    <ellipse cx="0" cy="0" rx="60" ry="80" fill="url(#grad${i})"/>
    
    <!-- Skirt -->
    <path d="M -60 60 Q -80 200 -100 400 L 100 400 Q 80 200 60 60 Z" fill="url(#grad${i})" opacity="0.9"/>
    
    <!-- Waist detail -->
    <rect x="-70" y="55" width="140" height="10" fill="${colorSet[2]}" opacity="0.6"/>
    
    <!-- Decorative elements -->
    <circle cx="-30" cy="150" r="8" fill="white" opacity="0.3"/>
    <circle cx="0" cy="180" r="8" fill="white" opacity="0.3"/>
    <circle cx="30" cy="150" r="8" fill="white" opacity="0.3"/>
  </g>
  
  <!-- Product label -->
  <rect x="20" y="520" width="360" height="60" fill="white" opacity="0.9" rx="5"/>
  <text x="200" y="550" font-family="Arial, sans-serif" font-size="20" fill="#333" text-anchor="middle" font-weight="bold">
    Dress ${i}
  </text>
  <text x="200" y="570" font-family="Arial, sans-serif" font-size="14" fill="#666" text-anchor="middle">
    Product Image
  </text>
</svg>`

  fs.writeFileSync(imagePath, svgContent)
  console.log(`Created SVG placeholder image: dress${i}.jpg`)
}

console.log('All SVG placeholder images created successfully!')

// Made with Bob