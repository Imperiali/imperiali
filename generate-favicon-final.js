import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./static/favicon.svg');

async function generateFavicons() {
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile('./static/favicon.png');
  
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('./static/apple-touch-icon.png');

  console.log('✅ Favicons generated successfully!');
  console.log('📁 Files created:');
  console.log('   - static/favicon.svg (main favicon)');
  console.log('   - static/favicon.png (fallback)');
  console.log('   - static/apple-touch-icon.png (Apple devices)');
}

generateFavicons().catch(console.error);
