import express from "express";
import { createUser,login } from "../controllers/controller.users.js"

const Router = express.Router();
Router.post("/", createUser)
Router.post("/login", login)
export default Router;