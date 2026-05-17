import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        if (!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        // Check if user already exists
        const user = await User.findOne(email);
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