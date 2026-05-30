export async function onRequestGet(context) {
    try {
        const value = await context.env.DUIT_KV.get("thumbtoe_cms_data", { type: "stream" });
        if (value) {
            return new Response(value, {
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
        const dataStr = await context.request.text();
        
        let savedAt = null;
        try {
            // Only parsing minimally to find _savedAt if possible.
            // If it's too large and OOMs, the catch block might not save it, but text() helps.
            const parsed = JSON.parse(dataStr);
            savedAt = parsed._savedAt || null;
        } catch (e) {
            console.log("Could not parse JSON for _savedAt", e);
        }
        
        await context.env.DUIT_KV.put("thumbtoe_cms_data", dataStr);

        return new Response(JSON.stringify({ success: true, _savedAt: savedAt }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to save data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
