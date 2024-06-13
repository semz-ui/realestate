import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";

import { User } from "../models/user.model";

export class Authentication {
    login = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ message: 'Please provide an email and a password' });
            }
            const user = await User.findOne({ email });
            if (user) {
                const isPasswordCorrect = await bcrypt.compare(password, user.password);
                if (isPasswordCorrect) {
                    const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: '1h' });
                    res.status(200).json({ result: user, token });
                } else {
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            next(error);
        }
    })

    register = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { firstName, lastName, email, password, confirmPassword, profileImage, role } = req.body;
            if (!email || !password || !confirmPassword) {
                res.status(400).json({ message: 'Please fill up all datas' });
            }
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                res.status(400).json({ message: 'User already exists' });
            }
            if (password !== confirmPassword) {
                res.status(400).json({ message: 'Passwords do not match' });
            }
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await User.create({ email, password: hashedPassword, firstName, lastName, profileImage, role });
            const token = jwt.sign({ email: user.email, id: user._id }, 'test', { expiresIn: '1h' });
            res.status(201).json({ result: user, token });
        } catch (error) {
            next(error);
        }
    })
}