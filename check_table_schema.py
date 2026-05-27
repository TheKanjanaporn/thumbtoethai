import sqlite3

db_path = r".wrangler\state\v3\kv\miniflare-KVNamespaceObject\4dacb3fa4619428568331ff8d55ba55a84dd47a95956887099a4d05b24bbfb7a.sqlite"

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Get column info
cursor.execute("PRAGMA table_info(_mf_entries);")
columns = cursor.fetchall()
print(f"Columns of _mf_entries: {columns}")

conn.close()
