import express from "express";
import { homepge,signup ,siginin} from "../controllers/controller.statics.js";
const Router=express.Router();
Router.get("/",homepge);
Router.get("/signup",signup);
Router.get("/login",siginin);
export default Router;