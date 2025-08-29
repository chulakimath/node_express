import { URL } from '../models/models.urls.js'
export const homepge = async (req, res) => {
    if(!req.user) return res.redirect("/login");
    const urls = await URL.find({createdBy:req.user._id});
    res.render("home", { urls: urls })
}

export const signup = async (req, res) => {
    res.render("signup");
}
export const siginin = async (req, res) => {
    res.render("login");
}