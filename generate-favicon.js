import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const svgBuffer = readFileSync('./public/favicon.svg');

async function generateFavicons() {
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon-32.png');
  
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile('./public/favicon-16.png');

  console.log('Favicons generated successfully!');
  console.log('Note: Convert PNG files to ICO using an online tool like https://convertio.co/png-ico/');
  console.log('Or use favicon.svg directly in modern browsers.');
}

generateFavicons();
