import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:[true, 'Please provide your full name']
    },
    email:{
        type:String,
        required:[true, 'please enter a valid email address'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'Password must be at least 6 characters long'],
        minLength:6,
    }
})

const User = mongoose.model('User', userSchema);

export default User;    