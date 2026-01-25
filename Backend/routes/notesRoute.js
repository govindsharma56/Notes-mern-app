import express from 'express';
import { createNotes,getAllNotes,updateNotes,deletedNotes } from '../database/controllers/notesController.js';

const router=express.Router();

router.get('/read',getAllNotes);
router.post('/create',createNotes);
router.put('/update/:id',updateNotes);
router.delete('/delete/:id',deletedNotes);


export default router;