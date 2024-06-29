import { Router } from 'express';
import {
    addDailyPlan,
    getDailyPlan
} from '../controller/plansController.js'

const router = Router();

router.route('/adddailyplan').post(addDailyPlan);
router.route('/getdailyplan').get(getDailyPlan);

export default  router;