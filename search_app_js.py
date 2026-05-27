with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for modal rendering or product details rendering
lines = content.split('\n')
for idx, line in enumerate(lines):
    if "modal" in line.lower() or "shopee" in line.lower() or "line" in line.lower() or "button" in line.lower():
        if "render" in line.lower() or "open" in line.lower() or "show" in line.lower():
            print(f"Line {idx+1}: {line}")
