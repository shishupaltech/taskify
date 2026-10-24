
import Note from "../models/note.js";
export const getAllNotes = async(req,res)=>{
    try {
      const data = await Note.find();
      res.status(200).json(data);  
    } catch (error) {
        console.error("Error in getAllNotes controller, ",error);
        res.status(500).json({message:"internal server error"});
    }
    // res.status(200).json({message:"You got 5 notes"});
}
export const createNote = async(req,res)=>{
    
    try {
        const{title,content} = req.body;
        const newNote = new Note({title,content});
        const savedData = await newNote.save(); 
        res.status(201).json(savedData);
    } catch (error) {
        console.error("Error in createNote controller, ",error);
        res.status(500).json({message:"internal server error"});
    }
    // res.status(201).json({message:"Note created successfully!..."});

}
export const updateNote = async(req,res)=>{
    try {
        const{title,content} = req.body;
        const updatedData = await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!updateNote) return res.status(404).json({message:"note is not found!.."});
        res.status(200).json(updatedData);
    } catch (error) {
        console.error("Error in updateNote controller, ",error);
        res.status(500).json({message:"internal server error"});
    }
    // res.status(200).json({message:"Note updated successfully!..."});
}
export const deleteNote =async (req,res)=>{
    try {
        
        const deletedData = await Note.findByIdAndDelete(req.params.id);
        if(!deletedData) return res.status(404).json({message:"note is not found!.."});
        res.status(200).json(deletedData);
    } catch (error) {
        console.error("Error in deletedNote controller, ",error);
        res.status(500).json({message:"internal server error"});
    }
    // res.status(200).json({message:"Note deleted successfully!..."});
}