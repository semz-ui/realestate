import { Document, model, Schema } from "mongoose";

export interface Euser {
    firstName: string;
    lastName: string;
    profileImage: string;
    email: string;
    password: string;
    role: string;
}

export default interface UserModel extends Document, Euser { }

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileImage: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
})

export const User = model<UserModel>('User', userSchema);