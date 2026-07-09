from pathlib import Path
import urllib.request

OUT = Path(__file__).resolve().parent / "images"
OUT.mkdir(exist_ok=True)

# Official The Repulse Bay / Verandah imagery (public site assets)
urls = {
    "venue-dining.jpg": "https://www.therepulsebay.com/-/media/trb/02_dining/01_landing/dining_theverandah.jpg",
    "venue-experience.jpg": "https://www.therepulsebay.com/-/media/trb/00_homepage/experience5a/restaurant-repulsebay-a1.jpg",
}

# Additional candidate pages / assets to probe
extra = [
    "https://www.therepulsebay.com/-/media/trb/02_dining/the-verandah/verandah-hero.jpg",
    "https://www.therepulsebay.com/-/media/trb/02_dining/the-verandah/verandah-interior.jpg",
    "https://www.therepulsebay.com/-/media/trb/02_dining/02_theverandah/verandah.jpg",
    "https://www.therepulsebay.com/-/media/trb/02_dining/02_theverandah/the-verandah.jpg",
    "https://www.therepulsebay.com/-/media/trb/02_dining/02_theverandah/dining_theverandah.jpg",
]

headers = {"User-Agent": "Mozilla/5.0 (compatible; WeddingInviteBot/1.0)"}


def download(name: str, url: str) -> bool:
    dest = OUT / name
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=40) as resp:
            data = resp.read()
            ctype = resp.headers.get("Content-Type", "")
        if len(data) < 8000:
            print(f"SKIP small {name} ({len(data)}) {url}")
            return False
        if "image" not in ctype and not url.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            print(f"SKIP non-image {name} {ctype} {url}")
            return False
        dest.write_bytes(data)
        print(f"OK {name} {len(data)} bytes <- {url}")
        return True
    except Exception as e:
        print(f"FAIL {name}: {e}")
        return False


for name, url in urls.items():
    download(name, url)

for i, url in enumerate(extra, start=1):
    download(f"venue-extra-{i}.jpg", url)

# Scrape homepage + verandah page for more media paths
import re

pages = [
    "https://www.therepulsebay.com/en",
    "https://www.therepulsebay.com/en/dining/the-verandah-afternoon-tea",
    "https://www.therepulsebay.com/en/dining",
]
found = set()
for page in pages:
    try:
        req = urllib.request.Request(page, headers=headers)
        html = urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")
        for m in re.findall(r"(?:https://www\.therepulsebay\.com)?(/-?/media/trb/[^\"'\s>]+\.(?:jpg|jpeg|png|webp))", html, re.I):
            if "verandah" in m.lower() or "dining" in m.lower() or "restaurant" in m.lower() or "repulse" in m.lower():
                found.add(m)
    except Exception as e:
        print("PAGE FAIL", page, e)

print("FOUND", len(found))
for i, path in enumerate(sorted(found), start=1):
    url = path if path.startswith("http") else "https://www.therepulsebay.com" + path
    # normalize double slash after domain if needed
    url = url.replace("com//-", "com/-")
    download(f"venue-found-{i}.jpg", url)
