export async function onRequestGet(context) {
    try {
        const envKeys = Object.keys(context.env || {});
        const bindingDetails = {};
        for (const key of envKeys) {
            bindingDetails[key] = {
                type: typeof context.env[key],
                isKV: context.env[key] && typeof context.env[key].get === 'function'
            };
        }
        return new Response(JSON.stringify({
            envKeys,
            bindingDetails,
            hasKV: !!context.env.DUIT_KV
        }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
