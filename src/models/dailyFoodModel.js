import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define a schema for each meal item
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

// Define a schema for the daily meals
const DailyDietSchema = new Schema({
    daily : {
        breakfast: [MealSchema],  // Array of MealSchema for breakfast
        lunch: [MealSchema],      // Array of MealSchema for lunch
        dinner: [MealSchema]      // Array of MealSchema for dinner
    }
});

// Create a Mongoose model based on the DailyDietSchema
export const DailyDiet = mongoose.model('dailyDiet', DailyDietSchema);
