import { Router } from "express";
import {
    registerUser,
    loginUser,
    updateAccountDetails
} from '../controller/userController.js';

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").patch(updateAccountDetails);

export default router;