import mongoose from "mongoose";

const MealSchema = new Schema({
    name: { type: String },
    calories: { type: Number },
    carbohydrates: { type: Number },
    proteins: { type: Number },
    fats: { type: Number },
    vitamins: {
        A: { type: Number },
        B: { type: Number },
        C: { type: Number }
    },
    minerals: {
        iron: { type: Number },
        calcium: { type: Number },
        potassium: { type: Number }
    },
    isVeg: { type: Boolean }
});

const monthlyFoodSchema = new mongoose.Schema({
    
})

export const MonthlyDiet = mongoose.model("monthlydiet",monthlyFoodSchema);