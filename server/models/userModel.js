import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    fullname: {
        required: [true, "Fullname is required"],
        type: String,
        min: [4, "Fullname must atleast have 5 characters"],
        max: [50, "Fullname cannot me more than 50 characters"],
        lowercase: true,
        trim: true
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        unique: [true, "Email should be unique"],
        lowercase: true,
        trime: true,
    },
    password: {
        required: [true, "password is required"],
        type: String,
        minlen: [8, "Min of 8 charcaters required"],
        select: false
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    avatar: {
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export { User }