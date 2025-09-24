(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/seesim/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSupabaseClient",
    ()=>createSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/seesim/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createSupabaseClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://uxihhmzuzlbjhjtpthtj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4aWhobXp1emxiamhqdHB0aHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2ODI2MzcsImV4cCI6MjA3MTI1ODYzN30.Bo4zEabxLzhxDCj0j0FRAHDgiNNHqIKAHzCD7XnTqkE"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/store/useAppStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        llms: [],
        setLLMs: (v)=>set({
                llms: v
            }),
        responses: {},
        setResponse: (id, r)=>set((s)=>{
                var _s_responses_id;
                return {
                    responses: {
                        ...s.responses,
                        [id]: {
                            ...(_s_responses_id = s.responses[id]) !== null && _s_responses_id !== void 0 ? _s_responses_id : {
                                id,
                                status: "idle"
                            },
                            ...r
                        }
                    }
                };
            }),
        selectedLLMIds: [],
        setSelectedLLMIds: (ids)=>set({
                selectedLLMIds: ids
            }),
        promptBoostLLMId: null,
        setPromptBoostLLMId: (id)=>set({
                promptBoostLLMId: id
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/store/useAppStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SettingsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // LLM management state
    const [llms, setLlms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingLlms, setLoadingLlms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [modelName, setModelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Account settings
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsPage.useMemo[supabase]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSupabaseClient"])()
    }["SettingsPage.useMemo[supabase]"], []);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [acctMsg, setAcctMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [acctErr, setAcctErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Selection of LLMs that should answer + prompt boost selection
    const { selectedLLMIds, setSelectedLLMIds, promptBoostLLMId, setPromptBoostLLMId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [boostId, setBoostId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function loadLlms() {
        setLoadingLlms(true);
        const res = await fetch("/api/llms");
        if (res.ok) {
            const j = await res.json();
            setLlms(j.llms || []);
        }
        setLoadingLlms(false);
    }
    function toggleSelect(id) {
        setSelected((curr)=>curr.includes(id) ? curr.filter((x)=>x !== id) : [
                ...curr,
                id
            ]);
    }
    function saveSettings() {
        // persist selection
        setSelectedLLMIds(selected);
        localStorage.setItem("seesim_selected_llms", JSON.stringify(selected));
        // persist prompt boost LLM
        const v = boostId || null;
        setPromptBoostLLMId(v);
        if (v) localStorage.setItem("seesim_prompt_boost_llm", String(v));
        else localStorage.removeItem("seesim_prompt_boost_llm");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            loadLlms();
        }
    }["SettingsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            // initialize selection from store or localStorage when llms loads
            const saved = selectedLLMIds.length ? selectedLLMIds : JSON.parse(localStorage.getItem("seesim_selected_llms") || "[]");
            if (Array.isArray(saved) && saved.length) {
                setSelected(saved.filter({
                    "SettingsPage.useEffect": (id)=>llms.some({
                            "SettingsPage.useEffect": (l)=>l.id === id
                        }["SettingsPage.useEffect"])
                }["SettingsPage.useEffect"]));
            } else {
                // default: select all
                setSelected(llms.map({
                    "SettingsPage.useEffect": (l)=>l.id
                }["SettingsPage.useEffect"]));
            }
            // init prompt boost id from store or localStorage
            const storedBoost = promptBoostLLMId || localStorage.getItem("seesim_prompt_boost_llm") || "";
            if (storedBoost && llms.some({
                "SettingsPage.useEffect": (l)=>l.id === storedBoost
            }["SettingsPage.useEffect"])) setBoostId(storedBoost);
            else setBoostId("");
        }
    }["SettingsPage.useEffect"], [
        llms
    ]);
    async function addLlm() {
        setSaving(true);
        setError(null);
        const res = await fetch("/api/llms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model_name: modelName,
                api_key: apiKey,
                nickname: nickname || null
            })
        });
        if (!res.ok) {
            setError(await res.text());
        } else {
            setModelName("");
            setApiKey("");
            setNickname("");
            await loadLlms();
        }
        setSaving(false);
    }
    async function deleteLlm(id) {
        const prev = llms;
        setLlms((s)=>s.filter((x)=>x.id !== id));
        const res = await fetch("/api/llms/".concat(id), {
            method: "DELETE"
        });
        if (!res.ok) {
            setLlms(prev);
            alert("Failed to delete LLM");
        }
    }
    async function updateEmail() {
        setAcctErr(null);
        setAcctMsg(null);
        const { error } = await supabase.auth.updateUser({
            email
        });
        if (error) setAcctErr(error.message);
        else setAcctMsg("Email update requested. Check your inbox to confirm.");
    }
    async function updatePassword() {
        setAcctErr(null);
        setAcctMsg(null);
        const { error } = await supabase.auth.updateUser({
            password
        });
        if (error) setAcctErr(error.message);
        else setAcctMsg("Password updated.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "settings-page mx-auto max-w-4xl p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/dashboard"),
                    className: "rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5",
                    children: "← Back to Dashboard"
                }, void 0, false, {
                    fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-4 text-2xl font-semibold",
                children: "Settings"
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-lg font-medium",
                        children: "Manage LLMs"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: modelName,
                                onChange: (e)=>setModelName(e.target.value),
                                placeholder: "Model name or URL",
                                className: "rounded-md border border-white/10 bg-transparent p-2"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: apiKey,
                                onChange: (e)=>setApiKey(e.target.value),
                                placeholder: "OpenRouter API key",
                                className: "rounded-md border border-white/10 bg-transparent p-2"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: nickname,
                                onChange: (e)=>setNickname(e.target.value),
                                placeholder: "Nickname (optional)",
                                className: "rounded-md border border-white/10 bg-transparent p-2"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: saving,
                            onClick: addLlm,
                            className: "rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-60",
                            children: "Add LLM"
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 141,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-sm opacity-80",
                                children: "Your LLMs"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            loadingLlms ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-70",
                                children: "Loading…"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: llms.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-2 rounded border border-white/10 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selected.includes(l.id),
                                                                onChange: ()=>toggleSelect(l.id)
                                                            }, void 0, false, {
                                                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate text-sm",
                                                                title: l.model_name,
                                                                children: l.model_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteLlm(l.id),
                                                        className: "shrink-0 rounded border border-white/10 px-2 py-1 text-xs text-red-300 hover:bg-white/5",
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-2 sm:grid-cols-[1fr_auto]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        defaultValue: l.nickname || "",
                                                        placeholder: "Nickname",
                                                        className: "rounded-md border border-white/10 bg-transparent p-2 text-sm",
                                                        onChange: (e)=>{
                                                            setLlms((curr)=>curr.map((x)=>x.id === l.id ? {
                                                                        ...x,
                                                                        nickname: e.target.value
                                                                    } : x));
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: async ()=>{
                                                            var _llms_find;
                                                            const raw = ((_llms_find = llms.find((x)=>x.id === l.id)) === null || _llms_find === void 0 ? void 0 : _llms_find.nickname) || "";
                                                            const nick = raw.trim();
                                                            const body = {
                                                                nickname: nick === "" ? null : nick
                                                            };
                                                            const res = await fetch("/api/llms/".concat(l.id), {
                                                                method: "PATCH",
                                                                headers: {
                                                                    "Content-Type": "application/json"
                                                                },
                                                                body: JSON.stringify(body)
                                                            });
                                                            if (!res.ok) {
                                                                alert("Failed to update nickname");
                                                            } else {
                                                                await loadLlms();
                                                            }
                                                        },
                                                        className: "rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5",
                                                        children: "Save Nickname"
                                                    }, void 0, false, {
                                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, l.id, true, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-sm opacity-80",
                                        children: "Prompt Boost LLM"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: boostId,
                                        onChange: (e)=>setBoostId(e.target.value),
                                        className: "rounded-md border border-white/10 bg-neutral-900 text-neutral-100 p-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "None"
                                            }, void 0, false, {
                                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            llms.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: l.id,
                                                    children: l.nickname || l.model_name
                                                }, l.id, false, {
                                                    fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-xs opacity-70",
                                        children: "When you click the rocket icon in the dashboard, your prompt will be enhanced by this LLM and replace the textarea."
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-lg font-medium",
                        children: "Account"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-white/10 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-sm opacity-80",
                                        children: "Update email"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "New email",
                                        className: "mb-2 w-full rounded-md border border-white/10 bg-transparent p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: updateEmail,
                                        className: "rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5",
                                        children: "Update Email"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-white/10 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-sm opacity-80",
                                        children: "Update password"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        placeholder: "New password",
                                        className: "mb-2 w-full rounded-md border border-white/10 bg-transparent p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: updatePassword,
                                        className: "rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5",
                                        children: "Update Password"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: async ()=>{
                                try {
                                    await supabase.auth.signOut();
                                } finally{
                                    window.location.href = "/";
                                }
                            },
                            className: "rounded-md border border-red-300 px-4 py-2 text-sm text-red-300 hover:bg-red-500/10",
                            children: "Log out"
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    (acctMsg || acctErr) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-sm ".concat(acctErr ? "text-red-400" : "text-green-400"),
                        children: acctErr || acctMsg
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 -mx-6 mt-6 border-t border-white/10 bg-black/30 p-4 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveSettings,
                        className: "rounded-md bg-indigo-600 px-4 py-2 text-white",
                        children: "Save Settings"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/seesim/app/dashboard/settings/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "l647AiCQ1hTazwlJXoLvBt5iL5c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=seesim_d3c967c7._.js.map