import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const src = resolve(root, "public/tnm-logo.png");

const image = sharp(src);
const meta = await image.metadata();
const { width, height } = meta;
if (!width || !height) throw new Error("could not read image dimensions");

const size = Math.min(width, height);
const left = Math.round((width - size) / 2);
const top = Math.round((height - size) / 2);

const square = await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(512, 512, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toBuffer();

const targets = [
  resolve(root, "src/app/icon.png"),
  resolve(root, "src/app/apple-icon.png"),
];

await Promise.all(
  targets.map((t) => sharp(square).toFile(t)),
);

console.log(`cropped ${width}x${height} -> 512x512 square (extract from ${left},${top} size ${size})`);
console.log(`wrote: ${targets.join(", ")}`);
