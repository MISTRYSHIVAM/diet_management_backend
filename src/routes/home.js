import { Router } from "express";
import { monthData } from "../models/monthly.js";
const router = Router();

router.route("/").get((req,res) => {
    res.send(monthData)
})

export default router;