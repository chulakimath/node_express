import exprss from "express";
import {createShortUrl,redirect_url,get_analytics} from '../controllers/controller.url.js'
const urlRoute=exprss.Router();

urlRoute.post("/",createShortUrl);
urlRoute.get("/:shortId",redirect_url)
urlRoute.get("/analytics/:shortId",get_analytics)

export default urlRoute;