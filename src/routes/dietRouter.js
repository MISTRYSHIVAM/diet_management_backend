import { Router } from "express";
import {
    addDietData,
    getDiet
} from '../controller/dietController.js'

const router = Router();

router.route('/adddiet').post(addDietData);
router.route('/getdiet').get(getDiet);

export default  router;