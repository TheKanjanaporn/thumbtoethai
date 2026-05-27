import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total Categories: {len(data.get('categories', []))}")
print(f"Total Products: {len(data.get('products', []))}")
print("\n--- Products List ---")
for i, p in enumerate(data.get("products", [])):
    pid = p.get("id")
    name_th = p.get("title", {}).get("th", "N/A")
    name_en = p.get("title", {}).get("en", "N/A")
    price = p.get("price", "N/A")
    cat = p.get("category", "N/A")
    print(f"{i+1:02d}. ID: {pid} | Category: {cat} | TH: {name_th} | EN: {name_en} | Price: {price}")
