import express from 'express';
import {
    getMovies,
    createMovie,
    getMovieById,
    updateMovie,
    deleteMovie
} from '../controllers/movie.controller.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;