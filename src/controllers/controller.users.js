import { USER } from "../models/modles.users.js";
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await USER.create({
        name: name,
        email: email,
        password: password
    })
    return res.render("home")
}