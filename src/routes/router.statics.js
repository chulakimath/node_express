import express from "express";
import { homepge,signup } from "../controllers/controller.statics.js";
const Router=express.Router();
Router.get("/",homepge);
Router.get("/signup",signup);
export default Router;