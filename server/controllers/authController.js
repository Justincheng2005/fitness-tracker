import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/errorHandler.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res, next)=> {
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

export const signIn = async (req, res, next) => {
    const { emailOrUser, password } = req.body;
    try{
        const validUser = await User.findOne({$or : [
            {email: emailOrUser},
            {username: emailOrUser}
        ]});
        if (!validUser) 
            return next(errorHandler(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword)
            return next(errorHandler(401, 'Incorrect Password'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
        const { password: pass, ...noPassInfo } = validUser._doc
        res.cookie('access_tok', token, { httpOnly: true }).status(200).json(noPassInfo);
    } catch (error){
        next(error);
    }
};