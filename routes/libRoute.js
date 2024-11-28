import express from "express";
import { addLibrary, deleteLibraryById, showLibrary, showLibraryById, updateLibraryById } from "../controllers/libController.js";

const libRoute = express.Router()

libRoute
.get('/', showLibrary)
.get('/:libraryId', showLibraryById)
.post('/', addLibrary)
.put('/:libraryId', updateLibraryById)
.delete('/:libraryId', deleteLibraryById)

export default libRoute;
