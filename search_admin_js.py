with open("admin.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for modal rendering or product editing rendering
lines = content.split('\n')
for idx, line in enumerate(lines):
    if "form-group" in line.lower() or "price" in line.lower() or "shopee" in line.lower():
        if "input" in line.lower() or "label" in line.lower():
            if idx > 1200 and idx < 1300: # let's list some edit fields
                print(f"Line {idx+1}: {line}")
