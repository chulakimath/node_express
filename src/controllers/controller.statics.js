import { URL } from '../models/models.urls.js'
export const homepge = async (req, res) => {
    const urls = await URL.find({});
    res.render("home", { urls: urls })
}

export const signup = async (req, res) => {
    res.render("signup");
}