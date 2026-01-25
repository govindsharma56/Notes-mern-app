import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon} from "lucide-react"
const Navbar = () => {
  return (
    <header className="bg-[#1a1613] border-b border-base-content/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-green-600 font-mono tracking-tight">ThinBoard</h1>
          <div className="flex items-center gap-5">
            <Link to="/create-note" className="btn text-green-600 outline-none bg-black">
              <PlusIcon className="size-4" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar