(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/hashConfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return hashConfig;
    }
});
const _objecthash = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/object-hash@3.0.0/node_modules/object-hash/dist/object_hash.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hashConfig(config) {
    return (0, _objecthash.default)(config, {
        ignoreUnknown: true
    });
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/negateValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return negateValue;
    }
});
function negateValue(value) {
    value = `${value}`;
    if (value === "0") {
        return "0";
    }
    // Flip sign of numbers
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
        return value.replace(/^[+-]?/, (sign)=>sign === "-" ? "" : "-");
    }
    // What functions we support negating numeric values for
    // var() isn't inherently a numeric function but we support it anyway
    // The trigonometric functions are omitted because you'll need to use calc(…) with them _anyway_
    // to produce generally useful results and that will be covered already
    let numericFunctions = [
        "var",
        "calc",
        "min",
        "max",
        "clamp"
    ];
    for (const fn of numericFunctions){
        if (value.includes(`${fn}(`)) {
            return `calc(${value} * -1)`;
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/corePluginList.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _default = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "lineClamp",
    "display",
    "aspectRatio",
    "size",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "captionSide",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "listStyleImage",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "hyphens",
    "whitespace",
    "textWrap",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "contain",
    "content",
    "forcedColorAdjust"
];
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/configurePlugins.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _default(pluginConfig, plugins) {
    if (pluginConfig === undefined) {
        return plugins;
    }
    const pluginNames = Array.isArray(pluginConfig) ? pluginConfig : [
        ...new Set(plugins.filter((pluginName)=>{
            return pluginConfig !== false && pluginConfig[pluginName] !== false;
        }).concat(Object.keys(pluginConfig).filter((pluginName)=>{
            return pluginConfig[pluginName] !== false;
        })))
    ];
    return pluginNames;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dim: function() {
        return dim;
    },
    default: function() {
        return _default;
    }
});
const _picocolors = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(type, messages, key) {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message)=>console.warn(type, "-", message));
}
function dim(input) {
    return _picocolors.default.dim(input);
}
const _default = {
    info (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/public/colors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version, from, to }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning."
    ]);
}
const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
        950: "#1a2e05"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16"
    },
    emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
        950: "#042f2e"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
        950: "#083344"
    },
    sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b"
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764"
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
        950: "#4a044e"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
        950: "#500724"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519"
    },
    get lightBlue () {
        warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
        });
        return this.slate;
    }
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/defaults.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaults", {
    enumerable: true,
    get: function() {
        return defaults;
    }
});
function defaults(target, ...sources) {
    for (let source of sources){
        for(let k in source){
            var _target_hasOwnProperty;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty = target.hasOwnProperty) === null || _target_hasOwnProperty === void 0 ? void 0 : _target_hasOwnProperty.call(target, k))) {
                target[k] = source[k];
            }
        }
        for (let k of Object.getOwnPropertySymbols(source)){
            var _target_hasOwnProperty1;
            if (!(target === null || target === void 0 ? void 0 : (_target_hasOwnProperty1 = target.hasOwnProperty) === null || _target_hasOwnProperty1 === void 0 ? void 0 : _target_hasOwnProperty1.call(target, k))) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toPath.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Parse a path string into an array of path segments.
 *
 * Square bracket notation `a[b]` may be used to "escape" dots that would otherwise be interpreted as path separators.
 *
 * Example:
 * a -> ['a']
 * a.b.c -> ['a', 'b', 'c']
 * a[b].c -> ['a', 'b', 'c']
 * a[b.c].e.f -> ['a', 'b.c', 'e', 'f']
 * a[b][c][d] -> ['a', 'b', 'c', 'd']
 *
 * @param {string|string[]} path
 **/ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "toPath", {
    enumerable: true,
    get: function() {
        return toPath;
    }
});
function toPath(path) {
    if (Array.isArray(path)) return path;
    let openBrackets = path.split("[").length - 1;
    let closedBrackets = path.split("]").length - 1;
    if (openBrackets !== closedBrackets) {
        throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`);
    }
    return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    flagEnabled: function() {
        return flagEnabled;
    },
    issueFlagNotices: function() {
        return issueFlagNotices;
    },
    default: function() {
        return _default;
    }
});
const _picocolors = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js [app-client] (ecmascript)"));
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let defaults = {
    optimizeUniversalDefaults: false,
    generalizedModifiers: true,
    disableColorOpacityUtilitiesByDefault: false,
    relativeContentPathsByDefault: false
};
let featureFlags = {
    future: [
        "hoverOnlyWhenSupported",
        "respectDefaultRingColorOpacity",
        "disableColorOpacityUtilitiesByDefault",
        "relativeContentPathsByDefault"
    ],
    experimental: [
        "optimizeUniversalDefaults",
        "generalizedModifiers"
    ]
};
function flagEnabled(config, flag) {
    if (featureFlags.future.includes(flag)) {
        var _config_future;
        var _config_future_flag, _ref;
        return config.future === "all" || ((_ref = (_config_future_flag = config === null || config === void 0 ? void 0 : (_config_future = config.future) === null || _config_future === void 0 ? void 0 : _config_future[flag]) !== null && _config_future_flag !== void 0 ? _config_future_flag : defaults[flag]) !== null && _ref !== void 0 ? _ref : false);
    }
    if (featureFlags.experimental.includes(flag)) {
        var _config_experimental;
        var _config_experimental_flag, _ref1;
        return config.experimental === "all" || ((_ref1 = (_config_experimental_flag = config === null || config === void 0 ? void 0 : (_config_experimental = config.experimental) === null || _config_experimental === void 0 ? void 0 : _config_experimental[flag]) !== null && _config_experimental_flag !== void 0 ? _config_experimental_flag : defaults[flag]) !== null && _ref1 !== void 0 ? _ref1 : false);
    }
    return false;
}
function experimentalFlagsEnabled(config) {
    if (config.experimental === "all") {
        return featureFlags.experimental;
    }
    var _config_experimental;
    return Object.keys((_config_experimental = config === null || config === void 0 ? void 0 : config.experimental) !== null && _config_experimental !== void 0 ? _config_experimental : {}).filter((flag)=>featureFlags.experimental.includes(flag) && config.experimental[flag]);
}
function issueFlagNotices(config) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.JEST_WORKER_ID !== undefined) {
        return;
    }
    if (experimentalFlagsEnabled(config).length > 0) {
        let changes = experimentalFlagsEnabled(config).map((s)=>_picocolors.default.yellow(s)).join(", ");
        _log.default.warn("experimental-flags-enabled", [
            `You have enabled experimental features: ${changes}`,
            "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
        ]);
    }
}
const _default = featureFlags;
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeConfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizeConfig", {
    enumerable: true,
    get: function() {
        return normalizeConfig;
    }
});
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function normalizeConfig(config) {
    // Quick structure validation
    /**
   * type FilePath = string
   * type RawFile = { raw: string, extension?: string }
   * type ExtractorFn = (content: string) => Array<string>
   * type TransformerFn = (content: string) => string
   *
   * type Content =
   *   | Array<FilePath | RawFile>
   *   | {
   *       files: Array<FilePath | RawFile>,
   *       extract?: ExtractorFn | { [extension: string]: ExtractorFn }
   *       transform?: TransformerFn | { [extension: string]: TransformerFn }
   *   }
   */ let valid = (()=>{
        // `config.purge` should not exist anymore
        if (config.purge) {
            return false;
        }
        // `config.content` should exist
        if (!config.content) {
            return false;
        }
        // `config.content` should be an object or an array
        if (!Array.isArray(config.content) && !(typeof config.content === "object" && config.content !== null)) {
            return false;
        }
        // When `config.content` is an array, it should consist of FilePaths or RawFiles
        if (Array.isArray(config.content)) {
            return config.content.every((path)=>{
                // `path` can be a string
                if (typeof path === "string") return true;
                // `path` can be an object { raw: string, extension?: string }
                // `raw` must be a string
                if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string") return false;
                // `extension` (if provided) should also be a string
                if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                    return false;
                }
                return true;
            });
        }
        // When `config.content` is an object
        if (typeof config.content === "object" && config.content !== null) {
            // Only `files`, `relative`, `extract`, and `transform` can exist in `config.content`
            if (Object.keys(config.content).some((key)=>![
                    "files",
                    "relative",
                    "extract",
                    "transform"
                ].includes(key))) {
                return false;
            }
            // `config.content.files` should exist of FilePaths or RawFiles
            if (Array.isArray(config.content.files)) {
                if (!config.content.files.every((path)=>{
                    // `path` can be a string
                    if (typeof path === "string") return true;
                    // `path` can be an object { raw: string, extension?: string }
                    // `raw` must be a string
                    if (typeof (path === null || path === void 0 ? void 0 : path.raw) !== "string") return false;
                    // `extension` (if provided) should also be a string
                    if ((path === null || path === void 0 ? void 0 : path.extension) && typeof (path === null || path === void 0 ? void 0 : path.extension) !== "string") {
                        return false;
                    }
                    return true;
                })) {
                    return false;
                }
                // `config.content.extract` is optional, and can be a Function or a Record<String, Function>
                if (typeof config.content.extract === "object") {
                    for (let value of Object.values(config.content.extract)){
                        if (typeof value !== "function") {
                            return false;
                        }
                    }
                } else if (!(config.content.extract === undefined || typeof config.content.extract === "function")) {
                    return false;
                }
                // `config.content.transform` is optional, and can be a Function or a Record<String, Function>
                if (typeof config.content.transform === "object") {
                    for (let value of Object.values(config.content.transform)){
                        if (typeof value !== "function") {
                            return false;
                        }
                    }
                } else if (!(config.content.transform === undefined || typeof config.content.transform === "function")) {
                    return false;
                }
                // `config.content.relative` is optional and can be a boolean
                if (typeof config.content.relative !== "boolean" && typeof config.content.relative !== "undefined") {
                    return false;
                }
            }
            return true;
        }
        return false;
    })();
    if (!valid) {
        _log.default.warn("purge-deprecation", [
            "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
            "Update your configuration file to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
        ]);
    }
    // Normalize the `safelist`
    config.safelist = (()=>{
        var _purge_options;
        let { content, purge, safelist } = config;
        if (Array.isArray(safelist)) return safelist;
        if (Array.isArray(content === null || content === void 0 ? void 0 : content.safelist)) return content.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.safelist)) return purge.safelist;
        if (Array.isArray(purge === null || purge === void 0 ? void 0 : (_purge_options = purge.options) === null || _purge_options === void 0 ? void 0 : _purge_options.safelist)) return purge.options.safelist;
        return [];
    })();
    // Normalize the `blocklist`
    config.blocklist = (()=>{
        let { blocklist } = config;
        if (Array.isArray(blocklist)) {
            if (blocklist.every((item)=>typeof item === "string")) {
                return blocklist;
            }
            _log.default.warn("blocklist-invalid", [
                "The `blocklist` option must be an array of strings.",
                "https://tailwindcss.com/docs/content-configuration#discarding-classes"
            ]);
        }
        return [];
    })();
    // Normalize prefix option
    if (typeof config.prefix === "function") {
        _log.default.warn("prefix-function", [
            "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
            "Update `prefix` in your configuration to be a string to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
        ]);
        config.prefix = "";
    } else {
        var _config_prefix;
        config.prefix = (_config_prefix = config.prefix) !== null && _config_prefix !== void 0 ? _config_prefix : "";
    }
    // Normalize the `content`
    config.content = {
        relative: (()=>{
            let { content } = config;
            if (content === null || content === void 0 ? void 0 : content.relative) {
                return content.relative;
            }
            return (0, _featureFlags.flagEnabled)(config, "relativeContentPathsByDefault");
        })(),
        files: (()=>{
            let { content, purge } = config;
            if (Array.isArray(purge)) return purge;
            if (Array.isArray(purge === null || purge === void 0 ? void 0 : purge.content)) return purge.content;
            if (Array.isArray(content)) return content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.content)) return content.content;
            if (Array.isArray(content === null || content === void 0 ? void 0 : content.files)) return content.files;
            return [];
        })(),
        extract: (()=>{
            let extract = (()=>{
                var _config_purge, _config_content, _config_purge1, _config_purge_extract, _config_content1, _config_content_extract, _config_purge2, _config_purge_options, _config_content2, _config_content_options;
                if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.extract) return config.purge.extract;
                if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.extract) return config.content.extract;
                if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_extract = _config_purge1.extract) === null || _config_purge_extract === void 0 ? void 0 : _config_purge_extract.DEFAULT) return config.purge.extract.DEFAULT;
                if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_extract = _config_content1.extract) === null || _config_content_extract === void 0 ? void 0 : _config_content_extract.DEFAULT) return config.content.extract.DEFAULT;
                if ((_config_purge2 = config.purge) === null || _config_purge2 === void 0 ? void 0 : (_config_purge_options = _config_purge2.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.extractors) return config.purge.options.extractors;
                if ((_config_content2 = config.content) === null || _config_content2 === void 0 ? void 0 : (_config_content_options = _config_content2.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.extractors) return config.content.options.extractors;
                return {};
            })();
            let extractors = {};
            let defaultExtractor = (()=>{
                var _config_purge, _config_purge_options, _config_content, _config_content_options;
                if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : (_config_purge_options = _config_purge.options) === null || _config_purge_options === void 0 ? void 0 : _config_purge_options.defaultExtractor) {
                    return config.purge.options.defaultExtractor;
                }
                if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : (_config_content_options = _config_content.options) === null || _config_content_options === void 0 ? void 0 : _config_content_options.defaultExtractor) {
                    return config.content.options.defaultExtractor;
                }
                return undefined;
            })();
            if (defaultExtractor !== undefined) {
                extractors.DEFAULT = defaultExtractor;
            }
            // Functions
            if (typeof extract === "function") {
                extractors.DEFAULT = extract;
            } else if (Array.isArray(extract)) {
                for (let { extensions, extractor } of extract !== null && extract !== void 0 ? extract : []){
                    for (let extension of extensions){
                        extractors[extension] = extractor;
                    }
                }
            } else if (typeof extract === "object" && extract !== null) {
                Object.assign(extractors, extract);
            }
            return extractors;
        })(),
        transform: (()=>{
            let transform = (()=>{
                var _config_purge, _config_content, _config_purge1, _config_purge_transform, _config_content1, _config_content_transform;
                if ((_config_purge = config.purge) === null || _config_purge === void 0 ? void 0 : _config_purge.transform) return config.purge.transform;
                if ((_config_content = config.content) === null || _config_content === void 0 ? void 0 : _config_content.transform) return config.content.transform;
                if ((_config_purge1 = config.purge) === null || _config_purge1 === void 0 ? void 0 : (_config_purge_transform = _config_purge1.transform) === null || _config_purge_transform === void 0 ? void 0 : _config_purge_transform.DEFAULT) return config.purge.transform.DEFAULT;
                if ((_config_content1 = config.content) === null || _config_content1 === void 0 ? void 0 : (_config_content_transform = _config_content1.transform) === null || _config_content_transform === void 0 ? void 0 : _config_content_transform.DEFAULT) return config.content.transform.DEFAULT;
                return {};
            })();
            let transformers = {};
            if (typeof transform === "function") {
                transformers.DEFAULT = transform;
            } else if (typeof transform === "object" && transform !== null) {
                Object.assign(transformers, transform);
            }
            return transformers;
        })()
    };
    // Validate globs to prevent bogus globs.
    // E.g.: `./src/*.{html}` is invalid, the `{html}` should just be `html`
    for (let file of config.content.files){
        if (typeof file === "string" && /{([^,]*?)}/g.test(file)) {
            _log.default.warn("invalid-glob-braces", [
                `The glob pattern ${(0, _log.dim)(file)} in your Tailwind CSS configuration is invalid.`,
                `Update it to ${(0, _log.dim)(file.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
            ]);
            break;
        }
    }
    return config;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return isPlainObject;
    }
});
function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/cloneDeep.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cloneDeep", {
    enumerable: true,
    get: function() {
        return cloneDeep;
    }
});
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map((child)=>cloneDeep(child));
    }
    if (typeof value === "object" && value !== null) {
        return Object.fromEntries(Object.entries(value).map(([k, v])=>[
                k,
                cloneDeep(v)
            ]));
    }
    return value;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeCommas.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return escapeCommas;
    }
});
function escapeCommas(className) {
    return className.replace(/\\,/g, "\\2c ");
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/colorNames.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _default = {
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    grey: [
        128,
        128,
        128
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    rebeccapurple: [
        102,
        51,
        153
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/color.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    parseColor: function() {
        return parseColor;
    },
    formatColor: function() {
        return formatColor;
    }
});
const _colorNames = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/colorNames.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let HEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
let SHORT_HEX = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
let VALUE = /(?:\d+|\d*\.\d+)%?/;
let SEP = /(?:\s*,\s*|\s+)/;
let ALPHA_SEP = /\s*[,/]\s*/;
let CUSTOM_PROPERTY = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/;
let RGB = new RegExp(`^(rgba?)\\(\\s*(${VALUE.source}|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
let HSL = new RegExp(`^(hsla?)\\(\\s*((?:${VALUE.source})(?:deg|rad|grad|turn)?|${CUSTOM_PROPERTY.source})(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?(?:${ALPHA_SEP.source}(${VALUE.source}|${CUSTOM_PROPERTY.source}))?\\s*\\)$`);
function parseColor(value, { loose = false } = {}) {
    var _match_, _match__toString;
    if (typeof value !== "string") {
        return null;
    }
    value = value.trim();
    if (value === "transparent") {
        return {
            mode: "rgb",
            color: [
                "0",
                "0",
                "0"
            ],
            alpha: "0"
        };
    }
    if (value in _colorNames.default) {
        return {
            mode: "rgb",
            color: _colorNames.default[value].map((v)=>v.toString())
        };
    }
    let hex = value.replace(SHORT_HEX, (_, r, g, b, a)=>[
            "#",
            r,
            r,
            g,
            g,
            b,
            b,
            a ? a + a : ""
        ].join("")).match(HEX);
    if (hex !== null) {
        return {
            mode: "rgb",
            color: [
                parseInt(hex[1], 16),
                parseInt(hex[2], 16),
                parseInt(hex[3], 16)
            ].map((v)=>v.toString()),
            alpha: hex[4] ? (parseInt(hex[4], 16) / 255).toString() : undefined
        };
    }
    var _value_match;
    let match = (_value_match = value.match(RGB)) !== null && _value_match !== void 0 ? _value_match : value.match(HSL);
    if (match === null) {
        return null;
    }
    let color = [
        match[2],
        match[3],
        match[4]
    ].filter(Boolean).map((v)=>v.toString());
    // rgba(var(--my-color), 0.1)
    // hsla(var(--my-color), 0.1)
    if (color.length === 2 && color[0].startsWith("var(")) {
        return {
            mode: match[1],
            color: [
                color[0]
            ],
            alpha: color[1]
        };
    }
    if (!loose && color.length !== 3) {
        return null;
    }
    if (color.length < 3 && !color.some((part)=>/^var\(.*?\)$/.test(part))) {
        return null;
    }
    return {
        mode: match[1],
        color,
        alpha: (_match_ = match[5]) === null || _match_ === void 0 ? void 0 : (_match__toString = _match_.toString) === null || _match__toString === void 0 ? void 0 : _match__toString.call(_match_)
    };
}
function formatColor({ mode, color, alpha }) {
    let hasAlpha = alpha !== undefined;
    if (mode === "rgba" || mode === "hsla") {
        return `${mode}(${color.join(", ")}${hasAlpha ? `, ${alpha}` : ""})`;
    }
    return `${mode}(${color.join(" ")}${hasAlpha ? ` / ${alpha}` : ""})`;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/withAlphaVariable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    withAlphaValue: function() {
        return withAlphaValue;
    },
    default: function() {
        return withAlphaVariable;
    }
});
const _color = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/color.js [app-client] (ecmascript)");
function withAlphaValue(color, alphaValue, defaultValue) {
    if (typeof color === "function") {
        return color({
            opacityValue: alphaValue
        });
    }
    let parsed = (0, _color.parseColor)(color, {
        loose: true
    });
    if (parsed === null) {
        return defaultValue;
    }
    return (0, _color.formatColor)({
        ...parsed,
        alpha: alphaValue
    });
}
function withAlphaVariable({ color, property, variable }) {
    let properties = [].concat(property);
    if (typeof color === "function") {
        return {
            [variable]: "1",
            ...Object.fromEntries(properties.map((p)=>{
                return [
                    p,
                    color({
                        opacityVariable: variable,
                        opacityValue: `var(${variable}, 1)`
                    })
                ];
            }))
        };
    }
    const parsed = (0, _color.parseColor)(color);
    if (parsed === null) {
        return Object.fromEntries(properties.map((p)=>[
                p,
                color
            ]));
    }
    if (parsed.alpha !== undefined) {
        // Has an alpha value, return color as-is
        return Object.fromEntries(properties.map((p)=>[
                p,
                color
            ]));
    }
    return {
        [variable]: "1",
        ...Object.fromEntries(properties.map((p)=>{
            return [
                p,
                (0, _color.formatColor)({
                    ...parsed,
                    alpha: `var(${variable}, 1)`
                })
            ];
        }))
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This splits a string on a top-level character.
 *
 * Regex doesn't support recursion (at least not the JS-flavored version).
 * So we have to use a tiny state machine to keep track of paren placement.
 *
 * Expected behavior using commas:
 * var(--a, 0 0 1px rgb(0, 0, 0)), 0 0 1px rgb(0, 0, 0)
 *       ─┬─             ┬  ┬    ┬
 *        x              x  x    ╰──────── Split because top-level
 *        ╰──────────────┴──┴───────────── Ignored b/c inside >= 1 levels of parens
 *
 * @param {string} input
 * @param {string} separator
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "splitAtTopLevelOnly", {
    enumerable: true,
    get: function() {
        return splitAtTopLevelOnly;
    }
});
function splitAtTopLevelOnly(input, separator) {
    let stack = [];
    let parts = [];
    let lastPos = 0;
    let isEscaped = false;
    for(let idx = 0; idx < input.length; idx++){
        let char = input[idx];
        if (stack.length === 0 && char === separator[0] && !isEscaped) {
            if (separator.length === 1 || input.slice(idx, idx + separator.length) === separator) {
                parts.push(input.slice(lastPos, idx));
                lastPos = idx + separator.length;
            }
        }
        isEscaped = isEscaped ? false : char === "\\";
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" && stack[stack.length - 1] === "(" || char === "]" && stack[stack.length - 1] === "[" || char === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
        }
    }
    parts.push(input.slice(lastPos));
    return parts;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseBoxShadowValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    parseBoxShadowValue: function() {
        return parseBoxShadowValue;
    },
    formatBoxShadowValue: function() {
        return formatBoxShadowValue;
    }
});
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
let KEYWORDS = new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
]);
let SPACE = /\ +(?![^(]*\))/g // Similar to the one above, but with spaces instead.
;
let LENGTH = /^-?(\d+|\.\d+)(.*?)$/g;
function parseBoxShadowValue(input) {
    let shadows = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(input, ",");
    return shadows.map((shadow)=>{
        let value = shadow.trim();
        let result = {
            raw: value
        };
        let parts = value.split(SPACE);
        let seen = new Set();
        for (let part of parts){
            // Reset index, since the regex is stateful.
            LENGTH.lastIndex = 0;
            // Keyword
            if (!seen.has("KEYWORD") && KEYWORDS.has(part)) {
                result.keyword = part;
                seen.add("KEYWORD");
            } else if (LENGTH.test(part)) {
                if (!seen.has("X")) {
                    result.x = part;
                    seen.add("X");
                } else if (!seen.has("Y")) {
                    result.y = part;
                    seen.add("Y");
                } else if (!seen.has("BLUR")) {
                    result.blur = part;
                    seen.add("BLUR");
                } else if (!seen.has("SPREAD")) {
                    result.spread = part;
                    seen.add("SPREAD");
                }
            } else {
                if (!result.color) {
                    result.color = part;
                } else {
                    if (!result.unknown) result.unknown = [];
                    result.unknown.push(part);
                }
            }
        }
        // Check if valid
        result.valid = result.x !== undefined && result.y !== undefined;
        return result;
    });
}
function formatBoxShadowValue(shadows) {
    return shadows.map((shadow)=>{
        if (!shadow.valid) {
            return shadow.raw;
        }
        return [
            shadow.keyword,
            shadow.x,
            shadow.y,
            shadow.blur,
            shadow.spread,
            shadow.color
        ].filter(Boolean).join(" ");
    }).join(", ");
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/dataTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalize: function() {
        return normalize;
    },
    normalizeAttributeSelectors: function() {
        return normalizeAttributeSelectors;
    },
    url: function() {
        return url;
    },
    number: function() {
        return number;
    },
    percentage: function() {
        return percentage;
    },
    length: function() {
        return length;
    },
    lineWidth: function() {
        return lineWidth;
    },
    shadow: function() {
        return shadow;
    },
    color: function() {
        return color;
    },
    image: function() {
        return image;
    },
    gradient: function() {
        return gradient;
    },
    position: function() {
        return position;
    },
    familyName: function() {
        return familyName;
    },
    genericName: function() {
        return genericName;
    },
    absoluteSize: function() {
        return absoluteSize;
    },
    relativeSize: function() {
        return relativeSize;
    }
});
const _color = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/color.js [app-client] (ecmascript)");
const _parseBoxShadowValue = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseBoxShadowValue.js [app-client] (ecmascript)");
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
let cssFunctions = [
    "min",
    "max",
    "clamp",
    "calc"
];
// Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
function isCSSFunction(value) {
    return cssFunctions.some((fn)=>new RegExp(`^${fn}\\(.*\\)`).test(value));
}
// These properties accept a `<dashed-ident>` as one of the values. This means that you can use them
// as: `timeline-scope: --tl;`
//
// Without the `var(--tl)`, in these cases we don't want to normalize the value, and you should add
// the `var()` yourself.
//
// More info:
// - https://drafts.csswg.org/scroll-animations/#propdef-timeline-scope
// - https://developer.mozilla.org/en-US/docs/Web/CSS/timeline-scope#dashed-ident
// - https://www.w3.org/TR/css-anchor-position-1
//
const AUTO_VAR_INJECTION_EXCEPTIONS = new Set([
    // Concrete properties
    "scroll-timeline-name",
    "timeline-scope",
    "view-timeline-name",
    "font-palette",
    "anchor-name",
    "anchor-scope",
    "position-anchor",
    "position-try-options",
    // Shorthand properties
    "scroll-timeline",
    "animation-timeline",
    "view-timeline",
    "position-try"
]);
function normalize(value, context = null, isRoot = true) {
    let isVarException = context && AUTO_VAR_INJECTION_EXCEPTIONS.has(context.property);
    if (value.startsWith("--") && !isVarException) {
        return `var(${value})`;
    }
    // Keep raw strings if it starts with `url(`
    if (value.includes("url(")) {
        return value.split(/(url\(.*?\))/g).filter(Boolean).map((part)=>{
            if (/^url\(.*?\)$/.test(part)) {
                return part;
            }
            return normalize(part, context, false);
        }).join("");
    }
    // Convert `_` to ` `, except for escaped underscores `\_`
    value = value.replace(/([^\\])_+/g, (fullMatch, characterBefore)=>characterBefore + " ".repeat(fullMatch.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_");
    // Remove leftover whitespace
    if (isRoot) {
        value = value.trim();
    }
    value = normalizeMathOperatorSpacing(value);
    return value;
}
function normalizeAttributeSelectors(value) {
    // Wrap values in attribute selectors with quotes
    if (value.includes("=")) {
        value = value.replace(/(=.*)/g, (_fullMatch, match)=>{
            if (match[1] === "'" || match[1] === '"') {
                return match;
            }
            // Handle regex flags on unescaped values
            if (match.length > 2) {
                let trailingCharacter = match[match.length - 1];
                if (match[match.length - 2] === " " && (trailingCharacter === "i" || trailingCharacter === "I" || trailingCharacter === "s" || trailingCharacter === "S")) {
                    return `="${match.slice(1, -2)}" ${match[match.length - 1]}`;
                }
            }
            return `="${match.slice(1)}"`;
        });
    }
    return value;
}
/**
 * Add spaces around operators inside math functions
 * like calc() that do not follow an operator, '(', or `,`.
 *
 * @param {string} value
 * @returns {string}
 */ function normalizeMathOperatorSpacing(value) {
    let preventFormattingInFunctions = [
        "theme"
    ];
    let preventFormattingKeywords = [
        "min-content",
        "max-content",
        "fit-content",
        // Env
        "safe-area-inset-top",
        "safe-area-inset-right",
        "safe-area-inset-bottom",
        "safe-area-inset-left",
        "titlebar-area-x",
        "titlebar-area-y",
        "titlebar-area-width",
        "titlebar-area-height",
        "keyboard-inset-top",
        "keyboard-inset-right",
        "keyboard-inset-bottom",
        "keyboard-inset-left",
        "keyboard-inset-width",
        "keyboard-inset-height",
        "radial-gradient",
        "linear-gradient",
        "conic-gradient",
        "repeating-radial-gradient",
        "repeating-linear-gradient",
        "repeating-conic-gradient",
        "anchor-size"
    ];
    return value.replace(/(calc|min|max|clamp)\(.+\)/g, (match)=>{
        let result = "";
        function lastChar() {
            let char = result.trimEnd();
            return char[char.length - 1];
        }
        for(let i = 0; i < match.length; i++){
            function peek(word) {
                return word.split("").every((char, j)=>match[i + j] === char);
            }
            function consumeUntil(chars) {
                let minIndex = Infinity;
                for (let char of chars){
                    let index = match.indexOf(char, i);
                    if (index !== -1 && index < minIndex) {
                        minIndex = index;
                    }
                }
                let result = match.slice(i, minIndex);
                i += result.length - 1;
                return result;
            }
            let char = match[i];
            // Handle `var(--variable)`
            if (peek("var")) {
                // When we consume until `)`, then we are dealing with this scenario:
                //   `var(--example)`
                //
                // When we consume until `,`, then we are dealing with this scenario:
                //   `var(--example, 1rem)`
                //
                //   In this case we do want to "format", the default value as well
                result += consumeUntil([
                    ")",
                    ","
                ]);
            } else if (preventFormattingKeywords.some((keyword)=>peek(keyword))) {
                let keyword = preventFormattingKeywords.find((keyword)=>peek(keyword));
                result += keyword;
                i += keyword.length - 1;
            } else if (preventFormattingInFunctions.some((fn)=>peek(fn))) {
                result += consumeUntil([
                    ")"
                ]);
            } else if (peek("[")) {
                result += consumeUntil([
                    "]"
                ]);
            } else if ([
                "+",
                "-",
                "*",
                "/"
            ].includes(char) && ![
                "(",
                "+",
                "-",
                "*",
                "/",
                ","
            ].includes(lastChar())) {
                result += ` ${char} `;
            } else {
                result += char;
            }
        }
        // Simplify multiple spaces
        return result.replace(/\s+/g, " ");
    });
}
function url(value) {
    return value.startsWith("url(");
}
function number(value) {
    return !isNaN(Number(value)) || isCSSFunction(value);
}
function percentage(value) {
    return value.endsWith("%") && number(value.slice(0, -1)) || isCSSFunction(value);
}
// Please refer to MDN when updating this list:
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries#container_query_length_units
let lengthUnits = [
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
];
let lengthUnitsPattern = `(?:${lengthUnits.join("|")})`;
function length(value) {
    return value === "0" || new RegExp(`^[+-]?[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`).test(value) || isCSSFunction(value);
}
let lineWidths = new Set([
    "thin",
    "medium",
    "thick"
]);
function lineWidth(value) {
    return lineWidths.has(value);
}
function shadow(value) {
    let parsedShadows = (0, _parseBoxShadowValue.parseBoxShadowValue)(normalize(value));
    for (let parsedShadow of parsedShadows){
        if (!parsedShadow.valid) {
            return false;
        }
    }
    return true;
}
function color(value) {
    let colors = 0;
    let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part)=>{
        part = normalize(part);
        if (part.startsWith("var(")) return true;
        if ((0, _color.parseColor)(part, {
            loose: true
        }) !== null) return colors++, true;
        return false;
    });
    if (!result) return false;
    return colors > 0;
}
function image(value) {
    let images = 0;
    let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part)=>{
        part = normalize(part);
        if (part.startsWith("var(")) return true;
        if (url(part) || gradient(part) || [
            "element(",
            "image(",
            "cross-fade(",
            "image-set("
        ].some((fn)=>part.startsWith(fn))) {
            images++;
            return true;
        }
        return false;
    });
    if (!result) return false;
    return images > 0;
}
let gradientTypes = new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
]);
function gradient(value) {
    value = normalize(value);
    for (let type of gradientTypes){
        if (value.startsWith(`${type}(`)) {
            return true;
        }
    }
    return false;
}
let validPositions = new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
]);
function position(value) {
    let positions = 0;
    let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, "_").every((part)=>{
        part = normalize(part);
        if (part.startsWith("var(")) return true;
        if (validPositions.has(part) || length(part) || percentage(part)) {
            positions++;
            return true;
        }
        return false;
    });
    if (!result) return false;
    return positions > 0;
}
function familyName(value) {
    let fonts = 0;
    let result = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part)=>{
        part = normalize(part);
        if (part.startsWith("var(")) return true;
        // If it contains spaces, then it should be quoted
        if (part.includes(" ")) {
            if (!/(['"])([^"']+)\1/g.test(part)) {
                return false;
            }
        }
        // If it starts with a number, it's invalid
        if (/^\d/g.test(part)) {
            return false;
        }
        fonts++;
        return true;
    });
    if (!result) return false;
    return fonts > 0;
}
let genericNames = new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
]);
function genericName(value) {
    return genericNames.has(value);
}
let absoluteSizes = new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
]);
function absoluteSize(value) {
    return absoluteSizes.has(value);
}
let relativeSizes = new Set([
    "larger",
    "smaller"
]);
function relativeSize(value) {
    return relativeSizes.has(value);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/validateFormalSyntax.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "backgroundSize", {
    enumerable: true,
    get: function() {
        return backgroundSize;
    }
});
const _dataTypes = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/dataTypes.js [app-client] (ecmascript)");
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
function backgroundSize(value) {
    let keywordValues = [
        "cover",
        "contain"
    ];
    // the <length-percentage> type will probably be a css function
    // so we have to use `splitAtTopLevelOnly`
    return (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(value, ",").every((part)=>{
        let sizes = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(part, "_").filter(Boolean);
        if (sizes.length === 1 && keywordValues.includes(sizes[0])) return true;
        if (sizes.length !== 1 && sizes.length !== 2) return false;
        return sizes.every((size)=>(0, _dataTypes.length)(size) || (0, _dataTypes.percentage)(size) || size === "auto");
    });
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pluginUtils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    updateAllClasses: function() {
        return updateAllClasses;
    },
    asValue: function() {
        return asValue;
    },
    parseColorFormat: function() {
        return parseColorFormat;
    },
    asColor: function() {
        return asColor;
    },
    asLookupValue: function() {
        return asLookupValue;
    },
    typeMap: function() {
        return typeMap;
    },
    coerceValue: function() {
        return coerceValue;
    },
    getMatchingTypes: function() {
        return getMatchingTypes;
    }
});
const _escapeCommas = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeCommas.js [app-client] (ecmascript)"));
const _withAlphaVariable = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/withAlphaVariable.js [app-client] (ecmascript)");
const _dataTypes = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/dataTypes.js [app-client] (ecmascript)");
const _negateValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/negateValue.js [app-client] (ecmascript)"));
const _validateFormalSyntax = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/validateFormalSyntax.js [app-client] (ecmascript)");
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function updateAllClasses(selectors, updateClass) {
    selectors.walkClasses((sel)=>{
        sel.value = updateClass(sel.value);
        if (sel.raws && sel.raws.value) {
            sel.raws.value = (0, _escapeCommas.default)(sel.raws.value);
        }
    });
}
function resolveArbitraryValue(modifier, validate) {
    if (!isArbitraryValue(modifier)) {
        return undefined;
    }
    let value = modifier.slice(1, -1);
    if (!validate(value)) {
        return undefined;
    }
    return (0, _dataTypes.normalize)(value);
}
function asNegativeValue(modifier, lookup = {}, validate) {
    let positiveValue = lookup[modifier];
    if (positiveValue !== undefined) {
        return (0, _negateValue.default)(positiveValue);
    }
    if (isArbitraryValue(modifier)) {
        let resolved = resolveArbitraryValue(modifier, validate);
        if (resolved === undefined) {
            return undefined;
        }
        return (0, _negateValue.default)(resolved);
    }
}
function asValue(modifier, options = {}, { validate = ()=>true } = {}) {
    var _options_values;
    let value = (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
    if (value !== undefined) {
        return value;
    }
    if (options.supportsNegativeValues && modifier.startsWith("-")) {
        return asNegativeValue(modifier.slice(1), options.values, validate);
    }
    return resolveArbitraryValue(modifier, validate);
}
function isArbitraryValue(input) {
    return input.startsWith("[") && input.endsWith("]");
}
function splitUtilityModifier(modifier) {
    let slashIdx = modifier.lastIndexOf("/");
    // If the `/` is inside an arbitrary, we want to find the previous one if any
    // This logic probably isn't perfect but it should work for most cases
    let arbitraryStartIdx = modifier.lastIndexOf("[", slashIdx);
    let arbitraryEndIdx = modifier.indexOf("]", slashIdx);
    let isNextToArbitrary = modifier[slashIdx - 1] === "]" || modifier[slashIdx + 1] === "[";
    // Backtrack to the previous `/` if the one we found was inside an arbitrary
    if (!isNextToArbitrary) {
        if (arbitraryStartIdx !== -1 && arbitraryEndIdx !== -1) {
            if (arbitraryStartIdx < slashIdx && slashIdx < arbitraryEndIdx) {
                slashIdx = modifier.lastIndexOf("/", arbitraryStartIdx);
            }
        }
    }
    if (slashIdx === -1 || slashIdx === modifier.length - 1) {
        return [
            modifier,
            undefined
        ];
    }
    let arbitrary = isArbitraryValue(modifier);
    // The modifier could be of the form `[foo]/[bar]`
    // We want to handle this case properly
    // without affecting `[foo/bar]`
    if (arbitrary && !modifier.includes("]/[")) {
        return [
            modifier,
            undefined
        ];
    }
    return [
        modifier.slice(0, slashIdx),
        modifier.slice(slashIdx + 1)
    ];
}
function parseColorFormat(value) {
    if (typeof value === "string" && value.includes("<alpha-value>")) {
        let oldValue = value;
        return ({ opacityValue = 1 })=>oldValue.replace(/<alpha-value>/g, opacityValue);
    }
    return value;
}
function unwrapArbitraryModifier(modifier) {
    return (0, _dataTypes.normalize)(modifier.slice(1, -1));
}
function asColor(modifier, options = {}, { tailwindConfig = {} } = {}) {
    var _options_values;
    if (((_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier]) !== undefined) {
        var _options_values1;
        return parseColorFormat((_options_values1 = options.values) === null || _options_values1 === void 0 ? void 0 : _options_values1[modifier]);
    }
    // TODO: Hoist this up to getMatchingTypes or something
    // We do this here because we need the alpha value (if any)
    let [color, alpha] = splitUtilityModifier(modifier);
    if (alpha !== undefined) {
        var _options_values2, _tailwindConfig_theme, _tailwindConfig_theme_opacity;
        var _options_values_color;
        let normalizedColor = (_options_values_color = (_options_values2 = options.values) === null || _options_values2 === void 0 ? void 0 : _options_values2[color]) !== null && _options_values_color !== void 0 ? _options_values_color : isArbitraryValue(color) ? color.slice(1, -1) : undefined;
        if (normalizedColor === undefined) {
            return undefined;
        }
        normalizedColor = parseColorFormat(normalizedColor);
        if (isArbitraryValue(alpha)) {
            return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, unwrapArbitraryModifier(alpha));
        }
        if (((_tailwindConfig_theme = tailwindConfig.theme) === null || _tailwindConfig_theme === void 0 ? void 0 : (_tailwindConfig_theme_opacity = _tailwindConfig_theme.opacity) === null || _tailwindConfig_theme_opacity === void 0 ? void 0 : _tailwindConfig_theme_opacity[alpha]) === undefined) {
            return undefined;
        }
        return (0, _withAlphaVariable.withAlphaValue)(normalizedColor, tailwindConfig.theme.opacity[alpha]);
    }
    return asValue(modifier, options, {
        validate: _dataTypes.color
    });
}
function asLookupValue(modifier, options = {}) {
    var _options_values;
    return (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[modifier];
}
function guess(validate) {
    return (modifier, options)=>{
        return asValue(modifier, options, {
            validate
        });
    };
}
let typeMap = {
    any: asValue,
    color: asColor,
    url: guess(_dataTypes.url),
    image: guess(_dataTypes.image),
    length: guess(_dataTypes.length),
    percentage: guess(_dataTypes.percentage),
    position: guess(_dataTypes.position),
    lookup: asLookupValue,
    "generic-name": guess(_dataTypes.genericName),
    "family-name": guess(_dataTypes.familyName),
    number: guess(_dataTypes.number),
    "line-width": guess(_dataTypes.lineWidth),
    "absolute-size": guess(_dataTypes.absoluteSize),
    "relative-size": guess(_dataTypes.relativeSize),
    shadow: guess(_dataTypes.shadow),
    size: guess(_validateFormalSyntax.backgroundSize)
};
let supportedTypes = Object.keys(typeMap);
function splitAtFirst(input, delim) {
    let idx = input.indexOf(delim);
    if (idx === -1) return [
        undefined,
        input
    ];
    return [
        input.slice(0, idx),
        input.slice(idx + 1)
    ];
}
function coerceValue(types, modifier, options, tailwindConfig) {
    if (options.values && modifier in options.values) {
        for (let { type } of types !== null && types !== void 0 ? types : []){
            let result = typeMap[type](modifier, options, {
                tailwindConfig
            });
            if (result === undefined) {
                continue;
            }
            return [
                result,
                type,
                null
            ];
        }
    }
    if (isArbitraryValue(modifier)) {
        let arbitraryValue = modifier.slice(1, -1);
        let [explicitType, value] = splitAtFirst(arbitraryValue, ":");
        // It could be that this resolves to `url(https` which is not a valid
        // identifier. We currently only support "simple" words with dashes or
        // underscores. E.g.: family-name
        if (!/^[\w-_]+$/g.test(explicitType)) {
            value = arbitraryValue;
        } else if (explicitType !== undefined && !supportedTypes.includes(explicitType)) {
            return [];
        }
        if (value.length > 0 && supportedTypes.includes(explicitType)) {
            return [
                asValue(`[${value}]`, options),
                explicitType,
                null
            ];
        }
    }
    let matches = getMatchingTypes(types, modifier, options, tailwindConfig);
    // Find first matching type
    for (let match of matches){
        return match;
    }
    return [];
}
function* getMatchingTypes(types, rawModifier, options, tailwindConfig) {
    let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig, "generalizedModifiers");
    let [modifier, utilityModifier] = splitUtilityModifier(rawModifier);
    let canUseUtilityModifier = modifiersEnabled && options.modifiers != null && (options.modifiers === "any" || typeof options.modifiers === "object" && (utilityModifier && isArbitraryValue(utilityModifier) || utilityModifier in options.modifiers));
    if (!canUseUtilityModifier) {
        modifier = rawModifier;
        utilityModifier = undefined;
    }
    if (utilityModifier !== undefined && modifier === "") {
        modifier = "DEFAULT";
    }
    // Check the full value first
    // TODO: Move to asValue… somehow
    if (utilityModifier !== undefined) {
        if (typeof options.modifiers === "object") {
            var _options_modifiers;
            var _options_modifiers_utilityModifier;
            let configValue = (_options_modifiers_utilityModifier = (_options_modifiers = options.modifiers) === null || _options_modifiers === void 0 ? void 0 : _options_modifiers[utilityModifier]) !== null && _options_modifiers_utilityModifier !== void 0 ? _options_modifiers_utilityModifier : null;
            if (configValue !== null) {
                utilityModifier = configValue;
            } else if (isArbitraryValue(utilityModifier)) {
                utilityModifier = unwrapArbitraryModifier(utilityModifier);
            }
        }
    }
    for (let { type } of types !== null && types !== void 0 ? types : []){
        let result = typeMap[type](modifier, options, {
            tailwindConfig
        });
        if (result === undefined) {
            continue;
        }
        yield [
            result,
            type,
            utilityModifier !== null && utilityModifier !== void 0 ? utilityModifier : null
        ];
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toColorValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return toColorValue;
    }
});
function toColorValue(maybeFunction) {
    return typeof maybeFunction === "function" ? maybeFunction({}) : maybeFunction;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/resolveConfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resolveConfig;
    }
});
const _negateValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/negateValue.js [app-client] (ecmascript)"));
const _corePluginList = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/corePluginList.js [app-client] (ecmascript)"));
const _configurePlugins = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/configurePlugins.js [app-client] (ecmascript)"));
const _colors = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/public/colors.js [app-client] (ecmascript)"));
const _defaults = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/defaults.js [app-client] (ecmascript)");
const _toPath = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toPath.js [app-client] (ecmascript)");
const _normalizeConfig = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeConfig.js [app-client] (ecmascript)");
const _isPlainObject = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)"));
const _cloneDeep = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/cloneDeep.js [app-client] (ecmascript)");
const _pluginUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pluginUtils.js [app-client] (ecmascript)");
const _withAlphaVariable = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/withAlphaVariable.js [app-client] (ecmascript)");
const _toColorValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toColorValue.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isFunction(input) {
    return typeof input === "function";
}
function mergeWith(target, ...sources) {
    let customizer = sources.pop();
    for (let source of sources){
        for(let k in source){
            let merged = customizer(target[k], source[k]);
            if (merged === undefined) {
                if ((0, _isPlainObject.default)(target[k]) && (0, _isPlainObject.default)(source[k])) {
                    target[k] = mergeWith({}, target[k], source[k], customizer);
                } else {
                    target[k] = source[k];
                }
            } else {
                target[k] = merged;
            }
        }
    }
    return target;
}
const configUtils = {
    colors: _colors.default,
    negative (scale) {
        // TODO: Log that this function isn't really needed anymore?
        return Object.keys(scale).filter((key)=>scale[key] !== "0").reduce((negativeScale, key)=>{
            let negativeValue = (0, _negateValue.default)(scale[key]);
            if (negativeValue !== undefined) {
                negativeScale[`-${key}`] = negativeValue;
            }
            return negativeScale;
        }, {});
    },
    breakpoints (screens) {
        return Object.keys(screens).filter((key)=>typeof screens[key] === "string").reduce((breakpoints, key)=>({
                ...breakpoints,
                [`screen-${key}`]: screens[key]
            }), {});
    }
};
function value(valueToResolve, ...args) {
    return isFunction(valueToResolve) ? valueToResolve(...args) : valueToResolve;
}
function collectExtends(items) {
    return items.reduce((merged, { extend })=>{
        return mergeWith(merged, extend, (mergedValue, extendValue)=>{
            if (mergedValue === undefined) {
                return [
                    extendValue
                ];
            }
            if (Array.isArray(mergedValue)) {
                return [
                    extendValue,
                    ...mergedValue
                ];
            }
            return [
                extendValue,
                mergedValue
            ];
        });
    }, {});
}
function mergeThemes(themes) {
    return {
        ...themes.reduce((merged, theme)=>(0, _defaults.defaults)(merged, theme), {}),
        // In order to resolve n config objects, we combine all of their `extend` properties
        // into arrays instead of objects so they aren't overridden.
        extend: collectExtends(themes)
    };
}
function mergeExtensionCustomizer(merged, value) {
    // When we have an array of objects, we do want to merge it
    if (Array.isArray(merged) && (0, _isPlainObject.default)(merged[0])) {
        return merged.concat(value);
    }
    // When the incoming value is an array, and the existing config is an object, prepend the existing object
    if (Array.isArray(value) && (0, _isPlainObject.default)(value[0]) && (0, _isPlainObject.default)(merged)) {
        return [
            merged,
            ...value
        ];
    }
    // Override arrays (for example for font-families, box-shadows, ...)
    if (Array.isArray(value)) {
        return value;
    }
    // Execute default behaviour
    return undefined;
}
function mergeExtensions({ extend, ...theme }) {
    return mergeWith(theme, extend, (themeValue, extensions)=>{
        // The `extend` property is an array, so we need to check if it contains any functions
        if (!isFunction(themeValue) && !extensions.some(isFunction)) {
            return mergeWith({}, themeValue, ...extensions, mergeExtensionCustomizer);
        }
        return (resolveThemePath, utils)=>mergeWith({}, ...[
                themeValue,
                ...extensions
            ].map((e)=>value(e, resolveThemePath, utils)), mergeExtensionCustomizer);
    });
}
/**
 *
 * @param {string} key
 * @return {Iterable<string[] & {alpha: string | undefined}>}
 */ function* toPaths(key) {
    let path = (0, _toPath.toPath)(key);
    if (path.length === 0) {
        return;
    }
    yield path;
    if (Array.isArray(key)) {
        return;
    }
    let pattern = /^(.*?)\s*\/\s*([^/]+)$/;
    let matches = key.match(pattern);
    if (matches !== null) {
        let [, prefix, alpha] = matches;
        let newPath = (0, _toPath.toPath)(prefix);
        newPath.alpha = alpha;
        yield newPath;
    }
}
function resolveFunctionKeys(object) {
    // theme('colors.red.500 / 0.5') -> ['colors', 'red', '500 / 0', '5]
    const resolvePath = (key, defaultValue)=>{
        for (const path of toPaths(key)){
            let index = 0;
            let val = object;
            while(val !== undefined && val !== null && index < path.length){
                val = val[path[index++]];
                let shouldResolveAsFn = isFunction(val) && (path.alpha === undefined || index <= path.length - 1);
                val = shouldResolveAsFn ? val(resolvePath, configUtils) : val;
            }
            if (val !== undefined) {
                if (path.alpha !== undefined) {
                    let normalized = (0, _pluginUtils.parseColorFormat)(val);
                    return (0, _withAlphaVariable.withAlphaValue)(normalized, path.alpha, (0, _toColorValue.default)(normalized));
                }
                if ((0, _isPlainObject.default)(val)) {
                    return (0, _cloneDeep.cloneDeep)(val);
                }
                return val;
            }
        }
        return defaultValue;
    };
    Object.assign(resolvePath, {
        theme: resolvePath,
        ...configUtils
    });
    return Object.keys(object).reduce((resolved, key)=>{
        resolved[key] = isFunction(object[key]) ? object[key](resolvePath, configUtils) : object[key];
        return resolved;
    }, {});
}
function extractPluginConfigs(configs) {
    let allConfigs = [];
    configs.forEach((config)=>{
        allConfigs = [
            ...allConfigs,
            config
        ];
        var _config_plugins;
        const plugins = (_config_plugins = config === null || config === void 0 ? void 0 : config.plugins) !== null && _config_plugins !== void 0 ? _config_plugins : [];
        if (plugins.length === 0) {
            return;
        }
        plugins.forEach((plugin)=>{
            if (plugin.__isOptionsFunction) {
                plugin = plugin();
            }
            var _plugin_config;
            allConfigs = [
                ...allConfigs,
                ...extractPluginConfigs([
                    (_plugin_config = plugin === null || plugin === void 0 ? void 0 : plugin.config) !== null && _plugin_config !== void 0 ? _plugin_config : {}
                ])
            ];
        });
    });
    return allConfigs;
}
function resolveCorePlugins(corePluginConfigs) {
    const result = [
        ...corePluginConfigs
    ].reduceRight((resolved, corePluginConfig)=>{
        if (isFunction(corePluginConfig)) {
            return corePluginConfig({
                corePlugins: resolved
            });
        }
        return (0, _configurePlugins.default)(corePluginConfig, resolved);
    }, _corePluginList.default);
    return result;
}
function resolvePluginLists(pluginLists) {
    const result = [
        ...pluginLists
    ].reduceRight((resolved, pluginList)=>{
        return [
            ...resolved,
            ...pluginList
        ];
    }, []);
    return result;
}
function resolveConfig(configs) {
    let allConfigs = [
        ...extractPluginConfigs(configs),
        {
            prefix: "",
            important: false,
            separator: ":"
        }
    ];
    var _t_theme, _c_plugins;
    return (0, _normalizeConfig.normalizeConfig)((0, _defaults.defaults)({
        theme: resolveFunctionKeys(mergeExtensions(mergeThemes(allConfigs.map((t)=>{
            return (_t_theme = t === null || t === void 0 ? void 0 : t.theme) !== null && _t_theme !== void 0 ? _t_theme : {};
        })))),
        corePlugins: resolveCorePlugins(allConfigs.map((c)=>c.corePlugins)),
        plugins: resolvePluginLists(configs.map((c)=>{
            return (_c_plugins = c === null || c === void 0 ? void 0 : c.plugins) !== null && _c_plugins !== void 0 ? _c_plugins : [];
        }))
    }, ...allConfigs));
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/stubs/config.full.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    content: [],
    presets: [],
    darkMode: 'media',
    theme: {
        accentColor: ({ theme })=>({
                ...theme('colors'),
                auto: 'auto'
            }),
        animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite'
        },
        aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"'
        },
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9'
        },
        backdropBlur: ({ theme })=>theme('blur'),
        backdropBrightness: ({ theme })=>theme('brightness'),
        backdropContrast: ({ theme })=>theme('contrast'),
        backdropGrayscale: ({ theme })=>theme('grayscale'),
        backdropHueRotate: ({ theme })=>theme('hueRotate'),
        backdropInvert: ({ theme })=>theme('invert'),
        backdropOpacity: ({ theme })=>theme('opacity'),
        backdropSaturate: ({ theme })=>theme('saturate'),
        backdropSepia: ({ theme })=>theme('sepia'),
        backgroundColor: ({ theme })=>theme('colors'),
        backgroundImage: {
            none: 'none',
            'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
        },
        backgroundOpacity: ({ theme })=>theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain'
        },
        blur: {
            0: '0',
            none: '',
            sm: '4px',
            DEFAULT: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px'
        },
        borderColor: ({ theme })=>({
                ...theme('colors'),
                DEFAULT: theme('colors.gray.200', 'currentColor')
            }),
        borderOpacity: ({ theme })=>theme('opacity'),
        borderRadius: {
            none: '0px',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px'
        },
        borderSpacing: ({ theme })=>({
                ...theme('spacing')
            }),
        borderWidth: {
            DEFAULT: '1px',
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            none: 'none'
        },
        boxShadowColor: ({ theme })=>theme('colors'),
        brightness: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
            200: '2'
        },
        caretColor: ({ theme })=>theme('colors'),
        colors: ({ colors })=>({
                inherit: colors.inherit,
                current: colors.current,
                transparent: colors.transparent,
                black: colors.black,
                white: colors.white,
                slate: colors.slate,
                gray: colors.gray,
                zinc: colors.zinc,
                neutral: colors.neutral,
                stone: colors.stone,
                red: colors.red,
                orange: colors.orange,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose
            }),
        columns: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            '3xs': '16rem',
            '2xs': '18rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem'
        },
        container: {},
        content: {
            none: 'none'
        },
        contrast: {
            0: '0',
            50: '.5',
            75: '.75',
            100: '1',
            125: '1.25',
            150: '1.5',
            200: '2'
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            help: 'help',
            'not-allowed': 'not-allowed',
            none: 'none',
            'context-menu': 'context-menu',
            progress: 'progress',
            cell: 'cell',
            crosshair: 'crosshair',
            'vertical-text': 'vertical-text',
            alias: 'alias',
            copy: 'copy',
            'no-drop': 'no-drop',
            grab: 'grab',
            grabbing: 'grabbing',
            'all-scroll': 'all-scroll',
            'col-resize': 'col-resize',
            'row-resize': 'row-resize',
            'n-resize': 'n-resize',
            'e-resize': 'e-resize',
            's-resize': 's-resize',
            'w-resize': 'w-resize',
            'ne-resize': 'ne-resize',
            'nw-resize': 'nw-resize',
            'se-resize': 'se-resize',
            'sw-resize': 'sw-resize',
            'ew-resize': 'ew-resize',
            'ns-resize': 'ns-resize',
            'nesw-resize': 'nesw-resize',
            'nwse-resize': 'nwse-resize',
            'zoom-in': 'zoom-in',
            'zoom-out': 'zoom-out'
        },
        divideColor: ({ theme })=>theme('borderColor'),
        divideOpacity: ({ theme })=>theme('borderOpacity'),
        divideWidth: ({ theme })=>theme('borderWidth'),
        dropShadow: {
            sm: '0 1px 1px rgb(0 0 0 / 0.05)',
            DEFAULT: [
                '0 1px 2px rgb(0 0 0 / 0.1)',
                '0 1px 1px rgb(0 0 0 / 0.06)'
            ],
            md: [
                '0 4px 3px rgb(0 0 0 / 0.07)',
                '0 2px 2px rgb(0 0 0 / 0.06)'
            ],
            lg: [
                '0 10px 8px rgb(0 0 0 / 0.04)',
                '0 4px 3px rgb(0 0 0 / 0.1)'
            ],
            xl: [
                '0 20px 13px rgb(0 0 0 / 0.03)',
                '0 8px 5px rgb(0 0 0 / 0.08)'
            ],
            '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
            none: '0 0 #0000'
        },
        fill: ({ theme })=>({
                none: 'none',
                ...theme('colors')
            }),
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none'
        },
        flexBasis: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                full: '100%'
            }),
        flexGrow: {
            0: '0',
            DEFAULT: '1'
        },
        flexShrink: {
            0: '0',
            DEFAULT: '1'
        },
        fontFamily: {
            sans: [
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            serif: [
                'ui-serif',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif'
            ],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace'
            ]
        },
        fontSize: {
            xs: [
                '0.75rem',
                {
                    lineHeight: '1rem'
                }
            ],
            sm: [
                '0.875rem',
                {
                    lineHeight: '1.25rem'
                }
            ],
            base: [
                '1rem',
                {
                    lineHeight: '1.5rem'
                }
            ],
            lg: [
                '1.125rem',
                {
                    lineHeight: '1.75rem'
                }
            ],
            xl: [
                '1.25rem',
                {
                    lineHeight: '1.75rem'
                }
            ],
            '2xl': [
                '1.5rem',
                {
                    lineHeight: '2rem'
                }
            ],
            '3xl': [
                '1.875rem',
                {
                    lineHeight: '2.25rem'
                }
            ],
            '4xl': [
                '2.25rem',
                {
                    lineHeight: '2.5rem'
                }
            ],
            '5xl': [
                '3rem',
                {
                    lineHeight: '1'
                }
            ],
            '6xl': [
                '3.75rem',
                {
                    lineHeight: '1'
                }
            ],
            '7xl': [
                '4.5rem',
                {
                    lineHeight: '1'
                }
            ],
            '8xl': [
                '6rem',
                {
                    lineHeight: '1'
                }
            ],
            '9xl': [
                '8rem',
                {
                    lineHeight: '1'
                }
            ]
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        gap: ({ theme })=>theme('spacing'),
        gradientColorStops: ({ theme })=>theme('colors'),
        gradientColorStopPositions: {
            '0%': '0%',
            '5%': '5%',
            '10%': '10%',
            '15%': '15%',
            '20%': '20%',
            '25%': '25%',
            '30%': '30%',
            '35%': '35%',
            '40%': '40%',
            '45%': '45%',
            '50%': '50%',
            '55%': '55%',
            '60%': '60%',
            '65%': '65%',
            '70%': '70%',
            '75%': '75%',
            '80%': '80%',
            '85%': '85%',
            '90%': '90%',
            '95%': '95%',
            '100%': '100%'
        },
        grayscale: {
            0: '0',
            DEFAULT: '100%'
        },
        gridAutoColumns: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)'
        },
        gridAutoRows: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)'
        },
        gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1'
        },
        gridColumnEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13'
        },
        gridColumnStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13'
        },
        gridRow: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1'
        },
        gridRowEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13'
        },
        gridRowStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13'
        },
        gridTemplateColumns: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))'
        },
        gridTemplateRows: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))'
        },
        height: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                full: '100%',
                screen: '100vh',
                svh: '100svh',
                lvh: '100lvh',
                dvh: '100dvh',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        hueRotate: {
            0: '0deg',
            15: '15deg',
            30: '30deg',
            60: '60deg',
            90: '90deg',
            180: '180deg'
        },
        inset: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                full: '100%'
            }),
        invert: {
            0: '0',
            DEFAULT: '100%'
        },
        keyframes: {
            spin: {
                to: {
                    transform: 'rotate(360deg)'
                }
            },
            ping: {
                '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: '0'
                }
            },
            pulse: {
                '50%': {
                    opacity: '.5'
                }
            },
            bounce: {
                '0%, 100%': {
                    transform: 'translateY(-25%)',
                    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
                },
                '50%': {
                    transform: 'none',
                    animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
                }
            }
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem'
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal'
        },
        listStyleImage: {
            none: 'none'
        },
        margin: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing')
            }),
        lineClamp: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6'
        },
        maxHeight: ({ theme })=>({
                ...theme('spacing'),
                none: 'none',
                full: '100%',
                screen: '100vh',
                svh: '100svh',
                lvh: '100lvh',
                dvh: '100dvh',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        maxWidth: ({ theme, breakpoints })=>({
                ...theme('spacing'),
                none: 'none',
                xs: '20rem',
                sm: '24rem',
                md: '28rem',
                lg: '32rem',
                xl: '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
                '4xl': '56rem',
                '5xl': '64rem',
                '6xl': '72rem',
                '7xl': '80rem',
                full: '100%',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content',
                prose: '65ch',
                ...breakpoints(theme('screens'))
            }),
        minHeight: ({ theme })=>({
                ...theme('spacing'),
                full: '100%',
                screen: '100vh',
                svh: '100svh',
                lvh: '100lvh',
                dvh: '100dvh',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        minWidth: ({ theme })=>({
                ...theme('spacing'),
                full: '100%',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            15: '0.15',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            35: '0.35',
            40: '0.4',
            45: '0.45',
            50: '0.5',
            55: '0.55',
            60: '0.6',
            65: '0.65',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            85: '0.85',
            90: '0.9',
            95: '0.95',
            100: '1'
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12'
        },
        outlineColor: ({ theme })=>theme('colors'),
        outlineOffset: {
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        outlineWidth: {
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        padding: ({ theme })=>theme('spacing'),
        placeholderColor: ({ theme })=>theme('colors'),
        placeholderOpacity: ({ theme })=>theme('opacity'),
        ringColor: ({ theme })=>({
                DEFAULT: theme('colors.blue.500', '#3b82f6'),
                ...theme('colors')
            }),
        ringOffsetColor: ({ theme })=>theme('colors'),
        ringOffsetWidth: {
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        ringOpacity: ({ theme })=>({
                DEFAULT: '0.5',
                ...theme('opacity')
            }),
        ringWidth: {
            DEFAULT: '3px',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        rotate: {
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
            45: '45deg',
            90: '90deg',
            180: '180deg'
        },
        saturate: {
            0: '0',
            50: '.5',
            100: '1',
            150: '1.5',
            200: '2'
        },
        scale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5'
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        scrollMargin: ({ theme })=>({
                ...theme('spacing')
            }),
        scrollPadding: ({ theme })=>theme('spacing'),
        sepia: {
            0: '0',
            DEFAULT: '100%'
        },
        skew: {
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg'
        },
        space: ({ theme })=>({
                ...theme('spacing')
            }),
        spacing: {
            px: '1px',
            0: '0px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem'
        },
        stroke: ({ theme })=>({
                none: 'none',
                ...theme('colors')
            }),
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2'
        },
        supports: {},
        data: {},
        textColor: ({ theme })=>theme('colors'),
        textDecorationColor: ({ theme })=>theme('colors'),
        textDecorationThickness: {
            auto: 'auto',
            'from-font': 'from-font',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        textIndent: ({ theme })=>({
                ...theme('spacing')
            }),
        textOpacity: ({ theme })=>theme('opacity'),
        textUnderlineOffset: {
            auto: 'auto',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px'
        },
        transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left'
        },
        transitionDelay: {
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms'
        },
        transitionDuration: {
            DEFAULT: '150ms',
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms'
        },
        transitionProperty: {
            none: 'none',
            all: 'all',
            DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform'
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        translate: ({ theme })=>({
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                full: '100%'
            }),
        size: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                full: '100%',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        width: ({ theme })=>({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                full: '100%',
                screen: '100vw',
                svw: '100svw',
                lvw: '100lvw',
                dvw: '100dvw',
                min: 'min-content',
                max: 'max-content',
                fit: 'fit-content'
            }),
        willChange: {
            auto: 'auto',
            scroll: 'scroll-position',
            contents: 'contents',
            transform: 'transform'
        },
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50'
        }
    },
    plugins: []
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/getAllConfigs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getAllConfigs;
    }
});
const _configfull = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/stubs/config.full.js [app-client] (ecmascript)"));
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getAllConfigs(config) {
    var _config_presets;
    const configs = ((_config_presets = config === null || config === void 0 ? void 0 : config.presets) !== null && _config_presets !== void 0 ? _config_presets : [
        _configfull.default
    ]).slice().reverse().flatMap((preset)=>getAllConfigs(preset instanceof Function ? preset() : preset));
    const features = {
        // Add experimental configs here...
        respectDefaultRingColorOpacity: {
            theme: {
                ringColor: ({ theme })=>({
                        DEFAULT: "#3b82f67f",
                        ...theme("colors")
                    })
            }
        },
        disableColorOpacityUtilitiesByDefault: {
            corePlugins: {
                backgroundOpacity: false,
                borderOpacity: false,
                divideOpacity: false,
                placeholderOpacity: false,
                ringOpacity: false,
                textOpacity: false
            }
        }
    };
    const experimentals = Object.keys(features).filter((feature)=>(0, _featureFlags.flagEnabled)(config, feature)).map((feature)=>features[feature]);
    return [
        config,
        ...experimentals,
        ...configs
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/public/resolve-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return resolveConfig;
    }
});
const _resolveConfig = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/resolveConfig.js [app-client] (ecmascript)"));
const _getAllConfigs = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/getAllConfigs.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function resolveConfig(...configs) {
    let [, ...defaultConfigs] = (0, _getAllConfigs.default)(configs[0]);
    return (0, _resolveConfig.default)([
        ...configs,
        ...defaultConfigs
    ]);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/resolveConfigPath.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return resolveConfigPath;
    },
    resolveDefaultConfigPath: function() {
        return resolveDefaultConfigPath;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultConfigFiles = [
    "./tailwind.config.js",
    "./tailwind.config.cjs",
    "./tailwind.config.mjs",
    "./tailwind.config.ts",
    "./tailwind.config.cts",
    "./tailwind.config.mts"
];
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function resolveConfigPath(pathOrConfig) {
    // require('tailwindcss')({ theme: ..., variants: ... })
    if (isObject(pathOrConfig) && pathOrConfig.config === undefined && !isEmpty(pathOrConfig)) {
        return null;
    }
    // require('tailwindcss')({ config: 'custom-config.js' })
    if (isObject(pathOrConfig) && pathOrConfig.config !== undefined && isString(pathOrConfig.config)) {
        return _path.default.resolve(pathOrConfig.config);
    }
    // require('tailwindcss')({ config: { theme: ..., variants: ... } })
    if (isObject(pathOrConfig) && pathOrConfig.config !== undefined && isObject(pathOrConfig.config)) {
        return null;
    }
    // require('tailwindcss')('custom-config.js')
    if (isString(pathOrConfig)) {
        return _path.default.resolve(pathOrConfig);
    }
    // require('tailwindcss')
    return resolveDefaultConfigPath();
}
function resolveDefaultConfigPath() {
    for (const configFile of defaultConfigFiles){
        try {
            const configPath = _path.default.resolve(configFile);
            _fs.default.accessSync(configPath);
            return configPath;
        } catch (err) {}
    }
    return null;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/transformThemeValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transformThemeValue;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _isPlainObject = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function transformThemeValue(themeSection) {
    if ([
        "fontSize",
        "outline"
    ].includes(themeSection)) {
        return (value)=>{
            if (typeof value === "function") value = value({});
            if (Array.isArray(value)) value = value[0];
            return value;
        };
    }
    if (themeSection === "fontFamily") {
        return (value)=>{
            if (typeof value === "function") value = value({});
            let families = Array.isArray(value) && (0, _isPlainObject.default)(value[1]) ? value[0] : value;
            return Array.isArray(families) ? families.join(", ") : families;
        };
    }
    if ([
        "boxShadow",
        "transitionProperty",
        "transitionDuration",
        "transitionDelay",
        "transitionTimingFunction",
        "backgroundImage",
        "backgroundSize",
        "backgroundColor",
        "cursor",
        "animation"
    ].includes(themeSection)) {
        return (value)=>{
            if (typeof value === "function") value = value({});
            if (Array.isArray(value)) value = value.join(", ");
            return value;
        };
    }
    // For backwards compatibility reasons, before we switched to underscores
    // instead of commas for arbitrary values.
    if ([
        "gridTemplateColumns",
        "gridTemplateRows",
        "objectPosition"
    ].includes(themeSection)) {
        return (value)=>{
            if (typeof value === "function") value = value({});
            if (typeof value === "string") value = _postcss.default.list.comma(value).join(" ");
            return value;
        };
    }
    return (value, opts = {})=>{
        if (typeof value === "function") {
            value = value(opts);
        }
        return value;
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseObjectStyles.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseObjectStyles;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _postcssnested = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-nested@6.2.0_postcss@8.5.6/node_modules/postcss-nested/index.js [app-client] (ecmascript)"));
const _postcssjs = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function parseObjectStyles(styles) {
    if (!Array.isArray(styles)) {
        return parseObjectStyles([
            styles
        ]);
    }
    return styles.flatMap((style)=>{
        return (0, _postcss.default)([
            (0, _postcssnested.default)({
                bubble: [
                    "screen"
                ]
            })
        ]).process(style, {
            parser: _postcssjs.default
        }).root.nodes;
    });
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/prefixSelector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * @template {string | import('postcss-selector-parser').Root} T
 *
 * Prefix all classes in the selector with the given prefix
 *
 * It can take either a string or a selector AST and will return the same type
 *
 * @param {string} prefix
 * @param {T} selector
 * @param {boolean} prependNegative
 * @returns {T}
 */ "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(prefix, selector, prependNegative = false) {
    if (prefix === "") {
        return selector;
    }
    /** @type {import('postcss-selector-parser').Root} */ let ast = typeof selector === "string" ? (0, _postcssselectorparser.default)().astSync(selector) : selector;
    ast.walkClasses((classSelector)=>{
        let baseClass = classSelector.value;
        let shouldPlaceNegativeBeforePrefix = prependNegative && baseClass.startsWith("-");
        classSelector.value = shouldPlaceNegativeBeforePrefix ? `-${prefix}${baseClass.slice(1)}` : `${prefix}${baseClass}`;
    });
    return typeof selector === "string" ? ast.toString() : ast;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return escapeClassName;
    }
});
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _escapeCommas = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeCommas.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function escapeClassName(className) {
    var _node_raws;
    let node = _postcssselectorparser.default.className();
    node.value = className;
    var _node_raws_value;
    return (0, _escapeCommas.default)((_node_raws_value = node === null || node === void 0 ? void 0 : (_node_raws = node.raws) === null || _node_raws === void 0 ? void 0 : _node_raws.value) !== null && _node_raws_value !== void 0 ? _node_raws_value : node.value);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/nameClass.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    asClass: function() {
        return asClass;
    },
    default: function() {
        return nameClass;
    },
    formatClass: function() {
        return formatClass;
    }
});
const _escapeClassName = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)"));
const _escapeCommas = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeCommas.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function asClass(name) {
    return (0, _escapeCommas.default)(`.${(0, _escapeClassName.default)(name)}`);
}
function nameClass(classPrefix, key) {
    return asClass(formatClass(classPrefix, key));
}
function formatClass(classPrefix, key) {
    if (key === "DEFAULT") {
        return classPrefix;
    }
    if (key === "-" || key === "-DEFAULT") {
        return `-${classPrefix}`;
    }
    if (key.startsWith("-")) {
        return `-${classPrefix}${key}`;
    }
    if (key.startsWith("/")) {
        return `${classPrefix}${key}`;
    }
    return `${classPrefix}-${key}`;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/createUtilityPlugin.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createUtilityPlugin;
    }
});
const _transformThemeValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/transformThemeValue.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createUtilityPlugin(themeKey, utilityVariations = [
    [
        themeKey,
        [
            themeKey
        ]
    ]
], { filterDefault = false, ...options } = {}) {
    let transformValue = (0, _transformThemeValue.default)(themeKey);
    return function({ matchUtilities, theme }) {
        for (let utilityVariation of utilityVariations){
            let group = Array.isArray(utilityVariation[0]) ? utilityVariation : [
                utilityVariation
            ];
            var _theme;
            matchUtilities(group.reduce((obj, [classPrefix, properties])=>{
                return Object.assign(obj, {
                    [classPrefix]: (value)=>{
                        return properties.reduce((obj, name)=>{
                            if (Array.isArray(name)) {
                                return Object.assign(obj, {
                                    [name[0]]: name[1]
                                });
                            }
                            return Object.assign(obj, {
                                [name]: transformValue(value)
                            });
                        }, {});
                    }
                });
            }, {}), {
                ...options,
                values: filterDefault ? Object.fromEntries(Object.entries((_theme = theme(themeKey)) !== null && _theme !== void 0 ? _theme : {}).filter(([modifier])=>modifier !== "DEFAULT")) : theme(themeKey)
            });
        }
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/buildMediaQuery.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return buildMediaQuery;
    }
});
function buildMediaQuery(screens) {
    screens = Array.isArray(screens) ? screens : [
        screens
    ];
    return screens.map((screen)=>{
        let values = screen.values.map((screen)=>{
            if (screen.raw !== undefined) {
                return screen.raw;
            }
            return [
                screen.min && `(min-width: ${screen.min})`,
                screen.max && `(max-width: ${screen.max})`
            ].filter(Boolean).join(" and ");
        });
        return screen.not ? `not all and ${values}` : values;
    }).join(", ");
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseAnimationValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseAnimationValue;
    }
});
const DIRECTIONS = new Set([
    "normal",
    "reverse",
    "alternate",
    "alternate-reverse"
]);
const PLAY_STATES = new Set([
    "running",
    "paused"
]);
const FILL_MODES = new Set([
    "none",
    "forwards",
    "backwards",
    "both"
]);
const ITERATION_COUNTS = new Set([
    "infinite"
]);
const TIMINGS = new Set([
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "step-start",
    "step-end"
]);
const TIMING_FNS = [
    "cubic-bezier",
    "steps"
];
const COMMA = /\,(?![^(]*\))/g // Comma separator that is not located between brackets. E.g.: `cubic-bezier(a, b, c)` these don't count.
;
const SPACE = /\ +(?![^(]*\))/g // Similar to the one above, but with spaces instead.
;
const TIME = /^(-?[\d.]+m?s)$/;
const DIGIT = /^(\d+)$/;
function parseAnimationValue(input) {
    let animations = input.split(COMMA);
    return animations.map((animation)=>{
        let value = animation.trim();
        let result = {
            value
        };
        let parts = value.split(SPACE);
        let seen = new Set();
        for (let part of parts){
            if (!seen.has("DIRECTIONS") && DIRECTIONS.has(part)) {
                result.direction = part;
                seen.add("DIRECTIONS");
            } else if (!seen.has("PLAY_STATES") && PLAY_STATES.has(part)) {
                result.playState = part;
                seen.add("PLAY_STATES");
            } else if (!seen.has("FILL_MODES") && FILL_MODES.has(part)) {
                result.fillMode = part;
                seen.add("FILL_MODES");
            } else if (!seen.has("ITERATION_COUNTS") && (ITERATION_COUNTS.has(part) || DIGIT.test(part))) {
                result.iterationCount = part;
                seen.add("ITERATION_COUNTS");
            } else if (!seen.has("TIMING_FUNCTION") && TIMINGS.has(part)) {
                result.timingFunction = part;
                seen.add("TIMING_FUNCTION");
            } else if (!seen.has("TIMING_FUNCTION") && TIMING_FNS.some((f)=>part.startsWith(`${f}(`))) {
                result.timingFunction = part;
                seen.add("TIMING_FUNCTION");
            } else if (!seen.has("DURATION") && TIME.test(part)) {
                result.duration = part;
                seen.add("DURATION");
            } else if (!seen.has("DELAY") && TIME.test(part)) {
                result.delay = part;
                seen.add("DELAY");
            } else if (!seen.has("NAME")) {
                result.name = part;
                seen.add("NAME");
            } else {
                if (!result.unknown) result.unknown = [];
                result.unknown.push(part);
            }
        }
        return result;
    });
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/flattenColorPalette.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const flattenColorPalette = (colors)=>Object.assign({}, ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values])=>typeof values == "object" ? Object.entries(flattenColorPalette(values)).map(([number, hex])=>({
                [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
            })) : [
            {
                [`${color}`]: values
            }
        ]));
const _default = flattenColorPalette;
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"tailwindcss","version":"3.4.18","description":"A utility-first CSS framework for rapidly building custom user interfaces.","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","repository":"https://github.com/tailwindlabs/tailwindcss.git","bugs":"https://github.com/tailwindlabs/tailwindcss/issues","homepage":"https://tailwindcss.com","bin":{"tailwind":"lib/cli.js","tailwindcss":"lib/cli.js"},"scripts":{"prebuild":"npm run generate && rimraf lib","build":"swc src --out-dir lib --copy-files","postbuild":"esbuild lib/cli-peer-dependencies.js --bundle --platform=node --outfile=peers/index.js --define:process.env.CSS_TRANSFORMER_WASM=false","rebuild-fixtures":"npm run build && node -r @swc/register scripts/rebuildFixtures.js","style":"eslint .","pretest":"npm run generate","test":"jest","test:integrations":"npm run test --prefix ./integrations","install:integrations":"node scripts/install-integrations.js","generate:plugin-list":"node -r @swc/register scripts/create-plugin-list.js","generate:types":"node -r @swc/register scripts/generate-types.js","generate":"npm run generate:plugin-list && npm run generate:types","release-channel":"node ./scripts/release-channel.js","release-notes":"node ./scripts/release-notes.js","prepublishOnly":"npm install --force && npm run build"},"files":["src/*","cli/*","lib/*","peers/*","scripts/*.js","stubs/*","nesting/*","types/**/*","*.d.ts","*.css","*.js"],"devDependencies":{"@swc/cli":"0.1.62","@swc/core":"1.3.55","@swc/jest":"0.2.26","@swc/register":"0.1.10","autoprefixer":"^10.4.20","browserslist":"^4.24.0","concurrently":"^8.2.2","cssnano":"^6.1.2","esbuild":"^0.24.0","eslint":"^8.57.1","eslint-config-prettier":"^8.10.0","eslint-plugin-prettier":"^4.2.1","jest":"^29.7.0","jest-diff":"^29.7.0","lightningcss":"1.27.0","prettier":"^2.8.8","rimraf":"^5.0.10","source-map-js":"^1.2.1","turbo":"^1.13.4"},"dependencies":{"@alloc/quick-lru":"^5.2.0","arg":"^5.0.2","chokidar":"^3.6.0","didyoumean":"^1.2.2","dlv":"^1.1.3","fast-glob":"^3.3.2","glob-parent":"^6.0.2","is-glob":"^4.0.3","jiti":"^1.21.7","lilconfig":"^3.1.3","micromatch":"^4.0.8","normalize-path":"^3.0.0","object-hash":"^3.0.0","picocolors":"^1.1.1","postcss":"^8.4.47","postcss-import":"^15.1.0","postcss-js":"^4.0.1","postcss-load-config":"^4.0.2 || ^5.0 || ^6.0","postcss-nested":"^6.2.0","postcss-selector-parser":"^6.1.2","resolve":"^1.22.8","sucrase":"^3.35.0"},"browserslist":["> 1%","not edge <= 18","not ie 11","not op_mini all"],"jest":{"testTimeout":30000,"setupFilesAfterEnv":["<rootDir>/jest/customMatchers.js"],"testPathIgnorePatterns":["/node_modules/","/integrations/","/standalone-cli/","\\.test\\.skip\\.js$"],"transformIgnorePatterns":["node_modules/(?!lightningcss)"],"transform":{"\\.js$":"@swc/jest","\\.ts$":"@swc/jest"}},"engines":{"node":">=14.0.0"}});}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeScreens.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @typedef {object} ScreenValue
 * @property {number|undefined} min
 * @property {number|undefined} max
 * @property {string|undefined} raw
 */ /**
 * @typedef {object} Screen
 * @property {string} name
 * @property {boolean} not
 * @property {ScreenValue[]} values
 */ /**
 * A function that normalizes the various forms that the screens object can be
 * provided in.
 *
 * Input(s):
 *   - ['100px', '200px'] // Raw strings
 *   - { sm: '100px', md: '200px' } // Object with string values
 *   - { sm: { min: '100px' }, md: { max: '100px' } } // Object with object values
 *   - { sm: [{ min: '100px' }, { max: '200px' }] } // Object with object array (multiple values)
 *
 * Output(s):
 *   - [{ name: 'sm', values: [{ min: '100px', max: '200px' }] }] // List of objects, that contains multiple values
 *
 * @returns {Screen[]}
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeScreens: function() {
        return normalizeScreens;
    },
    isScreenSortable: function() {
        return isScreenSortable;
    },
    compareScreens: function() {
        return compareScreens;
    },
    toScreen: function() {
        return toScreen;
    }
});
function normalizeScreens(screens, root = true) {
    if (Array.isArray(screens)) {
        return screens.map((screen)=>{
            if (root && Array.isArray(screen)) {
                throw new Error("The tuple syntax is not supported for `screens`.");
            }
            if (typeof screen === "string") {
                return {
                    name: screen.toString(),
                    not: false,
                    values: [
                        {
                            min: screen,
                            max: undefined
                        }
                    ]
                };
            }
            let [name, options] = screen;
            name = name.toString();
            if (typeof options === "string") {
                return {
                    name,
                    not: false,
                    values: [
                        {
                            min: options,
                            max: undefined
                        }
                    ]
                };
            }
            if (Array.isArray(options)) {
                return {
                    name,
                    not: false,
                    values: options.map((option)=>resolveValue(option))
                };
            }
            return {
                name,
                not: false,
                values: [
                    resolveValue(options)
                ]
            };
        });
    }
    return normalizeScreens(Object.entries(screens !== null && screens !== void 0 ? screens : {}), false);
}
function isScreenSortable(screen) {
    if (screen.values.length !== 1) {
        return {
            result: false,
            reason: "multiple-values"
        };
    } else if (screen.values[0].raw !== undefined) {
        return {
            result: false,
            reason: "raw-values"
        };
    } else if (screen.values[0].min !== undefined && screen.values[0].max !== undefined) {
        return {
            result: false,
            reason: "min-and-max"
        };
    }
    return {
        result: true,
        reason: null
    };
}
function compareScreens(type, a, z) {
    let aScreen = toScreen(a, type);
    let zScreen = toScreen(z, type);
    let aSorting = isScreenSortable(aScreen);
    let bSorting = isScreenSortable(zScreen);
    // These cases should never happen and indicate a bug in Tailwind CSS itself
    if (aSorting.reason === "multiple-values" || bSorting.reason === "multiple-values") {
        throw new Error("Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.");
    } else if (aSorting.reason === "raw-values" || bSorting.reason === "raw-values") {
        throw new Error("Attempted to sort a screen with raw values. This should never happen. Please open a bug report.");
    } else if (aSorting.reason === "min-and-max" || bSorting.reason === "min-and-max") {
        throw new Error("Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.");
    }
    // Let the sorting begin
    let { min: aMin, max: aMax } = aScreen.values[0];
    let { min: zMin, max: zMax } = zScreen.values[0];
    // Negating screens flip their behavior. Basically `not min-width` is `max-width`
    if (a.not) [aMin, aMax] = [
        aMax,
        aMin
    ];
    if (z.not) [zMin, zMax] = [
        zMax,
        zMin
    ];
    aMin = aMin === undefined ? aMin : parseFloat(aMin);
    aMax = aMax === undefined ? aMax : parseFloat(aMax);
    zMin = zMin === undefined ? zMin : parseFloat(zMin);
    zMax = zMax === undefined ? zMax : parseFloat(zMax);
    let [aValue, zValue] = type === "min" ? [
        aMin,
        zMin
    ] : [
        zMax,
        aMax
    ];
    return aValue - zValue;
}
function toScreen(value, type) {
    if (typeof value === "object") {
        return value;
    }
    return {
        name: "arbitrary-screen",
        values: [
            {
                [type]: value
            }
        ]
    };
}
function resolveValue({ "min-width": _minWidth, min = _minWidth, max, raw } = {}) {
    return {
        min,
        max,
        raw
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/removeAlphaVariables.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function removes any uses of CSS variables used as an alpha channel
 *
 * This is required for selectors like `:visited` which do not allow
 * changes in opacity or external control using CSS variables.
 *
 * @param {import('postcss').Container} container
 * @param {string[]} toRemove
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeAlphaVariables", {
    enumerable: true,
    get: function() {
        return removeAlphaVariables;
    }
});
function removeAlphaVariables(container, toRemove) {
    container.walkDecls((decl)=>{
        if (toRemove.includes(decl.prop)) {
            decl.remove();
            return;
        }
        for (let varName of toRemove){
            if (decl.value.includes(`/ var(${varName})`)) {
                decl.value = decl.value.replace(`/ var(${varName})`, "");
            } else if (decl.value.includes(`/ var(${varName}, 1)`)) {
                decl.value = decl.value.replace(`/ var(${varName}, 1)`, "");
            }
        }
    });
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/corePlugins.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    variantPlugins: function() {
        return variantPlugins;
    },
    corePlugins: function() {
        return corePlugins;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _path = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"));
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _createUtilityPlugin = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/createUtilityPlugin.js [app-client] (ecmascript)"));
const _buildMediaQuery = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/buildMediaQuery.js [app-client] (ecmascript)"));
const _escapeClassName = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)"));
const _parseAnimationValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseAnimationValue.js [app-client] (ecmascript)"));
const _flattenColorPalette = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/flattenColorPalette.js [app-client] (ecmascript)"));
const _withAlphaVariable = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/withAlphaVariable.js [app-client] (ecmascript)"));
const _toColorValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toColorValue.js [app-client] (ecmascript)"));
const _isPlainObject = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)"));
const _transformThemeValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/transformThemeValue.js [app-client] (ecmascript)"));
const _packagejson = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/package.json (json)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
const _normalizeScreens = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeScreens.js [app-client] (ecmascript)");
const _parseBoxShadowValue = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseBoxShadowValue.js [app-client] (ecmascript)");
const _removeAlphaVariables = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/removeAlphaVariables.js [app-client] (ecmascript)");
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
const _dataTypes = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/dataTypes.js [app-client] (ecmascript)");
const _setupContextUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupContextUtils.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
let variantPlugins = {
    childVariant: ({ addVariant })=>{
        addVariant("*", "& > *");
    },
    pseudoElementVariants: ({ addVariant })=>{
        addVariant("first-letter", "&::first-letter");
        addVariant("first-line", "&::first-line");
        addVariant("marker", [
            ({ container })=>{
                (0, _removeAlphaVariables.removeAlphaVariables)(container, [
                    "--tw-text-opacity"
                ]);
                return "& *::marker";
            },
            ({ container })=>{
                (0, _removeAlphaVariables.removeAlphaVariables)(container, [
                    "--tw-text-opacity"
                ]);
                return "&::marker";
            }
        ]);
        addVariant("selection", [
            "& *::selection",
            "&::selection"
        ]);
        addVariant("file", "&::file-selector-button");
        addVariant("placeholder", "&::placeholder");
        addVariant("backdrop", "&::backdrop");
        addVariant("before", ({ container })=>{
            container.walkRules((rule)=>{
                let foundContent = false;
                rule.walkDecls("content", ()=>{
                    foundContent = true;
                });
                if (!foundContent) {
                    rule.prepend(_postcss.default.decl({
                        prop: "content",
                        value: "var(--tw-content)"
                    }));
                }
            });
            return "&::before";
        });
        addVariant("after", ({ container })=>{
            container.walkRules((rule)=>{
                let foundContent = false;
                rule.walkDecls("content", ()=>{
                    foundContent = true;
                });
                if (!foundContent) {
                    rule.prepend(_postcss.default.decl({
                        prop: "content",
                        value: "var(--tw-content)"
                    }));
                }
            });
            return "&::after";
        });
    },
    pseudoClassVariants: ({ addVariant, matchVariant, config, prefix })=>{
        let pseudoVariants = [
            // Positional
            [
                "first",
                "&:first-child"
            ],
            [
                "last",
                "&:last-child"
            ],
            [
                "only",
                "&:only-child"
            ],
            [
                "odd",
                "&:nth-child(odd)"
            ],
            [
                "even",
                "&:nth-child(even)"
            ],
            "first-of-type",
            "last-of-type",
            "only-of-type",
            // State
            [
                "visited",
                ({ container })=>{
                    (0, _removeAlphaVariables.removeAlphaVariables)(container, [
                        "--tw-text-opacity",
                        "--tw-border-opacity",
                        "--tw-bg-opacity"
                    ]);
                    return "&:visited";
                }
            ],
            "target",
            [
                "open",
                "&[open]"
            ],
            // Forms
            "default",
            "checked",
            "indeterminate",
            "placeholder-shown",
            "autofill",
            "optional",
            "required",
            "valid",
            "invalid",
            "in-range",
            "out-of-range",
            "read-only",
            // Content
            "empty",
            // Interactive
            "focus-within",
            [
                "hover",
                !(0, _featureFlags.flagEnabled)(config(), "hoverOnlyWhenSupported") ? "&:hover" : "@media (hover: hover) and (pointer: fine) { &:hover }"
            ],
            "focus",
            "focus-visible",
            "active",
            "enabled",
            "disabled"
        ].map((variant)=>Array.isArray(variant) ? variant : [
                variant,
                `&:${variant}`
            ]);
        for (let [variantName, state] of pseudoVariants){
            addVariant(variantName, (ctx)=>{
                let result = typeof state === "function" ? state(ctx) : state;
                return result;
            });
        }
        let variants = {
            group: (_, { modifier })=>modifier ? [
                    `:merge(${prefix(".group")}\\/${(0, _escapeClassName.default)(modifier)})`,
                    " &"
                ] : [
                    `:merge(${prefix(".group")})`,
                    " &"
                ],
            peer: (_, { modifier })=>modifier ? [
                    `:merge(${prefix(".peer")}\\/${(0, _escapeClassName.default)(modifier)})`,
                    " ~ &"
                ] : [
                    `:merge(${prefix(".peer")})`,
                    " ~ &"
                ]
        };
        for (let [name, fn] of Object.entries(variants)){
            matchVariant(name, (value = "", extra)=>{
                let result = (0, _dataTypes.normalize)(typeof value === "function" ? value(extra) : value);
                if (!result.includes("&")) result = "&" + result;
                let [a, b] = fn("", extra);
                let start = null;
                let end = null;
                let quotes = 0;
                for(let i = 0; i < result.length; ++i){
                    let c = result[i];
                    if (c === "&") {
                        start = i;
                    } else if (c === "'" || c === '"') {
                        quotes += 1;
                    } else if (start !== null && c === " " && !quotes) {
                        end = i;
                    }
                }
                if (start !== null && end === null) {
                    end = result.length;
                }
                // Basically this but can handle quotes:
                // result.replace(/&(\S+)?/g, (_, pseudo = '') => a + pseudo + b)
                return result.slice(0, start) + a + result.slice(start + 1, end) + b + result.slice(end);
            }, {
                values: Object.fromEntries(pseudoVariants),
                [_setupContextUtils.INTERNAL_FEATURES]: {
                    respectPrefix: false
                }
            });
        }
    },
    directionVariants: ({ addVariant })=>{
        addVariant("ltr", '&:where([dir="ltr"], [dir="ltr"] *)');
        addVariant("rtl", '&:where([dir="rtl"], [dir="rtl"] *)');
    },
    reducedMotionVariants: ({ addVariant })=>{
        addVariant("motion-safe", "@media (prefers-reduced-motion: no-preference)");
        addVariant("motion-reduce", "@media (prefers-reduced-motion: reduce)");
    },
    darkVariants: ({ config, addVariant })=>{
        let [mode, selector = ".dark"] = [].concat(config("darkMode", "media"));
        if (mode === false) {
            mode = "media";
            _log.default.warn("darkmode-false", [
                "The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.",
                "Change `darkMode` to `media` or remove it entirely.",
                "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration"
            ]);
        }
        if (mode === "variant") {
            let formats;
            if (Array.isArray(selector)) {
                formats = selector;
            } else if (typeof selector === "function") {
                formats = selector;
            } else if (typeof selector === "string") {
                formats = [
                    selector
                ];
            }
            // TODO: We could also add these warnings if the user passes a function that returns string | string[]
            // But this is an advanced enough use case that it's probably not necessary
            if (Array.isArray(formats)) {
                for (let format of formats){
                    if (format === ".dark") {
                        mode = false;
                        _log.default.warn("darkmode-variant-without-selector", [
                            "When using `variant` for `darkMode`, you must provide a selector.",
                            'Example: `darkMode: ["variant", ".your-selector &"]`'
                        ]);
                    } else if (!format.includes("&")) {
                        mode = false;
                        _log.default.warn("darkmode-variant-without-ampersand", [
                            "When using `variant` for `darkMode`, your selector must contain `&`.",
                            'Example `darkMode: ["variant", ".your-selector &"]`'
                        ]);
                    }
                }
            }
            selector = formats;
        }
        if (mode === "selector") {
            // New preferred behavior
            addVariant("dark", `&:where(${selector}, ${selector} *)`);
        } else if (mode === "media") {
            addVariant("dark", "@media (prefers-color-scheme: dark)");
        } else if (mode === "variant") {
            addVariant("dark", selector);
        } else if (mode === "class") {
            // Old behavior
            addVariant("dark", `&:is(${selector} *)`);
        }
    },
    printVariant: ({ addVariant })=>{
        addVariant("print", "@media print");
    },
    screenVariants: ({ theme, addVariant, matchVariant })=>{
        var _theme;
        let rawScreens = (_theme = theme("screens")) !== null && _theme !== void 0 ? _theme : {};
        let areSimpleScreens = Object.values(rawScreens).every((v)=>typeof v === "string");
        let screens = (0, _normalizeScreens.normalizeScreens)(theme("screens"));
        /** @type {Set<string>} */ let unitCache = new Set([]);
        /** @param {string} value */ function units(value) {
            var _value_match;
            var _value_match_;
            return (_value_match_ = (_value_match = value.match(/(\D+)$/)) === null || _value_match === void 0 ? void 0 : _value_match[1]) !== null && _value_match_ !== void 0 ? _value_match_ : "(none)";
        }
        /** @param {string} value */ function recordUnits(value) {
            if (value !== undefined) {
                unitCache.add(units(value));
            }
        }
        /** @param {string} value */ function canUseUnits(value) {
            recordUnits(value);
            // If the cache was empty it'll become 1 because we've just added the current unit
            // If the cache was not empty and the units are the same the size doesn't change
            // Otherwise, if the units are different from what is already known the size will always be > 1
            return unitCache.size === 1;
        }
        for (const screen of screens){
            for (const value of screen.values){
                recordUnits(value.min);
                recordUnits(value.max);
            }
        }
        let screensUseConsistentUnits = unitCache.size <= 1;
        /**
     * @typedef {import('./util/normalizeScreens').Screen} Screen
     */ /**
     * @param {'min' | 'max'} type
     * @returns {Record<string, Screen>}
     */ function buildScreenValues(type) {
            return Object.fromEntries(screens.filter((screen)=>(0, _normalizeScreens.isScreenSortable)(screen).result).map((screen)=>{
                let { min, max } = screen.values[0];
                if (type === "min" && min !== undefined) {
                    return screen;
                } else if (type === "min" && max !== undefined) {
                    return {
                        ...screen,
                        not: !screen.not
                    };
                } else if (type === "max" && max !== undefined) {
                    return screen;
                } else if (type === "max" && min !== undefined) {
                    return {
                        ...screen,
                        not: !screen.not
                    };
                }
            }).map((screen)=>[
                    screen.name,
                    screen
                ]));
        }
        /**
     * @param {'min' | 'max'} type
     * @returns {(a: { value: string | Screen }, z: { value: string | Screen }) => number}
     */ function buildSort(type) {
            return (a, z)=>(0, _normalizeScreens.compareScreens)(type, a.value, z.value);
        }
        let maxSort = buildSort("max");
        let minSort = buildSort("min");
        /** @param {'min'|'max'} type */ function buildScreenVariant(type) {
            return (value)=>{
                if (!areSimpleScreens) {
                    _log.default.warn("complex-screen-config", [
                        "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."
                    ]);
                    return [];
                } else if (!screensUseConsistentUnits) {
                    _log.default.warn("mixed-screen-units", [
                        "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
                    ]);
                    return [];
                } else if (typeof value === "string" && !canUseUnits(value)) {
                    _log.default.warn("minmax-have-mixed-units", [
                        "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
                    ]);
                    return [];
                }
                return [
                    `@media ${(0, _buildMediaQuery.default)((0, _normalizeScreens.toScreen)(value, type))}`
                ];
            };
        }
        matchVariant("max", buildScreenVariant("max"), {
            sort: maxSort,
            values: areSimpleScreens ? buildScreenValues("max") : {}
        });
        // screens and min-* are sorted together when they can be
        let id = "min-screens";
        for (let screen of screens){
            addVariant(screen.name, `@media ${(0, _buildMediaQuery.default)(screen)}`, {
                id,
                sort: areSimpleScreens && screensUseConsistentUnits ? minSort : undefined,
                value: screen
            });
        }
        matchVariant("min", buildScreenVariant("min"), {
            id,
            sort: minSort
        });
    },
    supportsVariants: ({ matchVariant, theme })=>{
        var _theme;
        matchVariant("supports", (value = "")=>{
            let check = value.startsWith("--") ? value : (0, _dataTypes.normalize)(value);
            let isRaw = /^[\w-]*\s*\(/.test(check);
            // Chrome has a bug where `(condition1)or(condition2)` is not valid
            // But `(condition1) or (condition2)` is supported.
            check = isRaw ? check.replace(/\b(and|or|not)\b/g, " $1 ") : check;
            if (isRaw) {
                return `@supports ${check}`;
            }
            if (!check.includes(":")) {
                check = `${check}: var(--tw)`;
            }
            if (!(check.startsWith("(") && check.endsWith(")"))) {
                check = `(${check})`;
            }
            return `@supports ${check}`;
        }, {
            values: (_theme = theme("supports")) !== null && _theme !== void 0 ? _theme : {}
        });
    },
    hasVariants: ({ matchVariant, prefix })=>{
        matchVariant("has", (value)=>`&:has(${(0, _dataTypes.normalize)(value)})`, {
            values: {},
            [_setupContextUtils.INTERNAL_FEATURES]: {
                respectPrefix: false
            }
        });
        matchVariant("group-has", (value, { modifier })=>modifier ? `:merge(${prefix(".group")}\\/${modifier}):has(${(0, _dataTypes.normalize)(value)}) &` : `:merge(${prefix(".group")}):has(${(0, _dataTypes.normalize)(value)}) &`, {
            values: {},
            [_setupContextUtils.INTERNAL_FEATURES]: {
                respectPrefix: false
            }
        });
        matchVariant("peer-has", (value, { modifier })=>modifier ? `:merge(${prefix(".peer")}\\/${modifier}):has(${(0, _dataTypes.normalize)(value)}) ~ &` : `:merge(${prefix(".peer")}):has(${(0, _dataTypes.normalize)(value)}) ~ &`, {
            values: {},
            [_setupContextUtils.INTERNAL_FEATURES]: {
                respectPrefix: false
            }
        });
    },
    ariaVariants: ({ matchVariant, theme })=>{
        var _theme;
        matchVariant("aria", (value)=>`&[aria-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}]`, {
            values: (_theme = theme("aria")) !== null && _theme !== void 0 ? _theme : {}
        });
        var _theme1;
        matchVariant("group-aria", (value, { modifier })=>modifier ? `:merge(.group\\/${modifier})[aria-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] &` : `:merge(.group)[aria-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] &`, {
            values: (_theme1 = theme("aria")) !== null && _theme1 !== void 0 ? _theme1 : {}
        });
        var _theme2;
        matchVariant("peer-aria", (value, { modifier })=>modifier ? `:merge(.peer\\/${modifier})[aria-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] ~ &` : `:merge(.peer)[aria-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] ~ &`, {
            values: (_theme2 = theme("aria")) !== null && _theme2 !== void 0 ? _theme2 : {}
        });
    },
    dataVariants: ({ matchVariant, theme })=>{
        var _theme;
        matchVariant("data", (value)=>`&[data-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}]`, {
            values: (_theme = theme("data")) !== null && _theme !== void 0 ? _theme : {}
        });
        var _theme1;
        matchVariant("group-data", (value, { modifier })=>modifier ? `:merge(.group\\/${modifier})[data-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] &` : `:merge(.group)[data-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] &`, {
            values: (_theme1 = theme("data")) !== null && _theme1 !== void 0 ? _theme1 : {}
        });
        var _theme2;
        matchVariant("peer-data", (value, { modifier })=>modifier ? `:merge(.peer\\/${modifier})[data-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] ~ &` : `:merge(.peer)[data-${(0, _dataTypes.normalizeAttributeSelectors)((0, _dataTypes.normalize)(value))}] ~ &`, {
            values: (_theme2 = theme("data")) !== null && _theme2 !== void 0 ? _theme2 : {}
        });
    },
    orientationVariants: ({ addVariant })=>{
        addVariant("portrait", "@media (orientation: portrait)");
        addVariant("landscape", "@media (orientation: landscape)");
    },
    prefersContrastVariants: ({ addVariant })=>{
        addVariant("contrast-more", "@media (prefers-contrast: more)");
        addVariant("contrast-less", "@media (prefers-contrast: less)");
    },
    forcedColorsVariants: ({ addVariant })=>{
        addVariant("forced-colors", "@media (forced-colors: active)");
    }
};
let cssTransformValue = [
    "translate(var(--tw-translate-x), var(--tw-translate-y))",
    "rotate(var(--tw-rotate))",
    "skewX(var(--tw-skew-x))",
    "skewY(var(--tw-skew-y))",
    "scaleX(var(--tw-scale-x))",
    "scaleY(var(--tw-scale-y))"
].join(" ");
let cssFilterValue = [
    "var(--tw-blur)",
    "var(--tw-brightness)",
    "var(--tw-contrast)",
    "var(--tw-grayscale)",
    "var(--tw-hue-rotate)",
    "var(--tw-invert)",
    "var(--tw-saturate)",
    "var(--tw-sepia)",
    "var(--tw-drop-shadow)"
].join(" ");
let cssBackdropFilterValue = [
    "var(--tw-backdrop-blur)",
    "var(--tw-backdrop-brightness)",
    "var(--tw-backdrop-contrast)",
    "var(--tw-backdrop-grayscale)",
    "var(--tw-backdrop-hue-rotate)",
    "var(--tw-backdrop-invert)",
    "var(--tw-backdrop-opacity)",
    "var(--tw-backdrop-saturate)",
    "var(--tw-backdrop-sepia)"
].join(" ");
let corePlugins = {
    preflight: ({ addBase })=>{
        let preflightStyles = _postcss.default.parse(_fs.default.readFileSync(_path.join(("TURBOPACK compile-time value", "/ROOT/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib"), "./css/preflight.css"), "utf8"));
        addBase([
            _postcss.default.comment({
                text: `! tailwindcss v${_packagejson.version} | MIT License | https://tailwindcss.com`
            }),
            ...preflightStyles.nodes
        ]);
    },
    container: (()=>{
        function extractMinWidths(breakpoints = []) {
            return breakpoints.flatMap((breakpoint)=>breakpoint.values.map((breakpoint)=>breakpoint.min)).filter((v)=>v !== undefined);
        }
        function mapMinWidthsToPadding(minWidths, screens, paddings) {
            if (typeof paddings === "undefined") {
                return [];
            }
            if (!(typeof paddings === "object" && paddings !== null)) {
                return [
                    {
                        screen: "DEFAULT",
                        minWidth: 0,
                        padding: paddings
                    }
                ];
            }
            let mapping = [];
            if (paddings.DEFAULT) {
                mapping.push({
                    screen: "DEFAULT",
                    minWidth: 0,
                    padding: paddings.DEFAULT
                });
            }
            for (let minWidth of minWidths){
                for (let screen of screens){
                    for (let { min } of screen.values){
                        if (min === minWidth) {
                            mapping.push({
                                minWidth,
                                padding: paddings[screen.name]
                            });
                        }
                    }
                }
            }
            return mapping;
        }
        return function({ addComponents, theme }) {
            let screens = (0, _normalizeScreens.normalizeScreens)(theme("container.screens", theme("screens")));
            let minWidths = extractMinWidths(screens);
            let paddings = mapMinWidthsToPadding(minWidths, screens, theme("container.padding"));
            let generatePaddingFor = (minWidth)=>{
                let paddingConfig = paddings.find((padding)=>padding.minWidth === minWidth);
                if (!paddingConfig) {
                    return {};
                }
                return {
                    paddingRight: paddingConfig.padding,
                    paddingLeft: paddingConfig.padding
                };
            };
            let atRules = Array.from(new Set(minWidths.slice().sort((a, z)=>parseInt(a) - parseInt(z)))).map((minWidth)=>({
                    [`@media (min-width: ${minWidth})`]: {
                        ".container": {
                            "max-width": minWidth,
                            ...generatePaddingFor(minWidth)
                        }
                    }
                }));
            addComponents([
                {
                    ".container": Object.assign({
                        width: "100%"
                    }, theme("container.center", false) ? {
                        marginRight: "auto",
                        marginLeft: "auto"
                    } : {}, generatePaddingFor(0))
                },
                ...atRules
            ]);
        };
    })(),
    accessibility: ({ addUtilities })=>{
        addUtilities({
            ".sr-only": {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            },
            ".not-sr-only": {
                position: "static",
                width: "auto",
                height: "auto",
                padding: "0",
                margin: "0",
                overflow: "visible",
                clip: "auto",
                whiteSpace: "normal"
            }
        });
    },
    pointerEvents: ({ addUtilities })=>{
        addUtilities({
            ".pointer-events-none": {
                "pointer-events": "none"
            },
            ".pointer-events-auto": {
                "pointer-events": "auto"
            }
        });
    },
    visibility: ({ addUtilities })=>{
        addUtilities({
            ".visible": {
                visibility: "visible"
            },
            ".invisible": {
                visibility: "hidden"
            },
            ".collapse": {
                visibility: "collapse"
            }
        });
    },
    position: ({ addUtilities })=>{
        addUtilities({
            ".static": {
                position: "static"
            },
            ".fixed": {
                position: "fixed"
            },
            ".absolute": {
                position: "absolute"
            },
            ".relative": {
                position: "relative"
            },
            ".sticky": {
                position: "sticky"
            }
        });
    },
    inset: (0, _createUtilityPlugin.default)("inset", [
        [
            "inset",
            [
                "inset"
            ]
        ],
        [
            [
                "inset-x",
                [
                    "left",
                    "right"
                ]
            ],
            [
                "inset-y",
                [
                    "top",
                    "bottom"
                ]
            ]
        ],
        [
            [
                "start",
                [
                    "inset-inline-start"
                ]
            ],
            [
                "end",
                [
                    "inset-inline-end"
                ]
            ],
            [
                "top",
                [
                    "top"
                ]
            ],
            [
                "right",
                [
                    "right"
                ]
            ],
            [
                "bottom",
                [
                    "bottom"
                ]
            ],
            [
                "left",
                [
                    "left"
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    isolation: ({ addUtilities })=>{
        addUtilities({
            ".isolate": {
                isolation: "isolate"
            },
            ".isolation-auto": {
                isolation: "auto"
            }
        });
    },
    zIndex: (0, _createUtilityPlugin.default)("zIndex", [
        [
            "z",
            [
                "zIndex"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    order: (0, _createUtilityPlugin.default)("order", undefined, {
        supportsNegativeValues: true
    }),
    gridColumn: (0, _createUtilityPlugin.default)("gridColumn", [
        [
            "col",
            [
                "gridColumn"
            ]
        ]
    ]),
    gridColumnStart: (0, _createUtilityPlugin.default)("gridColumnStart", [
        [
            "col-start",
            [
                "gridColumnStart"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    gridColumnEnd: (0, _createUtilityPlugin.default)("gridColumnEnd", [
        [
            "col-end",
            [
                "gridColumnEnd"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    gridRow: (0, _createUtilityPlugin.default)("gridRow", [
        [
            "row",
            [
                "gridRow"
            ]
        ]
    ]),
    gridRowStart: (0, _createUtilityPlugin.default)("gridRowStart", [
        [
            "row-start",
            [
                "gridRowStart"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    gridRowEnd: (0, _createUtilityPlugin.default)("gridRowEnd", [
        [
            "row-end",
            [
                "gridRowEnd"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    float: ({ addUtilities })=>{
        addUtilities({
            ".float-start": {
                float: "inline-start"
            },
            ".float-end": {
                float: "inline-end"
            },
            ".float-right": {
                float: "right"
            },
            ".float-left": {
                float: "left"
            },
            ".float-none": {
                float: "none"
            }
        });
    },
    clear: ({ addUtilities })=>{
        addUtilities({
            ".clear-start": {
                clear: "inline-start"
            },
            ".clear-end": {
                clear: "inline-end"
            },
            ".clear-left": {
                clear: "left"
            },
            ".clear-right": {
                clear: "right"
            },
            ".clear-both": {
                clear: "both"
            },
            ".clear-none": {
                clear: "none"
            }
        });
    },
    margin: (0, _createUtilityPlugin.default)("margin", [
        [
            "m",
            [
                "margin"
            ]
        ],
        [
            [
                "mx",
                [
                    "margin-left",
                    "margin-right"
                ]
            ],
            [
                "my",
                [
                    "margin-top",
                    "margin-bottom"
                ]
            ]
        ],
        [
            [
                "ms",
                [
                    "margin-inline-start"
                ]
            ],
            [
                "me",
                [
                    "margin-inline-end"
                ]
            ],
            [
                "mt",
                [
                    "margin-top"
                ]
            ],
            [
                "mr",
                [
                    "margin-right"
                ]
            ],
            [
                "mb",
                [
                    "margin-bottom"
                ]
            ],
            [
                "ml",
                [
                    "margin-left"
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    boxSizing: ({ addUtilities })=>{
        addUtilities({
            ".box-border": {
                "box-sizing": "border-box"
            },
            ".box-content": {
                "box-sizing": "content-box"
            }
        });
    },
    lineClamp: ({ matchUtilities, addUtilities, theme })=>{
        matchUtilities({
            "line-clamp": (value)=>({
                    overflow: "hidden",
                    display: "-webkit-box",
                    "-webkit-box-orient": "vertical",
                    "-webkit-line-clamp": `${value}`
                })
        }, {
            values: theme("lineClamp")
        });
        addUtilities({
            ".line-clamp-none": {
                overflow: "visible",
                display: "block",
                "-webkit-box-orient": "horizontal",
                "-webkit-line-clamp": "none"
            }
        });
    },
    display: ({ addUtilities })=>{
        addUtilities({
            ".block": {
                display: "block"
            },
            ".inline-block": {
                display: "inline-block"
            },
            ".inline": {
                display: "inline"
            },
            ".flex": {
                display: "flex"
            },
            ".inline-flex": {
                display: "inline-flex"
            },
            ".table": {
                display: "table"
            },
            ".inline-table": {
                display: "inline-table"
            },
            ".table-caption": {
                display: "table-caption"
            },
            ".table-cell": {
                display: "table-cell"
            },
            ".table-column": {
                display: "table-column"
            },
            ".table-column-group": {
                display: "table-column-group"
            },
            ".table-footer-group": {
                display: "table-footer-group"
            },
            ".table-header-group": {
                display: "table-header-group"
            },
            ".table-row-group": {
                display: "table-row-group"
            },
            ".table-row": {
                display: "table-row"
            },
            ".flow-root": {
                display: "flow-root"
            },
            ".grid": {
                display: "grid"
            },
            ".inline-grid": {
                display: "inline-grid"
            },
            ".contents": {
                display: "contents"
            },
            ".list-item": {
                display: "list-item"
            },
            ".hidden": {
                display: "none"
            }
        });
    },
    aspectRatio: (0, _createUtilityPlugin.default)("aspectRatio", [
        [
            "aspect",
            [
                "aspect-ratio"
            ]
        ]
    ]),
    size: (0, _createUtilityPlugin.default)("size", [
        [
            "size",
            [
                "width",
                "height"
            ]
        ]
    ]),
    height: (0, _createUtilityPlugin.default)("height", [
        [
            "h",
            [
                "height"
            ]
        ]
    ]),
    maxHeight: (0, _createUtilityPlugin.default)("maxHeight", [
        [
            "max-h",
            [
                "maxHeight"
            ]
        ]
    ]),
    minHeight: (0, _createUtilityPlugin.default)("minHeight", [
        [
            "min-h",
            [
                "minHeight"
            ]
        ]
    ]),
    width: (0, _createUtilityPlugin.default)("width", [
        [
            "w",
            [
                "width"
            ]
        ]
    ]),
    minWidth: (0, _createUtilityPlugin.default)("minWidth", [
        [
            "min-w",
            [
                "minWidth"
            ]
        ]
    ]),
    maxWidth: (0, _createUtilityPlugin.default)("maxWidth", [
        [
            "max-w",
            [
                "maxWidth"
            ]
        ]
    ]),
    flex: (0, _createUtilityPlugin.default)("flex"),
    flexShrink: (0, _createUtilityPlugin.default)("flexShrink", [
        [
            "flex-shrink",
            [
                "flex-shrink"
            ]
        ],
        [
            "shrink",
            [
                "flex-shrink"
            ]
        ]
    ]),
    flexGrow: (0, _createUtilityPlugin.default)("flexGrow", [
        [
            "flex-grow",
            [
                "flex-grow"
            ]
        ],
        [
            "grow",
            [
                "flex-grow"
            ]
        ]
    ]),
    flexBasis: (0, _createUtilityPlugin.default)("flexBasis", [
        [
            "basis",
            [
                "flex-basis"
            ]
        ]
    ]),
    tableLayout: ({ addUtilities })=>{
        addUtilities({
            ".table-auto": {
                "table-layout": "auto"
            },
            ".table-fixed": {
                "table-layout": "fixed"
            }
        });
    },
    captionSide: ({ addUtilities })=>{
        addUtilities({
            ".caption-top": {
                "caption-side": "top"
            },
            ".caption-bottom": {
                "caption-side": "bottom"
            }
        });
    },
    borderCollapse: ({ addUtilities })=>{
        addUtilities({
            ".border-collapse": {
                "border-collapse": "collapse"
            },
            ".border-separate": {
                "border-collapse": "separate"
            }
        });
    },
    borderSpacing: ({ addDefaults, matchUtilities, theme })=>{
        addDefaults("border-spacing", {
            "--tw-border-spacing-x": 0,
            "--tw-border-spacing-y": 0
        });
        matchUtilities({
            "border-spacing": (value)=>{
                return {
                    "--tw-border-spacing-x": value,
                    "--tw-border-spacing-y": value,
                    "@defaults border-spacing": {},
                    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                };
            },
            "border-spacing-x": (value)=>{
                return {
                    "--tw-border-spacing-x": value,
                    "@defaults border-spacing": {},
                    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                };
            },
            "border-spacing-y": (value)=>{
                return {
                    "--tw-border-spacing-y": value,
                    "@defaults border-spacing": {},
                    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                };
            }
        }, {
            values: theme("borderSpacing")
        });
    },
    transformOrigin: (0, _createUtilityPlugin.default)("transformOrigin", [
        [
            "origin",
            [
                "transformOrigin"
            ]
        ]
    ]),
    translate: (0, _createUtilityPlugin.default)("translate", [
        [
            [
                "translate-x",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-translate-x",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ],
            [
                "translate-y",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-translate-y",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    rotate: (0, _createUtilityPlugin.default)("rotate", [
        [
            "rotate",
            [
                [
                    "@defaults transform",
                    {}
                ],
                "--tw-rotate",
                [
                    "transform",
                    cssTransformValue
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    skew: (0, _createUtilityPlugin.default)("skew", [
        [
            [
                "skew-x",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-skew-x",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ],
            [
                "skew-y",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-skew-y",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    scale: (0, _createUtilityPlugin.default)("scale", [
        [
            "scale",
            [
                [
                    "@defaults transform",
                    {}
                ],
                "--tw-scale-x",
                "--tw-scale-y",
                [
                    "transform",
                    cssTransformValue
                ]
            ]
        ],
        [
            [
                "scale-x",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-scale-x",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ],
            [
                "scale-y",
                [
                    [
                        "@defaults transform",
                        {}
                    ],
                    "--tw-scale-y",
                    [
                        "transform",
                        cssTransformValue
                    ]
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    transform: ({ addDefaults, addUtilities })=>{
        addDefaults("transform", {
            "--tw-translate-x": "0",
            "--tw-translate-y": "0",
            "--tw-rotate": "0",
            "--tw-skew-x": "0",
            "--tw-skew-y": "0",
            "--tw-scale-x": "1",
            "--tw-scale-y": "1"
        });
        addUtilities({
            ".transform": {
                "@defaults transform": {},
                transform: cssTransformValue
            },
            ".transform-cpu": {
                transform: cssTransformValue
            },
            ".transform-gpu": {
                transform: cssTransformValue.replace("translate(var(--tw-translate-x), var(--tw-translate-y))", "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)")
            },
            ".transform-none": {
                transform: "none"
            }
        });
    },
    animation: ({ matchUtilities, theme, config })=>{
        let prefixName = (name)=>(0, _escapeClassName.default)(config("prefix") + name);
        var _theme;
        let keyframes = Object.fromEntries(Object.entries((_theme = theme("keyframes")) !== null && _theme !== void 0 ? _theme : {}).map(([key, value])=>{
            return [
                key,
                {
                    [`@keyframes ${prefixName(key)}`]: value
                }
            ];
        }));
        matchUtilities({
            animate: (value)=>{
                let animations = (0, _parseAnimationValue.default)(value);
                return [
                    ...animations.flatMap((animation)=>keyframes[animation.name]),
                    {
                        animation: animations.map(({ name, value })=>{
                            if (name === undefined || keyframes[name] === undefined) {
                                return value;
                            }
                            return value.replace(name, prefixName(name));
                        }).join(", ")
                    }
                ];
            }
        }, {
            values: theme("animation")
        });
    },
    cursor: (0, _createUtilityPlugin.default)("cursor"),
    touchAction: ({ addDefaults, addUtilities })=>{
        addDefaults("touch-action", {
            "--tw-pan-x": " ",
            "--tw-pan-y": " ",
            "--tw-pinch-zoom": " "
        });
        let cssTouchActionValue = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
        addUtilities({
            ".touch-auto": {
                "touch-action": "auto"
            },
            ".touch-none": {
                "touch-action": "none"
            },
            ".touch-pan-x": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-x",
                "touch-action": cssTouchActionValue
            },
            ".touch-pan-left": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-left",
                "touch-action": cssTouchActionValue
            },
            ".touch-pan-right": {
                "@defaults touch-action": {},
                "--tw-pan-x": "pan-right",
                "touch-action": cssTouchActionValue
            },
            ".touch-pan-y": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-y",
                "touch-action": cssTouchActionValue
            },
            ".touch-pan-up": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-up",
                "touch-action": cssTouchActionValue
            },
            ".touch-pan-down": {
                "@defaults touch-action": {},
                "--tw-pan-y": "pan-down",
                "touch-action": cssTouchActionValue
            },
            ".touch-pinch-zoom": {
                "@defaults touch-action": {},
                "--tw-pinch-zoom": "pinch-zoom",
                "touch-action": cssTouchActionValue
            },
            ".touch-manipulation": {
                "touch-action": "manipulation"
            }
        });
    },
    userSelect: ({ addUtilities })=>{
        addUtilities({
            ".select-none": {
                "user-select": "none"
            },
            ".select-text": {
                "user-select": "text"
            },
            ".select-all": {
                "user-select": "all"
            },
            ".select-auto": {
                "user-select": "auto"
            }
        });
    },
    resize: ({ addUtilities })=>{
        addUtilities({
            ".resize-none": {
                resize: "none"
            },
            ".resize-y": {
                resize: "vertical"
            },
            ".resize-x": {
                resize: "horizontal"
            },
            ".resize": {
                resize: "both"
            }
        });
    },
    scrollSnapType: ({ addDefaults, addUtilities })=>{
        addDefaults("scroll-snap-type", {
            "--tw-scroll-snap-strictness": "proximity"
        });
        addUtilities({
            ".snap-none": {
                "scroll-snap-type": "none"
            },
            ".snap-x": {
                "@defaults scroll-snap-type": {},
                "scroll-snap-type": "x var(--tw-scroll-snap-strictness)"
            },
            ".snap-y": {
                "@defaults scroll-snap-type": {},
                "scroll-snap-type": "y var(--tw-scroll-snap-strictness)"
            },
            ".snap-both": {
                "@defaults scroll-snap-type": {},
                "scroll-snap-type": "both var(--tw-scroll-snap-strictness)"
            },
            ".snap-mandatory": {
                "--tw-scroll-snap-strictness": "mandatory"
            },
            ".snap-proximity": {
                "--tw-scroll-snap-strictness": "proximity"
            }
        });
    },
    scrollSnapAlign: ({ addUtilities })=>{
        addUtilities({
            ".snap-start": {
                "scroll-snap-align": "start"
            },
            ".snap-end": {
                "scroll-snap-align": "end"
            },
            ".snap-center": {
                "scroll-snap-align": "center"
            },
            ".snap-align-none": {
                "scroll-snap-align": "none"
            }
        });
    },
    scrollSnapStop: ({ addUtilities })=>{
        addUtilities({
            ".snap-normal": {
                "scroll-snap-stop": "normal"
            },
            ".snap-always": {
                "scroll-snap-stop": "always"
            }
        });
    },
    scrollMargin: (0, _createUtilityPlugin.default)("scrollMargin", [
        [
            "scroll-m",
            [
                "scroll-margin"
            ]
        ],
        [
            [
                "scroll-mx",
                [
                    "scroll-margin-left",
                    "scroll-margin-right"
                ]
            ],
            [
                "scroll-my",
                [
                    "scroll-margin-top",
                    "scroll-margin-bottom"
                ]
            ]
        ],
        [
            [
                "scroll-ms",
                [
                    "scroll-margin-inline-start"
                ]
            ],
            [
                "scroll-me",
                [
                    "scroll-margin-inline-end"
                ]
            ],
            [
                "scroll-mt",
                [
                    "scroll-margin-top"
                ]
            ],
            [
                "scroll-mr",
                [
                    "scroll-margin-right"
                ]
            ],
            [
                "scroll-mb",
                [
                    "scroll-margin-bottom"
                ]
            ],
            [
                "scroll-ml",
                [
                    "scroll-margin-left"
                ]
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    scrollPadding: (0, _createUtilityPlugin.default)("scrollPadding", [
        [
            "scroll-p",
            [
                "scroll-padding"
            ]
        ],
        [
            [
                "scroll-px",
                [
                    "scroll-padding-left",
                    "scroll-padding-right"
                ]
            ],
            [
                "scroll-py",
                [
                    "scroll-padding-top",
                    "scroll-padding-bottom"
                ]
            ]
        ],
        [
            [
                "scroll-ps",
                [
                    "scroll-padding-inline-start"
                ]
            ],
            [
                "scroll-pe",
                [
                    "scroll-padding-inline-end"
                ]
            ],
            [
                "scroll-pt",
                [
                    "scroll-padding-top"
                ]
            ],
            [
                "scroll-pr",
                [
                    "scroll-padding-right"
                ]
            ],
            [
                "scroll-pb",
                [
                    "scroll-padding-bottom"
                ]
            ],
            [
                "scroll-pl",
                [
                    "scroll-padding-left"
                ]
            ]
        ]
    ]),
    listStylePosition: ({ addUtilities })=>{
        addUtilities({
            ".list-inside": {
                "list-style-position": "inside"
            },
            ".list-outside": {
                "list-style-position": "outside"
            }
        });
    },
    listStyleType: (0, _createUtilityPlugin.default)("listStyleType", [
        [
            "list",
            [
                "listStyleType"
            ]
        ]
    ]),
    listStyleImage: (0, _createUtilityPlugin.default)("listStyleImage", [
        [
            "list-image",
            [
                "listStyleImage"
            ]
        ]
    ]),
    appearance: ({ addUtilities })=>{
        addUtilities({
            ".appearance-none": {
                appearance: "none"
            },
            ".appearance-auto": {
                appearance: "auto"
            }
        });
    },
    columns: (0, _createUtilityPlugin.default)("columns", [
        [
            "columns",
            [
                "columns"
            ]
        ]
    ]),
    breakBefore: ({ addUtilities })=>{
        addUtilities({
            ".break-before-auto": {
                "break-before": "auto"
            },
            ".break-before-avoid": {
                "break-before": "avoid"
            },
            ".break-before-all": {
                "break-before": "all"
            },
            ".break-before-avoid-page": {
                "break-before": "avoid-page"
            },
            ".break-before-page": {
                "break-before": "page"
            },
            ".break-before-left": {
                "break-before": "left"
            },
            ".break-before-right": {
                "break-before": "right"
            },
            ".break-before-column": {
                "break-before": "column"
            }
        });
    },
    breakInside: ({ addUtilities })=>{
        addUtilities({
            ".break-inside-auto": {
                "break-inside": "auto"
            },
            ".break-inside-avoid": {
                "break-inside": "avoid"
            },
            ".break-inside-avoid-page": {
                "break-inside": "avoid-page"
            },
            ".break-inside-avoid-column": {
                "break-inside": "avoid-column"
            }
        });
    },
    breakAfter: ({ addUtilities })=>{
        addUtilities({
            ".break-after-auto": {
                "break-after": "auto"
            },
            ".break-after-avoid": {
                "break-after": "avoid"
            },
            ".break-after-all": {
                "break-after": "all"
            },
            ".break-after-avoid-page": {
                "break-after": "avoid-page"
            },
            ".break-after-page": {
                "break-after": "page"
            },
            ".break-after-left": {
                "break-after": "left"
            },
            ".break-after-right": {
                "break-after": "right"
            },
            ".break-after-column": {
                "break-after": "column"
            }
        });
    },
    gridAutoColumns: (0, _createUtilityPlugin.default)("gridAutoColumns", [
        [
            "auto-cols",
            [
                "gridAutoColumns"
            ]
        ]
    ]),
    gridAutoFlow: ({ addUtilities })=>{
        addUtilities({
            ".grid-flow-row": {
                gridAutoFlow: "row"
            },
            ".grid-flow-col": {
                gridAutoFlow: "column"
            },
            ".grid-flow-dense": {
                gridAutoFlow: "dense"
            },
            ".grid-flow-row-dense": {
                gridAutoFlow: "row dense"
            },
            ".grid-flow-col-dense": {
                gridAutoFlow: "column dense"
            }
        });
    },
    gridAutoRows: (0, _createUtilityPlugin.default)("gridAutoRows", [
        [
            "auto-rows",
            [
                "gridAutoRows"
            ]
        ]
    ]),
    gridTemplateColumns: (0, _createUtilityPlugin.default)("gridTemplateColumns", [
        [
            "grid-cols",
            [
                "gridTemplateColumns"
            ]
        ]
    ]),
    gridTemplateRows: (0, _createUtilityPlugin.default)("gridTemplateRows", [
        [
            "grid-rows",
            [
                "gridTemplateRows"
            ]
        ]
    ]),
    flexDirection: ({ addUtilities })=>{
        addUtilities({
            ".flex-row": {
                "flex-direction": "row"
            },
            ".flex-row-reverse": {
                "flex-direction": "row-reverse"
            },
            ".flex-col": {
                "flex-direction": "column"
            },
            ".flex-col-reverse": {
                "flex-direction": "column-reverse"
            }
        });
    },
    flexWrap: ({ addUtilities })=>{
        addUtilities({
            ".flex-wrap": {
                "flex-wrap": "wrap"
            },
            ".flex-wrap-reverse": {
                "flex-wrap": "wrap-reverse"
            },
            ".flex-nowrap": {
                "flex-wrap": "nowrap"
            }
        });
    },
    placeContent: ({ addUtilities })=>{
        addUtilities({
            ".place-content-center": {
                "place-content": "center"
            },
            ".place-content-start": {
                "place-content": "start"
            },
            ".place-content-end": {
                "place-content": "end"
            },
            ".place-content-between": {
                "place-content": "space-between"
            },
            ".place-content-around": {
                "place-content": "space-around"
            },
            ".place-content-evenly": {
                "place-content": "space-evenly"
            },
            ".place-content-baseline": {
                "place-content": "baseline"
            },
            ".place-content-stretch": {
                "place-content": "stretch"
            }
        });
    },
    placeItems: ({ addUtilities })=>{
        addUtilities({
            ".place-items-start": {
                "place-items": "start"
            },
            ".place-items-end": {
                "place-items": "end"
            },
            ".place-items-center": {
                "place-items": "center"
            },
            ".place-items-baseline": {
                "place-items": "baseline"
            },
            ".place-items-stretch": {
                "place-items": "stretch"
            }
        });
    },
    alignContent: ({ addUtilities })=>{
        addUtilities({
            ".content-normal": {
                "align-content": "normal"
            },
            ".content-center": {
                "align-content": "center"
            },
            ".content-start": {
                "align-content": "flex-start"
            },
            ".content-end": {
                "align-content": "flex-end"
            },
            ".content-between": {
                "align-content": "space-between"
            },
            ".content-around": {
                "align-content": "space-around"
            },
            ".content-evenly": {
                "align-content": "space-evenly"
            },
            ".content-baseline": {
                "align-content": "baseline"
            },
            ".content-stretch": {
                "align-content": "stretch"
            }
        });
    },
    alignItems: ({ addUtilities })=>{
        addUtilities({
            ".items-start": {
                "align-items": "flex-start"
            },
            ".items-end": {
                "align-items": "flex-end"
            },
            ".items-center": {
                "align-items": "center"
            },
            ".items-baseline": {
                "align-items": "baseline"
            },
            ".items-stretch": {
                "align-items": "stretch"
            }
        });
    },
    justifyContent: ({ addUtilities })=>{
        addUtilities({
            ".justify-normal": {
                "justify-content": "normal"
            },
            ".justify-start": {
                "justify-content": "flex-start"
            },
            ".justify-end": {
                "justify-content": "flex-end"
            },
            ".justify-center": {
                "justify-content": "center"
            },
            ".justify-between": {
                "justify-content": "space-between"
            },
            ".justify-around": {
                "justify-content": "space-around"
            },
            ".justify-evenly": {
                "justify-content": "space-evenly"
            },
            ".justify-stretch": {
                "justify-content": "stretch"
            }
        });
    },
    justifyItems: ({ addUtilities })=>{
        addUtilities({
            ".justify-items-start": {
                "justify-items": "start"
            },
            ".justify-items-end": {
                "justify-items": "end"
            },
            ".justify-items-center": {
                "justify-items": "center"
            },
            ".justify-items-stretch": {
                "justify-items": "stretch"
            }
        });
    },
    gap: (0, _createUtilityPlugin.default)("gap", [
        [
            "gap",
            [
                "gap"
            ]
        ],
        [
            [
                "gap-x",
                [
                    "columnGap"
                ]
            ],
            [
                "gap-y",
                [
                    "rowGap"
                ]
            ]
        ]
    ]),
    space: ({ matchUtilities, addUtilities, theme })=>{
        matchUtilities({
            "space-x": (value)=>{
                value = value === "0" ? "0px" : value;
                return {
                    "& > :not([hidden]) ~ :not([hidden])": {
                        "--tw-space-x-reverse": "0",
                        "margin-right": `calc(${value} * var(--tw-space-x-reverse))`,
                        "margin-left": `calc(${value} * calc(1 - var(--tw-space-x-reverse)))`
                    }
                };
            },
            "space-y": (value)=>{
                value = value === "0" ? "0px" : value;
                return {
                    "& > :not([hidden]) ~ :not([hidden])": {
                        "--tw-space-y-reverse": "0",
                        "margin-top": `calc(${value} * calc(1 - var(--tw-space-y-reverse)))`,
                        "margin-bottom": `calc(${value} * var(--tw-space-y-reverse))`
                    }
                };
            }
        }, {
            values: theme("space"),
            supportsNegativeValues: true
        });
        addUtilities({
            ".space-y-reverse > :not([hidden]) ~ :not([hidden])": {
                "--tw-space-y-reverse": "1"
            },
            ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
                "--tw-space-x-reverse": "1"
            }
        });
    },
    divideWidth: ({ matchUtilities, addUtilities, theme })=>{
        matchUtilities({
            "divide-x": (value)=>{
                value = value === "0" ? "0px" : value;
                return {
                    "& > :not([hidden]) ~ :not([hidden])": {
                        "@defaults border-width": {},
                        "--tw-divide-x-reverse": "0",
                        "border-right-width": `calc(${value} * var(--tw-divide-x-reverse))`,
                        "border-left-width": `calc(${value} * calc(1 - var(--tw-divide-x-reverse)))`
                    }
                };
            },
            "divide-y": (value)=>{
                value = value === "0" ? "0px" : value;
                return {
                    "& > :not([hidden]) ~ :not([hidden])": {
                        "@defaults border-width": {},
                        "--tw-divide-y-reverse": "0",
                        "border-top-width": `calc(${value} * calc(1 - var(--tw-divide-y-reverse)))`,
                        "border-bottom-width": `calc(${value} * var(--tw-divide-y-reverse))`
                    }
                };
            }
        }, {
            values: theme("divideWidth"),
            type: [
                "line-width",
                "length",
                "any"
            ]
        });
        addUtilities({
            ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": {
                "@defaults border-width": {},
                "--tw-divide-y-reverse": "1"
            },
            ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": {
                "@defaults border-width": {},
                "--tw-divide-x-reverse": "1"
            }
        });
    },
    divideStyle: ({ addUtilities })=>{
        addUtilities({
            ".divide-solid > :not([hidden]) ~ :not([hidden])": {
                "border-style": "solid"
            },
            ".divide-dashed > :not([hidden]) ~ :not([hidden])": {
                "border-style": "dashed"
            },
            ".divide-dotted > :not([hidden]) ~ :not([hidden])": {
                "border-style": "dotted"
            },
            ".divide-double > :not([hidden]) ~ :not([hidden])": {
                "border-style": "double"
            },
            ".divide-none > :not([hidden]) ~ :not([hidden])": {
                "border-style": "none"
            }
        });
    },
    divideColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            divide: (value)=>{
                if (!corePlugins("divideOpacity")) {
                    return {
                        ["& > :not([hidden]) ~ :not([hidden])"]: {
                            "border-color": (0, _toColorValue.default)(value)
                        }
                    };
                }
                return {
                    ["& > :not([hidden]) ~ :not([hidden])"]: (0, _withAlphaVariable.default)({
                        color: value,
                        property: "border-color",
                        variable: "--tw-divide-opacity"
                    })
                };
            }
        }, {
            values: (({ DEFAULT: _, ...colors })=>colors)((0, _flattenColorPalette.default)(theme("divideColor"))),
            type: [
                "color",
                "any"
            ]
        });
    },
    divideOpacity: ({ matchUtilities, theme })=>{
        matchUtilities({
            "divide-opacity": (value)=>{
                return {
                    [`& > :not([hidden]) ~ :not([hidden])`]: {
                        "--tw-divide-opacity": value
                    }
                };
            }
        }, {
            values: theme("divideOpacity")
        });
    },
    placeSelf: ({ addUtilities })=>{
        addUtilities({
            ".place-self-auto": {
                "place-self": "auto"
            },
            ".place-self-start": {
                "place-self": "start"
            },
            ".place-self-end": {
                "place-self": "end"
            },
            ".place-self-center": {
                "place-self": "center"
            },
            ".place-self-stretch": {
                "place-self": "stretch"
            }
        });
    },
    alignSelf: ({ addUtilities })=>{
        addUtilities({
            ".self-auto": {
                "align-self": "auto"
            },
            ".self-start": {
                "align-self": "flex-start"
            },
            ".self-end": {
                "align-self": "flex-end"
            },
            ".self-center": {
                "align-self": "center"
            },
            ".self-stretch": {
                "align-self": "stretch"
            },
            ".self-baseline": {
                "align-self": "baseline"
            }
        });
    },
    justifySelf: ({ addUtilities })=>{
        addUtilities({
            ".justify-self-auto": {
                "justify-self": "auto"
            },
            ".justify-self-start": {
                "justify-self": "start"
            },
            ".justify-self-end": {
                "justify-self": "end"
            },
            ".justify-self-center": {
                "justify-self": "center"
            },
            ".justify-self-stretch": {
                "justify-self": "stretch"
            }
        });
    },
    overflow: ({ addUtilities })=>{
        addUtilities({
            ".overflow-auto": {
                overflow: "auto"
            },
            ".overflow-hidden": {
                overflow: "hidden"
            },
            ".overflow-clip": {
                overflow: "clip"
            },
            ".overflow-visible": {
                overflow: "visible"
            },
            ".overflow-scroll": {
                overflow: "scroll"
            },
            ".overflow-x-auto": {
                "overflow-x": "auto"
            },
            ".overflow-y-auto": {
                "overflow-y": "auto"
            },
            ".overflow-x-hidden": {
                "overflow-x": "hidden"
            },
            ".overflow-y-hidden": {
                "overflow-y": "hidden"
            },
            ".overflow-x-clip": {
                "overflow-x": "clip"
            },
            ".overflow-y-clip": {
                "overflow-y": "clip"
            },
            ".overflow-x-visible": {
                "overflow-x": "visible"
            },
            ".overflow-y-visible": {
                "overflow-y": "visible"
            },
            ".overflow-x-scroll": {
                "overflow-x": "scroll"
            },
            ".overflow-y-scroll": {
                "overflow-y": "scroll"
            }
        });
    },
    overscrollBehavior: ({ addUtilities })=>{
        addUtilities({
            ".overscroll-auto": {
                "overscroll-behavior": "auto"
            },
            ".overscroll-contain": {
                "overscroll-behavior": "contain"
            },
            ".overscroll-none": {
                "overscroll-behavior": "none"
            },
            ".overscroll-y-auto": {
                "overscroll-behavior-y": "auto"
            },
            ".overscroll-y-contain": {
                "overscroll-behavior-y": "contain"
            },
            ".overscroll-y-none": {
                "overscroll-behavior-y": "none"
            },
            ".overscroll-x-auto": {
                "overscroll-behavior-x": "auto"
            },
            ".overscroll-x-contain": {
                "overscroll-behavior-x": "contain"
            },
            ".overscroll-x-none": {
                "overscroll-behavior-x": "none"
            }
        });
    },
    scrollBehavior: ({ addUtilities })=>{
        addUtilities({
            ".scroll-auto": {
                "scroll-behavior": "auto"
            },
            ".scroll-smooth": {
                "scroll-behavior": "smooth"
            }
        });
    },
    textOverflow: ({ addUtilities })=>{
        addUtilities({
            ".truncate": {
                overflow: "hidden",
                "text-overflow": "ellipsis",
                "white-space": "nowrap"
            },
            ".overflow-ellipsis": {
                "text-overflow": "ellipsis"
            },
            ".text-ellipsis": {
                "text-overflow": "ellipsis"
            },
            ".text-clip": {
                "text-overflow": "clip"
            }
        });
    },
    hyphens: ({ addUtilities })=>{
        addUtilities({
            ".hyphens-none": {
                hyphens: "none"
            },
            ".hyphens-manual": {
                hyphens: "manual"
            },
            ".hyphens-auto": {
                hyphens: "auto"
            }
        });
    },
    whitespace: ({ addUtilities })=>{
        addUtilities({
            ".whitespace-normal": {
                "white-space": "normal"
            },
            ".whitespace-nowrap": {
                "white-space": "nowrap"
            },
            ".whitespace-pre": {
                "white-space": "pre"
            },
            ".whitespace-pre-line": {
                "white-space": "pre-line"
            },
            ".whitespace-pre-wrap": {
                "white-space": "pre-wrap"
            },
            ".whitespace-break-spaces": {
                "white-space": "break-spaces"
            }
        });
    },
    textWrap: ({ addUtilities })=>{
        addUtilities({
            ".text-wrap": {
                "text-wrap": "wrap"
            },
            ".text-nowrap": {
                "text-wrap": "nowrap"
            },
            ".text-balance": {
                "text-wrap": "balance"
            },
            ".text-pretty": {
                "text-wrap": "pretty"
            }
        });
    },
    wordBreak: ({ addUtilities })=>{
        addUtilities({
            ".break-normal": {
                "overflow-wrap": "normal",
                "word-break": "normal"
            },
            ".break-words": {
                "overflow-wrap": "break-word"
            },
            ".break-all": {
                "word-break": "break-all"
            },
            ".break-keep": {
                "word-break": "keep-all"
            }
        });
    },
    borderRadius: (0, _createUtilityPlugin.default)("borderRadius", [
        [
            "rounded",
            [
                "border-radius"
            ]
        ],
        [
            [
                "rounded-s",
                [
                    "border-start-start-radius",
                    "border-end-start-radius"
                ]
            ],
            [
                "rounded-e",
                [
                    "border-start-end-radius",
                    "border-end-end-radius"
                ]
            ],
            [
                "rounded-t",
                [
                    "border-top-left-radius",
                    "border-top-right-radius"
                ]
            ],
            [
                "rounded-r",
                [
                    "border-top-right-radius",
                    "border-bottom-right-radius"
                ]
            ],
            [
                "rounded-b",
                [
                    "border-bottom-right-radius",
                    "border-bottom-left-radius"
                ]
            ],
            [
                "rounded-l",
                [
                    "border-top-left-radius",
                    "border-bottom-left-radius"
                ]
            ]
        ],
        [
            [
                "rounded-ss",
                [
                    "border-start-start-radius"
                ]
            ],
            [
                "rounded-se",
                [
                    "border-start-end-radius"
                ]
            ],
            [
                "rounded-ee",
                [
                    "border-end-end-radius"
                ]
            ],
            [
                "rounded-es",
                [
                    "border-end-start-radius"
                ]
            ],
            [
                "rounded-tl",
                [
                    "border-top-left-radius"
                ]
            ],
            [
                "rounded-tr",
                [
                    "border-top-right-radius"
                ]
            ],
            [
                "rounded-br",
                [
                    "border-bottom-right-radius"
                ]
            ],
            [
                "rounded-bl",
                [
                    "border-bottom-left-radius"
                ]
            ]
        ]
    ]),
    borderWidth: (0, _createUtilityPlugin.default)("borderWidth", [
        [
            "border",
            [
                [
                    "@defaults border-width",
                    {}
                ],
                "border-width"
            ]
        ],
        [
            [
                "border-x",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-left-width",
                    "border-right-width"
                ]
            ],
            [
                "border-y",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-top-width",
                    "border-bottom-width"
                ]
            ]
        ],
        [
            [
                "border-s",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-inline-start-width"
                ]
            ],
            [
                "border-e",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-inline-end-width"
                ]
            ],
            [
                "border-t",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-top-width"
                ]
            ],
            [
                "border-r",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-right-width"
                ]
            ],
            [
                "border-b",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-bottom-width"
                ]
            ],
            [
                "border-l",
                [
                    [
                        "@defaults border-width",
                        {}
                    ],
                    "border-left-width"
                ]
            ]
        ]
    ], {
        type: [
            "line-width",
            "length"
        ]
    }),
    borderStyle: ({ addUtilities })=>{
        addUtilities({
            ".border-solid": {
                "border-style": "solid"
            },
            ".border-dashed": {
                "border-style": "dashed"
            },
            ".border-dotted": {
                "border-style": "dotted"
            },
            ".border-double": {
                "border-style": "double"
            },
            ".border-hidden": {
                "border-style": "hidden"
            },
            ".border-none": {
                "border-style": "none"
            }
        });
    },
    borderColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            border: (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-color",
                    variable: "--tw-border-opacity"
                });
            }
        }, {
            values: (({ DEFAULT: _, ...colors })=>colors)((0, _flattenColorPalette.default)(theme("borderColor"))),
            type: [
                "color",
                "any"
            ]
        });
        matchUtilities({
            "border-x": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-left-color": (0, _toColorValue.default)(value),
                        "border-right-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: [
                        "border-left-color",
                        "border-right-color"
                    ],
                    variable: "--tw-border-opacity"
                });
            },
            "border-y": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-top-color": (0, _toColorValue.default)(value),
                        "border-bottom-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: [
                        "border-top-color",
                        "border-bottom-color"
                    ],
                    variable: "--tw-border-opacity"
                });
            }
        }, {
            values: (({ DEFAULT: _, ...colors })=>colors)((0, _flattenColorPalette.default)(theme("borderColor"))),
            type: [
                "color",
                "any"
            ]
        });
        matchUtilities({
            "border-s": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-inline-start-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-inline-start-color",
                    variable: "--tw-border-opacity"
                });
            },
            "border-e": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-inline-end-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-inline-end-color",
                    variable: "--tw-border-opacity"
                });
            },
            "border-t": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-top-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-top-color",
                    variable: "--tw-border-opacity"
                });
            },
            "border-r": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-right-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-right-color",
                    variable: "--tw-border-opacity"
                });
            },
            "border-b": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-bottom-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-bottom-color",
                    variable: "--tw-border-opacity"
                });
            },
            "border-l": (value)=>{
                if (!corePlugins("borderOpacity")) {
                    return {
                        "border-left-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "border-left-color",
                    variable: "--tw-border-opacity"
                });
            }
        }, {
            values: (({ DEFAULT: _, ...colors })=>colors)((0, _flattenColorPalette.default)(theme("borderColor"))),
            type: [
                "color",
                "any"
            ]
        });
    },
    borderOpacity: (0, _createUtilityPlugin.default)("borderOpacity", [
        [
            "border-opacity",
            [
                "--tw-border-opacity"
            ]
        ]
    ]),
    backgroundColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            bg: (value)=>{
                if (!corePlugins("backgroundOpacity")) {
                    return {
                        "background-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "background-color",
                    variable: "--tw-bg-opacity"
                });
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("backgroundColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    backgroundOpacity: (0, _createUtilityPlugin.default)("backgroundOpacity", [
        [
            "bg-opacity",
            [
                "--tw-bg-opacity"
            ]
        ]
    ]),
    backgroundImage: (0, _createUtilityPlugin.default)("backgroundImage", [
        [
            "bg",
            [
                "background-image"
            ]
        ]
    ], {
        type: [
            "lookup",
            "image",
            "url"
        ]
    }),
    gradientColorStops: (()=>{
        function transparentTo(value) {
            return (0, _withAlphaVariable.withAlphaValue)(value, 0, "rgb(255 255 255 / 0)");
        }
        return function({ matchUtilities, theme, addDefaults }) {
            addDefaults("gradient-color-stops", {
                "--tw-gradient-from-position": " ",
                "--tw-gradient-via-position": " ",
                "--tw-gradient-to-position": " "
            });
            let options = {
                values: (0, _flattenColorPalette.default)(theme("gradientColorStops")),
                type: [
                    "color",
                    "any"
                ]
            };
            let positionOptions = {
                values: theme("gradientColorStopPositions"),
                type: [
                    "length",
                    "percentage"
                ]
            };
            matchUtilities({
                from: (value)=>{
                    let transparentToValue = transparentTo(value);
                    return {
                        "@defaults gradient-color-stops": {},
                        "--tw-gradient-from": `${(0, _toColorValue.default)(value)} var(--tw-gradient-from-position)`,
                        "--tw-gradient-to": `${transparentToValue} var(--tw-gradient-to-position)`,
                        "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`
                    };
                }
            }, options);
            matchUtilities({
                from: (value)=>{
                    return {
                        "--tw-gradient-from-position": value
                    };
                }
            }, positionOptions);
            matchUtilities({
                via: (value)=>{
                    let transparentToValue = transparentTo(value);
                    return {
                        "@defaults gradient-color-stops": {},
                        "--tw-gradient-to": `${transparentToValue}  var(--tw-gradient-to-position)`,
                        "--tw-gradient-stops": `var(--tw-gradient-from), ${(0, _toColorValue.default)(value)} var(--tw-gradient-via-position), var(--tw-gradient-to)`
                    };
                }
            }, options);
            matchUtilities({
                via: (value)=>{
                    return {
                        "--tw-gradient-via-position": value
                    };
                }
            }, positionOptions);
            matchUtilities({
                to: (value)=>({
                        "@defaults gradient-color-stops": {},
                        "--tw-gradient-to": `${(0, _toColorValue.default)(value)} var(--tw-gradient-to-position)`
                    })
            }, options);
            matchUtilities({
                to: (value)=>{
                    return {
                        "--tw-gradient-to-position": value
                    };
                }
            }, positionOptions);
        };
    })(),
    boxDecorationBreak: ({ addUtilities })=>{
        addUtilities({
            ".decoration-slice": {
                "box-decoration-break": "slice"
            },
            ".decoration-clone": {
                "box-decoration-break": "clone"
            },
            ".box-decoration-slice": {
                "box-decoration-break": "slice"
            },
            ".box-decoration-clone": {
                "box-decoration-break": "clone"
            }
        });
    },
    backgroundSize: (0, _createUtilityPlugin.default)("backgroundSize", [
        [
            "bg",
            [
                "background-size"
            ]
        ]
    ], {
        type: [
            "lookup",
            "length",
            "percentage",
            "size"
        ]
    }),
    backgroundAttachment: ({ addUtilities })=>{
        addUtilities({
            ".bg-fixed": {
                "background-attachment": "fixed"
            },
            ".bg-local": {
                "background-attachment": "local"
            },
            ".bg-scroll": {
                "background-attachment": "scroll"
            }
        });
    },
    backgroundClip: ({ addUtilities })=>{
        addUtilities({
            ".bg-clip-border": {
                "background-clip": "border-box"
            },
            ".bg-clip-padding": {
                "background-clip": "padding-box"
            },
            ".bg-clip-content": {
                "background-clip": "content-box"
            },
            ".bg-clip-text": {
                "background-clip": "text"
            }
        });
    },
    backgroundPosition: (0, _createUtilityPlugin.default)("backgroundPosition", [
        [
            "bg",
            [
                "background-position"
            ]
        ]
    ], {
        type: [
            "lookup",
            [
                "position",
                {
                    preferOnConflict: true
                }
            ]
        ]
    }),
    backgroundRepeat: ({ addUtilities })=>{
        addUtilities({
            ".bg-repeat": {
                "background-repeat": "repeat"
            },
            ".bg-no-repeat": {
                "background-repeat": "no-repeat"
            },
            ".bg-repeat-x": {
                "background-repeat": "repeat-x"
            },
            ".bg-repeat-y": {
                "background-repeat": "repeat-y"
            },
            ".bg-repeat-round": {
                "background-repeat": "round"
            },
            ".bg-repeat-space": {
                "background-repeat": "space"
            }
        });
    },
    backgroundOrigin: ({ addUtilities })=>{
        addUtilities({
            ".bg-origin-border": {
                "background-origin": "border-box"
            },
            ".bg-origin-padding": {
                "background-origin": "padding-box"
            },
            ".bg-origin-content": {
                "background-origin": "content-box"
            }
        });
    },
    fill: ({ matchUtilities, theme })=>{
        matchUtilities({
            fill: (value)=>{
                return {
                    fill: (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("fill")),
            type: [
                "color",
                "any"
            ]
        });
    },
    stroke: ({ matchUtilities, theme })=>{
        matchUtilities({
            stroke: (value)=>{
                return {
                    stroke: (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("stroke")),
            type: [
                "color",
                "url",
                "any"
            ]
        });
    },
    strokeWidth: (0, _createUtilityPlugin.default)("strokeWidth", [
        [
            "stroke",
            [
                "stroke-width"
            ]
        ]
    ], {
        type: [
            "length",
            "number",
            "percentage"
        ]
    }),
    objectFit: ({ addUtilities })=>{
        addUtilities({
            ".object-contain": {
                "object-fit": "contain"
            },
            ".object-cover": {
                "object-fit": "cover"
            },
            ".object-fill": {
                "object-fit": "fill"
            },
            ".object-none": {
                "object-fit": "none"
            },
            ".object-scale-down": {
                "object-fit": "scale-down"
            }
        });
    },
    objectPosition: (0, _createUtilityPlugin.default)("objectPosition", [
        [
            "object",
            [
                "object-position"
            ]
        ]
    ]),
    padding: (0, _createUtilityPlugin.default)("padding", [
        [
            "p",
            [
                "padding"
            ]
        ],
        [
            [
                "px",
                [
                    "padding-left",
                    "padding-right"
                ]
            ],
            [
                "py",
                [
                    "padding-top",
                    "padding-bottom"
                ]
            ]
        ],
        [
            [
                "ps",
                [
                    "padding-inline-start"
                ]
            ],
            [
                "pe",
                [
                    "padding-inline-end"
                ]
            ],
            [
                "pt",
                [
                    "padding-top"
                ]
            ],
            [
                "pr",
                [
                    "padding-right"
                ]
            ],
            [
                "pb",
                [
                    "padding-bottom"
                ]
            ],
            [
                "pl",
                [
                    "padding-left"
                ]
            ]
        ]
    ]),
    textAlign: ({ addUtilities })=>{
        addUtilities({
            ".text-left": {
                "text-align": "left"
            },
            ".text-center": {
                "text-align": "center"
            },
            ".text-right": {
                "text-align": "right"
            },
            ".text-justify": {
                "text-align": "justify"
            },
            ".text-start": {
                "text-align": "start"
            },
            ".text-end": {
                "text-align": "end"
            }
        });
    },
    textIndent: (0, _createUtilityPlugin.default)("textIndent", [
        [
            "indent",
            [
                "text-indent"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    verticalAlign: ({ addUtilities, matchUtilities })=>{
        addUtilities({
            ".align-baseline": {
                "vertical-align": "baseline"
            },
            ".align-top": {
                "vertical-align": "top"
            },
            ".align-middle": {
                "vertical-align": "middle"
            },
            ".align-bottom": {
                "vertical-align": "bottom"
            },
            ".align-text-top": {
                "vertical-align": "text-top"
            },
            ".align-text-bottom": {
                "vertical-align": "text-bottom"
            },
            ".align-sub": {
                "vertical-align": "sub"
            },
            ".align-super": {
                "vertical-align": "super"
            }
        });
        matchUtilities({
            align: (value)=>({
                    "vertical-align": value
                })
        });
    },
    fontFamily: ({ matchUtilities, theme })=>{
        matchUtilities({
            font: (value)=>{
                let [families, options = {}] = Array.isArray(value) && (0, _isPlainObject.default)(value[1]) ? value : [
                    value
                ];
                let { fontFeatureSettings, fontVariationSettings } = options;
                return {
                    "font-family": Array.isArray(families) ? families.join(", ") : families,
                    ...fontFeatureSettings === undefined ? {} : {
                        "font-feature-settings": fontFeatureSettings
                    },
                    ...fontVariationSettings === undefined ? {} : {
                        "font-variation-settings": fontVariationSettings
                    }
                };
            }
        }, {
            values: theme("fontFamily"),
            type: [
                "lookup",
                "generic-name",
                "family-name"
            ]
        });
    },
    fontSize: ({ matchUtilities, theme })=>{
        matchUtilities({
            text: (value, { modifier })=>{
                let [fontSize, options] = Array.isArray(value) ? value : [
                    value
                ];
                if (modifier) {
                    return {
                        "font-size": fontSize,
                        "line-height": modifier
                    };
                }
                let { lineHeight, letterSpacing, fontWeight } = (0, _isPlainObject.default)(options) ? options : {
                    lineHeight: options
                };
                return {
                    "font-size": fontSize,
                    ...lineHeight === undefined ? {} : {
                        "line-height": lineHeight
                    },
                    ...letterSpacing === undefined ? {} : {
                        "letter-spacing": letterSpacing
                    },
                    ...fontWeight === undefined ? {} : {
                        "font-weight": fontWeight
                    }
                };
            }
        }, {
            values: theme("fontSize"),
            modifiers: theme("lineHeight"),
            type: [
                "absolute-size",
                "relative-size",
                "length",
                "percentage"
            ]
        });
    },
    fontWeight: (0, _createUtilityPlugin.default)("fontWeight", [
        [
            "font",
            [
                "fontWeight"
            ]
        ]
    ], {
        type: [
            "lookup",
            "number",
            "any"
        ]
    }),
    textTransform: ({ addUtilities })=>{
        addUtilities({
            ".uppercase": {
                "text-transform": "uppercase"
            },
            ".lowercase": {
                "text-transform": "lowercase"
            },
            ".capitalize": {
                "text-transform": "capitalize"
            },
            ".normal-case": {
                "text-transform": "none"
            }
        });
    },
    fontStyle: ({ addUtilities })=>{
        addUtilities({
            ".italic": {
                "font-style": "italic"
            },
            ".not-italic": {
                "font-style": "normal"
            }
        });
    },
    fontVariantNumeric: ({ addDefaults, addUtilities })=>{
        let cssFontVariantNumericValue = "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
        addDefaults("font-variant-numeric", {
            "--tw-ordinal": " ",
            "--tw-slashed-zero": " ",
            "--tw-numeric-figure": " ",
            "--tw-numeric-spacing": " ",
            "--tw-numeric-fraction": " "
        });
        addUtilities({
            ".normal-nums": {
                "font-variant-numeric": "normal"
            },
            ".ordinal": {
                "@defaults font-variant-numeric": {},
                "--tw-ordinal": "ordinal",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".slashed-zero": {
                "@defaults font-variant-numeric": {},
                "--tw-slashed-zero": "slashed-zero",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".lining-nums": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-figure": "lining-nums",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".oldstyle-nums": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-figure": "oldstyle-nums",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".proportional-nums": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-spacing": "proportional-nums",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".tabular-nums": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-spacing": "tabular-nums",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".diagonal-fractions": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-fraction": "diagonal-fractions",
                "font-variant-numeric": cssFontVariantNumericValue
            },
            ".stacked-fractions": {
                "@defaults font-variant-numeric": {},
                "--tw-numeric-fraction": "stacked-fractions",
                "font-variant-numeric": cssFontVariantNumericValue
            }
        });
    },
    lineHeight: (0, _createUtilityPlugin.default)("lineHeight", [
        [
            "leading",
            [
                "lineHeight"
            ]
        ]
    ]),
    letterSpacing: (0, _createUtilityPlugin.default)("letterSpacing", [
        [
            "tracking",
            [
                "letterSpacing"
            ]
        ]
    ], {
        supportsNegativeValues: true
    }),
    textColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            text: (value)=>{
                if (!corePlugins("textOpacity")) {
                    return {
                        color: (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "color",
                    variable: "--tw-text-opacity"
                });
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("textColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    textOpacity: (0, _createUtilityPlugin.default)("textOpacity", [
        [
            "text-opacity",
            [
                "--tw-text-opacity"
            ]
        ]
    ]),
    textDecoration: ({ addUtilities })=>{
        addUtilities({
            ".underline": {
                "text-decoration-line": "underline"
            },
            ".overline": {
                "text-decoration-line": "overline"
            },
            ".line-through": {
                "text-decoration-line": "line-through"
            },
            ".no-underline": {
                "text-decoration-line": "none"
            }
        });
    },
    textDecorationColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            decoration: (value)=>{
                return {
                    "text-decoration-color": (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("textDecorationColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    textDecorationStyle: ({ addUtilities })=>{
        addUtilities({
            ".decoration-solid": {
                "text-decoration-style": "solid"
            },
            ".decoration-double": {
                "text-decoration-style": "double"
            },
            ".decoration-dotted": {
                "text-decoration-style": "dotted"
            },
            ".decoration-dashed": {
                "text-decoration-style": "dashed"
            },
            ".decoration-wavy": {
                "text-decoration-style": "wavy"
            }
        });
    },
    textDecorationThickness: (0, _createUtilityPlugin.default)("textDecorationThickness", [
        [
            "decoration",
            [
                "text-decoration-thickness"
            ]
        ]
    ], {
        type: [
            "length",
            "percentage"
        ]
    }),
    textUnderlineOffset: (0, _createUtilityPlugin.default)("textUnderlineOffset", [
        [
            "underline-offset",
            [
                "text-underline-offset"
            ]
        ]
    ], {
        type: [
            "length",
            "percentage",
            "any"
        ]
    }),
    fontSmoothing: ({ addUtilities })=>{
        addUtilities({
            ".antialiased": {
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale"
            },
            ".subpixel-antialiased": {
                "-webkit-font-smoothing": "auto",
                "-moz-osx-font-smoothing": "auto"
            }
        });
    },
    placeholderColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            placeholder: (value)=>{
                if (!corePlugins("placeholderOpacity")) {
                    return {
                        "&::placeholder": {
                            color: (0, _toColorValue.default)(value)
                        }
                    };
                }
                return {
                    "&::placeholder": (0, _withAlphaVariable.default)({
                        color: value,
                        property: "color",
                        variable: "--tw-placeholder-opacity"
                    })
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("placeholderColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    placeholderOpacity: ({ matchUtilities, theme })=>{
        matchUtilities({
            "placeholder-opacity": (value)=>{
                return {
                    ["&::placeholder"]: {
                        "--tw-placeholder-opacity": value
                    }
                };
            }
        }, {
            values: theme("placeholderOpacity")
        });
    },
    caretColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            caret: (value)=>{
                return {
                    "caret-color": (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("caretColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    accentColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            accent: (value)=>{
                return {
                    "accent-color": (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("accentColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    opacity: (0, _createUtilityPlugin.default)("opacity", [
        [
            "opacity",
            [
                "opacity"
            ]
        ]
    ]),
    backgroundBlendMode: ({ addUtilities })=>{
        addUtilities({
            ".bg-blend-normal": {
                "background-blend-mode": "normal"
            },
            ".bg-blend-multiply": {
                "background-blend-mode": "multiply"
            },
            ".bg-blend-screen": {
                "background-blend-mode": "screen"
            },
            ".bg-blend-overlay": {
                "background-blend-mode": "overlay"
            },
            ".bg-blend-darken": {
                "background-blend-mode": "darken"
            },
            ".bg-blend-lighten": {
                "background-blend-mode": "lighten"
            },
            ".bg-blend-color-dodge": {
                "background-blend-mode": "color-dodge"
            },
            ".bg-blend-color-burn": {
                "background-blend-mode": "color-burn"
            },
            ".bg-blend-hard-light": {
                "background-blend-mode": "hard-light"
            },
            ".bg-blend-soft-light": {
                "background-blend-mode": "soft-light"
            },
            ".bg-blend-difference": {
                "background-blend-mode": "difference"
            },
            ".bg-blend-exclusion": {
                "background-blend-mode": "exclusion"
            },
            ".bg-blend-hue": {
                "background-blend-mode": "hue"
            },
            ".bg-blend-saturation": {
                "background-blend-mode": "saturation"
            },
            ".bg-blend-color": {
                "background-blend-mode": "color"
            },
            ".bg-blend-luminosity": {
                "background-blend-mode": "luminosity"
            }
        });
    },
    mixBlendMode: ({ addUtilities })=>{
        addUtilities({
            ".mix-blend-normal": {
                "mix-blend-mode": "normal"
            },
            ".mix-blend-multiply": {
                "mix-blend-mode": "multiply"
            },
            ".mix-blend-screen": {
                "mix-blend-mode": "screen"
            },
            ".mix-blend-overlay": {
                "mix-blend-mode": "overlay"
            },
            ".mix-blend-darken": {
                "mix-blend-mode": "darken"
            },
            ".mix-blend-lighten": {
                "mix-blend-mode": "lighten"
            },
            ".mix-blend-color-dodge": {
                "mix-blend-mode": "color-dodge"
            },
            ".mix-blend-color-burn": {
                "mix-blend-mode": "color-burn"
            },
            ".mix-blend-hard-light": {
                "mix-blend-mode": "hard-light"
            },
            ".mix-blend-soft-light": {
                "mix-blend-mode": "soft-light"
            },
            ".mix-blend-difference": {
                "mix-blend-mode": "difference"
            },
            ".mix-blend-exclusion": {
                "mix-blend-mode": "exclusion"
            },
            ".mix-blend-hue": {
                "mix-blend-mode": "hue"
            },
            ".mix-blend-saturation": {
                "mix-blend-mode": "saturation"
            },
            ".mix-blend-color": {
                "mix-blend-mode": "color"
            },
            ".mix-blend-luminosity": {
                "mix-blend-mode": "luminosity"
            },
            ".mix-blend-plus-darker": {
                "mix-blend-mode": "plus-darker"
            },
            ".mix-blend-plus-lighter": {
                "mix-blend-mode": "plus-lighter"
            }
        });
    },
    boxShadow: (()=>{
        let transformValue = (0, _transformThemeValue.default)("boxShadow");
        let defaultBoxShadow = [
            `var(--tw-ring-offset-shadow, 0 0 #0000)`,
            `var(--tw-ring-shadow, 0 0 #0000)`,
            `var(--tw-shadow)`
        ].join(", ");
        return function({ matchUtilities, addDefaults, theme }) {
            addDefaults("box-shadow", {
                "--tw-ring-offset-shadow": "0 0 #0000",
                "--tw-ring-shadow": "0 0 #0000",
                "--tw-shadow": "0 0 #0000",
                "--tw-shadow-colored": "0 0 #0000"
            });
            matchUtilities({
                shadow: (value)=>{
                    value = transformValue(value);
                    let ast = (0, _parseBoxShadowValue.parseBoxShadowValue)(value);
                    for (let shadow of ast){
                        // Don't override color if the whole shadow is a variable
                        if (!shadow.valid) {
                            continue;
                        }
                        shadow.color = "var(--tw-shadow-color)";
                    }
                    return {
                        "@defaults box-shadow": {},
                        "--tw-shadow": value === "none" ? "0 0 #0000" : value,
                        "--tw-shadow-colored": value === "none" ? "0 0 #0000" : (0, _parseBoxShadowValue.formatBoxShadowValue)(ast),
                        "box-shadow": defaultBoxShadow
                    };
                }
            }, {
                values: theme("boxShadow"),
                type: [
                    "shadow"
                ]
            });
        };
    })(),
    boxShadowColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            shadow: (value)=>{
                return {
                    "--tw-shadow-color": (0, _toColorValue.default)(value),
                    "--tw-shadow": "var(--tw-shadow-colored)"
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("boxShadowColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    outlineStyle: ({ addUtilities })=>{
        addUtilities({
            ".outline-none": {
                outline: "2px solid transparent",
                "outline-offset": "2px"
            },
            ".outline": {
                "outline-style": "solid"
            },
            ".outline-dashed": {
                "outline-style": "dashed"
            },
            ".outline-dotted": {
                "outline-style": "dotted"
            },
            ".outline-double": {
                "outline-style": "double"
            }
        });
    },
    outlineWidth: (0, _createUtilityPlugin.default)("outlineWidth", [
        [
            "outline",
            [
                "outline-width"
            ]
        ]
    ], {
        type: [
            "length",
            "number",
            "percentage"
        ]
    }),
    outlineOffset: (0, _createUtilityPlugin.default)("outlineOffset", [
        [
            "outline-offset",
            [
                "outline-offset"
            ]
        ]
    ], {
        type: [
            "length",
            "number",
            "percentage",
            "any"
        ],
        supportsNegativeValues: true
    }),
    outlineColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            outline: (value)=>{
                return {
                    "outline-color": (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("outlineColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    ringWidth: ({ matchUtilities, addDefaults, addUtilities, theme, config })=>{
        let ringColorDefault = (()=>{
            var _theme, _theme1;
            if ((0, _featureFlags.flagEnabled)(config(), "respectDefaultRingColorOpacity")) {
                return theme("ringColor.DEFAULT");
            }
            let ringOpacityDefault = theme("ringOpacity.DEFAULT", "0.5");
            if (!((_theme = theme("ringColor")) === null || _theme === void 0 ? void 0 : _theme.DEFAULT)) {
                return `rgb(147 197 253 / ${ringOpacityDefault})`;
            }
            return (0, _withAlphaVariable.withAlphaValue)((_theme1 = theme("ringColor")) === null || _theme1 === void 0 ? void 0 : _theme1.DEFAULT, ringOpacityDefault, `rgb(147 197 253 / ${ringOpacityDefault})`);
        })();
        addDefaults("ring-width", {
            "--tw-ring-inset": " ",
            "--tw-ring-offset-width": theme("ringOffsetWidth.DEFAULT", "0px"),
            "--tw-ring-offset-color": theme("ringOffsetColor.DEFAULT", "#fff"),
            "--tw-ring-color": ringColorDefault,
            "--tw-ring-offset-shadow": "0 0 #0000",
            "--tw-ring-shadow": "0 0 #0000",
            "--tw-shadow": "0 0 #0000",
            "--tw-shadow-colored": "0 0 #0000"
        });
        matchUtilities({
            ring: (value)=>{
                return {
                    "@defaults ring-width": {},
                    "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${value} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                    "box-shadow": [
                        `var(--tw-ring-offset-shadow)`,
                        `var(--tw-ring-shadow)`,
                        `var(--tw-shadow, 0 0 #0000)`
                    ].join(", ")
                };
            }
        }, {
            values: theme("ringWidth"),
            type: "length"
        });
        addUtilities({
            ".ring-inset": {
                "@defaults ring-width": {},
                "--tw-ring-inset": "inset"
            }
        });
    },
    ringColor: ({ matchUtilities, theme, corePlugins })=>{
        matchUtilities({
            ring: (value)=>{
                if (!corePlugins("ringOpacity")) {
                    return {
                        "--tw-ring-color": (0, _toColorValue.default)(value)
                    };
                }
                return (0, _withAlphaVariable.default)({
                    color: value,
                    property: "--tw-ring-color",
                    variable: "--tw-ring-opacity"
                });
            }
        }, {
            values: Object.fromEntries(Object.entries((0, _flattenColorPalette.default)(theme("ringColor"))).filter(([modifier])=>modifier !== "DEFAULT")),
            type: [
                "color",
                "any"
            ]
        });
    },
    ringOpacity: (helpers)=>{
        let { config } = helpers;
        return (0, _createUtilityPlugin.default)("ringOpacity", [
            [
                "ring-opacity",
                [
                    "--tw-ring-opacity"
                ]
            ]
        ], {
            filterDefault: !(0, _featureFlags.flagEnabled)(config(), "respectDefaultRingColorOpacity")
        })(helpers);
    },
    ringOffsetWidth: (0, _createUtilityPlugin.default)("ringOffsetWidth", [
        [
            "ring-offset",
            [
                "--tw-ring-offset-width"
            ]
        ]
    ], {
        type: "length"
    }),
    ringOffsetColor: ({ matchUtilities, theme })=>{
        matchUtilities({
            "ring-offset": (value)=>{
                return {
                    "--tw-ring-offset-color": (0, _toColorValue.default)(value)
                };
            }
        }, {
            values: (0, _flattenColorPalette.default)(theme("ringOffsetColor")),
            type: [
                "color",
                "any"
            ]
        });
    },
    blur: ({ matchUtilities, theme })=>{
        matchUtilities({
            blur: (value)=>{
                return {
                    "--tw-blur": value.trim() === "" ? " " : `blur(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("blur")
        });
    },
    brightness: ({ matchUtilities, theme })=>{
        matchUtilities({
            brightness: (value)=>{
                return {
                    "--tw-brightness": `brightness(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("brightness")
        });
    },
    contrast: ({ matchUtilities, theme })=>{
        matchUtilities({
            contrast: (value)=>{
                return {
                    "--tw-contrast": `contrast(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("contrast")
        });
    },
    dropShadow: ({ matchUtilities, theme })=>{
        matchUtilities({
            "drop-shadow": (value)=>{
                return {
                    "--tw-drop-shadow": Array.isArray(value) ? value.map((v)=>`drop-shadow(${v})`).join(" ") : `drop-shadow(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("dropShadow")
        });
    },
    grayscale: ({ matchUtilities, theme })=>{
        matchUtilities({
            grayscale: (value)=>{
                return {
                    "--tw-grayscale": `grayscale(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("grayscale")
        });
    },
    hueRotate: ({ matchUtilities, theme })=>{
        matchUtilities({
            "hue-rotate": (value)=>{
                return {
                    "--tw-hue-rotate": `hue-rotate(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("hueRotate"),
            supportsNegativeValues: true
        });
    },
    invert: ({ matchUtilities, theme })=>{
        matchUtilities({
            invert: (value)=>{
                return {
                    "--tw-invert": `invert(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("invert")
        });
    },
    saturate: ({ matchUtilities, theme })=>{
        matchUtilities({
            saturate: (value)=>{
                return {
                    "--tw-saturate": `saturate(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("saturate")
        });
    },
    sepia: ({ matchUtilities, theme })=>{
        matchUtilities({
            sepia: (value)=>{
                return {
                    "--tw-sepia": `sepia(${value})`,
                    "@defaults filter": {},
                    filter: cssFilterValue
                };
            }
        }, {
            values: theme("sepia")
        });
    },
    filter: ({ addDefaults, addUtilities })=>{
        addDefaults("filter", {
            "--tw-blur": " ",
            "--tw-brightness": " ",
            "--tw-contrast": " ",
            "--tw-grayscale": " ",
            "--tw-hue-rotate": " ",
            "--tw-invert": " ",
            "--tw-saturate": " ",
            "--tw-sepia": " ",
            "--tw-drop-shadow": " "
        });
        addUtilities({
            ".filter": {
                "@defaults filter": {},
                filter: cssFilterValue
            },
            ".filter-none": {
                filter: "none"
            }
        });
    },
    backdropBlur: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-blur": (value)=>{
                return {
                    "--tw-backdrop-blur": value.trim() === "" ? " " : `blur(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropBlur")
        });
    },
    backdropBrightness: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-brightness": (value)=>{
                return {
                    "--tw-backdrop-brightness": `brightness(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropBrightness")
        });
    },
    backdropContrast: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-contrast": (value)=>{
                return {
                    "--tw-backdrop-contrast": `contrast(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropContrast")
        });
    },
    backdropGrayscale: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-grayscale": (value)=>{
                return {
                    "--tw-backdrop-grayscale": `grayscale(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropGrayscale")
        });
    },
    backdropHueRotate: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-hue-rotate": (value)=>{
                return {
                    "--tw-backdrop-hue-rotate": `hue-rotate(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropHueRotate"),
            supportsNegativeValues: true
        });
    },
    backdropInvert: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-invert": (value)=>{
                return {
                    "--tw-backdrop-invert": `invert(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropInvert")
        });
    },
    backdropOpacity: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-opacity": (value)=>{
                return {
                    "--tw-backdrop-opacity": `opacity(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropOpacity")
        });
    },
    backdropSaturate: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-saturate": (value)=>{
                return {
                    "--tw-backdrop-saturate": `saturate(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropSaturate")
        });
    },
    backdropSepia: ({ matchUtilities, theme })=>{
        matchUtilities({
            "backdrop-sepia": (value)=>{
                return {
                    "--tw-backdrop-sepia": `sepia(${value})`,
                    "@defaults backdrop-filter": {},
                    "-webkit-backdrop-filter": cssBackdropFilterValue,
                    "backdrop-filter": cssBackdropFilterValue
                };
            }
        }, {
            values: theme("backdropSepia")
        });
    },
    backdropFilter: ({ addDefaults, addUtilities })=>{
        addDefaults("backdrop-filter", {
            "--tw-backdrop-blur": " ",
            "--tw-backdrop-brightness": " ",
            "--tw-backdrop-contrast": " ",
            "--tw-backdrop-grayscale": " ",
            "--tw-backdrop-hue-rotate": " ",
            "--tw-backdrop-invert": " ",
            "--tw-backdrop-opacity": " ",
            "--tw-backdrop-saturate": " ",
            "--tw-backdrop-sepia": " "
        });
        addUtilities({
            ".backdrop-filter": {
                "@defaults backdrop-filter": {},
                "-webkit-backdrop-filter": cssBackdropFilterValue,
                "backdrop-filter": cssBackdropFilterValue
            },
            ".backdrop-filter-none": {
                "-webkit-backdrop-filter": "none",
                "backdrop-filter": "none"
            }
        });
    },
    transitionProperty: ({ matchUtilities, theme })=>{
        let defaultTimingFunction = theme("transitionTimingFunction.DEFAULT");
        let defaultDuration = theme("transitionDuration.DEFAULT");
        matchUtilities({
            transition: (value)=>{
                return {
                    "transition-property": value,
                    ...value === "none" ? {} : {
                        "transition-timing-function": defaultTimingFunction,
                        "transition-duration": defaultDuration
                    }
                };
            }
        }, {
            values: theme("transitionProperty")
        });
    },
    transitionDelay: (0, _createUtilityPlugin.default)("transitionDelay", [
        [
            "delay",
            [
                "transitionDelay"
            ]
        ]
    ]),
    transitionDuration: (0, _createUtilityPlugin.default)("transitionDuration", [
        [
            "duration",
            [
                "transitionDuration"
            ]
        ]
    ], {
        filterDefault: true
    }),
    transitionTimingFunction: (0, _createUtilityPlugin.default)("transitionTimingFunction", [
        [
            "ease",
            [
                "transitionTimingFunction"
            ]
        ]
    ], {
        filterDefault: true
    }),
    willChange: (0, _createUtilityPlugin.default)("willChange", [
        [
            "will-change",
            [
                "will-change"
            ]
        ]
    ]),
    contain: ({ addDefaults, addUtilities })=>{
        let cssContainValue = "var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)";
        addDefaults("contain", {
            "--tw-contain-size": " ",
            "--tw-contain-layout": " ",
            "--tw-contain-paint": " ",
            "--tw-contain-style": " "
        });
        addUtilities({
            ".contain-none": {
                contain: "none"
            },
            ".contain-content": {
                contain: "content"
            },
            ".contain-strict": {
                contain: "strict"
            },
            ".contain-size": {
                "@defaults contain": {},
                "--tw-contain-size": "size",
                contain: cssContainValue
            },
            ".contain-inline-size": {
                "@defaults contain": {},
                "--tw-contain-size": "inline-size",
                contain: cssContainValue
            },
            ".contain-layout": {
                "@defaults contain": {},
                "--tw-contain-layout": "layout",
                contain: cssContainValue
            },
            ".contain-paint": {
                "@defaults contain": {},
                "--tw-contain-paint": "paint",
                contain: cssContainValue
            },
            ".contain-style": {
                "@defaults contain": {},
                "--tw-contain-style": "style",
                contain: cssContainValue
            }
        });
    },
    content: (0, _createUtilityPlugin.default)("content", [
        [
            "content",
            [
                "--tw-content",
                [
                    "content",
                    "var(--tw-content)"
                ]
            ]
        ]
    ]),
    forcedColorAdjust: ({ addUtilities })=>{
        addUtilities({
            ".forced-color-adjust-auto": {
                "forced-color-adjust": "auto"
            },
            ".forced-color-adjust-none": {
                "forced-color-adjust": "none"
            }
        });
    }
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    env: function() {
        return env;
    },
    contextMap: function() {
        return contextMap;
    },
    configContextMap: function() {
        return configContextMap;
    },
    contextSourcesMap: function() {
        return contextSourcesMap;
    },
    sourceHashMap: function() {
        return sourceHashMap;
    },
    NOT_ON_DEMAND: function() {
        return NOT_ON_DEMAND;
    },
    NONE: function() {
        return NONE;
    },
    resolveDebug: function() {
        return resolveDebug;
    }
});
const env = typeof __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? {
    NODE_ENV: ("TURBOPACK compile-time value", "development"),
    DEBUG: resolveDebug(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DEBUG)
} : {
    NODE_ENV: "production",
    DEBUG: false
};
const contextMap = new Map();
const configContextMap = new Map();
const contextSourcesMap = new Map();
const sourceHashMap = new Map();
const NOT_ON_DEMAND = new String("*");
const NONE = Symbol("__NONE__");
function resolveDebug(debug) {
    if (debug === undefined) {
        return false;
    }
    // Environment variables are strings, so convert to boolean
    if (debug === "true" || debug === "1") {
        return true;
    }
    if (debug === "false" || debug === "0") {
        return false;
    }
    // Keep the debug convention into account:
    // DEBUG=* -> This enables all debug modes
    // DEBUG=projectA,projectB,projectC -> This enables debug for projectA, projectB and projectC
    // DEBUG=projectA:* -> This enables all debug modes for projectA (if you have sub-types)
    // DEBUG=projectA,-projectB -> This enables debug for projectA and explicitly disables it for projectB
    if (debug === "*") {
        return true;
    }
    let debuggers = debug.split(",").map((d)=>d.split(":")[0]);
    // Ignoring tailwindcss
    if (debuggers.includes("-tailwindcss")) {
        return false;
    }
    // Including tailwindcss
    if (debuggers.includes("tailwindcss")) {
        return true;
    }
    return false;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isSyntacticallyValidPropertyValue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // values don't count, and brackets inside quotes also don't count.
//
// E.g.: w-[this-is]w-[weird-and-invalid]
// E.g.: w-[this-is\\]w-\\[weird-but-valid]
// E.g.: content-['this-is-also-valid]-weirdly-enough']
"default", {
    enumerable: true,
    get: function() {
        return isSyntacticallyValidPropertyValue;
    }
});
let matchingBrackets = new Map([
    [
        "{",
        "}"
    ],
    [
        "[",
        "]"
    ],
    [
        "(",
        ")"
    ]
]);
let inverseMatchingBrackets = new Map(Array.from(matchingBrackets.entries()).map(([k, v])=>[
        v,
        k
    ]));
let quotes = new Set([
    '"',
    "'",
    "`"
]);
function isSyntacticallyValidPropertyValue(value) {
    let stack = [];
    let inQuotes = false;
    for(let i = 0; i < value.length; i++){
        let char = value[i];
        if (char === ":" && !inQuotes && stack.length === 0) {
            return false;
        }
        // Non-escaped quotes allow us to "allow" anything in between
        if (quotes.has(char) && value[i - 1] !== "\\") {
            inQuotes = !inQuotes;
        }
        if (inQuotes) continue;
        if (value[i - 1] === "\\") continue; // Escaped
        if (matchingBrackets.has(char)) {
            stack.push(char);
        } else if (inverseMatchingBrackets.has(char)) {
            let inverse = inverseMatchingBrackets.get(char);
            // Nothing to pop from, therefore it is unbalanced
            if (stack.length <= 0) {
                return false;
            }
            // Popped value must match the inverse value, otherwise it is unbalanced
            if (stack.pop() !== inverse) {
                return false;
            }
        }
    }
    // If there is still something on the stack, it is also unbalanced
    if (stack.length > 0) {
        return false;
    }
    // All good, totally balanced!
    return true;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pseudoElements.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @typedef {import('postcss-selector-parser').Root} Root */ /** @typedef {import('postcss-selector-parser').Selector} Selector */ /** @typedef {import('postcss-selector-parser').Pseudo} Pseudo */ /** @typedef {import('postcss-selector-parser').Node} Node */ // There are some pseudo-elements that may or may not be:
// **Actionable**
// Zero or more user-action pseudo-classes may be attached to the pseudo-element itself
// structural-pseudo-classes are NOT allowed but we don't make
// The spec is not clear on whether this is allowed or not — but in practice it is.
// **Terminal**
// It MUST be placed at the end of a selector
//
// This is the required in the spec. However, some pseudo elements are not "terminal" because
// they represent a "boundary piercing" that is compiled out by a build step.
// **Jumpable**
// Any terminal element may "jump" over combinators when moving to the end of the selector
//
// This is a backwards-compat quirk of pseudo element variants from earlier versions of Tailwind CSS.
/** @typedef {'terminal' | 'actionable' | 'jumpable'} PseudoProperty */ /** @type {Record<string, PseudoProperty[]>} */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "movePseudos", {
    enumerable: true,
    get: function() {
        return movePseudos;
    }
});
let elementProperties = {
    // Pseudo elements from the spec
    "::after": [
        "terminal",
        "jumpable"
    ],
    "::backdrop": [
        "terminal",
        "jumpable"
    ],
    "::before": [
        "terminal",
        "jumpable"
    ],
    "::cue": [
        "terminal"
    ],
    "::cue-region": [
        "terminal"
    ],
    "::first-letter": [
        "terminal",
        "jumpable"
    ],
    "::first-line": [
        "terminal",
        "jumpable"
    ],
    "::grammar-error": [
        "terminal"
    ],
    "::marker": [
        "terminal",
        "jumpable"
    ],
    "::part": [
        "terminal",
        "actionable"
    ],
    "::placeholder": [
        "terminal",
        "jumpable"
    ],
    "::selection": [
        "terminal",
        "jumpable"
    ],
    "::slotted": [
        "terminal"
    ],
    "::spelling-error": [
        "terminal"
    ],
    "::target-text": [
        "terminal"
    ],
    // Pseudo elements from the spec with special rules
    "::file-selector-button": [
        "terminal",
        "actionable"
    ],
    // Library-specific pseudo elements used by component libraries
    // These are Shadow DOM-like
    "::deep": [
        "actionable"
    ],
    "::v-deep": [
        "actionable"
    ],
    "::ng-deep": [
        "actionable"
    ],
    // Note: As a rule, double colons (::) should be used instead of a single colon
    // (:). This distinguishes pseudo-classes from pseudo-elements. However, since
    // this distinction was not present in older versions of the W3C spec, most
    // browsers support both syntaxes for the original pseudo-elements.
    ":after": [
        "terminal",
        "jumpable"
    ],
    ":before": [
        "terminal",
        "jumpable"
    ],
    ":first-letter": [
        "terminal",
        "jumpable"
    ],
    ":first-line": [
        "terminal",
        "jumpable"
    ],
    ":where": [],
    ":is": [],
    ":has": [],
    // The default value is used when the pseudo-element is not recognized
    // Because it's not recognized, we don't know if it's terminal or not
    // So we assume it can be moved AND can have user-action pseudo classes attached to it
    __default__: [
        "terminal",
        "actionable"
    ]
};
function movePseudos(sel) {
    let [pseudos] = movablePseudos(sel);
    // Remove all pseudo elements from their respective selectors
    pseudos.forEach(([sel, pseudo])=>sel.removeChild(pseudo));
    // Re-add them to the end of the selector in the correct order.
    // This moves terminal pseudo elements to the end of the
    // selector otherwise the selector will not be valid.
    //
    // Examples:
    //  - `before:hover:text-center` would result in `.before\:hover\:text-center:hover::before`
    //  - `hover:before:text-center` would result in `.hover\:before\:text-center:hover::before`
    //
    // The selector `::before:hover` does not work but we
    // can make it work for you by flipping the order.
    sel.nodes.push(...pseudos.map(([, pseudo])=>pseudo));
    return sel;
}
/** @typedef {[sel: Selector, pseudo: Pseudo, attachedTo: Pseudo | null]} MovablePseudo */ /** @typedef {[pseudos: MovablePseudo[], lastSeenElement: Pseudo | null]} MovablePseudosResult */ /**
 * @param {Selector} sel
 * @returns {MovablePseudosResult}
 */ function movablePseudos(sel) {
    /** @type {MovablePseudo[]} */ let buffer = [];
    /** @type {Pseudo | null} */ let lastSeenElement = null;
    for (let node of sel.nodes){
        if (node.type === "combinator") {
            buffer = buffer.filter(([, node])=>propertiesForPseudo(node).includes("jumpable"));
            lastSeenElement = null;
        } else if (node.type === "pseudo") {
            if (isMovablePseudoElement(node)) {
                lastSeenElement = node;
                buffer.push([
                    sel,
                    node,
                    null
                ]);
            } else if (lastSeenElement && isAttachablePseudoClass(node, lastSeenElement)) {
                buffer.push([
                    sel,
                    node,
                    lastSeenElement
                ]);
            } else {
                lastSeenElement = null;
            }
            var _node_nodes;
            for (let sub of (_node_nodes = node.nodes) !== null && _node_nodes !== void 0 ? _node_nodes : []){
                let [movable, lastSeenElementInSub] = movablePseudos(sub);
                lastSeenElement = lastSeenElementInSub || lastSeenElement;
                buffer.push(...movable);
            }
        }
    }
    return [
        buffer,
        lastSeenElement
    ];
}
/**
 * @param {Node} node
 * @returns {boolean}
 */ function isPseudoElement(node) {
    return node.value.startsWith("::") || elementProperties[node.value] !== undefined;
}
/**
 * @param {Node} node
 * @returns {boolean}
 */ function isMovablePseudoElement(node) {
    return isPseudoElement(node) && propertiesForPseudo(node).includes("terminal");
}
/**
 * @param {Node} node
 * @param {Pseudo} pseudo
 * @returns {boolean}
 */ function isAttachablePseudoClass(node, pseudo) {
    if (node.type !== "pseudo") return false;
    if (isPseudoElement(node)) return false;
    return propertiesForPseudo(pseudo).includes("actionable");
}
/**
 * @param {Pseudo} pseudo
 * @returns {PseudoProperty[]}
 */ function propertiesForPseudo(pseudo) {
    var _elementProperties_pseudo_value;
    return (_elementProperties_pseudo_value = elementProperties[pseudo.value]) !== null && _elementProperties_pseudo_value !== void 0 ? _elementProperties_pseudo_value : elementProperties.__default__;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/formatVariantSelector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatVariantSelector: function() {
        return formatVariantSelector;
    },
    eliminateIrrelevantSelectors: function() {
        return eliminateIrrelevantSelectors;
    },
    finalizeSelector: function() {
        return finalizeSelector;
    },
    handleMergePseudo: function() {
        return handleMergePseudo;
    }
});
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _unesc = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/util/unesc.js [app-client] (ecmascript)"));
const _escapeClassName = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)"));
const _prefixSelector = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/prefixSelector.js [app-client] (ecmascript)"));
const _pseudoElements = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pseudoElements.js [app-client] (ecmascript)");
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** @typedef {import('postcss-selector-parser').Root} Root */ /** @typedef {import('postcss-selector-parser').Selector} Selector */ /** @typedef {import('postcss-selector-parser').Pseudo} Pseudo */ /** @typedef {import('postcss-selector-parser').Node} Node */ /** @typedef {{format: string, respectPrefix: boolean}[]} RawFormats */ /** @typedef {import('postcss-selector-parser').Root} ParsedFormats */ /** @typedef {RawFormats | ParsedFormats} AcceptedFormats */ let MERGE = ":merge";
function formatVariantSelector(formats, { context, candidate }) {
    var _context_tailwindConfig_prefix;
    let prefix = (_context_tailwindConfig_prefix = context === null || context === void 0 ? void 0 : context.tailwindConfig.prefix) !== null && _context_tailwindConfig_prefix !== void 0 ? _context_tailwindConfig_prefix : "";
    // Parse the format selector into an AST
    let parsedFormats = formats.map((format)=>{
        let ast = (0, _postcssselectorparser.default)().astSync(format.format);
        return {
            ...format,
            ast: format.respectPrefix ? (0, _prefixSelector.default)(prefix, ast) : ast
        };
    });
    // We start with the candidate selector
    let formatAst = _postcssselectorparser.default.root({
        nodes: [
            _postcssselectorparser.default.selector({
                nodes: [
                    _postcssselectorparser.default.className({
                        value: (0, _escapeClassName.default)(candidate)
                    })
                ]
            })
        ]
    });
    // And iteratively merge each format selector into the candidate selector
    for (let { ast } of parsedFormats){
        [formatAst, ast] = handleMergePseudo(formatAst, ast);
        // 2. Merge the format selector into the current selector AST
        ast.walkNesting((nesting)=>nesting.replaceWith(...formatAst.nodes[0].nodes));
        // 3. Keep going!
        formatAst = ast;
    }
    return formatAst;
}
/**
 * Given any node in a selector this gets the "simple" selector it's a part of
 * A simple selector is just a list of nodes without any combinators
 * Technically :is(), :not(), :has(), etc… can have combinators but those are nested
 * inside the relevant node and won't be picked up so they're fine to ignore
 *
 * @param {Node} node
 * @returns {Node[]}
 **/ function simpleSelectorForNode(node) {
    /** @type {Node[]} */ let nodes = [];
    // Walk backwards until we hit a combinator node (or the start)
    while(node.prev() && node.prev().type !== "combinator"){
        node = node.prev();
    }
    // Now record all non-combinator nodes until we hit one (or the end)
    while(node && node.type !== "combinator"){
        nodes.push(node);
        node = node.next();
    }
    return nodes;
}
/**
 * Resorts the nodes in a selector to ensure they're in the correct order
 * Tags go before classes, and pseudo classes go after classes
 *
 * @param {Selector} sel
 * @returns {Selector}
 **/ function resortSelector(sel) {
    sel.sort((a, b)=>{
        if (a.type === "tag" && b.type === "class") {
            return -1;
        } else if (a.type === "class" && b.type === "tag") {
            return 1;
        } else if (a.type === "class" && b.type === "pseudo" && b.value.startsWith("::")) {
            return -1;
        } else if (a.type === "pseudo" && a.value.startsWith("::") && b.type === "class") {
            return 1;
        }
        return sel.index(a) - sel.index(b);
    });
    return sel;
}
function eliminateIrrelevantSelectors(sel, base) {
    let hasClassesMatchingCandidate = false;
    sel.walk((child)=>{
        if (child.type === "class" && child.value === base) {
            hasClassesMatchingCandidate = true;
            return false // Stop walking
            ;
        }
    });
    if (!hasClassesMatchingCandidate) {
        sel.remove();
    }
// We do NOT recursively eliminate sub selectors that don't have the base class
// as this is NOT a safe operation. For example, if we have:
// `.space-x-2 > :not([hidden]) ~ :not([hidden])`
// We cannot remove the [hidden] from the :not() because it would change the
// meaning of the selector.
// TODO: Can we do this for :matches, :is, and :where?
}
function finalizeSelector(current, formats, { context, candidate, base }) {
    var _context_tailwindConfig;
    var _context_tailwindConfig_separator;
    let separator = (_context_tailwindConfig_separator = context === null || context === void 0 ? void 0 : (_context_tailwindConfig = context.tailwindConfig) === null || _context_tailwindConfig === void 0 ? void 0 : _context_tailwindConfig.separator) !== null && _context_tailwindConfig_separator !== void 0 ? _context_tailwindConfig_separator : ":";
    // Split by the separator, but ignore the separator inside square brackets:
    //
    // E.g.: dark:lg:hover:[paint-order:markers]
    //           ┬  ┬     ┬            ┬
    //           │  │     │            ╰── We will not split here
    //           ╰──┴─────┴─────────────── We will split here
    //
    base = base !== null && base !== void 0 ? base : (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(candidate, separator).pop();
    // Parse the selector into an AST
    let selector = (0, _postcssselectorparser.default)().astSync(current);
    // Normalize escaped classes, e.g.:
    //
    // The idea would be to replace the escaped `base` in the selector with the
    // `format`. However, in css you can escape the same selector in a few
    // different ways. This would result in different strings and therefore we
    // can't replace it properly.
    //
    //               base: bg-[rgb(255,0,0)]
    //   base in selector: bg-\\[rgb\\(255\\,0\\,0\\)\\]
    //       escaped base: bg-\\[rgb\\(255\\2c 0\\2c 0\\)\\]
    //
    selector.walkClasses((node)=>{
        if (node.raws && node.value.includes(base)) {
            node.raws.value = (0, _escapeClassName.default)((0, _unesc.default)(node.raws.value));
        }
    });
    // Remove extraneous selectors that do not include the base candidate
    selector.each((sel)=>eliminateIrrelevantSelectors(sel, base));
    // If ffter eliminating irrelevant selectors, we end up with nothing
    // Then the whole "rule" this is associated with does not need to exist
    // We use `null` as a marker value for that case
    if (selector.length === 0) {
        return null;
    }
    // If there are no formats that means there were no variants added to the candidate
    // so we can just return the selector as-is
    let formatAst = Array.isArray(formats) ? formatVariantSelector(formats, {
        context,
        candidate
    }) : formats;
    if (formatAst === null) {
        return selector.toString();
    }
    let simpleStart = _postcssselectorparser.default.comment({
        value: "/*__simple__*/"
    });
    let simpleEnd = _postcssselectorparser.default.comment({
        value: "/*__simple__*/"
    });
    // We can safely replace the escaped base now, since the `base` section is
    // now in a normalized escaped value.
    selector.walkClasses((node)=>{
        if (node.value !== base) {
            return;
        }
        let parent = node.parent;
        let formatNodes = formatAst.nodes[0].nodes;
        // Perf optimization: if the parent is a single class we can just replace it and be done
        if (parent.nodes.length === 1) {
            node.replaceWith(...formatNodes);
            return;
        }
        let simpleSelector = simpleSelectorForNode(node);
        parent.insertBefore(simpleSelector[0], simpleStart);
        parent.insertAfter(simpleSelector[simpleSelector.length - 1], simpleEnd);
        for (let child of formatNodes){
            parent.insertBefore(simpleSelector[0], child.clone());
        }
        node.remove();
        // Re-sort the simple selector to ensure it's in the correct order
        simpleSelector = simpleSelectorForNode(simpleStart);
        let firstNode = parent.index(simpleStart);
        parent.nodes.splice(firstNode, simpleSelector.length, ...resortSelector(_postcssselectorparser.default.selector({
            nodes: simpleSelector
        })).nodes);
        simpleStart.remove();
        simpleEnd.remove();
    });
    // Remove unnecessary pseudo selectors that we used as placeholders
    selector.walkPseudos((p)=>{
        if (p.value === MERGE) {
            p.replaceWith(p.nodes);
        }
    });
    // Move pseudo elements to the end of the selector (if necessary)
    selector.each((sel)=>(0, _pseudoElements.movePseudos)(sel));
    return selector.toString();
}
function handleMergePseudo(selector, format) {
    /** @type {{pseudo: Pseudo, value: string}[]} */ let merges = [];
    // Find all :merge() pseudo-classes in `selector`
    selector.walkPseudos((pseudo)=>{
        if (pseudo.value === MERGE) {
            merges.push({
                pseudo,
                value: pseudo.nodes[0].toString()
            });
        }
    });
    // Find all :merge() "attachments" in `format` and attach them to the matching selector in `selector`
    format.walkPseudos((pseudo)=>{
        if (pseudo.value !== MERGE) {
            return;
        }
        let value = pseudo.nodes[0].toString();
        // Does `selector` contain a :merge() pseudo-class with the same value?
        let existing = merges.find((merge)=>merge.value === value);
        // Nope so there's nothing to do
        if (!existing) {
            return;
        }
        // Everything after `:merge()` up to the next combinator is what is attached to the merged selector
        let attachments = [];
        let next = pseudo.next();
        while(next && next.type !== "combinator"){
            attachments.push(next);
            next = next.next();
        }
        let combinator = next;
        existing.pseudo.parent.insertAfter(existing.pseudo, _postcssselectorparser.default.selector({
            nodes: attachments.map((node)=>node.clone())
        }));
        pseudo.remove();
        attachments.forEach((node)=>node.remove());
        // What about this case:
        // :merge(.group):focus > &
        // :merge(.group):hover &
        if (combinator && combinator.type === "combinator") {
            combinator.remove();
        }
    });
    return [
        selector,
        format
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/applyImportantSelector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyImportantSelector", {
    enumerable: true,
    get: function() {
        return applyImportantSelector;
    }
});
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _pseudoElements = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pseudoElements.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function applyImportantSelector(selector, important) {
    let sel = (0, _postcssselectorparser.default)().astSync(selector);
    sel.each((sel)=>{
        // For nesting, we only need to wrap a selector with :is() if it has a top-level combinator,
        // e.g. `.dark .text-white`, to be independent of DOM order. Any other selector, including
        // combinators inside of pseudos like `:where()`, are ok to nest.
        let shouldWrap = sel.nodes.some((node)=>node.type === "combinator");
        if (shouldWrap) {
            sel.nodes = [
                _postcssselectorparser.default.pseudo({
                    value: ":is",
                    nodes: [
                        sel.clone()
                    ]
                })
            ];
        }
        (0, _pseudoElements.movePseudos)(sel);
    });
    return `${important} ${sel.toString()}`;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/generateRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getClassNameFromSelector: function() {
        return getClassNameFromSelector;
    },
    resolveMatches: function() {
        return resolveMatches;
    },
    generateRules: function() {
        return generateRules;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _parseObjectStyles = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseObjectStyles.js [app-client] (ecmascript)"));
const _isPlainObject = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)"));
const _prefixSelector = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/prefixSelector.js [app-client] (ecmascript)"));
const _pluginUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pluginUtils.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
const _sharedState = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)"));
const _formatVariantSelector = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/formatVariantSelector.js [app-client] (ecmascript)");
const _nameClass = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/nameClass.js [app-client] (ecmascript)");
const _dataTypes = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/dataTypes.js [app-client] (ecmascript)");
const _setupContextUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupContextUtils.js [app-client] (ecmascript)");
const _isSyntacticallyValidPropertyValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isSyntacticallyValidPropertyValue.js [app-client] (ecmascript)"));
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
const _applyImportantSelector = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/applyImportantSelector.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
let classNameParser = (0, _postcssselectorparser.default)((selectors)=>{
    return selectors.first.filter(({ type })=>type === "class").pop().value;
});
function getClassNameFromSelector(selector) {
    return classNameParser.transformSync(selector);
}
// Generate match permutations for a class candidate, like:
// ['ring-offset-blue', '100']
// ['ring-offset', 'blue-100']
// ['ring', 'offset-blue-100']
// Example with dynamic classes:
// ['grid-cols', '[[linename],1fr,auto]']
// ['grid', 'cols-[[linename],1fr,auto]']
function* candidatePermutations(candidate) {
    let lastIndex = Infinity;
    while(lastIndex >= 0){
        let dashIdx;
        let wasSlash = false;
        if (lastIndex === Infinity && candidate.endsWith("]")) {
            let bracketIdx = candidate.indexOf("[");
            // If character before `[` isn't a dash or a slash, this isn't a dynamic class
            // eg. string[]
            if (candidate[bracketIdx - 1] === "-") {
                dashIdx = bracketIdx - 1;
            } else if (candidate[bracketIdx - 1] === "/") {
                dashIdx = bracketIdx - 1;
                wasSlash = true;
            } else {
                dashIdx = -1;
            }
        } else if (lastIndex === Infinity && candidate.includes("/")) {
            dashIdx = candidate.lastIndexOf("/");
            wasSlash = true;
        } else {
            dashIdx = candidate.lastIndexOf("-", lastIndex);
        }
        if (dashIdx < 0) {
            break;
        }
        let prefix = candidate.slice(0, dashIdx);
        let modifier = candidate.slice(wasSlash ? dashIdx : dashIdx + 1);
        lastIndex = dashIdx - 1;
        // TODO: This feels a bit hacky
        if (prefix === "" || modifier === "/") {
            continue;
        }
        yield [
            prefix,
            modifier
        ];
    }
}
function applyPrefix(matches, context) {
    if (matches.length === 0 || context.tailwindConfig.prefix === "") {
        return matches;
    }
    for (let match of matches){
        let [meta] = match;
        if (meta.options.respectPrefix) {
            let container = _postcss.default.root({
                nodes: [
                    match[1].clone()
                ]
            });
            let classCandidate = match[1].raws.tailwind.classCandidate;
            container.walkRules((r)=>{
                // If this is a negative utility with a dash *before* the prefix we
                // have to ensure that the generated selector matches the candidate
                // Not doing this will cause `-tw-top-1` to generate the class `.tw--top-1`
                // The disconnect between candidate <-> class can cause @apply to hard crash.
                let shouldPrependNegative = classCandidate.startsWith("-");
                r.selector = (0, _prefixSelector.default)(context.tailwindConfig.prefix, r.selector, shouldPrependNegative);
            });
            match[1] = container.nodes[0];
        }
    }
    return matches;
}
function applyImportant(matches, classCandidate) {
    if (matches.length === 0) {
        return matches;
    }
    let result = [];
    function isInKeyframes(rule) {
        return rule.parent && rule.parent.type === "atrule" && rule.parent.name === "keyframes";
    }
    for (let [meta, rule] of matches){
        let container = _postcss.default.root({
            nodes: [
                rule.clone()
            ]
        });
        container.walkRules((r)=>{
            // Declarations inside keyframes cannot be marked as important
            // They will be ignored by the browser
            if (isInKeyframes(r)) {
                return;
            }
            let ast = (0, _postcssselectorparser.default)().astSync(r.selector);
            // Remove extraneous selectors that do not include the base candidate
            ast.each((sel)=>(0, _formatVariantSelector.eliminateIrrelevantSelectors)(sel, classCandidate));
            // Update all instances of the base candidate to include the important marker
            (0, _pluginUtils.updateAllClasses)(ast, (className)=>className === classCandidate ? `!${className}` : className);
            let newSelector = ast.toString();
            if (newSelector.trim() === "") {
                r.remove();
                return;
            }
            r.selector = newSelector;
            r.walkDecls((d)=>d.important = true);
        });
        result.push([
            {
                ...meta,
                important: true
            },
            container.nodes[0]
        ]);
    }
    return result;
}
// Takes a list of rule tuples and applies a variant like `hover`, sm`,
// whatever to it. We used to do some extra caching here to avoid generating
// a variant of the same rule more than once, but this was never hit because
// we cache at the entire selector level further up the tree.
//
// Technically you can get a cache hit if you have `hover:focus:text-center`
// and `focus:hover:text-center` in the same project, but it doesn't feel
// worth the complexity for that case.
function applyVariant(variant, matches, context) {
    if (matches.length === 0) {
        return matches;
    }
    /** @type {{modifier: string | null, value: string | null}} */ let args = {
        modifier: null,
        value: _sharedState.NONE
    };
    // Retrieve "modifier"
    {
        let [baseVariant, ...modifiers] = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(variant, "/");
        // This is a hack to support variants with `/` in them, like `ar-1/10/20:text-red-500`
        // In this case 1/10 is a value but /20 is a modifier
        if (modifiers.length > 1) {
            baseVariant = baseVariant + "/" + modifiers.slice(0, -1).join("/");
            modifiers = modifiers.slice(-1);
        }
        if (modifiers.length && !context.variantMap.has(variant)) {
            variant = baseVariant;
            args.modifier = modifiers[0];
            if (!(0, _featureFlags.flagEnabled)(context.tailwindConfig, "generalizedModifiers")) {
                return [];
            }
        }
    }
    // Retrieve "arbitrary value"
    if (variant.endsWith("]") && !variant.startsWith("[")) {
        // We either have:
        //   @[200px]
        //   group-[:hover]
        //
        // But we don't want:
        //   @-[200px]        (`-` is incorrect)
        //   group[:hover]    (`-` is missing)
        let match = /(.)(-?)\[(.*)\]/g.exec(variant);
        if (match) {
            let [, char, separator, value] = match;
            // @-[200px] case
            if (char === "@" && separator === "-") return [];
            // group[:hover] case
            if (char !== "@" && separator === "") return [];
            variant = variant.replace(`${separator}[${value}]`, "");
            args.value = value;
        }
    }
    // Register arbitrary variants
    if (isArbitraryValue(variant) && !context.variantMap.has(variant)) {
        let sort = context.offsets.recordVariant(variant);
        let selector = (0, _dataTypes.normalize)(variant.slice(1, -1));
        let selectors = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(selector, ",");
        // We do not support multiple selectors for arbitrary variants
        if (selectors.length > 1) {
            return [];
        }
        if (!selectors.every(_setupContextUtils.isValidVariantFormatString)) {
            return [];
        }
        let records = selectors.map((sel, idx)=>[
                context.offsets.applyParallelOffset(sort, idx),
                (0, _setupContextUtils.parseVariant)(sel.trim())
            ]);
        context.variantMap.set(variant, records);
    }
    if (context.variantMap.has(variant)) {
        var _context_variantOptions_get;
        let isArbitraryVariant = isArbitraryValue(variant);
        var _context_variantOptions_get_INTERNAL_FEATURES;
        let internalFeatures = (_context_variantOptions_get_INTERNAL_FEATURES = (_context_variantOptions_get = context.variantOptions.get(variant)) === null || _context_variantOptions_get === void 0 ? void 0 : _context_variantOptions_get[_setupContextUtils.INTERNAL_FEATURES]) !== null && _context_variantOptions_get_INTERNAL_FEATURES !== void 0 ? _context_variantOptions_get_INTERNAL_FEATURES : {};
        let variantFunctionTuples = context.variantMap.get(variant).slice();
        let result = [];
        let respectPrefix = (()=>{
            if (isArbitraryVariant) return false;
            if (internalFeatures.respectPrefix === false) return false;
            return true;
        })();
        for (let [meta, rule] of matches){
            // Don't generate variants for user css
            if (meta.layer === "user") {
                continue;
            }
            let container = _postcss.default.root({
                nodes: [
                    rule.clone()
                ]
            });
            for (let [variantSort, variantFunction, containerFromArray] of variantFunctionTuples){
                let clone = (containerFromArray !== null && containerFromArray !== void 0 ? containerFromArray : container).clone();
                let collectedFormats = [];
                function prepareBackup() {
                    // Already prepared, chicken out
                    if (clone.raws.neededBackup) {
                        return;
                    }
                    clone.raws.neededBackup = true;
                    clone.walkRules((rule)=>rule.raws.originalSelector = rule.selector);
                }
                function modifySelectors(modifierFunction) {
                    prepareBackup();
                    clone.each((rule)=>{
                        if (rule.type !== "rule") {
                            return;
                        }
                        rule.selectors = rule.selectors.map((selector)=>{
                            return modifierFunction({
                                get className () {
                                    return getClassNameFromSelector(selector);
                                },
                                selector
                            });
                        });
                    });
                    return clone;
                }
                let ruleWithVariant = variantFunction({
                    // Public API
                    get container () {
                        prepareBackup();
                        return clone;
                    },
                    separator: context.tailwindConfig.separator,
                    modifySelectors,
                    // Private API for now
                    wrap (wrapper) {
                        let nodes = clone.nodes;
                        clone.removeAll();
                        wrapper.append(nodes);
                        clone.append(wrapper);
                    },
                    format (selectorFormat) {
                        collectedFormats.push({
                            format: selectorFormat,
                            respectPrefix
                        });
                    },
                    args
                });
                // It can happen that a list of format strings is returned from within the function. In that
                // case, we have to process them as well. We can use the existing `variantSort`.
                if (Array.isArray(ruleWithVariant)) {
                    for (let [idx, variantFunction] of ruleWithVariant.entries()){
                        // This is a little bit scary since we are pushing to an array of items that we are
                        // currently looping over. However, you can also think of it like a processing queue
                        // where you keep handling jobs until everything is done and each job can queue more
                        // jobs if needed.
                        variantFunctionTuples.push([
                            context.offsets.applyParallelOffset(variantSort, idx),
                            variantFunction,
                            // If the clone has been modified we have to pass that back
                            // though so each rule can use the modified container
                            clone.clone()
                        ]);
                    }
                    continue;
                }
                if (typeof ruleWithVariant === "string") {
                    collectedFormats.push({
                        format: ruleWithVariant,
                        respectPrefix
                    });
                }
                if (ruleWithVariant === null) {
                    continue;
                }
                // We had to backup selectors, therefore we assume that somebody touched
                // `container` or `modifySelectors`. Let's see if they did, so that we
                // can restore the selectors, and collect the format strings.
                if (clone.raws.neededBackup) {
                    delete clone.raws.neededBackup;
                    clone.walkRules((rule)=>{
                        let before = rule.raws.originalSelector;
                        if (!before) return;
                        delete rule.raws.originalSelector;
                        if (before === rule.selector) return; // No mutation happened
                        let modified = rule.selector;
                        // Rebuild the base selector, this is what plugin authors would do
                        // as well. E.g.: `${variant}${separator}${className}`.
                        // However, plugin authors probably also prepend or append certain
                        // classes, pseudos, ids, ...
                        let rebuiltBase = (0, _postcssselectorparser.default)((selectors)=>{
                            selectors.walkClasses((classNode)=>{
                                classNode.value = `${variant}${context.tailwindConfig.separator}${classNode.value}`;
                            });
                        }).processSync(before);
                        // Now that we know the original selector, the new selector, and
                        // the rebuild part in between, we can replace the part that plugin
                        // authors need to rebuild with `&`, and eventually store it in the
                        // collectedFormats. Similar to what `format('...')` would do.
                        //
                        // E.g.:
                        //                   variant: foo
                        //                  selector: .markdown > p
                        //      modified (by plugin): .foo .foo\\:markdown > p
                        //    rebuiltBase (internal): .foo\\:markdown > p
                        //                    format: .foo &
                        collectedFormats.push({
                            format: modified.replace(rebuiltBase, "&"),
                            respectPrefix
                        });
                        rule.selector = before;
                    });
                }
                // This tracks the originating layer for the variant
                // For example:
                // .sm:underline {} is a variant of something in the utilities layer
                // .sm:container {} is a variant of the container component
                clone.nodes[0].raws.tailwind = {
                    ...clone.nodes[0].raws.tailwind,
                    parentLayer: meta.layer
                };
                var _meta_collectedFormats;
                let withOffset = [
                    {
                        ...meta,
                        sort: context.offsets.applyVariantOffset(meta.sort, variantSort, Object.assign(args, context.variantOptions.get(variant))),
                        collectedFormats: ((_meta_collectedFormats = meta.collectedFormats) !== null && _meta_collectedFormats !== void 0 ? _meta_collectedFormats : []).concat(collectedFormats)
                    },
                    clone.nodes[0]
                ];
                result.push(withOffset);
            }
        }
        return result;
    }
    return [];
}
function parseRules(rule, cache, options = {}) {
    // PostCSS node
    if (!(0, _isPlainObject.default)(rule) && !Array.isArray(rule)) {
        return [
            [
                rule
            ],
            options
        ];
    }
    // Tuple
    if (Array.isArray(rule)) {
        return parseRules(rule[0], cache, rule[1]);
    }
    // Simple object
    if (!cache.has(rule)) {
        cache.set(rule, (0, _parseObjectStyles.default)(rule));
    }
    return [
        cache.get(rule),
        options
    ];
}
const IS_VALID_PROPERTY_NAME = /^[a-z_-]/;
function isValidPropName(name) {
    return IS_VALID_PROPERTY_NAME.test(name);
}
/**
 * @param {string} declaration
 * @returns {boolean}
 */ function looksLikeUri(declaration) {
    // Quick bailout for obvious non-urls
    // This doesn't support schemes that don't use a leading // but that's unlikely to be a problem
    if (!declaration.includes("://")) {
        return false;
    }
    try {
        const url = new URL(declaration);
        return url.scheme !== "" && url.host !== "";
    } catch (err) {
        // Definitely not a valid url
        return false;
    }
}
function isParsableNode(node) {
    let isParsable = true;
    node.walkDecls((decl)=>{
        if (!isParsableCssValue(decl.prop, decl.value)) {
            isParsable = false;
            return false;
        }
    });
    return isParsable;
}
function isParsableCssValue(property, value) {
    // We don't want to to treat [https://example.com] as a custom property
    // Even though, according to the CSS grammar, it's a totally valid CSS declaration
    // So we short-circuit here by checking if the custom property looks like a url
    if (looksLikeUri(`${property}:${value}`)) {
        return false;
    }
    try {
        _postcss.default.parse(`a{${property}:${value}}`).toResult();
        return true;
    } catch (err) {
        return false;
    }
}
function extractArbitraryProperty(classCandidate, context) {
    var _classCandidate_match;
    let [, property, value] = (_classCandidate_match = classCandidate.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/)) !== null && _classCandidate_match !== void 0 ? _classCandidate_match : [];
    if (value === undefined) {
        return null;
    }
    if (!isValidPropName(property)) {
        return null;
    }
    if (!(0, _isSyntacticallyValidPropertyValue.default)(value)) {
        return null;
    }
    let normalized = (0, _dataTypes.normalize)(value, {
        property
    });
    if (!isParsableCssValue(property, normalized)) {
        return null;
    }
    let sort = context.offsets.arbitraryProperty(classCandidate);
    return [
        [
            {
                sort,
                layer: "utilities",
                options: {
                    respectImportant: true
                }
            },
            ()=>({
                    [(0, _nameClass.asClass)(classCandidate)]: {
                        [property]: normalized
                    }
                })
        ]
    ];
}
function* resolveMatchedPlugins(classCandidate, context) {
    if (context.candidateRuleMap.has(classCandidate)) {
        yield [
            context.candidateRuleMap.get(classCandidate),
            "DEFAULT"
        ];
    }
    yield* function*(arbitraryPropertyRule) {
        if (arbitraryPropertyRule !== null) {
            yield [
                arbitraryPropertyRule,
                "DEFAULT"
            ];
        }
    }(extractArbitraryProperty(classCandidate, context));
    let candidatePrefix = classCandidate;
    let negative = false;
    const twConfigPrefix = context.tailwindConfig.prefix;
    const twConfigPrefixLen = twConfigPrefix.length;
    const hasMatchingPrefix = candidatePrefix.startsWith(twConfigPrefix) || candidatePrefix.startsWith(`-${twConfigPrefix}`);
    if (candidatePrefix[twConfigPrefixLen] === "-" && hasMatchingPrefix) {
        negative = true;
        candidatePrefix = twConfigPrefix + candidatePrefix.slice(twConfigPrefixLen + 1);
    }
    if (negative && context.candidateRuleMap.has(candidatePrefix)) {
        yield [
            context.candidateRuleMap.get(candidatePrefix),
            "-DEFAULT"
        ];
    }
    for (let [prefix, modifier] of candidatePermutations(candidatePrefix)){
        if (context.candidateRuleMap.has(prefix)) {
            yield [
                context.candidateRuleMap.get(prefix),
                negative ? `-${modifier}` : modifier
            ];
        }
    }
}
function splitWithSeparator(input, separator) {
    if (input === _sharedState.NOT_ON_DEMAND) {
        return [
            _sharedState.NOT_ON_DEMAND
        ];
    }
    return (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(input, separator);
}
function* recordCandidates(matches, classCandidate) {
    for (const match of matches){
        var _match__options;
        var _match__options_preserveSource;
        match[1].raws.tailwind = {
            ...match[1].raws.tailwind,
            classCandidate,
            preserveSource: (_match__options_preserveSource = (_match__options = match[0].options) === null || _match__options === void 0 ? void 0 : _match__options.preserveSource) !== null && _match__options_preserveSource !== void 0 ? _match__options_preserveSource : false
        };
        yield match;
    }
}
function* resolveMatches(candidate, context) {
    let separator = context.tailwindConfig.separator;
    let [classCandidate, ...variants] = splitWithSeparator(candidate, separator).reverse();
    let important = false;
    if (classCandidate.startsWith("!")) {
        important = true;
        classCandidate = classCandidate.slice(1);
    }
    // TODO: Reintroduce this in ways that doesn't break on false positives
    // function sortAgainst(toSort, against) {
    //   return toSort.slice().sort((a, z) => {
    //     return bigSign(against.get(a)[0] - against.get(z)[0])
    //   })
    // }
    // let sorted = sortAgainst(variants, context.variantMap)
    // if (sorted.toString() !== variants.toString()) {
    //   let corrected = sorted.reverse().concat(classCandidate).join(':')
    //   throw new Error(`Class ${candidate} should be written as ${corrected}`)
    // }
    for (let matchedPlugins of resolveMatchedPlugins(classCandidate, context)){
        let matches = [];
        let typesByMatches = new Map();
        let [plugins, modifier] = matchedPlugins;
        let isOnlyPlugin = plugins.length === 1;
        for (let [sort, plugin] of plugins){
            let matchesPerPlugin = [];
            if (typeof plugin === "function") {
                for (let ruleSet of [].concat(plugin(modifier, {
                    isOnlyPlugin
                }))){
                    let [rules, options] = parseRules(ruleSet, context.postCssNodeCache);
                    for (let rule of rules){
                        matchesPerPlugin.push([
                            {
                                ...sort,
                                options: {
                                    ...sort.options,
                                    ...options
                                }
                            },
                            rule
                        ]);
                    }
                }
            } else if (modifier === "DEFAULT" || modifier === "-DEFAULT") {
                let ruleSet = plugin;
                let [rules, options] = parseRules(ruleSet, context.postCssNodeCache);
                for (let rule of rules){
                    matchesPerPlugin.push([
                        {
                            ...sort,
                            options: {
                                ...sort.options,
                                ...options
                            }
                        },
                        rule
                    ]);
                }
            }
            if (matchesPerPlugin.length > 0) {
                var _sort_options;
                var _sort_options_types, _sort_options1;
                let matchingTypes = Array.from((0, _pluginUtils.getMatchingTypes)((_sort_options_types = (_sort_options = sort.options) === null || _sort_options === void 0 ? void 0 : _sort_options.types) !== null && _sort_options_types !== void 0 ? _sort_options_types : [], modifier, (_sort_options1 = sort.options) !== null && _sort_options1 !== void 0 ? _sort_options1 : {}, context.tailwindConfig)).map(([_, type])=>type);
                if (matchingTypes.length > 0) {
                    typesByMatches.set(matchesPerPlugin, matchingTypes);
                }
                matches.push(matchesPerPlugin);
            }
        }
        if (isArbitraryValue(modifier)) {
            if (matches.length > 1) {
                // Partition plugins in 2 categories so that we can start searching in the plugins that
                // don't have `any` as a type first.
                let [withAny, withoutAny] = matches.reduce((group, plugin)=>{
                    let hasAnyType = plugin.some(([{ options }])=>options.types.some(({ type })=>type === "any"));
                    if (hasAnyType) {
                        group[0].push(plugin);
                    } else {
                        group[1].push(plugin);
                    }
                    return group;
                }, [
                    [],
                    []
                ]);
                function findFallback(matches) {
                    // If only a single plugin matches, let's take that one
                    if (matches.length === 1) {
                        return matches[0];
                    }
                    // Otherwise, find the plugin that creates a valid rule given the arbitrary value, and
                    // also has the correct type which preferOnConflicts the plugin in case of clashes.
                    return matches.find((rules)=>{
                        let matchingTypes = typesByMatches.get(rules);
                        return rules.some(([{ options }, rule])=>{
                            if (!isParsableNode(rule)) {
                                return false;
                            }
                            return options.types.some(({ type, preferOnConflict })=>matchingTypes.includes(type) && preferOnConflict);
                        });
                    });
                }
                var _findFallback;
                // Try to find a fallback plugin, because we already know that multiple plugins matched for
                // the given arbitrary value.
                let fallback = (_findFallback = findFallback(withoutAny)) !== null && _findFallback !== void 0 ? _findFallback : findFallback(withAny);
                if (fallback) {
                    matches = [
                        fallback
                    ];
                } else {
                    var _typesByMatches_get;
                    let typesPerPlugin = matches.map((match)=>new Set([
                            ...(_typesByMatches_get = typesByMatches.get(match)) !== null && _typesByMatches_get !== void 0 ? _typesByMatches_get : []
                        ]));
                    // Remove duplicates, so that we can detect proper unique types for each plugin.
                    for (let pluginTypes of typesPerPlugin){
                        for (let type of pluginTypes){
                            let removeFromOwnGroup = false;
                            for (let otherGroup of typesPerPlugin){
                                if (pluginTypes === otherGroup) continue;
                                if (otherGroup.has(type)) {
                                    otherGroup.delete(type);
                                    removeFromOwnGroup = true;
                                }
                            }
                            if (removeFromOwnGroup) pluginTypes.delete(type);
                        }
                    }
                    let messages = [];
                    for (let [idx, group] of typesPerPlugin.entries()){
                        for (let type of group){
                            let rules = matches[idx].map(([, rule])=>rule).flat().map((rule)=>rule.toString().split("\n").slice(1, -1) // Remove selector and closing '}'
                                .map((line)=>line.trim()).map((x)=>`      ${x}`) // Re-indent
                                .join("\n")).join("\n\n");
                            messages.push(`  Use \`${candidate.replace("[", `[${type}:`)}\` for \`${rules.trim()}\``);
                            break;
                        }
                    }
                    _log.default.warn([
                        `The class \`${candidate}\` is ambiguous and matches multiple utilities.`,
                        ...messages,
                        `If this is content and not a class, replace it with \`${candidate.replace("[", "&lsqb;").replace("]", "&rsqb;")}\` to silence this warning.`
                    ]);
                    continue;
                }
            }
            matches = matches.map((list)=>list.filter((match)=>isParsableNode(match[1])));
        }
        matches = matches.flat();
        matches = Array.from(recordCandidates(matches, classCandidate));
        matches = applyPrefix(matches, context);
        if (important) {
            matches = applyImportant(matches, classCandidate);
        }
        for (let variant of variants){
            matches = applyVariant(variant, matches, context);
        }
        for (let match of matches){
            match[1].raws.tailwind = {
                ...match[1].raws.tailwind,
                candidate
            };
            // Apply final format selector
            match = applyFinalFormat(match, {
                context,
                candidate
            });
            // Skip rules with invalid selectors
            // This will cause the candidate to be added to the "not class"
            // cache skipping it entirely for future builds
            if (match === null) {
                continue;
            }
            yield match;
        }
    }
}
function applyFinalFormat(match, { context, candidate }) {
    if (!match[0].collectedFormats) {
        return match;
    }
    let isValid = true;
    let finalFormat;
    try {
        finalFormat = (0, _formatVariantSelector.formatVariantSelector)(match[0].collectedFormats, {
            context,
            candidate
        });
    } catch  {
        // The format selector we produced is invalid
        // This could be because:
        // - A bug exists
        // - A plugin introduced an invalid variant selector (ex: `addVariant('foo', '&;foo')`)
        // - The user used an invalid arbitrary variant (ex: `[&;foo]:underline`)
        // Either way the build will fail because of this
        // We would rather that the build pass "silently" given that this could
        // happen because of picking up invalid things when scanning content
        // So we'll throw out the candidate instead
        return null;
    }
    let container = _postcss.default.root({
        nodes: [
            match[1].clone()
        ]
    });
    container.walkRules((rule)=>{
        if (inKeyframes(rule)) {
            return;
        }
        try {
            let selector = (0, _formatVariantSelector.finalizeSelector)(rule.selector, finalFormat, {
                candidate,
                context
            });
            // Finalize Selector determined that this candidate is irrelevant
            // TODO: This elimination should happen earlier so this never happens
            if (selector === null) {
                rule.remove();
                return;
            }
            rule.selector = selector;
        } catch  {
            // If this selector is invalid we also want to skip it
            // But it's likely that being invalid here means there's a bug in a plugin rather than too loosely matching content
            isValid = false;
            return false;
        }
    });
    if (!isValid) {
        return null;
    }
    // If all rules have been eliminated we can skip this candidate entirely
    if (container.nodes.length === 0) {
        return null;
    }
    match[1] = container.nodes[0];
    return match;
}
function inKeyframes(rule) {
    return rule.parent && rule.parent.type === "atrule" && rule.parent.name === "keyframes";
}
function getImportantStrategy(important) {
    if (important === true) {
        return (rule)=>{
            if (inKeyframes(rule)) {
                return;
            }
            rule.walkDecls((d)=>{
                if (d.parent.type === "rule" && !inKeyframes(d.parent)) {
                    d.important = true;
                }
            });
        };
    }
    if (typeof important === "string") {
        return (rule)=>{
            if (inKeyframes(rule)) {
                return;
            }
            rule.selectors = rule.selectors.map((selector)=>{
                return (0, _applyImportantSelector.applyImportantSelector)(selector, important);
            });
        };
    }
}
function generateRules(candidates, context, isSorting = false) {
    let allRules = [];
    let strategy = getImportantStrategy(context.tailwindConfig.important);
    for (let candidate of candidates){
        if (context.notClassCache.has(candidate)) {
            continue;
        }
        if (context.candidateRuleCache.has(candidate)) {
            allRules = allRules.concat(Array.from(context.candidateRuleCache.get(candidate)));
            continue;
        }
        let matches = Array.from(resolveMatches(candidate, context));
        if (matches.length === 0) {
            context.notClassCache.add(candidate);
            continue;
        }
        context.classCache.set(candidate, matches);
        var _context_candidateRuleCache_get;
        let rules = (_context_candidateRuleCache_get = context.candidateRuleCache.get(candidate)) !== null && _context_candidateRuleCache_get !== void 0 ? _context_candidateRuleCache_get : new Set();
        context.candidateRuleCache.set(candidate, rules);
        for (const match of matches){
            let [{ sort, options }, rule] = match;
            if (options.respectImportant && strategy) {
                let container = _postcss.default.root({
                    nodes: [
                        rule.clone()
                    ]
                });
                container.walkRules(strategy);
                rule = container.nodes[0];
            }
            // Note: We have to clone rules during sorting
            // so we eliminate some shared mutable state
            let newEntry = [
                sort,
                isSorting ? rule.clone() : rule
            ];
            rules.add(newEntry);
            context.ruleCache.add(newEntry);
            allRules.push(newEntry);
        }
    }
    return allRules;
}
function isArbitraryValue(input) {
    return input.startsWith("[") && input.endsWith("]");
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/cacheInvalidation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasContentChanged", {
    enumerable: true,
    get: function() {
        return hasContentChanged;
    }
});
const _crypto = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)"));
const _sharedState = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
/**
 * Calculate the hash of a string.
 *
 * This doesn't need to be cryptographically secure or
 * anything like that since it's used only to detect
 * when the CSS changes to invalidate the context.
 *
 * This is wrapped in a try/catch because it's really dependent
 * on how Node itself is build and the environment and OpenSSL
 * version / build that is installed on the user's machine.
 *
 * Based on the environment this can just outright fail.
 *
 * See https://github.com/nodejs/node/issues/40455
 *
 * @param {string} str
 */ function getHash(str) {
    try {
        return _crypto.default.createHash("md5").update(str, "utf-8").digest("binary");
    } catch (err) {
        return "";
    }
}
function hasContentChanged(sourcePath, root) {
    let css = root.toString();
    // We only care about files with @tailwind directives
    // Other files use an existing context
    if (!css.includes("@tailwind")) {
        return false;
    }
    let existingHash = _sharedState.sourceHashMap.get(sourcePath);
    let rootHash = getHash(css);
    let didChange = existingHash !== rootHash;
    _sharedState.sourceHashMap.set(sourcePath, rootHash);
    return didChange;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/bigSign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return bigSign;
    }
});
function bigSign(bigIntValue) {
    return (bigIntValue > 0n) - (bigIntValue < 0n);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/remap-bitfield.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
/**
 * We must remap all the old bits to new bits for each set variant
 * Only arbitrary variants are considered as those are the only
 * ones that need to be re-sorted at this time
 *
 * An iterated process that removes and sets individual bits simultaneously
 * will not work because we may have a new bit that is also a later old bit
 * This means that we would be removing a previously set bit which we don't
 * want to do
 *
 * For example (assume `bN` = `1<<N`)
 * Given the "total" mapping `[[b1, b3], [b2, b4], [b3, b1], [b4, b2]]`
 * The mapping is "total" because:
 * 1. Every input and output is accounted for
 * 2. All combinations are unique
 * 3. No one input maps to multiple outputs and vice versa
 * And, given an offset with all bits set:
 * V = b1 | b2 | b3 | b4
 *
 * Let's explore the issue with removing and setting bits simultaneously:
 * V & ~b1 | b3 = b2 | b3 | b4
 * V & ~b2 | b4 = b3 | b4
 * V & ~b3 | b1 = b1 | b4
 * V & ~b4 | b2 = b1 | b2
 *
 * As you can see, we end up with the wrong result.
 * This is because we're removing a bit that was previously set.
 * And, thus the final result is missing b3 and b4.
 *
 * Now, let's explore the issue with removing the bits first:
 * V & ~b1 = b2 | b3 | b4
 * V & ~b2 = b3 | b4
 * V & ~b3 = b4
 * V & ~b4 = 0
 *
 * And then setting the bits:
 * V | b3 = b3
 * V | b4 = b3 | b4
 * V | b1 = b1 | b3 | b4
 * V | b2 = b1 | b2 | b3 | b4
 *
 * We get the correct result because we're not removing any bits that were
 * previously set thus properly remapping the bits to the new order
 *
 * To collect this into a single operation that can be done simultaneously
 * we must first create a mask for the old bits that are set and a mask for
 * the new bits that are set. Then we can remove the old bits and set the new
 * bits simultaneously in a "single" operation like so:
 * OldMask = b1 | b2 | b3 | b4
 * NewMask = b3 | b4 | b1 | b2
 *
 * So this:
 * V & ~oldMask | newMask
 *
 * Expands to this:
 * V & ~b1 & ~b2 & ~b3 & ~b4 | b3 | b4 | b1 | b2
 *
 * Which becomes this:
 * b1 | b2 | b3 | b4
 *
 * Which is the correct result!
 *
 * @param {bigint} num
 * @param {[bigint, bigint][]} mapping
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "remapBitfield", {
    enumerable: true,
    get: function() {
        return remapBitfield;
    }
});
function remapBitfield(num, mapping) {
    // Create masks for the old and new bits that are set
    let oldMask = 0n;
    let newMask = 0n;
    for (let [oldBit, newBit] of mapping){
        if (num & oldBit) {
            oldMask = oldMask | oldBit;
            newMask = newMask | newBit;
        }
    }
    // Remove all old bits
    // Set all new bits
    return num & ~oldMask | newMask;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/offsets.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Offsets", {
    enumerable: true,
    get: function() {
        return Offsets;
    }
});
const _bigSign = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/bigSign.js [app-client] (ecmascript)"));
const _remapbitfield = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/remap-bitfield.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Offsets {
    constructor(){
        /**
     * Offsets for the next rule in a given layer
     *
     * @type {Record<Layer, bigint>}
     */ this.offsets = {
            defaults: 0n,
            base: 0n,
            components: 0n,
            utilities: 0n,
            variants: 0n,
            user: 0n
        };
        /**
     * Positions for a given layer
     *
     * @type {Record<Layer, bigint>}
     */ this.layerPositions = {
            defaults: 0n,
            base: 1n,
            components: 2n,
            utilities: 3n,
            // There isn't technically a "user" layer, but we need to give it a position
            // Because it's used for ordering user-css from @apply
            user: 4n,
            variants: 5n
        };
        /**
     * The total number of functions currently registered across all variants (including arbitrary variants)
     *
     * @type {bigint}
     */ this.reservedVariantBits = 0n;
        /**
     * Positions for a given variant
     *
     * @type {Map<string, bigint>}
     */ this.variantOffsets = new Map();
    }
    /**
   * @param {Layer} layer
   * @returns {RuleOffset}
   */ create(layer) {
        return {
            layer,
            parentLayer: layer,
            arbitrary: 0n,
            variants: 0n,
            parallelIndex: 0n,
            index: this.offsets[layer]++,
            propertyOffset: 0n,
            property: "",
            options: []
        };
    }
    /**
   * @param {string} name
   * @returns {RuleOffset}
   */ arbitraryProperty(name) {
        return {
            ...this.create("utilities"),
            arbitrary: 1n,
            property: name
        };
    }
    /**
   * Get the offset for a variant
   *
   * @param {string} variant
   * @param {number} index
   * @returns {RuleOffset}
   */ forVariant(variant, index = 0) {
        let offset = this.variantOffsets.get(variant);
        if (offset === undefined) {
            throw new Error(`Cannot find offset for unknown variant ${variant}`);
        }
        return {
            ...this.create("variants"),
            variants: offset << BigInt(index)
        };
    }
    /**
   * @param {RuleOffset} rule
   * @param {RuleOffset} variant
   * @param {VariantOption} options
   * @returns {RuleOffset}
   */ applyVariantOffset(rule, variant, options) {
        options.variant = variant.variants;
        return {
            ...rule,
            layer: "variants",
            parentLayer: rule.layer === "variants" ? rule.parentLayer : rule.layer,
            variants: rule.variants | variant.variants,
            options: options.sort ? [].concat(options, rule.options) : rule.options,
            // TODO: Technically this is wrong. We should be handling parallel index on a per variant basis.
            // We'll take the max of all the parallel indexes for now.
            // @ts-ignore
            parallelIndex: max([
                rule.parallelIndex,
                variant.parallelIndex
            ])
        };
    }
    /**
   * @param {RuleOffset} offset
   * @param {number} parallelIndex
   * @returns {RuleOffset}
   */ applyParallelOffset(offset, parallelIndex) {
        return {
            ...offset,
            parallelIndex: BigInt(parallelIndex)
        };
    }
    /**
   * Each variant gets 1 bit per function / rule registered.
   * This is because multiple variants can be applied to a single rule and we need to know which ones are present and which ones are not.
   * Additionally, every unique group of variants is grouped together in the stylesheet.
   *
   * This grouping is order-independent. For instance, we do not differentiate between `hover:focus` and `focus:hover`.
   *
   * @param {string[]} variants
   * @param {(name: string) => number} getLength
   */ recordVariants(variants, getLength) {
        for (let variant of variants){
            this.recordVariant(variant, getLength(variant));
        }
    }
    /**
   * The same as `recordVariants` but for a single arbitrary variant at runtime.
   * @param {string} variant
   * @param {number} fnCount
   *
   * @returns {RuleOffset} The highest offset for this variant
   */ recordVariant(variant, fnCount = 1) {
        this.variantOffsets.set(variant, 1n << this.reservedVariantBits);
        // Ensure space is reserved for each "function" in the parallel variant
        // by offsetting the next variant by the number of parallel variants
        // in the one we just added.
        // Single functions that return parallel variants are NOT handled separately here
        // They're offset by 1 (or the number of functions) as usual
        // And each rule returned is tracked separately since the functions are evaluated lazily.
        // @see `RuleOffset.parallelIndex`
        this.reservedVariantBits += BigInt(fnCount);
        return {
            ...this.create("variants"),
            variants: this.variantOffsets.get(variant)
        };
    }
    /**
   * @param {RuleOffset} a
   * @param {RuleOffset} b
   * @returns {bigint}
   */ compare(a, b) {
        // Sort layers together
        if (a.layer !== b.layer) {
            return this.layerPositions[a.layer] - this.layerPositions[b.layer];
        }
        // When sorting the `variants` layer, we need to sort based on the parent layer as well within
        // this variants layer.
        if (a.parentLayer !== b.parentLayer) {
            return this.layerPositions[a.parentLayer] - this.layerPositions[b.parentLayer];
        }
        // Sort based on the sorting function
        for (let aOptions of a.options){
            for (let bOptions of b.options){
                if (aOptions.id !== bOptions.id) continue;
                if (!aOptions.sort || !bOptions.sort) continue;
                var _max;
                let maxFnVariant = (_max = max([
                    aOptions.variant,
                    bOptions.variant
                ])) !== null && _max !== void 0 ? _max : 0n;
                // Create a mask of 0s from bits 1..N where N represents the mask of the Nth bit
                let mask = ~(maxFnVariant | maxFnVariant - 1n);
                let aVariantsAfterFn = a.variants & mask;
                let bVariantsAfterFn = b.variants & mask;
                // If the variants the same, we _can_ sort them
                if (aVariantsAfterFn !== bVariantsAfterFn) {
                    continue;
                }
                let result = aOptions.sort({
                    value: aOptions.value,
                    modifier: aOptions.modifier
                }, {
                    value: bOptions.value,
                    modifier: bOptions.modifier
                });
                if (result !== 0) return result;
            }
        }
        // Sort variants in the order they were registered
        if (a.variants !== b.variants) {
            return a.variants - b.variants;
        }
        // Make sure each rule returned by a parallel variant is sorted in ascending order
        if (a.parallelIndex !== b.parallelIndex) {
            return a.parallelIndex - b.parallelIndex;
        }
        // Always sort arbitrary properties after other utilities
        if (a.arbitrary !== b.arbitrary) {
            return a.arbitrary - b.arbitrary;
        }
        // Always sort arbitrary properties alphabetically
        if (a.propertyOffset !== b.propertyOffset) {
            return a.propertyOffset - b.propertyOffset;
        }
        // Sort utilities, components, etc… in the order they were registered
        return a.index - b.index;
    }
    /**
   * Arbitrary variants are recorded in the order they're encountered.
   * This means that the order is not stable between environments and sets of content files.
   *
   * In order to make the order stable, we need to remap the arbitrary variant offsets to
   * be in alphabetical order starting from the offset of the first arbitrary variant.
   */ recalculateVariantOffsets() {
        // Sort the variants by their name
        let variants = Array.from(this.variantOffsets.entries()).filter(([v])=>v.startsWith("[")).sort(([a], [z])=>fastCompare(a, z));
        // Sort the list of offsets
        // This is not necessarily a discrete range of numbers which is why
        // we're using sort instead of creating a range from min/max
        let newOffsets = variants.map(([, offset])=>offset).sort((a, z)=>(0, _bigSign.default)(a - z));
        // Create a map from the old offsets to the new offsets in the new sort order
        /** @type {[bigint, bigint][]} */ let mapping = variants.map(([, oldOffset], i)=>[
                oldOffset,
                newOffsets[i]
            ]);
        // Remove any variants that will not move letting us skip
        // remapping if everything happens to be in order
        return mapping.filter(([a, z])=>a !== z);
    }
    /**
   * @template T
   * @param {[RuleOffset, T][]} list
   * @returns {[RuleOffset, T][]}
   */ remapArbitraryVariantOffsets(list) {
        let mapping = this.recalculateVariantOffsets();
        // No arbitrary variants? Nothing to do.
        // Everyhing already in order? Nothing to do.
        if (mapping.length === 0) {
            return list;
        }
        // Remap every variant offset in the list
        return list.map((item)=>{
            let [offset, rule] = item;
            offset = {
                ...offset,
                variants: (0, _remapbitfield.remapBitfield)(offset.variants, mapping)
            };
            return [
                offset,
                rule
            ];
        });
    }
    /**
   * @template T
   * @param {[RuleOffset, T][]} list
   * @returns {[RuleOffset, T][]}
   */ sortArbitraryProperties(list) {
        // Collect all known arbitrary properties
        let known = new Set();
        for (let [offset] of list){
            if (offset.arbitrary === 1n) {
                known.add(offset.property);
            }
        }
        // No arbitrary properties? Nothing to do.
        if (known.size === 0) {
            return list;
        }
        // Sort the properties alphabetically
        let properties = Array.from(known).sort();
        // Create a map from the property name to its offset
        let offsets = new Map();
        let offset = 1n;
        for (let property of properties){
            offsets.set(property, offset++);
        }
        // Apply the sorted offsets to the list
        return list.map((item)=>{
            let [offset, rule] = item;
            var _offsets_get;
            offset = {
                ...offset,
                propertyOffset: (_offsets_get = offsets.get(offset.property)) !== null && _offsets_get !== void 0 ? _offsets_get : 0n
            };
            return [
                offset,
                rule
            ];
        });
    }
    /**
   * @template T
   * @param {[RuleOffset, T][]} list
   * @returns {[RuleOffset, T][]}
   */ sort(list) {
        // Sort arbitrary variants so they're in alphabetical order
        list = this.remapArbitraryVariantOffsets(list);
        // Sort arbitrary properties so they're in alphabetical order
        list = this.sortArbitraryProperties(list);
        return list.sort(([a], [b])=>(0, _bigSign.default)(this.compare(a, b)));
    }
}
/**
 *
 * @param {bigint[]} nums
 * @returns {bigint|null}
 */ function max(nums) {
    let max = null;
    for (const num of nums){
        max = max !== null && max !== void 0 ? max : num;
        max = max > num ? max : num;
    }
    return max;
}
/**
 * A fast ASCII order string comparison function.
 *
 * Using `.sort()` without a custom compare function is faster
 * But you can only use that if you're sorting an array of
 * only strings. If you're sorting strings inside objects
 * or arrays, you need must use a custom compare function.
 *
 * @param {string} a
 * @param {string} b
 */ function fastCompare(a, b) {
    let aLen = a.length;
    let bLen = b.length;
    let minLen = aLen < bLen ? aLen : bLen;
    for(let i = 0; i < minLen; i++){
        let cmp = a.charCodeAt(i) - b.charCodeAt(i);
        if (cmp !== 0) return cmp;
    }
    return aLen - bLen;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupContextUtils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERNAL_FEATURES: function() {
        return INTERNAL_FEATURES;
    },
    isValidVariantFormatString: function() {
        return isValidVariantFormatString;
    },
    parseVariant: function() {
        return parseVariant;
    },
    getFileModifiedMap: function() {
        return getFileModifiedMap;
    },
    createContext: function() {
        return createContext;
    },
    getContext: function() {
        return getContext;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _url = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)"));
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _dlv = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.umd.js [app-client] (ecmascript)"));
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _transformThemeValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/transformThemeValue.js [app-client] (ecmascript)"));
const _parseObjectStyles = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseObjectStyles.js [app-client] (ecmascript)"));
const _prefixSelector = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/prefixSelector.js [app-client] (ecmascript)"));
const _isPlainObject = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isPlainObject.js [app-client] (ecmascript)"));
const _escapeClassName = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)"));
const _nameClass = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/nameClass.js [app-client] (ecmascript)"));
const _pluginUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pluginUtils.js [app-client] (ecmascript)");
const _corePlugins = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/corePlugins.js [app-client] (ecmascript)");
const _sharedState = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)"));
const _toPath = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toPath.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
const _negateValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/negateValue.js [app-client] (ecmascript)"));
const _isSyntacticallyValidPropertyValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/isSyntacticallyValidPropertyValue.js [app-client] (ecmascript)"));
const _generateRules = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/generateRules.js [app-client] (ecmascript)");
const _cacheInvalidation = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/cacheInvalidation.js [app-client] (ecmascript)");
const _offsets = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/offsets.js [app-client] (ecmascript)");
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
const _formatVariantSelector = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/formatVariantSelector.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const INTERNAL_FEATURES = Symbol();
const VARIANT_TYPES = {
    AddVariant: Symbol.for("ADD_VARIANT"),
    MatchVariant: Symbol.for("MATCH_VARIANT")
};
const VARIANT_INFO = {
    Base: 1 << 0,
    Dynamic: 1 << 1
};
function prefix(context, selector) {
    let prefix = context.tailwindConfig.prefix;
    return typeof prefix === "function" ? prefix(selector) : prefix + selector;
}
function normalizeOptionTypes({ type = "any", ...options }) {
    let types = [].concat(type);
    return {
        ...options,
        types: types.map((type)=>{
            if (Array.isArray(type)) {
                return {
                    type: type[0],
                    ...type[1]
                };
            }
            return {
                type,
                preferOnConflict: false
            };
        })
    };
}
function parseVariantFormatString(input) {
    /** @type {string[]} */ let parts = [];
    // When parsing whitespace around special characters are insignificant
    // However, _inside_ of a variant they could be
    // Because the selector could look like this
    // @media { &[data-name="foo bar"] }
    // This is why we do not skip whitespace
    let current = "";
    let depth = 0;
    for(let idx = 0; idx < input.length; idx++){
        let char = input[idx];
        if (char === "\\") {
            // Escaped characters are not special
            current += "\\" + input[++idx];
        } else if (char === "{") {
            // Nested rule: start
            ++depth;
            parts.push(current.trim());
            current = "";
        } else if (char === "}") {
            // Nested rule: end
            if (--depth < 0) {
                throw new Error(`Your { and } are unbalanced.`);
            }
            parts.push(current.trim());
            current = "";
        } else {
            // Normal character
            current += char;
        }
    }
    if (current.length > 0) {
        parts.push(current.trim());
    }
    parts = parts.filter((part)=>part !== "");
    return parts;
}
function insertInto(list, value, { before = [] } = {}) {
    before = [].concat(before);
    if (before.length <= 0) {
        list.push(value);
        return;
    }
    let idx = list.length - 1;
    for (let other of before){
        let iidx = list.indexOf(other);
        if (iidx === -1) continue;
        idx = Math.min(idx, iidx);
    }
    list.splice(idx, 0, value);
}
function parseStyles(styles) {
    if (!Array.isArray(styles)) {
        return parseStyles([
            styles
        ]);
    }
    return styles.flatMap((style)=>{
        let isNode = !Array.isArray(style) && !(0, _isPlainObject.default)(style);
        return isNode ? style : (0, _parseObjectStyles.default)(style);
    });
}
function getClasses(selector, mutate) {
    let parser = (0, _postcssselectorparser.default)((selectors)=>{
        let allClasses = [];
        if (mutate) {
            mutate(selectors);
        }
        selectors.walkClasses((classNode)=>{
            allClasses.push(classNode.value);
        });
        return allClasses;
    });
    return parser.transformSync(selector);
}
/**
 * Ignore everything inside a :not(...). This allows you to write code like
 * `div:not(.foo)`. If `.foo` is never found in your code, then we used to
 * not generated it. But now we will ignore everything inside a `:not`, so
 * that it still gets generated.
 *
 * @param {selectorParser.Root} selectors
 */ function ignoreNot(selectors) {
    selectors.walkPseudos((pseudo)=>{
        if (pseudo.value === ":not") {
            pseudo.remove();
        }
    });
}
function extractCandidates(node, state = {
    containsNonOnDemandable: false
}, depth = 0) {
    let classes = [];
    let selectors = [];
    if (node.type === "rule") {
        // Handle normal rules
        selectors.push(...node.selectors);
    } else if (node.type === "atrule") {
        // Handle at-rules (which contains nested rules)
        node.walkRules((rule)=>selectors.push(...rule.selectors));
    }
    for (let selector of selectors){
        let classCandidates = getClasses(selector, ignoreNot);
        // At least one of the selectors contains non-"on-demandable" candidates.
        if (classCandidates.length === 0) {
            state.containsNonOnDemandable = true;
        }
        for (let classCandidate of classCandidates){
            classes.push(classCandidate);
        }
    }
    if (depth === 0) {
        return [
            state.containsNonOnDemandable || classes.length === 0,
            classes
        ];
    }
    return classes;
}
function withIdentifiers(styles) {
    return parseStyles(styles).flatMap((node)=>{
        let nodeMap = new Map();
        let [containsNonOnDemandableSelectors, candidates] = extractCandidates(node);
        // If this isn't "on-demandable", assign it a universal candidate to always include it.
        if (containsNonOnDemandableSelectors) {
            candidates.unshift(_sharedState.NOT_ON_DEMAND);
        }
        // However, it could be that it also contains "on-demandable" candidates.
        // E.g.: `span, .foo {}`, in that case it should still be possible to use
        // `@apply foo` for example.
        return candidates.map((c)=>{
            if (!nodeMap.has(node)) {
                nodeMap.set(node, node);
            }
            return [
                c,
                nodeMap.get(node)
            ];
        });
    });
}
function isValidVariantFormatString(format) {
    return format.startsWith("@") || format.includes("&");
}
function parseVariant(variant) {
    variant = variant.replace(/\n+/g, "").replace(/\s{1,}/g, " ").trim();
    let fns = parseVariantFormatString(variant).map((str)=>{
        if (!str.startsWith("@")) {
            return ({ format })=>format(str);
        }
        let [, name, params] = /@(\S*)( .+|[({].*)?/g.exec(str);
        var _params_trim;
        return ({ wrap })=>{
            return wrap(_postcss.default.atRule({
                name,
                params: (_params_trim = params === null || params === void 0 ? void 0 : params.trim()) !== null && _params_trim !== void 0 ? _params_trim : ""
            }));
        };
    }).reverse();
    return (api)=>{
        for (let fn of fns){
            fn(api);
        }
    };
}
/**
 *
 * @param {any} tailwindConfig
 * @param {any} context
 * @param {object} param2
 * @param {Offsets} param2.offsets
 */ function buildPluginApi(tailwindConfig, context, { variantList, variantMap, offsets, classList }) {
    function getConfigValue(path, defaultValue) {
        return path ? (0, _dlv.default)(tailwindConfig, path, defaultValue) : tailwindConfig;
    }
    function applyConfiguredPrefix(selector) {
        return (0, _prefixSelector.default)(tailwindConfig.prefix, selector);
    }
    function prefixIdentifier(identifier, options) {
        if (identifier === _sharedState.NOT_ON_DEMAND) {
            return _sharedState.NOT_ON_DEMAND;
        }
        if (!options.respectPrefix) {
            return identifier;
        }
        return context.tailwindConfig.prefix + identifier;
    }
    function resolveThemeValue(path, defaultValue, opts = {}) {
        let parts = (0, _toPath.toPath)(path);
        let value = getConfigValue([
            "theme",
            ...parts
        ], defaultValue);
        return (0, _transformThemeValue.default)(parts[0])(value, opts);
    }
    let variantIdentifier = 0;
    let api = {
        postcss: _postcss.default,
        prefix: applyConfiguredPrefix,
        e: _escapeClassName.default,
        config: getConfigValue,
        theme: resolveThemeValue,
        corePlugins: (path)=>{
            if (Array.isArray(tailwindConfig.corePlugins)) {
                return tailwindConfig.corePlugins.includes(path);
            }
            return getConfigValue([
                "corePlugins",
                path
            ], true);
        },
        variants: ()=>{
            // Preserved for backwards compatibility but not used in v3.0+
            return [];
        },
        addBase (base) {
            for (let [identifier, rule] of withIdentifiers(base)){
                let prefixedIdentifier = prefixIdentifier(identifier, {});
                let offset = offsets.create("base");
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push([
                    {
                        sort: offset,
                        layer: "base"
                    },
                    rule
                ]);
            }
        },
        /**
     * @param {string} group
     * @param {Record<string, string | string[]>} declarations
     */ addDefaults (group, declarations) {
            const groups = {
                [`@defaults ${group}`]: declarations
            };
            for (let [identifier, rule] of withIdentifiers(groups)){
                let prefixedIdentifier = prefixIdentifier(identifier, {});
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push([
                    {
                        sort: offsets.create("defaults"),
                        layer: "defaults"
                    },
                    rule
                ]);
            }
        },
        addComponents (components, options) {
            let defaultOptions = {
                preserveSource: false,
                respectPrefix: true,
                respectImportant: false
            };
            options = Object.assign({}, defaultOptions, Array.isArray(options) ? {} : options);
            for (let [identifier, rule] of withIdentifiers(components)){
                let prefixedIdentifier = prefixIdentifier(identifier, options);
                classList.add(prefixedIdentifier);
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push([
                    {
                        sort: offsets.create("components"),
                        layer: "components",
                        options
                    },
                    rule
                ]);
            }
        },
        addUtilities (utilities, options) {
            let defaultOptions = {
                preserveSource: false,
                respectPrefix: true,
                respectImportant: true
            };
            options = Object.assign({}, defaultOptions, Array.isArray(options) ? {} : options);
            for (let [identifier, rule] of withIdentifiers(utilities)){
                let prefixedIdentifier = prefixIdentifier(identifier, options);
                classList.add(prefixedIdentifier);
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push([
                    {
                        sort: offsets.create("utilities"),
                        layer: "utilities",
                        options
                    },
                    rule
                ]);
            }
        },
        matchUtilities: function(utilities, options) {
            let defaultOptions = {
                respectPrefix: true,
                respectImportant: true,
                modifiers: false
            };
            options = normalizeOptionTypes({
                ...defaultOptions,
                ...options
            });
            let offset = offsets.create("utilities");
            for(let identifier in utilities){
                let prefixedIdentifier = prefixIdentifier(identifier, options);
                let rule = utilities[identifier];
                classList.add([
                    prefixedIdentifier,
                    options
                ]);
                function wrapped(modifier, { isOnlyPlugin }) {
                    let [value, coercedType, utilityModifier] = (0, _pluginUtils.coerceValue)(options.types, modifier, options, tailwindConfig);
                    if (value === undefined) {
                        return [];
                    }
                    if (!options.types.some(({ type })=>type === coercedType)) {
                        if (isOnlyPlugin) {
                            _log.default.warn([
                                `Unnecessary typehint \`${coercedType}\` in \`${identifier}-${modifier}\`.`,
                                `You can safely update it to \`${identifier}-${modifier.replace(coercedType + ":", "")}\`.`
                            ]);
                        } else {
                            return [];
                        }
                    }
                    if (!(0, _isSyntacticallyValidPropertyValue.default)(value)) {
                        return [];
                    }
                    let extras = {
                        get modifier () {
                            if (!options.modifiers) {
                                _log.default.warn(`modifier-used-without-options-for-${identifier}`, [
                                    "Your plugin must set `modifiers: true` in its options to support modifiers."
                                ]);
                            }
                            return utilityModifier;
                        }
                    };
                    let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig, "generalizedModifiers");
                    let ruleSets = [].concat(modifiersEnabled ? rule(value, extras) : rule(value)).filter(Boolean).map((declaration)=>({
                            [(0, _nameClass.default)(identifier, modifier)]: declaration
                        }));
                    return ruleSets;
                }
                let withOffsets = [
                    {
                        sort: offset,
                        layer: "utilities",
                        options
                    },
                    wrapped
                ];
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push(withOffsets);
            }
        },
        matchComponents: function(components, options) {
            let defaultOptions = {
                respectPrefix: true,
                respectImportant: false,
                modifiers: false
            };
            options = normalizeOptionTypes({
                ...defaultOptions,
                ...options
            });
            let offset = offsets.create("components");
            for(let identifier in components){
                let prefixedIdentifier = prefixIdentifier(identifier, options);
                let rule = components[identifier];
                classList.add([
                    prefixedIdentifier,
                    options
                ]);
                function wrapped(modifier, { isOnlyPlugin }) {
                    let [value, coercedType, utilityModifier] = (0, _pluginUtils.coerceValue)(options.types, modifier, options, tailwindConfig);
                    if (value === undefined) {
                        return [];
                    }
                    if (!options.types.some(({ type })=>type === coercedType)) {
                        if (isOnlyPlugin) {
                            _log.default.warn([
                                `Unnecessary typehint \`${coercedType}\` in \`${identifier}-${modifier}\`.`,
                                `You can safely update it to \`${identifier}-${modifier.replace(coercedType + ":", "")}\`.`
                            ]);
                        } else {
                            return [];
                        }
                    }
                    if (!(0, _isSyntacticallyValidPropertyValue.default)(value)) {
                        return [];
                    }
                    let extras = {
                        get modifier () {
                            if (!options.modifiers) {
                                _log.default.warn(`modifier-used-without-options-for-${identifier}`, [
                                    "Your plugin must set `modifiers: true` in its options to support modifiers."
                                ]);
                            }
                            return utilityModifier;
                        }
                    };
                    let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig, "generalizedModifiers");
                    let ruleSets = [].concat(modifiersEnabled ? rule(value, extras) : rule(value)).filter(Boolean).map((declaration)=>({
                            [(0, _nameClass.default)(identifier, modifier)]: declaration
                        }));
                    return ruleSets;
                }
                let withOffsets = [
                    {
                        sort: offset,
                        layer: "components",
                        options
                    },
                    wrapped
                ];
                if (!context.candidateRuleMap.has(prefixedIdentifier)) {
                    context.candidateRuleMap.set(prefixedIdentifier, []);
                }
                context.candidateRuleMap.get(prefixedIdentifier).push(withOffsets);
            }
        },
        addVariant (variantName, variantFunctions, options = {}) {
            variantFunctions = [].concat(variantFunctions).map((variantFunction)=>{
                if (typeof variantFunction !== "string") {
                    // Safelist public API functions
                    return (api = {})=>{
                        let { args, modifySelectors, container, separator, wrap, format } = api;
                        let result = variantFunction(Object.assign({
                            modifySelectors,
                            container,
                            separator
                        }, options.type === VARIANT_TYPES.MatchVariant && {
                            args,
                            wrap,
                            format
                        }));
                        if (typeof result === "string" && !isValidVariantFormatString(result)) {
                            throw new Error(`Your custom variant \`${variantName}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
                        }
                        if (Array.isArray(result)) {
                            return result.filter((variant)=>typeof variant === "string").map((variant)=>parseVariant(variant));
                        }
                        // result may be undefined with legacy variants that use APIs like `modifySelectors`
                        // result may also be a postcss node if someone was returning the result from `modifySelectors`
                        return result && typeof result === "string" && parseVariant(result)(api);
                    };
                }
                if (!isValidVariantFormatString(variantFunction)) {
                    throw new Error(`Your custom variant \`${variantName}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
                }
                return parseVariant(variantFunction);
            });
            insertInto(variantList, variantName, options);
            variantMap.set(variantName, variantFunctions);
            context.variantOptions.set(variantName, options);
        },
        matchVariant (variant, variantFn, options) {
            var _options_id;
            // A unique identifier that "groups" these variants together.
            // This is for internal use only which is why it is not present in the types
            let id = (_options_id = options === null || options === void 0 ? void 0 : options.id) !== null && _options_id !== void 0 ? _options_id : ++variantIdentifier;
            let isSpecial = variant === "@";
            let modifiersEnabled = (0, _featureFlags.flagEnabled)(tailwindConfig, "generalizedModifiers");
            var _options_values;
            for (let [key, value] of Object.entries((_options_values = options === null || options === void 0 ? void 0 : options.values) !== null && _options_values !== void 0 ? _options_values : {})){
                if (key === "DEFAULT") continue;
                api.addVariant(isSpecial ? `${variant}${key}` : `${variant}-${key}`, ({ args, container })=>{
                    return variantFn(value, modifiersEnabled ? {
                        modifier: args === null || args === void 0 ? void 0 : args.modifier,
                        container
                    } : {
                        container
                    });
                }, {
                    ...options,
                    value,
                    id,
                    type: VARIANT_TYPES.MatchVariant,
                    variantInfo: VARIANT_INFO.Base
                });
            }
            var _options_values1;
            let hasDefault = "DEFAULT" in ((_options_values1 = options === null || options === void 0 ? void 0 : options.values) !== null && _options_values1 !== void 0 ? _options_values1 : {});
            api.addVariant(variant, ({ args, container })=>{
                if ((args === null || args === void 0 ? void 0 : args.value) === _sharedState.NONE && !hasDefault) {
                    return null;
                }
                var _args_value;
                return variantFn((args === null || args === void 0 ? void 0 : args.value) === _sharedState.NONE ? options.values.DEFAULT : (_args_value = args === null || args === void 0 ? void 0 : args.value) !== null && _args_value !== void 0 ? _args_value : typeof args === "string" ? args : "", modifiersEnabled ? {
                    modifier: args === null || args === void 0 ? void 0 : args.modifier,
                    container
                } : {
                    container
                });
            }, {
                ...options,
                id,
                type: VARIANT_TYPES.MatchVariant,
                variantInfo: VARIANT_INFO.Dynamic
            });
        }
    };
    return api;
}
let fileModifiedMapCache = new WeakMap();
function getFileModifiedMap(context) {
    if (!fileModifiedMapCache.has(context)) {
        fileModifiedMapCache.set(context, new Map());
    }
    return fileModifiedMapCache.get(context);
}
function trackModified(files, fileModifiedMap) {
    let changed = false;
    let mtimesToCommit = new Map();
    for (let file of files){
        var _fs_statSync;
        if (!file) continue;
        let parsed = _url.default.parse(file);
        let pathname = parsed.hash ? parsed.href.replace(parsed.hash, "") : parsed.href;
        pathname = parsed.search ? pathname.replace(parsed.search, "") : pathname;
        let newModified = (_fs_statSync = _fs.default.statSync(decodeURIComponent(pathname), {
            throwIfNoEntry: false
        })) === null || _fs_statSync === void 0 ? void 0 : _fs_statSync.mtimeMs;
        if (!newModified) {
            continue;
        }
        if (!fileModifiedMap.has(file) || newModified > fileModifiedMap.get(file)) {
            changed = true;
        }
        mtimesToCommit.set(file, newModified);
    }
    return [
        changed,
        mtimesToCommit
    ];
}
function extractVariantAtRules(node) {
    node.walkAtRules((atRule)=>{
        if ([
            "responsive",
            "variants"
        ].includes(atRule.name)) {
            extractVariantAtRules(atRule);
            atRule.before(atRule.nodes);
            atRule.remove();
        }
    });
}
function collectLayerPlugins(root) {
    let layerPlugins = [];
    root.each((node)=>{
        if (node.type === "atrule" && [
            "responsive",
            "variants"
        ].includes(node.name)) {
            node.name = "layer";
            node.params = "utilities";
        }
    });
    // Walk @layer rules and treat them like plugins
    root.walkAtRules("layer", (layerRule)=>{
        extractVariantAtRules(layerRule);
        if (layerRule.params === "base") {
            for (let node of layerRule.nodes){
                layerPlugins.push(function({ addBase }) {
                    addBase(node, {
                        respectPrefix: false
                    });
                });
            }
            layerRule.remove();
        } else if (layerRule.params === "components") {
            for (let node of layerRule.nodes){
                layerPlugins.push(function({ addComponents }) {
                    addComponents(node, {
                        respectPrefix: false,
                        preserveSource: true
                    });
                });
            }
            layerRule.remove();
        } else if (layerRule.params === "utilities") {
            for (let node of layerRule.nodes){
                layerPlugins.push(function({ addUtilities }) {
                    addUtilities(node, {
                        respectPrefix: false,
                        preserveSource: true
                    });
                });
            }
            layerRule.remove();
        }
    });
    return layerPlugins;
}
function resolvePlugins(context, root) {
    let corePluginList = Object.entries({
        ..._corePlugins.variantPlugins,
        ..._corePlugins.corePlugins
    }).map(([name, plugin])=>{
        if (!context.tailwindConfig.corePlugins.includes(name)) {
            return null;
        }
        return plugin;
    }).filter(Boolean);
    let userPlugins = context.tailwindConfig.plugins.map((plugin)=>{
        if (plugin.__isOptionsFunction) {
            plugin = plugin();
        }
        return typeof plugin === "function" ? plugin : plugin.handler;
    });
    let layerPlugins = collectLayerPlugins(root);
    // TODO: This is a workaround for backwards compatibility, since custom variants
    // were historically sorted before screen/stackable variants.
    let beforeVariants = [
        _corePlugins.variantPlugins["childVariant"],
        _corePlugins.variantPlugins["pseudoElementVariants"],
        _corePlugins.variantPlugins["pseudoClassVariants"],
        _corePlugins.variantPlugins["hasVariants"],
        _corePlugins.variantPlugins["ariaVariants"],
        _corePlugins.variantPlugins["dataVariants"]
    ];
    let afterVariants = [
        _corePlugins.variantPlugins["supportsVariants"],
        _corePlugins.variantPlugins["reducedMotionVariants"],
        _corePlugins.variantPlugins["prefersContrastVariants"],
        _corePlugins.variantPlugins["screenVariants"],
        _corePlugins.variantPlugins["orientationVariants"],
        _corePlugins.variantPlugins["directionVariants"],
        _corePlugins.variantPlugins["darkVariants"],
        _corePlugins.variantPlugins["forcedColorsVariants"],
        _corePlugins.variantPlugins["printVariant"]
    ];
    // This is a compatibility fix for the pre 3.4 dark mode behavior
    // `class` retains the old behavior, but `selector` keeps the new behavior
    let isLegacyDarkMode = context.tailwindConfig.darkMode === "class" || Array.isArray(context.tailwindConfig.darkMode) && context.tailwindConfig.darkMode[0] === "class";
    if (isLegacyDarkMode) {
        afterVariants = [
            _corePlugins.variantPlugins["supportsVariants"],
            _corePlugins.variantPlugins["reducedMotionVariants"],
            _corePlugins.variantPlugins["prefersContrastVariants"],
            _corePlugins.variantPlugins["darkVariants"],
            _corePlugins.variantPlugins["screenVariants"],
            _corePlugins.variantPlugins["orientationVariants"],
            _corePlugins.variantPlugins["directionVariants"],
            _corePlugins.variantPlugins["forcedColorsVariants"],
            _corePlugins.variantPlugins["printVariant"]
        ];
    }
    return [
        ...corePluginList,
        ...beforeVariants,
        ...userPlugins,
        ...afterVariants,
        ...layerPlugins
    ];
}
function registerPlugins(plugins, context) {
    let variantList = [];
    let variantMap = new Map();
    context.variantMap = variantMap;
    let offsets = new _offsets.Offsets();
    context.offsets = offsets;
    let classList = new Set();
    let pluginApi = buildPluginApi(context.tailwindConfig, context, {
        variantList,
        variantMap,
        offsets,
        classList
    });
    for (let plugin of plugins){
        if (Array.isArray(plugin)) {
            for (let pluginItem of plugin){
                pluginItem(pluginApi);
            }
        } else {
            plugin === null || plugin === void 0 ? void 0 : plugin(pluginApi);
        }
    }
    // Make sure to record bit masks for every variant
    offsets.recordVariants(variantList, (variant)=>variantMap.get(variant).length);
    // Build variantMap
    for (let [variantName, variantFunctions] of variantMap.entries()){
        context.variantMap.set(variantName, variantFunctions.map((variantFunction, idx)=>[
                offsets.forVariant(variantName, idx),
                variantFunction
            ]));
    }
    var _context_tailwindConfig_safelist;
    let safelist = ((_context_tailwindConfig_safelist = context.tailwindConfig.safelist) !== null && _context_tailwindConfig_safelist !== void 0 ? _context_tailwindConfig_safelist : []).filter(Boolean);
    if (safelist.length > 0) {
        let checks = [];
        for (let value of safelist){
            if (typeof value === "string") {
                context.changedContent.push({
                    content: value,
                    extension: "html"
                });
                continue;
            }
            if (value instanceof RegExp) {
                _log.default.warn("root-regex", [
                    "Regular expressions in `safelist` work differently in Tailwind CSS v3.0.",
                    "Update your `safelist` configuration to eliminate this warning.",
                    "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
                ]);
                continue;
            }
            checks.push(value);
        }
        if (checks.length > 0) {
            let patternMatchingCount = new Map();
            let prefixLength = context.tailwindConfig.prefix.length;
            let checkImportantUtils = checks.some((check)=>check.pattern.source.includes("!"));
            for (let util of classList){
                let utils = Array.isArray(util) ? (()=>{
                    let [utilName, options] = util;
                    var _options_values;
                    let values = Object.keys((_options_values = options === null || options === void 0 ? void 0 : options.values) !== null && _options_values !== void 0 ? _options_values : {});
                    let classes = values.map((value)=>(0, _nameClass.formatClass)(utilName, value));
                    if (options === null || options === void 0 ? void 0 : options.supportsNegativeValues) {
                        // This is the normal negated version
                        // e.g. `-inset-1` or `-tw-inset-1`
                        classes = [
                            ...classes,
                            ...classes.map((cls)=>"-" + cls)
                        ];
                        // This is the negated version *after* the prefix
                        // e.g. `tw--inset-1`
                        // The prefix is already attached to util name
                        // So we add the negative after the prefix
                        classes = [
                            ...classes,
                            ...classes.map((cls)=>cls.slice(0, prefixLength) + "-" + cls.slice(prefixLength))
                        ];
                    }
                    if (options.types.some(({ type })=>type === "color")) {
                        classes = [
                            ...classes,
                            ...classes.flatMap((cls)=>Object.keys(context.tailwindConfig.theme.opacity).map((opacity)=>`${cls}/${opacity}`))
                        ];
                    }
                    if (checkImportantUtils && (options === null || options === void 0 ? void 0 : options.respectImportant)) {
                        classes = [
                            ...classes,
                            ...classes.map((cls)=>"!" + cls)
                        ];
                    }
                    return classes;
                })() : [
                    util
                ];
                for (let util of utils){
                    for (let { pattern, variants = [] } of checks){
                        // RegExp with the /g flag are stateful, so let's reset the last
                        // index pointer to reset the state.
                        pattern.lastIndex = 0;
                        if (!patternMatchingCount.has(pattern)) {
                            patternMatchingCount.set(pattern, 0);
                        }
                        if (!pattern.test(util)) continue;
                        patternMatchingCount.set(pattern, patternMatchingCount.get(pattern) + 1);
                        context.changedContent.push({
                            content: util,
                            extension: "html"
                        });
                        for (let variant of variants){
                            context.changedContent.push({
                                content: variant + context.tailwindConfig.separator + util,
                                extension: "html"
                            });
                        }
                    }
                }
            }
            for (let [regex, count] of patternMatchingCount.entries()){
                if (count !== 0) continue;
                _log.default.warn([
                    `The safelist pattern \`${regex}\` doesn't match any Tailwind CSS classes.`,
                    "Fix this pattern or remove it from your `safelist` configuration.",
                    "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
                ]);
            }
        }
    }
    var _context_tailwindConfig_darkMode, _concat_;
    let darkClassName = (_concat_ = [].concat((_context_tailwindConfig_darkMode = context.tailwindConfig.darkMode) !== null && _context_tailwindConfig_darkMode !== void 0 ? _context_tailwindConfig_darkMode : "media")[1]) !== null && _concat_ !== void 0 ? _concat_ : "dark";
    // A list of utilities that are used by certain Tailwind CSS utilities but
    // that don't exist on their own. This will result in them "not existing" and
    // sorting could be weird since you still require them in order to make the
    // host utilities work properly. (Thanks Biology)
    let parasiteUtilities = [
        prefix(context, darkClassName),
        prefix(context, "group"),
        prefix(context, "peer")
    ];
    context.getClassOrder = function getClassOrder(classes) {
        // Sort classes so they're ordered in a deterministic manner
        let sorted = [
            ...classes
        ].sort((a, z)=>{
            if (a === z) return 0;
            if (a < z) return -1;
            return 1;
        });
        // Non-util classes won't be generated, so we default them to null
        let sortedClassNames = new Map(sorted.map((className)=>[
                className,
                null
            ]));
        // Sort all classes in order
        // Non-tailwind classes won't be generated and will be left as `null`
        let rules = (0, _generateRules.generateRules)(new Set(sorted), context, true);
        rules = context.offsets.sort(rules);
        let idx = BigInt(parasiteUtilities.length);
        for (const [, rule] of rules){
            let candidate = rule.raws.tailwind.candidate;
            var _sortedClassNames_get;
            // When multiple rules match a candidate
            // always take the position of the first one
            sortedClassNames.set(candidate, (_sortedClassNames_get = sortedClassNames.get(candidate)) !== null && _sortedClassNames_get !== void 0 ? _sortedClassNames_get : idx++);
        }
        return classes.map((className)=>{
            var _sortedClassNames_get;
            let order = (_sortedClassNames_get = sortedClassNames.get(className)) !== null && _sortedClassNames_get !== void 0 ? _sortedClassNames_get : null;
            let parasiteIndex = parasiteUtilities.indexOf(className);
            if (order === null && parasiteIndex !== -1) {
                // This will make sure that it is at the very beginning of the
                // `components` layer which technically means 'before any
                // components'.
                order = BigInt(parasiteIndex);
            }
            return [
                className,
                order
            ];
        });
    };
    // Generate a list of strings for autocompletion purposes, e.g.
    // ['uppercase', 'lowercase', ...]
    context.getClassList = function getClassList(options = {}) {
        let output = [];
        for (let util of classList){
            if (Array.isArray(util)) {
                var _utilOptions_types;
                let [utilName, utilOptions] = util;
                let negativeClasses = [];
                var _utilOptions_modifiers;
                let modifiers = Object.keys((_utilOptions_modifiers = utilOptions === null || utilOptions === void 0 ? void 0 : utilOptions.modifiers) !== null && _utilOptions_modifiers !== void 0 ? _utilOptions_modifiers : {});
                if (utilOptions === null || utilOptions === void 0 ? void 0 : (_utilOptions_types = utilOptions.types) === null || _utilOptions_types === void 0 ? void 0 : _utilOptions_types.some(({ type })=>type === "color")) {
                    var _context_tailwindConfig_theme_opacity;
                    modifiers.push(...Object.keys((_context_tailwindConfig_theme_opacity = context.tailwindConfig.theme.opacity) !== null && _context_tailwindConfig_theme_opacity !== void 0 ? _context_tailwindConfig_theme_opacity : {}));
                }
                let metadata = {
                    modifiers
                };
                let includeMetadata = options.includeMetadata && modifiers.length > 0;
                var _utilOptions_values;
                for (let [key, value] of Object.entries((_utilOptions_values = utilOptions === null || utilOptions === void 0 ? void 0 : utilOptions.values) !== null && _utilOptions_values !== void 0 ? _utilOptions_values : {})){
                    // Ignore undefined and null values
                    if (value == null) {
                        continue;
                    }
                    let cls = (0, _nameClass.formatClass)(utilName, key);
                    output.push(includeMetadata ? [
                        cls,
                        metadata
                    ] : cls);
                    if ((utilOptions === null || utilOptions === void 0 ? void 0 : utilOptions.supportsNegativeValues) && (0, _negateValue.default)(value)) {
                        let cls = (0, _nameClass.formatClass)(utilName, `-${key}`);
                        negativeClasses.push(includeMetadata ? [
                            cls,
                            metadata
                        ] : cls);
                    }
                }
                output.push(...negativeClasses);
            } else {
                output.push(util);
            }
        }
        return output;
    };
    // Generate a list of available variants with meta information of the type of variant.
    context.getVariants = function getVariants() {
        // We use a unique, random ID for candidate names to avoid conflicts
        // We can't use characters like `_`, `:`, `@` or `.` because they might
        // be used as a separator
        let id = Math.random().toString(36).substring(7).toUpperCase();
        let result = [];
        for (let [name, options] of context.variantOptions.entries()){
            if (options.variantInfo === VARIANT_INFO.Base) continue;
            var _options_values;
            result.push({
                name,
                isArbitrary: options.type === Symbol.for("MATCH_VARIANT"),
                values: Object.keys((_options_values = options.values) !== null && _options_values !== void 0 ? _options_values : {}),
                hasDash: name !== "@",
                selectors ({ modifier, value } = {}) {
                    let candidate = `TAILWINDPLACEHOLDER${id}`;
                    let rule = _postcss.default.rule({
                        selector: `.${candidate}`
                    });
                    let container = _postcss.default.root({
                        nodes: [
                            rule.clone()
                        ]
                    });
                    let before = container.toString();
                    var _context_variantMap_get;
                    let fns = ((_context_variantMap_get = context.variantMap.get(name)) !== null && _context_variantMap_get !== void 0 ? _context_variantMap_get : []).flatMap(([_, fn])=>fn);
                    let formatStrings = [];
                    for (let fn of fns){
                        var _options_values;
                        let localFormatStrings = [];
                        var _options_values_value;
                        let api = {
                            args: {
                                modifier,
                                value: (_options_values_value = (_options_values = options.values) === null || _options_values === void 0 ? void 0 : _options_values[value]) !== null && _options_values_value !== void 0 ? _options_values_value : value
                            },
                            separator: context.tailwindConfig.separator,
                            modifySelectors (modifierFunction) {
                                // Run the modifierFunction over each rule
                                container.each((rule)=>{
                                    if (rule.type !== "rule") {
                                        return;
                                    }
                                    rule.selectors = rule.selectors.map((selector)=>{
                                        return modifierFunction({
                                            get className () {
                                                return (0, _generateRules.getClassNameFromSelector)(selector);
                                            },
                                            selector
                                        });
                                    });
                                });
                                return container;
                            },
                            format (str) {
                                localFormatStrings.push(str);
                            },
                            wrap (wrapper) {
                                localFormatStrings.push(`@${wrapper.name} ${wrapper.params} { & }`);
                            },
                            container
                        };
                        let ruleWithVariant = fn(api);
                        if (localFormatStrings.length > 0) {
                            formatStrings.push(localFormatStrings);
                        }
                        if (Array.isArray(ruleWithVariant)) {
                            for (let variantFunction of ruleWithVariant){
                                localFormatStrings = [];
                                variantFunction(api);
                                formatStrings.push(localFormatStrings);
                            }
                        }
                    }
                    // Reverse engineer the result of the `container`
                    let manualFormatStrings = [];
                    let after = container.toString();
                    if (before !== after) {
                        // Figure out all selectors
                        container.walkRules((rule)=>{
                            let modified = rule.selector;
                            // Rebuild the base selector, this is what plugin authors would do
                            // as well. E.g.: `${variant}${separator}${className}`.
                            // However, plugin authors probably also prepend or append certain
                            // classes, pseudos, ids, ...
                            let rebuiltBase = (0, _postcssselectorparser.default)((selectors)=>{
                                selectors.walkClasses((classNode)=>{
                                    classNode.value = `${name}${context.tailwindConfig.separator}${classNode.value}`;
                                });
                            }).processSync(modified);
                            // Now that we know the original selector, the new selector, and
                            // the rebuild part in between, we can replace the part that plugin
                            // authors need to rebuild with `&`, and eventually store it in the
                            // collectedFormats. Similar to what `format('...')` would do.
                            //
                            // E.g.:
                            //                   variant: foo
                            //                  selector: .markdown > p
                            //      modified (by plugin): .foo .foo\\:markdown > p
                            //    rebuiltBase (internal): .foo\\:markdown > p
                            //                    format: .foo &
                            manualFormatStrings.push(modified.replace(rebuiltBase, "&").replace(candidate, "&"));
                        });
                        // Figure out all atrules
                        container.walkAtRules((atrule)=>{
                            manualFormatStrings.push(`@${atrule.name} (${atrule.params}) { & }`);
                        });
                    }
                    var _options_values1;
                    let isArbitraryVariant = !(value in ((_options_values1 = options.values) !== null && _options_values1 !== void 0 ? _options_values1 : {}));
                    var _options_INTERNAL_FEATURES;
                    let internalFeatures = (_options_INTERNAL_FEATURES = options[INTERNAL_FEATURES]) !== null && _options_INTERNAL_FEATURES !== void 0 ? _options_INTERNAL_FEATURES : {};
                    let respectPrefix = (()=>{
                        if (isArbitraryVariant) return false;
                        if (internalFeatures.respectPrefix === false) return false;
                        return true;
                    })();
                    formatStrings = formatStrings.map((format)=>format.map((str)=>({
                                format: str,
                                respectPrefix
                            })));
                    manualFormatStrings = manualFormatStrings.map((format)=>({
                            format,
                            respectPrefix
                        }));
                    let opts = {
                        candidate,
                        context
                    };
                    let result = formatStrings.map((formats)=>(0, _formatVariantSelector.finalizeSelector)(`.${candidate}`, (0, _formatVariantSelector.formatVariantSelector)(formats, opts), opts).replace(`.${candidate}`, "&").replace("{ & }", "").trim());
                    if (manualFormatStrings.length > 0) {
                        result.push((0, _formatVariantSelector.formatVariantSelector)(manualFormatStrings, opts).toString().replace(`.${candidate}`, "&"));
                    }
                    return result;
                }
            });
        }
        return result;
    };
}
/**
 * Mark as class as retroactively invalid
 *
 *
 * @param {string} candidate
 */ function markInvalidUtilityCandidate(context, candidate) {
    if (!context.classCache.has(candidate)) {
        return;
    }
    // Mark this as not being a real utility
    context.notClassCache.add(candidate);
    // Remove it from any candidate-specific caches
    context.classCache.delete(candidate);
    context.applyClassCache.delete(candidate);
    context.candidateRuleMap.delete(candidate);
    context.candidateRuleCache.delete(candidate);
    // Ensure the stylesheet gets rebuilt
    context.stylesheetCache = null;
}
/**
 * Mark as class as retroactively invalid
 *
 * @param {import('postcss').Node} node
 */ function markInvalidUtilityNode(context, node) {
    let candidate = node.raws.tailwind.candidate;
    if (!candidate) {
        return;
    }
    for (const entry of context.ruleCache){
        if (entry[1].raws.tailwind.candidate === candidate) {
            context.ruleCache.delete(entry);
        // context.postCssNodeCache.delete(node)
        }
    }
    markInvalidUtilityCandidate(context, candidate);
}
function createContext(tailwindConfig, changedContent = [], root = _postcss.default.root()) {
    var _tailwindConfig_blocklist;
    let context = {
        disposables: [],
        ruleCache: new Set(),
        candidateRuleCache: new Map(),
        classCache: new Map(),
        applyClassCache: new Map(),
        // Seed the not class cache with the blocklist (which is only strings)
        notClassCache: new Set((_tailwindConfig_blocklist = tailwindConfig.blocklist) !== null && _tailwindConfig_blocklist !== void 0 ? _tailwindConfig_blocklist : []),
        postCssNodeCache: new Map(),
        candidateRuleMap: new Map(),
        tailwindConfig,
        changedContent: changedContent,
        variantMap: new Map(),
        stylesheetCache: null,
        variantOptions: new Map(),
        markInvalidUtilityCandidate: (candidate)=>markInvalidUtilityCandidate(context, candidate),
        markInvalidUtilityNode: (node)=>markInvalidUtilityNode(context, node)
    };
    let resolvedPlugins = resolvePlugins(context, root);
    registerPlugins(resolvedPlugins, context);
    return context;
}
let contextMap = _sharedState.contextMap;
let configContextMap = _sharedState.configContextMap;
let contextSourcesMap = _sharedState.contextSourcesMap;
function getContext(root, result, tailwindConfig, userConfigPath, tailwindConfigHash, contextDependencies) {
    let sourcePath = result.opts.from;
    let isConfigFile = userConfigPath !== null;
    _sharedState.env.DEBUG && console.log("Source path:", sourcePath);
    let existingContext;
    if (isConfigFile && contextMap.has(sourcePath)) {
        existingContext = contextMap.get(sourcePath);
    } else if (configContextMap.has(tailwindConfigHash)) {
        let context = configContextMap.get(tailwindConfigHash);
        contextSourcesMap.get(context).add(sourcePath);
        contextMap.set(sourcePath, context);
        existingContext = context;
    }
    let cssDidChange = (0, _cacheInvalidation.hasContentChanged)(sourcePath, root);
    // If there's already a context in the cache and we don't need to
    // reset the context, return the cached context.
    if (existingContext) {
        let [contextDependenciesChanged, mtimesToCommit] = trackModified([
            ...contextDependencies
        ], getFileModifiedMap(existingContext));
        if (!contextDependenciesChanged && !cssDidChange) {
            return [
                existingContext,
                false,
                mtimesToCommit
            ];
        }
    }
    // If this source is in the context map, get the old context.
    // Remove this source from the context sources for the old context,
    // and clean up that context if no one else is using it. This can be
    // called by many processes in rapid succession, so we check for presence
    // first because the first process to run this code will wipe it out first.
    if (contextMap.has(sourcePath)) {
        let oldContext = contextMap.get(sourcePath);
        if (contextSourcesMap.has(oldContext)) {
            contextSourcesMap.get(oldContext).delete(sourcePath);
            if (contextSourcesMap.get(oldContext).size === 0) {
                contextSourcesMap.delete(oldContext);
                for (let [tailwindConfigHash, context] of configContextMap){
                    if (context === oldContext) {
                        configContextMap.delete(tailwindConfigHash);
                    }
                }
                for (let disposable of oldContext.disposables.splice(0)){
                    disposable(oldContext);
                }
            }
        }
    }
    _sharedState.env.DEBUG && console.log("Setting up new context...");
    let context = createContext(tailwindConfig, [], root);
    Object.assign(context, {
        userConfigPath
    });
    let [, mtimesToCommit] = trackModified([
        ...contextDependencies
    ], getFileModifiedMap(context));
    // ---
    // Update all context tracking state
    configContextMap.set(tailwindConfigHash, context);
    contextMap.set(sourcePath, context);
    if (!contextSourcesMap.has(context)) {
        contextSourcesMap.set(context, new Set());
    }
    contextSourcesMap.get(context).add(sourcePath);
    return [
        context,
        true,
        mtimesToCommit
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseDependency.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
/**
 * @typedef {{type: 'dependency', file: string} | {type: 'dir-dependency', dir: string, glob: string}} Dependency
 */ /**
 *
 * @param {import('../lib/content.js').ContentPath} contentPath
 * @returns {Dependency[]}
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseDependency;
    }
});
function parseDependency(contentPath) {
    if (contentPath.ignore) {
        return [];
    }
    if (!contentPath.glob) {
        return [
            {
                type: "dependency",
                file: contentPath.base
            }
        ];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ROLLUP_WATCH === "true") {
        // rollup-plugin-postcss does not support dir-dependency messages
        // but directories can be watched in the same way as files
        return [
            {
                type: "dependency",
                file: contentPath.base
            }
        ];
    }
    return [
        {
            type: "dir-dependency",
            dir: contentPath.base,
            glob: contentPath.glob
        }
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/validateConfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateConfig", {
    enumerable: true,
    get: function() {
        return validateConfig;
    }
});
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function validateConfig(config) {
    if (config.content.files.length === 0) {
        _log.default.warn("content-problems", [
            "The `content` option in your Tailwind CSS configuration is missing or empty.",
            "Configure your content sources or your generated CSS will be missing styles.",
            "https://tailwindcss.com/docs/content-configuration"
        ]);
    }
    // Warn if the line-clamp plugin is installed
    try {
        let plugin = (()=>{
            const e = new Error("Cannot find module '@tailwindcss/line-clamp'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        if (config.plugins.includes(plugin)) {
            _log.default.warn("line-clamp-in-core", [
                "As of Tailwind CSS v3.3, the `@tailwindcss/line-clamp` plugin is now included by default.",
                "Remove it from the `plugins` array in your configuration to eliminate this warning."
            ]);
            config.plugins = config.plugins.filter((p)=>p !== plugin);
        }
    } catch  {}
    return config;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseGlob.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseGlob", {
    enumerable: true,
    get: function() {
        return parseGlob;
    }
});
const _globparent = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/glob-parent@6.0.2/node_modules/glob-parent/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function parseGlob(pattern) {
    let glob = pattern;
    let base = (0, _globparent.default)(pattern);
    if (base !== ".") {
        glob = pattern.substr(base.length);
        if (glob.charAt(0) === "/") {
            glob = glob.substr(1);
        }
    }
    if (glob.substr(0, 2) === "./") {
        glob = glob.substr(2);
    } else if (glob.charAt(0) === "/") {
        glob = glob.substr(1);
    }
    return {
        base,
        glob
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/content.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    parseCandidateFiles: function() {
        return parseCandidateFiles;
    },
    resolvedChangedContent: function() {
        return resolvedChangedContent;
    },
    createBroadPatternCheck: function() {
        return createBroadPatternCheck;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"));
const _isglob = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js [app-client] (ecmascript)"));
const _fastglob = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js [app-client] (ecmascript)"));
const _normalizepath = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js [app-client] (ecmascript)"));
const _parseGlob = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseGlob.js [app-client] (ecmascript)");
const _sharedState = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
const _micromatch = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/micromatch@4.0.8/node_modules/micromatch/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function parseCandidateFiles(context, tailwindConfig) {
    let files = tailwindConfig.content.files;
    // Normalize the file globs
    files = files.filter((filePath)=>typeof filePath === "string");
    files = files.map(_normalizepath.default);
    // Split into included and excluded globs
    let tasks = _fastglob.default.generateTasks(files);
    /** @type {ContentPath[]} */ let included = [];
    /** @type {ContentPath[]} */ let excluded = [];
    for (const task of tasks){
        included.push(...task.positive.map((filePath)=>parseFilePath(filePath, false)));
        excluded.push(...task.negative.map((filePath)=>parseFilePath(filePath, true)));
    }
    let paths = [
        ...included,
        ...excluded
    ];
    // Resolve paths relative to the config file or cwd
    paths = resolveRelativePaths(context, paths);
    // Resolve symlinks if possible
    paths = paths.flatMap(resolvePathSymlinks);
    // Update cached patterns
    paths = paths.map(resolveGlobPattern);
    return paths;
}
/**
 *
 * @param {string} filePath
 * @param {boolean} ignore
 * @returns {ContentPath}
 */ function parseFilePath(filePath, ignore) {
    let contentPath = {
        original: filePath,
        base: filePath,
        ignore,
        pattern: filePath,
        glob: null
    };
    if ((0, _isglob.default)(filePath)) {
        Object.assign(contentPath, (0, _parseGlob.parseGlob)(filePath));
    }
    return contentPath;
}
/**
 *
 * @param {ContentPath} contentPath
 * @returns {ContentPath}
 */ function resolveGlobPattern(contentPath) {
    // This is required for Windows support to properly pick up Glob paths.
    // Afaik, this technically shouldn't be needed but there's probably
    // some internal, direct path matching with a normalized path in
    // a package which can't handle mixed directory separators
    let base = (0, _normalizepath.default)(contentPath.base);
    // If the user's file path contains any special characters (like parens) for instance fast-glob
    // is like "OOOH SHINY" and treats them as such. So we have to escape the base path to fix this
    base = _fastglob.default.escapePath(base);
    contentPath.pattern = contentPath.glob ? `${base}/${contentPath.glob}` : base;
    contentPath.pattern = contentPath.ignore ? `!${contentPath.pattern}` : contentPath.pattern;
    return contentPath;
}
/**
 * Resolve each path relative to the config file (when possible) if the experimental flag is enabled
 * Otherwise, resolve relative to the current working directory
 *
 * @param {any} context
 * @param {ContentPath[]} contentPaths
 * @returns {ContentPath[]}
 */ function resolveRelativePaths(context, contentPaths) {
    let resolveFrom = [];
    // Resolve base paths relative to the config file (when possible) if the experimental flag is enabled
    if (context.userConfigPath && context.tailwindConfig.content.relative) {
        resolveFrom = [
            _path.default.dirname(context.userConfigPath)
        ];
    }
    return contentPaths.map((contentPath)=>{
        contentPath.base = _path.default.resolve(...resolveFrom, contentPath.base);
        return contentPath;
    });
}
/**
 * Resolve the symlink for the base directory / file in each path
 * These are added as additional dependencies to watch for changes because
 * some tools (like webpack) will only watch the actual file or directory
 * but not the symlink itself even in projects that use monorepos.
 *
 * @param {ContentPath} contentPath
 * @returns {ContentPath[]}
 */ function resolvePathSymlinks(contentPath) {
    let paths = [
        contentPath
    ];
    try {
        let resolvedPath = _fs.default.realpathSync(contentPath.base);
        if (resolvedPath !== contentPath.base) {
            paths.push({
                ...contentPath,
                base: resolvedPath
            });
        }
    } catch  {
    // TODO: log this?
    }
    return paths;
}
function resolvedChangedContent(context, candidateFiles, fileModifiedMap) {
    let changedContent = context.tailwindConfig.content.files.filter((item)=>typeof item.raw === "string").map(({ raw, extension = "html" })=>({
            content: raw,
            extension
        }));
    let [changedFiles, mTimesToCommit] = resolveChangedFiles(candidateFiles, fileModifiedMap);
    for (let changedFile of changedFiles){
        let extension = _path.default.extname(changedFile).slice(1);
        changedContent.push({
            file: changedFile,
            extension
        });
    }
    return [
        changedContent,
        mTimesToCommit
    ];
}
const LARGE_DIRECTORIES = [
    "node_modules"
];
// Ensures that `node_modules` has to match as-is, otherwise `mynode_modules`
// would match as well, but that is not a known large directory.
const LARGE_DIRECTORIES_REGEX = new RegExp(`(${LARGE_DIRECTORIES.map((dir)=>String.raw`\b${dir}\b`).join("|")})`);
function createBroadPatternCheck(paths) {
    // Detect whether a glob pattern might be too broad. This means that it:
    // - Includes `**`
    // - Does not include any of the known large directories (e.g.: node_modules)
    let maybeBroadPattern = paths.some((path)=>path.includes("**") && !LARGE_DIRECTORIES_REGEX.test(path));
    // Didn't detect any potentially broad patterns, so we can skip further
    // checks.
    if (!maybeBroadPattern) {
        return ()=>{};
    }
    // All glob matchers
    let matchers = [];
    // All glob matchers that explicitly contain any of the known large
    // directories (e.g.: node_modules).
    let explicitMatchers = [];
    // Create matchers for all paths
    for (let path of paths){
        let matcher = _micromatch.default.matcher(path);
        if (LARGE_DIRECTORIES_REGEX.test(path)) {
            explicitMatchers.push(matcher);
        }
        matchers.push(matcher);
    }
    // Keep track of whether we already warned about the broad pattern issue or
    // not. The `log.warn` function already does something similar where we only
    // output the log once. However, with this we can also skip the other checks
    // when we already warned about the broad pattern.
    let warned = false;
    /**
   * @param {string} file
   */ return (file)=>{
        if (warned) return; // Already warned about the broad pattern
        if (explicitMatchers.some((matcher)=>matcher(file))) return; // Explicitly included, so we can skip further checks
        // When a broad pattern is used, we have to double check that the file was
        // not explicitly included in the globs.
        let matchingGlobIndex = matchers.findIndex((matcher)=>matcher(file));
        if (matchingGlobIndex === -1) return; // This should never happen
        let matchingGlob = paths[matchingGlobIndex];
        // Create relative paths to make the output a bit more readable.
        let relativeMatchingGlob = _path.default.relative(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd(), matchingGlob);
        if (relativeMatchingGlob[0] !== ".") relativeMatchingGlob = `./${relativeMatchingGlob}`;
        let largeDirectory = LARGE_DIRECTORIES.find((directory)=>file.includes(directory));
        if (largeDirectory) {
            warned = true;
            _log.default.warn("broad-content-glob-pattern", [
                `Your \`content\` configuration includes a pattern which looks like it's accidentally matching all of \`${largeDirectory}\` and can cause serious performance issues.`,
                `Pattern: \`${relativeMatchingGlob}\``,
                `See our documentation for recommendations:`,
                "https://tailwindcss.com/docs/content-configuration#pattern-recommendations"
            ]);
        }
    };
}
/**
 *
 * @param {ContentPath[]} candidateFiles
 * @param {Map<string, number>} fileModifiedMap
 * @returns {[Set<string>, Map<string, number>]}
 */ function resolveChangedFiles(candidateFiles, fileModifiedMap) {
    let paths = candidateFiles.map((contentPath)=>contentPath.pattern);
    let mTimesToCommit = new Map();
    let checkBroadPattern = createBroadPatternCheck(paths);
    let changedFiles = new Set();
    _sharedState.env.DEBUG && console.time("Finding changed files");
    let files = _fastglob.default.sync(paths, {
        absolute: true
    });
    for (let file of files){
        checkBroadPattern(file);
        let prevModified = fileModifiedMap.get(file) || -Infinity;
        let modified = _fs.default.statSync(file).mtimeMs;
        if (modified > prevModified) {
            changedFiles.add(file);
            mTimesToCommit.set(file, modified);
        }
    }
    _sharedState.env.DEBUG && console.timeEnd("Finding changed files");
    return [
        changedFiles,
        mTimesToCommit
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/load-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useCustomJiti: function() {
        return useCustomJiti;
    },
    loadConfig: function() {
        return loadConfig;
    }
});
const _jiti = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/lib/index.js [app-client] (ecmascript)"));
const _sucrase = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/index.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let jiti = null;
function useCustomJiti(_jiti) {
    jiti = _jiti();
}
function lazyJiti() {
    return jiti !== null && jiti !== void 0 ? jiti : jiti = (0, _jiti.default)(("TURBOPACK compile-time value", "/ROOT/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/load-config.js"), {
        interopDefault: true,
        transform: (opts)=>{
            // Sucrase can't transform import.meta so we have to use Babel
            if (opts.source.includes("import.meta")) {
                return __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/jiti@1.21.7/node_modules/jiti/dist/babel.js [app-client] (ecmascript)")(opts);
            }
            return (0, _sucrase.transform)(opts.source, {
                transforms: [
                    "typescript",
                    "imports"
                ]
            });
        }
    });
}
function loadConfig(path) {
    let config = function() {
        if (!path) return {};
        try {
            return (()=>{
                const e = new Error("Cannot find module as expression is too dynamic");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch  {
            return lazyJiti()(path);
        }
    }();
    var _config_default;
    return (_config_default = config.default) !== null && _config_default !== void 0 ? _config_default : config;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/getModuleDependencies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getModuleDependencies;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let jsExtensions = [
    ".js",
    ".cjs",
    ".mjs"
];
// Given the current file `a.ts`, we want to make sure that when importing `b` that we resolve
// `b.ts` before `b.js`
//
// E.g.:
//
// a.ts
//   b // .ts
//   c // .ts
// a.js
//   b // .js or .ts
let jsResolutionOrder = [
    "",
    ".js",
    ".cjs",
    ".mjs",
    ".ts",
    ".cts",
    ".mts",
    ".jsx",
    ".tsx"
];
let tsResolutionOrder = [
    "",
    ".ts",
    ".cts",
    ".mts",
    ".tsx",
    ".js",
    ".cjs",
    ".mjs",
    ".jsx"
];
function resolveWithExtension(file, extensions) {
    // Try to find `./a.ts`, `./a.ts`, ... from `./a`
    for (let ext of extensions){
        let full = `${file}${ext}`;
        if (_fs.default.existsSync(full) && _fs.default.statSync(full).isFile()) {
            return full;
        }
    }
    // Try to find `./a/index.js` from `./a`
    for (let ext of extensions){
        let full = `${file}/index${ext}`;
        if (_fs.default.existsSync(full)) {
            return full;
        }
    }
    return null;
}
function* _getModuleDependencies(filename, base, seen, ext = _path.default.extname(filename)) {
    // Try to find the file
    let absoluteFile = resolveWithExtension(_path.default.resolve(base, filename), jsExtensions.includes(ext) ? jsResolutionOrder : tsResolutionOrder);
    if (absoluteFile === null) return; // File doesn't exist
    // Prevent infinite loops when there are circular dependencies
    if (seen.has(absoluteFile)) return; // Already seen
    seen.add(absoluteFile);
    // Mark the file as a dependency
    yield absoluteFile;
    // Resolve new base for new imports/requires
    base = _path.default.dirname(absoluteFile);
    ext = _path.default.extname(absoluteFile);
    let contents = _fs.default.readFileSync(absoluteFile, "utf-8");
    // Find imports/requires
    for (let match of [
        ...contents.matchAll(/import[\s\S]*?['"](.{3,}?)['"]/gi),
        ...contents.matchAll(/import[\s\S]*from[\s\S]*?['"](.{3,}?)['"]/gi),
        ...contents.matchAll(/require\(['"`](.+)['"`]\)/gi)
    ]){
        // Bail out if it's not a relative file
        if (!match[1].startsWith(".")) continue;
        yield* _getModuleDependencies(match[1], base, seen, ext);
    }
}
function getModuleDependencies(absoluteFilePath) {
    if (absoluteFilePath === null) return new Set();
    return new Set(_getModuleDependencies(absoluteFilePath, _path.default.dirname(absoluteFilePath), new Set()));
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupTrackingContext.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// @ts-check
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Retrieve an existing context from cache if possible (since contexts are unique per
// source path), or set up a new one (including setting up watchers and registering
// plugins) then return it
"default", {
    enumerable: true,
    get: function() {
        return setupTrackingContext;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _quicklru = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@alloc+quick-lru@5.2.0/node_modules/@alloc/quick-lru/index.js [app-client] (ecmascript)"));
const _hashConfig = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/hashConfig.js [app-client] (ecmascript)"));
const _resolveconfig = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/public/resolve-config.js [app-client] (ecmascript)"));
const _resolveConfigPath = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/resolveConfigPath.js [app-client] (ecmascript)"));
const _setupContextUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupContextUtils.js [app-client] (ecmascript)");
const _parseDependency = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/parseDependency.js [app-client] (ecmascript)"));
const _validateConfig = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/validateConfig.js [app-client] (ecmascript)");
const _content = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/content.js [app-client] (ecmascript)");
const _loadconfig = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/load-config.js [app-client] (ecmascript)");
const _getModuleDependencies = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/getModuleDependencies.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let configPathCache = new _quicklru.default({
    maxSize: 100
});
let candidateFilesCache = new WeakMap();
function getCandidateFiles(context, tailwindConfig) {
    if (candidateFilesCache.has(context)) {
        return candidateFilesCache.get(context);
    }
    let candidateFiles = (0, _content.parseCandidateFiles)(context, tailwindConfig);
    return candidateFilesCache.set(context, candidateFiles).get(context);
}
// Get the config object based on a path
function getTailwindConfig(configOrPath) {
    let userConfigPath = (0, _resolveConfigPath.default)(configOrPath);
    if (userConfigPath !== null) {
        let [prevConfig, prevConfigHash, prevDeps, prevModified] = configPathCache.get(userConfigPath) || [];
        let newDeps = (0, _getModuleDependencies.default)(userConfigPath);
        let modified = false;
        let newModified = new Map();
        for (let file of newDeps){
            let time = _fs.default.statSync(file).mtimeMs;
            newModified.set(file, time);
            if (!prevModified || !prevModified.has(file) || time > prevModified.get(file)) {
                modified = true;
            }
        }
        // It hasn't changed (based on timestamps)
        if (!modified) {
            return [
                prevConfig,
                userConfigPath,
                prevConfigHash,
                prevDeps
            ];
        }
        // It has changed (based on timestamps), or first run
        for (let file of newDeps){
            // When loaded transitively through a TypeScript file `require.cache`
            // may be undefined. Happens in Node 22.18+.
            if (!__turbopack_context__.c) continue;
            delete __turbopack_context__.c[file];
        }
        let newConfig = (0, _validateConfig.validateConfig)((0, _resolveconfig.default)((0, _loadconfig.loadConfig)(userConfigPath)));
        let newHash = (0, _hashConfig.default)(newConfig);
        configPathCache.set(userConfigPath, [
            newConfig,
            newHash,
            newDeps,
            newModified
        ]);
        return [
            newConfig,
            userConfigPath,
            newHash,
            newDeps
        ];
    }
    var _configOrPath_config, _ref;
    // It's a plain object, not a path
    let newConfig = (0, _resolveconfig.default)((_ref = (_configOrPath_config = configOrPath === null || configOrPath === void 0 ? void 0 : configOrPath.config) !== null && _configOrPath_config !== void 0 ? _configOrPath_config : configOrPath) !== null && _ref !== void 0 ? _ref : {});
    newConfig = (0, _validateConfig.validateConfig)(newConfig);
    return [
        newConfig,
        null,
        (0, _hashConfig.default)(newConfig),
        []
    ];
}
function setupTrackingContext(configOrPath) {
    return ({ tailwindDirectives, registerDependency })=>{
        return (root, result)=>{
            let [tailwindConfig, userConfigPath, tailwindConfigHash, configDependencies] = getTailwindConfig(configOrPath);
            let contextDependencies = new Set(configDependencies);
            // If there are no @tailwind or @apply rules, we don't consider this CSS
            // file or its dependencies to be dependencies of the context. Can reuse
            // the context even if they change. We may want to think about `@layer`
            // being part of this trigger too, but it's tough because it's impossible
            // for a layer in one file to end up in the actual @tailwind rule in
            // another file since independent sources are effectively isolated.
            if (tailwindDirectives.size > 0) {
                // Add current css file as a context dependencies.
                contextDependencies.add(result.opts.from);
                // Add all css @import dependencies as context dependencies.
                for (let message of result.messages){
                    if (message.type === "dependency") {
                        contextDependencies.add(message.file);
                    }
                }
            }
            let [context, , mTimesToCommit] = (0, _setupContextUtils.getContext)(root, result, tailwindConfig, userConfigPath, tailwindConfigHash, contextDependencies);
            let fileModifiedMap = (0, _setupContextUtils.getFileModifiedMap)(context);
            let candidateFiles = getCandidateFiles(context, tailwindConfig);
            // If there are no @tailwind or @apply rules, we don't consider this CSS file or it's
            // dependencies to be dependencies of the context. Can reuse the context even if they change.
            // We may want to think about `@layer` being part of this trigger too, but it's tough
            // because it's impossible for a layer in one file to end up in the actual @tailwind rule
            // in another file since independent sources are effectively isolated.
            if (tailwindDirectives.size > 0) {
                // Add template paths as postcss dependencies.
                for (let contentPath of candidateFiles){
                    for (let dependency of (0, _parseDependency.default)(contentPath)){
                        registerDependency(dependency);
                    }
                }
                let [changedContent, contentMTimesToCommit] = (0, _content.resolvedChangedContent)(context, candidateFiles, fileModifiedMap);
                for (let content of changedContent){
                    context.changedContent.push(content);
                }
                // Add the mtimes of the content files to the commit list
                // We can overwrite the existing values because unconditionally
                // This is because:
                // 1. Most of the files here won't be in the map yet
                // 2. If they are that means it's a context dependency
                // and we're reading this after the context. This means
                // that the mtime we just read is strictly >= the context
                // mtime. Unless the user / os is doing something weird
                // in which the mtime would be going backwards. If that
                // happens there's already going to be problems.
                for (let [path, mtime] of contentMTimesToCommit.entries()){
                    mTimesToCommit.set(path, mtime);
                }
            }
            for (let file of configDependencies){
                registerDependency({
                    type: "dependency",
                    file
                });
            }
            // "commit" the new modified time for all context deps
            // We do this here because we want content tracking to
            // read the "old" mtime even when it's a context dependency.
            for (let [path, mtime] of mTimesToCommit.entries()){
                fileModifiedMap.set(path, mtime);
            }
            return context;
        };
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/normalizeTailwindDirectives.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return normalizeTailwindDirectives;
    }
});
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function normalizeTailwindDirectives(root) {
    let tailwindDirectives = new Set();
    let layerDirectives = new Set();
    let applyDirectives = new Set();
    root.walkAtRules((atRule)=>{
        if (atRule.name === "apply") {
            applyDirectives.add(atRule);
        }
        if (atRule.name === "import") {
            if (atRule.params === '"tailwindcss/base"' || atRule.params === "'tailwindcss/base'") {
                atRule.name = "tailwind";
                atRule.params = "base";
            } else if (atRule.params === '"tailwindcss/components"' || atRule.params === "'tailwindcss/components'") {
                atRule.name = "tailwind";
                atRule.params = "components";
            } else if (atRule.params === '"tailwindcss/utilities"' || atRule.params === "'tailwindcss/utilities'") {
                atRule.name = "tailwind";
                atRule.params = "utilities";
            } else if (atRule.params === '"tailwindcss/screens"' || atRule.params === "'tailwindcss/screens'" || atRule.params === '"tailwindcss/variants"' || atRule.params === "'tailwindcss/variants'") {
                atRule.name = "tailwind";
                atRule.params = "variants";
            }
        }
        if (atRule.name === "tailwind") {
            if (atRule.params === "screens") {
                atRule.params = "variants";
            }
            tailwindDirectives.add(atRule.params);
        }
        if ([
            "layer",
            "responsive",
            "variants"
        ].includes(atRule.name)) {
            if ([
                "responsive",
                "variants"
            ].includes(atRule.name)) {
                _log.default.warn(`${atRule.name}-at-rule-deprecated`, [
                    `The \`@${atRule.name}\` directive has been deprecated in Tailwind CSS v3.0.`,
                    `Use \`@layer utilities\` or \`@layer components\` instead.`,
                    "https://tailwindcss.com/docs/upgrade-guide#replace-variants-with-layer"
                ]);
            }
            layerDirectives.add(atRule);
        }
    });
    if (!tailwindDirectives.has("base") || !tailwindDirectives.has("components") || !tailwindDirectives.has("utilities")) {
        for (let rule of layerDirectives){
            if (rule.name === "layer" && [
                "base",
                "components",
                "utilities"
            ].includes(rule.params)) {
                if (!tailwindDirectives.has(rule.params)) {
                    throw rule.error(`\`@layer ${rule.params}\` is used but no matching \`@tailwind ${rule.params}\` directive is present.`);
                }
            } else if (rule.name === "responsive") {
                if (!tailwindDirectives.has("utilities")) {
                    throw rule.error("`@responsive` is used but `@tailwind utilities` is missing.");
                }
            } else if (rule.name === "variants") {
                if (!tailwindDirectives.has("utilities")) {
                    throw rule.error("`@variants` is used but `@tailwind utilities` is missing.");
                }
            }
        }
    }
    return {
        tailwindDirectives,
        applyDirectives
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/cloneNodes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @param {import('postcss').Container[]} nodes
 * @param {any} source
 * @param {any} raws
 * @returns {import('postcss').Container[]}
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return cloneNodes;
    }
});
function cloneNodes(nodes, source = undefined, raws = undefined) {
    return nodes.map((node)=>{
        let cloned = node.clone();
        if (raws !== undefined) {
            cloned.raws.tailwind = {
                ...cloned.raws.tailwind,
                ...raws
            };
        }
        if (source !== undefined) {
            traverse(cloned, (node)=>{
                var _node_raws_tailwind;
                // Do not traverse nodes that have opted
                // to preserve their original source
                let shouldPreserveSource = ((_node_raws_tailwind = node.raws.tailwind) === null || _node_raws_tailwind === void 0 ? void 0 : _node_raws_tailwind.preserveSource) === true && node.source;
                if (shouldPreserveSource) {
                    return false;
                }
                // Otherwise we can safely replace the source
                // And continue traversing
                node.source = source;
            });
        }
        return cloned;
    });
}
/**
 * Traverse a tree of nodes and don't traverse children if the callback
 * returns false. Ideally we'd use Container#walk instead of this
 * function but it stops traversing siblings too.
 *
 * @param {import('postcss').Container} node
 * @param {(node: import('postcss').Container) => boolean} onNode
 */ function traverse(node, onNode) {
    if (onNode(node) !== false) {
        var _node_each;
        (_node_each = node.each) === null || _node_each === void 0 ? void 0 : _node_each.call(node, (child)=>traverse(child, onNode));
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/regex.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    pattern: function() {
        return pattern;
    },
    withoutCapturing: function() {
        return withoutCapturing;
    },
    any: function() {
        return any;
    },
    optional: function() {
        return optional;
    },
    zeroOrMore: function() {
        return zeroOrMore;
    },
    nestedBrackets: function() {
        return nestedBrackets;
    },
    escape: function() {
        return escape;
    }
});
const REGEX_SPECIAL = /[\\^$.*+?()[\]{}|]/g;
const REGEX_HAS_SPECIAL = RegExp(REGEX_SPECIAL.source);
/**
 * @param {string|RegExp|Array<string|RegExp>} source
 */ function toSource(source) {
    source = Array.isArray(source) ? source : [
        source
    ];
    source = source.map((item)=>item instanceof RegExp ? item.source : item);
    return source.join("");
}
function pattern(source) {
    return new RegExp(toSource(source), "g");
}
function withoutCapturing(source) {
    return new RegExp(`(?:${toSource(source)})`, "g");
}
function any(sources) {
    return `(?:${sources.map(toSource).join("|")})`;
}
function optional(source) {
    return `(?:${toSource(source)})?`;
}
function zeroOrMore(source) {
    return `(?:${toSource(source)})*`;
}
function nestedBrackets(open, close, depth = 1) {
    return withoutCapturing([
        escape(open),
        /[^\s]*/,
        depth === 1 ? `[^${escape(open)}${escape(close)}\s]*` : any([
            `[^${escape(open)}${escape(close)}\s]*`,
            nestedBrackets(open, close, depth - 1)
        ]),
        /[^\s]*/,
        escape(close)
    ]);
}
function escape(string) {
    return string && REGEX_HAS_SPECIAL.test(string) ? string.replace(REGEX_SPECIAL, "\\$&") : string || "";
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/defaultExtractor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultExtractor", {
    enumerable: true,
    get: function() {
        return defaultExtractor;
    }
});
const _regex = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/regex.js [app-client] (ecmascript)"));
const _splitAtTopLevelOnly = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/splitAtTopLevelOnly.js [app-client] (ecmascript)");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function defaultExtractor(context) {
    let patterns = Array.from(buildRegExps(context));
    /**
   * @param {string} content
   */ return (content)=>{
        /** @type {(string|string)[]} */ let results = [];
        for (let pattern of patterns){
            var _content_match;
            for (let result of (_content_match = content.match(pattern)) !== null && _content_match !== void 0 ? _content_match : []){
                results.push(clipAtBalancedParens(result));
            }
        }
        // Extract any subclasses from languages like Slim and Pug, eg:
        // div.flex.px-5.underline
        for (let result of results.slice()){
            let segments = (0, _splitAtTopLevelOnly.splitAtTopLevelOnly)(result, ".");
            for(let idx = 0; idx < segments.length; idx++){
                let segment = segments[idx];
                if (idx >= segments.length - 1) {
                    results.push(segment);
                    continue;
                }
                // If the next segment is a number, discard both, for example seeing
                // `px-1` and `5` means the real candidate was `px-1.5` which is already
                // captured.
                let next = Number(segments[idx + 1]);
                if (isNaN(next)) {
                    results.push(segment);
                } else {
                    idx++;
                }
            }
        }
        return results;
    };
}
function* buildRegExps(context) {
    let separator = context.tailwindConfig.separator;
    let prefix = context.tailwindConfig.prefix !== "" ? _regex.optional(_regex.pattern([
        /-?/,
        _regex.escape(context.tailwindConfig.prefix)
    ])) : "";
    let utility = _regex.any([
        // Arbitrary properties (without square brackets)
        /\[[^\s:'"`]+:[^\s\[\]]+\]/,
        // Arbitrary properties with balanced square brackets
        // This is a targeted fix to continue to allow theme()
        // with square brackets to work in arbitrary properties
        // while fixing a problem with the regex matching too much
        /\[[^\s:'"`\]]+:[^\s]+?\[[^\s]+\][^\s]+?\]/,
        // Utilities
        _regex.pattern([
            // Utility Name / Group Name
            _regex.any([
                /-?(?:\w+)/,
                // This is here to make sure @container supports everything that other utilities do
                /@(?:\w+)/
            ]),
            // Normal/Arbitrary values
            _regex.optional(_regex.any([
                _regex.pattern([
                    // Arbitrary values
                    _regex.any([
                        /-(?:\w+-)*\['[^\s]+'\]/,
                        /-(?:\w+-)*\["[^\s]+"\]/,
                        /-(?:\w+-)*\[`[^\s]+`\]/,
                        /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s:\[\]]+\]/
                    ]),
                    // Not immediately followed by an `{[(`
                    /(?![{([]])/,
                    // optionally followed by an opacity modifier
                    /(?:\/[^\s'"`\\><$]*)?/
                ]),
                _regex.pattern([
                    // Arbitrary values
                    _regex.any([
                        /-(?:\w+-)*\['[^\s]+'\]/,
                        /-(?:\w+-)*\["[^\s]+"\]/,
                        /-(?:\w+-)*\[`[^\s]+`\]/,
                        /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s\[\]]+\]/
                    ]),
                    // Not immediately followed by an `{[(`
                    /(?![{([]])/,
                    // optionally followed by an opacity modifier
                    /(?:\/[^\s'"`\\$]*)?/
                ]),
                // Normal values w/o quotes — may include an opacity modifier
                /[-\/][^\s'"`\\$={><]*/
            ]))
        ])
    ]);
    let variantPatterns = [
        // Without quotes
        _regex.any([
            // This is here to provide special support for the `@` variant
            _regex.pattern([
                /@\[[^\s"'`]+\](\/[^\s"'`]+)?/,
                separator
            ]),
            // With variant modifier (e.g.: group-[..]/modifier)
            _regex.pattern([
                /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]\/[\w_-]+/,
                separator
            ]),
            _regex.pattern([
                /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/,
                separator
            ]),
            _regex.pattern([
                /[^\s"'`\[\\]+/,
                separator
            ])
        ]),
        // With quotes allowed
        _regex.any([
            // With variant modifier (e.g.: group-[..]/modifier)
            _regex.pattern([
                /([^\s"'`\[\\]+-)?\[[^\s`]+\]\/[\w_-]+/,
                separator
            ]),
            _regex.pattern([
                /([^\s"'`\[\\]+-)?\[[^\s`]+\]/,
                separator
            ]),
            _regex.pattern([
                /[^\s`\[\\]+/,
                separator
            ])
        ])
    ];
    for (const variantPattern of variantPatterns){
        yield _regex.pattern([
            // Variants
            "((?=((",
            variantPattern,
            ")+))\\2)?",
            // Important (optional)
            /!?/,
            prefix,
            utility
        ]);
    }
    // 5. Inner matches
    yield /[^<>"'`\s.(){}[\]#=%$][^<>"'`\s(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
}
// We want to capture any "special" characters
// AND the characters immediately following them (if there is one)
let SPECIALS = /([\[\]'"`])([^\[\]'"`])?/g;
let ALLOWED_CLASS_CHARACTERS = /[^"'`\s<>\]]+/;
/**
 * Clips a string ensuring that parentheses, quotes, etc… are balanced
 * Used for arbitrary values only
 *
 * We will go past the end of the balanced parens until we find a non-class character
 *
 * Depth matching behavior:
 * w-[calc(100%-theme('spacing[some_key][1.5]'))]']
 *   ┬    ┬          ┬┬       ┬        ┬┬   ┬┬┬┬┬┬┬
 *   1    2          3        4        34   3 210 END
 *   ╰────┴──────────┴────────┴────────┴┴───┴─┴┴┴
 *
 * @param {string} input
 */ function clipAtBalancedParens(input) {
    // We are care about this for arbitrary values
    if (!input.includes("-[")) {
        return input;
    }
    let depth = 0;
    let openStringTypes = [];
    // Find all parens, brackets, quotes, etc
    // Stop when we end at a balanced pair
    // This is naive and will treat mismatched parens as balanced
    // This shouldn't be a problem in practice though
    let matches = input.matchAll(SPECIALS);
    // We can't use lookbehind assertions because we have to support Safari
    // So, instead, we've emulated it using capture groups and we'll re-work the matches to accommodate
    matches = Array.from(matches).flatMap((match)=>{
        const [, ...groups] = match;
        return groups.map((group, idx)=>Object.assign([], match, {
                index: match.index + idx,
                0: group
            }));
    });
    for (let match of matches){
        let char = match[0];
        let inStringType = openStringTypes[openStringTypes.length - 1];
        if (char === inStringType) {
            openStringTypes.pop();
        } else if (char === "'" || char === '"' || char === "`") {
            openStringTypes.push(char);
        }
        if (inStringType) {
            continue;
        } else if (char === "[") {
            depth++;
            continue;
        } else if (char === "]") {
            depth--;
            continue;
        }
        // We've gone one character past the point where we should stop
        // This means that there was an extra closing `]`
        // We'll clip to just before it
        if (depth < 0) {
            return input.substring(0, match.index - 1);
        }
        // We've finished balancing the brackets but there still may be characters that can be included
        // For example in the class `text-[#336699]/[.35]`
        // The depth goes to `0` at the closing `]` but goes up again at the `[`
        // If we're at zero and encounter a non-class character then we clip the class there
        if (depth === 0 && !ALLOWED_CLASS_CHARACTERS.test(char)) {
            return input.substring(0, match.index);
        }
    }
    return input;
} // Regular utilities
 // {{modifier}:}*{namespace}{-{suffix}}*{/{opacityModifier}}?
 // Arbitrary values
 // {{modifier}:}*{namespace}-[{arbitraryValue}]{/{opacityModifier}}?
 // arbitraryValue: no whitespace, balanced quotes unless within quotes, balanced brackets unless within quotes
 // Arbitrary properties
 // {{modifier}:}*[{validCssPropertyName}:{arbitraryValue}]
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/expandTailwindAtRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return expandTailwindAtRules;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _quicklru = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@alloc+quick-lru@5.2.0/node_modules/@alloc/quick-lru/index.js [app-client] (ecmascript)"));
const _sharedState = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)"));
const _generateRules = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/generateRules.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
const _cloneNodes = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/cloneNodes.js [app-client] (ecmascript)"));
const _defaultExtractor = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/defaultExtractor.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
let env = _sharedState.env;
const builtInExtractors = {
    DEFAULT: _defaultExtractor.defaultExtractor
};
const builtInTransformers = {
    DEFAULT: (content)=>content,
    svelte: (content)=>content.replace(/(?:^|\s)class:/g, " ")
};
function getExtractor(context, fileExtension) {
    let extractors = context.tailwindConfig.content.extract;
    return extractors[fileExtension] || extractors.DEFAULT || builtInExtractors[fileExtension] || builtInExtractors.DEFAULT(context);
}
function getTransformer(tailwindConfig, fileExtension) {
    let transformers = tailwindConfig.content.transform;
    return transformers[fileExtension] || transformers.DEFAULT || builtInTransformers[fileExtension] || builtInTransformers.DEFAULT;
}
let extractorCache = new WeakMap();
// Scans template contents for possible classes. This is a hot path on initial build but
// not too important for subsequent builds. The faster the better though — if we can speed
// up these regexes by 50% that could cut initial build time by like 20%.
function getClassCandidates(content, extractor, candidates, seen) {
    if (!extractorCache.has(extractor)) {
        extractorCache.set(extractor, new _quicklru.default({
            maxSize: 25000
        }));
    }
    for (let line of content.split("\n")){
        line = line.trim();
        if (seen.has(line)) {
            continue;
        }
        seen.add(line);
        if (extractorCache.get(extractor).has(line)) {
            for (let match of extractorCache.get(extractor).get(line)){
                candidates.add(match);
            }
        } else {
            let extractorMatches = extractor(line).filter((s)=>s !== "!*");
            let lineMatchesSet = new Set(extractorMatches);
            for (let match of lineMatchesSet){
                candidates.add(match);
            }
            extractorCache.get(extractor).set(line, lineMatchesSet);
        }
    }
}
/**
 *
 * @param {[import('./offsets.js').RuleOffset, import('postcss').Node][]} rules
 * @param {*} context
 */ function buildStylesheet(rules, context) {
    let sortedRules = context.offsets.sort(rules);
    let returnValue = {
        base: new Set(),
        defaults: new Set(),
        components: new Set(),
        utilities: new Set(),
        variants: new Set()
    };
    for (let [sort, rule] of sortedRules){
        returnValue[sort.layer].add(rule);
    }
    return returnValue;
}
function expandTailwindAtRules(context) {
    return async (root)=>{
        let layerNodes = {
            base: null,
            components: null,
            utilities: null,
            variants: null
        };
        root.walkAtRules((rule)=>{
            // Make sure this file contains Tailwind directives. If not, we can save
            // a lot of work and bail early. Also we don't have to register our touch
            // file as a dependency since the output of this CSS does not depend on
            // the source of any templates. Think Vue <style> blocks for example.
            if (rule.name === "tailwind") {
                if (Object.keys(layerNodes).includes(rule.params)) {
                    layerNodes[rule.params] = rule;
                }
            }
        });
        if (Object.values(layerNodes).every((n)=>n === null)) {
            return root;
        }
        var _context_candidates;
        // ---
        // Find potential rules in changed files
        let candidates = new Set([
            ...(_context_candidates = context.candidates) !== null && _context_candidates !== void 0 ? _context_candidates : [],
            _sharedState.NOT_ON_DEMAND
        ]);
        let seen = new Set();
        env.DEBUG && console.time("Reading changed files");
        /** @type {[item: {file?: string, content?: string}, meta: {transformer: any, extractor: any}][]} */ let regexParserContent = [];
        for (let item of context.changedContent){
            let transformer = getTransformer(context.tailwindConfig, item.extension);
            let extractor = getExtractor(context, item.extension);
            regexParserContent.push([
                item,
                {
                    transformer,
                    extractor
                }
            ]);
        }
        const BATCH_SIZE = 500;
        for(let i = 0; i < regexParserContent.length; i += BATCH_SIZE){
            let batch = regexParserContent.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map(async ([{ file, content }, { transformer, extractor }])=>{
                content = file ? await _fs.default.promises.readFile(file, "utf8") : content;
                getClassCandidates(transformer(content), extractor, candidates, seen);
            }));
        }
        env.DEBUG && console.timeEnd("Reading changed files");
        // ---
        // Generate the actual CSS
        let classCacheCount = context.classCache.size;
        env.DEBUG && console.time("Generate rules");
        env.DEBUG && console.time("Sorting candidates");
        let sortedCandidates = new Set([
            ...candidates
        ].sort((a, z)=>{
            if (a === z) return 0;
            if (a < z) return -1;
            return 1;
        }));
        env.DEBUG && console.timeEnd("Sorting candidates");
        (0, _generateRules.generateRules)(sortedCandidates, context);
        env.DEBUG && console.timeEnd("Generate rules");
        // We only ever add to the classCache, so if it didn't grow, there is nothing new.
        env.DEBUG && console.time("Build stylesheet");
        if (context.stylesheetCache === null || context.classCache.size !== classCacheCount) {
            context.stylesheetCache = buildStylesheet([
                ...context.ruleCache
            ], context);
        }
        env.DEBUG && console.timeEnd("Build stylesheet");
        let { defaults: defaultNodes, base: baseNodes, components: componentNodes, utilities: utilityNodes, variants: screenNodes } = context.stylesheetCache;
        // ---
        // Replace any Tailwind directives with generated CSS
        if (layerNodes.base) {
            layerNodes.base.before((0, _cloneNodes.default)([
                ...defaultNodes,
                ...baseNodes
            ], layerNodes.base.source, {
                layer: "base"
            }));
            layerNodes.base.remove();
        }
        if (layerNodes.components) {
            layerNodes.components.before((0, _cloneNodes.default)([
                ...componentNodes
            ], layerNodes.components.source, {
                layer: "components"
            }));
            layerNodes.components.remove();
        }
        if (layerNodes.utilities) {
            layerNodes.utilities.before((0, _cloneNodes.default)([
                ...utilityNodes
            ], layerNodes.utilities.source, {
                layer: "utilities"
            }));
            layerNodes.utilities.remove();
        }
        // We do post-filtering to not alter the emitted order of the variants
        const variantNodes = Array.from(screenNodes).filter((node)=>{
            var _node_raws_tailwind;
            const parentLayer = (_node_raws_tailwind = node.raws.tailwind) === null || _node_raws_tailwind === void 0 ? void 0 : _node_raws_tailwind.parentLayer;
            if (parentLayer === "components") {
                return layerNodes.components !== null;
            }
            if (parentLayer === "utilities") {
                return layerNodes.utilities !== null;
            }
            return true;
        });
        if (layerNodes.variants) {
            layerNodes.variants.before((0, _cloneNodes.default)(variantNodes, layerNodes.variants.source, {
                layer: "variants"
            }));
            layerNodes.variants.remove();
        } else if (variantNodes.length > 0) {
            root.append((0, _cloneNodes.default)(variantNodes, root.source, {
                layer: "variants"
            }));
        }
        var _root_source_end;
        // TODO: Why is the root node having no source location for `end` possible?
        root.source.end = (_root_source_end = root.source.end) !== null && _root_source_end !== void 0 ? _root_source_end : root.source.start;
        // If we've got a utility layer and no utilities are generated there's likely something wrong
        const hasUtilityVariants = variantNodes.some((node)=>{
            var _node_raws_tailwind;
            return ((_node_raws_tailwind = node.raws.tailwind) === null || _node_raws_tailwind === void 0 ? void 0 : _node_raws_tailwind.parentLayer) === "utilities";
        });
        if (layerNodes.utilities && utilityNodes.size === 0 && !hasUtilityVariants) {
            _log.default.warn("content-problems", [
                "No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.",
                "https://tailwindcss.com/docs/content-configuration"
            ]);
        }
        // ---
        if (env.DEBUG) {
            console.log("Potential classes: ", candidates.size);
            console.log("Active contexts: ", _sharedState.contextSourcesMap.size);
        }
        // Clear the cache for the changed files
        context.changedContent = [];
        // Cleanup any leftover @layer atrules
        root.walkAtRules("layer", (rule)=>{
            if (Object.keys(layerNodes).includes(rule.params)) {
                rule.remove();
            }
        });
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/expandApplyAtRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return expandApplyAtRules;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _generateRules = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/generateRules.js [app-client] (ecmascript)");
const _escapeClassName = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/escapeClassName.js [app-client] (ecmascript)"));
const _applyImportantSelector = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/applyImportantSelector.js [app-client] (ecmascript)");
const _pseudoElements = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pseudoElements.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/** @typedef {Map<string, [any, import('postcss').Rule[]]>} ApplyCache */ function extractClasses(node) {
    /** @type {Map<string, Set<string>>} */ let groups = new Map();
    let container = _postcss.default.root({
        nodes: [
            node.clone()
        ]
    });
    container.walkRules((rule)=>{
        (0, _postcssselectorparser.default)((selectors)=>{
            selectors.walkClasses((classSelector)=>{
                let parentSelector = classSelector.parent.toString();
                let classes = groups.get(parentSelector);
                if (!classes) {
                    groups.set(parentSelector, classes = new Set());
                }
                classes.add(classSelector.value);
            });
        }).processSync(rule.selector);
    });
    let normalizedGroups = Array.from(groups.values(), (classes)=>Array.from(classes));
    let classes = normalizedGroups.flat();
    return Object.assign(classes, {
        groups: normalizedGroups
    });
}
let selectorExtractor = (0, _postcssselectorparser.default)();
/**
 * @param {string} ruleSelectors
 */ function extractSelectors(ruleSelectors) {
    return selectorExtractor.astSync(ruleSelectors);
}
function extractBaseCandidates(candidates, separator) {
    let baseClasses = new Set();
    for (let candidate of candidates){
        baseClasses.add(candidate.split(separator).pop());
    }
    return Array.from(baseClasses);
}
function prefix(context, selector) {
    let prefix = context.tailwindConfig.prefix;
    return typeof prefix === "function" ? prefix(selector) : prefix + selector;
}
function* pathToRoot(node) {
    yield node;
    while(node.parent){
        yield node.parent;
        node = node.parent;
    }
}
/**
 * Only clone the node itself and not its children
 *
 * @param {*} node
 * @param {*} overrides
 * @returns
 */ function shallowClone(node, overrides = {}) {
    let children = node.nodes;
    node.nodes = [];
    let tmp = node.clone(overrides);
    node.nodes = children;
    return tmp;
}
/**
 * Clone just the nodes all the way to the top that are required to represent
 * this singular rule in the tree.
 *
 * For example, if we have CSS like this:
 * ```css
 * @media (min-width: 768px) {
 *   @supports (display: grid) {
 *     .foo {
 *       display: grid;
 *       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 *     }
 *   }
 *
 *   @supports (backdrop-filter: blur(1px)) {
 *     .bar {
 *       backdrop-filter: blur(1px);
 *     }
 *   }
 *
 *   .baz {
 *     color: orange;
 *   }
 * }
 * ```
 *
 * And we're cloning `.bar` it'll return a cloned version of what's required for just that single node:
 *
 * ```css
 * @media (min-width: 768px) {
 *   @supports (backdrop-filter: blur(1px)) {
 *     .bar {
 *       backdrop-filter: blur(1px);
 *     }
 *   }
 * }
 * ```
 *
 * @param {import('postcss').Node} node
 */ function nestedClone(node) {
    for (let parent of pathToRoot(node)){
        if (node === parent) {
            continue;
        }
        if (parent.type === "root") {
            break;
        }
        node = shallowClone(parent, {
            nodes: [
                node
            ]
        });
    }
    return node;
}
/**
 * @param {import('postcss').Root} root
 */ function buildLocalApplyCache(root, context) {
    /** @type {ApplyCache} */ let cache = new Map();
    root.walkRules((rule)=>{
        // Ignore rules generated by Tailwind
        for (let node of pathToRoot(rule)){
            var _node_raws_tailwind;
            if (((_node_raws_tailwind = node.raws.tailwind) === null || _node_raws_tailwind === void 0 ? void 0 : _node_raws_tailwind.layer) !== undefined) {
                return;
            }
        }
        // Clone what's required to represent this singular rule in the tree
        let container = nestedClone(rule);
        let sort = context.offsets.create("user");
        for (let className of extractClasses(rule)){
            let list = cache.get(className) || [];
            cache.set(className, list);
            list.push([
                {
                    layer: "user",
                    sort,
                    important: false
                },
                container
            ]);
        }
    });
    return cache;
}
/**
 * @returns {ApplyCache}
 */ function buildApplyCache(applyCandidates, context) {
    for (let candidate of applyCandidates){
        if (context.notClassCache.has(candidate) || context.applyClassCache.has(candidate)) {
            continue;
        }
        if (context.classCache.has(candidate)) {
            context.applyClassCache.set(candidate, context.classCache.get(candidate).map(([meta, rule])=>[
                    meta,
                    rule.clone()
                ]));
            continue;
        }
        let matches = Array.from((0, _generateRules.resolveMatches)(candidate, context));
        if (matches.length === 0) {
            context.notClassCache.add(candidate);
            continue;
        }
        context.applyClassCache.set(candidate, matches);
    }
    return context.applyClassCache;
}
/**
 * Build a cache only when it's first used
 *
 * @param {() => ApplyCache} buildCacheFn
 * @returns {ApplyCache}
 */ function lazyCache(buildCacheFn) {
    let cache = null;
    return {
        get: (name)=>{
            cache = cache || buildCacheFn();
            return cache.get(name);
        },
        has: (name)=>{
            cache = cache || buildCacheFn();
            return cache.has(name);
        }
    };
}
/**
 * Take a series of multiple caches and merge
 * them so they act like one large cache
 *
 * @param {ApplyCache[]} caches
 * @returns {ApplyCache}
 */ function combineCaches(caches) {
    return {
        get: (name)=>caches.flatMap((cache)=>cache.get(name) || []),
        has: (name)=>caches.some((cache)=>cache.has(name))
    };
}
function extractApplyCandidates(params) {
    let candidates = params.split(/[\s\t\n]+/g);
    if (candidates[candidates.length - 1] === "!important") {
        return [
            candidates.slice(0, -1),
            true
        ];
    }
    return [
        candidates,
        false
    ];
}
function processApply(root, context, localCache) {
    let applyCandidates = new Set();
    // Collect all @apply rules and candidates
    let applies = [];
    root.walkAtRules("apply", (rule)=>{
        let [candidates] = extractApplyCandidates(rule.params);
        for (let util of candidates){
            applyCandidates.add(util);
        }
        applies.push(rule);
    });
    // Start the @apply process if we have rules with @apply in them
    if (applies.length === 0) {
        return;
    }
    // Fill up some caches!
    let applyClassCache = combineCaches([
        localCache,
        buildApplyCache(applyCandidates, context)
    ]);
    /**
   * When we have an apply like this:
   *
   * .abc {
   *    @apply hover:font-bold;
   * }
   *
   * What we essentially will do is resolve to this:
   *
   * .abc {
   *    @apply .hover\:font-bold:hover {
   *      font-weight: 500;
   *    }
   * }
   *
   * Notice that the to-be-applied class is `.hover\:font-bold:hover` and that the utility candidate was `hover:font-bold`.
   * What happens in this function is that we prepend a `.` and escape the candidate.
   * This will result in `.hover\:font-bold`
   * Which means that we can replace `.hover\:font-bold` with `.abc` in `.hover\:font-bold:hover` resulting in `.abc:hover`
   *
   * @param {string} selector
   * @param {string} utilitySelectors
   * @param {string} candidate
   */ function replaceSelector(selector, utilitySelectors, candidate) {
        let selectorList = extractSelectors(selector);
        let utilitySelectorsList = extractSelectors(utilitySelectors);
        let candidateList = extractSelectors(`.${(0, _escapeClassName.default)(candidate)}`);
        let candidateClass = candidateList.nodes[0].nodes[0];
        selectorList.each((sel)=>{
            /** @type {Set<import('postcss-selector-parser').Selector>} */ let replaced = new Set();
            utilitySelectorsList.each((utilitySelector)=>{
                let hasReplaced = false;
                utilitySelector = utilitySelector.clone();
                utilitySelector.walkClasses((node)=>{
                    if (node.value !== candidateClass.value) {
                        return;
                    }
                    // Don't replace multiple instances of the same class
                    // This is theoretically correct but only partially
                    // We'd need to generate every possible permutation of the replacement
                    // For example with `.foo + .foo { … }` and `section { @apply foo; }`
                    // We'd need to generate all of these:
                    // - `.foo + .foo`
                    // - `.foo + section`
                    // - `section + .foo`
                    // - `section + section`
                    if (hasReplaced) {
                        return;
                    }
                    // Since you can only `@apply` class names this is sufficient
                    // We want to replace the matched class name with the selector the user is using
                    // Ex: Replace `.text-blue-500` with `.foo.bar:is(.something-cool)`
                    node.replaceWith(...sel.nodes.map((node)=>node.clone()));
                    // Record that we did something and we want to use this new selector
                    replaced.add(utilitySelector);
                    hasReplaced = true;
                });
            });
            // Sort tag names before class names (but only sort each group (separated by a combinator)
            // separately and not in total)
            // This happens when replacing `.bar` in `.foo.bar` with a tag like `section`
            for (let sel of replaced){
                let groups = [
                    []
                ];
                for (let node of sel.nodes){
                    if (node.type === "combinator") {
                        groups.push(node);
                        groups.push([]);
                    } else {
                        let last = groups[groups.length - 1];
                        last.push(node);
                    }
                }
                sel.nodes = [];
                for (let group of groups){
                    if (Array.isArray(group)) {
                        group.sort((a, b)=>{
                            if (a.type === "tag" && b.type === "class") {
                                return -1;
                            } else if (a.type === "class" && b.type === "tag") {
                                return 1;
                            } else if (a.type === "class" && b.type === "pseudo" && b.value.startsWith("::")) {
                                return -1;
                            } else if (a.type === "pseudo" && a.value.startsWith("::") && b.type === "class") {
                                return 1;
                            }
                            return 0;
                        });
                    }
                    sel.nodes = sel.nodes.concat(group);
                }
            }
            sel.replaceWith(...replaced);
        });
        return selectorList.toString();
    }
    let perParentApplies = new Map();
    // Collect all apply candidates and their rules
    for (let apply of applies){
        let [candidates] = perParentApplies.get(apply.parent) || [
            [],
            apply.source
        ];
        perParentApplies.set(apply.parent, [
            candidates,
            apply.source
        ]);
        let [applyCandidates, important] = extractApplyCandidates(apply.params);
        if (apply.parent.type === "atrule") {
            if (apply.parent.name === "screen") {
                let screenType = apply.parent.params;
                throw apply.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${applyCandidates.map((c)=>`${screenType}:${c}`).join(" ")} instead.`);
            }
            throw apply.error(`@apply is not supported within nested at-rules like @${apply.parent.name}. You can fix this by un-nesting @${apply.parent.name}.`);
        }
        for (let applyCandidate of applyCandidates){
            if ([
                prefix(context, "group"),
                prefix(context, "peer")
            ].includes(applyCandidate)) {
                // TODO: Link to specific documentation page with error code.
                throw apply.error(`@apply should not be used with the '${applyCandidate}' utility`);
            }
            if (!applyClassCache.has(applyCandidate)) {
                throw apply.error(`The \`${applyCandidate}\` class does not exist. If \`${applyCandidate}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
            }
            let rules = applyClassCache.get(applyCandidate);
            // Verify that we can apply the class
            for (let [, rule] of rules){
                if (rule.type === "atrule") {
                    continue;
                }
                rule.walkRules(()=>{
                    throw apply.error([
                        `The \`${applyCandidate}\` class cannot be used with \`@apply\` because \`@apply\` does not currently support nested CSS.`,
                        "Rewrite the selector without nesting or configure the `tailwindcss/nesting` plugin:",
                        "https://tailwindcss.com/docs/using-with-preprocessors#nesting"
                    ].join("\n"));
                });
            }
            candidates.push([
                applyCandidate,
                important,
                rules
            ]);
        }
    }
    for (let [parent, [candidates, atApplySource]] of perParentApplies){
        let siblings = [];
        for (let [applyCandidate, important, rules] of candidates){
            let potentialApplyCandidates = [
                applyCandidate,
                ...extractBaseCandidates([
                    applyCandidate
                ], context.tailwindConfig.separator)
            ];
            for (let [meta, node] of rules){
                let parentClasses = extractClasses(parent);
                let nodeClasses = extractClasses(node);
                // When we encounter a rule like `.dark .a, .b { … }` we only want to be left with `[.dark, .a]` if the base applyCandidate is `.a` or with `[.b]` if the base applyCandidate is `.b`
                // So we've split them into groups
                nodeClasses = nodeClasses.groups.filter((classList)=>classList.some((className)=>potentialApplyCandidates.includes(className))).flat();
                // Add base utility classes from the @apply node to the list of
                // classes to check whether it intersects and therefore results in a
                // circular dependency or not.
                //
                // E.g.:
                // .foo {
                //   @apply hover:a; // This applies "a" but with a modifier
                // }
                //
                // We only have to do that with base classes of the `node`, not of the `parent`
                // E.g.:
                // .hover\:foo {
                //   @apply bar;
                // }
                // .bar {
                //   @apply foo;
                // }
                //
                // This should not result in a circular dependency because we are
                // just applying `.foo` and the rule above is `.hover\:foo` which is
                // unrelated. However, if we were to apply `hover:foo` then we _did_
                // have to include this one.
                nodeClasses = nodeClasses.concat(extractBaseCandidates(nodeClasses, context.tailwindConfig.separator));
                let intersects = parentClasses.some((selector)=>nodeClasses.includes(selector));
                if (intersects) {
                    throw node.error(`You cannot \`@apply\` the \`${applyCandidate}\` utility here because it creates a circular dependency.`);
                }
                let root = _postcss.default.root({
                    nodes: [
                        node.clone()
                    ]
                });
                // Make sure every node in the entire tree points back at the @apply rule that generated it
                root.walk((node)=>{
                    node.source = atApplySource;
                });
                let canRewriteSelector = node.type !== "atrule" || node.type === "atrule" && node.name !== "keyframes";
                if (canRewriteSelector) {
                    root.walkRules((rule)=>{
                        // Let's imagine you have the following structure:
                        //
                        // .foo {
                        //   @apply bar;
                        // }
                        //
                        // @supports (a: b) {
                        //   .bar {
                        //     color: blue
                        //   }
                        //
                        //   .something-unrelated {}
                        // }
                        //
                        // In this case we want to apply `.bar` but it happens to be in
                        // an atrule node. We clone that node instead of the nested one
                        // because we still want that @supports rule to be there once we
                        // applied everything.
                        //
                        // However it happens to be that the `.something-unrelated` is
                        // also in that same shared @supports atrule. This is not good,
                        // and this should not be there. The good part is that this is
                        // a clone already and it can be safely removed. The question is
                        // how do we know we can remove it. Basically what we can do is
                        // match it against the applyCandidate that you want to apply. If
                        // it doesn't match the we can safely delete it.
                        //
                        // If we didn't do this, then the `replaceSelector` function
                        // would have replaced this with something that didn't exist and
                        // therefore it removed the selector altogether. In this specific
                        // case it would result in `{}` instead of `.something-unrelated {}`
                        if (!extractClasses(rule).some((candidate)=>candidate === applyCandidate)) {
                            rule.remove();
                            return;
                        }
                        // Strip the important selector from the parent selector if at the beginning
                        let importantSelector = typeof context.tailwindConfig.important === "string" ? context.tailwindConfig.important : null;
                        // We only want to move the "important" selector if this is a Tailwind-generated utility
                        // We do *not* want to do this for user CSS that happens to be structured the same
                        let isGenerated = parent.raws.tailwind !== undefined;
                        let parentSelector = isGenerated && importantSelector && parent.selector.indexOf(importantSelector) === 0 ? parent.selector.slice(importantSelector.length) : parent.selector;
                        // If the selector becomes empty after replacing the important selector
                        // This means that it's the same as the parent selector and we don't want to replace it
                        // Otherwise we'll crash
                        if (parentSelector === "") {
                            parentSelector = parent.selector;
                        }
                        rule.selector = replaceSelector(parentSelector, rule.selector, applyCandidate);
                        // And then re-add it if it was removed
                        if (importantSelector && parentSelector !== parent.selector) {
                            rule.selector = (0, _applyImportantSelector.applyImportantSelector)(rule.selector, importantSelector);
                        }
                        rule.walkDecls((d)=>{
                            d.important = meta.important || important;
                        });
                        // Move pseudo elements to the end of the selector (if necessary)
                        let selector = (0, _postcssselectorparser.default)().astSync(rule.selector);
                        selector.each((sel)=>(0, _pseudoElements.movePseudos)(sel));
                        rule.selector = selector.toString();
                    });
                }
                // It could be that the node we were inserted was removed because the class didn't match
                // If that was the *only* rule in the parent, then we have nothing add so we skip it
                if (!root.nodes[0]) {
                    continue;
                }
                // Insert it
                siblings.push([
                    meta.sort,
                    root.nodes[0]
                ]);
            }
        }
        // Inject the rules, sorted, correctly
        let nodes = context.offsets.sort(siblings).map((s)=>s[1]);
        // `parent` refers to the node at `.abc` in: .abc { @apply mt-2 }
        parent.after(nodes);
    }
    for (let apply of applies){
        // If there are left-over declarations, just remove the @apply
        if (apply.parent.nodes.length > 1) {
            apply.remove();
        } else {
            // The node is empty, drop the full node
            apply.parent.remove();
        }
    }
    // Do it again, in case we have other `@apply` rules
    processApply(root, context, localCache);
}
function expandApplyAtRules(context) {
    return (root)=>{
        // Build a cache of the user's CSS so we can use it to resolve classes used by @apply
        let localCache = lazyCache(()=>buildLocalApplyCache(root, context));
        processApply(root, context, localCache);
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/unit.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);
// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
    var code = value.charCodeAt(0);
    var nextCode;
    if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
            return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
            return true;
        }
        return false;
    }
    if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
            return true;
        }
        return false;
    }
    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
}
// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
    var pos = 0;
    var length = value.length;
    var code;
    var nextCode;
    var nextNextCode;
    if (length === 0 || !likeNumber(value)) {
        return false;
    }
    code = value.charCodeAt(pos);
    if (code === plus || code === minus) {
        pos++;
    }
    while(pos < length){
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
            break;
        }
        pos += 1;
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
                break;
            }
            pos += 1;
        }
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    nextNextCode = value.charCodeAt(pos + 2);
    if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) {
                break;
            }
            pos += 1;
        }
    }
    return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
    };
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;
module.exports = function(input) {
    var tokens = [];
    var value = input;
    var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
    var pos = 0;
    var code = value.charCodeAt(pos);
    var max = value.length;
    var stack = [
        {
            nodes: tokens
        }
    ];
    var balanced = 0;
    var parent;
    var name = "";
    var before = "";
    var after = "";
    while(pos < max){
        // Whitespaces
        if (code <= 32) {
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            token = value.slice(pos, next);
            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) {
                after = token;
            } else if (prev && prev.type === "div") {
                prev.after = token;
                prev.sourceEndIndex += token.length;
            } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && false)) {
                before = token;
            } else {
                tokens.push({
                    type: "space",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            }
            pos = next;
        // Quotes
        } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? "'" : '"';
            token = {
                type: "string",
                sourceIndex: pos,
                quote: quote
            };
            do {
                escape = false;
                next = value.indexOf(quote, next + 1);
                if (~next) {
                    escapePos = next;
                    while(value.charCodeAt(escapePos - 1) === backslash){
                        escapePos -= 1;
                        escape = !escape;
                    }
                } else {
                    value += quote;
                    next = value.length - 1;
                    token.unclosed = true;
                }
            }while (escape)
            token.value = value.slice(pos + 1, next);
            token.sourceEndIndex = token.unclosed ? next : next + 1;
            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);
        // Comments
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            next = value.indexOf("*/", pos);
            token = {
                type: "comment",
                sourceIndex: pos,
                sourceEndIndex: next + 2
            };
            if (next === -1) {
                token.unclosed = true;
                next = value.length;
                token.sourceEndIndex = next;
            }
            token.value = value.slice(pos + 2, next);
            tokens.push(token);
            pos = next + 2;
            code = value.charCodeAt(pos);
        // Operation within calc
        } else if ((code === slash || code === star) && parent && parent.type === "function" && true) {
            token = value[pos];
            tokens.push({
                type: "word",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token
            });
            pos += 1;
            code = value.charCodeAt(pos);
        // Dividers
        } else if (code === slash || code === comma || code === colon) {
            token = value[pos];
            tokens.push({
                type: "div",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token,
                before: before,
                after: ""
            });
            before = "";
            pos += 1;
            code = value.charCodeAt(pos);
        // Open parentheses
        } else if (openParentheses === code) {
            // Whitespaces after open parentheses
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            parenthesesOpenPos = pos;
            token = {
                type: "function",
                sourceIndex: pos - name.length,
                value: name,
                before: value.slice(parenthesesOpenPos + 1, next)
            };
            pos = next;
            if (name === "url" && code !== singleQuote && code !== doubleQuote) {
                next -= 1;
                do {
                    escape = false;
                    next = value.indexOf(")", next + 1);
                    if (~next) {
                        escapePos = next;
                        while(value.charCodeAt(escapePos - 1) === backslash){
                            escapePos -= 1;
                            escape = !escape;
                        }
                    } else {
                        value += ")";
                        next = value.length - 1;
                        token.unclosed = true;
                    }
                }while (escape)
                // Whitespaces before closed
                whitespacePos = next;
                do {
                    whitespacePos -= 1;
                    code = value.charCodeAt(whitespacePos);
                }while (code <= 32)
                if (parenthesesOpenPos < whitespacePos) {
                    if (pos !== whitespacePos + 1) {
                        token.nodes = [
                            {
                                type: "word",
                                sourceIndex: pos,
                                sourceEndIndex: whitespacePos + 1,
                                value: value.slice(pos, whitespacePos + 1)
                            }
                        ];
                    } else {
                        token.nodes = [];
                    }
                    if (token.unclosed && whitespacePos + 1 !== next) {
                        token.after = "";
                        token.nodes.push({
                            type: "space",
                            sourceIndex: whitespacePos + 1,
                            sourceEndIndex: next,
                            value: value.slice(whitespacePos + 1, next)
                        });
                    } else {
                        token.after = value.slice(whitespacePos + 1, next);
                        token.sourceEndIndex = next;
                    }
                } else {
                    token.after = "";
                    token.nodes = [];
                }
                pos = next + 1;
                token.sourceEndIndex = token.unclosed ? next : pos;
                code = value.charCodeAt(pos);
                tokens.push(token);
            } else {
                balanced += 1;
                token.after = "";
                token.sourceEndIndex = pos + 1;
                tokens.push(token);
                stack.push(token);
                tokens = token.nodes = [];
                parent = token;
            }
            name = "";
        // Close parentheses
        } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);
            parent.after = after;
            parent.sourceEndIndex += after.length;
            after = "";
            balanced -= 1;
            stack[stack.length - 1].sourceEndIndex = pos;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;
        // Words
        } else {
            next = pos;
            do {
                if (code === backslash) {
                    next += 1;
                }
                next += 1;
                code = value.charCodeAt(next);
            }while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && true || code === slash && parent.type === "function" && true || code === closeParentheses && balanced))
            token = value.slice(pos, next);
            if (openParentheses === code) {
                name = token;
            } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
                tokens.push({
                    type: "unicode-range",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            } else {
                tokens.push({
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: next,
                    value: token
                });
            }
            pos = next;
        }
    }
    for(pos = stack.length - 1; pos; pos -= 1){
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
    }
    return stack[0].nodes;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/walk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function walk(nodes, cb, bubble) {
    var i, max, node, result;
    for(i = 0, max = nodes.length; i < max; i += 1){
        node = nodes[i];
        if (!bubble) {
            result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
            walk(node.nodes, cb, bubble);
        }
        if (bubble) {
            cb(node, i, nodes);
        }
    }
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function stringifyNode(node, custom) {
    var type = node.type;
    var value = node.value;
    var buf;
    var customResult;
    if (custom && (customResult = custom(node)) !== undefined) {
        return customResult;
    } else if (type === "word" || type === "space") {
        return value;
    } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
    } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
    } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
    } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
            return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
    }
    return value;
}
function stringify(nodes, custom) {
    var result, i;
    if (Array.isArray(nodes)) {
        result = "";
        for(i = nodes.length - 1; ~i; i -= 1){
            result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
    }
    return stringifyNode(nodes, custom);
}
module.exports = stringify;
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/parse.js [app-client] (ecmascript)");
var walk = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/walk.js [app-client] (ecmascript)");
var stringify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/stringify.js [app-client] (ecmascript)");
function ValueParser(value) {
    if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
    }
    return new ValueParser(value);
}
ValueParser.prototype.toString = function() {
    return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};
ValueParser.prototype.walk = function(cb, bubble) {
    walk(this.nodes, cb, bubble);
    return this;
};
ValueParser.unit = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/unit.js [app-client] (ecmascript)");
ValueParser.walk = walk;
ValueParser.stringify = stringify;
module.exports = ValueParser;
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/evaluateTailwindFunctions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _dlv = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.umd.js [app-client] (ecmascript)"));
const _didyoumean = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/didyoumean@1.2.2/node_modules/didyoumean/didYouMean-1.2.1.js [app-client] (ecmascript)"));
const _transformThemeValue = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/transformThemeValue.js [app-client] (ecmascript)"));
const _index = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/value-parser/index.js [app-client] (ecmascript)"));
const _normalizeScreens = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeScreens.js [app-client] (ecmascript)");
const _buildMediaQuery = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/buildMediaQuery.js [app-client] (ecmascript)"));
const _toPath = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/toPath.js [app-client] (ecmascript)");
const _withAlphaVariable = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/withAlphaVariable.js [app-client] (ecmascript)");
const _pluginUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/pluginUtils.js [app-client] (ecmascript)");
const _log = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/log.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isObject(input) {
    return typeof input === "object" && input !== null;
}
function findClosestExistingPath(theme, path) {
    let parts = (0, _toPath.toPath)(path);
    do {
        parts.pop();
        if ((0, _dlv.default)(theme, parts) !== undefined) break;
    }while (parts.length)
    return parts.length ? parts : undefined;
}
function pathToString(path) {
    if (typeof path === "string") return path;
    return path.reduce((acc, cur, i)=>{
        if (cur.includes(".")) return `${acc}[${cur}]`;
        return i === 0 ? cur : `${acc}.${cur}`;
    }, "");
}
function list(items) {
    return items.map((key)=>`'${key}'`).join(", ");
}
function listKeys(obj) {
    return list(Object.keys(obj));
}
function validatePath(config, path, defaultValue, themeOpts = {}) {
    const pathString = Array.isArray(path) ? pathToString(path) : path.replace(/^['"]+|['"]+$/g, "");
    const pathSegments = Array.isArray(path) ? path : (0, _toPath.toPath)(pathString);
    const value = (0, _dlv.default)(config.theme, pathSegments, defaultValue);
    if (value === undefined) {
        let error = `'${pathString}' does not exist in your theme config.`;
        const parentSegments = pathSegments.slice(0, -1);
        const parentValue = (0, _dlv.default)(config.theme, parentSegments);
        if (isObject(parentValue)) {
            const validKeys = Object.keys(parentValue).filter((key)=>validatePath(config, [
                    ...parentSegments,
                    key
                ]).isValid);
            const suggestion = (0, _didyoumean.default)(pathSegments[pathSegments.length - 1], validKeys);
            if (suggestion) {
                error += ` Did you mean '${pathToString([
                    ...parentSegments,
                    suggestion
                ])}'?`;
            } else if (validKeys.length > 0) {
                error += ` '${pathToString(parentSegments)}' has the following valid keys: ${list(validKeys)}`;
            }
        } else {
            const closestPath = findClosestExistingPath(config.theme, pathString);
            if (closestPath) {
                const closestValue = (0, _dlv.default)(config.theme, closestPath);
                if (isObject(closestValue)) {
                    error += ` '${pathToString(closestPath)}' has the following keys: ${listKeys(closestValue)}`;
                } else {
                    error += ` '${pathToString(closestPath)}' is not an object.`;
                }
            } else {
                error += ` Your theme has the following top-level keys: ${listKeys(config.theme)}`;
            }
        }
        return {
            isValid: false,
            error
        };
    }
    if (!(typeof value === "string" || typeof value === "number" || typeof value === "function" || value instanceof String || value instanceof Number || Array.isArray(value))) {
        let error = `'${pathString}' was found but does not resolve to a string.`;
        if (isObject(value)) {
            let validKeys = Object.keys(value).filter((key)=>validatePath(config, [
                    ...pathSegments,
                    key
                ]).isValid);
            if (validKeys.length) {
                error += ` Did you mean something like '${pathToString([
                    ...pathSegments,
                    validKeys[0]
                ])}'?`;
            }
        }
        return {
            isValid: false,
            error
        };
    }
    const [themeSection] = pathSegments;
    return {
        isValid: true,
        value: (0, _transformThemeValue.default)(themeSection)(value, themeOpts)
    };
}
function extractArgs(node, vNodes, functions) {
    vNodes = vNodes.map((vNode)=>resolveVNode(node, vNode, functions));
    let args = [
        ""
    ];
    for (let vNode of vNodes){
        if (vNode.type === "div" && vNode.value === ",") {
            args.push("");
        } else {
            args[args.length - 1] += _index.default.stringify(vNode);
        }
    }
    return args;
}
function resolveVNode(node, vNode, functions) {
    if (vNode.type === "function" && functions[vNode.value] !== undefined) {
        let args = extractArgs(node, vNode.nodes, functions);
        vNode.type = "word";
        vNode.value = functions[vNode.value](node, ...args);
    }
    return vNode;
}
function resolveFunctions(node, input, functions) {
    let hasAnyFn = Object.keys(functions).some((fn)=>input.includes(`${fn}(`));
    if (!hasAnyFn) return input;
    return (0, _index.default)(input).walk((vNode)=>{
        resolveVNode(node, vNode, functions);
    }).toString();
}
let nodeTypePropertyMap = {
    atrule: "params",
    decl: "value"
};
/**
 * @param {string} path
 * @returns {Iterable<[path: string, alpha: string|undefined]>}
 */ function* toPaths(path) {
    // Strip quotes from beginning and end of string
    // This allows the alpha value to be present inside of quotes
    path = path.replace(/^['"]+|['"]+$/g, "");
    let matches = path.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/);
    let alpha = undefined;
    yield [
        path,
        undefined
    ];
    if (matches) {
        path = matches[1];
        alpha = matches[2];
        yield [
            path,
            alpha
        ];
    }
}
/**
 *
 * @param {any} config
 * @param {string} path
 * @param {any} defaultValue
 */ function resolvePath(config, path, defaultValue) {
    const results = Array.from(toPaths(path)).map(([path, alpha])=>{
        return Object.assign(validatePath(config, path, defaultValue, {
            opacityValue: alpha
        }), {
            resolvedPath: path,
            alpha
        });
    });
    var _results_find;
    return (_results_find = results.find((result)=>result.isValid)) !== null && _results_find !== void 0 ? _results_find : results[0];
}
function _default(context) {
    let config = context.tailwindConfig;
    let functions = {
        theme: (node, path, ...defaultValue)=>{
            let { isValid, value, error, alpha } = resolvePath(config, path, defaultValue.length ? defaultValue : undefined);
            if (!isValid) {
                var _parentNode_raws_tailwind;
                let parentNode = node.parent;
                let candidate = (_parentNode_raws_tailwind = parentNode === null || parentNode === void 0 ? void 0 : parentNode.raws.tailwind) === null || _parentNode_raws_tailwind === void 0 ? void 0 : _parentNode_raws_tailwind.candidate;
                if (parentNode && candidate !== undefined) {
                    // Remove this utility from any caches
                    context.markInvalidUtilityNode(parentNode);
                    // Remove the CSS node from the markup
                    parentNode.remove();
                    // Show a warning
                    _log.default.warn("invalid-theme-key-in-class", [
                        `The utility \`${candidate}\` contains an invalid theme value and was not generated.`
                    ]);
                    return;
                }
                throw node.error(error);
            }
            let maybeColor = (0, _pluginUtils.parseColorFormat)(value);
            let isColorFunction = maybeColor !== undefined && typeof maybeColor === "function";
            if (alpha !== undefined || isColorFunction) {
                if (alpha === undefined) {
                    alpha = 1.0;
                }
                value = (0, _withAlphaVariable.withAlphaValue)(maybeColor, alpha, maybeColor);
            }
            return value;
        },
        screen: (node, screen)=>{
            screen = screen.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
            let screens = (0, _normalizeScreens.normalizeScreens)(config.theme.screens);
            let screenDefinition = screens.find(({ name })=>name === screen);
            if (!screenDefinition) {
                throw node.error(`The '${screen}' screen does not exist in your theme.`);
            }
            return (0, _buildMediaQuery.default)(screenDefinition);
        }
    };
    return (root)=>{
        root.walk((node)=>{
            let property = nodeTypePropertyMap[node.type];
            if (property === undefined) {
                return;
            }
            node[property] = resolveFunctions(node, node[property], functions);
        });
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/substituteScreenAtRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _normalizeScreens = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/normalizeScreens.js [app-client] (ecmascript)");
const _buildMediaQuery = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/util/buildMediaQuery.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default({ tailwindConfig: { theme } }) {
    return function(css) {
        css.walkAtRules("screen", (atRule)=>{
            let screen = atRule.params;
            let screens = (0, _normalizeScreens.normalizeScreens)(theme.screens);
            let screenDefinition = screens.find(({ name })=>name === screen);
            if (!screenDefinition) {
                throw atRule.error(`No \`${screen}\` screen found.`);
            }
            atRule.name = "media";
            atRule.params = (0, _buildMediaQuery.default)(screenDefinition);
        });
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/resolveDefaultsAtRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    elementSelectorParser: function() {
        return elementSelectorParser;
    },
    default: function() {
        return resolveDefaultsAtRules;
    }
});
const _postcss = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)"));
const _postcssselectorparser = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)"));
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let getNode = {
    id (node) {
        return _postcssselectorparser.default.attribute({
            attribute: "id",
            operator: "=",
            value: node.value,
            quoteMark: '"'
        });
    }
};
function minimumImpactSelector(nodes) {
    let rest = nodes.filter((node)=>{
        // Keep non-pseudo nodes
        if (node.type !== "pseudo") return true;
        // Keep pseudo nodes that have subnodes
        // E.g.: `:not()` contains subnodes inside the parentheses
        if (node.nodes.length > 0) return true;
        // Keep pseudo `elements`
        // This implicitly means that we ignore pseudo `classes`
        return node.value.startsWith("::") || [
            ":before",
            ":after",
            ":first-line",
            ":first-letter"
        ].includes(node.value);
    }).reverse();
    let searchFor = new Set([
        "tag",
        "class",
        "id",
        "attribute"
    ]);
    let splitPointIdx = rest.findIndex((n)=>searchFor.has(n.type));
    if (splitPointIdx === -1) return rest.reverse().join("").trim();
    let node = rest[splitPointIdx];
    let bestNode = getNode[node.type] ? getNode[node.type](node) : node;
    rest = rest.slice(0, splitPointIdx);
    let combinatorIdx = rest.findIndex((n)=>n.type === "combinator" && n.value === ">");
    if (combinatorIdx !== -1) {
        rest.splice(0, combinatorIdx);
        rest.unshift(_postcssselectorparser.default.universal());
    }
    return [
        bestNode,
        ...rest.reverse()
    ].join("").trim();
}
let elementSelectorParser = (0, _postcssselectorparser.default)((selectors)=>{
    return selectors.map((s)=>{
        let nodes = s.split((n)=>n.type === "combinator" && n.value === " ").pop();
        return minimumImpactSelector(nodes);
    });
});
let cache = new Map();
function extractElementSelector(selector) {
    if (!cache.has(selector)) {
        cache.set(selector, elementSelectorParser.transformSync(selector));
    }
    return cache.get(selector);
}
function resolveDefaultsAtRules({ tailwindConfig }) {
    return (root)=>{
        let variableNodeMap = new Map();
        /** @type {Set<import('postcss').AtRule>} */ let universals = new Set();
        root.walkAtRules("defaults", (rule)=>{
            if (rule.nodes && rule.nodes.length > 0) {
                universals.add(rule);
                return;
            }
            let variable = rule.params;
            if (!variableNodeMap.has(variable)) {
                variableNodeMap.set(variable, new Set());
            }
            variableNodeMap.get(variable).add(rule.parent);
            rule.remove();
        });
        if ((0, _featureFlags.flagEnabled)(tailwindConfig, "optimizeUniversalDefaults")) {
            for (let universal of universals){
                /** @type {Map<string, Set<string>>} */ let selectorGroups = new Map();
                var _variableNodeMap_get;
                let rules = (_variableNodeMap_get = variableNodeMap.get(universal.params)) !== null && _variableNodeMap_get !== void 0 ? _variableNodeMap_get : [];
                for (let rule of rules){
                    for (let selector of extractElementSelector(rule.selector)){
                        // If selector contains a vendor prefix after a pseudo element or class,
                        // we consider them separately because merging the declarations into
                        // a single rule will cause browsers that do not understand the
                        // vendor prefix to throw out the whole rule
                        // Additionally if a selector contains `:has` we also consider
                        // it separately because FF only recently gained support for it
                        let selectorGroupName = selector.includes(":-") || selector.includes("::-") || selector.includes(":has") ? selector : "__DEFAULT__";
                        var _selectorGroups_get;
                        let selectors = (_selectorGroups_get = selectorGroups.get(selectorGroupName)) !== null && _selectorGroups_get !== void 0 ? _selectorGroups_get : new Set();
                        selectorGroups.set(selectorGroupName, selectors);
                        selectors.add(selector);
                    }
                }
                if (selectorGroups.size === 0) {
                    universal.remove();
                    continue;
                }
                for (let [, selectors] of selectorGroups){
                    let universalRule = _postcss.default.rule({
                        source: universal.source
                    });
                    universalRule.selectors = [
                        ...selectors
                    ];
                    universalRule.append(universal.nodes.map((node)=>node.clone()));
                    universal.before(universalRule);
                }
                universal.remove();
            }
        } else if (universals.size) {
            let universalRule = _postcss.default.rule({
                selectors: [
                    "*",
                    "::before",
                    "::after"
                ]
            });
            for (let universal of universals){
                universalRule.append(universal.nodes);
                if (!universalRule.parent) {
                    universal.before(universalRule);
                }
                if (!universalRule.source) {
                    universalRule.source = universal.source;
                }
                universal.remove();
            }
            let backdropRule = universalRule.clone({
                selectors: [
                    "::backdrop"
                ]
            });
            universalRule.after(backdropRule);
        }
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/collapseAdjacentRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return collapseAdjacentRules;
    }
});
let comparisonMap = {
    atrule: [
        "name",
        "params"
    ],
    rule: [
        "selector"
    ]
};
let types = new Set(Object.keys(comparisonMap));
function collapseAdjacentRules() {
    function collapseRulesIn(root) {
        let currentRule = null;
        root.each((node)=>{
            if (!types.has(node.type)) {
                currentRule = null;
                return;
            }
            if (currentRule === null) {
                currentRule = node;
                return;
            }
            let properties = comparisonMap[node.type];
            var _node_property, _currentRule_property;
            if (node.type === "atrule" && node.name === "font-face") {
                currentRule = node;
            } else if (properties.every((property)=>((_node_property = node[property]) !== null && _node_property !== void 0 ? _node_property : "").replace(/\s+/g, " ") === ((_currentRule_property = currentRule[property]) !== null && _currentRule_property !== void 0 ? _currentRule_property : "").replace(/\s+/g, " "))) {
                // An AtRule may not have children (for example if we encounter duplicate @import url(…) rules)
                if (node.nodes) {
                    currentRule.append(node.nodes);
                }
                node.remove();
            } else {
                currentRule = node;
            }
        });
        // After we've collapsed adjacent rules & at-rules, we need to collapse
        // adjacent rules & at-rules that are children of at-rules.
        // We do not care about nesting rules because Tailwind CSS
        // explicitly does not handle rule nesting on its own as
        // the user is expected to use a nesting plugin
        root.each((node)=>{
            if (node.type === "atrule") {
                collapseRulesIn(node);
            }
        });
    }
    return (root)=>{
        collapseRulesIn(root);
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/collapseDuplicateDeclarations.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return collapseDuplicateDeclarations;
    }
});
function collapseDuplicateDeclarations() {
    return (root)=>{
        root.walkRules((node)=>{
            let seen = new Map();
            let droppable = new Set([]);
            let byProperty = new Map();
            node.walkDecls((decl)=>{
                // This could happen if we have nested selectors. In that case the
                // parent will loop over all its declarations but also the declarations
                // of nested rules. With this we ensure that we are shallowly checking
                // declarations.
                if (decl.parent !== node) {
                    return;
                }
                if (seen.has(decl.prop)) {
                    // Exact same value as what we have seen so far
                    if (seen.get(decl.prop).value === decl.value) {
                        // Keep the last one, drop the one we've seen so far
                        droppable.add(seen.get(decl.prop));
                        // Override the existing one with the new value. This is necessary
                        // so that if we happen to have more than one declaration with the
                        // same value, that we keep removing the previous one. Otherwise we
                        // will only remove the *first* one.
                        seen.set(decl.prop, decl);
                        return;
                    }
                    // Not the same value, so we need to check if we can merge it so
                    // let's collect it first.
                    if (!byProperty.has(decl.prop)) {
                        byProperty.set(decl.prop, new Set());
                    }
                    byProperty.get(decl.prop).add(seen.get(decl.prop));
                    byProperty.get(decl.prop).add(decl);
                }
                seen.set(decl.prop, decl);
            });
            // Drop all the duplicate declarations with the exact same value we've
            // already seen so far.
            for (let decl of droppable){
                decl.remove();
            }
            // Analyze the declarations based on its unit, drop all the declarations
            // with the same unit but the last one in the list.
            for (let declarations of byProperty.values()){
                let byUnit = new Map();
                for (let decl of declarations){
                    let unit = resolveUnit(decl.value);
                    if (unit === null) {
                        continue;
                    }
                    if (!byUnit.has(unit)) {
                        byUnit.set(unit, new Set());
                    }
                    byUnit.get(unit).add(decl);
                }
                for (let declarations of byUnit.values()){
                    // Get all but the last one
                    let removableDeclarations = Array.from(declarations).slice(0, -1);
                    for (let decl of removableDeclarations){
                        decl.remove();
                    }
                }
            }
        });
    };
}
let UNITLESS_NUMBER = Symbol("unitless-number");
function resolveUnit(input) {
    let result = /^-?\d*.?\d+([\w%]+)?$/g.exec(input);
    if (result) {
        var _result_;
        return (_result_ = result[1]) !== null && _result_ !== void 0 ? _result_ : UNITLESS_NUMBER;
    }
    return null;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/partitionApplyAtRules.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return expandApplyAtRules;
    }
});
function partitionRules(root) {
    if (!root.walkAtRules) return;
    let applyParents = new Set();
    root.walkAtRules("apply", (rule)=>{
        applyParents.add(rule.parent);
    });
    if (applyParents.size === 0) {
        return;
    }
    for (let rule of applyParents){
        let nodeGroups = [];
        let lastGroup = [];
        for (let node of rule.nodes){
            if (node.type === "atrule" && node.name === "apply") {
                if (lastGroup.length > 0) {
                    nodeGroups.push(lastGroup);
                    lastGroup = [];
                }
                nodeGroups.push([
                    node
                ]);
            } else {
                lastGroup.push(node);
            }
        }
        if (lastGroup.length > 0) {
            nodeGroups.push(lastGroup);
        }
        if (nodeGroups.length === 1) {
            continue;
        }
        for (let group of [
            ...nodeGroups
        ].reverse()){
            let clone = rule.clone({
                nodes: []
            });
            clone.append(group);
            rule.after(clone);
        }
        rule.remove();
    }
}
function expandApplyAtRules() {
    return (root)=>{
        partitionRules(root);
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/processTailwindFeatures.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return processTailwindFeatures;
    }
});
const _normalizeTailwindDirectives = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/normalizeTailwindDirectives.js [app-client] (ecmascript)"));
const _expandTailwindAtRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/expandTailwindAtRules.js [app-client] (ecmascript)"));
const _expandApplyAtRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/expandApplyAtRules.js [app-client] (ecmascript)"));
const _evaluateTailwindFunctions = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/evaluateTailwindFunctions.js [app-client] (ecmascript)"));
const _substituteScreenAtRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/substituteScreenAtRules.js [app-client] (ecmascript)"));
const _resolveDefaultsAtRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/resolveDefaultsAtRules.js [app-client] (ecmascript)"));
const _collapseAdjacentRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/collapseAdjacentRules.js [app-client] (ecmascript)"));
const _collapseDuplicateDeclarations = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/collapseDuplicateDeclarations.js [app-client] (ecmascript)"));
const _partitionApplyAtRules = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/partitionApplyAtRules.js [app-client] (ecmascript)"));
const _setupContextUtils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupContextUtils.js [app-client] (ecmascript)");
const _featureFlags = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/featureFlags.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function processTailwindFeatures(setupContext) {
    return async function(root, result) {
        let { tailwindDirectives, applyDirectives } = (0, _normalizeTailwindDirectives.default)(root);
        // Partition apply rules that are found in the css
        // itself.
        (0, _partitionApplyAtRules.default)()(root, result);
        let context = setupContext({
            tailwindDirectives,
            applyDirectives,
            registerDependency (dependency) {
                result.messages.push({
                    plugin: "tailwindcss",
                    parent: result.opts.from,
                    ...dependency
                });
            },
            createContext (tailwindConfig, changedContent) {
                return (0, _setupContextUtils.createContext)(tailwindConfig, changedContent, root);
            }
        })(root, result);
        if (context.tailwindConfig.separator === "-") {
            throw new Error("The '-' character cannot be used as a custom separator in JIT mode due to parsing ambiguity. Please use another character like '_' instead.");
        }
        (0, _featureFlags.issueFlagNotices)(context.tailwindConfig);
        await (0, _expandTailwindAtRules.default)(context)(root, result);
        // Partition apply rules that are generated by
        // addComponents, addUtilities and so on.
        (0, _partitionApplyAtRules.default)()(root, result);
        (0, _expandApplyAtRules.default)(context)(root, result);
        (0, _evaluateTailwindFunctions.default)(context)(root, result);
        (0, _substituteScreenAtRules.default)(context)(root, result);
        (0, _resolveDefaultsAtRules.default)(context)(root, result);
        (0, _collapseAdjacentRules.default)(context)(root, result);
        (0, _collapseDuplicateDeclarations.default)(context)(root, result);
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/findAtConfigPath.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findAtConfigPath", {
    enumerable: true,
    get: function() {
        return findAtConfigPath;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default((()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findAtConfigPath(root, result) {
    let configPath = null;
    let relativeTo = null;
    root.walkAtRules("config", (rule)=>{
        var _rule_source;
        var _rule_source_input_file, _ref;
        relativeTo = (_ref = (_rule_source_input_file = (_rule_source = rule.source) === null || _rule_source === void 0 ? void 0 : _rule_source.input.file) !== null && _rule_source_input_file !== void 0 ? _rule_source_input_file : result.opts.from) !== null && _ref !== void 0 ? _ref : null;
        if (relativeTo === null) {
            throw rule.error("The `@config` directive cannot be used without setting `from` in your PostCSS config.");
        }
        if (configPath) {
            throw rule.error("Only one `@config` directive is allowed per file.");
        }
        let matches = rule.params.match(/(['"])(.*?)\1/);
        if (!matches) {
            throw rule.error("A path is required when using the `@config` directive.");
        }
        let inputPath = matches[2];
        if (_path.default.isAbsolute(inputPath)) {
            throw rule.error("The `@config` directive cannot be used with an absolute path.");
        }
        configPath = _path.default.resolve(_path.default.dirname(relativeTo), inputPath);
        if (!_fs.default.existsSync(configPath)) {
            throw rule.error(`The config file at "${inputPath}" does not exist. Make sure the path is correct and the file exists.`);
        }
        rule.remove();
    });
    return configPath ? configPath : null;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/plugin.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const _setupTrackingContext = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/setupTrackingContext.js [app-client] (ecmascript)"));
const _processTailwindFeatures = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/processTailwindFeatures.js [app-client] (ecmascript)"));
const _sharedState = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/sharedState.js [app-client] (ecmascript)");
const _findAtConfigPath = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/lib/findAtConfigPath.js [app-client] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
module.exports = function tailwindcss(configOrPath) {
    return {
        postcssPlugin: "tailwindcss",
        plugins: [
            _sharedState.env.DEBUG && function(root) {
                console.log("\n");
                console.time("JIT TOTAL");
                return root;
            },
            async function(root, result) {
                var _findAtConfigPath1;
                // Use the path for the `@config` directive if it exists, otherwise use the
                // path for the file being processed
                configOrPath = (_findAtConfigPath1 = (0, _findAtConfigPath.findAtConfigPath)(root, result)) !== null && _findAtConfigPath1 !== void 0 ? _findAtConfigPath1 : configOrPath;
                let context = (0, _setupTrackingContext.default)(configOrPath);
                if (root.type === "document") {
                    let roots = root.nodes.filter((node)=>node.type === "root");
                    for (const root of roots){
                        if (root.type === "root") {
                            await (0, _processTailwindFeatures.default)(context)(root, result);
                        }
                    }
                    return;
                }
                await (0, _processTailwindFeatures.default)(context)(root, result);
            },
            _sharedState.env.DEBUG && function(root) {
                console.timeEnd("JIT TOTAL");
                console.log("\n");
                return root;
            }
        ].filter(Boolean)
    };
};
module.exports.postcss = true;
}),
"[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/tailwindcss@3.4.18/node_modules/tailwindcss/lib/plugin.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=bb594_tailwindcss_f072307d._.js.map