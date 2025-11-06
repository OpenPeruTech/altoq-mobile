(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "charCodes",
    ()=>charCodes,
    "isDigit",
    ()=>isDigit
]);
var charCodes;
(function(charCodes) {
    const backSpace = 8;
    charCodes[charCodes["backSpace"] = backSpace] = "backSpace";
    const lineFeed = 10;
    charCodes[charCodes["lineFeed"] = lineFeed] = "lineFeed"; //  '\n'
    const tab = 9;
    charCodes[charCodes["tab"] = tab] = "tab"; //  '\t'
    const carriageReturn = 13;
    charCodes[charCodes["carriageReturn"] = carriageReturn] = "carriageReturn"; //  '\r'
    const shiftOut = 14;
    charCodes[charCodes["shiftOut"] = shiftOut] = "shiftOut";
    const space = 32;
    charCodes[charCodes["space"] = space] = "space";
    const exclamationMark = 33;
    charCodes[charCodes["exclamationMark"] = exclamationMark] = "exclamationMark"; //  '!'
    const quotationMark = 34;
    charCodes[charCodes["quotationMark"] = quotationMark] = "quotationMark"; //  '"'
    const numberSign = 35;
    charCodes[charCodes["numberSign"] = numberSign] = "numberSign"; //  '#'
    const dollarSign = 36;
    charCodes[charCodes["dollarSign"] = dollarSign] = "dollarSign"; //  '$'
    const percentSign = 37;
    charCodes[charCodes["percentSign"] = percentSign] = "percentSign"; //  '%'
    const ampersand = 38;
    charCodes[charCodes["ampersand"] = ampersand] = "ampersand"; //  '&'
    const apostrophe = 39;
    charCodes[charCodes["apostrophe"] = apostrophe] = "apostrophe"; //  '''
    const leftParenthesis = 40;
    charCodes[charCodes["leftParenthesis"] = leftParenthesis] = "leftParenthesis"; //  '('
    const rightParenthesis = 41;
    charCodes[charCodes["rightParenthesis"] = rightParenthesis] = "rightParenthesis"; //  ')'
    const asterisk = 42;
    charCodes[charCodes["asterisk"] = asterisk] = "asterisk"; //  '*'
    const plusSign = 43;
    charCodes[charCodes["plusSign"] = plusSign] = "plusSign"; //  '+'
    const comma = 44;
    charCodes[charCodes["comma"] = comma] = "comma"; //  ','
    const dash = 45;
    charCodes[charCodes["dash"] = dash] = "dash"; //  '-'
    const dot = 46;
    charCodes[charCodes["dot"] = dot] = "dot"; //  '.'
    const slash = 47;
    charCodes[charCodes["slash"] = slash] = "slash"; //  '/'
    const digit0 = 48;
    charCodes[charCodes["digit0"] = digit0] = "digit0"; //  '0'
    const digit1 = 49;
    charCodes[charCodes["digit1"] = digit1] = "digit1"; //  '1'
    const digit2 = 50;
    charCodes[charCodes["digit2"] = digit2] = "digit2"; //  '2'
    const digit3 = 51;
    charCodes[charCodes["digit3"] = digit3] = "digit3"; //  '3'
    const digit4 = 52;
    charCodes[charCodes["digit4"] = digit4] = "digit4"; //  '4'
    const digit5 = 53;
    charCodes[charCodes["digit5"] = digit5] = "digit5"; //  '5'
    const digit6 = 54;
    charCodes[charCodes["digit6"] = digit6] = "digit6"; //  '6'
    const digit7 = 55;
    charCodes[charCodes["digit7"] = digit7] = "digit7"; //  '7'
    const digit8 = 56;
    charCodes[charCodes["digit8"] = digit8] = "digit8"; //  '8'
    const digit9 = 57;
    charCodes[charCodes["digit9"] = digit9] = "digit9"; //  '9'
    const colon = 58;
    charCodes[charCodes["colon"] = colon] = "colon"; //  ':'
    const semicolon = 59;
    charCodes[charCodes["semicolon"] = semicolon] = "semicolon"; //  ';'
    const lessThan = 60;
    charCodes[charCodes["lessThan"] = lessThan] = "lessThan"; //  '<'
    const equalsTo = 61;
    charCodes[charCodes["equalsTo"] = equalsTo] = "equalsTo"; //  '='
    const greaterThan = 62;
    charCodes[charCodes["greaterThan"] = greaterThan] = "greaterThan"; //  '>'
    const questionMark = 63;
    charCodes[charCodes["questionMark"] = questionMark] = "questionMark"; //  '?'
    const atSign = 64;
    charCodes[charCodes["atSign"] = atSign] = "atSign"; //  '@'
    const uppercaseA = 65;
    charCodes[charCodes["uppercaseA"] = uppercaseA] = "uppercaseA"; //  'A'
    const uppercaseB = 66;
    charCodes[charCodes["uppercaseB"] = uppercaseB] = "uppercaseB"; //  'B'
    const uppercaseC = 67;
    charCodes[charCodes["uppercaseC"] = uppercaseC] = "uppercaseC"; //  'C'
    const uppercaseD = 68;
    charCodes[charCodes["uppercaseD"] = uppercaseD] = "uppercaseD"; //  'D'
    const uppercaseE = 69;
    charCodes[charCodes["uppercaseE"] = uppercaseE] = "uppercaseE"; //  'E'
    const uppercaseF = 70;
    charCodes[charCodes["uppercaseF"] = uppercaseF] = "uppercaseF"; //  'F'
    const uppercaseG = 71;
    charCodes[charCodes["uppercaseG"] = uppercaseG] = "uppercaseG"; //  'G'
    const uppercaseH = 72;
    charCodes[charCodes["uppercaseH"] = uppercaseH] = "uppercaseH"; //  'H'
    const uppercaseI = 73;
    charCodes[charCodes["uppercaseI"] = uppercaseI] = "uppercaseI"; //  'I'
    const uppercaseJ = 74;
    charCodes[charCodes["uppercaseJ"] = uppercaseJ] = "uppercaseJ"; //  'J'
    const uppercaseK = 75;
    charCodes[charCodes["uppercaseK"] = uppercaseK] = "uppercaseK"; //  'K'
    const uppercaseL = 76;
    charCodes[charCodes["uppercaseL"] = uppercaseL] = "uppercaseL"; //  'L'
    const uppercaseM = 77;
    charCodes[charCodes["uppercaseM"] = uppercaseM] = "uppercaseM"; //  'M'
    const uppercaseN = 78;
    charCodes[charCodes["uppercaseN"] = uppercaseN] = "uppercaseN"; //  'N'
    const uppercaseO = 79;
    charCodes[charCodes["uppercaseO"] = uppercaseO] = "uppercaseO"; //  'O'
    const uppercaseP = 80;
    charCodes[charCodes["uppercaseP"] = uppercaseP] = "uppercaseP"; //  'P'
    const uppercaseQ = 81;
    charCodes[charCodes["uppercaseQ"] = uppercaseQ] = "uppercaseQ"; //  'Q'
    const uppercaseR = 82;
    charCodes[charCodes["uppercaseR"] = uppercaseR] = "uppercaseR"; //  'R'
    const uppercaseS = 83;
    charCodes[charCodes["uppercaseS"] = uppercaseS] = "uppercaseS"; //  'S'
    const uppercaseT = 84;
    charCodes[charCodes["uppercaseT"] = uppercaseT] = "uppercaseT"; //  'T'
    const uppercaseU = 85;
    charCodes[charCodes["uppercaseU"] = uppercaseU] = "uppercaseU"; //  'U'
    const uppercaseV = 86;
    charCodes[charCodes["uppercaseV"] = uppercaseV] = "uppercaseV"; //  'V'
    const uppercaseW = 87;
    charCodes[charCodes["uppercaseW"] = uppercaseW] = "uppercaseW"; //  'W'
    const uppercaseX = 88;
    charCodes[charCodes["uppercaseX"] = uppercaseX] = "uppercaseX"; //  'X'
    const uppercaseY = 89;
    charCodes[charCodes["uppercaseY"] = uppercaseY] = "uppercaseY"; //  'Y'
    const uppercaseZ = 90;
    charCodes[charCodes["uppercaseZ"] = uppercaseZ] = "uppercaseZ"; //  'Z'
    const leftSquareBracket = 91;
    charCodes[charCodes["leftSquareBracket"] = leftSquareBracket] = "leftSquareBracket"; //  '['
    const backslash = 92;
    charCodes[charCodes["backslash"] = backslash] = "backslash"; //  '\    '
    const rightSquareBracket = 93;
    charCodes[charCodes["rightSquareBracket"] = rightSquareBracket] = "rightSquareBracket"; //  ']'
    const caret = 94;
    charCodes[charCodes["caret"] = caret] = "caret"; //  '^'
    const underscore = 95;
    charCodes[charCodes["underscore"] = underscore] = "underscore"; //  '_'
    const graveAccent = 96;
    charCodes[charCodes["graveAccent"] = graveAccent] = "graveAccent"; //  '`'
    const lowercaseA = 97;
    charCodes[charCodes["lowercaseA"] = lowercaseA] = "lowercaseA"; //  'a'
    const lowercaseB = 98;
    charCodes[charCodes["lowercaseB"] = lowercaseB] = "lowercaseB"; //  'b'
    const lowercaseC = 99;
    charCodes[charCodes["lowercaseC"] = lowercaseC] = "lowercaseC"; //  'c'
    const lowercaseD = 100;
    charCodes[charCodes["lowercaseD"] = lowercaseD] = "lowercaseD"; //  'd'
    const lowercaseE = 101;
    charCodes[charCodes["lowercaseE"] = lowercaseE] = "lowercaseE"; //  'e'
    const lowercaseF = 102;
    charCodes[charCodes["lowercaseF"] = lowercaseF] = "lowercaseF"; //  'f'
    const lowercaseG = 103;
    charCodes[charCodes["lowercaseG"] = lowercaseG] = "lowercaseG"; //  'g'
    const lowercaseH = 104;
    charCodes[charCodes["lowercaseH"] = lowercaseH] = "lowercaseH"; //  'h'
    const lowercaseI = 105;
    charCodes[charCodes["lowercaseI"] = lowercaseI] = "lowercaseI"; //  'i'
    const lowercaseJ = 106;
    charCodes[charCodes["lowercaseJ"] = lowercaseJ] = "lowercaseJ"; //  'j'
    const lowercaseK = 107;
    charCodes[charCodes["lowercaseK"] = lowercaseK] = "lowercaseK"; //  'k'
    const lowercaseL = 108;
    charCodes[charCodes["lowercaseL"] = lowercaseL] = "lowercaseL"; //  'l'
    const lowercaseM = 109;
    charCodes[charCodes["lowercaseM"] = lowercaseM] = "lowercaseM"; //  'm'
    const lowercaseN = 110;
    charCodes[charCodes["lowercaseN"] = lowercaseN] = "lowercaseN"; //  'n'
    const lowercaseO = 111;
    charCodes[charCodes["lowercaseO"] = lowercaseO] = "lowercaseO"; //  'o'
    const lowercaseP = 112;
    charCodes[charCodes["lowercaseP"] = lowercaseP] = "lowercaseP"; //  'p'
    const lowercaseQ = 113;
    charCodes[charCodes["lowercaseQ"] = lowercaseQ] = "lowercaseQ"; //  'q'
    const lowercaseR = 114;
    charCodes[charCodes["lowercaseR"] = lowercaseR] = "lowercaseR"; //  'r'
    const lowercaseS = 115;
    charCodes[charCodes["lowercaseS"] = lowercaseS] = "lowercaseS"; //  's'
    const lowercaseT = 116;
    charCodes[charCodes["lowercaseT"] = lowercaseT] = "lowercaseT"; //  't'
    const lowercaseU = 117;
    charCodes[charCodes["lowercaseU"] = lowercaseU] = "lowercaseU"; //  'u'
    const lowercaseV = 118;
    charCodes[charCodes["lowercaseV"] = lowercaseV] = "lowercaseV"; //  'v'
    const lowercaseW = 119;
    charCodes[charCodes["lowercaseW"] = lowercaseW] = "lowercaseW"; //  'w'
    const lowercaseX = 120;
    charCodes[charCodes["lowercaseX"] = lowercaseX] = "lowercaseX"; //  'x'
    const lowercaseY = 121;
    charCodes[charCodes["lowercaseY"] = lowercaseY] = "lowercaseY"; //  'y'
    const lowercaseZ = 122;
    charCodes[charCodes["lowercaseZ"] = lowercaseZ] = "lowercaseZ"; //  'z'
    const leftCurlyBrace = 123;
    charCodes[charCodes["leftCurlyBrace"] = leftCurlyBrace] = "leftCurlyBrace"; //  '{'
    const verticalBar = 124;
    charCodes[charCodes["verticalBar"] = verticalBar] = "verticalBar"; //  '|'
    const rightCurlyBrace = 125;
    charCodes[charCodes["rightCurlyBrace"] = rightCurlyBrace] = "rightCurlyBrace"; //  '}'
    const tilde = 126;
    charCodes[charCodes["tilde"] = tilde] = "tilde"; //  '~'
    const nonBreakingSpace = 160;
    charCodes[charCodes["nonBreakingSpace"] = nonBreakingSpace] = "nonBreakingSpace";
    // eslint-disable-next-line no-irregular-whitespace
    const oghamSpaceMark = 5760;
    charCodes[charCodes["oghamSpaceMark"] = oghamSpaceMark] = "oghamSpaceMark"; // ' '
    const lineSeparator = 8232;
    charCodes[charCodes["lineSeparator"] = lineSeparator] = "lineSeparator";
    const paragraphSeparator = 8233;
    charCodes[charCodes["paragraphSeparator"] = paragraphSeparator] = "paragraphSeparator";
})(charCodes || (charCodes = {}));
function isDigit(code) {
    return code >= charCodes.digit0 && code <= charCodes.digit9 || code >= charCodes.lowercaseA && code <= charCodes.lowercaseF || code >= charCodes.uppercaseA && code <= charCodes.uppercaseF;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/whitespace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_WHITESPACE",
    ()=>IS_WHITESPACE,
    "WHITESPACE_CHARS",
    ()=>WHITESPACE_CHARS,
    "skipWhiteSpace",
    ()=>skipWhiteSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
;
const WHITESPACE_CHARS = [
    0x0009,
    0x000b,
    0x000c,
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].space,
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].nonBreakingSpace,
    __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].oghamSpaceMark,
    0x2000,
    0x2001,
    0x2002,
    0x2003,
    0x2004,
    0x2005,
    0x2006,
    0x2007,
    0x2008,
    0x2009,
    0x200a,
    0x202f,
    0x205f,
    0x3000,
    0xfeff
];
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
const IS_WHITESPACE = new Uint8Array(65536);
for (const char of WHITESPACE_CHARS){
    IS_WHITESPACE[char] = 1;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/identifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_IDENTIFIER_CHAR",
    ()=>IS_IDENTIFIER_CHAR,
    "IS_IDENTIFIER_START",
    ()=>IS_IDENTIFIER_START
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/charcodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/util/whitespace.js [app-client] (ecmascript)");
;
;
function computeIsIdentifierChar(code) {
    if (code < 48) return code === 36;
    if (code < 58) return true;
    if (code < 65) return false;
    if (code < 91) return true;
    if (code < 97) return code === 95;
    if (code < 123) return true;
    if (code < 128) return false;
    throw new Error("Should not be called with non-ASCII char code.");
}
const IS_IDENTIFIER_CHAR = new Uint8Array(65536);
for(let i = 0; i < 128; i++){
    IS_IDENTIFIER_CHAR[i] = computeIsIdentifierChar(i) ? 1 : 0;
}
for(let i = 128; i < 65536; i++){
    IS_IDENTIFIER_CHAR[i] = 1;
}
// Aside from whitespace and newlines, all characters outside the ASCII space are either
// identifier characters or invalid. Since we're not performing code validation, we can just
// treat all invalid characters as identifier characters.
for (const whitespaceChar of __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$whitespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHITESPACE_CHARS"]){
    IS_IDENTIFIER_CHAR[whitespaceChar] = 0;
}
IS_IDENTIFIER_CHAR[0x2028] = 0;
IS_IDENTIFIER_CHAR[0x2029] = 0;
const IS_IDENTIFIER_START = IS_IDENTIFIER_CHAR.slice();
for(let numChar = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit0; numChar <= __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$util$2f$charcodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charCodes"].digit9; numChar++){
    IS_IDENTIFIER_START[numChar] = 0;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>File,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/sucrase@3.35.0/node_modules/sucrase/dist/esm/parser/traverser/index.js [app-client] (ecmascript)");
;
;
class File {
    constructor(tokens, scopes){
        this.tokens = tokens;
        this.scopes = scopes;
    }
}
function parse(input, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled) {
    if (isFlowEnabled && isTypeScriptEnabled) {
        throw new Error("Cannot combine flow and typescript plugins.");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initParser"])(input, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFile"])();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["augmentError"])(__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$sucrase$40$3$2e$35$2e$0$2f$node_modules$2f$sucrase$2f$dist$2f$esm$2f$parser$2f$traverser$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"].error);
    }
    return result;
}
}),
]);

//# sourceMappingURL=4c95d_sucrase_dist_esm_parser_3122b85e._.js.map