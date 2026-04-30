#!/usr/bin/env bash
# Strip backgrounds from public/brands/* logos.
# - SVG: replace with transparent simpleicons.org versions where available
# - JPEG/WEBP: ImageMagick flood-fill white → transparent → PNG
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/brands"
cd "$DIR"

echo "[+] Working in $DIR"
mkdir -p originals
cp -n *.svg *.jpeg *.webp originals/ 2>/dev/null || true

fetch_si() {
  local slug="$1" out="$2"
  local code
  code=$(curl -fsSL -o "$out.tmp" -w "%{http_code}" "https://cdn.simpleicons.org/$slug" 2>/dev/null || echo 000)
  if [[ "$code" == "200" && -s "$out.tmp" ]]; then
    mv "$out.tmp" "$out"
    echo "    $slug -> $out"
    return 0
  fi
  rm -f "$out.tmp"
  echo "    $slug -> SKIP (http=$code)"
  return 1
}

echo "[+] Pulling transparent SVGs from simpleicons.org"
# Coursera on simpleicons is the C-only mark; we want the full "coursera"
# wordmark, so we keep the Wikipedia SVG and strip its background instead.
fetch_si meta meta.svg || true
fetch_si nba nba.svg || true
fetch_si unitednations un.svg || true
# NFL not on simpleicons; keep the original multi-colour shield.

echo "[+] Rebuilding Coursera wordmark (transparent BG, brand-blue text)"
python - <<'PY'
import pathlib
src = pathlib.Path("originals/coursera.svg").read_text()
src = src.replace('<path d="m600 0h-600v600h600z" fill="#fff"/>', '')
src = src.replace('<path d="m600 0h-600v600h600z" fill="#0056d2"/>', '')
src = src.replace('fill="#fff"', 'fill="#0056d2"')
pathlib.Path("coursera.svg").write_text(src)
PY

# Strip white backgrounds from raster logos and save as PNG.
strip_white() {
  local in="$1"
  local stem="${in%.*}"
  # Drop the .jpg.jpeg double-extension naming if present.
  stem="${stem%.jpg}"
  local out="${stem}.png"
  echo "    $in -> $out"
  # -fuzz tolerates near-white pixels; flood-fills from each corner so we
  # don't punch holes in the logo itself.
  magick "$in" \
    -alpha set \
    -bordercolor white -border 1 \
    -fuzz 12% \
    -fill none -floodfill +0+0 white \
    -shave 1x1 \
    "$out"
}

echo "[+] Stripping white BG from raster logos via ImageMagick"
shopt -s nullglob
for f in *.jpeg *.jpg *.webp; do
  strip_white "$f"
done

# Keep only the cleaned-up files; remove the originals from the public folder
# (they remain in originals/ for reference).
echo "[+] Removing source raster files now that PNGs exist"
rm -f *.jpeg *.jpg *.webp

echo "[✓] Done. Files in $DIR:"
ls -la *.svg *.png 2>/dev/null
