const https = require('https');
const fs = require('fs');
const path = require('path');

// Better Unsplash URLs for the missing images
const imageUrls = {
  'dress13.jpg': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
  'dress19.jpg': 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80'
};

const outputDir = path.join(__dirname, 'public', 'images', 'products');

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

async function fixMissingImages() {
  console.log('Fixing missing images...\n');
  
  for (const [filename, url] of Object.entries(imageUrls)) {
    try {
      await downloadImage(url, filename);
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download ${filename}`);
    }
  }
  
  console.log('\n✓ Missing images fixed!');
}

fixMissingImages().catch(console.error);

// Made with Bob
