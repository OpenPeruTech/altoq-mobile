(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Transformer
]);
class Transformer {
    // Return true if anything was processed, false otherwise.
    getPrefixCode() {
        return "";
    }
    getHoistedCode() {
        return "";
    }
    getSuffixCode() {
        return "";
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/JSXTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JSXTransformer,
    "startsWithLowerCase",
    ()=>startsWithLowerCase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$jsx$2f$xhtml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/plugins/jsx/xhtml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getJSXPragmaInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getJSXPragmaInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
;
;
;
;
class JSXTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    // State for calculating the line number of each JSX tag in development.
    __init() {
        this.lastLineNumber = 1;
    }
    __init2() {
        this.lastIndex = 0;
    }
    // In development, variable name holding the name of the current file.
    __init3() {
        this.filenameVarName = null;
    }
    // Mapping of claimed names for imports in the automatic transform, e,g.
    // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
    __init4() {
        this.esmAutomaticImportNameResolutions = {};
    }
    // When automatically adding imports in CJS mode, we store the variable name
    // holding the imported CJS module so we can require it in the prefix.
    __init5() {
        this.cjsAutomaticModuleNameResolutions = {};
    }
    constructor(rootTransformer, tokens, importProcessor, nameManager, options){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.importProcessor = importProcessor;
        this.nameManager = nameManager;
        this.options = options;
        JSXTransformer.prototype.__init.call(this);
        JSXTransformer.prototype.__init2.call(this);
        JSXTransformer.prototype.__init3.call(this);
        JSXTransformer.prototype.__init4.call(this);
        JSXTransformer.prototype.__init5.call(this);
        ;
        this.jsxPragmaInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getJSXPragmaInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(options);
        this.isAutomaticRuntime = options.jsxRuntime === "automatic";
        this.jsxImportSource = options.jsxImportSource || "react";
    }
    process() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart)) {
            this.processJSXTag();
            return true;
        }
        return false;
    }
    getPrefixCode() {
        let prefix = "";
        if (this.filenameVarName) {
            prefix += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`;
        }
        if (this.isAutomaticRuntime) {
            if (this.importProcessor) {
                // CJS mode: emit require statements for all modules that were referenced.
                for (const [path, resolvedName] of Object.entries(this.cjsAutomaticModuleNameResolutions)){
                    prefix += `var ${resolvedName} = require("${path}");`;
                }
            } else {
                // ESM mode: consolidate and emit import statements for referenced names.
                const { createElement: createElementResolution, ...otherResolutions } = this.esmAutomaticImportNameResolutions;
                if (createElementResolution) {
                    prefix += `import {createElement as ${createElementResolution}} from "${this.jsxImportSource}";`;
                }
                const importSpecifiers = Object.entries(otherResolutions).map(([name, resolvedName])=>`${name} as ${resolvedName}`).join(", ");
                if (importSpecifiers) {
                    const importPath = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
                    prefix += `import {${importSpecifiers}} from "${importPath}";`;
                }
            }
        }
        return prefix;
    }
    processJSXTag() {
        const { jsxRole, start } = this.tokens.currentToken();
        // Calculate line number information at the very start (if in development
        // mode) so that the information is guaranteed to be queried in token order.
        const elementLocationCode = this.options.production ? null : this.getElementLocationCode(start);
        if (this.isAutomaticRuntime && jsxRole !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSXRole"].KeyAfterPropSpread) {
            this.transformTagToJSXFunc(elementLocationCode, jsxRole);
        } else {
            this.transformTagToCreateElement(elementLocationCode);
        }
    }
    getElementLocationCode(firstTokenStart) {
        const lineNumber = this.getLineNumberForIndex(firstTokenStart);
        return `lineNumber: ${lineNumber}`;
    }
    /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */ getLineNumberForIndex(index) {
        const code = this.tokens.code;
        while(this.lastIndex < index && this.lastIndex < code.length){
            if (code[this.lastIndex] === "\n") {
                this.lastLineNumber++;
            }
            this.lastIndex++;
        }
        return this.lastLineNumber;
    }
    /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */ transformTagToJSXFunc(elementLocationCode, jsxRole) {
        const isStatic = jsxRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSXRole"].StaticChildren;
        // First tag is always jsxTagStart.
        this.tokens.replaceToken(this.getJSXFuncInvocationCode(isStatic));
        let keyCode = null;
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
            // Fragment syntax.
            this.tokens.replaceToken(`${this.getFragmentCode()}, {`);
            this.processAutomaticChildrenAndEndProps(jsxRole);
        } else {
            // Normal open tag or self-closing tag.
            this.processTagIntro();
            this.tokens.appendCode(", {");
            keyCode = this.processProps(true);
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].slash, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
                // Self-closing tag, no children to add, so close the props.
                this.tokens.appendCode("}");
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
                // Tag with children.
                this.tokens.removeToken();
                this.processAutomaticChildrenAndEndProps(jsxRole);
            } else {
                throw new Error("Expected either /> or > at the end of the tag.");
            }
            // If a key was present, move it to its own arg. Note that moving code
            // like this will cause line numbers to get out of sync within the JSX
            // element if the key expression has a newline in it. This is unfortunate,
            // but hopefully should be rare.
            if (keyCode) {
                this.tokens.appendCode(`, ${keyCode}`);
            }
        }
        if (!this.options.production) {
            // If the key wasn't already added, add it now so we can correctly set
            // positional args for jsxDEV.
            if (keyCode === null) {
                this.tokens.appendCode(", void 0");
            }
            this.tokens.appendCode(`, ${isStatic}, ${this.getDevSource(elementLocationCode)}, this`);
        }
        // We're at the close-tag or the end of a self-closing tag, so remove
        // everything else and close the function call.
        this.tokens.removeInitialToken();
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)){
            this.tokens.removeToken();
        }
        this.tokens.replaceToken(")");
    }
    /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */ transformTagToCreateElement(elementLocationCode) {
        // First tag is always jsxTagStart.
        this.tokens.replaceToken(this.getCreateElementInvocationCode());
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
            // Fragment syntax.
            this.tokens.replaceToken(`${this.getFragmentCode()}, null`);
            this.processChildren(true);
        } else {
            // Normal open tag or self-closing tag.
            this.processTagIntro();
            this.processPropsObjectWithDevInfo(elementLocationCode);
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].slash, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
            // Self-closing tag; no children to process.
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)) {
                // Tag with children and a close-tag; process the children as args.
                this.tokens.removeToken();
                this.processChildren(true);
            } else {
                throw new Error("Expected either /> or > at the end of the tag.");
            }
        }
        // We're at the close-tag or the end of a self-closing tag, so remove
        // everything else and close the function call.
        this.tokens.removeInitialToken();
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)){
            this.tokens.removeToken();
        }
        this.tokens.replaceToken(")");
    }
    /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */ getJSXFuncInvocationCode(isStatic) {
        if (this.options.production) {
            if (isStatic) {
                return this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime");
            } else {
                return this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime");
            }
        } else {
            return this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
        }
    }
    /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */ getCreateElementInvocationCode() {
        if (this.isAutomaticRuntime) {
            return this.claimAutoImportedFuncInvocation("createElement", "");
        } else {
            const { jsxPragmaInfo } = this;
            const resolvedPragmaBaseName = this.importProcessor ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.base) || jsxPragmaInfo.base : jsxPragmaInfo.base;
            return `${resolvedPragmaBaseName}${jsxPragmaInfo.suffix}(`;
        }
    }
    /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */ getFragmentCode() {
        if (this.isAutomaticRuntime) {
            return this.claimAutoImportedName("Fragment", this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
        } else {
            const { jsxPragmaInfo } = this;
            const resolvedFragmentPragmaBaseName = this.importProcessor ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.fragmentBase) || jsxPragmaInfo.fragmentBase : jsxPragmaInfo.fragmentBase;
            return resolvedFragmentPragmaBaseName + jsxPragmaInfo.fragmentSuffix;
        }
    }
    /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */ claimAutoImportedFuncInvocation(funcName, importPathSuffix) {
        const funcCode = this.claimAutoImportedName(funcName, importPathSuffix);
        if (this.importProcessor) {
            return `${funcCode}.call(void 0, `;
        } else {
            return `${funcCode}(`;
        }
    }
    claimAutoImportedName(funcName, importPathSuffix) {
        if (this.importProcessor) {
            // CJS mode: claim a name for the module and mark it for import.
            const path = this.jsxImportSource + importPathSuffix;
            if (!this.cjsAutomaticModuleNameResolutions[path]) {
                this.cjsAutomaticModuleNameResolutions[path] = this.importProcessor.getFreeIdentifierForPath(path);
            }
            return `${this.cjsAutomaticModuleNameResolutions[path]}.${funcName}`;
        } else {
            // ESM mode: claim a name for this function and add it to the names that
            // should be auto-imported when the prefix is generated.
            if (!this.esmAutomaticImportNameResolutions[funcName]) {
                this.esmAutomaticImportNameResolutions[funcName] = this.nameManager.claimFreeName(`_${funcName}`);
            }
            return this.esmAutomaticImportNameResolutions[funcName];
        }
    }
    /**
   * Process the first part of a tag, before any props.
   */ processTagIntro() {
        // Walk forward until we see one of these patterns:
        // jsxName to start the first prop, preceded by another jsxName to end the tag name.
        // jsxName to start the first prop, preceded by greaterThan to end the type argument.
        // [open brace] to start the first prop.
        // [jsxTagEnd] to end the open-tag.
        // [slash, jsxTagEnd] to end the self-closing tag.
        let introEnd = this.tokens.currentIndex() + 1;
        while(this.tokens.tokens[introEnd].isType || !this.tokens.matches2AtIndex(introEnd - 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName) && !this.tokens.matches2AtIndex(introEnd - 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].greaterThan, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName) && !this.tokens.matches1AtIndex(introEnd, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) && !this.tokens.matches1AtIndex(introEnd, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd) && !this.tokens.matches2AtIndex(introEnd, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].slash, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagEnd)){
            introEnd++;
        }
        if (introEnd === this.tokens.currentIndex() + 1) {
            const tagName = this.tokens.identifierName();
            if (startsWithLowerCase(tagName)) {
                this.tokens.replaceToken(`'${tagName}'`);
            }
        }
        while(this.tokens.currentIndex() < introEnd){
            this.rootTransformer.processToken();
        }
    }
    /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */ processPropsObjectWithDevInfo(elementLocationCode) {
        const devProps = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(elementLocationCode)}`;
        if (!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName) && !this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            if (devProps) {
                this.tokens.appendCode(`, {${devProps}}`);
            } else {
                this.tokens.appendCode(`, null`);
            }
            return;
        }
        this.tokens.appendCode(`, {`);
        this.processProps(false);
        if (devProps) {
            this.tokens.appendCode(` ${devProps}}`);
        } else {
            this.tokens.appendCode("}");
        }
    }
    /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */ processProps(extractKeyCode) {
        let keyCode = null;
        while(true){
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                // This is a regular key={value} or key="value" prop.
                const propName = this.tokens.identifierName();
                if (extractKeyCode && propName === "key") {
                    if (keyCode !== null) {
                        // The props list has multiple keys. Different implementations are
                        // inconsistent about what to do here: as of this writing, Babel and
                        // swc keep the *last* key and completely remove the rest, while
                        // TypeScript uses the *first* key and leaves the others as regular
                        // props. The React team collaborated with Babel on the
                        // implementation of this behavior, so presumably the Babel behavior
                        // is the one to use.
                        // Since we won't ever be emitting the previous key code, we need to
                        // at least emit its newlines here so that the line numbers match up
                        // in the long run.
                        this.tokens.appendCode(keyCode.replace(/[^\n]/g, ""));
                    }
                    // key
                    this.tokens.removeToken();
                    // =
                    this.tokens.removeToken();
                    const snapshot = this.tokens.snapshot();
                    this.processPropValue();
                    keyCode = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot);
                    continue;
                } else {
                    this.processPropName(propName);
                    this.tokens.replaceToken(": ");
                    this.processPropValue();
                }
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName)) {
                // This is a shorthand prop like <input disabled />.
                const propName = this.tokens.identifierName();
                this.processPropName(propName);
                this.tokens.appendCode(": true");
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                // This is prop spread, like <div {...getProps()}>, which we can pass
                // through fairly directly as an object spread.
                this.tokens.replaceToken("");
                this.rootTransformer.processBalancedCode();
                this.tokens.replaceToken("");
            } else {
                break;
            }
            this.tokens.appendCode(",");
        }
        return keyCode;
    }
    processPropName(propName) {
        if (propName.includes("-")) {
            this.tokens.replaceToken(`'${propName}'`);
        } else {
            this.tokens.copyToken();
        }
    }
    processPropValue() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            this.tokens.replaceToken("");
            this.rootTransformer.processBalancedCode();
            this.tokens.replaceToken("");
        } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart)) {
            this.processJSXTag();
        } else {
            this.processStringPropValue();
        }
    }
    processStringPropValue() {
        const token = this.tokens.currentToken();
        const valueCode = this.tokens.code.slice(token.start + 1, token.end - 1);
        const replacementCode = formatJSXTextReplacement(valueCode);
        const literalCode = formatJSXStringValueLiteral(valueCode);
        this.tokens.replaceToken(literalCode + replacementCode);
    }
    /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */ processAutomaticChildrenAndEndProps(jsxRole) {
        if (jsxRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSXRole"].StaticChildren) {
            this.tokens.appendCode(" children: [");
            this.processChildren(false);
            this.tokens.appendCode("]}");
        } else {
            // The parser information tells us whether we will see a real child or if
            // all remaining children (if any) will resolve to empty. If there are no
            // non-empty children, don't emit a children prop at all, but still
            // process children so that we properly transform the code into nothing.
            if (jsxRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSXRole"].OneChild) {
                this.tokens.appendCode(" children: ");
            }
            this.processChildren(false);
            this.tokens.appendCode("}");
        }
    }
    /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */ processChildren(needsInitialComma) {
        let needsComma = needsInitialComma;
        while(true){
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].slash)) {
                // Closing tag, so no more children.
                return;
            }
            let didEmitElement = false;
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                    // Empty interpolations and comment-only interpolations are allowed
                    // and don't create an extra child arg.
                    this.tokens.replaceToken("");
                    this.tokens.replaceToken("");
                } else {
                    // Interpolated expression.
                    this.tokens.replaceToken(needsComma ? ", " : "");
                    this.rootTransformer.processBalancedCode();
                    this.tokens.replaceToken("");
                    didEmitElement = true;
                }
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxTagStart)) {
                // Child JSX element
                this.tokens.appendCode(needsComma ? ", " : "");
                this.processJSXTag();
                didEmitElement = true;
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxText) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxEmptyText)) {
                didEmitElement = this.processChildTextElement(needsComma);
            } else {
                throw new Error("Unexpected token when processing JSX children.");
            }
            if (didEmitElement) {
                needsComma = true;
            }
        }
    }
    /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */ processChildTextElement(needsComma) {
        const token = this.tokens.currentToken();
        const valueCode = this.tokens.code.slice(token.start, token.end);
        const replacementCode = formatJSXTextReplacement(valueCode);
        const literalCode = formatJSXTextLiteral(valueCode);
        if (literalCode === '""') {
            this.tokens.replaceToken(replacementCode);
            return false;
        } else {
            this.tokens.replaceToken(`${needsComma ? ", " : ""}${literalCode}${replacementCode}`);
            return true;
        }
    }
    getDevSource(elementLocationCode) {
        return `{fileName: ${this.getFilenameVarName()}, ${elementLocationCode}}`;
    }
    getFilenameVarName() {
        if (!this.filenameVarName) {
            this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName");
        }
        return this.filenameVarName;
    }
}
function startsWithLowerCase(s) {
    const firstChar = s.charCodeAt(0);
    return firstChar >= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lowercaseA && firstChar <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lowercaseZ;
}
/**
 * Turn the given jsxText string into a JS string literal. Leading and trailing
 * whitespace on lines is removed, except immediately after the open-tag and
 * before the close-tag. Empty lines are completely removed, and spaces are
 * added between lines after that.
 *
 * We use JSON.stringify to introduce escape characters as necessary, and trim
 * the start and end of each line and remove blank lines.
 */ function formatJSXTextLiteral(text) {
    let result = "";
    let whitespace = "";
    let isInInitialLineWhitespace = false;
    let seenNonWhitespace = false;
    for(let i = 0; i < text.length; i++){
        const c = text[i];
        if (c === " " || c === "\t" || c === "\r") {
            if (!isInInitialLineWhitespace) {
                whitespace += c;
            }
        } else if (c === "\n") {
            whitespace = "";
            isInInitialLineWhitespace = true;
        } else {
            if (seenNonWhitespace && isInInitialLineWhitespace) {
                result += " ";
            }
            result += whitespace;
            whitespace = "";
            if (c === "&") {
                const { entity, newI } = processEntity(text, i + 1);
                i = newI - 1;
                result += entity;
            } else {
                result += c;
            }
            seenNonWhitespace = true;
            isInInitialLineWhitespace = false;
        }
    }
    if (!isInInitialLineWhitespace) {
        result += whitespace;
    }
    return JSON.stringify(result);
}
/**
 * Produce the code that should be printed after the JSX text string literal,
 * with most content removed, but all newlines preserved and all spacing at the
 * end preserved.
 */ function formatJSXTextReplacement(text) {
    let numNewlines = 0;
    let numSpaces = 0;
    for (const c of text){
        if (c === "\n") {
            numNewlines++;
            numSpaces = 0;
        } else if (c === " ") {
            numSpaces++;
        }
    }
    return "\n".repeat(numNewlines) + " ".repeat(numSpaces);
}
/**
 * Format a string in the value position of a JSX prop.
 *
 * Use the same implementation as convertAttribute from
 * babel-helper-builder-react-jsx.
 */ function formatJSXStringValueLiteral(text) {
    let result = "";
    for(let i = 0; i < text.length; i++){
        const c = text[i];
        if (c === "\n") {
            if (/\s/.test(text[i + 1])) {
                result += " ";
                while(i < text.length && /\s/.test(text[i + 1])){
                    i++;
                }
            } else {
                result += "\n";
            }
        } else if (c === "&") {
            const { entity, newI } = processEntity(text, i + 1);
            result += entity;
            i = newI - 1;
        } else {
            result += c;
        }
    }
    return JSON.stringify(result);
}
/**
 * Starting at a &, see if there's an HTML entity (specified by name, decimal
 * char code, or hex char code) and return it if so.
 *
 * Modified from jsxReadString in babel-parser.
 */ function processEntity(text, indexAfterAmpersand) {
    let str = "";
    let count = 0;
    let entity;
    let i = indexAfterAmpersand;
    if (text[i] === "#") {
        let radix = 10;
        i++;
        let numStart;
        if (text[i] === "x") {
            radix = 16;
            i++;
            numStart = i;
            while(i < text.length && isHexDigit(text.charCodeAt(i))){
                i++;
            }
        } else {
            numStart = i;
            while(i < text.length && isDecimalDigit(text.charCodeAt(i))){
                i++;
            }
        }
        if (text[i] === ";") {
            const numStr = text.slice(numStart, i);
            if (numStr) {
                i++;
                entity = String.fromCodePoint(parseInt(numStr, radix));
            }
        }
    } else {
        while(i < text.length && count++ < 10){
            const ch = text[i];
            i++;
            if (ch === ";") {
                entity = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$plugins$2f$jsx$2f$xhtml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(str);
                break;
            }
            str += ch;
        }
    }
    if (!entity) {
        return {
            entity: "&",
            newI: indexAfterAmpersand
        };
    }
    return {
        entity,
        newI: i
    };
}
function isDecimalDigit(code) {
    return code >= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit0 && code <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit9;
}
function isHexDigit(code) {
    return code >= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit0 && code <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit9 || code >= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lowercaseA && code <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].lowercaseF || code >= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].uppercaseA && code <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].uppercaseF;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/CJSImportTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CJSImportTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$elideImportEquals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/elideImportEquals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getDeclarationInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isExportFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isExportFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/removeMaybeImportAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$shouldElideDefaultExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/shouldElideDefaultExport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
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
class CJSImportTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    __init() {
        this.hadExport = false;
    }
    __init2() {
        this.hadNamedExport = false;
    }
    __init3() {
        this.hadDefaultExport = false;
    }
    constructor(rootTransformer, tokens, importProcessor, nameManager, helperManager, reactHotLoaderTransformer, enableLegacyBabel5ModuleInterop, enableLegacyTypeScriptModuleInterop, isTypeScriptTransformEnabled, isFlowTransformEnabled, preserveDynamicImport, keepUnusedImports){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.importProcessor = importProcessor;
        this.nameManager = nameManager;
        this.helperManager = helperManager;
        this.reactHotLoaderTransformer = reactHotLoaderTransformer;
        this.enableLegacyBabel5ModuleInterop = enableLegacyBabel5ModuleInterop;
        this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;
        this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
        this.isFlowTransformEnabled = isFlowTransformEnabled;
        this.preserveDynamicImport = preserveDynamicImport;
        this.keepUnusedImports = keepUnusedImports;
        CJSImportTransformer.prototype.__init.call(this);
        CJSImportTransformer.prototype.__init2.call(this);
        CJSImportTransformer.prototype.__init3.call(this);
        ;
        this.declarationInfo = isTypeScriptTransformEnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokens) : __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_DECLARATION_INFO"];
    }
    getPrefixCode() {
        let prefix = "";
        if (this.hadExport) {
            prefix += 'Object.defineProperty(exports, "__esModule", {value: true});';
        }
        return prefix;
    }
    getSuffixCode() {
        if (this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport) {
            return "\nmodule.exports = exports.default;\n";
        }
        return "";
    }
    process() {
        // TypeScript `import foo = require('foo');` should always just be translated to plain require.
        if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            return this.processImportEquals();
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import)) {
            this.processImport();
            return true;
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            this.tokens.replaceToken("module.exports");
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export) && !this.tokens.currentToken().isType) {
            this.hadExport = true;
            return this.processExport();
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].postIncDec)) {
            // Fall through to normal identifier matching if this doesn't apply.
            if (this.processPostIncDec()) {
                return true;
            }
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].jsxName)) {
            return this.processIdentifier();
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            return this.processAssignment();
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].assign)) {
            return this.processComplexAssignment();
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].preIncDec)) {
            return this.processPreIncDec();
        }
        return false;
    }
    processImportEquals() {
        const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        if (this.importProcessor.shouldAutomaticallyElideImportedName(importName)) {
            // If this name is only used as a type, elide the whole import.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$elideImportEquals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
        } else {
            // Otherwise, switch `import` to `const`.
            this.tokens.replaceToken("const");
        }
        return true;
    }
    /**
   * Transform this:
   * import foo, {bar} from 'baz';
   * into
   * var _baz = require('baz'); var _baz2 = _interopRequireDefault(_baz);
   *
   * The import code was already generated in the import preprocessing step, so
   * we just need to look it up.
   */ processImport() {
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            if (this.preserveDynamicImport) {
                // Bail out, only making progress for this one token.
                this.tokens.copyToken();
                return;
            }
            const requireWrapper = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
            this.tokens.replaceToken(`Promise.resolve().then(() => ${requireWrapper}require`);
            const contextId = this.tokens.currentToken().contextId;
            if (contextId == null) {
                throw new Error("Expected context ID on dynamic import invocation.");
            }
            this.tokens.copyToken();
            while(!this.tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR, contextId)){
                this.rootTransformer.processToken();
            }
            this.tokens.replaceToken(requireWrapper ? ")))" : "))");
            return;
        }
        const shouldElideImport = this.removeImportAndDetectIfShouldElide();
        if (shouldElideImport) {
            this.tokens.removeToken();
        } else {
            const path = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
            this.tokens.appendCode(this.importProcessor.claimImportCode(path));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
            this.tokens.removeToken();
        }
    }
    /**
   * Erase this import (since any CJS output would be completely different), and
   * return true if this import is should be elided due to being a type-only
   * import. Such imports will not be emitted at all to avoid side effects.
   *
   * Import elision only happens with the TypeScript or Flow transforms enabled.
   *
   * TODO: This function has some awkward overlap with
   *  CJSImportProcessor.pruneTypeOnlyImports , and the two should be unified.
   *  That function handles TypeScript implicit import name elision, and removes
   *  an import if all typical imported names (without `type`) are removed due
   *  to being type-only imports. This function handles Flow import removal and
   *  properly distinguishes `import 'foo'` from `import {} from 'foo'` for TS
   *  purposes.
   *
   * The position should end at the import string.
   */ removeImportAndDetectIfShouldElide() {
        this.tokens.removeInitialToken();
        if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            // This is an "import type" statement, so exit early.
            this.removeRemainingImport();
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            // We have a default import or namespace import, so there must be some
            // non-type import.
            this.removeRemainingImport();
            return false;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
            // This is a bare import, so we should proceed with the import.
            return false;
        }
        let foundNonTypeImport = false;
        let foundAnyNamedImport = false;
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)){
            // Check if any named imports are of the form "foo" or "foo as bar", with
            // no leading "type".
            if (!foundNonTypeImport && this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                this.tokens.removeToken();
                if (!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                    foundAnyNamedImport = true;
                }
                if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) || this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                    foundNonTypeImport = true;
                }
            }
            this.tokens.removeToken();
        }
        if (this.keepUnusedImports) {
            return false;
        }
        if (this.isTypeScriptTransformEnabled) {
            return !foundNonTypeImport;
        } else if (this.isFlowTransformEnabled) {
            // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
            return foundAnyNamedImport && !foundNonTypeImport;
        } else {
            return false;
        }
    }
    removeRemainingImport() {
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)){
            this.tokens.removeToken();
        }
    }
    processIdentifier() {
        const token = this.tokens.currentToken();
        if (token.shadowsGlobal) {
            return false;
        }
        if (token.identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectShorthand) {
            return this.processObjectShorthand();
        }
        if (token.identifierRole !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].Access) {
            return false;
        }
        const replacement = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(token));
        if (!replacement) {
            return false;
        }
        // Tolerate any number of closing parens while looking for an opening paren
        // that indicates a function call.
        let possibleOpenParenIndex = this.tokens.currentIndex() + 1;
        while(possibleOpenParenIndex < this.tokens.tokens.length && this.tokens.tokens[possibleOpenParenIndex].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR){
            possibleOpenParenIndex++;
        }
        // Avoid treating imported functions as methods of their `exports` object
        // by using `(0, f)` when the identifier is in a paren expression. Else
        // use `Function.prototype.call` when the identifier is a guaranteed
        // function call. When using `call`, pass undefined as the context.
        if (this.tokens.tokens[possibleOpenParenIndex].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) {
            if (this.tokens.tokenAtRelativeIndex(1).type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL && this.tokens.tokenAtRelativeIndex(-1).type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._new) {
                this.tokens.replaceToken(`${replacement}.call(void 0, `);
                // Remove the old paren.
                this.tokens.removeToken();
                // Balance out the new paren.
                this.rootTransformer.processBalancedCode();
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
            } else {
                // See here: http://2ality.com/2015/12/references.html
                this.tokens.replaceToken(`(0, ${replacement})`);
            }
        } else {
            this.tokens.replaceToken(replacement);
        }
        return true;
    }
    processObjectShorthand() {
        const identifier = this.tokens.identifierName();
        const replacement = this.importProcessor.getIdentifierReplacement(identifier);
        if (!replacement) {
            return false;
        }
        this.tokens.replaceToken(`${identifier}: ${replacement}`);
        return true;
    }
    processExport() {
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum) || this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.hadNamedExport = true;
            // Let the TypeScript transform handle it.
            return false;
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
            if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
                this.hadDefaultExport = true;
                // Flow export default enums need some special handling, so handle them
                // in that tranform rather than this one.
                return false;
            }
            this.processExportDefault();
            return true;
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            this.processExportBindings();
            return true;
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type)) {
            // export type {a};
            // export type {a as b};
            // export type {a} from './b';
            // export type * from './b';
            // export type * as ns from './b';
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
                    this.tokens.removeToken();
                }
                this.tokens.removeToken();
            } else {
                // *
                this.tokens.removeToken();
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._as)) {
                    // as
                    this.tokens.removeToken();
                    // ns
                    this.tokens.removeToken();
                }
            }
            // Remove type re-export `... } from './T'`
            if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
                this.tokens.removeToken();
                this.tokens.removeToken();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
            }
            return true;
        }
        this.hadNamedExport = true;
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const)) {
            this.processExportVar();
            return true;
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function) || // export async function
        this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function)) {
            this.processExportFunction();
            return true;
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class) || this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)) {
            this.processExportClass();
            return true;
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            this.processExportStar();
            return true;
        } else {
            throw new Error("Unrecognized export syntax.");
        }
    }
    processAssignment() {
        const index = this.tokens.currentIndex();
        const identifierToken = this.tokens.tokens[index - 1];
        // If the LHS is a type identifier, this must be a declaration like `let a: b = c;`,
        // with `b` as the identifier, so nothing needs to be done in that case.
        if (identifierToken.isType || identifierToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            return false;
        }
        if (identifierToken.shadowsGlobal) {
            return false;
        }
        if (index >= 2 && this.tokens.matches1AtIndex(index - 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
            return false;
        }
        if (index >= 2 && [
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._var,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._let,
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const
        ].includes(this.tokens.tokens[index - 2].type)) {
            // Declarations don't need an extra assignment. This doesn't avoid the
            // assignment for comma-separated declarations, but it's still correct
            // since the assignment is just redundant.
            return false;
        }
        const assignmentSnippet = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(identifierToken));
        if (!assignmentSnippet) {
            return false;
        }
        this.tokens.copyToken();
        this.tokens.appendCode(` ${assignmentSnippet} =`);
        return true;
    }
    /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */ processComplexAssignment() {
        const index = this.tokens.currentIndex();
        const identifierToken = this.tokens.tokens[index - 1];
        if (identifierToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            return false;
        }
        if (identifierToken.shadowsGlobal) {
            return false;
        }
        if (index >= 2 && this.tokens.matches1AtIndex(index - 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
            return false;
        }
        const assignmentSnippet = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(identifierToken));
        if (!assignmentSnippet) {
            return false;
        }
        this.tokens.appendCode(` = ${assignmentSnippet}`);
        this.tokens.copyToken();
        return true;
    }
    /**
   * Process something like `++a`, where `a` might be an exported value.
   */ processPreIncDec() {
        const index = this.tokens.currentIndex();
        const identifierToken = this.tokens.tokens[index + 1];
        if (identifierToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            return false;
        }
        if (identifierToken.shadowsGlobal) {
            return false;
        }
        // Ignore things like ++a.b and ++a[b] and ++a().b.
        if (index + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(index + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot) || this.tokens.matches1AtIndex(index + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL) || this.tokens.matches1AtIndex(index + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL))) {
            return false;
        }
        const identifierName = this.tokens.identifierNameForToken(identifierToken);
        const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
        if (!assignmentSnippet) {
            return false;
        }
        this.tokens.appendCode(`${assignmentSnippet} = `);
        this.tokens.copyToken();
        return true;
    }
    /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */ processPostIncDec() {
        const index = this.tokens.currentIndex();
        const identifierToken = this.tokens.tokens[index];
        const operatorToken = this.tokens.tokens[index + 1];
        if (identifierToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            return false;
        }
        if (identifierToken.shadowsGlobal) {
            return false;
        }
        if (index >= 1 && this.tokens.matches1AtIndex(index - 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
            return false;
        }
        const identifierName = this.tokens.identifierNameForToken(identifierToken);
        const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
        if (!assignmentSnippet) {
            return false;
        }
        const operatorCode = this.tokens.rawCodeForToken(operatorToken);
        // We might also replace the identifier with something like exports.x, so
        // do that replacement here as well.
        const base = this.importProcessor.getIdentifierReplacement(identifierName) || identifierName;
        if (operatorCode === "++") {
            this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} + 1, ${base} - 1)`);
        } else if (operatorCode === "--") {
            this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} - 1, ${base} + 1)`);
        } else {
            throw new Error(`Unexpected operator: ${operatorCode}`);
        }
        this.tokens.removeToken();
        return true;
    }
    processExportDefault() {
        let exportedRuntimeValue = true;
        if (this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches5(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async)) {
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            // Named function export case: change it to a top-level function
            // declaration followed by exports statement.
            const name = this.processNamedFunction();
            this.tokens.appendCode(` exports.default = ${name};`);
        } else if (this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches5(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)) {
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            this.copyDecorators();
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract)) {
                this.tokens.removeToken();
            }
            const name = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.default = ${name};`);
        // After this point, this is a plain "export default E" statement.
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$shouldElideDefaultExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) {
            // If the exported value is just an identifier and should be elided by TypeScript
            // rules, then remove it entirely. It will always have the form `export default e`,
            // where `e` is an identifier.
            exportedRuntimeValue = false;
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            this.tokens.removeToken();
        } else if (this.reactHotLoaderTransformer) {
            // We need to assign E to a variable. Change "export default E" to
            // "let _default; exports.default = _default = E"
            const defaultVarName = this.nameManager.claimFreeName("_default");
            this.tokens.replaceToken(`let ${defaultVarName}; exports.`);
            this.tokens.copyToken();
            this.tokens.appendCode(` = ${defaultVarName} =`);
            this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
        } else {
            // Change "export default E" to "exports.default = E"
            this.tokens.replaceToken("exports.");
            this.tokens.copyToken();
            this.tokens.appendCode(" =");
        }
        if (exportedRuntimeValue) {
            this.hadDefaultExport = true;
        }
    }
    copyDecorators() {
        while(this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].at)){
            this.tokens.copyToken();
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
                this.rootTransformer.processBalancedCode();
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
            } else {
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
                while(this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)){
                    this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot);
                    this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
                }
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
                    this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
                    this.rootTransformer.processBalancedCode();
                    this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
                }
            }
        }
    }
    /**
   * Transform a declaration like `export var`, `export let`, or `export const`.
   */ processExportVar() {
        if (this.isSimpleExportVar()) {
            this.processSimpleExportVar();
        } else {
            this.processComplexExportVar();
        }
    }
    /**
   * Determine if the export is of the form:
   * export var/let/const [varName] = [expr];
   * In other words, determine if function name inference might apply.
   */ isSimpleExportVar() {
        let tokenIndex = this.tokens.currentIndex();
        // export
        tokenIndex++;
        // var/let/const
        tokenIndex++;
        if (!this.tokens.matches1AtIndex(tokenIndex, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
            return false;
        }
        tokenIndex++;
        while(tokenIndex < this.tokens.tokens.length && this.tokens.tokens[tokenIndex].isType){
            tokenIndex++;
        }
        if (!this.tokens.matches1AtIndex(tokenIndex, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            return false;
        }
        return true;
    }
    /**
   * Transform an `export var` declaration initializing a single variable.
   *
   * For example, this:
   * export const f = () => {};
   * becomes this:
   * const f = () => {}; exports.f = f;
   *
   * The variable is unused (e.g. exports.f has the true value of the export).
   * We need to produce an assignment of this form so that the function will
   * have an inferred name of "f", which wouldn't happen in the more general
   * case below.
   */ processSimpleExportVar() {
        // export
        this.tokens.removeInitialToken();
        // var/let/const
        this.tokens.copyToken();
        const varName = this.tokens.identifierName();
        // x: number  ->  x
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)){
            this.rootTransformer.processToken();
        }
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
            throw new Error("Expected = token with an end index.");
        }
        while(this.tokens.currentIndex() < endIndex){
            this.rootTransformer.processToken();
        }
        this.tokens.appendCode(`; exports.${varName} = ${varName}`);
    }
    /**
   * Transform normal declaration exports, including handling destructuring.
   * For example, this:
   * export const {x: [a = 2, b], c} = d;
   * becomes this:
   * ({x: [exports.a = 2, exports.b], c: exports.c} = d;)
   */ processComplexExportVar() {
        this.tokens.removeInitialToken();
        this.tokens.removeToken();
        const needsParens = this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
        if (needsParens) {
            this.tokens.appendCode("(");
        }
        let depth = 0;
        while(true){
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dollarBraceL) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
                depth++;
                this.tokens.copyToken();
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketR)) {
                depth--;
                this.tokens.copyToken();
            } else if (depth === 0 && !this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && !this.tokens.currentToken().isType) {
                break;
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                // Default values might have assignments in the RHS that we want to ignore, so skip past
                // them.
                const endIndex = this.tokens.currentToken().rhsEndIndex;
                if (endIndex == null) {
                    throw new Error("Expected = token with an end index.");
                }
                while(this.tokens.currentIndex() < endIndex){
                    this.rootTransformer.processToken();
                }
            } else {
                const token = this.tokens.currentToken();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDeclaration"])(token)) {
                    const name = this.tokens.identifierName();
                    let replacement = this.importProcessor.getIdentifierReplacement(name);
                    if (replacement === null) {
                        throw new Error(`Expected a replacement for ${name} in \`export var\` syntax.`);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObjectShorthandDeclaration"])(token)) {
                        replacement = `${name}: ${replacement}`;
                    }
                    this.tokens.replaceToken(replacement);
                } else {
                    this.rootTransformer.processToken();
                }
            }
        }
        if (needsParens) {
            // Seek to the end of the RHS.
            const endIndex = this.tokens.currentToken().rhsEndIndex;
            if (endIndex == null) {
                throw new Error("Expected = token with an end index.");
            }
            while(this.tokens.currentIndex() < endIndex){
                this.rootTransformer.processToken();
            }
            this.tokens.appendCode(")");
        }
    }
    /**
   * Transform this:
   * export function foo() {}
   * into this:
   * function foo() {} exports.foo = foo;
   */ processExportFunction() {
        this.tokens.replaceToken("");
        const name = this.processNamedFunction();
        this.tokens.appendCode(` exports.${name} = ${name};`);
    }
    /**
   * Skip past a function with a name and return that name.
   */ processNamedFunction() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function)) {
            this.tokens.copyToken();
        } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function)) {
            if (!this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async)) {
                throw new Error("Expected async keyword in function export.");
            }
            this.tokens.copyToken();
            this.tokens.copyToken();
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            this.tokens.copyToken();
        }
        if (!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
            throw new Error("Expected identifier for exported function name.");
        }
        const name = this.tokens.identifierName();
        this.tokens.copyToken();
        if (this.tokens.currentToken().isType) {
            this.tokens.removeInitialToken();
            while(this.tokens.currentToken().isType){
                this.tokens.removeToken();
            }
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
        this.rootTransformer.processPossibleTypeRange();
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
        return name;
    }
    /**
   * Transform this:
   * export class A {}
   * into this:
   * class A {} exports.A = A;
   */ processExportClass() {
        this.tokens.removeInitialToken();
        this.copyDecorators();
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract)) {
            this.tokens.removeToken();
        }
        const name = this.rootTransformer.processNamedClass();
        this.tokens.appendCode(` exports.${name} = ${name};`);
    }
    /**
   * Transform this:
   * export {a, b as c};
   * into this:
   * exports.a = a; exports.c = b;
   *
   * OR
   *
   * Transform this:
   * export {a, b as c} from './foo';
   * into the pre-generated Object.defineProperty code from the ImportProcessor.
   *
   * For the first case, if the TypeScript transform is enabled, we need to skip
   * exports that are only defined as types.
   */ processExportBindings() {
        this.tokens.removeInitialToken();
        this.tokens.removeToken();
        const isReExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isExportFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
        const exportStatements = [];
        while(true){
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                this.tokens.removeToken();
                break;
            }
            const specifierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
            while(this.tokens.currentIndex() < specifierInfo.endIndex){
                this.tokens.removeToken();
            }
            const shouldRemoveExport = specifierInfo.isType || !isReExport && this.shouldElideExportedIdentifier(specifierInfo.leftName);
            if (!shouldRemoveExport) {
                const exportedName = specifierInfo.rightName;
                if (exportedName === "default") {
                    this.hadDefaultExport = true;
                } else {
                    this.hadNamedExport = true;
                }
                const localName = specifierInfo.leftName;
                const newLocalName = this.importProcessor.getIdentifierReplacement(localName);
                exportStatements.push(`exports.${exportedName} = ${newLocalName || localName};`);
            }
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                this.tokens.removeToken();
                break;
            }
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                this.tokens.removeToken();
                this.tokens.removeToken();
                break;
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                this.tokens.removeToken();
            } else {
                throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
            }
        }
        if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            // This is an export...from, so throw away the normal named export code
            // and use the Object.defineProperty code from ImportProcessor.
            this.tokens.removeToken();
            const path = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
        } else {
            // This is a normal named export, so use that.
            this.tokens.appendCode(exportStatements.join(" "));
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
            this.tokens.removeToken();
        }
    }
    processExportStar() {
        this.tokens.removeInitialToken();
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)){
            this.tokens.removeToken();
        }
        const path = this.tokens.stringValue();
        this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
            this.tokens.removeToken();
        }
    }
    shouldElideExportedIdentifier(name) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(name);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ESMImportTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ESMImportTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$elideImportEquals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/elideImportEquals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getDeclarationInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getImportExportSpecifierInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getNonTypeIdentifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getNonTypeIdentifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isExportFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isExportFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/removeMaybeImportAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$shouldElideDefaultExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/shouldElideDefaultExport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
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
class ESMImportTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(tokens, nameManager, helperManager, reactHotLoaderTransformer, isTypeScriptTransformEnabled, isFlowTransformEnabled, keepUnusedImports, options){
        super();
        this.tokens = tokens;
        this.nameManager = nameManager;
        this.helperManager = helperManager;
        this.reactHotLoaderTransformer = reactHotLoaderTransformer;
        this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;
        this.isFlowTransformEnabled = isFlowTransformEnabled;
        this.keepUnusedImports = keepUnusedImports;
        ;
        this.nonTypeIdentifiers = isTypeScriptTransformEnabled && !keepUnusedImports ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getNonTypeIdentifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonTypeIdentifiers"])(tokens, options) : new Set();
        this.declarationInfo = isTypeScriptTransformEnabled && !keepUnusedImports ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tokens) : __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getDeclarationInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_DECLARATION_INFO"];
        this.injectCreateRequireForImportRequire = Boolean(options.injectCreateRequireForImportRequire);
    }
    process() {
        // TypeScript `import foo = require('foo');` should always just be translated to plain require.
        if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            return this.processImportEquals();
        }
        if (this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type)) {
            // import type T = require('T')
            this.tokens.removeInitialToken();
            // This construct is always exactly 8 tokens long, so remove the 7 remaining tokens.
            for(let i = 0; i < 7; i++){
                this.tokens.removeToken();
            }
            return true;
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            this.tokens.replaceToken("module.exports");
            return true;
        }
        if (this.tokens.matches5(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type)) {
            // export import type T = require('T')
            this.tokens.removeInitialToken();
            // This construct is always exactly 9 tokens long, so remove the 8 remaining tokens.
            for(let i = 0; i < 8; i++){
                this.tokens.removeToken();
            }
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import)) {
            return this.processImport();
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
            return this.processExportDefault();
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            return this.processNamedExports();
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type)) {
            // export type {a};
            // export type {a as b};
            // export type {a} from './b';
            // export type * from './b';
            // export type * as ns from './b';
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
                while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
                    this.tokens.removeToken();
                }
                this.tokens.removeToken();
            } else {
                // *
                this.tokens.removeToken();
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._as)) {
                    // as
                    this.tokens.removeToken();
                    // ns
                    this.tokens.removeToken();
                }
            }
            // Remove type re-export `... } from './T'`
            if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
                this.tokens.removeToken();
                this.tokens.removeToken();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
            }
            return true;
        }
        return false;
    }
    processImportEquals() {
        const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        if (this.shouldAutomaticallyElideImportedName(importName)) {
            // If this name is only used as a type, elide the whole import.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$elideImportEquals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
        } else if (this.injectCreateRequireForImportRequire) {
            // We're using require in an environment (Node ESM) that doesn't provide
            // it as a global, so generate a helper to import it.
            // import -> const
            this.tokens.replaceToken("const");
            // Foo
            this.tokens.copyToken();
            // =
            this.tokens.copyToken();
            // require
            this.tokens.replaceToken(this.helperManager.getHelperName("require"));
        } else {
            // Otherwise, just switch `import` to `const`.
            this.tokens.replaceToken("const");
        }
        return true;
    }
    processImport() {
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            // Dynamic imports don't need to be transformed.
            return false;
        }
        const snapshot = this.tokens.snapshot();
        const allImportsRemoved = this.removeImportTypeBindings();
        if (allImportsRemoved) {
            this.tokens.restoreToSnapshot(snapshot);
            while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)){
                this.tokens.removeToken();
            }
            this.tokens.removeToken();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].semi)) {
                this.tokens.removeToken();
            }
        }
        return true;
    }
    /**
   * Remove type bindings from this import, leaving the rest of the import intact.
   *
   * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
   * of the replacement operation, so we can return early here.
   */ removeImportTypeBindings() {
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._import);
        if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            // This is an "import type" statement, so exit early.
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string)) {
            // This is a bare import, so we should proceed with the import.
            this.tokens.copyToken();
            return false;
        }
        // Skip the "module" token in import reflection.
        if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._from)) {
            this.tokens.copyToken();
        }
        let foundNonTypeImport = false;
        let foundAnyNamedImport = false;
        let needsComma = false;
        // Handle default import.
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
            if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())) {
                this.tokens.removeToken();
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                    this.tokens.removeToken();
                }
            } else {
                foundNonTypeImport = true;
                this.tokens.copyToken();
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                    // We're in a statement like:
                    // import A, * as B from './A';
                    // or
                    // import A, {foo} from './A';
                    // where the `A` is being kept. The comma should be removed if an only
                    // if the next part of the import statement is elided, but that's hard
                    // to determine at this point in the code. Instead, always remove it
                    // and set a flag to add it back if necessary.
                    needsComma = true;
                    this.tokens.removeToken();
                }
            }
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star)) {
            if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))) {
                this.tokens.removeToken();
                this.tokens.removeToken();
                this.tokens.removeToken();
            } else {
                if (needsComma) {
                    this.tokens.appendCode(",");
                }
                foundNonTypeImport = true;
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].star);
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
            }
        } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            if (needsComma) {
                this.tokens.appendCode(",");
            }
            this.tokens.copyToken();
            while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
                foundAnyNamedImport = true;
                const specifierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
                if (specifierInfo.isType || this.shouldAutomaticallyElideImportedName(specifierInfo.rightName)) {
                    while(this.tokens.currentIndex() < specifierInfo.endIndex){
                        this.tokens.removeToken();
                    }
                    if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                        this.tokens.removeToken();
                    }
                } else {
                    foundNonTypeImport = true;
                    while(this.tokens.currentIndex() < specifierInfo.endIndex){
                        this.tokens.copyToken();
                    }
                    if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                        this.tokens.copyToken();
                    }
                }
            }
            this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
        }
        if (this.keepUnusedImports) {
            return false;
        }
        if (this.isTypeScriptTransformEnabled) {
            return !foundNonTypeImport;
        } else if (this.isFlowTransformEnabled) {
            // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
            return foundAnyNamedImport && !foundNonTypeImport;
        } else {
            return false;
        }
    }
    shouldAutomaticallyElideImportedName(name) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(name);
    }
    processExportDefault() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$shouldElideDefaultExport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) {
            // If the exported value is just an identifier and should be elided by TypeScript
            // rules, then remove it entirely. It will always have the form `export default e`,
            // where `e` is an identifier.
            this.tokens.removeInitialToken();
            this.tokens.removeToken();
            this.tokens.removeToken();
            return true;
        }
        const alreadyHasName = this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches5(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._function, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async) || this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) || this.tokens.matches5(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
        if (!alreadyHasName && this.reactHotLoaderTransformer) {
            // This is a plain "export default E" statement and we need to assign E to a variable.
            // Change "export default E" to "let _default; export default _default = E"
            const defaultVarName = this.nameManager.claimFreeName("_default");
            this.tokens.replaceToken(`let ${defaultVarName}; export`);
            this.tokens.copyToken();
            this.tokens.appendCode(` ${defaultVarName} =`);
            this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
            return true;
        }
        return false;
    }
    /**
   * Handle a statement with one of these forms:
   * export {a, type b};
   * export {c, type d} from 'foo';
   *
   * In both cases, any explicit type exports should be removed. In the first
   * case, we also need to handle implicit export elision for names declared as
   * types. In the second case, we must NOT do implicit named export elision,
   * but we must remove the runtime import if all exports are type exports.
   */ processNamedExports() {
        if (!this.isTypeScriptTransformEnabled) {
            return false;
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export);
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
        const isReExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isExportFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
        let foundNonTypeExport = false;
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
            const specifierInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getImportExportSpecifierInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.tokens);
            if (specifierInfo.isType || !isReExport && this.shouldElideExportedName(specifierInfo.leftName)) {
                // Type export, so remove all tokens, including any comma.
                while(this.tokens.currentIndex() < specifierInfo.endIndex){
                    this.tokens.removeToken();
                }
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                    this.tokens.removeToken();
                }
            } else {
                // Non-type export, so copy all tokens, including any comma.
                foundNonTypeExport = true;
                while(this.tokens.currentIndex() < specifierInfo.endIndex){
                    this.tokens.copyToken();
                }
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                    this.tokens.copyToken();
                }
            }
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
        if (!this.keepUnusedImports && isReExport && !foundNonTypeExport) {
            // This is a type-only re-export, so skip evaluating the other module. Technically this
            // leaves the statement as `export {}`, but that's ok since that's a no-op.
            this.tokens.removeToken();
            this.tokens.removeToken();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$removeMaybeImportAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeMaybeImportAttributes"])(this.tokens);
        }
        return true;
    }
    /**
   * ESM elides all imports with the rule that we only elide if we see that it's
   * a type and never see it as a value. This is in contrast to CJS, which
   * elides imports that are completely unknown.
   */ shouldElideExportedName(name) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(name) && !this.declarationInfo.valueDeclarations.has(name);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/FlowTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlowTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
