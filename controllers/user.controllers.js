import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        if (!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: 'This users email is already exists' })
        }
        // 2. Hash the password
        const hashPassword = await bcrypt.hash(password, 10);
        // 1. Create new user
        await User.create({
            fullName,
            email,
            password: hashPassword
        });
        return res.status(201).json({
            success: true, message: 'User registered successfully'
        })

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', errorMessage: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password'
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password'
            })
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        // save token in cookie
        return res.status(200).cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        }).json({
            success: true,
            message: `Welcome Back ${user.fullName}`

        })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', errorMessage: error.message })
    }
}
