import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';
import authRouters from './routes/authRouter.js'


config();
connectDB();


const app =express();
// Body parsing middlwares

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//API Routes
app.use("/movies", movieRoutes);
app.use("/auth", authRouters);

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
