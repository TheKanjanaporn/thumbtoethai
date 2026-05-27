import os

path = "assets"
print(f"Listing all files in {path}...")
if os.path.exists(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            fpath = os.path.join(root, file)
            print(f"File: {file} | Size: {os.path.getsize(fpath)} bytes")
else:
    print("Path does not exist.")
