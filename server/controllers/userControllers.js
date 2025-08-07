import AppError from "../utils/appError"
import { User } from "../models/userModel"

const register = async (req, res) => {
    const { fullname, email, password } = req.body

    if (!fullname || !email || !password) {
        return next(new AppError("All fields are required", 400))
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        return next(new AppError("User already exists with this email", 400))
    }

    const user = await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        avatar: {
            public_id: email,
            secure_url: "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg"
        }
    })

    
    if (!user) {
        return next(new AppError("User registration failed please try again", 400))
    }

    await user.save()

    user.password = undefined
    res.status(401).json({
        success: true,
        msg: "User created Successfully",
        user
    })
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

const profile = (req, res) => {

}

export { login, logout, profile, register }