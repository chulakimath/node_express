import { URL } from "../models/models.urls.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
    const body = req.body;
    if (!body || !body.url) {
        return res.status(400).json({ error: "bad request url is required" });
    }
    const shortId = nanoid(6);
    const result = await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy:req.user._id,
    })
    // return res.status(201).json({ id: shortId });
    return res.render("home", {
        id: shortId
    })
}

export const redirect_url = async (req, res) => {
    const url = req.params.shortId;
    const result = await URL.findOneAndUpdate(
        {
            shortId: url
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        }
    )
    if (result && result.redirectUrl) {
        return res.redirect(result.redirectUrl);
    }
    else {
        return res.status(404).json({ error: "No Such Url Found" })
    }
}

export const get_analytics = async (req, res) => {
    const shortId = req.params.shortId;
    if (shortId) {
        const analytis = await URL.findOne({ shortId: shortId });
        const historyArray = analytis.visitHistory;
        return res.status(200).json({ clicks: historyArray.length, data: historyArray });
    }
    return res.status(401).json({ error: "Please Provid url" });
}