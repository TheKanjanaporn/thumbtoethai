import sqlite3
import json

db_path = r".wrangler\state\v3\kv\miniflare-KVNamespaceObject\4dacb3fa4619428568331ff8d55ba55a84dd47a95956887099a4d05b24bbfb7a.sqlite"

print(f"Connecting to database: {db_path}")
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Let's see what tables exist
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print(f"Tables: {tables}")

# Let's inspect the data
# Typical table structure in Miniflare KV has key, value, metadata, etc.
# Let's list the first few rows of all tables
for table in tables:
    tname = table[0]
    print(f"\n--- Table {tname} ---")
    try:
        cursor.execute(f"SELECT * FROM {tname} LIMIT 10;")
        rows = cursor.fetchall()
        for row in rows:
            # Let's print key and first 100 chars of value
            key = row[0]
            val = row[1]
            if isinstance(val, bytes):
                try:
                    val_str = val.decode('utf-8')
                except:
                    val_str = str(val[:100])
            else:
                val_str = str(val)
            print(f"Key: {key} | Val preview: {val_str[:150]}")
            
            # If key is thumbtoe_cms_data, parse and print
            if key == "thumbtoe_cms_data":
                parsed = json.loads(val_str)
                with open("local_kv_cms_data.json", "w", encoding="utf-8") as f:
                    json.dump(parsed, f, indent=2, ensure_ascii=False)
                print(">>> Extracted local_kv_cms_data.json successfully!")
    except Exception as e:
        print(f"Failed to query {tname}: {e}")

conn.close()
