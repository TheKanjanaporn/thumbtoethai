import json

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

start = content.find("const PRODUCTS_DEFAULT = [")
end = content.find("];", start)
array_json_str = content[start + len("const PRODUCTS_DEFAULT = "):end + 1]

products = json.loads(array_json_str)
print(f"Total Products in app.js: {len(products)}")
for i, p in enumerate(products):
    print(f"{i+1:02d}. ID: {p.get('id')} | TH: {p.get('title', {}).get('th')} | Price: {p.get('price')}")
