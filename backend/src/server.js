import express from "express";
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
dotenv.config();

const PORT = process.env.PORT || 5001
const app = express();
app.use(express.json());
app.use("/api/notes",notesRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})