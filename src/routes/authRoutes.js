import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

// POST api/v1/auth/register
router.post("/register", AuthController.register);

// POST api/v1/auth/login
router.post("/login", AuthController.login);

export default router;
