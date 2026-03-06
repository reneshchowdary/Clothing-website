const fs = require('fs')
const path = require('path')

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images', 'products')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// Create placeholder images
for (let i = 1; i <= 20; i++) {
  const imagePath = path.join(imagesDir, `dress${i}.jpg`)

  // Create a simple HTML file that will serve as a placeholder image
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Product Image ${i}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f5f5f5;
          font-family: Arial, sans-serif;
          color: #333;
        }
        .placeholder {
          text-align: center;
          max-width: 400px;
          padding: 20px;
        }
        .dress {
          width: 300px;
          height: 450px;
          background: white;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .colors {
          display: flex;
          gap: 5px;
          margin: 10px 0;
        }
        .color {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
        }
      </style>
    </head>
    <body>
      <div class="placeholder">
        <div class="dress">
          <h2>Dress ${i}</h2>
          <div class="colors">
            <div class="color" style="background: #${Math.floor(Math.random()*16777215).toString(16)};"></div>
            <div class="color" style="background: #${Math.floor(Math.random()*16777215).toString(16)};"></div>
            <div class="color" style="background: #${Math.floor(Math.random()*16777215).toString(16)};"></div>
          </div>
          <p>Product Image ${i}</p>
        </div>
      </div>
    </body>
    </html>
  `

  fs.writeFileSync(imagePath, htmlContent)
  console.log(`Created placeholder image: dress${i}.jpg`)
}

console.log('All placeholder images created successfully!')

// Made with Bob
