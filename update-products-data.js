const fs = require('fs');
const path = require('path');

// Read the products file
const productsPath = path.join(__dirname, 'src', 'data', 'products.ts');
let content = fs.readFileSync(productsPath, 'utf8');

// Define collection assignments based on product characteristics
const updates = [
  // Products 1-5: Dresses, some new, some on sale
  { id: '1', collection: ['dresses', 'new'], isOnSale: true },
  { id: '2', collection: ['dresses', 'new'], isOnSale: true },
  { id: '3', collection: ['dresses'], isOnSale: true },
  { id: '4', collection: ['dresses', 'new'], isOnSale: true },
  { id: '5', collection: ['dresses'], isOnSale: true },
  
  // Products 6-10: Dresses, mix of collections
  { id: '6', collection: ['dresses'], isOnSale: true },
  { id: '7', collection: ['dresses', 'new'], isOnSale: true },
  { id: '8', collection: ['dresses', 'ethnic'], isOnSale: true },
  { id: '9', collection: ['dresses'], isOnSale: true },
  { id: '10', collection: ['dresses'], isOnSale: true },
  
  // Products 11-15: Mix
  { id: '11', collection: ['dresses', 'new'], isOnSale: true },
  { id: '12', collection: ['dresses'], isOnSale: true },
  { id: '13', collection: ['dresses'], isOnSale: true },
  { id: '14', collection: ['dresses'], isOnSale: true },
  { id: '15', collection: ['dresses'], isOnSale: true },
  
  // Products 16-20: Mix
  { id: '16', collection: ['dresses', 'new', 'ethnic'], isOnSale: true },
  { id: '17', collection: ['dresses'], isOnSale: true },
  { id: '18', collection: ['dresses'], isOnSale: true },
  { id: '19', collection: ['dresses', 'new'], isOnSale: true },
  { id: '20', collection: ['dresses', 'ethnic'], isOnSale: true },
];

// Add collection and isOnSale fields to each product
updates.forEach(update => {
  const idPattern = new RegExp(`(id: '${update.id}',\\s+title:.*?\\n.*?\\n.*?\\n.*?\\n.*?\\n.*?\\n.*?category: '[^']+',)`, 's');
  
  content = content.replace(idPattern, (match) => {
    return match + `\n    collection: ${JSON.stringify(update.collection)},`;
  });
  
  // Add isOnSale if product has discount
  const productPattern = new RegExp(`(id: '${update.id}',[\\s\\S]*?)(isNew:)`, 'm');
  if (update.isOnSale && content.match(productPattern)) {
    content = content.replace(productPattern, (match, before, isNew) => {
      return before + `isOnSale: true,\n    ` + isNew;
    });
  }
});

// Write back
fs.writeFileSync(productsPath, content, 'utf8');
console.log('✓ Products data updated with collection and isOnSale fields');

// Made with Bob
