import json

path = r".wrangler\state\v3\kv\DUIT_KV\blobs\c99decf7551be0e99ad38a49cf12eb507e8fa0c4d67b4126ba8f361978f251c00000019e5e60e06a"

print("Reading blob file...")
with open(path, "rb") as f:
    content = f.read()

# Let's try decoding as utf-8
try:
    content_str = content.decode('utf-8')
    print("Decoded successfully as UTF-8!")
    print(f"Length: {len(content_str)} characters")
    
    # Check if it starts with JSON curly brace
    start_idx = content_str.find('{')
    end_idx = content_str.rfind('}')
    if start_idx != -1 and end_idx != -1 and end_idx > start_idx:
        json_str = content_str[start_idx:end_idx+1]
        try:
            data = json.loads(json_str)
            print("Loaded JSON successfully!")
            print("Keys in JSON:", list(data.keys()))
            if "products" in data:
                print(f"Total products in KV: {len(data['products'])}")
                for i, p in enumerate(data['products']):
                    print(f"{i+1:02d}. ID: {p.get('id')} | Price: {p.get('price')}")
            else:
                print("No products key found.")
        except Exception as je:
            print("Failed to parse JSON segment:", je)
    else:
        print("No JSON boundaries found.")
except Exception as e:
    print("Failed to decode as UTF-8:", e)
