import { readSession } from "../services/services.auth.js";
export const authenticateUser = (req, res, next) => {
    const sessionId = req.cookies.uid;
    if (!sessionId) return res.redirect("/login");
    const user = readSession(sessionId);
    if (!user) return res.redirect("/login");
    req.user = user;
    next();
}
export const checkLogin = (req, res, next) => {
    const sessionId = req.cookies.uid;
    const user = readSession(sessionId) ?? null;
    req.user = user;
    next();
}