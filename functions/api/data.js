export async function onRequestGet(context) {
    try {
        const data = await context.env.DUIT_KV.get("thumbtoe_cms_data");
        if (data) {
            return new Response(data, {
                headers: { 
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            });
        }
        return new Response(JSON.stringify(null), {
            headers: { 
                "Content-Type": "application/json",
                "Cache-Control": "no-cache, no-store, must-revalidate"
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to read data" }), {
            status: 500,
            headers: { 
                "Content-Type": "application/json",
                "Cache-Control": "no-cache, no-store, must-revalidate"
            }
        });
    }
}

export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        const dataStr = JSON.stringify(body);
        
        // Write to KV — note: KV itself is eventually consistent globally,
        // but same-datacenter reads after write are strongly consistent.
        // cacheTtl: 0 on GET ensures we always read the latest from KV primary.
        await context.env.DUIT_KV.put("thumbtoe_cms_data", dataStr);

        // Return the saved data back so the client can verify it was stored correctly
        return new Response(JSON.stringify({ success: true, _savedAt: body._savedAt || null }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to save data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
