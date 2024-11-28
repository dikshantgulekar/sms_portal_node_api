import express from "express" 
import { addMessage, showMessage, showMessageWitId } from "../controllers/messageController.js"

const messageRoute = express.Router()

messageRoute
.get('/', showMessage)
.get('/:idFromReact', showMessageWitId)
.post('/', addMessage)

export default messageRoute;
