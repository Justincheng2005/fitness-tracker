import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        unique: 'Email already exists',
        match: [/.+\@.+\...+/, 'Please enter a valid email address'],
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
});

export default mongoose.model('User', userSchema)