import os

print("Searching for Shopee images references in files...")
for root, dirs, files in os.walk("."):
    if "node_modules" in root or ".git" in root or ".wrangler" in root:
        continue
    for file in files:
        if file.endswith((".js", ".json", ".html", ".css")):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                if "th-11134207" in content:
                    print(f"Found reference in: {path}")
            except Exception as e:
                pass
