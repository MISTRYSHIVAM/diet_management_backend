import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        index : true,
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    age : {
        type : Number
    },
    height : {
        type : Number
    },
    weight : {
        type : Number
    },
    healthGoal : [
        {
            type : String
        }
    ],
    gender : {
        type : String,
    },
    dietaryPreference : [
        {
            type : String
        }
    ],
    bmr : {
        type : Number
    },
    allergies : [
        {
            type : String,
        }
    ],
    role : {
        type : String,
        default : "user"
    }
},{timestamps : true})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password ,11)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName : this.userName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

export const User = mongoose.model("User",userSchema);