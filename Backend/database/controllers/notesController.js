import Note from "../models/Note.js";
export async function getAllNotes(req,res){
    try{   
        const note=await Note.find();
        res.status(200).json(note);

    }catch(error){
        console.log(error);
    }

}
export async function createNotes(req,res){
        try{
            const {title,description}=req.body;
              const createNotes=await Note.create({
                title,
                description,
              });
              res.status(201).json(createNotes);

        }catch(error){
            console.log(error);
        }
}
export async function updateNotes(req,res){
    try{
        const {title,description}=req.body;
         await Note.findByIdAndUpdate(req.params.id,{title,description});
         return res.status(200).json({message:"note update successfully"});
       
    }catch(error){
        console.log(error);
    }
}
export async function deletedNotes(req,res){
    try{
        await Note.deleteOne({id:req.params.id});
        return res.status(200).json({message:"note deleted sucessfully"});
    }catch(error){
        console.log(error);
    }
}