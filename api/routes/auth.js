import express from "express";
import { signUp, signIn, signJWTForUser } from "../middleware/auth";

const router = new express.Router();

// Sign up
router.post("/auth/sign-up", signUp, signJWTForUser);

// Sign in
router.post("/auth", signIn, signJWTForUser);

export default router;
