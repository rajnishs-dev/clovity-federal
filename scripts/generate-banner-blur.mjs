// Writes lib/banner-blur.json: a tiny (16px wide) base64 copy of every banner in public/assets/img/banners, keyed by file
// name without the extension. PageBanner shows it blurred behind the real photo, so the banner area shows a soft preview
// of the photo instead of a flat colour while the full image downloads (same idea as next/image's placeholder="blur").
//
// Run after adding or replacing a banner:  npm run banner-blur
// sharp ships with Next.js, so nothing extra needs installing.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public/assets/img/banners');
const out = path.join(process.cwd(), 'lib/banner-blur.json');

const map = {};
for (const file of fs.readdirSync(dir).sort()) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const buf = await sharp(path.join(dir, file)).resize({ width: 16 }).jpeg({ quality: 70 }).toBuffer();
  map[file.replace(/\.[^.]+$/, '')] = `data:image/jpeg;base64,${buf.toString('base64')}`;
}

fs.writeFileSync(out, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Wrote ${Object.keys(map).length} banner placeholders to lib/banner-blur.json`);
