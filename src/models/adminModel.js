import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new mongoose.Schema({
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
    role : {
        type : "String",
        default : "admin"
    }
},{timestamps : true})

adminSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password ,11)
    next()
})

adminSchema.methods.isPasswordCorrect = async function () {
    return await bcrypt.compare(password , this.password)
}

adminSchema.methods.generateAccessToken = function () {
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

export const Admin = mongoose.model("Admin",adminSchema);