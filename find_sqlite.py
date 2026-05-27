import os

print("Searching for sqlite databases under .wrangler...")
found = False
for root, dirs, files in os.walk(".wrangler"):
    for file in files:
        if file.endswith(".sqlite") or "db" in file.lower() or file.endswith(".sqlite3"):
            path = os.path.join(root, file)
            print(f"File: {path} | Size: {os.path.getsize(path)} bytes")
            found = True
if not found:
    print("No sqlite databases found.")
