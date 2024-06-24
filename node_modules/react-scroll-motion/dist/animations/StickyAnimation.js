"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyOut = exports.StickyIn = exports.Sticky = void 0;
var utils_1 = require("../utils");
var Sticky = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.Sticky = Sticky;
var StickyIn = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
        out: {
            style: {
                left: function () { return "".concat((left * utils_1.environment.width) / 100, "px"); },
                top: function () { return "".concat((top * utils_1.environment.height) / 100, "px"); },
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
    });
};
exports.StickyIn = StickyIn;
var StickyOut = function (left, top) {
    if (left === void 0) { left = 50; }
    if (top === void 0) { top = 50; }
    return ({
        in: {
            style: {
                left: "".concat((left * utils_1.environment.width) / 100, "px"),
                top: "".concat((top * utils_1.environment.height) / 100, "px"),
                transform: "translate(-50%, -50%)",
                position: "absolute",
            },
        },
        out: {
            style: {
                left: "".concat((left * utils_1.environment.width) / 100, "px"),
                top: "".concat((top * utils_1.environment.height) / 100, "px"),
                transform: "translate(-50%, -50%)",
                position: "fixed",
            },
        },
    });
};
exports.StickyOut = StickyOut;
