
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secratekey = process.env.SIGNATURE;
const session = new Map();

export const makeSession = (id, user) => {
    session.set(id, user)
    return id;
}
export const readSession = (id) => {
    return session.get(id);
}
// statless
export const createToken = async (user) => {
    try {
        const palyload = {
            _id: user._id,
            email: user.email,
            name: user.name
        }
        return jwt.sign(palyload, secratekey, { expiresIn: '3h' });
    } catch (error) {
        console.log(error);
        return null
    }
}
export const readToken = async (token) => {
    try {
        if (!token) {
            return null
        }
        return jwt.verify(token, secratekey);
    } catch (error) {
        return null;
    }
}