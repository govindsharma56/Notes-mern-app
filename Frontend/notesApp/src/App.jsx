import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import NoteDetail from './NoteDetail';
import CreateNote from './CreateNote';
import Edit from './Edit';

 const App = () => {
  return (
    <div className='bg-[#53493e]'>
        
      <Routes>
        <Route path='/' element={<HomePage/>}/>
         <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/note-detail' element={<NoteDetail/>}/>
        <Route path='/create-note' element={<CreateNote/>}/>
      </Routes>
      
    </div>
  )
}
export default App;
