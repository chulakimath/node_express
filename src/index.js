import fs from "fs";
import exprss, { urlencoded } from "express";
import dotenv from "dotenv";
import { db_connect } from "./config/db.connection.js";
import { URL } from "./models/models.urls.js";
import path from "path";
import urlRoute from "./routes/route.url.js";
import staticRouter from "./routes/router.statics.js";
import usersRoute from "./routes/routes.users.js";
import { authenticateUser ,checkLogin} from "./middlewares/authenticate.js";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT;

const app = exprss();
app.set("view engine", "ejs")
app.set("views", path.resolve("src/views"));
app.use(exprss.json());
app.use(exprss.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/user",usersRoute);
app.use("/api/url",authenticateUser, urlRoute);
app.use("/", checkLogin,staticRouter);
db_connect("urls").then(() => {
    console.log("DB connected");
}).catch((e) => {
    console.log("Connection ERRROR", e);
});
app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
});