import { readSession ,readToken} from "../services/services.auth.js";
export const authenticateUser = async(req, res, next) => {
    const sessionId = req.cookies.uid;
    if (!sessionId) return res.redirect("/login");
    // const user = readSession(sessionId);
      const user = await readToken(sessionId) ?? null;
    if (!user) return res.redirect("/login");
    req.user = user;
    next();
}

export const checkLogin = async (req, res, next) => {
    const sessionId = req.cookies.uid;
    // console.log("Login Session Id", sessionId)
    // const user = readSession(sessionId) ?? null;
    const user = await readToken(sessionId) ?? null;
    req.user = user;
    next();
}