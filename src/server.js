import express from 'express';
import movieRoutes from './routes/movieRoutes.js';


const app =express();

app.use("/movies", movieRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
})