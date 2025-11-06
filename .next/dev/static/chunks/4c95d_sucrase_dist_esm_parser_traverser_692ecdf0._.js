(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loc",
    ()=>Loc,
    "augmentError",
    ()=>augmentError,
    "getNextContextId",
    ()=>getNextContextId,
    "initParser",
    ()=>initParser,
    "input",
    ()=>input,
    "isFlowEnabled",
    ()=>isFlowEnabled,
    "isJSXEnabled",
    ()=>isJSXEnabled,
    "isTypeScriptEnabled",
    ()=>isTypeScriptEnabled,
    "locationForIndex",
    ()=>locationForIndex,
    "nextContextId",
    ()=>nextContextId,
    "state",
    ()=>state
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
;
;
let isJSXEnabled;
let isTypeScriptEnabled;
let isFlowEnabled;
let state;
let input;
let nextContextId;
function getNextContextId() {
    return nextContextId++;
}
function augmentError(error) {
    if ("pos" in error) {
        const loc = locationForIndex(error.pos);
        error.message += ` (${loc.line}:${loc.column})`;
        error.loc = loc;
    }
    return error;
}
class Loc {
    constructor(line, column){
        this.line = line;
        this.column = column;
    }
}
function locationForIndex(pos) {
    let line = 1;
    let column = 1;
    for(let i = 0; i < pos; i++){
        if (input.charCodeAt(i) === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lineFeed) {
            line++;
            column = 1;
        } else {
            column++;
        }
    }
    return new Loc(line, column);
}
function initParser(inputCode, isJSXEnabledArg, isTypeScriptEnabledArg, isFlowEnabledArg) {
    input = inputCode;
    state = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    nextContextId = 1;
    isJSXEnabled = isJSXEnabledArg;
    isTypeScriptEnabled = isTypeScriptEnabledArg;
    isFlowEnabled = isFlowEnabledArg;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canInsertSemicolon",
    ()=>canInsertSemicolon,
    "eatContextual",
    ()=>eatContextual,
    "expect",
    ()=>expect,
    "expectContextual",
    ()=>expectContextual,
    "hasFollowingLineBreak",
    ()=>hasFollowingLineBreak,
    "hasPrecedingLineBreak",
    ()=>hasPrecedingLineBreak,
    "isContextual",
    ()=>isContextual,
    "isLineTerminator",
    ()=>isLineTerminator,
    "isLookaheadContextual",
    ()=>isLookaheadContextual,
    "semicolon",
    ()=>semicolon,
    "unexpected",
    ()=>unexpected
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
;
;
;
;
function isContextual(contextualKeyword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword === contextualKeyword;
}
function isLookaheadContextual(contextualKeyword) {
    const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadTypeAndKeyword"])();
    return l.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && l.contextualKeyword === contextualKeyword;
}
function eatContextual(contextualKeyword) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword === contextualKeyword && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
}
function expectContextual(contextualKeyword) {
    if (!eatContextual(contextualKeyword)) {
        unexpected();
    }
}
function canInsertSemicolon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eof) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || hasPrecedingLineBreak();
}
function hasPrecedingLineBreak() {
    const prevToken = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1];
    const lastTokEnd = prevToken ? prevToken.end : 0;
    for(let i = lastTokEnd; i < __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start; i++){
        const code = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].charCodeAt(i);
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lineFeed || code === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].carriageReturn || code === 0x2028 || code === 0x2029) {
            return true;
        }
    }
    return false;
}
function hasFollowingLineBreak() {
    const nextStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTokenStart"])();
    for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].end; i < nextStart; i++){
        const code = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].charCodeAt(i);
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lineFeed || code === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].carriageReturn || code === 0x2028 || code === 0x2029) {
            return true;
        }
    }
    return false;
}
function isLineTerminator() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi) || canInsertSemicolon();
}
function semicolon() {
    if (!isLineTerminator()) {
        unexpected('Unexpected token, expected ";"');
    }
}
function expect(type) {
    const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(type);
    if (!matched) {
        unexpected(`Unexpected token, expected "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTokenType"])(type)}"`);
    }
}
function unexpected(message = "Unexpected token", pos = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = new SyntaxError(message);
    err.pos = pos;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error = err;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].pos = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finishToken"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eof);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/lval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markPriorBindingIdentifier",
    ()=>markPriorBindingIdentifier,
    "parseBindingAtom",
    ()=>parseBindingAtom,
    "parseBindingIdentifier",
    ()=>parseBindingIdentifier,
    "parseBindingList",
    ()=>parseBindingList,
    "parseImportedIdentifier",
    ()=>parseImportedIdentifier,
    "parseMaybeDefault",
    ()=>parseMaybeDefault,
    "parseRest",
    ()=>parseRest,
    "parseSpread",
    ()=>parseSpread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/flow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/typescript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/expression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function parseSpread() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeAssign"])(false);
}
function parseRest(isBlockScope) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    parseBindingAtom(isBlockScope);
}
function parseBindingIdentifier(isBlockScope) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
    markPriorBindingIdentifier(isBlockScope);
}
function parseImportedIdentifier() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ImportDeclaration;
}
function markPriorBindingIdentifier(isBlockScope) {
    let identifierRole;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth === 0) {
        identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].TopLevelDeclaration;
    } else if (isBlockScope) {
        identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].BlockScopedDeclaration;
    } else {
        identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].FunctionScopedDeclaration;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = identifierRole;
}
function parseBindingAtom(isBlockScope) {
    switch(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._this:
            {
                // In TypeScript, "this" may be the name of a parameter, so allow it.
                const oldIsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushTypeContext"])(0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popTypeContext"])(oldIsType);
                return;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._yield:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name:
            {
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name;
                parseBindingIdentifier(isBlockScope);
                return;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                parseBindingList(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR, isBlockScope, true);
                return;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseObj"])(true, isBlockScope);
            return;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
    }
}
function parseBindingList(close, isBlockScope, allowEmpty = false, allowModifiers = false, contextId = 0) {
    let first = true;
    let hasRemovedComma = false;
    const firstItemTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(close) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
            // After a "this" type in TypeScript, we need to set the following comma (if any) to also be
            // a type token so that it will be removed.
            if (!hasRemovedComma && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[firstItemTokenIndex].isType) {
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].isType = true;
                hasRemovedComma = true;
            }
        }
        if (allowEmpty && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
        // Empty item; nothing further to parse for this item.
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(close)) {
            break;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].ellipsis)) {
            parseRest(isBlockScope);
            parseAssignableListItemTypes();
            // Support rest element trailing commas allowed by TypeScript <2.9.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(close);
            break;
        } else {
            parseAssignableListItem(allowModifiers, isBlockScope);
        }
    }
}
function parseAssignableListItem(allowModifiers, isBlockScope) {
    if (allowModifiers) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseModifiers"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._public,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._protected,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._private,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._readonly,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._override
        ]);
    }
    parseMaybeDefault(isBlockScope);
    parseAssignableListItemTypes();
    parseMaybeDefault(isBlockScope, true);
}
function parseAssignableListItemTypes() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseAssignableListItemTypes"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseAssignableListItemTypes"])();
    }
}
function parseMaybeDefault(isBlockScope, leftAlreadyParsed = false) {
    if (!leftAlreadyParsed) {
        parseBindingAtom(isBlockScope);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
        return;
    }
    const eqIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeAssign"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[eqIndex].rhsEndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/expression.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint max-len: 0 */ // A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser
__turbopack_context__.s([
    "StopState",
    ()=>StopState,
    "atPossibleAsync",
    ()=>atPossibleAsync,
    "baseParseConditional",
    ()=>baseParseConditional,
    "baseParseMaybeAssign",
    ()=>baseParseMaybeAssign,
    "baseParseSubscript",
    ()=>baseParseSubscript,
    "baseParseSubscripts",
    ()=>baseParseSubscripts,
    "parseArrow",
    ()=>parseArrow,
    "parseArrowExpression",
    ()=>parseArrowExpression,
    "parseCallExpressionArguments",
    ()=>parseCallExpressionArguments,
    "parseExprAtom",
    ()=>parseExprAtom,
    "parseExprSubscripts",
    ()=>parseExprSubscripts,
    "parseExpression",
    ()=>parseExpression,
    "parseFunctionBody",
    ()=>parseFunctionBody,
    "parseFunctionBodyAndFinish",
    ()=>parseFunctionBodyAndFinish,
    "parseIdentifier",
    ()=>parseIdentifier,
    "parseLiteral",
    ()=>parseLiteral,
    "parseMaybeAssign",
    ()=>parseMaybeAssign,
    "parseMaybeUnary",
    ()=>parseMaybeUnary,
    "parseMethod",
    ()=>parseMethod,
    "parseObj",
    ()=>parseObj,
    "parseParenExpression",
    ()=>parseParenExpression,
    "parsePropertyName",
    ()=>parsePropertyName,
    "parseTemplate",
    ()=>parseTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/flow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$jsx$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/jsx/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/typescript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/identifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/lval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/statement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class StopState {
    constructor(stop){
        this.stop = stop;
    }
}
function parseExpression(noIn = false) {
    parseMaybeAssign(noIn);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)){
            parseMaybeAssign(noIn);
        }
    }
}
function parseMaybeAssign(noIn = false, isWithinParens = false) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseMaybeAssign"])(noIn, isWithinParens);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseMaybeAssign"])(noIn, isWithinParens);
    } else {
        return baseParseMaybeAssign(noIn, isWithinParens);
    }
}
function baseParseMaybeAssign(noIn, isWithinParens) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._yield)) {
        parseYield();
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._yield)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].potentialArrowAt = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    }
    const wasArrow = parseMaybeConditional(noIn);
    if (isWithinParens) {
        parseParenItem();
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IS_ASSIGN) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        parseMaybeAssign(noIn);
        return false;
    }
    return wasArrow;
}
// Parse a ternary conditional (`?:`) operator.
// Returns true if the expression was an arrow function.
function parseMaybeConditional(noIn) {
    const wasArrow = parseExprOps(noIn);
    if (wasArrow) {
        return true;
    }
    parseConditional(noIn);
    return false;
}
function parseConditional(noIn) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedParseConditional"])(noIn);
    } else {
        baseParseConditional(noIn);
    }
}
function baseParseConditional(noIn) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].question)) {
        parseMaybeAssign();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon);
        parseMaybeAssign(noIn);
    }
}
// Start the precedence parser.
// Returns true if this was an arrow function
function parseExprOps(noIn) {
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    const wasArrow = parseMaybeUnary();
    if (wasArrow) {
        return true;
    }
    parseExprOp(startTokenIndex, -1, noIn);
    return false;
}
// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.
function parseExprOp(startTokenIndex, minPrec, noIn) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._in & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PRECEDENCE_MASK) > minPrec && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrecedingLineBreak"])() && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._satisfies))) {
        const oldIsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushTypeContext"])(1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseType"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popTypeContext"])(oldIsType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rescan_gt"])();
        parseExprOp(startTokenIndex, minPrec, noIn);
        return;
    }
    const prec = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].PRECEDENCE_MASK;
    if (prec > 0 && (!noIn || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._in))) {
        if (prec > minPrec) {
            const op = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            if (op === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].nullishCoalescing) {
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].nullishStartIndex = startTokenIndex;
            }
            const rhsStartTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            parseMaybeUnary();
            // Extend the right operand of this operator if possible.
            parseExprOp(rhsStartTokenIndex, op & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IS_RIGHT_ASSOCIATIVE ? prec - 1 : prec, noIn);
            if (op === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].nullishCoalescing) {
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[startTokenIndex].numNullishCoalesceStarts++;
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].numNullishCoalesceEnds++;
            }
            // Continue with any future operator holding this expression as the left operand.
            parseExprOp(startTokenIndex, minPrec, noIn);
        }
    }
}
function parseMaybeUnary() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSXEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseTypeAssertion"])();
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._module) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadCharCode"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].leftCurlyBrace && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasFollowingLineBreak"])()) {
        parseModuleExpression();
        return false;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IS_PREFIX) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        parseMaybeUnary();
        return false;
    }
    const wasArrow = parseExprSubscripts();
    if (wasArrow) {
        return true;
    }
    while(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IS_POSTFIX && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])()){
        // The tokenizer calls everything a preincrement, so make it a postincrement when
        // we see it in that context.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].preIncDec) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].postIncDec;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    }
    return false;
}
function parseExprSubscripts() {
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    const wasArrow = parseExprAtom();
    if (wasArrow) {
        return true;
    }
    parseSubscripts(startTokenIndex);
    // If there was any optional chain operation, the start token would be marked
    // as such, so also mark the end now.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length > startTokenIndex && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[startTokenIndex].isOptionalChainStart) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].isOptionalChainEnd = true;
    }
    return false;
}
function parseSubscripts(startTokenIndex, noCalls = false) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseSubscripts"])(startTokenIndex, noCalls);
    } else {
        baseParseSubscripts(startTokenIndex, noCalls);
    }
}
function baseParseSubscripts(startTokenIndex, noCalls = false) {
    const stopState = new StopState(false);
    do {
        parseSubscript(startTokenIndex, noCalls, stopState);
    }while (!stopState.stop && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error)
}
function parseSubscript(startTokenIndex, noCalls, stopState) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseSubscript"])(startTokenIndex, noCalls, stopState);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseSubscript"])(startTokenIndex, noCalls, stopState);
    } else {
        baseParseSubscript(startTokenIndex, noCalls, stopState);
    }
}
function baseParseSubscript(startTokenIndex, noCalls, stopState) {
    if (!noCalls && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].doubleColon)) {
        parseNoCallExpr();
        stopState.stop = true;
        // Propagate startTokenIndex so that `a::b?.()` will keep `a` as the first token. We may want
        // to revisit this in the future when fully supporting bind syntax.
        parseSubscripts(startTokenIndex, noCalls);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[startTokenIndex].isOptionalChainStart = true;
        if (noCalls && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) {
            stopState.stop = true;
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].subscriptStartIndex = startTokenIndex;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
            parseExpression();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            parseCallExpressionArguments();
        } else {
            parseMaybePrivateName();
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].subscriptStartIndex = startTokenIndex;
        parseMaybePrivateName();
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].subscriptStartIndex = startTokenIndex;
        parseExpression();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR);
    } else if (!noCalls && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        if (atPossibleAsync()) {
            // We see "async", but it's possible it's a usage of the name "async". Parse as if it's a
            // function call, and if we see an arrow later, backtrack and re-parse as a parameter list.
            const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].snapshot();
            const asyncStartTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].subscriptStartIndex = startTokenIndex;
            const callContextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextContextId"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = callContextId;
            parseCallExpressionArguments();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = callContextId;
            if (shouldParseAsyncArrow()) {
                // We hit an arrow, so backtrack and start again parsing function parameters.
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
                stopState.stop = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunctionParams"])();
                parseAsyncArrowFromCallExpression(asyncStartTokenIndex);
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].subscriptStartIndex = startTokenIndex;
            const callContextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextContextId"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = callContextId;
            parseCallExpressionArguments();
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = callContextId;
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].backQuote)) {
        // Tagged template expression.
        parseTemplate();
    } else {
        stopState.stop = true;
    }
}
function atPossibleAsync() {
    // This was made less strict than the original version to avoid passing around nodes, but it
    // should be safe to have rare false positives here.
    return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])();
}
function parseCallExpressionArguments() {
    let first = true;
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR)) {
                break;
            }
        }
        parseExprListItem(false);
    }
}
function shouldParseAsyncArrow() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow);
}
function parseAsyncArrowFromCallExpression(startTokenIndex) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsStartParseAsyncArrowFromCallExpression"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowStartParseAsyncArrowFromCallExpression"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow);
    parseArrowExpression(startTokenIndex);
}
// Parse a no-call expression (like argument of `new` or `::` operators).
function parseNoCallExpr() {
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    parseExprAtom();
    parseSubscripts(startTokenIndex, true);
}
function parseExprAtom() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].modulo)) {
        // V8 intrinsic expression. Just parse the identifier, and the function invocation is parsed
        // naturally.
        parseIdentifier();
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxText) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxEmptyText)) {
        parseLiteral();
        return false;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan) && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSXEnabled"]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$jsx$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxParseElement"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        return false;
    }
    const canBeArrow = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].potentialArrowAt === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    switch(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].slash:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].assign:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retokenizeSlashAsRegex"])();
        // Fall through.
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._super:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._this:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].regexp:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].num:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bigint:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].decimal:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._null:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._true:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._false:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
                // import.meta
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                parseIdentifier();
            }
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name:
            {
                const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
                const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
                const contextualKeyword = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword;
                parseIdentifier();
                if (contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await) {
                    parseAwait();
                    return false;
                } else if (contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])()) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunction"])(functionStart, false);
                    return false;
                } else if (canBeArrow && contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingIdentifier"])(false);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow);
                    // let foo = async bar => {};
                    parseArrowExpression(startTokenIndex);
                    return true;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._do) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])()) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBlock"])();
                    return false;
                }
                if (canBeArrow && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPriorBindingIdentifier"])(false);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow);
                    parseArrowExpression(startTokenIndex);
                    return true;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].Access;
                return false;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._do:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBlock"])();
                return false;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL:
            {
                const wasArrow = parseParenAndDistinguishExpression(canBeArrow);
                return wasArrow;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            parseExprList(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR, true);
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL:
            parseObj(false, false);
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function:
            parseFunctionExpression();
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDecorators"])();
        // Fall through.
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseClass"])(false);
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._new:
            parseNew();
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].backQuote:
            parseTemplate();
            return false;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].doubleColon:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                parseNoCallExpr();
                return false;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].hash:
            {
                const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadCharCode"])();
                if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_IDENTIFIER_START"][code] || code === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].backslash) {
                    parseMaybePrivateName();
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                }
                // Smart pipeline topic reference.
                return false;
            }
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
            return false;
    }
}
function parseMaybePrivateName() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].hash);
    parseIdentifier();
}
function parseFunctionExpression() {
    const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    parseIdentifier();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
        // function.sent
        parseIdentifier();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunction"])(functionStart, false);
}
function parseLiteral() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
}
function parseParenExpression() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
    parseExpression();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
}
// Returns true if this was an arrow expression.
function parseParenAndDistinguishExpression(canBeArrow) {
    // Assume this is a normal parenthesized expression, but if we see an arrow, we'll bail and
    // start over as a parameter list.
    const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].snapshot();
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
    let first = true;
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR)) {
                break;
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].ellipsis)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseRest"])(false);
            parseParenItem();
            break;
        } else {
            parseMaybeAssign(false, true);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    if (canBeArrow && shouldParseArrow()) {
        const wasArrow = parseArrow();
        if (wasArrow) {
            // It was an arrow function this whole time, so start over and parse it as params so that we
            // get proper token annotations.
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
            // Don't specify a context ID because arrow functions don't need a context ID.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunctionParams"])();
            parseArrow();
            parseArrowExpression(startTokenIndex);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error) {
                // Nevermind! This must have been something that looks very much like an
                // arrow function but where its "parameter list" isn't actually a valid
                // parameter list. Force non-arrow parsing.
                // See https://github.com/alangpierce/sucrase/issues/666 for an example.
                __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
                parseParenAndDistinguishExpression(false);
                return false;
            }
            return true;
        }
    }
    return false;
}
function shouldParseArrow() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])();
}
function parseArrow() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseArrow"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseArrow"])();
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow);
    }
}
function parseParenItem() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedParseParenItem"])();
    }
}
// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.
function parseNew() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._new);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
        // new.target
        parseIdentifier();
        return;
    }
    parseNewCallee();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowStartParseNewArguments"])();
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        parseExprList(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    }
}
function parseNewCallee() {
    parseNoCallExpr();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot);
}
function parseTemplate() {
    // Finish `, read quasi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTemplateToken"])();
    // Finish quasi, read ${
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTemplateToken"])();
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].backQuote) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dollarBraceL);
        parseExpression();
        // Finish }, read quasi
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTemplateToken"])();
        // Finish quasi, read either ${ or `
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTemplateToken"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
}
function parseObj(isPattern, isBlockScope) {
    // Attach a context ID to the object open and close brace and each object key.
    const contextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextContextId"])();
    let first = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                break;
            }
        }
        let isGenerator = false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].ellipsis)) {
            const previousIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSpread"])();
            if (isPattern) {
                // Mark role when the only thing being spread over is an identifier.
                if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length === previousIndex + 2) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPriorBindingIdentifier"])(isBlockScope);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                    break;
                }
            }
            continue;
        }
        if (!isPattern) {
            isGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
        }
        if (!isPattern && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async)) {
            if (isGenerator) (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
            parseIdentifier();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
            // This is a key called "async" rather than an async function.
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                    isGenerator = true;
                }
                parsePropertyName(contextId);
            }
        } else {
            parsePropertyName(contextId);
        }
        parseObjPropValue(isPattern, isBlockScope, contextId);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
}
function isGetterOrSetterMethod(isPattern) {
    // We go off of the next and don't bother checking if the node key is actually "get" or "set".
    // This lets us avoid generating a node, and should only make the validation worse.
    return !isPattern && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string) || // get "string"() {}
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].num) || // get 1() {}
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL) || // get ["string"]() {}
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || // get foo() {}
    !!(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type & __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].IS_KEYWORD)) // get debugger() {}
    ;
}
// Returns true if this was a method.
function parseObjectMethod(isPattern, objectContextId) {
    // We don't need to worry about modifiers because object methods can't have optional bodies, so
    // the start will never be used.
    const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        if (isPattern) (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
        parseMethod(functionStart, /* isConstructor */ false);
        return true;
    }
    if (isGetterOrSetterMethod(isPattern)) {
        parsePropertyName(objectContextId);
        parseMethod(functionStart, /* isConstructor */ false);
        return true;
    }
    return false;
}
function parseObjectProperty(isPattern, isBlockScope) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon)) {
        if (isPattern) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeDefault"])(isBlockScope);
        } else {
            parseMaybeAssign(false);
        }
        return;
    }
    // Since there's no colon, we assume this is an object shorthand.
    // If we're in a destructuring, we've now discovered that the key was actually an assignee, so
    // we need to tag it as a declaration with the appropriate scope. Otherwise, we might need to
    // transform it on access, so mark it as a normal object shorthand.
    let identifierRole;
    if (isPattern) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth === 0) {
            identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthandTopLevelDeclaration;
        } else if (isBlockScope) {
            identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthandBlockScopedDeclaration;
        } else {
            identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthandFunctionScopedDeclaration;
        }
    } else {
        identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthand;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = identifierRole;
    // Regardless of whether we know this to be a pattern or if we're in an ambiguous context, allow
    // parsing as if there's a default value.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeDefault"])(isBlockScope, true);
}
function parseObjPropValue(isPattern, isBlockScope, objectContextId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsStartParseObjPropValue"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowStartParseObjPropValue"])();
    }
    const wasMethod = parseObjectMethod(isPattern, objectContextId);
    if (!wasMethod) {
        parseObjectProperty(isPattern, isBlockScope);
    }
}
function parsePropertyName(objectContextId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseVariance"])();
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = objectContextId;
        parseMaybeAssign();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR);
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = objectContextId;
    } else {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].num) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bigint) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].decimal)) {
            parseExprAtom();
        } else {
            parseMaybePrivateName();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectKey;
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = objectContextId;
    }
}
function parseMethod(functionStart, isConstructor) {
    const funcContextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextContextId"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    const allowModifiers = isConstructor; // For TypeScript parameter properties
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunctionParams"])(allowModifiers, funcContextId);
    parseFunctionBodyAndFinish(functionStart, funcContextId);
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, true));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
}
function parseArrowExpression(startTokenIndex) {
    parseFunctionBody(true);
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, true));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
}
function parseFunctionBodyAndFinish(functionStart, funcContextId = 0) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseFunctionBodyAndFinish"])(functionStart, funcContextId);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseFunctionBodyAndFinish"])(funcContextId);
    } else {
        parseFunctionBody(false, funcContextId);
    }
}
function parseFunctionBody(allowExpression, funcContextId = 0) {
    const isExpression = allowExpression && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    if (isExpression) {
        parseMaybeAssign();
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBlock"])(true, funcContextId);
    }
}
// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).
function parseExprList(close, allowEmpty = false) {
    let first = true;
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(close) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(close)) break;
        }
        parseExprListItem(allowEmpty);
    }
}
function parseExprListItem(allowEmpty) {
    if (allowEmpty && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
    // Empty item; nothing more to parse for this item.
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].ellipsis)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSpread"])();
        parseParenItem();
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].question)) {
        // Partial function application proposal.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    } else {
        parseMaybeAssign(false, true);
    }
}
function parseIdentifier() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name;
}
// Parses await expression inside async function.
function parseAwait() {
    parseMaybeUnary();
}
// Parses yield expression inside generator.
function parseYield() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
        parseMaybeAssign();
    }
}
// https://github.com/tc39/proposal-js-module-blocks
function parseModuleExpression() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._module);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    // For now, just call parseBlockBody to parse the block. In the future when we
    // implement full support, we'll want to emit scopes and possibly other
    // information.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBlockBody"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/statement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint max-len: 0 */ __turbopack_context__.s([
    "baseParseExportStar",
    ()=>baseParseExportStar,
    "baseParseMaybeDecoratorArguments",
    ()=>baseParseMaybeDecoratorArguments,
    "parseBlock",
    ()=>parseBlock,
    "parseBlockBody",
    ()=>parseBlockBody,
    "parseClass",
    ()=>parseClass,
    "parseClassProperty",
    ()=>parseClassProperty,
    "parseClassPropertyName",
    ()=>parseClassPropertyName,
    "parseDecorators",
    ()=>parseDecorators,
    "parseExport",
    ()=>parseExport,
    "parseExportFrom",
    ()=>parseExportFrom,
    "parseExportSpecifiers",
    ()=>parseExportSpecifiers,
    "parseFunction",
    ()=>parseFunction,
    "parseFunctionParams",
    ()=>parseFunctionParams,
    "parseImport",
    ()=>parseImport,
    "parsePostMemberNameModifiers",
    ()=>parsePostMemberNameModifiers,
    "parseStatement",
    ()=>parseStatement,
    "parseTopLevel",
    ()=>parseTopLevel,
    "parseVarStatement",
    ()=>parseVarStatement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/flow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/typescript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/expression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/lval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function parseTopLevel() {
    parseBlockBody(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eof);
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length, true));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth !== 0) {
        throw new Error(`Invalid scope depth at end of file: ${__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth}`);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File"](__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes);
}
function parseStatement(declaration) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowTryParseStatement"])()) {
            return;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)) {
        parseDecorators();
    }
    parseStatementContent(declaration);
}
function parseStatementContent(declaration) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseStatementContent"])()) {
            return;
        }
    }
    const starttype = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type;
    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.
    switch(starttype){
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._break:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._continue:
            parseBreakContinueStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._debugger:
            parseDebuggerStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._do:
            parseDoStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._for:
            parseForStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function:
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot) break;
            if (!declaration) (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
            parseFunctionStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class:
            if (!declaration) (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
            parseClass(true);
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._if:
            parseIfStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._return:
            parseReturnStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._switch:
            parseSwitchStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._throw:
            parseThrowStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._try:
            parseTryStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const:
            if (!declaration) (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])(); // NOTE: falls through to _var
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var:
            parseVarStatement(starttype !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var);
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._while:
            parseWhileStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL:
            parseBlock();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi:
            parseEmptyStatement();
            return;
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export:
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import:
            {
                const nextType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])();
                if (nextType === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL || nextType === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot) {
                    break;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                if (starttype === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import) {
                    parseImport();
                } else {
                    parseExport();
                }
                return;
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name:
            if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async) {
                const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
                // peek ahead and see if next token is a function
                const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].snapshot();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertSemicolon"])()) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function);
                    parseFunction(functionStart, true);
                    return;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
                }
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._using && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasFollowingLineBreak"])() && // Statements like `using[0]` and `using in foo` aren't actual using
            // declarations.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
                parseVarStatement(true);
                return;
            } else if (startsAwaitUsing()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await);
                parseVarStatement(true);
                return;
            }
        default:
            break;
    }
    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    const initialTokensLength = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
    let simpleName = null;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length === initialTokensLength + 1) {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1];
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            simpleName = token.contextualKeyword;
        }
    }
    if (simpleName == null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon)) {
        parseLabeledStatement();
    } else {
        // This was an identifier, so we might want to handle flow/typescript-specific cases.
        parseIdentifierStatement(simpleName);
    }
}
/**
 * Determine if we're positioned at an `await using` declaration.
 *
 * Note that this can happen either in place of a regular variable declaration
 * or in a loop body, and in both places, there are similar-looking cases where
 * we need to return false.
 *
 * Examples returning true:
 * await using foo = bar();
 * for (await using a of b) {}
 *
 * Examples returning false:
 * await using
 * await using + 1
 * await using instanceof T
 * for (await using;;) {}
 *
 * For now, we early return if we don't see `await`, then do a simple
 * backtracking-based lookahead for the `using` and identifier tokens. In the
 * future, this could be optimized with a character-based approach.
 */ function startsAwaitUsing() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await)) {
        return false;
    }
    const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].snapshot();
    // await
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._using) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrecedingLineBreak"])()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
        return false;
    }
    // using
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrecedingLineBreak"])()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
        return false;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
    return true;
}
function parseDecorators() {
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)){
        parseDecorator();
    }
}
function parseDecorator() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
        while((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
        }
        parseMaybeDecoratorArguments();
    }
}
function parseMaybeDecoratorArguments() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseMaybeDecoratorArguments"])();
    } else {
        baseParseMaybeDecoratorArguments();
    }
}
function baseParseMaybeDecoratorArguments() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCallExpressionArguments"])();
    }
}
function parseBreakContinueStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
    }
}
function parseDebuggerStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
function parseDoStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    parseStatement(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._while);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseParenExpression"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi);
}
function parseForStatement() {
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    parseAmbiguousForStatement();
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, false));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
}
/**
 * Determine if this token is a `using` declaration (explicit resource
 * management) as part of a loop.
 * https://github.com/tc39/proposal-explicit-resource-management
 */ function isUsingInLoop() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._using)) {
        return false;
    }
    // This must be `for (using of`, where `using` is the name of the loop
    // variable.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLookaheadContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._of)) {
        return false;
    }
    return true;
}
// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.
function parseAmbiguousForStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    let forAwait = false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await)) {
        forAwait = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
        if (forAwait) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
        }
        parseFor();
        return;
    }
    const isAwaitUsing = startsAwaitUsing();
    if (isAwaitUsing || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const) || isUsingInLoop()) {
        if (isAwaitUsing) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        parseVar(true, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._in) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._of)) {
            parseForIn(forAwait);
            return;
        }
        parseFor();
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])(true);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._in) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._of)) {
        parseForIn(forAwait);
        return;
    }
    if (forAwait) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
    }
    parseFor();
}
function parseFunctionStatement() {
    const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    parseFunction(functionStart, true);
}
function parseIfStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseParenExpression"])();
    parseStatement(false);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._else)) {
        parseStatement(false);
    }
}
function parseReturnStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
    }
}
function parseSwitchStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseParenExpression"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    // Don't bother validation; just go through any sequence of cases, defaults, and statements.
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._case) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
            const isCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._case);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
            if (isCase) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon);
        } else {
            parseStatement(true);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])(); // Closing brace
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, false));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
}
function parseThrowStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
function parseCatchClauseParam() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingAtom"])(true);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseTypeAnnotation"])();
    }
}
function parseTryStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    parseBlock();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._catch)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        let catchBindingStartTokenIndex = null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
            catchBindingStartTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
            parseCatchClauseParam();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
        }
        parseBlock();
        if (catchBindingStartTokenIndex != null) {
            // We need a special scope for the catch binding which includes the binding itself and the
            // catch block.
            const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](catchBindingStartTokenIndex, endTokenIndex, false));
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._finally)) {
        parseBlock();
    }
}
function parseVarStatement(isBlockScope) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    parseVar(false, isBlockScope);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
function parseWhileStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseParenExpression"])();
    parseStatement(false);
}
function parseEmptyStatement() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
}
function parseLabeledStatement() {
    parseStatement(true);
}
/**
 * Parse a statement starting with an identifier of the given name. Subclasses match on the name
 * to handle statements like "declare".
 */ function parseIdentifierStatement(contextualKeyword) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseIdentifierStatement"])(contextualKeyword);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseIdentifierStatement"])(contextualKeyword);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
    }
}
function parseBlock(isFunctionScope = false, contextId = 0) {
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    if (contextId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
    }
    parseBlockBody(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
    if (contextId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
    }
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, isFunctionScope));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
}
function parseBlockBody(end) {
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(end) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        parseStatement(true);
    }
}
// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.
function parseFor() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    parseStatement(false);
}
// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.
function parseForIn(forAwait) {
    if (forAwait) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._of);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExpression"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    parseStatement(false);
}
// Parse a list of variable declarations.
function parseVar(isFor, isBlockScope) {
    while(true){
        parseVarHead(isBlockScope);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            const eqIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeAssign"])(isFor);
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[eqIndex].rhsEndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
            break;
        }
    }
}
function parseVarHead(isBlockScope) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingAtom"])(isBlockScope);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsAfterParseVarHead"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowAfterParseVarHead"])();
    }
}
function parseFunction(functionStart, isStatement, optionalId = false) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    }
    if (isStatement && !optionalId && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._yield)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
    }
    let nameScopeStartTokenIndex = null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
        // Expression-style functions should limit their name's scope to the function body, so we make
        // a new function scope to enforce that.
        if (!isStatement) {
            nameScopeStartTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingIdentifier"])(false);
    }
    const startTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    parseFunctionParams();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFunctionBodyAndFinish"])(functionStart);
    const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    // In addition to the block scope of the function body, we need a separate function-style scope
    // that includes the params.
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](startTokenIndex, endTokenIndex, true));
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
    if (nameScopeStartTokenIndex !== null) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](nameScopeStartTokenIndex, endTokenIndex, true));
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
    }
}
function parseFunctionParams(allowModifiers = false, funcContextId = 0) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsStartParseFunctionParams"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowStartParseFunctionParams"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
    if (funcContextId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = funcContextId;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingList"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR, false, false, allowModifiers, funcContextId);
    if (funcContextId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = funcContextId;
    }
}
function parseClass(isStatement, optionalId = false) {
    // Put a context ID on the class keyword, the open-brace, and the close-brace, so that later
    // code can easily navigate to meaningful points on the class.
    const contextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextContextId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].isExpression = !isStatement;
    // Like with functions, we declare a special "name scope" from the start of the name to the end
    // of the class, but only with expression-style classes, to represent the fact that the name is
    // available to the body of the class but not an outer declaration.
    let nameScopeStartTokenIndex = null;
    if (!isStatement) {
        nameScopeStartTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth++;
    }
    parseClassId(isStatement, optionalId);
    parseClassSuper();
    const openBraceIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    parseClassBody(contextId);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[openBraceIndex].contextId = contextId;
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = contextId;
    if (nameScopeStartTokenIndex !== null) {
        const endTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"](nameScopeStartTokenIndex, endTokenIndex, false));
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].scopeDepth--;
    }
}
function isClassProperty() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bang) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon);
}
function isClassMethod() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan);
}
function parseClassBody(classContextId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
            continue;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)) {
            parseDecorator();
            continue;
        }
        const memberStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
        parseClassMember(memberStart, classContextId);
    }
}
function parseClassMember(memberStart, classContextId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseModifiers"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._declare,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._public,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._protected,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._private,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._override
        ]);
    }
    let isStatic = false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._static) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])(); // eats 'static'
        if (isClassMethod()) {
            parseClassMethod(memberStart, /* isConstructor */ false);
            return;
        } else if (isClassProperty()) {
            parseClassProperty();
            return;
        }
        // otherwise something static
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._static;
        isStatic = true;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            // This is a static block. Mark the word "static" with the class context ID for class element
            // detection and parse as a regular block.
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].contextId = classContextId;
            parseBlock();
            return;
        }
    }
    parseClassMemberWithIsStatic(memberStart, isStatic, classContextId);
}
function parseClassMemberWithIsStatic(memberStart, isStatic, classContextId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseClassMemberWithIsStatic"])(isStatic)) {
            return;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
        // a generator
        parseClassPropertyName(classContextId);
        parseClassMethod(memberStart, /* isConstructor */ false);
        return;
    }
    // Get the identifier name so we can tell if it's actually a keyword like "async", "get", or
    // "set".
    parseClassPropertyName(classContextId);
    let isConstructor = false;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1];
    // We allow "constructor" as either an identifier or a string.
    if (token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._constructor) {
        isConstructor = true;
    }
    parsePostMemberNameModifiers();
    if (isClassMethod()) {
        parseClassMethod(memberStart, isConstructor);
    } else if (isClassProperty()) {
        parseClassProperty();
    } else if (token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])()) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._async;
        // an async method
        const isGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
        if (isGenerator) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        }
        // The so-called parsed name would have been "async": get the real name.
        parseClassPropertyName(classContextId);
        parsePostMemberNameModifiers();
        parseClassMethod(memberStart, false);
    } else if ((token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._get || token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._set) && !((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star))) {
        if (token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._get) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._get;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._set;
        }
        // `get\n*` is an uninitialized property named 'get' followed by a generator.
        // a getter or setter
        // The so-called parsed name would have been "get/set": get the real name.
        parseClassPropertyName(classContextId);
        parseClassMethod(memberStart, /* isConstructor */ false);
    } else if (token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._accessor && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])()) {
        parseClassPropertyName(classContextId);
        parseClassProperty();
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLineTerminator"])()) {
        // an uninitialized class property (due to ASI, since we don't otherwise recognize the next token)
        parseClassProperty();
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])();
    }
}
function parseClassMethod(functionStart, isConstructor) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseTypeParameters"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseTypeParameterDeclaration"])();
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMethod"])(functionStart, isConstructor);
}
function parseClassPropertyName(classContextId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePropertyName"])(classContextId);
}
function parsePostMemberNameModifiers() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        const oldIsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushTypeContext"])(0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].question);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popTypeContext"])(oldIsType);
    }
}
function parseClassProperty() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatTypeToken"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bang);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseTypeAnnotation"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseTypeAnnotation"])();
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
        const equalsTokenIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeAssign"])();
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[equalsTokenIndex].rhsEndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
function parseClassId(isStatement, optionalId = false) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (!isStatement || optionalId) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._implements)) {
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBindingIdentifier"])(true);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseTypeParameters"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseTypeParameterDeclaration"])();
        }
    }
}
// Returns true if there was a superclass.
function parseClassSuper() {
    let hasSuper = false;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._extends)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExprSubscripts"])();
        hasSuper = true;
    } else {
        hasSuper = false;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsAfterParseClassSuper"])(hasSuper);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowAfterParseClassSuper"])(hasSuper);
    }
}
function parseExport() {
    const exportIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseExport"])()) {
            return;
        }
    }
    // export * from '...'
    if (shouldParseExportStar()) {
        parseExportStar();
    } else if (isExportDefaultSpecifier()) {
        // export default from
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
        } else {
            parseExportSpecifiersMaybe();
        }
        parseExportFrom();
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
        // export default ...
        parseExportDefaultExpression();
    } else if (shouldParseExportDeclaration()) {
        parseExportDeclaration();
    } else {
        // export { x, y as z } [from '...']
        parseExportSpecifiers();
        parseExportFrom();
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[exportIndex].rhsEndIndex = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length;
}
function parseExportDefaultExpression() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsTryParseExportDefaultExpression"])()) {
            return;
        }
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowTryParseExportDefaultExpression"])()) {
            return;
        }
    }
    const functionStart = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].start;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function)) {
        parseFunction(functionStart, true, true);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function) {
        // async function declaration
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function);
        parseFunction(functionStart, true, true);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class)) {
        parseClass(true, true);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)) {
        parseDecorators();
        parseClass(true, true);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMaybeAssign"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
    }
}
function parseExportDeclaration() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseExportDeclaration"])();
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseExportDeclaration"])();
    } else {
        parseStatement(true);
    }
}
function isExportDefaultSpecifier() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsIsDeclarationStart"])()) {
        return false;
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowShouldDisallowExportDefaultSpecifier"])()) {
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].contextualKeyword !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
        return false;
    }
    const _next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTokenStart"])();
    const lookahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadTypeAndKeyword"])();
    const hasFrom = lookahead.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && lookahead.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from;
    if (lookahead.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) {
        return true;
    }
    // lookahead again when `export default from` is seen
    if (hasFrom) {
        const nextAfterFrom = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].charCodeAt((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTokenStartSince"])(_next + 4));
        return nextAfterFrom === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].quotationMark || nextAfterFrom === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].apostrophe;
    }
    return false;
}
function parseExportSpecifiersMaybe() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
        parseExportSpecifiers();
    }
}
function parseExportFrom() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExprAtom"])();
        maybeParseImportAttributes();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