;
class FlowTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(rootTransformer, tokens, isImportsTransformEnabled){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.isImportsTransformEnabled = isImportsTransformEnabled;
        ;
    }
    process() {
        if (this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) {
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.processEnum();
            return true;
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.processNamedExportEnum();
            return true;
        }
        if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.processDefaultExportEnum();
            return true;
        }
        return false;
    }
    /**
   * Handle a declaration like:
   * export enum E ...
   *
   * With this imports transform, this becomes:
   * const E = [[enum]]; exports.E = E;
   *
   * otherwise, it becomes:
   * export const E = [[enum]];
   */ processNamedExportEnum() {
        if (this.isImportsTransformEnabled) {
            // export
            this.tokens.removeInitialToken();
            const enumName = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum();
            this.tokens.appendCode(` exports.${enumName} = ${enumName};`);
        } else {
            this.tokens.copyToken();
            this.processEnum();
        }
    }
    /**
   * Handle a declaration like:
   * export default enum E
   *
   * With the imports transform, this becomes:
   * const E = [[enum]]; exports.default = E;
   *
   * otherwise, it becomes:
   * const E = [[enum]]; export default E;
   */ processDefaultExportEnum() {
        // export
        this.tokens.removeInitialToken();
        // default
        this.tokens.removeToken();
        const enumName = this.tokens.identifierNameAtRelativeIndex(1);
        this.processEnum();
        if (this.isImportsTransformEnabled) {
            this.tokens.appendCode(` exports.default = ${enumName};`);
        } else {
            this.tokens.appendCode(` export default ${enumName};`);
        }
    }
    /**
   * Transpile flow enums to invoke the "flow-enums-runtime" library.
   *
   * Currently, the transpiled code always uses `require("flow-enums-runtime")`,
   * but if future flexibility is needed, we could expose a config option for
   * this string (similar to configurable JSX). Even when targeting ESM, the
   * default behavior of babel-plugin-transform-flow-enums is to use require
   * rather than injecting an import.
   *
   * Flow enums are quite a bit simpler than TS enums and have some convenient
   * constraints:
   * - Element initializers must be either always present or always absent. That
   *   means that we can use fixed lookahead on the first element (if any) and
   *   assume that all elements are like that.
   * - The right-hand side of an element initializer must be a literal value,
   *   not a complex expression and not referencing other elements. That means
   *   we can simply copy a single token.
   *
   * Enums can be broken up into three basic cases:
   *
   * Mirrored enums:
   * enum E {A, B}
   *   ->
   * const E = require("flow-enums-runtime").Mirrored(["A", "B"]);
   *
   * Initializer enums:
   * enum E {A = 1, B = 2}
   *   ->
   * const E = require("flow-enums-runtime")({A: 1, B: 2});
   *
   * Symbol enums:
   * enum E of symbol {A, B}
   *   ->
   * const E = require("flow-enums-runtime")({A: Symbol("A"), B: Symbol("B")});
   *
   * We can statically detect which of the three cases this is by looking at the
   * "of" declaration (if any) and seeing if the first element has an initializer.
   * Since the other transform details are so similar between the three cases, we
   * use a single implementation and vary the transform within processEnumElement
   * based on case.
   */ processEnum() {
        // enum E -> const E
        this.tokens.replaceToken("const");
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name);
        let isSymbolEnum = false;
        if (this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._of)) {
            this.tokens.removeToken();
            isSymbolEnum = this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._symbol);
            this.tokens.removeToken();
        }
        const hasInitializers = this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq);
        this.tokens.appendCode(' = require("flow-enums-runtime")');
        const isMirrored = !isSymbolEnum && !hasInitializers;
        this.tokens.replaceTokenTrimmingLeftWhitespace(isMirrored ? ".Mirrored([" : "({");
        while(!this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)){
            // ... is allowed at the end and has no runtime behavior.
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].ellipsis)) {
                this.tokens.removeToken();
                break;
            }
            this.processEnumElement(isSymbolEnum, hasInitializers);
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                this.tokens.copyToken();
            }
        }
        this.tokens.replaceToken(isMirrored ? "]);" : "});");
    }
    /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */ processEnumElement(isSymbolEnum, hasInitializers) {
        if (isSymbolEnum) {
            // Symbol enums never have initializers and are expanded to object elements.
            // A, -> A: Symbol("A"),
            const elementName = this.tokens.identifierName();
            this.tokens.copyToken();
            this.tokens.appendCode(`: Symbol("${elementName}")`);
        } else if (hasInitializers) {
            // Initializers are expanded to object elements.
            // A = 1, -> A: 1,
            this.tokens.copyToken();
            this.tokens.replaceTokenTrimmingLeftWhitespace(":");
            this.tokens.copyToken();
        } else {
            // Enum elements without initializers become string literal array elements.
            // A, -> "A",
            this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/JestHoistTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JestHoistTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while(i < ops.length){
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
            value = fn((...args)=>value.call(lastAccessLHS, ...args));
            lastAccessLHS = undefined;
        }
    }
    return value;
}
;
;
const JEST_GLOBAL_NAME = "jest";
const HOISTED_METHODS = [
    "mock",
    "unmock",
    "enableAutomock",
    "disableAutomock"
];
class JestHoistTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    __init() {
        this.hoistedFunctionNames = [];
    }
    constructor(rootTransformer, tokens, nameManager, importProcessor){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.nameManager = nameManager;
        this.importProcessor = importProcessor;
        JestHoistTransformer.prototype.__init.call(this);
        ;
    }
    process() {
        if (this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) && this.tokens.identifierName() === JEST_GLOBAL_NAME) {
            // TODO: This only works if imports transform is active, which it will be for jest.
            //       But if jest adds module support and we no longer need the import transform, this needs fixing.
            if (_optionalChain([
                this,
                'access',
                (_)=>_.importProcessor,
                'optionalAccess',
                (_2)=>_2.getGlobalNames,
                'call',
                (_3)=>_3(),
                'optionalAccess',
                (_4)=>_4.has,
                'call',
                (_5)=>_5(JEST_GLOBAL_NAME)
            ])) {
                return false;
            }
            return this.extractHoistedCalls();
        }
        return false;
    }
    getHoistedCode() {
        if (this.hoistedFunctionNames.length > 0) {
            // This will be placed before module interop code, but that's fine since
            // imports aren't allowed in module mock factories.
            return this.hoistedFunctionNames.map((name)=>`${name}();`).join("");
        }
        return "";
    }
    /**
   * Extracts any methods calls on the jest-object that should be hoisted.
   *
   * According to the jest docs, https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options,
   * mock, unmock, enableAutomock, disableAutomock, are the methods that should be hoisted.
   *
   * We do not apply the same checks of the arguments as babel-plugin-jest-hoist does.
   */ extractHoistedCalls() {
        // We're handling a chain of calls where `jest` may or may not need to be inserted for each call
        // in the chain, so remove the initial `jest` to make the loop implementation cleaner.
        this.tokens.removeToken();
        // Track some state so that multiple non-hoisted chained calls in a row keep their chaining
        // syntax.
        let followsNonHoistedJestCall = false;
        // Iterate through all chained calls on the jest object.
        while(this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)){
            const methodName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            const shouldHoist = HOISTED_METHODS.includes(methodName);
            if (shouldHoist) {
                // We've matched e.g. `.mock(...)` or similar call.
                // Replace the initial `.` with `function __jestHoist(){jest.`
                const hoistedFunctionName = this.nameManager.claimFreeName("__jestHoist");
                this.hoistedFunctionNames.push(hoistedFunctionName);
                this.tokens.replaceToken(`function ${hoistedFunctionName}(){${JEST_GLOBAL_NAME}.`);
                this.tokens.copyToken();
                this.tokens.copyToken();
                this.rootTransformer.processBalancedCode();
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
                this.tokens.appendCode(";}");
                followsNonHoistedJestCall = false;
            } else {
                // This is a non-hoisted method, so just transform the code as usual.
                if (followsNonHoistedJestCall) {
                    // If we didn't hoist the previous call, we can leave the code as-is to chain off of the
                    // previous method call. It's important to preserve the code here because we don't know
                    // for sure that the method actually returned the jest object for chaining.
                    this.tokens.copyToken();
                } else {
                    // If we hoisted the previous call, we know it returns the jest object back, so we insert
                    // the identifier `jest` to continue the chain.
                    this.tokens.replaceToken(`${JEST_GLOBAL_NAME}.`);
                }
                this.tokens.copyToken();
                this.tokens.copyToken();
                this.rootTransformer.processBalancedCode();
                this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
                followsNonHoistedJestCall = true;
            }
        }
        return true;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/NumericSeparatorTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NumericSeparatorTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
class NumericSeparatorTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(tokens){
        super();
        this.tokens = tokens;
        ;
    }
    process() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].num)) {
            const code = this.tokens.currentTokenCode();
            if (code.includes("_")) {
                this.tokens.replaceToken(code.replace(/_/g, ""));
                return true;
            }
        }
        return false;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/OptionalCatchBindingTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OptionalCatchBindingTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
class OptionalCatchBindingTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(tokens, nameManager){
        super();
        this.tokens = tokens;
        this.nameManager = nameManager;
        ;
    }
    process() {
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._catch, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            this.tokens.copyToken();
            this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`);
            return true;
        }
        return false;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/OptionalChainingNullishTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OptionalChainingNullishTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
class OptionalChainingNullishTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(tokens, nameManager){
        super();
        this.tokens = tokens;
        this.nameManager = nameManager;
        ;
    }
    process() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].nullishCoalescing)) {
            const token = this.tokens.currentToken();
            if (this.tokens.tokens[token.nullishStartIndex].isAsyncOperation) {
                this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (");
            } else {
                this.tokens.replaceTokenTrimmingLeftWhitespace(", () => (");
            }
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._delete)) {
            const nextToken = this.tokens.tokenAtRelativeIndex(1);
            if (nextToken.isOptionalChainStart) {
                this.tokens.removeInitialToken();
                return true;
            }
        }
        const token = this.tokens.currentToken();
        const chainStart = token.subscriptStartIndex;
        if (chainStart != null && this.tokens.tokens[chainStart].isOptionalChainStart && // Super subscripts can't be optional (since super is never null/undefined), and the syntax
        // relies on the subscript being intact, so leave this token alone.
        this.tokens.tokenAtRelativeIndex(-1).type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._super) {
            const param = this.nameManager.claimFreeName("_");
            let arrowStartSnippet;
            if (chainStart > 0 && this.tokens.matches1AtIndex(chainStart - 1, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._delete) && this.isLastSubscriptInChain()) {
                // Delete operations are special: we already removed the delete keyword, and to still
                // perform a delete, we need to insert a delete in the very last part of the chain, which
                // in correct code will always be a property access.
                arrowStartSnippet = `${param} => delete ${param}`;
            } else {
                arrowStartSnippet = `${param} => ${param}`;
            }
            if (this.tokens.tokens[chainStart].isAsyncOperation) {
                arrowStartSnippet = `async ${arrowStartSnippet}`;
            }
            if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan)) {
                if (this.justSkippedSuper()) {
                    this.tokens.appendCode(".bind(this)");
                }
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${arrowStartSnippet}`);
            } else if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}`);
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].questionDot)) {
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}.`);
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot)) {
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}.`);
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}[`);
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
                if (this.justSkippedSuper()) {
                    this.tokens.appendCode(".bind(this)");
                }
                this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${arrowStartSnippet}(`);
            } else {
                throw new Error("Unexpected subscript operator in optional chain.");
            }
            return true;
        }
        return false;
    }
    /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd token after it in
   * a nesting way, so we can track depth and walk to the end of the chain (the point where the
   * depth goes negative) and see if any other subscript token is after us in the chain.
   */ isLastSubscriptInChain() {
        let depth = 0;
        for(let i = this.tokens.currentIndex() + 1;; i++){
            if (i >= this.tokens.tokens.length) {
                throw new Error("Reached the end of the code while finding the end of the access chain.");
            }
            if (this.tokens.tokens[i].isOptionalChainStart) {
                depth++;
            } else if (this.tokens.tokens[i].isOptionalChainEnd) {
                depth--;
            }
            if (depth < 0) {
                return true;
            }
            // This subscript token is a later one in the same chain.
            if (depth === 0 && this.tokens.tokens[i].subscriptStartIndex != null) {
                return false;
            }
        }
    }
    /**
   * Determine if we are the open-paren in an expression like super.a()?.b.
   *
   * We can do this by walking backward to find the previous subscript. If that subscript was
   * preceded by a super, then we must be the subscript after it, so if this is a call expression,
   * we'll need to attach the right context.
   */ justSkippedSuper() {
        let depth = 0;
        let index = this.tokens.currentIndex() - 1;
        while(true){
            if (index < 0) {
                throw new Error("Reached the start of the code while finding the start of the access chain.");
            }
            if (this.tokens.tokens[index].isOptionalChainStart) {
                depth--;
            } else if (this.tokens.tokens[index].isOptionalChainEnd) {
                depth++;
            }
            if (depth < 0) {
                return false;
            }
            // This subscript token is a later one in the same chain.
            if (depth === 0 && this.tokens.tokens[index].subscriptStartIndex != null) {
                return this.tokens.tokens[index - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._super;
            }
            index--;
        }
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ReactDisplayNameTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactDisplayNameTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
;
class ReactDisplayNameTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(rootTransformer, tokens, importProcessor, options){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.importProcessor = importProcessor;
        this.options = options;
        ;
    }
    process() {
        const startIndex = this.tokens.currentIndex();
        if (this.tokens.identifierName() === "createReactClass") {
            const newName = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
            if (newName) {
                this.tokens.replaceToken(`(0, ${newName})`);
            } else {
                this.tokens.copyToken();
            }
            this.tryProcessCreateClassCall(startIndex);
            return true;
        }
        if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dot, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
            const newName = this.importProcessor ? this.importProcessor.getIdentifierReplacement("React") || "React" : "React";
            if (newName) {
                this.tokens.replaceToken(newName);
                this.tokens.copyToken();
                this.tokens.copyToken();
            } else {
                this.tokens.copyToken();
                this.tokens.copyToken();
                this.tokens.copyToken();
            }
            this.tryProcessCreateClassCall(startIndex);
            return true;
        }
        return false;
    }
    /**
   * This is called with the token position at the open-paren.
   */ tryProcessCreateClassCall(startIndex) {
        const displayName = this.findDisplayName(startIndex);
        if (!displayName) {
            return;
        }
        if (this.classNeedsDisplayName()) {
            this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL);
            this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
            this.tokens.appendCode(`displayName: '${displayName}',`);
            this.rootTransformer.processBalancedCode();
            this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
            this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
        }
    }
    findDisplayName(startIndex) {
        if (startIndex < 2) {
            return null;
        }
        if (this.tokens.matches2AtIndex(startIndex - 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
            // This is an assignment (or declaration) and the LHS is either an identifier or a member
            // expression ending in an identifier, so use that identifier name.
            return this.tokens.identifierNameAtIndex(startIndex - 2);
        }
        if (startIndex >= 2 && this.tokens.tokens[startIndex - 2].identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectKey) {
            // This is an object literal value.
            return this.tokens.identifierNameAtIndex(startIndex - 2);
        }
        if (this.tokens.matches2AtIndex(startIndex - 2, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._default)) {
            return this.getDisplayNameFromFilename();
        }
        return null;
    }
    getDisplayNameFromFilename() {
        const filePath = this.options.filePath || "unknown";
        const pathSegments = filePath.split("/");
        const filename = pathSegments[pathSegments.length - 1];
        const dotIndex = filename.lastIndexOf(".");
        const baseFilename = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
        if (baseFilename === "index" && pathSegments[pathSegments.length - 2]) {
            return pathSegments[pathSegments.length - 2];
        } else {
            return baseFilename;
        }
    }
    /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */ classNeedsDisplayName() {
        let index = this.tokens.currentIndex();
        if (!this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL)) {
            return false;
        }
        // The block starts on the {, and we expect any displayName key to be in
        // that context. We need to ignore other other contexts to avoid matching
        // nested displayName keys.
        const objectStartIndex = index + 1;
        const objectContextId = this.tokens.tokens[objectStartIndex].contextId;
        if (objectContextId == null) {
            throw new Error("Expected non-null context ID on object open-brace.");
        }
        for(; index < this.tokens.tokens.length; index++){
            const token = this.tokens.tokens[index];
            if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR && token.contextId === objectContextId) {
                index++;
                break;
            }
            if (this.tokens.identifierNameAtIndex(index) === "displayName" && this.tokens.tokens[index].identifierRole === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ObjectKey && token.contextId === objectContextId) {
                // We found a displayName key, so bail out.
                return false;
            }
        }
        if (index === this.tokens.tokens.length) {
            throw new Error("Unexpected end of input when processing React class.");
        }
        // If we got this far, we know we have createClass with an object with no
        // display name, so we want to proceed as long as that was the only argument.
        return this.tokens.matches1AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR) || this.tokens.matches2AtIndex(index, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ReactHotLoaderTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactHotLoaderTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
class ReactHotLoaderTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    __init() {
        this.extractedDefaultExportName = null;
    }
    constructor(tokens, filePath){
        super();
        this.tokens = tokens;
        this.filePath = filePath;
        ReactHotLoaderTransformer.prototype.__init.call(this);
        ;
    }
    setExtractedDefaultExportName(extractedDefaultExportName) {
        this.extractedDefaultExportName = extractedDefaultExportName;
    }
    getPrefixCode() {
        return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim();
    }
    getSuffixCode() {
        const topLevelNames = new Set();
        for (const token of this.tokens.tokens){
            if (!token.isType && (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLevelDeclaration"])(token) && token.identifierRole !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentifierRole"].ImportDeclaration) {
                topLevelNames.add(this.tokens.identifierNameForToken(token));
            }
        }
        const namesToRegister = Array.from(topLevelNames).map((name)=>({
                variableName: name,
                uniqueLocalName: name
            }));
        if (this.extractedDefaultExportName) {
            namesToRegister.push({
                variableName: this.extractedDefaultExportName,
                uniqueLocalName: "default"
            });
        }
        return `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${namesToRegister.map(({ variableName, uniqueLocalName })=>`  reactHotLoader.register(${variableName}, "${uniqueLocalName}", ${JSON.stringify(this.filePath || "")});`).join("\n")}
  leaveModule(module);
})();`;
    }
    process() {
        return false;
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/TypeScriptTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypeScriptTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isIdentifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/isIdentifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/Transformer.js [app-client] (ecmascript)");
;
;
;
class TypeScriptTransformer extends __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$Transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(rootTransformer, tokens, isImportsTransformEnabled){
        super();
        this.rootTransformer = rootTransformer;
        this.tokens = tokens;
        this.isImportsTransformEnabled = isImportsTransformEnabled;
        ;
    }
    process() {
        if (this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) {
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._public) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._protected) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._private) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._abstract) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._readonly) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._override) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].nonNullAssertion)) {
            this.tokens.removeInitialToken();
            return true;
        }
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum) || this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.processEnum();
            return true;
        }
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum) || this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._export, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)) {
            this.processEnum(true);
            return true;
        }
        return false;
    }
    processEnum(isExport = false) {
        // We might have "export const enum", so just remove all relevant tokens.
        this.tokens.removeInitialToken();
        while(this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._const) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._enum)){
            this.tokens.removeToken();
        }
        const enumName = this.tokens.identifierName();
        this.tokens.removeToken();
        if (isExport && !this.isImportsTransformEnabled) {
            this.tokens.appendCode("export ");
        }
        this.tokens.appendCode(`var ${enumName}; (function (${enumName})`);
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
        this.processEnumBody(enumName);
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
        if (isExport && this.isImportsTransformEnabled) {
            this.tokens.appendCode(`)(${enumName} || (exports.${enumName} = ${enumName} = {}));`);
        } else {
            this.tokens.appendCode(`)(${enumName} || (${enumName} = {}));`);
        }
    }
    /**
   * Transform an enum into equivalent JS. This has complexity in a few places:
   * - TS allows string enums, numeric enums, and a mix of the two styles within an enum.
   * - Enum keys are allowed to be referenced in later enum values.
   * - Enum keys are allowed to be strings.
   * - When enum values are omitted, they should follow an auto-increment behavior.
   */ processEnumBody(enumName) {
        // Code that can be used to reference the previous enum member, or null if this is the first
        // enum member.
        let previousValueCode = null;
        while(true){
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                break;
            }
            const { nameStringCode, variableName } = this.extractEnumKeyInfo(this.tokens.currentToken());
            this.tokens.removeInitialToken();
            if (this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma) || this.tokens.matches3(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                this.processStringLiteralEnumMember(enumName, nameStringCode, variableName);
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].eq)) {
                this.processExplicitValueEnumMember(enumName, nameStringCode, variableName);
            } else {
                this.processImplicitValueEnumMember(enumName, nameStringCode, variableName, previousValueCode);
            }
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].comma)) {
                this.tokens.removeToken();
            }
            if (variableName != null) {
                previousValueCode = variableName;
            } else {
                previousValueCode = `${enumName}[${nameStringCode}]`;
            }
        }
    }
    /**
   * Detect name information about this enum key, which will be used to determine which code to emit
   * and whether we should declare a variable as part of this declaration.
   *
   * Some cases to keep in mind:
   * - Enum keys can be implicitly referenced later, e.g. `X = 1, Y = X`. In Sucrase, we implement
   *   this by declaring a variable `X` so that later expressions can use it.
   * - In addition to the usual identifier key syntax, enum keys are allowed to be string literals,
   *   e.g. `"hello world" = 3,`. Template literal syntax is NOT allowed.
   * - Even if the enum key is defined as a string literal, it may still be referenced by identifier
   *   later, e.g. `"X" = 1, Y = X`. That means that we need to detect whether or not a string
   *   literal is identifier-like and emit a variable if so, even if the declaration did not use an
   *   identifier.
   * - Reserved keywords like `break` are valid enum keys, but are not valid to be referenced later
   *   and would be a syntax error if we emitted a variable, so we need to skip the variable
   *   declaration in those cases.
   *
   * The variableName return value captures these nuances: if non-null, we can and must emit a
   * variable declaration, and if null, we can't and shouldn't.
   */ extractEnumKeyInfo(nameToken) {
        if (nameToken.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name) {
            const name = this.tokens.identifierNameForToken(nameToken);
            return {
                nameStringCode: `"${name}"`,
                variableName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isIdentifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name) ? name : null
            };
        } else if (nameToken.type === __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string) {
            const name = this.tokens.stringValueForToken(nameToken);
            return {
                nameStringCode: this.tokens.code.slice(nameToken.start, nameToken.end),
                variableName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$isIdentifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name) ? name : null
            };
        } else {
            throw new Error("Expected name or string at beginning of enum element.");
        }
    }
    /**
   * Handle an enum member where the RHS is just a string literal (not omitted, not a number, and
   * not a complex expression). This is the typical form for TS string enums, and in this case, we
   * do *not* create a reverse mapping.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = "some value"
   * ->
   * const someKey = "some value"; MyEnum["someKey"] = someKey;
   *
   * Example 2:
   * "some key" = "some value"
   * ->
   * MyEnum["some key"] = "some value";
   */ processStringLiteralEnumMember(enumName, nameStringCode, variableName) {
        if (variableName != null) {
            this.tokens.appendCode(`const ${variableName}`);
            // =
            this.tokens.copyToken();
            // value string
            this.tokens.copyToken();
            this.tokens.appendCode(`; ${enumName}[${nameStringCode}] = ${variableName};`);
        } else {
            this.tokens.appendCode(`${enumName}[${nameStringCode}]`);
            // =
            this.tokens.copyToken();
            // value string
            this.tokens.copyToken();
            this.tokens.appendCode(";");
        }
    }
    /**
   * Handle an enum member initialized with an expression on the right-hand side (other than a
   * string literal). In these cases, we should transform the expression and emit code that sets up
   * a reverse mapping.
   *
   * The TypeScript implementation of this operation distinguishes between expressions that can be
   * "constant folded" at compile time (i.e. consist of number literals and simple math operations
   * on those numbers) and ones that are dynamic. For constant expressions, it emits the resolved
   * numeric value, and auto-incrementing is only allowed in that case. Evaluating expressions at
   * compile time would add significant complexity to Sucrase, so Sucrase instead leaves the
   * expression as-is, and will later emit something like `MyEnum["previousKey"] + 1` to implement
   * auto-incrementing.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = 1 + 1
   * ->
   * const someKey = 1 + 1; MyEnum[MyEnum["someKey"] = someKey] = "someKey";
   *
   * Example 2:
   * "some key" = 1 + 1
   * ->
   * MyEnum[MyEnum["some key"] = 1 + 1] = "some key";
   */ processExplicitValueEnumMember(enumName, nameStringCode, variableName) {
        const rhsEndIndex = this.tokens.currentToken().rhsEndIndex;
        if (rhsEndIndex == null) {
            throw new Error("Expected rhsEndIndex on enum assign.");
        }
        if (variableName != null) {
            this.tokens.appendCode(`const ${variableName}`);
            this.tokens.copyToken();
            while(this.tokens.currentIndex() < rhsEndIndex){
                this.rootTransformer.processToken();
            }
            this.tokens.appendCode(`; ${enumName}[${enumName}[${nameStringCode}] = ${variableName}] = ${nameStringCode};`);
        } else {
            this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}]`);
            this.tokens.copyToken();
            while(this.tokens.currentIndex() < rhsEndIndex){
                this.rootTransformer.processToken();
            }
            this.tokens.appendCode(`] = ${nameStringCode};`);
        }
    }
    /**
   * Handle an enum member with no right-hand side expression. In this case, the value is the
   * previous value plus 1, or 0 if there was no previous value. We should also always emit a
   * reverse mapping.
   *
   * Example 1:
   * someKey2
   * ->
   * const someKey2 = someKey1 + 1; MyEnum[MyEnum["someKey2"] = someKey2] = "someKey2";
   *
   * Example 2:
   * "some key 2"
   * ->
   * MyEnum[MyEnum["some key 2"] = someKey1 + 1] = "some key 2";
   */ processImplicitValueEnumMember(enumName, nameStringCode, variableName, previousValueCode) {
        let valueCode = previousValueCode != null ? `${previousValueCode} + 1` : "0";
        if (variableName != null) {
            this.tokens.appendCode(`const ${variableName} = ${valueCode}; `);
            valueCode = variableName;
        }
        this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}] = ${valueCode}] = ${nameStringCode};`);
    }
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/RootTransformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootTransformer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/keywords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/tokenizer/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getClassInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/util/getClassInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$CJSImportTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/CJSImportTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ESMImportTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ESMImportTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$FlowTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/FlowTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JestHoistTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/JestHoistTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JSXTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/JSXTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$NumericSeparatorTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/NumericSeparatorTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$OptionalCatchBindingTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/OptionalCatchBindingTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$OptionalChainingNullishTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/OptionalChainingNullishTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ReactDisplayNameTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ReactDisplayNameTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ReactHotLoaderTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/ReactHotLoaderTransformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$TypeScriptTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/transformers/TypeScriptTransformer.js [app-client] (ecmascript)");
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
class RootTransformer {
    __init() {
        this.transformers = [];
    }
    __init2() {
        this.generatedVariables = [];
    }
    constructor(sucraseContext, transforms, enableLegacyBabel5ModuleInterop, options){
        ;
        RootTransformer.prototype.__init.call(this);
        RootTransformer.prototype.__init2.call(this);
        this.nameManager = sucraseContext.nameManager;
        this.helperManager = sucraseContext.helperManager;
        const { tokenProcessor, importProcessor } = sucraseContext;
        this.tokens = tokenProcessor;
        this.isImportsTransformEnabled = transforms.includes("imports");
        this.isReactHotLoaderTransformEnabled = transforms.includes("react-hot-loader");
        this.disableESTransforms = Boolean(options.disableESTransforms);
        if (!options.disableESTransforms) {
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$OptionalChainingNullishTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tokenProcessor, this.nameManager));
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$NumericSeparatorTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tokenProcessor));
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$OptionalCatchBindingTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tokenProcessor, this.nameManager));
        }
        if (transforms.includes("jsx")) {
            if (options.jsxRuntime !== "preserve") {
                this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JSXTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, importProcessor, this.nameManager, options));
            }
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ReactDisplayNameTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, importProcessor, options));
        }
        let reactHotLoaderTransformer = null;
        if (transforms.includes("react-hot-loader")) {
            if (!options.filePath) {
                throw new Error("filePath is required when using the react-hot-loader transform.");
            }
            reactHotLoaderTransformer = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ReactHotLoaderTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tokenProcessor, options.filePath);
            this.transformers.push(reactHotLoaderTransformer);
        }
        // Note that we always want to enable the imports transformer, even when the import transform
        // itself isn't enabled, since we need to do type-only import pruning for both Flow and
        // TypeScript.
        if (transforms.includes("imports")) {
            if (importProcessor === null) {
                throw new Error("Expected non-null importProcessor with imports transform enabled.");
            }
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$CJSImportTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, importProcessor, this.nameManager, this.helperManager, reactHotLoaderTransformer, enableLegacyBabel5ModuleInterop, Boolean(options.enableLegacyTypeScriptModuleInterop), transforms.includes("typescript"), transforms.includes("flow"), Boolean(options.preserveDynamicImport), Boolean(options.keepUnusedImports)));
        } else {
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$ESMImportTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tokenProcessor, this.nameManager, this.helperManager, reactHotLoaderTransformer, transforms.includes("typescript"), transforms.includes("flow"), Boolean(options.keepUnusedImports), options));
        }
        if (transforms.includes("flow")) {
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$FlowTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, transforms.includes("imports")));
        }
        if (transforms.includes("typescript")) {
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$TypeScriptTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, transforms.includes("imports")));
        }
        if (transforms.includes("jest")) {
            this.transformers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$transformers$2f$JestHoistTransformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this, tokenProcessor, this.nameManager, importProcessor));
        }
    }
    transform() {
        this.tokens.reset();
        this.processBalancedCode();
        const shouldAddUseStrict = this.isImportsTransformEnabled;
        // "use strict" always needs to be first, so override the normal transformer order.
        let prefix = shouldAddUseStrict ? '"use strict";' : "";
        for (const transformer of this.transformers){
            prefix += transformer.getPrefixCode();
        }
        prefix += this.helperManager.emitHelpers();
        prefix += this.generatedVariables.map((v)=>` var ${v};`).join("");
        for (const transformer of this.transformers){
            prefix += transformer.getHoistedCode();
        }
        let suffix = "";
        for (const transformer of this.transformers){
            suffix += transformer.getSuffixCode();
        }
        const result = this.tokens.finish();
        let { code } = result;
        if (code.startsWith("#!")) {
            let newlineIndex = code.indexOf("\n");
            if (newlineIndex === -1) {
                newlineIndex = code.length;
                code += "\n";
            }
            return {
                code: code.slice(0, newlineIndex + 1) + prefix + code.slice(newlineIndex + 1) + suffix,
                // The hashbang line has no tokens, so shifting the tokens to account
                // for prefix can happen normally.
                mappings: this.shiftMappings(result.mappings, prefix.length)
            };
        } else {
            return {
                code: prefix + code + suffix,
                mappings: this.shiftMappings(result.mappings, prefix.length)
            };
        }
    }
    processBalancedCode() {
        let braceDepth = 0;
        let parenDepth = 0;
        while(!this.tokens.isAtEnd()){
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].dollarBraceL)) {
                braceDepth++;
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR)) {
                if (braceDepth === 0) {
                    return;
                }
                braceDepth--;
            }
            if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
                parenDepth++;
            } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR)) {
                if (parenDepth === 0) {
                    return;
                }
                parenDepth--;
            }
            this.processToken();
        }
    }
    processToken() {
        if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class)) {
            this.processClass();
            return;
        }
        for (const transformer of this.transformers){
            const wasProcessed = transformer.process();
            if (wasProcessed) {
                return;
            }
        }
        this.tokens.copyToken();
    }
    /**
   * Skip past a class with a name and return that name.
   */ processNamedClass() {
        if (!this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].name)) {
            throw new Error("Expected identifier for exported class name.");
        }
        const name = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        this.processClass();
        return name;
    }
    processClass() {
        const classInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$util$2f$getClassInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, this.tokens, this.nameManager, this.disableESTransforms);
        // Both static and instance initializers need a class name to use to invoke the initializer, so
        // assign to one if necessary.
        const needsCommaExpression = (classInfo.headerInfo.isExpression || !classInfo.headerInfo.className) && classInfo.staticInitializerNames.length + classInfo.instanceInitializerNames.length > 0;
        let className = classInfo.headerInfo.className;
        if (needsCommaExpression) {
            className = this.nameManager.claimFreeName("_class");
            this.generatedVariables.push(className);
            this.tokens.appendCode(` (${className} =`);
        }
        const classToken = this.tokens.currentToken();
        const contextId = classToken.contextId;
        if (contextId == null) {
            throw new Error("Expected class to have a context ID.");
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._class);
        while(!this.tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL, contextId)){
            this.processToken();
        }
        this.processClassBody(classInfo, className);
        const staticInitializerStatements = classInfo.staticInitializerNames.map((name)=>`${className}.${name}()`);
        if (needsCommaExpression) {
            this.tokens.appendCode(`, ${staticInitializerStatements.map((s)=>`${s}, `).join("")}${className})`);
        } else if (classInfo.staticInitializerNames.length > 0) {
            this.tokens.appendCode(` ${staticInitializerStatements.map((s)=>`${s};`).join(" ")}`);
        }
    }
    /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */ processClassBody(classInfo, className) {
        const { headerInfo, constructorInsertPos, constructorInitializerStatements, fields, instanceInitializerNames, rangesToRemove } = classInfo;
        let fieldIndex = 0;
        let rangeToRemoveIndex = 0;
        const classContextId = this.tokens.currentToken().contextId;
        if (classContextId == null) {
            throw new Error("Expected non-null context ID on class.");
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceL);
        if (this.isReactHotLoaderTransformEnabled) {
            this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
        }
        const needsConstructorInit = constructorInitializerStatements.length + instanceInitializerNames.length > 0;
        if (constructorInsertPos === null && needsConstructorInit) {
            const constructorInitializersCode = this.makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className);
            if (headerInfo.hasSuperclass) {
                const argsName = this.nameManager.claimFreeName("args");
                this.tokens.appendCode(`constructor(...${argsName}) { super(...${argsName}); ${constructorInitializersCode}; }`);
            } else {
                this.tokens.appendCode(`constructor() { ${constructorInitializersCode}; }`);
            }
        }
        while(!this.tokens.matchesContextIdAndLabel(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR, classContextId)){
            if (fieldIndex < fields.length && this.tokens.currentIndex() === fields[fieldIndex].start) {
                let needsCloseBrace = false;
                if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].bracketL)) {
                    this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this`);
                } else if (this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].string) || this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].num)) {
                    this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this[`);
                    needsCloseBrace = true;
                } else {
                    this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this.`);
                }
                while(this.tokens.currentIndex() < fields[fieldIndex].end){
                    if (needsCloseBrace && this.tokens.currentIndex() === fields[fieldIndex].equalsIndex) {
                        this.tokens.appendCode("]");
                    }
                    this.processToken();
                }
                this.tokens.appendCode("}");
                fieldIndex++;
            } else if (rangeToRemoveIndex < rangesToRemove.length && this.tokens.currentIndex() >= rangesToRemove[rangeToRemoveIndex].start) {
                if (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
                    this.tokens.removeInitialToken();
                }
                while(this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end){
                    this.tokens.removeToken();
                }
                rangeToRemoveIndex++;
            } else if (this.tokens.currentIndex() === constructorInsertPos) {
                this.tokens.copyToken();
                if (needsConstructorInit) {
                    this.tokens.appendCode(`;${this.makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className)};`);
                }
                this.processToken();
            } else {
                this.processToken();
            }
        }
        this.tokens.copyExpectedToken(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].braceR);
    }
    makeConstructorInitCode(constructorInitializerStatements, instanceInitializerNames, className) {
        return [
            ...constructorInitializerStatements,
            ...instanceInitializerNames.map((name)=>`${className}.prototype.${name}.call(this)`)
        ].join(";");
    }
    /**
   * Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with
   * arrow function return types since they can confuse the parser. In that case, we want to move
   * the close-paren to the same line as the arrow.
   *
   * See https://github.com/alangpierce/sucrase/issues/391 for more details.
   */ processPossibleArrowParamEnd() {
        if (this.tokens.matches2(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenR, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
            let nextNonTypeIndex = this.tokens.currentIndex() + 1;
            // Look ahead to see if this is an arrow function or something else.
            while(this.tokens.tokens[nextNonTypeIndex].isType){
                nextNonTypeIndex++;
            }
            if (this.tokens.matches1AtIndex(nextNonTypeIndex, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].arrow)) {
                this.tokens.removeInitialToken();
                while(this.tokens.currentIndex() < nextNonTypeIndex){
                    this.tokens.removeToken();
                }
                this.tokens.replaceTokenTrimmingLeftWhitespace(") =>");
                return true;
            }
        }
        return false;
    }
    /**
   * An async arrow function might be of the form:
   *
   * async <
   *   T
   * >() => {}
   *
   * in which case, removing the type parameters will cause a syntax error. Detect this case and
   * move the open-paren earlier.
   */ processPossibleAsyncArrowWithTypeParams() {
        if (!this.tokens.matchesContextual(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$keywords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextualKeyword"]._async) && !this.tokens.matches1(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"]._async)) {
            return false;
        }
        const nextToken = this.tokens.tokenAtRelativeIndex(1);
        if (nextToken.type !== __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].lessThan || !nextToken.isType) {
            return false;
        }
        let nextNonTypeIndex = this.tokens.currentIndex() + 1;
        // Look ahead to see if this is an arrow function or something else.
        while(this.tokens.tokens[nextNonTypeIndex].isType){
            nextNonTypeIndex++;
        }
        if (this.tokens.matches1AtIndex(nextNonTypeIndex, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$tokenizer$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenType"].parenL)) {
            this.tokens.replaceToken("async (");
            this.tokens.removeInitialToken();
            while(this.tokens.currentIndex() < nextNonTypeIndex){
                this.tokens.removeToken();
            }
            this.tokens.removeToken();
            // We ate a ( token, so we need to process the tokens in between and then the ) token so that
            // we remain balanced.
            this.processBalancedCode();
            this.processToken();
            return true;
        }
        return false;
    }
    processPossibleTypeRange() {
        if (this.tokens.currentToken().isType) {
            this.tokens.removeInitialToken();
            while(this.tokens.currentToken().isType){
                this.tokens.removeToken();
            }
            return true;
        }
        return false;
    }
    shiftMappings(mappings, prefixLength) {
        for(let i = 0; i < mappings.length; i++){
            const mapping = mappings[i];
            if (mapping !== undefined) {
                mappings[i] = mapping + prefixLength;
            }
        }
        return mappings;
    }
}
}),
]);

//# sourceMappingURL=4c95d_sucrase_dist_esm_transformers_6806a5f8._.js.map