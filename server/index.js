import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
  })

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    }
);