function shouldParseExportStar() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowShouldParseExportStar"])();
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
    }
}
function parseExportStar() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseExportStar"])();
    } else {
        baseParseExportStar();
    }
}
function baseParseExportStar() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as)) {
        parseExportNamespace();
    } else {
        parseExportFrom();
    }
}
function parseExportNamespace() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].type = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._as;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
    parseExportSpecifiersMaybe();
    parseExportFrom();
}
function shouldParseExportDeclaration() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsIsDeclarationStart"])() || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowShouldParseExportDeclaration"])() || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function || __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at);
}
function parseExportSpecifiers() {
    let first = true;
    // export { x, y as z } [from '...']
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                break;
            }
        }
        parseExportSpecifier();
    }
}
function parseExportSpecifier() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseExportSpecifier"])();
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ExportAccess;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIdentifier"])();
    }
}
/**
 * Starting at the `module` token in an import, determine if it was truly an
 * import reflection token or just looks like one.
 *
 * Returns true for:
 * import module foo from "foo";
 * import module from from "foo";
 *
 * Returns false for:
 * import module from "foo";
 * import module, {bar} from "foo";
 */ function isImportReflection() {
    const snapshot = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].snapshot();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._module);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eatContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
            return true;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
            return false;
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
        return false;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].restoreFromSnapshot(snapshot);
        return true;
    }
}
/**
 * Eat the "module" token from the import reflection proposal.
 * https://github.com/tc39/proposal-import-reflection
 */ function parseMaybeImportReflection() {
    // isImportReflection does snapshot/restore, so only run it if we see the word
    // "module".
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._module) && isImportReflection()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
    }
}
function parseImport() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseImportEqualsDeclaration"])();
        return;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type)) {
        const lookahead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadTypeAndKeyword"])();
        if (lookahead.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && lookahead.contextualKeyword !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from) {
            // One of these `import type` cases:
            // import type T = require('T');
            // import type A from 'A';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookaheadType"])() === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseImportEqualsDeclaration"])();
                return;
            }
        // If this is an `import type...from` statement, then we already ate the
        // type token, so proceed to the regular import parser.
        } else if (lookahead.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star || lookahead.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) {
            // One of these `import type` cases, in which case we can eat the type token
            // and proceed as normal:
            // import type * as A from 'A';
            // import type {a} from 'A';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type);
        }
    // Otherwise, we are importing the name "type".
    }
    // import '...'
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExprAtom"])();
    } else {
        parseMaybeImportReflection();
        parseImportSpecifiers();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseExprAtom"])();
    }
    maybeParseImportAttributes();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["semicolon"])();
}
// eslint-disable-next-line no-unused-vars
function shouldParseDefaultImport() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
}
function parseImportSpecifierLocal() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseImportedIdentifier"])();
}
// Parses a comma-separated list of module imports.
function parseImportSpecifiers() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowStartParseImportSpecifiers"])();
    }
    let first = true;
    if (shouldParseDefaultImport()) {
        // import defaultObj, { x, y as z } from '...'
        parseImportSpecifierLocal();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expectContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as);
        parseImportSpecifierLocal();
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) && !__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error){
        if (first) {
            first = false;
        } else {
            // Detect an attempt to deep destructure
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unexpected"])("ES2015 named imports do not destructure. Use another statement for destructuring after the import.");
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expect"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eat"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                break;
            }
        }
        parseImportSpecifier();
    }
}
function parseImportSpecifier() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeScriptEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tsParseImportSpecifier"])();
        return;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFlowEnabled"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$flow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flowParseImportSpecifier"])();
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseImportedIdentifier"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._as)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens[__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].tokens.length - 1].identifierRole = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ImportAccess;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$lval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseImportedIdentifier"])();
    }
}
/**
 * Parse import attributes like `with {type: "json"}`, or the legacy form
 * `assert {type: "json"}`.
 *
 * Import attributes technically have their own syntax, but are always parseable
 * as a plain JS object, so just do that for simplicity.
 */ function maybeParseImportAttributes() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._with) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContextual"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._assert) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrecedingLineBreak"])()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$expression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseObj"])(false, false);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseFile",
    ()=>parseFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/statement.js [app-client] (ecmascript)");
;
;
;
;
function parseFile() {
    // If enabled, skip leading hashbang line.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].pos === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].charCodeAt(0) === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].numberSign && __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["input"].charCodeAt(1) === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].exclamationMark) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipLineComment"])(2);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextToken"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$statement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTopLevel"])();
}
}),
]);

//# sourceMappingURL=4c95d_sucrase_dist_esm_parser_traverser_692ecdf0._.js.map