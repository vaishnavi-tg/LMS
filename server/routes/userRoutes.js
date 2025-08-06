import { Router } from "express"
import { login, logout, register, profile } from "../controllers/userControllers.js"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/me", profile)

export default router