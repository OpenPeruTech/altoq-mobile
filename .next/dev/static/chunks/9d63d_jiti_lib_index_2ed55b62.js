(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function onError(err) {
    throw err; /* ↓ Check stack trace ↓ */ 
}
module.exports = function jiti(filename, opts) {
    const jiti = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/dist/jiti.js [app-client] (ecmascript)");
    opts = {
        onError,
        ...opts
    };
    if (!opts.transform) {
        opts.transform = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/dist/babel.js [app-client] (ecmascript)");
    }
    return jiti(filename, opts);
};
}),
]);

//# sourceMappingURL=9d63d_jiti_lib_index_2ed55b62.js.map