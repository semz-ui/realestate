import express from "express";
import { Authentication } from "../controllers/user.controller";
const route = express.Router();
const { login, register } = new Authentication();

route.post("/login", login);
route.post("/register", register);
export default route;