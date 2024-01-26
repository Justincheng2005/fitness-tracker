import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import authRouter from './routes/authRoute.js';
/*import liftRouter from './routes/liftRoute.js'*/
dotenv.config();

const app = express();

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routes
/*app.use('/server/lifts', liftRouter)*/
app.use('/server/user', userRouter);
app.use('/server/auth', authRouter);

mongoose.connect(process.env.DATABASE)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to db and running on port ", process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errMessage = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        errMessage,
    });
});