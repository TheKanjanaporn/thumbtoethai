import os

path = r".wrangler\state\v3\kv\miniflare-KVNamespaceObject"
print(f"Listing files in {path}...")
for root, dirs, files in os.walk(path):
    for file in files:
        fpath = os.path.join(root, file)
        print(f"File: {fpath} | Size: {os.path.getsize(fpath)} bytes")
