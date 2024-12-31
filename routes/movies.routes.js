import express from 'express';
import { MovieCreate, MovieDelete, MovieUpdate ,MovieIndex,MovieDetail } from './controllers/movies.controller.js';
const router = express.Router();

// curd functionality of movies
// /movies/movies
// R-reading
router.get('/',MovieIndex)

router.get('/',MovieDetail)

// for creating movies
// C -create

router.post('/',MovieCreate)

// updating movies

router.put('/:id',MovieUpdate)

// D-deleting movies
router.delete('/:id',MovieDelete )

export default router;