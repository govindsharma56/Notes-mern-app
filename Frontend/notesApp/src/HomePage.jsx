import React, { useState } from 'react'
import Navbar from './Navbar';
import { useEffect } from 'react';
import { PenSquare,Trash2Icon } from 'lucide-react';
import { formateDate } from './lib/utlis';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
const[Note,setNotes]=useState([]);
   const navigate=useNavigate();
 
     const handleNote=async(id)=>{
        try {
             const res=await fetch(`http://localhost:5001/api/route/delete/${id}`,{
              method:"DELETE",
             })
             const data = await res.json();
              toast.success('Note Deleted Sucessfully');
              setNotes((prev) => prev.filter((note) => note._id !== id));
             

        } catch (error) {
                toast.error('Error in deleting Note');
                 console.log(error);
                  
        }
     }
  const fetchNotes = async()=>{
        try{
            const  res=await fetch("http://localhost:5001/api/route/read");
            const data=await res.json();
            setNotes(data);
            console.log(data);
        }catch(error){
          console.log(error,"error fetching notes");
        }
  }
  const handleUpdate=async(id)=>{
    const res=await fetch(`http://localhost:5001/api/route/update/${id}`,{
        method:'UPDATE',
    })

  }

  useEffect(()=>{
    fetchNotes();
  },[])

  

  return (
    <div className='min-h-screen'><Navbar></Navbar>
      {Note.length > 0 ? (
  <div className="flex flex-row items-center gap-6 flex-wrap pt-4 pl-6">
  {Note.map((note) => (
    <div
      key={note._id}
      className="card w-90 bg-neutral text-neutral-content shadow-lg hover:shadow-2xl transition-all duration-200 border-t-4 border-green-500"
    >
      <div className="card-body space-y-2">
        <h2 className="card-title text-white text-lg font-semibold">
          {note.title}
        </h2>

        <p className="text-gray-300">{note.description}</p>

        <span className="text-gray-400 text-sm">
          {formateDate(new Date(note.createdAt))}
        </span>

        <div className="flex items-center gap-4 pt-2">
          <button onClick={()=>navigate(`/edit/${note._id}`)}>
          <PenSquare className="size-5 cursor-pointer text-green-400 hover:text-green-500" />
          </button>
          <button className="btn btn-sm btn-ghost text-red-400 hover:text-red-500" onClick={()=>handleNote(note._id)}>
            <Trash2Icon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
) : (
  <div className="text-center py-10 text-gray-400">No notes found.</div>
)}
    </div>
  )
}
export default HomePage;
