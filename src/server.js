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

process.on("unhandledRejection", (err) =>{
    console.error("Unhandled Rejection:", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    })
})

process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception", err);
    await disconnectDB();
    process.exit(1)
})

process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully")
    await disconnectDB();
    process.exit(1)
})
