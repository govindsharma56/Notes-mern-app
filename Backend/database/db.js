import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/notes_db")
        console.log('mongodb connected');

    }catch(error){
        console.log("Error conecting mongoDb",error)
    }
}
