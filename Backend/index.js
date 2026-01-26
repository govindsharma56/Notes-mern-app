import express from 'express'
import notesRoute from './routes/notesRoute.js';
import { connectDB } from './database/db.js';
import cors from "cors";

const app=express();
app.use(cors({
  origin:[ "http://localhost:5173",
     "https://ephemeral-elf-3c5c74.netlify.app"] ,  // frontend ka URL
  credentials: true
}));

app.use(express.json());
app.use('/api/route',notesRoute);


const PORT = process.env.PORT || 5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server started on port: ${PORT}`);
})
})



