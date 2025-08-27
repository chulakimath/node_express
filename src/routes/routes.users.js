import express from "express";
import { createUser } from "../controllers/controller.users.js"

const Router = express.Router();
Router.post("/", createUser)
export default Router;