"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveOut = exports.MoveIn = exports.Move = void 0;
var utils_1 = require("../utils");
var Move = function (dx, dy, outDx, outDy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = 100; }
    if (outDx === void 0) { outDx = null; }
    if (outDy === void 0) { outDy = -100; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, utils_1.SimpleInterpolation)(dy, 0, value), "px)");
                },
            },
        },
        out: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(0, outDx || dx, value), "px, ").concat((0, utils_1.SimpleInterpolation)(0, outDy || dy, value), "px)");
                },
            },
        },
    });
};
exports.Move = Move;
var MoveIn = function (dx, dy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = 100; }
    return ({
        in: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(dx, 0, value), "px, ").concat((0, utils_1.SimpleInterpolation)(dy, 0, value), "px)");
                },
            },
        },
    });
};
exports.MoveIn = MoveIn;
var MoveOut = function (dx, dy) {
    if (dx === void 0) { dx = 0; }
    if (dy === void 0) { dy = -100; }
    return ({
        out: {
            style: {
                transform: function (value) {
                    return "translate(".concat((0, utils_1.SimpleInterpolation)(0, dx, value), "px, ").concat((0, utils_1.SimpleInterpolation)(0, dy, value), "px)");
                },
            },
        },
    });
};
exports.MoveOut = MoveOut;
