with open("admin.js", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split('\n')
print("Searching for product editor functions...")
for idx, line in enumerate(lines):
    if "openProductDrawer" in line or "saveProduct" in line:
        print(f"Line {idx+1}: {line}")
