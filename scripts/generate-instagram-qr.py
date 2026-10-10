"""Print an apply_patch patch for local Instagram QR assets; requires reportlab.

Read URLs from the website's shared config to avoid QR/link drift.
Black modules, a white background and four-module quiet zone aid scanning.
"""
from pathlib import Path
import re
from reportlab.graphics.barcode.qrencoder import QRCode, QRErrorCorrectLevel

root = Path(__file__).resolve().parents[1]
config = (root / 'src/data/locations.js').read_text(encoding='utf-8')
print('*** Begin Patch')
for name in ('canada', 'india', 'official'):
    url = re.search(rf'export const {name}Instagram = "([^"]+)";', config).group(1)
    qr = QRCode(None, QRErrorCorrectLevel.M)
    qr.addData(url)
    qr.make()
    size = qr.getModuleCount() + 8
    path = ' '.join(f'M{x+4} {y+4}h1v1h-1z' for y, row in enumerate(qr.modules) for x, dark in enumerate(row) if dark)
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="246" height="246" shape-rendering="crispEdges"><rect width="{size}" height="{size}" fill="white"/><path d="{path}" fill="black"/></svg>'
    print(f'*** Add File: {root.as_posix()}/public/images/social/instagram-{name}.svg')
    print('+' + svg)
print('*** End Patch')
