import { asyncHandler } from '../utilities/asyncHandler.js'
import { DailyDiet } from '../models/dailyFoodModel.js';
import { dailyFood } from '../models/daily.js';

const addDailyPlan = asyncHandler( async(req,res) => {
    const daily = DailyDiet.create({
        daily : {
            breakfast : dailyFood.daily.breakfast,
            lunch : dailyFood.daily.lunch,
            dinner : dailyFood.daily.dinner,
        }
    })

    const createdDialyDiet = DailyDiet.findById(daily._id)
    if(createdDialyDiet){
        res.send("Data uploaded")
    }
    else{
        res.send("Error")
    }
})

const getDailyPlan = asyncHandler( async(req,res) =>{
    const data = await DailyDiet.find({})
    if(data){
        res.send(data)
    }
    else{
        res.send("Error")
    }

})

export {
    addDailyPlan,
    getDailyPlan
}