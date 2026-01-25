import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch all notes and prefill the form for this id
  const fetchNote = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/route/read");
      const data = await res.json(); // all notes
      const note = data.find((note) => note._id === id); // find note by id
      if (note) {
        setTitle(note.title);
        setDescription(note.description);
      } else {
        toast.error("Note not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching note");
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/api/route/update/${id}`, {
        method: "PUT", // backend update method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        toast.success("Note updated successfully");
        navigate("/"); // redirect to HomePage
      } else {
        toast.error("Error updating note");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating note");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 pl-10">
      <div className="container mx-auto py-6">
        <div className="mb-6 text-amber-100">
          <Link to="/" className="btn btn-ghost mx-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-amber-100 text-2xl mb-4">
              Update Note
            </h2>
             <form onSubmit={handleUpdate} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-200 mb-2 font-medium">Title</label>
            <input
              type="text"
              placeholder="Note Title"
              className="input input-bordered bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-200 mb-2 font-medium">Description</label>
            <textarea
              placeholder="Note Description"
              className="input input-bordered bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none h-24"
              value={description}
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
  );
};

export default Edit;
