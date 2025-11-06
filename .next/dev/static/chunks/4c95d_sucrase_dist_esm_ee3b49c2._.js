(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getImportExportSpecifierInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
function getImportExportSpecifierInfo(tokens, index = tokens.currentIndex()) {
    let endIndex = index + 1;
    if (isSpecifierEnd(tokens, endIndex)) {
        // import {A}
        const name = tokens.identifierNameAtIndex(index);
        return {
            isType: false,
            leftName: name,
            rightName: name,
            endIndex
        };
    }
    endIndex++;
    if (isSpecifierEnd(tokens, endIndex)) {
        // import {type A}
        return {
            isType: true,
            leftName: null,
            rightName: null,
            endIndex
        };
    }
    endIndex++;
    if (isSpecifierEnd(tokens, endIndex)) {
        // import {A as B}
        return {
            isType: false,
            leftName: tokens.identifierNameAtIndex(index),
            rightName: tokens.identifierNameAtIndex(index + 2),
            endIndex
        };
    }
    endIndex++;
    if (isSpecifierEnd(tokens, endIndex)) {
        // import {type A as B}
        return {
            isType: true,
            leftName: null,
            rightName: null,
            endIndex
        };
    }
    throw new Error(`Unexpected import/export specifier at ${index}`);
}
function isSpecifierEnd(tokens, index) {
    const token = tokens.tokens[index];
    return token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getJSXPragmaInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getJSXPragmaInfo
]);
function getJSXPragmaInfo(options) {
    const [base, suffix] = splitPragma(options.jsxPragma || "React.createElement");
    const [fragmentBase, fragmentSuffix] = splitPragma(options.jsxFragmentPragma || "React.Fragment");
    return {
        base,
        suffix,
        fragmentBase,
        fragmentSuffix
    };
}
function splitPragma(pragma) {
    let dotIndex = pragma.indexOf(".");
    if (dotIndex === -1) {
        dotIndex = pragma.length;
    }
    return [
        pragma.slice(0, dotIndex),
        pragma.slice(dotIndex)
    ];
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getNonTypeIdentifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonTypeIdentifiers",
    ()=>getNonTypeIdentifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JSXTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/JSXTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getJSXPragmaInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getJSXPragmaInfo.js [app-client] (ecmascript)");
;
;
;
;
function getNonTypeIdentifiers(tokens, options) {
    const jsxPragmaInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getJSXPragmaInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options);
    const nonTypeIdentifiers = new Set();
    for(let i = 0; i < tokens.tokens.length; i++){
        const token = tokens.tokens[i];
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && !token.isType && (token.identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].Access || token.identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthand || token.identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ExportAccess) && !token.shadowsGlobal) {
            nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
        }
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart) {
            nonTypeIdentifiers.add(jsxPragmaInfo.base);
        }
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart && i + 1 < tokens.tokens.length && tokens.tokens[i + 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd) {
            nonTypeIdentifiers.add(jsxPragmaInfo.base);
            nonTypeIdentifiers.add(jsxPragmaInfo.fragmentBase);
        }
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName && token.identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].Access) {
            const identifierName = tokens.identifierNameForToken(token);
            // Lower-case single-component tag names like "div" don't count.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JSXTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startsWithLowerCase"])(identifierName) || tokens.tokens[i + 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot) {
                nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
            }
        }
    }
    return nonTypeIdentifiers;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getIdentifierNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getIdentifierNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
function getIdentifierNames(code, tokens) {
    const names = [];
    for (const token of tokens){
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            names.push(code.slice(token.start, token.end));
        }
    }
    return names;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isAsyncOperation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAsyncOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
