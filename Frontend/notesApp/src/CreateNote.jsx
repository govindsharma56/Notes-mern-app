import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const CreateNote = () => {
  const [Title,setTitle]=useState('');
  const [Description,setDescription]=useState('');
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
       if(!Title.trim() || !Description.trim()){
         toast.error('all field required');
         return;
       }
       try {
           const res=await fetch('http://localhost:5001/api/route/create',{
                  method:"POST",
                  headers:{
                    'Content-Type':'application/json'
                  },
                   body: JSON.stringify({
                     title: Title,
                     description: Description
                      })
           });
           const data=await res.json();
           toast.success('note creted sucessfully');
           navigate('/');

       } catch (error) {
               toast.error('Error in creating Note');
               console.log(error);
       }
  }
  return (
    <div className="min-h-screen  bg-gray-800 pl-10">
    <div className="container mx-auto py-6">
      <div className="mb-6 text-amber-100">
        <Link to="/" className="btn btn-ghost mx-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>
      </div>
      
      <div className="card ">
        <div className="card-body">
          <h2 className="card-title text-amber-100 text-2xl mb-4">Create New Note</h2>
         <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-200 mb-2 font-medium">Title</label>
            <input
              type="text"
              placeholder="Note Title"
              className="input input-bordered bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-200 mb-2 font-medium">Description</label>
            <textarea
              placeholder="Note Description"
              className="input input-bordered bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none h-24"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-md transition"
          >
            Update Note
          </button>
        </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateNote