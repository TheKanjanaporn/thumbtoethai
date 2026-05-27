export async function onRequestGet(context) {
    try {
        const leads = await context.env.DUIT_KV.get("thumbtoe_leads");
        if (leads) {
            return new Response(leads, {
                headers: { "Content-Type": "application/json" }
            });
        }
        return new Response(JSON.stringify([]), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to read leads" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        await context.env.DUIT_KV.put("thumbtoe_leads", JSON.stringify(body));
        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Failed to save leads" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
