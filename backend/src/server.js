import express from "express";
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import connectDb from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
const app = express();
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5001
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes",notesRoutes);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})