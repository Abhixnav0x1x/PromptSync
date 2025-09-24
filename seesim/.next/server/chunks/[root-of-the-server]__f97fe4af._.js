module.exports = [
"[project]/seesim/.next-internal/server/app/api/compare/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/seesim/lib/supabase/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupabaseServer",
    ()=>createSupabaseServer,
    "getServerSession",
    ()=>getServerSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
;
;
function createSupabaseServer() {
    const cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://uxihhmzuzlbjhjtpthtj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4aWhobXp1emxiamhqdHB0aHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2ODI2MzcsImV4cCI6MjA3MTI1ODYzN30.Bo4zEabxLzhxDCj0j0FRAHDgiNNHqIKAHzCD7XnTqkE"), {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            }
        }
    });
}
async function getServerSession() {
    const supabase = createSupabaseServer();
    const { data: { session } } = await supabase.auth.getSession();
    return session ?? null;
}
}),
"[project]/seesim/app/api/compare/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/lib/supabase/server.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSupabaseServer"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const { prompt, image, selected_ids } = await req.json();
    if (!prompt || typeof prompt !== "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid prompt"
        }, {
            status: 400
        });
    }
    const { data: llms, error } = await supabase.from("llms").select("id, model_name, nickname, api_key").order("created_at", {
        ascending: false
    });
    if (error) return __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: error.message
    }, {
        status: 500
    });
    const selected = Array.isArray(selected_ids) ? selected_ids : null;
    const toUse = selected && selected.length ? (llms ?? []).filter((l)=>selected.includes(l.id)) : llms ?? [];
    const appUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
    // If image is a data URL, upload to Supabase Storage and use public URL
    let imageUrl = null;
    if (typeof image === "string" && image.startsWith("data:")) {
        try {
            const matches = image.match(/^data:(.*?);base64,(.*)$/);
            if (matches) {
                const contentType = matches[1] || "application/octet-stream";
                const base64 = matches[2];
                const buffer = Buffer.from(base64, "base64");
                const path = `attachments/${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
                const { error: upErr } = await supabase.storage.from("attachments").upload(path, buffer, {
                    contentType,
                    cacheControl: "3600",
                    upsert: false
                });
                if (!upErr) {
                    const { data } = supabase.storage.from("attachments").getPublicUrl(path);
                    imageUrl = data?.publicUrl || null;
                }
            }
        } catch (e) {
            imageUrl = null; // fallback to sending original image below
        }
    } else if (typeof image === "string") {
        imageUrl = image; // already a URL
    }
    const PRIMARY_TIMEOUT_MS = 60000; // 25s primary
    const RETRY_TIMEOUT_MS = 12000; // 12s retry
    const RETRY_DELAY_MS = 60000; // wait 60s before retry
    // Use model defaults (omit max_tokens)
    const PRIMARY_MAX_TOKENS = undefined;
    const RETRY_MAX_TOKENS = undefined;
    async function requestOnce(l, maxTokens, timeoutMs) {
        const apiKey = l.api_key;
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), timeoutMs);
        try {
            const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                    // Recommended by OpenRouter to improve acceptance/rate limits
                    "HTTP-Referer": appUrl,
                    Referer: appUrl,
                    "X-Title": "Seesim"
                },
                body: JSON.stringify((()=>{
                    const payload = {
                        model: l.model_name,
                        temperature: 0.7,
                        messages: [
                            {
                                role: "system",
                                content: "You are a helpful assistant."
                            },
                            imageUrl ? {
                                role: "user",
                                content: [
                                    {
                                        type: "text",
                                        text: prompt
                                    },
                                    {
                                        type: "image_url",
                                        image_url: {
                                            url: imageUrl
                                        }
                                    }
                                ]
                            } : {
                                role: "user",
                                content: prompt
                            }
                        ]
                    };
                    if (typeof maxTokens === "number" && maxTokens > 0) {
                        payload.max_tokens = maxTokens;
                    }
                    return payload;
                })()),
                signal: controller.signal
            });
            if (!res.ok) {
                // Try to parse JSON error; fallback to text
                let errText = "";
                try {
                    const j = await res.json();
                    errText = j?.error?.message || j?.message || JSON.stringify(j);
                } catch  {
                    errText = await res.text();
                }
                if (imageUrl) {
                    const lower = (errText || "").toLowerCase();
                    if (lower.includes("image") || lower.includes("vision") || res.status === 400) {
                        throw new Error("This LLM does not support file upload");
                    }
                }
                throw new Error(errText || `OpenRouter error ${res.status}`);
            }
            const json = await res.json();
            const choices = json?.choices;
            if (!Array.isArray(choices) || !choices.length) {
                throw new Error(`No choices in response: ${JSON.stringify(json)}`);
            }
            const content = choices[0]?.message?.content ?? "";
            if (!content) {
                throw new Error(`Empty content in response: ${JSON.stringify(json)}`);
            }
            return {
                id: l.id,
                model_name: l.model_name,
                nickname: l.nickname,
                content
            };
        } catch (err) {
            const msg = String(err?.message || err);
            if (controller.signal.aborted || /AbortError/i.test(msg)) {
                throw new Error(`Timed out after ${Math.round(timeoutMs / 1000)}s`);
            }
            throw err;
        } finally{
            clearTimeout(timeout);
        }
    }
    const results = await Promise.allSettled(toUse.map(async (l)=>{
        try {
            // Primary attempt
            return await requestOnce(l, PRIMARY_MAX_TOKENS, PRIMARY_TIMEOUT_MS);
        } catch (err) {
            const msg = String(err?.message || err);
            // Retry only on timeouts/overload/5xx-like errors
            if (/timed out/i.test(msg) || /abort/i.test(msg) || /overload|rate|capacity|gateway|timeout/i.test(msg)) {
                await new Promise((r)=>setTimeout(r, RETRY_DELAY_MS));
                try {
                    return await requestOnce(l, RETRY_MAX_TOKENS, RETRY_TIMEOUT_MS);
                } catch (e2) {
                    throw e2;
                }
            }
            throw err;
        }
    }));
    const response = results.map((r, idx)=>{
        const l = toUse[idx] || {};
        if (r.status === "fulfilled") {
            return {
                ...r.value,
                status: "success"
            };
        }
        return {
            id: l.id,
            model_name: l.model_name,
            nickname: l.nickname,
            status: "error",
            error: String(r.reason)
        };
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        results: response
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f97fe4af._.js.map