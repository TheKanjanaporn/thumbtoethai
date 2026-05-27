import urllib.request
import json

ports = [8788, 8080, 3000, 5000]
data = None
for port in ports:
    url = f"http://127.0.0.1:{port}/api/data"
    print(f"Trying {url}...")
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=2) as response:
            res_data = response.read().decode('utf-8')
            parsed = json.loads(res_data)
            if parsed:
                data = parsed
                print(f"Success on port {port}!")
                break
    except Exception as e:
        print(f"Failed on port {port}: {e}")

if data:
    print(json.dumps(data, indent=2, ensure_ascii=False)[:2000])
    with open("kv_data_debug.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
else:
    print("Could not fetch data from local ports. Let's check local wrangler state.")
    # Let's see if we can find wrangler local state under .wrangler/state/v3/kv
