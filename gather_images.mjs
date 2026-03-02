import fs from 'fs';
import path from 'path';

function getFiles(dir, files = []) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, files);
        } else {
            files.push(fullPath);
        }
    });
    return files;
}

const assetsDir = 'C:/Users/HP/Downloads/iti/fresh-start-university/src/assets';
const allFiles = getFiles(assetsDir);

const imageFiles = allFiles.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));

const imports = [];
const objects = [];

imageFiles.forEach((file, index) => {
    // src\assets\iti\imag (1).jpeg -> iti/imag (1).jpeg -> iti_imag_1_jpeg
    const relativePath = path.relative(assetsDir, file).replace(/\\/g, '/');
    const varName = 'img_' + index;
    imports.push(`import ${varName} from '../assets/${relativePath}';`);
    objects.push(`  { src: ${varName}, alt: 'Gallery Image ${index + 1}' },`);
});

const content = `
${imports.join('\n')}

export const allImagesList = [
${objects.join('\n')}
];
`;

fs.writeFileSync('C:/Users/HP/Downloads/iti/fresh-start-university/src/data/allImages.js', content);
console.log('Done!');
