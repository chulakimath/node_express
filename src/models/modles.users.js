import mongoose, { Types } from "mongoose";
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniqe: true,
    },
    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });

export const USER = mongoose.model("user", usersSchema);