import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://Govindsharma:12345@cluster0.rvvvk3n.mongodb.net/notesApp?appName=Cluster0')
        console.log('mongodb connected');

    }catch(error){
        console.log("Error conecting mongoDb",error)
    }
}


