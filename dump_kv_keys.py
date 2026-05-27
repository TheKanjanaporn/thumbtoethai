import sqlite3
import json

db_path = r".wrangler\state\v3\kv\miniflare-KVNamespaceObject\4dacb3fa4619428568331ff8d55ba55a84dd47a95956887099a4d05b24bbfb7a.sqlite"

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("SELECT key, value FROM _mf_entries;")
rows = cursor.fetchall()
print(f"Found {len(rows)} entries in _mf_entries.")

for row in rows:
    key = row[0]
    val = row[1]
    
    # In Miniflare KV SQLite, key is text, value can be blob
    # Let's decode value
    val_str = ""
    if isinstance(val, bytes):
        try:
            val_str = val.decode('utf-8')
        except:
            # Let's try decoding skipping errors or hex
            val_str = val.decode('utf-8', errors='ignore')
    else:
        val_str = str(val)
        
    print(f"Key: {key} | length of value: {len(val_str)}")
    
    # Try parsing as JSON
    try:
        # In some versions of Miniflare KV SQLite, the blob has metadata header prefix or is serialized.
        # Let's see if it has JSON content.
        # Let's find first '{' and last '}'
        start_idx = val_str.find('{')
        end_idx = val_str.rfind('}')
        if start_idx != -1 and end_idx != -1 and end_idx > start_idx:
            json_str = val_str[start_idx:end_idx+1]
            parsed = json.loads(json_str)
            filename = f"kv_dump_{key.replace(':', '_')}.json"
            with open(filename, "w", encoding="utf-8") as f:
                json.dump(parsed, f, indent=2, ensure_ascii=False)
            print(f"Saved parsed JSON to {filename}")
        else:
            print(f"Could not find JSON bounds in value of key {key}.")
            # Let's save the raw value
            with open(f"kv_raw_{key.replace(':', '_')}.txt", "w", encoding="utf-8", errors="ignore") as f:
                f.write(val_str)
            print(f"Saved raw text of key {key}")
    except Exception as e:
        print(f"Error handling key {key}: {e}")

conn.close()
