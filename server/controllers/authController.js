import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/errorHandler.js'

export const signUp = async (req,res, next)=> {
    const { username, email, password }=req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword});
    try{
        await newUser.save()
        res.status(201).json("User created");
    }catch (error) {
        next(errorHandler(550, 'Error from function error'+error));
    }
};