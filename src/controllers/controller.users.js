
import { USER } from "../models/modles.users.js";
import { makeSession ,createToken} from "../services/services.auth.js";
import { v4 as uuidv4 } from 'uuid';
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await USER.create({
        name: name,
        email: email,
        password: password
    })
    return res.redirect('/');
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await USER.findOne({
        email: email,
        password: password
    })
    if (!user) {
        return res.render('login', {
            error: "Invalid User"
        })
    }
    // const sessionId = uuidv4();
    // const session = makeSession(sessionId, user)
    try{
        const session= await createToken(user)
        res.cookie('uid',session);
        return res.redirect('/');
    }catch(error){
         return res.redirect('/login');
    }
}