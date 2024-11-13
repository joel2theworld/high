import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, './src/assets');
const outputDir = path.join(__dirname, './src/assets/optimized');

const optimizeImages = async () => {
    try {
        // Create output directory if it doesn't exist
        await fs.mkdir(outputDir, { recursive: true });
        console.log('Input Directory:', inputDir);

        // Read all files from input directory
        const files = await fs.readdir(inputDir);

        // Process each file
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                console.log(`Optimizing: ${file}`);
                
                await sharp(path.join(inputDir, file))
                    .webp({ quality: 80 })
                    .toFile(path.join(outputDir, `${file.split('.')[0]}.webp`));
                
                // Also create a smaller version for thumbnails/placeholders
                await sharp(path.join(inputDir, file))
                    .resize(20) // very small for placeholder
                    .webp({ quality: 20 })
                    .toFile(path.join(outputDir, `${file.split('.')[0]}-thumb.webp`));
            }
            else{
              console.log('No matching files found');
            }
        }
        console.log('Image optimization complete!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
};

// Run the optimization
optimizeImages();