import os

blob_id = "c99decf7551be0e99ad38a49cf12eb507e8fa0c4d67b4126ba8f361978f251c00000019e5e60e06a"
print(f"Searching for files containing '{blob_id[:10]}' under .wrangler...")
for root, dirs, files in os.walk(".wrangler"):
    for file in files:
        if blob_id[:10] in file or file == blob_id:
            path = os.path.join(root, file)
            print(f"Match: {path} | Size: {os.path.getsize(path)} bytes")
