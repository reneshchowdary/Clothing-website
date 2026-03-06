const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash image URLs for women's dresses
const imageUrls = [
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', // Floral dress
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80', // Summer dress
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80', // White dress
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', // Pink dress
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', // Elegant dress
  'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80', // Maxi dress
  'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&q=80', // Printed dress
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80', // Cotton dress
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80', // Casual dress
  'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80', // Party dress
  'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80', // Ethnic dress
  'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&q=80', // Designer dress
  'https://images.unsplash.com/photo-1595777216528-071e0127ccf4?w=800&q=80', // Boho dress
  'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80', // Midi dress
  'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80', // Formal dress
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', // Cocktail dress
  'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800&q=80', // Vintage dress
  'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80', // Striped dress
  'https://images.unsplash.com/photo-1564257577-7fd112d6b4fd?w=800&q=80', // Wrap dress
  'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&q=80', // Evening dress
];

const outputDir = path.join(__dirname, 'public', 'images', 'products');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(outputDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting download of product images from Unsplash...\n');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = `dress${i + 1}.jpg`;
    try {
      await downloadImage(imageUrls[i], filename);
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download image ${i + 1}`);
    }
  }
  
  console.log('\n✓ All images downloaded successfully!');
  console.log(`Images saved to: ${outputDir}`);
}

downloadAllImages().catch(console.error);

// Made with Bob
