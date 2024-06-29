import { asyncHandler } from '../utilities/asyncHandler.js'
import { ApiResponse } from '../utilities/apiResponse.js'
import { ApiError } from '../utilities/apiError.js'
import { Diet } from '../models/dietModel.js'
import { dietData } from '../models/deit.js'



const addDietData = asyncHandler( async (req,res) => {
    let count = 0;
    dietData.map( async (d) => {  
        const diet = await Diet.create({
            name : d.name,
            type : d.type,
            calories : d.calories,
            carbohydrates : d.carbohydrates,
            proteins : d.proteins,
            fats : d.fats,
            vitamins : d.vitamins,
            minerals : d.minerals,
            isVeg : d.isVeg
        })
        const createdDiet = await Diet.findById(diet._id)
        if(createdDiet) {
            count++;
        }
    })
    if(count != 0){
        res.send("Data uploaded successfully....");
    }
    else{
        res.send("Something went wrong...");
    }
})

const getDiet = asyncHandler( async (req,res) =>{
    const data = await Diet.find({});
    if(data){
        res.send(data);
    }
    else{
        res.send("somthing went wrong..")
    }
})

export {
    addDietData,
    getDiet
}