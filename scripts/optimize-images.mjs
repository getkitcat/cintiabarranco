import sharp from 'sharp';
import { mkdirSync } from 'fs';
const SRC = 'C:/Users/ACER/AppData/Local/Temp/claude/C--Users-ACER-Desktop-dev/bee47760-8b9d-4cf4-9c6b-fbbeedf82229/scratchpad/cintia-handoff/website-redesign-request/project';
const OUT = 'public/assets/photos';
mkdirSync(OUT, { recursive: true });
// prototype filename -> semantic name
const map = {
  '1.jpg': 'cintia-retrato',
  '18.jpg': 'cintia-consulta',
  '2.jpg.jpeg': 'cintia-marca',
  '28.jpg': 'cintia-trabajando',
  '54.jpg': 'terapia-pareja',
  '55.jpg': 'terapia-familiar',
  '6.jpg': 'terapia-infantil',
};
for (const [file, name] of Object.entries(map)) {
  const src = `${SRC}/uploads/cintia barranco/${file}`;
  const meta = await sharp(src).metadata();
  for (const w of [640, 1000, 1600]) {
    if (w > meta.width) continue;
    await sharp(src).rotate().resize({ width: w }).webp({ quality: 74 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  // jpg fallback at mid width
  await sharp(src).rotate().resize({ width: 1000 }).jpeg({ quality: 76, mozjpeg: true }).toFile(`${OUT}/${name}.jpg`);
  console.log(name, `${meta.width}x${meta.height}`);
}
// logo -> trimmed png + webp
await sharp(`${SRC}/assets/logo.png`).trim().resize({ height: 160 }).png({ compressionLevel: 9 }).toFile('public/assets/logo.png');
await sharp(`${SRC}/assets/logo.png`).trim().resize({ height: 160 }).webp({ quality: 92 }).toFile('public/assets/logo.webp');
const lm = await sharp('public/assets/logo.png').metadata();
console.log('logo', `${lm.width}x${lm.height}`);
