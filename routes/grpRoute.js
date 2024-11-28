import express from "express";
import { addGrp, deleteGroupById, showGroup, showGroupById, updateGroupById } from "../controllers/grpController.js";


const grpRoute = express.Router()

grpRoute
.get('/', showGroup)
.get('/:grpId', showGroupById)
.post('/', addGrp)
.put('/:grpId', updateGroupById)
.delete('/:grpId', deleteGroupById)

export default grpRoute;
