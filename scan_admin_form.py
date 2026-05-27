with open("admin.js", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split('\n')
print("Searching for product edit form fields...")
for idx, line in enumerate(lines):
    if "p-price" in line or "p-badge" in line or "p-image" in line:
        print(f"Line {idx+1}: {line}")
