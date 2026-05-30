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
        const savedAtHeader = context.request.headers.get("X-Saved-At");
        const savedAt = savedAtHeader ? parseInt(savedAtHeader, 10) : null;
        
        const dataStr = await context.request.text();
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

