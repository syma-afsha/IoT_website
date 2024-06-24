"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var isIphone = typeof window !== "undefined"
    ? /iPhone/.test((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) !== null && _b !== void 0 ? _b : "")
    : false;
var isSafari = typeof window !== "undefined"
    ? /Safari/.test((_d = (_c = window.navigator) === null || _c === void 0 ? void 0 : _c.userAgent) !== null && _d !== void 0 ? _d : "")
    : false;
var environment = new Proxy({ width: 0, height: 0 }, {
    get: function (target, key) {
        if (typeof window === "undefined")
            return undefined;
        if (key === "height") {
            if (isIphone && isSafari)
                return window.screen.height - 80;
            return window.innerHeight;
        }
        if (key === "width") {
            if (isIphone && isSafari)
                return window.screen.width;
            return window.innerWidth;
        }
        return undefined;
    },
});
exports.default = environment;
