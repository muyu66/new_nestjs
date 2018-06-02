"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_scheme_1 = require("./base.scheme");
const mongoose = require("mongoose");
const common_1 = require("../../common");
exports.TestScheme = new mongoose.Schema(common_1._.assign(base_scheme_1.BaseScheme, {
    name: String,
}));
//# sourceMappingURL=test.scheme.js.map