import { asyncHandler } from '../utilities/asyncHandler.js'
import { ApiResponse } from '../utilities/apiResponse.js'
import { ApiError } from '../utilities/apiError.js'
import { User } from '../models/userModel.js'

const getJwt = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()

        await user.save({ validateBeforeSave: false })

        return {accessToken}

    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req,res) => {
    const { userName , email , password } = req.body;
    console.log("email: ", email);

    if (
        [userName , email , password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ userName }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const user = await User.create({
        email, 
        password,
        userName: userName.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})

const loginUser = asyncHandler( async (req,res) => {
    // console.log(req.body)
    const { email, password } = req.body
    // console.log(email);

    if (!email && !password) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const accessToken = await getJwt(user._id)

    const loggedInUser = await User.findById(user._id).select("-password")

    const options = {
        httpOnly: true,
        secure: true
    }
    // console.log(accessToken)
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken
            },
            "User logged In Successfully"
        )
    )
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {userName , email , height , weight , age , healthGoal , bmr , dietaryPreference} = req.body;
    // res.send(req.body);
    if (!userName || !email || !height || !weight || !age || !healthGoal || !bmr || !dietaryPreference)  {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.body?._id,
        {
            $set: {
                userName,
                email,
                height,
                weight,
                age,
                healthGoal,
                bmr,
                dietaryPreference,
            }
        },
        {new: true}
        ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});

export {
    registerUser,
    loginUser,
    updateAccountDetails
}