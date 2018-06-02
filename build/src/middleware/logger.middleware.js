"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LoggerMiddleware(req, res, next) {
    console.log(`Request...`);
    next();
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map