;
function isAsyncOperation(tokens) {
    let index = tokens.currentIndex();
    let depth = 0;
    const startToken = tokens.currentToken();
    do {
        const token = tokens.tokens[index];
        if (token.isOptionalChainStart) {
            depth++;
        }
        if (token.isOptionalChainEnd) {
            depth--;
        }
        depth += token.numNullishCoalesceStarts;
        depth -= token.numNullishCoalesceEnds;
        if (token.contextualKeyword === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._await && token.identifierRole == null && token.scopeDepth === startToken.scopeDepth) {
            return true;
        }
        index += 1;
    }while (depth > 0 && index < tokens.tokens.length)
    return false;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getClassInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getClassInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
function getClassInfo(rootTransformer, tokens, nameManager, disableESTransforms) {
    const snapshot = tokens.snapshot();
    const headerInfo = processClassHeader(tokens);
    let constructorInitializerStatements = [];
    const instanceInitializerNames = [];
    const staticInitializerNames = [];
    let constructorInsertPos = null;
    const fields = [];
    const rangesToRemove = [];
    const classContextId = tokens.currentToken().contextId;
    if (classContextId == null) {
        throw new Error("Expected non-null class context ID on class open-brace.");
    }
    tokens.nextToken();
    while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR, classContextId)){
        if (tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._constructor) && !tokens.currentToken().isType) {
            ({ constructorInitializerStatements, constructorInsertPos } = processConstructor(tokens));
        } else if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
            if (!disableESTransforms) {
                rangesToRemove.push({
                    start: tokens.currentIndex(),
                    end: tokens.currentIndex() + 1
                });
            }
            tokens.nextToken();
        } else if (tokens.currentToken().isType) {
            tokens.nextToken();
        } else {
            // Either a method or a field. Skip to the identifier part.
            const statementStartIndex = tokens.currentIndex();
            let isStatic = false;
            let isESPrivate = false;
            let isDeclareOrAbstract = false;
            while(isAccessModifier(tokens.currentToken())){
                if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._static)) {
                    isStatic = true;
                }
                if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].hash)) {
                    isESPrivate = true;
                }
                if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._declare) || tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract)) {
                    isDeclareOrAbstract = true;
                }
                tokens.nextToken();
            }
            if (isStatic && tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                // This is a static block, so don't process it in any special way.
                skipToNextClassElement(tokens, classContextId);
                continue;
            }
            if (isESPrivate) {
                // Sucrase doesn't attempt to transpile private fields; just leave them as-is.
                skipToNextClassElement(tokens, classContextId);
                continue;
            }
            if (tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._constructor) && !tokens.currentToken().isType) {
                ({ constructorInitializerStatements, constructorInsertPos } = processConstructor(tokens));
                continue;
            }
            const nameStartIndex = tokens.currentIndex();
            skipFieldName(tokens);
            if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan) || tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
                // This is a method, so nothing to process.
                skipToNextClassElement(tokens, classContextId);
                continue;
            }
            // There might be a type annotation that we need to skip.
            while(tokens.currentToken().isType){
                tokens.nextToken();
            }
            if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                const equalsIndex = tokens.currentIndex();
                // This is an initializer, so we need to wrap in an initializer method.
                const valueEnd = tokens.currentToken().rhsEndIndex;
                if (valueEnd == null) {
                    throw new Error("Expected rhsEndIndex on class field assignment.");
                }
                tokens.nextToken();
                while(tokens.currentIndex() < valueEnd){
                    rootTransformer.processToken();
                }
                let initializerName;
                if (isStatic) {
                    initializerName = nameManager.claimFreeName("__initStatic");
                    staticInitializerNames.push(initializerName);
                } else {
                    initializerName = nameManager.claimFreeName("__init");
                    instanceInitializerNames.push(initializerName);
                }
                // Fields start at the name, so `static x = 1;` has a field range of `x = 1;`.
                fields.push({
                    initializerName,
                    equalsIndex,
                    start: nameStartIndex,
                    end: tokens.currentIndex()
                });
            } else if (!disableESTransforms || isDeclareOrAbstract) {
                // This is a regular field declaration, like `x;`. With the class transform enabled, we just
                // remove the line so that no output is produced. With the class transform disabled, we
                // usually want to preserve the declaration (but still strip types), but if the `declare`
                // or `abstract` keyword is specified, we should remove the line to avoid initializing the
                // value to undefined.
                rangesToRemove.push({
                    start: statementStartIndex,
                    end: tokens.currentIndex()
                });
            }
        }
    }
    tokens.restoreToSnapshot(snapshot);
    if (disableESTransforms) {
        // With ES transforms disabled, we don't want to transform regular class
        // field declarations, and we don't need to do any additional tricks to
        // reference the constructor for static init, but we still need to transform
        // TypeScript field initializers defined as constructor parameters and we
        // still need to remove `declare` fields. For now, we run the same code
        // path but omit any field information, as if the class had no field
        // declarations. In the future, when we fully drop the class fields
        // transform, we can simplify this code significantly.
        return {
            headerInfo,
            constructorInitializerStatements,
            instanceInitializerNames: [],
            staticInitializerNames: [],
            constructorInsertPos,
            fields: [],
            rangesToRemove
        };
    } else {
        return {
            headerInfo,
            constructorInitializerStatements,
            instanceInitializerNames,
            staticInitializerNames,
            constructorInsertPos,
            fields,
            rangesToRemove
        };
    }
}
/**
 * Move the token processor to the next method/field in the class.
 *
 * To do that, we seek forward to the next start of a class name (either an open
 * bracket or an identifier, or the closing curly brace), then seek backward to
 * include any access modifiers.
 */ function skipToNextClassElement(tokens, classContextId) {
    tokens.nextToken();
    while(tokens.currentToken().contextId !== classContextId){
        tokens.nextToken();
    }
    while(isAccessModifier(tokens.tokenAtRelativeIndex(-1))){
        tokens.previousToken();
    }
}
function processClassHeader(tokens) {
    const classToken = tokens.currentToken();
    const contextId = classToken.contextId;
    if (contextId == null) {
        throw new Error("Expected context ID on class token.");
    }
    const isExpression = classToken.isExpression;
    if (isExpression == null) {
        throw new Error("Expected isExpression on class token.");
    }
    let className = null;
    let hasSuperclass = false;
    tokens.nextToken();
    if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
        className = tokens.identifierName();
    }
    while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL, contextId)){
        // If this has a superclass, there will always be an `extends` token. If it doesn't have a
        // superclass, only type parameters and `implements` clauses can show up here, all of which
        // consist only of type tokens. A declaration like `class A<B extends C> {` should *not* count
        // as having a superclass.
        if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._extends) && !tokens.currentToken().isType) {
            hasSuperclass = true;
        }
        tokens.nextToken();
    }
    return {
        isExpression,
        className,
        hasSuperclass
    };
}
/**
 * Extract useful information out of a constructor, starting at the "constructor" name.
 */ function processConstructor(tokens) {
    const constructorInitializerStatements = [];
    tokens.nextToken();
    const constructorContextId = tokens.currentToken().contextId;
    if (constructorContextId == null) {
        throw new Error("Expected context ID on open-paren starting constructor params.");
    }
    // Advance through parameters looking for access modifiers.
    while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR, constructorContextId)){
        if (tokens.currentToken().contextId === constructorContextId) {
            // Current token is an open paren or comma just before a param, so check
            // that param for access modifiers.
            tokens.nextToken();
            if (isAccessModifier(tokens.currentToken())) {
                tokens.nextToken();
                while(isAccessModifier(tokens.currentToken())){
                    tokens.nextToken();
                }
                const token = tokens.currentToken();
                if (token.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
                    throw new Error("Expected identifier after access modifiers in constructor arg.");
                }
                const name = tokens.identifierNameForToken(token);
                constructorInitializerStatements.push(`this.${name} = ${name}`);
            }
        } else {
            tokens.nextToken();
        }
    }
    // )
    tokens.nextToken();
    // Constructor type annotations are invalid, but skip them anyway since
    // they're easy to skip.
    while(tokens.currentToken().isType){
        tokens.nextToken();
    }
    let constructorInsertPos = tokens.currentIndex();
    // Advance through body looking for a super call.
    let foundSuperCall = false;
    while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR, constructorContextId)){
        if (!foundSuperCall && tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._super, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            tokens.nextToken();
            const superCallContextId = tokens.currentToken().contextId;
            if (superCallContextId == null) {
                throw new Error("Expected a context ID on the super call");
            }
            while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR, superCallContextId)){
                tokens.nextToken();
            }
            constructorInsertPos = tokens.currentIndex();
            foundSuperCall = true;
        }
        tokens.nextToken();
    }
    // }
    tokens.nextToken();
    return {
        constructorInitializerStatements,
        constructorInsertPos
    };
}
/**
 * Determine if this is any token that can go before the name in a method/field.
 */ function isAccessModifier(token) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._async,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._get,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._set,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].plus,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].minus,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._readonly,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._static,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._public,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._private,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._protected,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._override,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._declare,
        __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].hash
    ].includes(token.type);
}
/**
 * The next token or set of tokens is either an identifier or an expression in square brackets, for
 * a method or field name.
 */ function skipFieldName(tokens) {
    if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
        const startToken = tokens.currentToken();
        const classContextId = startToken.contextId;
        if (classContextId == null) {
            throw new Error("Expected class context ID on computed name open bracket.");
        }
        while(!tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR, classContextId)){
            tokens.nextToken();
        }
        tokens.nextToken();
    } else {
        tokens.nextToken();
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/elideImportEquals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>elideImportEquals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
function elideImportEquals(tokens) {
    // import
    tokens.removeInitialToken();
    // name
    tokens.removeToken();
    // =
    tokens.removeToken();
    // name or require
    tokens.removeToken();
    // Handle either `import A = require('A')` or `import A = B.C.D`.
    if (tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        // (
        tokens.removeToken();
        // path string
        tokens.removeToken();
        // )
        tokens.removeToken();
    } else {
        while(tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)){
            // .
            tokens.removeToken();
            // name
            tokens.removeToken();
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getDeclarationInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_DECLARATION_INFO",
    ()=>EMPTY_DECLARATION_INFO,
    "default",
    ()=>getDeclarationInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
const EMPTY_DECLARATION_INFO = {
    typeDeclarations: new Set(),
    valueDeclarations: new Set()
};
function getDeclarationInfo(tokens) {
    const typeDeclarations = new Set();
    const valueDeclarations = new Set();
    for(let i = 0; i < tokens.tokens.length; i++){
        const token = tokens.tokens[i];
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLevelDeclaration"])(token)) {
            if (token.isType) {
                typeDeclarations.add(tokens.identifierNameForToken(token));
            } else {
                valueDeclarations.add(tokens.identifierNameForToken(token));
            }
        }
    }
    return {
        typeDeclarations,
        valueDeclarations
    };
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isExportFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isExportFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
function isExportFrom(tokens) {
    let closeBraceIndex = tokens.currentIndex();
    while(!tokens.matches1AtIndex(closeBraceIndex, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
        closeBraceIndex++;
    }
    return tokens.matchesContextualAtIndex(closeBraceIndex + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from) && tokens.matches1AtIndex(closeBraceIndex + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/removeMaybeImportAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeMaybeImportAttributes",
    ()=>removeMaybeImportAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
function removeMaybeImportAttributes(tokens) {
    if (tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._with, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) || tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) && tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._assert)) {
        // assert
        tokens.removeToken();
        // {
        tokens.removeToken();
        tokens.removeBalancedCode();
        // }
        tokens.removeToken();
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/shouldElideDefaultExport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>shouldElideDefaultExport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
function shouldElideDefaultExport(isTypeScriptTransformEnabled, keepUnusedImports, tokens, declarationInfo) {
    if (!isTypeScriptTransformEnabled || keepUnusedImports) {
        return false;
    }
    const exportToken = tokens.currentToken();
    if (exportToken.rhsEndIndex == null) {
        throw new Error("Expected non-null rhsEndIndex on export token.");
    }
    // The export must be of the form `export default a` or `export default a;`.
    const numTokens = exportToken.rhsEndIndex - tokens.currentIndex();
    if (numTokens !== 3 && !(numTokens === 4 && tokens.matches1AtIndex(exportToken.rhsEndIndex - 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi))) {
        return false;
    }
    const identifierToken = tokens.tokenAtRelativeIndex(2);
    if (identifierToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
        return false;
    }
    const exportedName = tokens.identifierNameForToken(identifierToken);
    return declarationInfo.typeDeclarations.has(exportedName) && !declarationInfo.valueDeclarations.has(exportedName);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isIdentifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/identifier.js [app-client] (ecmascript)");
;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
// Hard-code a list of reserved words rather than trying to use keywords or contextual keywords
// from the parser, since currently there are various exceptions, like `package` being reserved
// but unused and various contextual keywords being reserved. Note that we assume that all code
// compiled by Sucrase is in a module, so strict mode words and await are all considered reserved
// here.
const RESERVED_WORDS = new Set([
    // Reserved keywords as of ECMAScript 2015
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    // Future reserved keywords
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "await",
    // Literals that cannot be used as identifiers
    "false",
    "null",
    "true"
]);
function isIdentifier(name) {
    if (name.length === 0) {
        return false;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_IDENTIFIER_START"][name.charCodeAt(0)]) {
        return false;
    }
    for(let i = 1; i < name.length; i++){
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$identifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IS_IDENTIFIER_CHAR"][name.charCodeAt(i)]) {
            return false;
        }
    }
    return !RESERVED_WORDS.has(name);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/formatTokens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatTokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$lines$2d$and$2d$columns$40$1$2e$2$2e$4$2f$node_modules$2f$lines$2d$and$2d$columns$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/lines-and-columns@1.2.4/node_modules/lines-and-columns/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
function formatTokens(code, tokens) {
    if (tokens.length === 0) {
        return "";
    }
    const tokenKeys = Object.keys(tokens[0]).filter((k)=>k !== "type" && k !== "value" && k !== "start" && k !== "end" && k !== "loc");
    const typeKeys = Object.keys(tokens[0].type).filter((k)=>k !== "label" && k !== "keyword");
    const headings = [
        "Location",
        "Label",
        "Raw",
        ...tokenKeys,
        ...typeKeys
    ];
    const lines = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$lines$2d$and$2d$columns$40$1$2e$2$2e$4$2f$node_modules$2f$lines$2d$and$2d$columns$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](code);
    const rows = [
        headings,
        ...tokens.map(getTokenComponents)
    ];
    const padding = headings.map(()=>0);
    for (const components of rows){
        for(let i = 0; i < components.length; i++){
            padding[i] = Math.max(padding[i], components[i].length);
        }
    }
    return rows.map((components)=>components.map((component, i)=>component.padEnd(padding[i])).join(" ")).join("\n");
    //TURBOPACK unreachable
    ;
    function getTokenComponents(token) {
        const raw = code.slice(token.start, token.end);
        return [
            formatRange(token.start, token.end),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTokenType"])(token.type),
            truncate(String(raw), 14),
            // @ts-ignore: Intentional dynamic access by key.
            ...tokenKeys.map((key)=>formatValue(token[key], key)),
            // @ts-ignore: Intentional dynamic access by key.
            ...typeKeys.map((key)=>formatValue(token.type[key], key))
        ];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function formatValue(value, key) {
        if (value === true) {
            return key;
        } else if (value === false || value === null) {
            return "";
        } else {
            return String(value);
        }
    }
    function formatRange(start, end) {
        return `${formatPos(start)}-${formatPos(end)}`;
    }
    function formatPos(pos) {
        const location = lines.locationForIndex(pos);
        if (!location) {
            return "Unknown";
        } else {
            return `${location.line + 1}:${location.column + 1}`;
        }
    }
}
function truncate(s, length) {
    if (s.length > length) {
        return `${s.slice(0, length - 3)}...`;
    } else {
        return s;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getTSImportedNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getTSImportedNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js [app-client] (ecmascript)");
;
;
function getTSImportedNames(tokens) {
    const importedNames = new Set();
    for(let i = 0; i < tokens.tokens.length; i++){
        if (tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import) && !tokens.matches3AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            collectNamesForImport(tokens, i, importedNames);
        }
    }
    return importedNames;
}
function collectNamesForImport(tokens, index, importedNames) {
    index++;
    if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
        // Dynamic import, so nothing to do
        return;
    }
    if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
        importedNames.add(tokens.identifierNameAtIndex(index));
        index++;
        if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
            index++;
        }
    }
    if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
        // * as
        index += 2;
        importedNames.add(tokens.identifierNameAtIndex(index));
        index++;
    }
    if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
        index++;
        collectNamesForNamedImport(tokens, index, importedNames);
    }
}
function collectNamesForNamedImport(tokens, index, importedNames) {
    while(true){
        if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
            return;
        }
        const specifierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokens, index);
        index = specifierInfo.endIndex;
        if (!specifierInfo.isType) {
            importedNames.add(specifierInfo.rightName);
        }
        if (tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
            return;
        } else if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
            return;
        } else if (tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
            index++;
        } else {
            throw new Error(`Unexpected token: ${JSON.stringify(tokens.tokens[index])}`);
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/CJSImportProcessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CJSImportProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getNonTypeIdentifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getNonTypeIdentifiers.js [app-client] (ecmascript)");
;
;
;
;
;
class CJSImportProcessor {
    __init() {
        this.nonTypeIdentifiers = new Set();
    }
    __init2() {
        this.importInfoByPath = new Map();
    }
    __init3() {
        this.importsToReplace = new Map();
    }
    __init4() {
        this.identifierReplacements = new Map();
    }
    __init5() {
        this.exportBindingsByLocalName = new Map();
    }
    constructor(nameManager, tokens, enableLegacyTypeScriptModuleInterop, options, isTypeScriptTransformEnabled, keepUnusedImports, helperManager){
        ;
        this.nameManager = nameManager;
        this.tokens = tokens;
        this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;
        this.options = options;
        this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
        this.keepUnusedImports = keepUnusedImports;
        this.helperManager = helperManager;
        CJSImportProcessor.prototype.__init.call(this);
        CJSImportProcessor.prototype.__init2.call(this);
        CJSImportProcessor.prototype.__init3.call(this);
        CJSImportProcessor.prototype.__init4.call(this);
        CJSImportProcessor.prototype.__init5.call(this);
    }
    preprocessTokens() {
        for(let i = 0; i < this.tokens.tokens.length; i++){
            if (this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import) && !this.tokens.matches3AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                this.preprocessImportAtIndex(i);
            }
            if (this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export) && !this.tokens.matches2AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                this.preprocessExportAtIndex(i);
            }
        }
        this.generateImportReplacements();
    }
    /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */ pruneTypeOnlyImports() {
        this.nonTypeIdentifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getNonTypeIdentifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonTypeIdentifiers"])(this.tokens, this.options);
        for (const [path, importInfo] of this.importInfoByPath.entries()){
            if (importInfo.hasBareImport || importInfo.hasStarExport || importInfo.exportStarNames.length > 0 || importInfo.namedExports.length > 0) {
                continue;
            }
            const names = [
                ...importInfo.defaultNames,
                ...importInfo.wildcardNames,
                ...importInfo.namedImports.map(({ localName })=>localName)
            ];
            if (names.every((name)=>this.shouldAutomaticallyElideImportedName(name))) {
                this.importsToReplace.set(path, "");
            }
        }
    }
    shouldAutomaticallyElideImportedName(name) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(name);
    }
    generateImportReplacements() {
        for (const [path, importInfo] of this.importInfoByPath.entries()){
            const { defaultNames, wildcardNames, namedImports, namedExports, exportStarNames, hasStarExport } = importInfo;
            if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0 && namedExports.length === 0 && exportStarNames.length === 0 && !hasStarExport) {
                // Import is never used, so don't even assign a name.
                this.importsToReplace.set(path, `require('${path}');`);
                continue;
            }
            const primaryImportName = this.getFreeIdentifierForPath(path);
            let secondaryImportName;
            if (this.enableLegacyTypeScriptModuleInterop) {
                secondaryImportName = primaryImportName;
            } else {
                secondaryImportName = wildcardNames.length > 0 ? wildcardNames[0] : this.getFreeIdentifierForPath(path);
            }
            let requireCode = `var ${primaryImportName} = require('${path}');`;
            if (wildcardNames.length > 0) {
                for (const wildcardName of wildcardNames){
                    const moduleExpr = this.enableLegacyTypeScriptModuleInterop ? primaryImportName : `${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName})`;
                    requireCode += ` var ${wildcardName} = ${moduleExpr};`;
                }
            } else if (exportStarNames.length > 0 && secondaryImportName !== primaryImportName) {
                requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName});`;
            } else if (defaultNames.length > 0 && secondaryImportName !== primaryImportName) {
                requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName("interopRequireDefault")}(${primaryImportName});`;
            }
            for (const { importedName, localName } of namedExports){
                requireCode += ` ${this.helperManager.getHelperName("createNamedExportFrom")}(${primaryImportName}, '${localName}', '${importedName}');`;
            }
            for (const exportStarName of exportStarNames){
                requireCode += ` exports.${exportStarName} = ${secondaryImportName};`;
            }
            if (hasStarExport) {
                requireCode += ` ${this.helperManager.getHelperName("createStarExport")}(${primaryImportName});`;
            }
            this.importsToReplace.set(path, requireCode);
            for (const defaultName of defaultNames){
                this.identifierReplacements.set(defaultName, `${secondaryImportName}.default`);
            }
            for (const { importedName, localName } of namedImports){
                this.identifierReplacements.set(localName, `${primaryImportName}.${importedName}`);
            }
        }
    }
    getFreeIdentifierForPath(path) {
        const components = path.split("/");
        const lastComponent = components[components.length - 1];
        const baseName = lastComponent.replace(/\W/g, "");
        return this.nameManager.claimFreeName(`_${baseName}`);
    }
    preprocessImportAtIndex(index) {
        const defaultNames = [];
        const wildcardNames = [];
        const namedImports = [];
        index++;
        if ((this.tokens.matchesContextualAtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type) || this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._typeof)) && !this.tokens.matches1AtIndex(index + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) && !this.tokens.matchesContextualAtIndex(index + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            // import type declaration, so no need to process anything.
            return;
        }
        if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            // Dynamic import, so nothing to do
            return;
        }
        if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
            defaultNames.push(this.tokens.identifierNameAtIndex(index));
            index++;
            if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                index++;
            }
        }
        if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            // * as
            index += 2;
            wildcardNames.push(this.tokens.identifierNameAtIndex(index));
            index++;
        }
        if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            const result = this.getNamedImports(index + 1);
            index = result.newIndex;
            for (const namedImport of result.namedImports){
                // Treat {default as X} as a default import to ensure usage of require interop helper
                if (namedImport.importedName === "default") {
                    defaultNames.push(namedImport.localName);
                } else {
                    namedImports.push(namedImport);
                }
            }
        }
        if (this.tokens.matchesContextualAtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            index++;
        }
        if (!this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
            throw new Error("Expected string token at the end of import statement.");
        }
        const path = this.tokens.stringValueAtIndex(index);
        const importInfo = this.getImportInfo(path);
        importInfo.defaultNames.push(...defaultNames);
        importInfo.wildcardNames.push(...wildcardNames);
        importInfo.namedImports.push(...namedImports);
        if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0) {
            importInfo.hasBareImport = true;
        }
    }
    preprocessExportAtIndex(index) {
        if (this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var) || this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let) || this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const)) {
            this.preprocessVarExportAtIndex(index);
        } else if (this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function) || this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class)) {
            const exportName = this.tokens.identifierNameAtIndex(index + 2);
            this.addExportBinding(exportName, exportName);
        } else if (this.tokens.matches3AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function)) {
            const exportName = this.tokens.identifierNameAtIndex(index + 3);
            this.addExportBinding(exportName, exportName);
        } else if (this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            this.preprocessNamedExportAtIndex(index);
        } else if (this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            this.preprocessExportStarAtIndex(index);
        }
    }
    preprocessVarExportAtIndex(index) {
        let depth = 0;
        // Handle cases like `export let {x} = y;`, starting at the open-brace in that case.
        for(let i = index + 2;; i++){
            if (this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) || this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dollarBraceL) || this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
                depth++;
            } else if (this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR)) {
                depth--;
            } else if (depth === 0 && !this.tokens.matches1AtIndex(i, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
                break;
            } else if (this.tokens.matches1AtIndex(1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                const endIndex = this.tokens.currentToken().rhsEndIndex;
                if (endIndex == null) {
                    throw new Error("Expected = token with an end index.");
                }
                i = endIndex - 1;
            } else {
                const token = this.tokens.tokens[i];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeclaration"])(token)) {
                    const exportName = this.tokens.identifierNameAtIndex(i);
                    this.identifierReplacements.set(exportName, `exports.${exportName}`);
                }
            }
        }
    }
    /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */ preprocessNamedExportAtIndex(index) {
        // export {
        index += 2;
        const { newIndex, namedImports } = this.getNamedImports(index);
        index = newIndex;
        if (this.tokens.matchesContextualAtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            index++;
        } else {
            // Reinterpret "a as b" to be local/exported rather than imported/local.
            for (const { importedName: localName, localName: exportedName } of namedImports){
                this.addExportBinding(localName, exportedName);
            }
            return;
        }
        if (!this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
            throw new Error("Expected string token at the end of import statement.");
        }
        const path = this.tokens.stringValueAtIndex(index);
        const importInfo = this.getImportInfo(path);
        importInfo.namedExports.push(...namedImports);
    }
    preprocessExportStarAtIndex(index) {
        let exportedName = null;
        if (this.tokens.matches3AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._as)) {
            // export * as
            index += 3;
            exportedName = this.tokens.identifierNameAtIndex(index);
            // foo from
            index += 2;
        } else {
            // export * from
            index += 3;
        }
        if (!this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
            throw new Error("Expected string token at the end of star export statement.");
        }
        const path = this.tokens.stringValueAtIndex(index);
        const importInfo = this.getImportInfo(path);
        if (exportedName !== null) {
            importInfo.exportStarNames.push(exportedName);
        } else {
            importInfo.hasStarExport = true;
        }
    }
    getNamedImports(index) {
        const namedImports = [];
        while(true){
            if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                index++;
                break;
            }
            const specifierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens, index);
            index = specifierInfo.endIndex;
            if (!specifierInfo.isType) {
                namedImports.push({
                    importedName: specifierInfo.leftName,
                    localName: specifierInfo.rightName
                });
            }
            if (this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                index += 2;
                break;
            } else if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                index++;
                break;
            } else if (this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                index++;
            } else {
                throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[index])}`);
            }
        }
        return {
            newIndex: index,
            namedImports
        };
    }
    /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */ getImportInfo(path) {
        const existingInfo = this.importInfoByPath.get(path);
        if (existingInfo) {
            return existingInfo;
        }
        const newInfo = {
            defaultNames: [],
            wildcardNames: [],
            namedImports: [],
            namedExports: [],
            hasBareImport: false,
            exportStarNames: [],
            hasStarExport: false
        };
        this.importInfoByPath.set(path, newInfo);
        return newInfo;
    }
    addExportBinding(localName, exportedName) {
        if (!this.exportBindingsByLocalName.has(localName)) {
            this.exportBindingsByLocalName.set(localName, []);
        }
        this.exportBindingsByLocalName.get(localName).push(exportedName);
    }
    /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */ claimImportCode(importPath) {
        const result = this.importsToReplace.get(importPath);
        this.importsToReplace.set(importPath, "");
        return result || "";
    }
    getIdentifierReplacement(identifierName) {
        return this.identifierReplacements.get(identifierName) || null;
    }
    /**
   * Return a string like `exports.foo = exports.bar`.
   */ resolveExportBinding(assignedName) {
        const exportedNames = this.exportBindingsByLocalName.get(assignedName);
        if (!exportedNames || exportedNames.length === 0) {
            return null;
        }
        return exportedNames.map((exportedName)=>`exports.${exportedName}`).join(" = ");
    }
    /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */ getGlobalNames() {
        return new Set([
            ...this.identifierReplacements.keys(),
            ...this.exportBindingsByLocalName.keys()
        ]);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/computeSourceMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>computeSourceMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+gen-mapping@0.3.13/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
;
;
function computeSourceMap({ code: generatedCode, mappings: rawMappings }, filePath, options, source, tokens) {
    const sourceColumns = computeSourceColumns(source, tokens);
    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenMapping"]({
        file: options.compiledFilename
    });
    let tokenIndex = 0;
    // currentMapping is the output source index for the current input token being
    // considered.
    let currentMapping = rawMappings[0];
    while(currentMapping === undefined && tokenIndex < rawMappings.length - 1){
        tokenIndex++;
        currentMapping = rawMappings[tokenIndex];
    }
    let line = 0;
    let lineStart = 0;
    if (currentMapping !== lineStart) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeAddSegment"])(map, line, 0, filePath, line, 0);
    }
    for(let i = 0; i < generatedCode.length; i++){
        if (i === currentMapping) {
            const genColumn = currentMapping - lineStart;
            const sourceColumn = sourceColumns[tokenIndex];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeAddSegment"])(map, line, genColumn, filePath, line, sourceColumn);
            while((currentMapping === i || currentMapping === undefined) && tokenIndex < rawMappings.length - 1){
                tokenIndex++;
                currentMapping = rawMappings[tokenIndex];
            }
        }
        if (generatedCode.charCodeAt(i) === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lineFeed) {
            line++;
            lineStart = i + 1;
            if (currentMapping !== lineStart) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeAddSegment"])(map, line, 0, filePath, line, 0);
            }
        }
    }
    const { sourceRoot, sourcesContent, ...sourceMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$gen$2d$mapping$40$0$2e$3$2e$13$2f$node_modules$2f40$jridgewell$2f$gen$2d$mapping$2f$dist$2f$gen$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toEncodedMap"])(map);
    return sourceMap;
}
/**
 * Create an array mapping each token index to the 0-based column of the start
 * position of the token.
 */ function computeSourceColumns(code, tokens) {
    const sourceColumns = new Array(tokens.length);
    let tokenIndex = 0;
    let currentMapping = tokens[tokenIndex].start;
    let lineStart = 0;
    for(let i = 0; i < code.length; i++){
        if (i === currentMapping) {
            sourceColumns[tokenIndex] = currentMapping - lineStart;
            tokenIndex++;
            currentMapping = tokens[tokenIndex].start;
        }
        if (code.charCodeAt(i) === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lineFeed) {
            lineStart = i + 1;
        }
    }
    return sourceColumns;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/HelperManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelperManager",
    ()=>HelperManager
]);
const HELPERS = {
    require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
    interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
    interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
    createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
    // Note that TypeScript and Babel do this differently; TypeScript does a simple existence
    // check in the exports object and does a plain assignment, whereas Babel uses
    // defineProperty and builds an object of explicitly-exported names so that star exports can
    // always take lower precedence. For now, we do the easier TypeScript thing.
    createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
    nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
    asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
    optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
    asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
    optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
    asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class HelperManager {
    __init() {
        this.helperNames = {};
    }
    __init2() {
        this.createRequireName = null;
    }
    constructor(nameManager){
        ;
        this.nameManager = nameManager;
        HelperManager.prototype.__init.call(this);
        HelperManager.prototype.__init2.call(this);
    }
    getHelperName(baseName) {
        let helperName = this.helperNames[baseName];
        if (helperName) {
            return helperName;
        }
        helperName = this.nameManager.claimFreeName(`_${baseName}`);
        this.helperNames[baseName] = helperName;
        return helperName;
    }
    emitHelpers() {
        let resultCode = "";
        if (this.helperNames.optionalChainDelete) {
            this.getHelperName("optionalChain");
        }
        if (this.helperNames.asyncOptionalChainDelete) {
            this.getHelperName("asyncOptionalChain");
        }
        for (const [baseName, helperCodeTemplate] of Object.entries(HELPERS)){
            const helperName = this.helperNames[baseName];
            let helperCode = helperCodeTemplate;
            if (baseName === "optionalChainDelete") {
                helperCode = helperCode.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain);
            } else if (baseName === "asyncOptionalChainDelete") {
                helperCode = helperCode.replace("ASYNC_OPTIONAL_CHAIN_NAME", this.helperNames.asyncOptionalChain);
            } else if (baseName === "require") {
                if (this.createRequireName === null) {
                    this.createRequireName = this.nameManager.claimFreeName("_createRequire");
                }
                helperCode = helperCode.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName);
            }
            if (helperName) {
                resultCode += " ";
                resultCode += helperCode.replace(baseName, helperName).replace(/\s+/g, " ").trim();
            }
        }
        return resultCode;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/identifyShadowedGlobals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>identifyShadowedGlobals,
    "hasShadowedGlobals",
    ()=>hasShadowedGlobals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
;
;
function identifyShadowedGlobals(tokens, scopes, globalNames) {
    if (!hasShadowedGlobals(tokens, globalNames)) {
        return;
    }
    markShadowedGlobals(tokens, scopes, globalNames);
}
function hasShadowedGlobals(tokens, globalNames) {
    for (const token of tokens.tokens){
        if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && !token.isType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonTopLevelDeclaration"])(token) && globalNames.has(tokens.identifierNameForToken(token))) {
            return true;
        }
    }
    return false;
}
function markShadowedGlobals(tokens, scopes, globalNames) {
    const scopeStack = [];
    let scopeIndex = scopes.length - 1;
    // Scopes were generated at completion time, so they're sorted by end index, so we can maintain a
    // good stack by going backwards through them.
    for(let i = tokens.tokens.length - 1;; i--){
        while(scopeStack.length > 0 && scopeStack[scopeStack.length - 1].startTokenIndex === i + 1){
            scopeStack.pop();
        }
        while(scopeIndex >= 0 && scopes[scopeIndex].endTokenIndex === i + 1){
            scopeStack.push(scopes[scopeIndex]);
            scopeIndex--;
        }
        // Process scopes after the last iteration so we can make sure we pop all of them.
        if (i < 0) {
            break;
        }
        const token = tokens.tokens[i];
        const name = tokens.identifierNameForToken(token);
        if (scopeStack.length > 1 && !token.isType && token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name && globalNames.has(name)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockScopedDeclaration"])(token)) {
                markShadowedForScope(scopeStack[scopeStack.length - 1], tokens, name);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunctionScopedDeclaration"])(token)) {
                let stackIndex = scopeStack.length - 1;
                while(stackIndex > 0 && !scopeStack[stackIndex].isFunctionScope){
                    stackIndex--;
                }
                if (stackIndex < 0) {
                    throw new Error("Did not find parent function scope.");
                }
                markShadowedForScope(scopeStack[stackIndex], tokens, name);
            }
        }
    }
    if (scopeStack.length > 0) {
        throw new Error("Expected empty scope stack after processing file.");
    }
}
function markShadowedForScope(scope, tokens, name) {
    for(let i = scope.startTokenIndex; i < scope.endTokenIndex; i++){
        const token = tokens.tokens[i];
        if ((token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name || token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName) && tokens.identifierNameForToken(token) === name) {
            token.shadowsGlobal = true;
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/NameManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NameManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getIdentifierNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getIdentifierNames.js [app-client] (ecmascript)");
;
class NameManager {
    __init() {
        this.usedNames = new Set();
    }
    constructor(code, tokens){
        ;
        NameManager.prototype.__init.call(this);
        this.usedNames = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getIdentifierNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(code, tokens));
    }
    claimFreeName(name) {
        const newName = this.findFreeName(name);
        this.usedNames.add(newName);
        return newName;
    }
    findFreeName(name) {
        if (!this.usedNames.has(name)) {
            return name;
        }
        let suffixNum = 2;
        while(this.usedNames.has(name + String(suffixNum))){
            suffixNum++;
        }
        return name + String(suffixNum);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/Options-gen-types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module was automatically generated by `ts-interface-builder`
 */ __turbopack_context__.s([
    "Options",
    ()=>Options,
    "SourceMapOptions",
    ()=>SourceMapOptions,
    "Transform",
    ()=>Transform,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/index.js [app-client] (ecmascript)");
;
const Transform = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"](__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("jsx"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("typescript"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("flow"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("imports"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("react-hot-loader"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("jest"));
const SourceMapOptions = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iface"]([], {
    compiledFilename: "string"
});
const Options = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iface"]([], {
    transforms: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"]("Transform"),
    disableESTransforms: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    jsxRuntime: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"](__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["union"](__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("classic"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("automatic"), __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lit"]("preserve"))),
    production: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    jsxImportSource: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("string"),
    jsxPragma: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("string"),
    jsxFragmentPragma: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("string"),
    keepUnusedImports: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    preserveDynamicImport: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    injectCreateRequireForImportRequire: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    enableLegacyTypeScriptModuleInterop: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    enableLegacyBabel5ModuleInterop: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("boolean"),
    sourceMapOptions: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("SourceMapOptions"),
    filePath: __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opt"]("string")
});
const exportedTypeSuite = {
    Transform,
    SourceMapOptions,
    Options
};
const __TURBOPACK__default__export__ = exportedTypeSuite;
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/Options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateOptions",
    ()=>validateOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$Options$2d$gen$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/Options-gen-types.js [app-client] (ecmascript)");
;
;
const { Options: OptionsChecker } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$ts$2d$interface$2d$checker$40$0$2e$1$2e$13$2f$node_modules$2f$ts$2d$interface$2d$checker$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCheckers"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$Options$2d$gen$2d$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function validateOptions(options) {
    OptionsChecker.strictCheck(options);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/TokenProcessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TokenProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isAsyncOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isAsyncOperation.js [app-client] (ecmascript)");
;
;
class TokenProcessor {
    __init() {
        this.resultCode = "";
    }
    // Array mapping input token index to optional string index position in the
    // output code.
    __init2() {
        this.resultMappings = new Array(this.tokens.length);
    }
    __init3() {
        this.tokenIndex = 0;
    }
    constructor(code, tokens, isFlowEnabled, disableESTransforms, helperManager){
        ;
        this.code = code;
        this.tokens = tokens;
        this.isFlowEnabled = isFlowEnabled;
        this.disableESTransforms = disableESTransforms;
        this.helperManager = helperManager;
        TokenProcessor.prototype.__init.call(this);
        TokenProcessor.prototype.__init2.call(this);
        TokenProcessor.prototype.__init3.call(this);
    }
    /**
   * Snapshot the token state in a way that can be restored later, useful for
   * things like lookahead.
   *
   * resultMappings do not need to be copied since in all use cases, they will
   * be overwritten anyway after restore.
   */ snapshot() {
        return {
            resultCode: this.resultCode,
            tokenIndex: this.tokenIndex
        };
    }
    restoreToSnapshot(snapshot) {
        this.resultCode = snapshot.resultCode;
        this.tokenIndex = snapshot.tokenIndex;
    }
    /**
   * Remove and return the code generated since the snapshot, leaving the
   * current token position in-place. Unlike most TokenProcessor operations,
   * this operation can result in input/output line number mismatches because
   * the removed code may contain newlines, so this operation should be used
   * sparingly.
   */ dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot) {
        const result = this.resultCode.slice(snapshot.resultCode.length);
        this.resultCode = snapshot.resultCode;
        return result;
    }
    reset() {
        this.resultCode = "";
        this.resultMappings = new Array(this.tokens.length);
        this.tokenIndex = 0;
    }
    matchesContextualAtIndex(index, contextualKeyword) {
        return this.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens[index].contextualKeyword === contextualKeyword;
    }
    identifierNameAtIndex(index) {
        // TODO: We need to process escapes since technically you can have unicode escapes in variable
        // names.
        return this.identifierNameForToken(this.tokens[index]);
    }
    identifierNameAtRelativeIndex(relativeIndex) {
        return this.identifierNameForToken(this.tokenAtRelativeIndex(relativeIndex));
    }
    identifierName() {
        return this.identifierNameForToken(this.currentToken());
    }
    identifierNameForToken(token) {
        return this.code.slice(token.start, token.end);
    }
    rawCodeForToken(token) {
        return this.code.slice(token.start, token.end);
    }
    stringValueAtIndex(index) {
        return this.stringValueForToken(this.tokens[index]);
    }
    stringValue() {
        return this.stringValueForToken(this.currentToken());
    }
    stringValueForToken(token) {
        // This is used to identify when two imports are the same and to resolve TypeScript enum keys.
        // Ideally we'd process escapes within the strings, but for now we pretty much take the raw
        // code.
        return this.code.slice(token.start + 1, token.end - 1);
    }
    matches1AtIndex(index, t1) {
        return this.tokens[index].type === t1;
    }
    matches2AtIndex(index, t1, t2) {
        return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2;
    }
    matches3AtIndex(index, t1, t2, t3) {
        return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2 && this.tokens[index + 2].type === t3;
    }
    matches1(t1) {
        return this.tokens[this.tokenIndex].type === t1;
    }
    matches2(t1, t2) {
        return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2;
    }
    matches3(t1, t2, t3) {
        return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3;
    }
    matches4(t1, t2, t3, t4) {
        return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3 && this.tokens[this.tokenIndex + 3].type === t4;
    }
    matches5(t1, t2, t3, t4, t5) {
        return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2 && this.tokens[this.tokenIndex + 2].type === t3 && this.tokens[this.tokenIndex + 3].type === t4 && this.tokens[this.tokenIndex + 4].type === t5;
    }
    matchesContextual(contextualKeyword) {
        return this.matchesContextualAtIndex(this.tokenIndex, contextualKeyword);
    }
    matchesContextIdAndLabel(type, contextId) {
        return this.matches1(type) && this.currentToken().contextId === contextId;
    }
    previousWhitespaceAndComments() {
        let whitespaceAndComments = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
        if (this.isFlowEnabled) {
            whitespaceAndComments = whitespaceAndComments.replace(/@flow/g, "");
        }
        return whitespaceAndComments;
    }
    replaceToken(newCode) {
        this.resultCode += this.previousWhitespaceAndComments();
        this.appendTokenPrefix();
        this.resultMappings[this.tokenIndex] = this.resultCode.length;
        this.resultCode += newCode;
        this.appendTokenSuffix();
        this.tokenIndex++;
    }
    replaceTokenTrimmingLeftWhitespace(newCode) {
        this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, "");
        this.appendTokenPrefix();
        this.resultMappings[this.tokenIndex] = this.resultCode.length;
        this.resultCode += newCode;
        this.appendTokenSuffix();
        this.tokenIndex++;
    }
    removeInitialToken() {
        this.replaceToken("");
    }
    removeToken() {
        this.replaceTokenTrimmingLeftWhitespace("");
    }
    /**
   * Remove all code until the next }, accounting for balanced braces.
   */ removeBalancedCode() {
        let braceDepth = 0;
        while(!this.isAtEnd()){
            if (this.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                braceDepth++;
            } else if (this.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                if (braceDepth === 0) {
                    return;
                }
                braceDepth--;
            }
            this.removeToken();
        }
    }
    copyExpectedToken(tokenType) {
        if (this.tokens[this.tokenIndex].type !== tokenType) {
            throw new Error(`Expected token ${tokenType}`);
        }
        this.copyToken();
    }
    copyToken() {
        this.resultCode += this.previousWhitespaceAndComments();
        this.appendTokenPrefix();
        this.resultMappings[this.tokenIndex] = this.resultCode.length;
        this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end);
        this.appendTokenSuffix();
        this.tokenIndex++;
    }
    copyTokenWithPrefix(prefix) {
        this.resultCode += this.previousWhitespaceAndComments();
        this.appendTokenPrefix();
        this.resultCode += prefix;
        this.resultMappings[this.tokenIndex] = this.resultCode.length;
        this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end);
        this.appendTokenSuffix();
        this.tokenIndex++;
    }
    appendTokenPrefix() {
        const token = this.currentToken();
        if (token.numNullishCoalesceStarts || token.isOptionalChainStart) {
            token.isAsyncOperation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isAsyncOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this);
        }
        if (this.disableESTransforms) {
            return;
        }
        if (token.numNullishCoalesceStarts) {
            for(let i = 0; i < token.numNullishCoalesceStarts; i++){
                if (token.isAsyncOperation) {
                    this.resultCode += "await ";
                    this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce");
                } else {
                    this.resultCode += this.helperManager.getHelperName("nullishCoalesce");
                }
                this.resultCode += "(";
            }
        }
        if (token.isOptionalChainStart) {
            if (token.isAsyncOperation) {
                this.resultCode += "await ";
            }
            if (this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._delete) {
                if (token.isAsyncOperation) {
                    this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete");
                } else {
                    this.resultCode += this.helperManager.getHelperName("optionalChainDelete");
                }
            } else if (token.isAsyncOperation) {
                this.resultCode += this.helperManager.getHelperName("asyncOptionalChain");
            } else {
                this.resultCode += this.helperManager.getHelperName("optionalChain");
            }
            this.resultCode += "([";
        }
    }
    appendTokenSuffix() {
        const token = this.currentToken();
        if (token.isOptionalChainEnd && !this.disableESTransforms) {
            this.resultCode += "])";
        }
        if (token.numNullishCoalesceEnds && !this.disableESTransforms) {
            for(let i = 0; i < token.numNullishCoalesceEnds; i++){
                this.resultCode += "))";
            }
        }
    }
    appendCode(code) {
        this.resultCode += code;
    }
    currentToken() {
        return this.tokens[this.tokenIndex];
    }
    currentTokenCode() {
        const token = this.currentToken();
        return this.code.slice(token.start, token.end);
    }
    tokenAtRelativeIndex(relativeIndex) {
        return this.tokens[this.tokenIndex + relativeIndex];
    }
    currentIndex() {
        return this.tokenIndex;
    }
    /**
   * Move to the next token. Only suitable in preprocessing steps. When
   * generating new code, you should use copyToken or removeToken.
   */ nextToken() {
        if (this.tokenIndex === this.tokens.length) {
            throw new Error("Unexpectedly reached end of input.");
        }
        this.tokenIndex++;
    }
    previousToken() {
        this.tokenIndex--;
    }
    finish() {
        if (this.tokenIndex !== this.tokens.length) {
            throw new Error("Tried to finish processing tokens before reaching the end.");
        }
        this.resultCode += this.previousWhitespaceAndComments();
        return {
            code: this.resultCode,
            mappings: this.resultMappings
        };
    }
    isAtEnd() {
        return this.tokenIndex === this.tokens.length;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFormattedTokens",
    ()=>getFormattedTokens,
    "getVersion",
    ()=>getVersion,
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$CJSImportProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/CJSImportProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$computeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/computeSourceMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$HelperManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/HelperManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$identifyShadowedGlobals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/identifyShadowedGlobals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$NameManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/NameManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$TokenProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/TokenProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$RootTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/RootTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$formatTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/formatTokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getTSImportedNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getTSImportedNames.js [app-client] (ecmascript)");
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
function getVersion() {
    /* istanbul ignore next */ return "3.35.0";
}
function transform(code, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateOptions"])(options);
    try {
        const sucraseContext = getSucraseContext(code, options);
        const transformer = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$RootTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](sucraseContext, options.transforms, Boolean(options.enableLegacyBabel5ModuleInterop), options);
        const transformerResult = transformer.transform();
        let result = {
            code: transformerResult.code
        };
        if (options.sourceMapOptions) {
            if (!options.filePath) {
                throw new Error("filePath must be specified when generating a source map.");
            }
            result = {
                ...result,
                sourceMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$computeSourceMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(transformerResult, options.filePath, options.sourceMapOptions, code, sucraseContext.tokenProcessor.tokens)
            };
        }
        return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
        if (options.filePath) {
            e.message = `Error transforming ${options.filePath}: ${e.message}`;
        }
        throw e;
    }
}
function getFormattedTokens(code, options) {
    const tokens = getSucraseContext(code, options).tokenProcessor.tokens;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$formatTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(code, tokens);
}
/**
 * Call into the parser/tokenizer and do some further preprocessing:
 * - Come up with a set of used names so that we can assign new names.
 * - Preprocess all import/export statements so we know which globals we are interested in.
 * - Compute situations where any of those globals are shadowed.
 *
 * In the future, some of these preprocessing steps can be skipped based on what actual work is
 * being done.
 */ function getSucraseContext(code, options) {
    const isJSXEnabled = options.transforms.includes("jsx");
    const isTypeScriptEnabled = options.transforms.includes("typescript");
    const isFlowEnabled = options.transforms.includes("flow");
    const disableESTransforms = options.disableESTransforms === true;
    const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(code, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
    const tokens = file.tokens;
    const scopes = file.scopes;
    const nameManager = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$NameManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](code, tokens);
    const helperManager = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$HelperManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelperManager"](nameManager);
    const tokenProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$TokenProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](code, tokens, isFlowEnabled, disableESTransforms, helperManager);
    const enableLegacyTypeScriptModuleInterop = Boolean(options.enableLegacyTypeScriptModuleInterop);
    let importProcessor = null;
    if (options.transforms.includes("imports")) {
        importProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$CJSImportProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](nameManager, tokenProcessor, enableLegacyTypeScriptModuleInterop, options, options.transforms.includes("typescript"), Boolean(options.keepUnusedImports), helperManager);
        importProcessor.preprocessTokens();
        // We need to mark shadowed globals after processing imports so we know that the globals are,
        // but before type-only import pruning, since that relies on shadowing information.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$identifyShadowedGlobals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokenProcessor, scopes, importProcessor.getGlobalNames());
        if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
            importProcessor.pruneTypeOnlyImports();
        }
    } else if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
        // Shadowed global detection is needed for TS implicit elision of imported names.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$identifyShadowedGlobals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokenProcessor, scopes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getTSImportedNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokenProcessor));
    }
    return {
        tokenProcessor,
        scopes,
        nameManager,
        importProcessor,
        helperManager
    };
}
}),
]);

//# sourceMappingURL=4c95d_sucrase_dist_esm_ee3b49c2._.js.map