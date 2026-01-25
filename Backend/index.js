import express from 'express'
import notesRoute from './routes/notesRoute.js';
import { connectDB } from './database/db.js';
import cors from "cors";

const app=express();
app.use(cors({
  origin: "http://localhost:5173",   // frontend ka URL
  credentials: true
}));

app.use(express.json());
app.use('/api/route',notesRoute);



connectDB().then(()=>{
    app.listen(5001,()=>{
    console.log('server started on port:5001');
})
})

