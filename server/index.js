import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', () => {
    console.log("Unable to connect to database");
  });

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    }
);

app.use('/server/user', userRouter);