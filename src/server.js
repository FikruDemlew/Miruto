import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './config/sb.js';


config();
connectDB();


const app =express();

app.use("/movies", movieRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});

