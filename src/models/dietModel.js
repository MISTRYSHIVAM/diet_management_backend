import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    name : {
        type : String
    },
    type : {
        type : String
    },
    calories :{
        amount : {
            type : Number
        },
        unit : {
            type : String
        }
    },
    carbohydrates : {
        amount : {
            type : Number
        },
        unit : {
            type :String
        }
    },
    protenis : {
        amount : {
            type : Number
        },
        unit : {
            type : String
        }
    },
    fats : {
        amount : {
            type : Number
        },
        unit : {
            type : String
        }
    },
    vitamins : {
        A : {
            type : Number,
        },
        B : {
            type : Number,
        },
        C : {
            type : Number,
        }
    },
    minerals : {
        iron : {
            amount : {
                type : Number
            },
            unit : {
                type : String
            }
        },
        calcium : {
            amount : {
                type : Number
            },
            unit : {
                type : String
            }
        },
        potassium : {
            amount : {
                type : Number
            },
            unit : {
                type : String
            }
        }
    },
    isVeg : {
        type : Boolean
    }

})

export const Diet = mongoose.model("diet",dietSchema);