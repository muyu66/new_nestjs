export function LoggerMiddleware(req, res, next) {
    console.log(`Request...`);
    next();
}