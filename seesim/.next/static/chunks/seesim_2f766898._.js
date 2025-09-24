(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/components/PromptInputBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromptInputBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PromptInputBar(param) {
    let { prompt, onChange, onSubmit, disabled, onAttach, onNewChat, onSaveChat } = param;
    _s();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [attachedName, setAttachedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function compressImageToDataUrl(file) {
        let maxDim = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1280, quality = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.85;
        const img = document.createElement("img");
        const reader = new FileReader();
        const loadFile = new Promise((resolve, reject)=>{
            reader.onload = ()=>resolve(String(reader.result));
            reader.onerror = ()=>reject(reader.error);
            reader.readAsDataURL(file);
        });
        const dataUrl = await loadFile;
        await new Promise((resolve, reject)=>{
            img.onload = ()=>resolve();
            img.onerror = ()=>reject(new Error("Image load failed"));
            img.src = dataUrl;
        });
        const { width, height } = img;
        const scale = Math.min(1, maxDim / Math.max(width, height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return dataUrl;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Prefer JPEG to reduce size, fallback to PNG if needed
        const out = canvas.toDataURL("image/jpeg", quality);
        return out || dataUrl;
    }
    function clearAttachment() {
        setAttachedName(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        onAttach === null || onAttach === void 0 ? void 0 : onAttach(null, null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "composebar sticky bottom-0 z-30 border-t border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-none p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    attachedName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-200 backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.44 11.05l-8.49 8.49a6 6 0 01-8.49-8.49l9.9-9.9a4 4 0 015.66 5.66l-9.9 9.9a2 2 0 01-2.83-2.83l8.49-8.49"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        title: attachedName,
                                        children: attachedName
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Remove attachment",
                                title: "Remove attachment",
                                onClick: clearAttachment,
                                className: "ml-2 rounded border border-white/10 bg-neutral-900 px-2 py-0.5 text-[11px] text-neutral-200 hover:bg-white/5",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: prompt,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: "Enter a prompt...",
                        className: "w-full resize-none min-h-[80px] rounded-lg p-3 border border-white/10 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "compose-file-input",
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: fileInputRef,
                        onChange: async (e)=>{
                            var _e_target_files;
                            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                            if (!file) {
                                clearAttachment();
                                return;
                            }
                            try {
                                const compressed = await compressImageToDataUrl(file);
                                setAttachedName(file.name);
                                onAttach === null || onAttach === void 0 ? void 0 : onAttach(compressed, file);
                            } catch (err) {
                                // Fallback to raw data URL if compression fails
                                const fallbackReader = new FileReader();
                                fallbackReader.onload = ()=>{
                                    setAttachedName(file.name);
                                    onAttach === null || onAttach === void 0 ? void 0 : onAttach(String(fallbackReader.result), file);
                                };
                                fallbackReader.readAsDataURL(file);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Submit prompt",
                                title: "Submit prompt",
                                onClick: onSubmit,
                                disabled: disabled,
                                className: "submit-btn inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white shadow-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 2L11 13"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 2L15 22l-4-9-9-4 20-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Prompt boost",
                                title: "Prompt boost",
                                className: "icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 13l4 4"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14 4s6 1 6 7-6 9-6 9-6-3-6-9 6-7 6-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "9",
                                            r: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Attach file",
                                title: "Attach file",
                                className: "icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5",
                                onClick: ()=>{
                                    var _fileInputRef_current;
                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21.44 11.05l-8.49 8.49a6 6 0 01-8.49-8.49l9.9-9.9a4 4 0 015.66 5.66l-9.9 9.9a2 2 0 01-2.83-2.83l8.49-8.49"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Start new chat",
                                title: "Start new chat",
                                className: "icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5",
                                onClick: ()=>{
                                    clearAttachment();
                                    onNewChat === null || onNewChat === void 0 ? void 0 : onNewChat();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "5",
                                            y1: "12",
                                            x2: "19",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Save chat",
                                title: "Save chat",
                                className: "icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5",
                                onClick: onSaveChat,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 21 17 13 7 13 7 21"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "7 3 7 8 15 8"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/seesim/app/dashboard/components/PromptInputBar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(PromptInputBar, "l1b4ej5qwcKorc7gt8X1GgJ5NT8=");
_c = PromptInputBar;
var _c;
__turbopack_context__.k.register(_c, "PromptInputBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/components/ModelResponseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModelResponseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ModelResponseCard(param) {
    let { title, status, content, error } = param;
    const badge = status === "success" ? "bg-green-500/15 text-green-300" : status === "error" ? "bg-red-500/15 text-red-300" : status === "loading" ? "bg-blue-500/15 text-blue-300" : "bg-white/10 text-neutral-300";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "response-card min-w-[320px] max-w-[420px] h-full rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-100 shadow-md backdrop-blur-md transition-shadow flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate font-medium",
                        title: title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded px-2 py-0.5 text-xs ".concat(badge),
                        children: status === "success" ? "Success" : status === "error" ? "Error" : status === "loading" ? "Loading…" : "Idle"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 min-h-0",
                children: [
                    status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-3/5 rounded-md bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-4/5 rounded-md bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-24 w-full rounded-md bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    status !== "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full overflow-y-auto no-scrollbar whitespace-pre-wrap text-sm text-neutral-200",
                        children: status === "error" ? error : content || ""
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>content && navigator.clipboard.writeText(content),
                        className: "rounded border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 transition-all hover:bg-white/5",
                        children: "Copy"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (!content) return;
                            const blob = new Blob([
                                content
                            ], {
                                type: "text/plain;charset=utf-8"
                            });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "".concat(title.replace(/[^a-z0-9-_]/gi, "_"), ".txt");
                            a.click();
                            URL.revokeObjectURL(url);
                        },
                        className: "rounded border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 transition-all hover:bg-white/5",
                        children: "Download"
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/seesim/app/dashboard/components/ModelResponseCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ModelResponseCard;
var _c;
__turbopack_context__.k.register(_c, "ModelResponseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/components/LLMModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LLMModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LLMModal(param) {
    let { open, onClose, onSave, saving, error } = param;
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        model_name: "",
        api_key: "",
        nickname: ""
    });
    // Clear inputs every time the modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LLMModal.useEffect": ()=>{
            if (open) {
                setForm({
                    model_name: "",
                    api_key: "",
                    nickname: ""
                });
            }
        }
    }["LLMModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 grid place-items-center bg-black/30 p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-xl bg-black text-white p-6 shadow-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 text-lg font-semibold",
                    children: "Add LLM"
                }, void 0, false, {
                    fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40",
                            placeholder: "Model name (e.g., openai/gpt-4o)",
                            value: form.model_name,
                            onChange: (e)=>setForm((f)=>({
                                        ...f,
                                        model_name: e.target.value
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40",
                            placeholder: "API key",
                            type: "password",
                            value: form.api_key,
                            onChange: (e)=>setForm((f)=>({
                                        ...f,
                                        api_key: e.target.value
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40",
                            placeholder: "Nickname (optional)",
                            value: form.nickname,
                            onChange: (e)=>setForm((f)=>({
                                        ...f,
                                        nickname: e.target.value
                                    }))
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded px-3 py-1.5 text-sm transition-all hover:bg-white/10",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: saving,
                                    onClick: ()=>onSave(form),
                                    className: "rounded bg-black px-3 py-1.5 text-sm text-white transition-all disabled:opacity-60",
                                    children: saving ? "Saving…" : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/seesim/app/dashboard/components/LLMModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(LLMModal, "iZ0wM3gipy79vMIgqGE5RxLRAW8=");
_c = LLMModal;
var _c;
__turbopack_context__.k.register(_c, "LLMModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/components/TopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TopBar(param) {
    let { onMenuClick } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopBar.useEffect": ()=>{
            const stored = "object" !== "undefined" && localStorage.getItem("theme");
            const initial = stored !== null && stored !== void 0 ? stored : "light";
            setTheme(initial);
            document.documentElement.dataset.theme = initial;
        }
    }["TopBar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopBar.useEffect": ()=>{
            document.documentElement.dataset.theme = theme;
            try {
                localStorage.setItem("theme", theme);
            } catch (e) {}
        }
    }["TopBar.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>setTheme((t)=>t === "dark" ? "light" : "dark");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "topbar sticky top-0 z-40 border-b border-white/10 bg-black/60 text-white backdrop-blur supports-[backdrop-filter]:bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full items-center justify-between px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "aria-label": "Open menu",
                            onClick: onMenuClick,
                            className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-neutral-200 transition-colors hover:bg-white/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "i-[hamburger] block h-4 w-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    className: "h-5 w-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold tracking-tight",
                            children: "SeeSim"
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-neutral-300",
                            children: "Modern Multi‑Model Playground"
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleTheme,
                            className: "inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-neutral-200 transition-colors hover:bg-white/5",
                            "aria-label": "Toggle theme",
                            title: "Toggle theme",
                            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "h-4 w-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.752 15.002A9.718 9.718 0 0 1 12 21.75a9.75 9.75 0 0 1 0-19.5c.845 0 1.663.11 2.443.316a.75.75 0 0 1 .164 1.384A7.5 7.5 0 0 0 20.25 15.12a.75.75 0 0 1 1.502-.118Z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                            lineNumber: 53,
                                            columnNumber: 164
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 64
                                    }, this),
                                    "Dark"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "h-4 w-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2.25a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 13.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM4.5 12a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12Zm13.5 0a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Zm-9.9 6.15a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.061 1.061l-1.06-1.06a.75.75 0 0 1 0-1.061Zm8.485 0a.75.75 0 0 1 1.061 0l1.06 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                            lineNumber: 55,
                                            columnNumber: 164
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 64
                                    }, this),
                                    "Light"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/seesim/app/dashboard/components/TopBar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(TopBar, "+6C7zX0KFXKdtXxqQH7LMHLz9vo=");
_c = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/components/MobileSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/store/useAppStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MobileSidebar(param) {
    let { open, onClose, email, llms, onAdd, onDelete } = param;
    _s();
    const [convos, setConvos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { selectedLLMIds, setSelectedLLMIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [selectorOpen, setSelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileSidebar.useEffect": ()=>{
            async function load() {
                try {
                    const res = await fetch("/api/conversations");
                    const j = res.ok ? await res.json() : {
                        conversations: []
                    };
                    const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
                    // merge by id (prefer remote), include local-only ones
                    const byId = {};
                    for (const c of local)if (c.id) byId[c.id] = c;
                    for (const c of j.conversations || [])byId[c.id] = c;
                    const merged = Object.values(byId).sort({
                        "MobileSidebar.useEffect.load.merged": (a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                    }["MobileSidebar.useEffect.load.merged"]);
                    setConvos(merged.slice(0, 10));
                } catch (e) {}
            }
            if (open) load();
        }
    }["MobileSidebar.useEffect"], [
        open
    ]);
    async function openConversationById(id) {
        // Try localStorage first (usually contains full results)
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        let conv = local.find((c)=>c.id === id);
        if (!conv) {
            try {
                const res = await fetch("/api/conversations/".concat(id));
                if (res.ok) conv = await res.json();
            } catch (e) {}
        }
        if (!conv) return;
        // Dispatch event for Dashboard to consume
        window.dispatchEvent(new CustomEvent("load_conversation", {
            detail: conv
        }));
        onClose();
    }
    async function deleteConversation(id) {
        try {
            await fetch("/api/conversations/".concat(id), {
                method: "DELETE"
            });
        } catch (e) {}
        // remove from local storage
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        const filtered = local.filter((c)=>c.id !== id);
        localStorage.setItem("seesim_conversations", JSON.stringify(filtered));
        setConvos((s)=>s.filter((x)=>x.id !== id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 ".concat(open ? "pointer-events-auto" : "pointer-events-none"),
        "aria-hidden": !open,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/30 transition-opacity duration-200 ".concat(open ? "opacity-100" : "opacity-0"),
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobilesidebar-panel absolute inset-y-0 left-0 w-[85%] max-w-[320px] transform bg-white shadow-xl transition-transform duration-200 ".concat(open ? "translate-x-0" : "-translate-x-full"),
                role: "dialog",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-gray-900",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectorOpen(true),
                                "aria-label": "Select active LLMs",
                                title: "Select active LLMs",
                                className: "rounded-md border border-blue-900 bg-blue-900 px-2 py-1 text-sm text-white hover:bg-blue-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            y1: "21",
                                            x2: "4",
                                            y2: "14"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 156
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            y1: "10",
                                            x2: "4",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 193
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "21",
                                            x2: "12",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 229
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 268
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "20",
                                            y1: "21",
                                            x2: "20",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 305
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "20",
                                            y1: "12",
                                            x2: "20",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 344
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "14",
                                            x2: "6",
                                            y2: "14"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 382
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "10",
                                            y1: "8",
                                            x2: "14",
                                            y2: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 419
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "16",
                                            x2: "22",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 456
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full overflow-y-auto p-4 pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 text-sm text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ms-card rounded-md bg-gray-50 p-3 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-medium",
                                        title: email,
                                        children: email
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ms-card rounded-md bg-gray-50 p-3 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 text-xs uppercase text-gray-500",
                                            children: "Past Conversations"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        convos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: "No conversations"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1",
                                            children: convos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openConversationById(c.id),
                                                            className: "truncate text-left hover:underline",
                                                            title: c.prompt,
                                                            children: c.prompt
                                                        }, void 0, false, {
                                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteConversation(c.id),
                                                            className: "rounded px-2 py-0.5 text-xs text-red-600 hover:bg-red-50",
                                                            "aria-label": "Delete conversation",
                                                            title: "Delete conversation",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "3 6 5 6 21 6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 168
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 201
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M10 11v6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 256
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M14 11v6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 276
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 296
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobilesidebar-footer absolute bottom-0 left-0 right-0 border-t bg-white px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard/settings",
                            className: "flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm transition-all hover:bg-gray-100",
                            onClick: onClose,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 129,
                                            columnNumber: 156
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .7.4 1.31 1 1.61.6.3 1 .91 1 1.61s-.4 1.31-1 1.61c-.6.3-1 .91-1 1.61z"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 129,
                                            columnNumber: 187
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 ".concat(selectorOpen ? "pointer-events-auto" : "pointer-events-none"),
                "aria-hidden": selectorOpen ? "false" : "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 transition-opacity ".concat(selectorOpen ? "opacity-100" : "opacity-0"),
                    style: {
                        backgroundColor: "rgba(0,0,0,0.25)"
                    },
                    onClick: ()=>setSelectorOpen(false)
                }, void 0, false, {
                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 left-0 z-50 w-[85%] max-w-[320px] transform bg-white shadow-2xl transition-transform duration-200 ".concat(selectorOpen ? "translate-x-0" : "-translate-x-full"),
                role: "dialog",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-gray-900",
                                children: "Active LLMs"
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectorOpen(false),
                                "aria-label": "Close",
                                title: "Close",
                                className: "rounded-md border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 156
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full overflow-y-auto p-4 pb-20 text-sm text-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ms-card rounded-md bg-gray-50 p-3 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-xs uppercase text-gray-500",
                                        children: "Choose responders"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: llms.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center justify-between gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedLLMIds.includes(l.id),
                                                            onChange: ()=>{
                                                                const curr = new Set(selectedLLMIds || []);
                                                                if (curr.has(l.id)) curr.delete(l.id);
                                                                else curr.add(l.id);
                                                                const arr = Array.from(curr);
                                                                setSelectedLLMIds(arr);
                                                                localStorage.setItem("seesim_selected_llms", JSON.stringify(arr));
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            title: l.model_name,
                                                            children: l.nickname || l.model_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            }, l.id, false, {
                                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-xs text-gray-500",
                                children: "Changes are saved automatically."
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/seesim/app/dashboard/components/MobileSidebar.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(MobileSidebar, "PbeBE8kQgyAEVrSUAV6YbxHiDYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = MobileSidebar;
var _c;
__turbopack_context__.k.register(_c, "MobileSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/seesim/app/dashboard/DashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/store/useAppStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$PromptInputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/app/dashboard/components/PromptInputBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$ModelResponseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/app/dashboard/components/ModelResponseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$LLMModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/app/dashboard/components/LLMModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/app/dashboard/components/TopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$MobileSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/seesim/app/dashboard/components/MobileSidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DashboardClient(param) {
    let { email, initialLlms } = param;
    _s();
    const { llms, setLLMs, responses, setResponse, selectedLLMIds, setSelectedLLMIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attachedImage, setAttachedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fullScreen, setFullScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // initialize from server
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClient.useEffect": ()=>{
            setLLMs(initialLlms);
            // initialize selection from localStorage if not set
            const saved = JSON.parse(localStorage.getItem("seesim_selected_llms") || "[]");
            if (Array.isArray(saved) && saved.length) {
                setSelectedLLMIds(saved.filter({
                    "DashboardClient.useEffect": (id)=>initialLlms.some({
                            "DashboardClient.useEffect": (l)=>l.id === id
                        }["DashboardClient.useEffect"])
                }["DashboardClient.useEffect"]));
            } else {
                // default to all
                setSelectedLLMIds((initialLlms || []).map({
                    "DashboardClient.useEffect": (l)=>l.id
                }["DashboardClient.useEffect"]));
            }
        }
    }["DashboardClient.useEffect"], [
        initialLlms,
        setLLMs
    ]);
    // Listen for conversation load events from MobileSidebar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClient.useEffect": ()=>{
            function onLoadConv(e) {
                const conv = e === null || e === void 0 ? void 0 : e.detail;
                if (!conv) return;
                // Populate prompt
                setPrompt(conv.prompt || "");
                // Populate responses
                if (Array.isArray(conv.results)) {
                    for (const r of conv.results){
                        if (r === null || r === void 0 ? void 0 : r.id) {
                            if (r.status === "success") {
                                setResponse(r.id, {
                                    id: r.id,
                                    model_name: r.model_name,
                                    nickname: r.nickname,
                                    status: "success",
                                    content: r.content
                                });
                            } else if (r.status === "error") {
                                setResponse(r.id, {
                                    id: r.id,
                                    status: "error",
                                    error: r.error
                                });
                            }
                        }
                    }
                }
                setFullScreen(true);
            }
            window.addEventListener("load_conversation", onLoadConv);
            return ({
                "DashboardClient.useEffect": ()=>window.removeEventListener("load_conversation", onLoadConv)
            })["DashboardClient.useEffect"];
        }
    }["DashboardClient.useEffect"], [
        setResponse
    ]);
    async function saveChatExplicit() {
        // Collect current responses for all LLMs (success or error)
        const resultsArr = [];
        for (const l of llms){
            const r = responses[l.id];
            if (!r || r.status === "idle" || r.status === "loading") continue;
            resultsArr.push({
                id: l.id,
                model_name: l.model_name,
                nickname: l.nickname,
                status: r.status,
                content: r.content,
                error: r.error
            });
        }
        if (!prompt.trim() && !resultsArr.length) return; // nothing to save
        const conv = {
            prompt,
            results: resultsArr,
            created_at: new Date().toISOString()
        };
        try {
            const res = await fetch("/api/conversations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(conv)
            });
            if (res.ok) {
                const { id, created_at } = await res.json();
                conv.id = id;
                conv.created_at = created_at || conv.created_at;
            }
        } catch (e) {}
        // Persist to localStorage regardless (best-effort)
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        local.unshift(conv);
        localStorage.setItem("seesim_conversations", JSON.stringify(local.slice(0, 50)));
    }
    async function startNewChat() {
        // Save current chat then clear UI
        await saveChatExplicit();
        // Clear prompt and attachments
        setPrompt("");
        setAttachedImage(null);
        // Reset responses to idle
        for (const l of llms){
            setResponse(l.id, {
                id: l.id,
                model_name: l.model_name,
                nickname: l.nickname,
                status: "idle",
                content: undefined,
                error: undefined
            });
        }
    }
    async function refreshLLMs() {
        const res = await fetch("/api/llms");
        if (res.ok) {
            const json = await res.json();
            setLLMs(json.llms);
        }
    }
    async function addLLM(form) {
        setSaving(true);
        setError(null);
        const res = await fetch("/api/llms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });
        setSaving(false);
        if (!res.ok) {
            const t = await res.text();
            setError(t);
            return;
        }
        setIsModalOpen(false);
        refreshLLMs();
    }
    async function removeLLM(id) {
        const prev = [
            ...llms
        ];
        // optimistic update
        setLLMs(llms.filter((l)=>l.id !== id));
        try {
            const res = await fetch("/api/llms/".concat(id), {
                method: "DELETE"
            });
            if (!res.ok) {
                // rollback on failure
                setLLMs(prev);
                const msg = await res.text();
                console.error("Failed to delete LLM:", msg);
                // best-effort refresh
                refreshLLMs();
            } else {
                // ensure in sync
                refreshLLMs();
            }
        } catch (e) {
            setLLMs(prev);
            console.error("Delete error:", e);
            refreshLLMs();
        }
    }
    const orderedResponses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardClient.useMemo[orderedResponses]": ()=>{
            return (llms || []).map({
                "DashboardClient.useMemo[orderedResponses]": (l)=>responses[l.id]
            }["DashboardClient.useMemo[orderedResponses]"]).filter({
                "DashboardClient.useMemo[orderedResponses]": (r)=>r && r.status && r.status !== "idle"
            }["DashboardClient.useMemo[orderedResponses]"]);
        }
    }["DashboardClient.useMemo[orderedResponses]"], [
        llms,
        responses
    ]);
    async function sendPrompt() {
        if (!prompt.trim()) return;
        setSending(true);
        // Only selected LLMs will be used
        const activeIds = selectedLLMIds && selectedLLMIds.length ? selectedLLMIds : llms.map((l)=>l.id);
        const active = llms.filter((l)=>activeIds.includes(l.id));
        // set only selected to loading
        for (const l of active){
            setResponse(l.id, {
                id: l.id,
                model_name: l.model_name,
                nickname: l.nickname,
                status: "loading",
                content: undefined,
                error: undefined
            });
        }
        try {
            const res = await fetch("/api/compare", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt,
                    image: attachedImage,
                    selected_ids: active.map((l)=>l.id)
                })
            });
            if (!res.ok) throw new Error(await res.text());
            const json = await res.json();
            for (const r of json.results){
                if (r.status === "success") {
                    setResponse(r.id, {
                        id: r.id,
                        model_name: r.model_name,
                        nickname: r.nickname,
                        status: "success",
                        content: r.content
                    });
                } else {
                    setResponse(r.id, {
                        id: r.id,
                        status: "error",
                        error: r.error
                    });
                }
            }
            // Persist conversation (prompt + results) to DB and localStorage
            try {
                const payload = {
                    prompt,
                    results: json.results
                };
                const save = await fetch("/api/conversations", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                let conv = {
                    prompt,
                    results: json.results,
                    created_at: new Date().toISOString()
                };
                if (save.ok) {
                    const { id, created_at } = await save.json();
                    conv.id = id;
                    conv.created_at = created_at || conv.created_at;
                }
                const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
                local.unshift(conv);
                localStorage.setItem("seesim_conversations", JSON.stringify(local.slice(0, 50)));
            } catch (e) {}
        } catch (e) {
            for (const l of active)setResponse(l.id, {
                id: l.id,
                status: "error",
                error: String(e.message || e)
            });
        } finally{
            setSending(false);
            setFullScreen(true);
        }
    }
    function toggleSelected(id) {
        const curr = new Set(selectedLLMIds || []);
        if (curr.has(id)) curr.delete(id);
        else curr.add(id);
        const arr = Array.from(curr);
        setSelectedLLMIds(arr);
        localStorage.setItem("seesim_selected_llms", JSON.stringify(arr));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$TopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onMenuClick: ()=>setNavOpen(true)
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$MobileSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: navOpen,
                onClose: ()=>setNavOpen(false),
                email: email,
                llms: llms,
                onAdd: ()=>{
                    setNavOpen(false);
                    setIsModalOpen(true);
                },
                onDelete: removeLLM
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-dvh flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-none h-full min-h-0 flex flex-col relative",
                            children: [
                                !fullScreen && orderedResponses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFullScreen(true),
                                    "aria-label": "Enter fullscreen",
                                    title: "Enter fullscreen",
                                    className: "absolute right-0 top-0 z-10 rounded border border-white/10 bg-black/30 p-1.5 text-neutral-200 backdrop-blur hover:bg-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "15 3 21 3 21 9"
                                            }, void 0, false, {
                                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 253,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 21 3 21 3 15"
                                            }, void 0, false, {
                                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "21",
                                                y1: "3",
                                                x2: "14",
                                                y2: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "3",
                                                y1: "21",
                                                x2: "10",
                                                y2: "14"
                                            }, void 0, false, {
                                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-h-0 overflow-x-auto overflow-y-hidden no-scrollbar pt-2",
                                    children: orderedResponses.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-stretch gap-4 pr-4",
                                        children: orderedResponses.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-[320px] max-w-[420px] h-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$ModelResponseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    title: r.nickname || r.model_name || "Model",
                                                    status: r.status,
                                                    content: r.content,
                                                    error: r.error
                                                }, void 0, false, {
                                                    fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 23
                                                }, this)
                                            }, r.id, false, {
                                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-sm text-neutral-400",
                                        children: "Ask something to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$PromptInputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        prompt: prompt,
                        onChange: setPrompt,
                        onSubmit: sendPrompt,
                        disabled: sending,
                        onAttach: (dataUrl)=>setAttachedImage(dataUrl),
                        onNewChat: startNewChat,
                        onSaveChat: saveChatExplicit
                    }, void 0, false, {
                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$LLMModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                onSave: addLLM,
                saving: saving,
                error: error
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            fullScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto h-full max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFullScreen(false),
                            "aria-label": "Exit fullscreen",
                            title: "Exit fullscreen",
                            className: "absolute right-0 top-0 z-10 rounded border border-white/10 bg-black/30 p-1.5 text-neutral-200 backdrop-blur hover:bg-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "9 3 3 3 3 9"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "15 21 21 21 21 15"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "3",
                                        x2: "10",
                                        y2: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "14",
                                        y2: "14"
                                    }, void 0, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                lineNumber: 306,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full overflow-x-auto overflow-y-hidden no-scrollbar pt-2",
                            children: orderedResponses.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-stretch gap-4 pr-4",
                                children: orderedResponses.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-[320px] max-w-[420px] h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$app$2f$dashboard$2f$components$2f$ModelResponseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: r.nickname || r.model_name || "Model",
                                            status: r.status,
                                            content: r.content,
                                            error: r.error
                                        }, void 0, false, {
                                            fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                            lineNumber: 318,
                                            columnNumber: 23
                                        }, this)
                                    }, r.id, false, {
                                        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                        lineNumber: 317,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                lineNumber: 315,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-sm text-neutral-400",
                                children: "No results yet."
                            }, void 0, false, {
                                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                                lineNumber: 328,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/seesim/app/dashboard/DashboardClient.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(DashboardClient, "pqun+vOHbCsSKcSoLmYyN+FcybA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$seesim$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=seesim_2f766898._.js.map