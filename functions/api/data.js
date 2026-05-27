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
        await context.env.DUIT_KV.put("thumbtoe_cms_data", JSON.stringify(body));
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to save data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
