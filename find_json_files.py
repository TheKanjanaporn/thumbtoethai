import os
import json

print("Searching for json files in c:\\Users\\punch\\Desktop\\Thumbtoe...")
for root, dirs, files in os.walk("."):
    # skip node_modules and .git
    if "node_modules" in root or ".git" in root or ".wrangler" in root:
        continue
    for file in files:
        if file.endswith(".json") or "product" in file.lower() or "data" in file.lower():
            path = os.path.join(root, file)
            print(f"File: {path} | Size: {os.path.getsize(path)} bytes")
